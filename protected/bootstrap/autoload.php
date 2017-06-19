<?php

require_once PATH_VENDORS.DS.'autoload.php';

# Functions
#
$fn_list = [
    'fns.inc.php',
    'sandbox.php',
    'i18n.functions.php',
    'user.functions.php'
];

foreach ($fn_list as $file) {
    if (file_exists(PATH_CORE.DS.'fns'.DS.$file)) {
        require PATH_CORE.DS.'fns'.DS.$file;
    }
}

# Autoload
#
spl_autoload_register(function ($_class) {
    clearstatcache(true);

    $_class = strtolower($_class);

    if (strstr($_class, 'controller')) {
        if (file_exists(PATH_CORE.DS.'controllers'.DS.$_class.'.php')) {
            require_once PATH_CORE.DS.'controllers'.DS.$_class.'.php';
        }
    } elseif (strstr($_class, 'helper')) {
        if (file_exists(PATH_SECURE.DS.'helpers'.DS.$_class.'.php')) {
            require_once PATH_SECURE.DS.'helpers'.DS.$_class.'.php';
        }
    } elseif (strstr($_class, 'smarty')) {
        if (file_exists(PATH_CORE.DS.'lib'.DS.'templaters'.DS.'smarty'.DS.$_class.'.class.php')) {
            require_once PATH_CORE.DS.'lib'.DS.'templaters'.DS.'smarty'.DS.$_class.'.class.php';
        }
    } else {
        if (file_exists(PATH_CORE.DS.'classes'.DS.$_class.'.class.php')) {
            require_once PATH_CORE.DS.'classes'.DS.$_class.'.class.php';
        }
    }
});
