<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'IGqzG VinO!> h{DCLb;H!>&MqkLkyGdhO(JJir.W8)xux/[!)0Uvm|:UIa?5.!a' );
define( 'SECURE_AUTH_KEY',   'x,cuue:{<1S{YoFkvpF+6lYGUW+/71IocnP4>0LW;*Z0[_1q8O!m6Wr3#6}1)Bx+' );
define( 'LOGGED_IN_KEY',     '$%(k%a<~Jj`F,aQu{4Sq[}YF:% p#JxrA%Efch^%x<5`=4+^OQWJ#}pSCTec8<we' );
define( 'NONCE_KEY',         '1G&s7q!/ze`b^vfaZ[$)9ykeI;Fn}[oY,1x8d2=myJsJX+Rc4hnn:{fFj9Wd7FF{' );
define( 'AUTH_SALT',         '}/7d2+)x=f_jyNn5GiZjv?fdGBK C]:_dSaD4K9}>Cm@l/,gc(&5()HUu|7n{pM?' );
define( 'SECURE_AUTH_SALT',  '+9k:o }@L#H@;LNjU|csKwhwZsHs-JNUO*X&UcbWv*qF!N@/,X/[|A ^R`h7&1-b' );
define( 'LOGGED_IN_SALT',    'B_{;3HK!s )&Pese1i6a&cGJV[6hWz,ee0Swk|<yK:>IoI6T;!:Ku2^_;FI@VJ9Q' );
define( 'NONCE_SALT',        'XJ%6%4r{FaTY7o)<VA;BA}XtfoVOXKj`B1->FWcZQ<&A{i[e=)LO0F9RF~AmP<0X' );
define( 'WP_CACHE_KEY_SALT', '6PdwhjY1s%q.=L}{Hv}pL6@2;iz*{eK-p8[xA$5^v]vvr_t@MZ+xGzXRFkjte?T5' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
