<?php

function museum_files() {
    wp_enqueue_style("custom-google-font", "//fonts.googleapis.com/css2?family=Lato:wght@400;700&display=swap");
    wp_enqueue_style("bootstrap", "//maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css");
    wp_enqueue_style("museum_main_styles", get_stylesheet_uri());
}

add_action("wp_enqueue_scripts", "museum_files");