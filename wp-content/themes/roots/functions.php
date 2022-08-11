<?php
function add_css() {
    wp_register_style('roots', get_template_directory_uri() . '/frontend/dist/css/styles.css', array(), false, 'all');
    wp_enqueue_style( 'roots' );
}

add_action( 'wp_enqueue_scripts', 'add_css' );


function add_js() {
    wp_register_script('roots', get_template_directory_uri() . '/frontend/dist/js/roots.js', array(), false, true);
    wp_enqueue_script('roots');
}

add_action( 'wp_enqueue_scripts', 'add_js' );



?>
