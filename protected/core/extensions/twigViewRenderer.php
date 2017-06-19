<?php

class templateRender
{
    protected $data = [];
    protected $template = null;
    protected $charset = 'utf-8';
    protected $fileExtension = '.twig';

    public function __construct($dir = '', $caching = null)
    {
        $loader = new Twig_Loader_Filesystem(PATH_TPL.DS.$dir);

        $this->template = new Twig_Environment($loader, [
            'template_dir'      =>  PATH_TPL.DS.$dir,
            'cache'             =>  PATH_RUNTIME.DS.'cache',
            'debug'             =>  false,
            'autoescape'        =>  'html',
            'auto_reload'       =>  false,
            'strict_variables'  =>  false,
            'optimizations'     =>  -1,
            'charset'           =>  $this->charset
        ]);

        // $this->template->getExtension('Twig_Extension_Core')->setEscaper('html');

        // Ruby erb syntax
        // $lexer = new Twig_Lexer($twig, array(
        //     'tag_comment'  => array('<%#', '%>'),
        //     'tag_block'    => array('<%', '%>'),
        //     'tag_variable' => array('<%=', '%>'),
        // ));

        // SGML Comment Syntax
        // $lexer = new Twig_Lexer($twig, array(
        //     'tag_comment'  => array('<!--#', '-->'),
        //     'tag_block'    => array('<!--', '-->'),
        //     'tag_variable' => array('${', '}'),
        // ));

        // Smarty like
        // $lexer = new Twig_Lexer($twig, array(
        //     'tag_comment'  => array('{*', '*}'),
        //     'tag_block'    => array('{', '}'),
        //     'tag_variable' => array('{$', '}'),
        // ));

        $lexer = new Twig_Lexer($this->template, [
            'tag_comment'   => ['{#', '#}'],
            'tag_block'     => ['{%', '%}'],
            'tag_variable'  => ['{{', '}}'],
            'interpolation' => ['#{', '}']
        ]);

        $this->template->setLexer($lexer);
    }

    public function assign($key = '', $value = '', $caching = false)
    {
        if (is_array($value)) {
            $this->data[$key] = $value;
        } else {
            $this->data[$key] = htmlspecialchars($value, ENT_QUOTES, $this->charset);
        }
    }

    public function fetch($template = '', $cache_id = '', $compile_id = '')
    {
    }

    public function display($template = '')
    {
        $this->template->loadTemplate($template . $this->fileExtension)->display($this->data);
    }
}
