<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en « wp-config.php » et remplir les
 * valeurs.
 *
 * Ce fichier contient les réglages de configuration suivants :
 *
 * Réglages MySQL
 * Préfixe de table
 * Clés secrètes
 * Langue utilisée
 * ABSPATH
 *
 * @link https://fr.wordpress.org/support/article/editing-wp-config-php/.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define( 'DB_NAME', 'gutenberg_test' );

/** Utilisateur de la base de données MySQL. */
define( 'DB_USER', 'root' );

/** Mot de passe de la base de données MySQL. */
define( 'DB_PASSWORD', '' );

/** Adresse de l’hébergement MySQL. */
define( 'DB_HOST', 'localhost' );

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/**
 * Type de collation de la base de données.
 * N’y touchez que si vous savez ce que vous faites.
 */
define( 'DB_COLLATE', '' );

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clés secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '[*1kH)mB4o*T])$2c7 aRuJW-1E g/e:e)U;OojNSP;w~=#:H>3W74A{axk-6!o&' );
define( 'SECURE_AUTH_KEY',  '}[zs2OaDr)RaDw4S~1,k&tDnTyMx@>0di0j9Bjt[WC_;GnpCvIDcsg&Z /|?8ZNv' );
define( 'LOGGED_IN_KEY',    'caA.$7Bmi}oj+V6I+&[4062gfIil-s,5,=Zk&5~/Ns_eXXYe}@ou5]nJ4+fdz/It' );
define( 'NONCE_KEY',        '6~sGoUewgqTP?=7a!sr%Nm?T9z;cECy(!h+|>v/,Z@F|e3R)}N<dSg~2Wce1%i+ ' );
define( 'AUTH_SALT',        'L jQ5m9d!JT3(C!F&sUgX.?H#}lQgFXRfYlYL}R^5D9vOpERvj}S2&/^@i_D9Blb' );
define( 'SECURE_AUTH_SALT', 'a)/%myY1E/v`Fapi,J?eM4|-_?BjszjK^gCHTUm~I*(Tu*?&&?FjlMp8Q uOF_t9' );
define( 'LOGGED_IN_SALT',   ',Q)uI.p1RslI;90T~bB)On3Hg{&TM`<stIAWvPmCkHeL3Mn0R}^NT=6-c=Jns!j_' );
define( 'NONCE_SALT',       '+]r5vzl^%3K(`/[?3XL<F| >J`tfIljt53&]EOWCe)p-,O~iK/V2FBF}V^<LyunQ' );
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix = 'wptest001_';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortement recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://fr.wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* C’est tout, ne touchez pas à ce qui suit ! Bonne publication. */

/** Chemin absolu vers le dossier de WordPress. */
if ( ! defined( 'ABSPATH' ) )
  define( 'ABSPATH', dirname( __FILE__ ) . '/' );

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once( ABSPATH . 'wp-settings.php' );
