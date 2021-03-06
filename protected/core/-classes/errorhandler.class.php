<?php

class ErrorHandler
{
    private $callbacks_error = array();
    private $callbacks_exception = array();

    private $uniqid;

    public function register()
    {
        set_error_handler(array($this, 'handleError'), E_ALL | E_STRICT);
        set_exception_handler(array($this, 'handleException'));

        if (php_sapi_name() !== 'cli') {
            register_shutdown_function(array($this, 'handleShutdown'));
        }
    }

    public function addErrorCallback($callback)
    {
        $this->callbacks_error[] = $callback;
    }

    public function addExceptionCallback($callback)
    {
        $this->callbacks_exception[] = $callback;
    }

    public function handleError($errno, $errstr, $errfile, $errline, $errcontext)
    {
        if (!(error_reporting() & $errno)) {
            //error do not match current error reporting level
            return true;
        }

        switch ($errno) {
            case E_ERROR:
                $errno_str = 'E_ERROR';
                break;
            case E_WARNING:
                $errno_str = 'E_WARNING';
                break;
            case E_PARSE:
                $errno_str = 'E_PARSE';
                break;
            case E_NOTICE:
                $errno_str = 'E_NOTICE';
                break;
            case E_CORE_ERROR:
                $errno_str = 'E_CORE_ERROR';
                break;
            case E_CORE_WARNING:
                $errno_str = 'E_CORE_WARNING';
                break;
            case E_COMPILE_ERROR:
                $errno_str = 'E_COMPILE_ERROR';
                break;
            case E_COMPILE_WARNING:
                $errno_str = 'E_COMPILE_WARNING ';
                break;
            case E_USER_ERROR  :
                $errno_str = 'E_USER_ERROR';
                break;
            case E_USER_WARNING:
                $errno_str = 'E_USER_WARNING';
                break;
            case E_USER_NOTICE:
                $errno_str = 'E_USER_NOTICE';
                break;
            case E_STRICT:
                $errno_str = 'E_STRICT';
                break;
            case E_DEPRECATED:
                $errno_str = 'E_DEPRECATED';
                break;
            case E_USER_DEPRECATED:
                $errno_str = 'E_USER_DEPRECATED';
                break;
            default:
                $errno_str = 'UNKNOWN';
        }

        $message = $errno_str . ' [' . $errno . '] ' . $errstr . " in {$errfile}:{$errline}";

        $Exception = new \Exception();
        $exception_trace = $Exception->getTraceAsString();
        $exception_trace = substr($exception_trace, strpos($exception_trace, PHP_EOL) + 1);

        $message .= PHP_EOL . $exception_trace;
        if ($environment = $this->environmentToString()) {
            $message .= PHP_EOL . $environment;
        }

        $this->save($message);

        foreach ($this->callbacks_error as $callback) {
            call_user_func($callback, $message);
        }

        return true;
    }

    public function handleShutdown()
    {
        $error = error_get_last();
        if ($error !== null && $error['type'] === E_ERROR) {
            $message = "SHUTDOWN {$error['message']} in {$error['file']}:{$error['line']}";

            if ($environment = $this->environmentToString()) {
                $message .= PHP_EOL . $environment;
            }

            $this->save($message);
        }
    }

    public function handleException($Exception)
    {
        $message = 'EXCEPTION ' . get_class($Exception) . ' ' . $Exception->getMessage() . " in {$Exception->getFile()}:{$Exception->getLine()}";
        $message .= PHP_EOL . $Exception->getTraceAsString();

        if ($environment = $this->environmentToString()) {
            $message .= PHP_EOL . $environment;
        }

        $this->save($message);

        foreach ($this->callbacks_exception as $callback) {
            call_user_func($callback, $Exception);
        }
    }

    /**
     * Запрошенная страница
     *
     * @return string
     */
    private function environmentToString()
    {
        $log = array();

        if (isset ($_SERVER['HTTP_HOST'], $_SERVER['REQUEST_URI'])) {
            $log[] = "URL: " . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'];
        }

        if (!empty ($_SERVER['HTTP_REFERER'])) {
            $log[] = 'HTTP_REFERER: ' . $_SERVER['HTTP_REFERER'];
        }

        //post/cookies/session/files
        $length_limit = 256;
        if (!empty ($_POST)) {
            $tmp = print_r($_POST, true);
            if (strlen($tmp) > $length_limit) {
                $tmp = substr($tmp, 0, $length_limit);
            }
            $log[] = "POST: " . $tmp;
        }
        if (!empty ($_FILES)) {
            $tmp = print_r($_FILES, true);
            if (strlen($tmp) > $length_limit) {
                $tmp = substr($tmp, 0, $length_limit);
            }
            $log[] = "FILES: " . $tmp;
        }
        if (!empty ($_COOKIE)) {
            $tmp = print_r($_COOKIE, true);
            if (strlen($tmp) > $length_limit) {
                $tmp = substr($tmp, 0, $length_limit);
            }
            $log[] = "COOKIE: " . $tmp;
        }
        if (!empty ($_SESSION)) {
            $tmp = print_r($_SESSION, true);
            if (strlen($tmp) > $length_limit) {
                $tmp = substr($tmp, 0, $length_limit);
            }
            $log[] = "SESSION: " . $tmp;
        }

        if (php_sapi_name() === 'cli') {
            global $argv;
            $log[] = "agrv: " . join(' ', $argv);
        } else {
            $log[] = "uniqid: " . $this->uniqid();
        }

        return join(PHP_EOL, $log);
    }

    private function save($message)
    {
        error_log($message);

        $log_file = PATH_ROOT . '/log.txt';

        if (file_exists($log_file))
        {
            clearstatcache(true, $log_file);

            if (filesize($log_file) > 1024 * 3)
            {
                unlink($log_file);
            }
        }

        file_put_contents($log_file, $message . PHP_EOL, FILE_APPEND);

        if (DEV_MODE)
	    {
	        echo '<pre style="position: relative; z-index: 1000000; margin: 20px auto; max-width: 1100px; border: 1px solid #000; background-color: #cdcdcd; padding: 20px;">', printf('%s', $message), '</pre>';
	    }
    }

    private function uniqid()
    {
        if ($this->uniqid === null) {
            $this->uniqid = uniqid();
        }
        return $this->uniqid;
    }
}