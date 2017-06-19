<?php

error_reporting(E_ALL | E_STRICT);

define('LOCAL_SERVER', in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1')));
define('DEV_MODE', LOCAL_SERVER);

define('CAPTCHA_URL', 'captcha');
define('CAPTCHA_KEYSTRING', 'captcha_keystring');

define('CATALOG_ROOT', 'catalog');

ini_set('display_errors', DEV_MODE);
ini_set('display_startup_errors', DEV_MODE);
ini_set('error_reporting', 32767);

defined('DS') || define('DS', DIRECTORY_SEPARATOR);

define('IS_SPA',            true);
define('ADMIN_DIR', 		'cp');
define('TEMPLATING',        'Smarty'); // PHP | Smarty | Fenom | Twig
define('GZIP_COMPRESS',     true);
define('CSRF_PROTECTION',   true);
define('DEFAULT_LANGUAGE',  'ru');

# PATH
define('PATH_ROOT',         __DIR__);
define('PATH_PROTECTED',    'protected');
define('PATH_WEBROOT',      'public_html');
define('PATH_SECURE',       dirname(PATH_ROOT).DS.PATH_PROTECTED);
define('ADMIN_PATH', 		PATH_ROOT.DS.ADMIN_DIR);
define('PATH_CORE',         PATH_SECURE.DS.'core');
define('PATH_VENDORS',      PATH_SECURE.DS.'vendors');
define('PATH_MODULE', 		PATH_SECURE.DS.'modules');
define('PATH_RUNTIME', 		PATH_SECURE.DS.'runtime');
define('PATH_TPL', 			PATH_SECURE.DS.'templates');
define('PATH_PUBLIC', 		PATH_ROOT.DS.'apps');
define('PATH_EXTENSIONS', 	PATH_CORE.DS.'extensions');
define('PATH_RESOURCE',     PATH_CORE.DS.'resource');

# API
define('TRANSLATE_API', 'trnsl.1.1.20150906T141528Z.634470d03ea1e762.2bad0e1f563db5cf22a91b87182866b13d349941');

require_once PATH_SECURE.DS.'config'.DS.'config.inc.php';

// exit( t('add.something', ['string'=> 'ed']) );

//🙈🙉🙊