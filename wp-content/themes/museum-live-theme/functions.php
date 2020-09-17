<?php

function museum_files() {
	wp_enqueue_style("custom-google-font", "//fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
	wp_enqueue_style("theme-font", "//fonts.googleapis.com/css2?family=Roboto+Slab:wght@100;200;300;400&display=swap");
	wp_enqueue_style("bootstrap", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
	wp_enqueue_style("museum_main_styles", get_stylesheet_uri());
	
	wp_enqueue_script('jquery', '//code.jquery.com/jquery-1.11.1.min.js', array(), null, true);
	wp_enqueue_script('bootstrap-js', '//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js', array(), null, true);

	wp_enqueue_script('slider-control', get_template_directory_uri() . '/js/sliderControl.js', array('jquery'));
}

add_action("wp_enqueue_scripts", "museum_files");

function museum_post_types() {
	register_post_type("entry", array(
		"show_in_rest" => true,
		"support" => array("title", "editor", "excerpt"),
		"rewrite" => array("slug", "entries"),
		"has_archive" => true,
		"public" => true,
		"labels" => array(
			"name" => "Entries",
			"add_new_item" => "Add New Entry",
			"edit_item" => "Edit Entry",
			"all_items" => "All Entries",
			"singular_name" => "Entry"
		),
		"menu_icon" => "dashicons-calendar"
	));
	register_taxonomy_for_object_type("post_tag", "entry");
}

add_action("init", "museum_post_types");

//Redirect subscriber's account
add_action("admin_init", "redirectSubsToFrontend");

function redirectSubsToFrontend() {
    $ourCurrentUser = wp_get_current_user(); 
    if (count($ourCurrentUser->roles) == 1 AND $ourCurrentUser->roles[0] == "subscriber" ) {
          wp_redirect(site_url("/"));
          exit;
     }
}

add_action("wp_loaded", "noSubsAdminBar");

function noSubsAdminBar() {
    $ourCurrentUser = wp_get_current_user(); 
    if (count($ourCurrentUser->roles) == 1 AND $ourCurrentUser->roles[0] == "subscriber" ) {
          show_admin_bar(false);
     }
}

//customize login screen
add_filter("login_headerurl", "museumHeaderUrl");

function museumHeaderUrl() {
    return esc_url(site_url("/"));
}

add_action("login_enqueue_scripts", "museumLoginCSS");

function museumLoginCSS() {
    wp_enqueue_style("museum_main_styles", get_theme_file_uri("/css/login.css") );
}