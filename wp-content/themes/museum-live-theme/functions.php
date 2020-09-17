<?php

function museum_files() {
    wp_enqueue_style("custom-google-font", "//fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
    wp_enqueue_style("bootstrap", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    wp_enqueue_style("museum_main_styles", get_stylesheet_uri());
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