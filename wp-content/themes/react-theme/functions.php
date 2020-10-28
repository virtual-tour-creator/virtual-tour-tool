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
		"supports" => array("title", "editor", "thumbnail"),
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
		"supports" => array("title", "editor", "thumbnail"),
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
}

add_action("rest_api_init", "museum_custom_rest");

class MediaData
{
    public $thumbnail_url;
    public $full_url;
    public $title;
    public $caption;
    public $alt_text;
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
					//$md->title = $metadata['image_meta']['title'];
					$md->title = $field->post_title;
					$md->caption = $metadata['image_meta']['caption'];
					$md->full_url = get_site_url() . "/wp-content/uploads/" . $metadata['file'];
					$md->thumbnail_url = get_site_url() . "/wp-content/uploads/" . $dir . $thumbnail;
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
        $response->data['tag_names'][] = $tag->name;
    }
    $response->data['thumbnail_url'] = get_the_post_thumbnail_url($post->ID, 'thumbnail');

    return $response;
}

add_filter( 'rest_prepare_stop', 'ag_filter_post_json', 10, 3 );


function login_redirect() {
    if(!is_user_logged_in()){
		auth_redirect();
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
