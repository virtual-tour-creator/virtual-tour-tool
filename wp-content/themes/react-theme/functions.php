<?php

function museum_files() {
	wp_localize_script("museum-js", "museumData", array(
		"root_url" => get_site_url(),
		"nonce" => wp_create_nonce("wp_rest")
	));
}

add_action("wp_enqueue_scripts", "museum_files");


function museum_features() {
	add_theme_support("title-tag");
	add_theme_support("post-thumbnails");
	add_image_size("entry-thumbnail", 500, 500, true);
}

add_action("after_setup_theme", "museum_features");

function museum_post_types() {
	register_post_type("stop", array(
		"show_in_rest" => true,
		"supports" => array("title", "editor", "thumbnail", "author"),
		"rewrite" => array("slug", "stops"),
		"has_archive" => true,
		"public" => true,
		"labels" => array(
			"name" => "Stops",
			"add_new_item" => "Add New Stop",
			"edit_item" => "Edit Stop",
			"all_items" => "All Stops",
			"singular_name" => "Stop"
		),
		"menu_icon" => "dashicons-location"
	));
	register_taxonomy_for_object_type("post_tag", "stop");
	
	register_post_type("tour", array(
		"show_in_rest" => true,
		"supports" => array("title", "editor", "thumbnail", "author"),
		"rewrite" => array("slug", "tours"),
		"has_archive" => false,
		"public" => true,
		"labels" => array(
			"name" => "Tours",
			"add_new_item" => "Add New Tour",
			"edit_item" => "Edit Tour",
			"all_items" => "All Tours",
			"singular_name" => "Tour"
		),
		"menu_icon" => "dashicons-calendar"
	));
}

add_action("init", "museum_post_types");

function museum_custom_rest() {
	register_rest_field("stop", "tag_names", array(
		"get_callback" => function() {return [];}
	));
	register_rest_field("stop", "thumbnail_url", array(
		"get_callback" => function() {return "";}
	));
	register_rest_field("stop", "medium_url", array(
		"get_callback" => function() {return "";}
	));
    register_rest_field("tour", "author", array(
        "get_callback" => function() {return [];}
    ));
}

add_action("rest_api_init", "museum_custom_rest");

class MediaData
{
    public $thumbnail_url;
    public $full_url;
    public $file_url;
    public $title;
    public $caption;
    public $alt_text;
    public $type;
    public $format;
}

function create_ACF_meta_in_REST() {
    $postypes_to_exclude = ['acf-field-group','acf-field'];
    $extra_postypes_to_include = ["page"];
    $post_types = array_diff(get_post_types(["_builtin" => false], 'names'),$postypes_to_exclude);

    array_push($post_types, $extra_postypes_to_include);

    foreach ($post_types as $post_type) {
    	register_rest_field("stop", "acf_media", array(
			"get_callback" => function($object) {
				$ID = $object['id'];
				$fields = get_fields($ID)['media'];
				if ($fields == "") return [];
				$area = [];
    			foreach ($fields as $field) {
    				$metadata = wp_get_attachment_metadata($field->ID);
    				$thumbnail = $metadata['sizes']['thumbnail']['file'];
    				$dir = dirname($metadata['file']) . "/";
					$md = new MediaData();
                    
					$md->title = $field->post_title;
					$md->caption = wp_get_attachment_caption($field->ID);

					$pieces = explode("/", $field->guid);
					$filename = end($pieces);
					$part2 = prev($pieces);
					$part1 = prev($pieces);
					$md->full_url = get_site_url() . "/wp-content/uploads/" . $part1 . '/' . $part2 . '/' . basename($field->guid);
					$md->thumbnail_url = get_site_url() . "/wp-content/uploads/" . $dir . $thumbnail;
        			
        			$pieces = explode("/", $field->post_mime_type);
        			$md->type = $pieces[0];
        			$md->format = $pieces[1];

                    if ($md->type != 'image') {
                        $md->thumbnail_url = get_the_post_thumbnail_url($field->ID, 'thumbnail');
                        $md->file_url = $md->full_url;
                        $md->full_url = get_the_post_thumbnail_url($field->ID, 'full');
                    }

        			$area[] = $md;
    			}
    			return $area;
			}
		));

        register_rest_field( $post_type, 'ACF', [
            'get_callback'    => 'expose_ACF_fields',
            'schema'          => null,
       ]
     );
    }

}

function expose_ACF_fields( $object ) {
    $ID = $object['id'];
    return get_fields($ID);
}

add_action( 'rest_api_init', 'create_ACF_meta_in_REST' );


// Enqueue Theme JS with React Dependency
add_action( 'wp_enqueue_scripts', 'my_enqueue_theme_js' );
function my_enqueue_theme_js() {
  wp_enqueue_script(
    'my-theme-frontend',
    get_stylesheet_directory_uri() . '/build/index.js',
    ['wp-element'],
    null,
    true
  );
}

function ag_filter_post_json($response, $post, $context) {
    $tags = wp_get_object_terms($post->ID, 'post_tag');
    $response->data['tag_names'] = [];

    foreach ($tags as $tag) {
        $response->data['tag_names'][] = array($tag->name, $tag->slug);
    }
    $response->data['thumbnail_url'] = get_the_post_thumbnail_url($post->ID, 'entry-thumbnail');
	$response->data['medium_url'] = get_the_post_thumbnail_url($post->ID, 'medium_large');
    return $response;
}

add_filter( 'rest_prepare_stop', 'ag_filter_post_json', 10, 3 );

function ag_filter_tour_json($response, $post, $context) {
    $author_id = $post->post_author;
    $author_name = get_the_author_meta( 'display_name', $author_id );
    $response->data['author'] = array($author_id, $author_name);
    return $response;
}

add_filter( 'rest_prepare_tour', 'ag_filter_tour_json', 10, 3 );


function login_redirect() {
    if(!is_user_logged_in()) {
		global $wp;
		$current_url = add_query_arg( $wp->query_string, '', home_url( $wp->request ) );
		if( !is_user_logged_in() ) { 
			wp_redirect( home_url() . '/wp-login.php?redirect_to='. $current_url );
		}
	}
}

add_action( 'wp', 'login_redirect' );

function wpb_change_title_text( $title ){
    $screen = get_current_screen();
  
    if  ( 'stop' == $screen->post_type ) {
        $title = 'Add Stop Title';
    }
  
  	if  ( 'tour' == $screen->post_type ) {
        $title = 'Add Tour Title';
    }
    return $title;
}
  
add_filter( 'enter_title_here', 'wpb_change_title_text' );


function wpb_change_content_text( $placeholder ){
    $screen = get_current_screen();
  
    if  ( 'stop' == $screen->post_type ) {
        $placeholder = 'Add Description. This is visible when you view a Stop in presentation mode.';
    }
  
  	if  ( 'tour' == $screen->post_type ) {
        $placeholder = 'Do NOT edit';
    }
    return $placeholder;
}
  
add_filter( 'write_your_story', 'wpb_change_content_text' );


function remove_toolbar()
{
    global $wp_admin_bar;
    $wp_admin_bar->remove_menu('new-content');
    $wp_admin_bar->remove_menu('comments');
    $wp_admin_bar->remove_menu('archive');
}

add_action( 'wp_before_admin_bar_render', 'remove_toolbar' );

function cc_gutenberg_register_files() {
    // script file
    wp_register_script(
        'cc-block-script',
        get_stylesheet_directory_uri() .'/block-display.js',
        array( 'wp-blocks', 'wp-edit-post' )
    );
    // register block editor script
    register_block_type( 'cc/ma-block-files', array(
        'editor_script' => 'cc-block-script'
    ) );

}
add_action( 'init', 'cc_gutenberg_register_files' );

// Replace Howdy Greeting
function replace_howdy_greeting( $wp_admin_bar ) {
  $my_account=$wp_admin_bar->get_node('my-account');
  $newtitle = str_replace( 'Howdy,', '', $my_account->title );
  $wp_admin_bar->add_node( array(
    'id' => 'my-account',
    'title' => $newtitle,
  ) );
}
add_filter( 'admin_bar_menu', 'replace_howdy_greeting', 12 );

// custom header
add_theme_support('custom-header');

$header_info = array(
    'width'         => 1314,
    'height'        => 478,
    'default-image' => 'https://mediad.publicbroadcasting.net/p/wesa/files/styles/x_large/public/201804/clayton_1-300_cmyk.jpg',
    // get_template_directory_uri() . '/images/sunset.jpg',
);
add_theme_support( 'custom-header', $header_info );

// custom logo
add_theme_support( 'custom-logo' );

function themename_custom_logo_setup() {
    $defaults = array(
        'height'      => 76,
        'width'       => 400,
        'flex-height' => true,
        'flex-width'  => true,
        'header-text' => array( 'site-title', 'site-description' ),
        'unlink-homepage-logo' => true,
    );
 add_theme_support( 'custom-logo', $defaults );
}
add_action( 'after_setup_theme', 'themename_custom_logo_setup' );


function custom_login_stylesheet() {
    wp_enqueue_style( 'custom-login', get_stylesheet_directory_uri() . '/login/login.css' );
}
add_action( 'login_enqueue_scripts', 'custom_login_stylesheet' );

// hide screen options
add_filter( 'screen_options_show_screen', '__return_false' );

// add get started page
add_action( 'admin_menu', 'instruction_menu_page' );
 
function instruction_menu_page() {
 
    add_menu_page(
        'Get Started', // page <title>Title</title>
        'Get Started', // menu link text
        'read', // capability to access the page
        'get-started', // page URL slug
        'instruction_page_content', // callback function /w content
        'dashicons-star-half', // menu icon
        5 // priority, display at top
    );
 
}
 
function instruction_page_content(){
 
    echo '
        <div class="wrap">
        <h1>Virtual Tour Creator Get Started Guide</h1>
        <div id="dashboard-widgets" class="metabox-holder">
            <div id="postbox-container-1" class="postbox-container">
                <div id="normal-sortables" class=" ui-sortable empty-container" data-emptystring="" style="outline:none;min-height:300px;">
                    <iframe src="https://www.youtube-nocookie.com/embed/eo3GGMmj0Oc" allowfullscreen="" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;" width="100%" height="250"></iframe>
                </div>
            </div>
            <div id="postbox-container-2" class="postbox-container">
            <div id="normal-sortables" class=" ui-sortable empty-container" data-emptystring="" style="outline:none;min-height:300px;padding:15px">
                <h2>To get started follow these steps in this video</h2>
                <ul>
                <li><p>Login and see tours on the homepage</p></li>
                <li><p>Learn how to upload media</p></li>
                <li><p>Make your first tour stop</p></li>
                <li><p>Add your stop to your tour your fist tour tour</p></li>
                <li><p><b>Repeat!</b></p></li>
                </ul>
            </div>
            </div>
        <div id="postbox-container-3" class="postbox-container">
        <div id="normal-sortables" class=" ui-sortable empty-container" data-emptystring="" style="outline:none;min-height:300px;padding:15px">
            <h2>Helpful Links in the <a href="https://docs.google.com/document/d/1F_ZZ2qpjSHwBSbP-_2fgqVGo5ZoKhsojRXPwTGKs-qM/edit?usp=sharing" target="_blank">Documentation ➜</a></h2>
            <ul>
            <li><p><a href="https://docs.google.com/document/d/1F_ZZ2qpjSHwBSbP-_2fgqVGo5ZoKhsojRXPwTGKs-qM/edit#heading=h.4dd2mejtetwe" target="_blank">Helpful Zoom Links</a></p></li>
            <li><p><a href="https://docs.google.com/document/d/1F_ZZ2qpjSHwBSbP-_2fgqVGo5ZoKhsojRXPwTGKs-qM/edit#heading=h.lmln79hk850t" target="_blank">Host 1-Pager</a></p></li>
            <li><p><a href="https://docs.google.com/document/d/1F_ZZ2qpjSHwBSbP-_2fgqVGo5ZoKhsojRXPwTGKs-qM/edit#heading=h.fwmhcv7zpvio" target="_blank">Educator Best Practices</a></p></li>
            <li><p><a href="https://docs.google.com/document/d/1F_ZZ2qpjSHwBSbP-_2fgqVGo5ZoKhsojRXPwTGKs-qM/edit#heading=h.gf8lkz5znlr2" target="_blank">Common Bugs and Errors</a></p></li>
            <li><p><a href="https://docs.google.com/document/d/1F_ZZ2qpjSHwBSbP-_2fgqVGo5ZoKhsojRXPwTGKs-qM/edit#heading=h.efhtyc42os32" target="_blank">Glossary</a></p></li>
            </ul>
        </div>
        </div>
        </div>
        </div>';
 
}

// add_action( "load-upload.php", 'sp_help_tabs');


// function sp_help_tabs() {

//     $screen = get_current_screen();
//     $screen->add_help_tab(
//         array(
//             'id'      => 'sp_overview',
//             'title'   => 'Overview',
//             'content' => '<p>Test</p>'
//         )
//     );

// }
