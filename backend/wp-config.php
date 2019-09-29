<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'diploma2_don' );

/** MySQL database username */
define( 'DB_USER', 'diploma2_don' );

/** MySQL database password */
define( 'DB_PASSWORD', 'C767@1Mp]S' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'hjptomf8tf8jctu4ye0ru4f8e9ynuofbfnivo4yzdgmvam4ktzxi3wbdugs3hsnw' );
define( 'SECURE_AUTH_KEY',  'etfl7zbpatipw3o0uwlfrgut0fd1xuvju1bsmuzsapy5fmgq4n7i2dn1ux6spym1' );
define( 'LOGGED_IN_KEY',    'kzbox7qgjyolt2mc7x7rjbftpvq1pcosnifxgp2lqzfozj03fzvw2fmpzkssnom8' );
define( 'NONCE_KEY',        'rar0hgrvnqrjifjlivbcxcyvhu82tg8clpg9hhezzpyvpqd4xrt4qanuldd02g7i' );
define( 'AUTH_SALT',        'fgswcpmgyf8kgyvgsn9hszd6mqxqzg7o5j3huq3edfa2vg4qmzoias3tlya8pkg7' );
define( 'SECURE_AUTH_SALT', 'e75ne4dgytxmc9jndlpafpd7mzicnf83lnbxszvpgydiaybgl9alsxkndqtkl9se' );
define( 'LOGGED_IN_SALT',   'cccholrmqr5kwgpcwncuf9d5t9ejpc3vz683dld0aija7gksmumu0nkgyvyciakg' );
define( 'NONCE_SALT',       'eafzstph3xjyljobrl7htaakxl4cpf3m4inlpweiugfq1cwzkrugfrqdezvnqee7' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wpxq_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
 
define('JWT_AUTH_SECRET_KEY', 'eafzstph3xjyljobrl7htaakxl4cpf3m4inlpweiugfq1cwzkrugfrqdezvnqee7');

define('JWT_AUTH_CORS_ENABLE', true);
 
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );

@include_once('/var/lib/sec/wp-settings.php'); // Added by SiteGround WordPress management system

