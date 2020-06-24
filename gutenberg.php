<?php
/**
 * Plugin Name: Gutenberg
 * Plugin URI: https://github.com/WordPress/gutenberg
 * Description: Printing since 1440. This is the development plugin for the new block editor in core.
 * Requires at least: 5.3
 * Requires PHP: 5.6
 * Version: 10.1.1
 * Author: Gutenberg Team
 * Text Domain: gutenberg
 *
 * @package gutenberg
 */

### BEGIN AUTO-GENERATED DEFINES
defined( 'GUTENBERG_DEVELOPMENT_MODE' ) or define( 'GUTENBERG_DEVELOPMENT_MODE', true );
### END AUTO-GENERATED DEFINES

gutenberg_pre_init();

/**
 * Gutenberg's Menu.
 *
 * Adds a new wp-admin menu page for the Gutenberg editor.
 *
 * @since 0.1.0
 */
function gutenberg_menu() {
	add_menu_page(
		'Gutenberg',
		'Gutenberg',
		'edit_posts',
		'gutenberg',
		'',
		'dashicons-edit'
	);

	add_submenu_page(
		'gutenberg',
		__( 'Demo', 'gutenberg' ),
		__( 'Demo', 'gutenberg' ),
		'edit_posts',
		'gutenberg'
	);

	if ( gutenberg_use_widgets_block_editor() ) {
		add_theme_page(
			__( 'Widgets', 'gutenberg' ),
			__( 'Widgets', 'gutenberg' ),
			'edit_theme_options',
			'gutenberg-widgets',
			'the_gutenberg_widgets'
		);
		remove_submenu_page( 'themes.php', 'widgets.php' );
	}

	if ( get_option( 'gutenberg-experiments' ) ) {
		if ( array_key_exists( 'gutenberg-navigation', get_option( 'gutenberg-experiments' ) ) ) {
			add_submenu_page(
				'gutenberg',
				__( 'Navigation (beta)', 'gutenberg' ),
				__( 'Navigation (beta)', 'gutenberg' ),
				'edit_theme_options',
				'gutenberg-navigation',
				'gutenberg_navigation_page'
			);
		}
	}
	if ( current_user_can( 'edit_posts' ) ) {
		add_submenu_page(
			'gutenberg',
			__( 'Support', 'gutenberg' ),
			__( 'Support', 'gutenberg' ),
			'edit_posts',
			__( 'https://wordpress.org/support/plugin/gutenberg/', 'gutenberg' )
		);
		add_submenu_page(
			'gutenberg',
			__( 'Documentation', 'gutenberg' ),
			__( 'Documentation', 'gutenberg' ),
			'edit_posts',
			'https://developer.wordpress.org/block-editor/'
		);
	}

	add_submenu_page(
		'gutenberg',
		__( 'Experiments Settings', 'gutenberg' ),
		__( 'Experiments', 'gutenberg' ),
		'edit_posts',
		'gutenberg-experiments',
		'the_gutenberg_experiments'
	);
}
add_action( 'admin_menu', 'gutenberg_menu', 9 );

/**
 * Site editor's Menu.
 *
 * Adds a new wp-admin menu item for the Site editor.
 *
 * @since 9.4.0
 */
function gutenberg_site_editor_menu() {
	if ( gutenberg_is_fse_theme() ) {
		add_menu_page(
			__( 'Site Editor (beta)', 'gutenberg' ),
			sprintf(
			/* translators: %s: "beta" label. */
				__( 'Site Editor %s', 'gutenberg' ),
				'<span class="awaiting-mod">' . __( 'beta', 'gutenberg' ) . '</span>'
			),
			'edit_theme_options',
			'gutenberg-edit-site',
			'gutenberg_edit_site_page',
			'dashicons-layout'
		);
	}
}
add_action( 'admin_menu', 'gutenberg_site_editor_menu', 9 );

/**
 * Modify WP admin bar.
 *
 * @param WP_Admin_Bar $wp_admin_bar Core class used to implement the Toolbar API.
 */
function modify_admin_bar( $wp_admin_bar ) {
	if ( gutenberg_use_widgets_block_editor() ) {
		$wp_admin_bar->add_menu(
			array(
				'id'   => 'widgets',
				'href' => admin_url( 'themes.php?page=gutenberg-widgets' ),
			)
		);
	}
}
add_action( 'admin_bar_menu', 'modify_admin_bar', 40 );


remove_action( 'welcome_panel', 'wp_welcome_panel' );
/**
 * Modify Dashboard welcome panel.
 *
 * When widgets are merged in core this should go into `wp-admin/includes/dashboard.php`
 * and replace the widgets link in the `wp_welcome_panel` checking for the same condition,
 * because then `gutenberg_use_widgets_block_editor` will exist in core.
 */
function modify_welcome_panel() {
	ob_start();
	wp_welcome_panel();
	$welcome_panel = ob_get_clean();
	if ( gutenberg_use_widgets_block_editor() ) {
		echo str_replace(
			admin_url( 'widgets.php' ),
			admin_url( 'themes.php?page=gutenberg-widgets' ),
			$welcome_panel
		);
	} else {
		echo $welcome_panel;
	}
}
add_action( 'welcome_panel', 'modify_welcome_panel', 40 );

/**
 * Display a version notice and deactivate the Gutenberg plugin.
 *
 * @since 0.1.0
 */
function gutenberg_wordpress_version_notice() {
	echo '<div class="error"><p>';
	/* translators: %s: Minimum required version */
	printf( __( 'Gutenberg requires WordPress %s or later to function properly. Please upgrade WordPress before activating Gutenberg.', 'gutenberg' ), '5.3.0' );
	echo '</p></div>';

	deactivate_plugins( array( 'gutenberg/gutenberg.php' ) );
}

/**
 * Display a build notice.
 *
 * @since 0.1.0
 */
function gutenberg_build_files_notice() {
	echo '<div class="error"><p>';
	_e( 'Gutenberg development mode requires files to be built. Run <code>npm install</code> to install dependencies, <code>npm run build</code> to build the files or <code>npm run dev</code> to build the files and watch for changes. Read the <a href="https://github.com/WordPress/gutenberg/blob/HEAD/docs/contributors/getting-started.md">contributing</a> file for more information.', 'gutenberg' );
	echo '</p></div>';
}

/**
 * Verify that we can initialize the Gutenberg editor , then load it.
 *
 * @since 1.5.0
 */
function gutenberg_pre_init() {
	global $wp_version;
	if ( defined( 'GUTENBERG_DEVELOPMENT_MODE' ) && GUTENBERG_DEVELOPMENT_MODE && ! file_exists( __DIR__ . '/build/blocks' ) ) {
		add_action( 'admin_notices', 'gutenberg_build_files_notice' );
		return;
	}

	// Get unmodified $wp_version.
	include ABSPATH . WPINC . '/version.php';

	// Strip '-src' from the version string. Messes up version_compare().
	$version = str_replace( '-src', '', $wp_version );

	if ( version_compare( $version, '5.3.0', '<' ) ) {
		add_action( 'admin_notices', 'gutenberg_wordpress_version_notice' );
		return;
	}

	require_once __DIR__ . '/lib/load.php';
}

/**
 * Outputs a WP REST API nonce.
 */
function gutenberg_rest_nonce() {
	exit( wp_create_nonce( 'wp_rest' ) );
}
add_action( 'wp_ajax_gutenberg_rest_nonce', 'gutenberg_rest_nonce' );


/**
 * Exposes the site icon url to the Gutenberg editor through the WordPress REST
 * API. The site icon url should instead be fetched from the wp/v2/settings
 * endpoint when https://github.com/WordPress/gutenberg/pull/19967 is complete.
 *
 * @since 8.2.1
 *
 * @param WP_REST_Response $response Response data served by the WordPress REST index endpoint.
 * @return WP_REST_Response
 */
function register_site_icon_url( $response ) {
	$data                  = $response->data;
	$data['site_icon_url'] = get_site_icon_url();
	$response->set_data( $data );
	return $response;
}

add_filter( 'rest_index', 'register_site_icon_url' );

add_theme_support( 'widgets-block-editor' );


/**
 * Parses a posts blocks and then detects whether the post includes
 * a classic block.
 *
 * @param WP_Post $post The post to check for classic blocks.
 */
function gutenberg_does_post_have_classic_block( $post ) {
	$parsed = parse_blocks( $post->post_content );

	/**
	 * Recursive function to walk the block tree and detect whether
	 * a classic block exists.
	 *
	 * @param WP_Block_Parser_Block $block The block to check.
	 */
	function check_for_classic_block_recursive( $block ) {
		$block_name = $block['blockName'];
		if ( is_null( $block_name ) || 'core/freeform' === $block_name ) {
			return true;
		}
		if ( empty( $block->children ) ) {
			return false;
		}

		foreach ( $block->children as $child ) {
			if ( check_for_classic_block_recursive( $child ) ) {
				return true;
			}
		}

		return false;
	}

	foreach ( $parsed as $block ) {
		if ( check_for_classic_block_recursive( $block ) ) {
			return true;
		}
	}

	return false;
}

/**
 * Prints TinyMCE scripts when we're outside of the block editor using
 * the default behavior by calling to the default action function from core.
 * Otherwise, when in the block editor, only print TinyMCE support scripts.
 *
 * Support scripts include translations and a full list of the URIs of
 * TinyMCE JS scripts that need to be loaded for the full dependency.
 *
 * Under some compression settings, TinyMCE may be split into two
 * separate scripts, so we handle that programatically here by checking
 * the `deps` list on the WP_Dependency instance for wp-tinymce.
 *
 * @since 7.9.1
 */
function gutenberg_print_tinymce_scripts() {
	global $wp_meta_boxes, $post_type, $post;
	$current_screen = get_current_screen();

	if ( ! $current_screen->is_block_editor() ) {
		wp_print_tinymce_scripts();
		return;
	}

	foreach ( $wp_meta_boxes[ $post_type ] as $position ) {
		foreach ( $position as $priority ) {
			foreach ( $priority as $box ) {
				if ( ! $box ) {
					continue;
				}

				$is_back_compat_box = isset( $box['args']['__back_compat_meta_box'] ) && true === $box['args']['__back_compat_meta_box'];

				if ( ! $is_back_compat_box ) {
					// We've found a true meta box which may depend on TinyMCE.
					wp_print_tinymce_scripts();
					return;
				}
			}
		}
	}

	if ( gutenberg_does_post_have_classic_block( $post ) ) {
		// If the classic block is already used then we cannot delay loading TinyMCE.
		wp_print_tinymce_scripts();
		return;
	}

	// Otherwise we've found a situation where we can asynchronously load
	// TinyMCE and should only print support scripts.

	// Translations.
	echo '<script type="text/javascript">\n' .
		'window.wpMceTranslation = function() {\n' .
			_WP_Editors::wp_mce_translation() .
		'\n};\n';

	// Full list of TinyMCE JS scripts to load in order.
	$wp_scripts  = wp_scripts();
	$tinymce_dep = $wp_scripts->registered['wp-tinymce'];

	echo 'window.wpTinyMCEOrderedScriptURIs = [];\n';

	foreach ( $tinymce_dep->deps as $handle ) {
		$url = $wp_scripts->get_url( $handle );
		echo 'window.wpTinyMCEOrderedScriptURIs.push( "' . $url . '");\n';
	}

	$url = $wp_scripts->get_url( $tinymce_dep->handle );
	echo 'window.wpTinyMCEOrderedScriptURIs.push( "' . $url . '" );\n' .
		'</script>';
}

remove_action( 'print_tinymce_scripts', 'wp_print_tinymce_scripts' );
add_action( 'print_tinymce_scripts', 'gutenberg_print_tinymce_scripts' );
