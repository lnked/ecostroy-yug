<?php

date_default_timezone_set('Europe/Moscow');

if (!defined('MEMCACHE_COMPRESSED')) {
    define('MEMCACHE_COMPRESSED', true);
}

if (LOCAL_SERVER && file_exists(PATH_SECURE . '/config/dev/config.db.php')) {
    require_once PATH_SECURE . '/config/dev/config.db.php';
} else {
    require_once PATH_SECURE . '/config/config.db.php';
}

require_once PATH_SECURE.DS.'bootstrap'.DS.'autoload.php';

require_once PATH_CORE . '/lib/F/F.php';
require_once PATH_CORE . '/lib/O/O.php';

if (!session_id()) {
    session_start();
}

# I18N
$locale = Tools::getLocale($_SERVER['REQUEST_URI']);
setlocale(LC_ALL, $locale);

if (DEV_MODE) {
    $GLOBALS['sql'] = 0;
    $GLOBALS['sql_log'] = [];
}

QF('mysqli://'.DB_USER.':'.DB_PASS.'@'.DB_HOST.':'.DB_PORT.'/'.DB_BASE.'?encoding=utf8')->connect()->alias('default')->tablePrefix(DB_PREF);

FConfig([
    'upload_dir'    => DS.'upload_dir'.DS,
    'upload_lvl'    => 1,
    'upload_sym'    => 1,
    'use_temp_dir'    => false,
    'image_driver'    => 'Imagick' // Imagick Gd
]);
