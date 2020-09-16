<?php

function museum_files() {
    wp_enqueue_style("custom-google-font", "//fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
    wp_enqueue_style("bootstrap", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    wp_enqueue_style("museum_main_styles", get_stylesheet_uri());
}

add_action("wp_enqueue_scripts", "museum_files");

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