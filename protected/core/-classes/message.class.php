<?php

class Message extends PHPMailer
{
    protected $mail     = null;
    protected $host     = null;
    protected $login    = null;
    protected $ishtml   = true;
    protected $issmtp   = true;
    protected $password = null;
    protected $template = null;
    protected $sendfile = '/themes/base/smarty/message/default.tpl';
    protected $server   = array();
    protected $debug    = 0;
    protected $message  = '';

    public function __construct()
    {
        $this->mail = new PHPMailer();
        $this->template = new Smarty();

        $this->template->setCaching(false);

        $this->template->setCacheDir(PATH_RUNTIME.DIRECTORY_SEPARATOR.'cache'.DIRECTORY_SEPARATOR);
        $this->template->setCompileDir(PATH_RUNTIME.DIRECTORY_SEPARATOR.'cache'.DIRECTORY_SEPARATOR);
        $this->template->setTemplateDir(PATH_TPL.DIRECTORY_SEPARATOR.'themes'.DIRECTORY_SEPARATOR);

        $pluginsDir = array(
            PATH_CORE.DIRECTORY_SEPARATOR.'lib'.DIRECTORY_SEPARATOR.'templaters'.DIRECTORY_SEPARATOR.'smarty'.DIRECTORY_SEPARATOR.'plugins'.DIRECTORY_SEPARATOR,
            PATH_CORE.DIRECTORY_SEPARATOR.'lib'.DIRECTORY_SEPARATOR.'templaters'.DIRECTORY_SEPARATOR.'smarty'.DIRECTORY_SEPARATOR.'plugins_cms'.DIRECTORY_SEPARATOR
        );

        foreach ($pluginsDir as $plugin)
        {
            if (is_dir($plugin))
            {
                $this->template->addPluginsDir($plugin);
            }
        }
    }

    public function setDebug($debug = 1)
    {
        $this->debug = $debug;
    }

    public function setServer($server = array())
    {
        $this->server = $server;
    }

    public function setSmtp($issmtp = true)
    {
        $this->issmtp = $issmtp;
    }

    public function setMessage($message = '')
    {
        $this->message = $message;
    }

    public function setSubject($subject = '')
    {

                $this->mail->Subject = $subject;
        $this->subject = $subject;
    }

    public function setHost($host = '')
    {
        $this->host = $host;
    }

    public function setSender($login = '', $password = '')
    {
        $this->login = $login;
        $this->password = $password;
    }

    public function setFrom($from = '', $name = '')
    {
        $this->mail->setFrom($from, $name ? $name : $from);
    }

    public function setTo($to)
    {
        if (is_array($to))
        {
            foreach ($to as $email => $value)
            {
                $email = trim($email);

                if (is_email($email))
                {
                    $this->mail->AddAddress($email);
                }
            }
        }
        else
        {
            $to = trim($to);

            if (is_email($to))
            {
                $this->mail->AddAddress(trim($to));
            }
        }
    }
    
    public function addAttachment($attachment)
    {
        if (is_array($attachment))
        {
            foreach ($attachment as $file)
            {
                if (file_exists(PATH_ROOT.$file))
                {
                    $this->mail->addAttachment($file);
                }
            }
        }
        else
        {
            $this->mail->addAttachment($attachment);
        }
    }

    public function send()
    {
        $domain = str_replace(array('http://', 'www.', 'www') , '', $this->server['SERVER_NAME']);

        try
        {
            $tpl->assign('domain',  $this->domain);
            $tpl->assign('subject', $this->subject);
            $tpl->assign('message', $this->message);

            $this->mail->CharSet = 'utf-8';
            $this->mail->IsHTML($this->ishtml);
            
            if ($this->issmtp)
            {
                $this->mail->IsSMTP();

                $this->mail->SMTPSecure       = "ssl";
                $this->mail->Port             = 465;

                $this->mail->Host           = $this->host;
                $this->mail->SMTPAuth       = true;
                $this->mail->SMTPKeepAlive  = true;
            }
            
            $this->mail->SMTPDebug  = $this->debug;
          
            $this->mail->Username   = $this->login;
            $this->mail->Password   = $this->password;
            
            $this->mail->msgHTML($tpl->fetch(PATH_TPL . $this->sendfile));

            if ($this->mail->send())
            {
                return true;
            }
            else
            {
                if ($this->debug == 1)
                {
                    echo "Mailer Error: " . $this->mail->ErrorInfo;
                }
            }
            
            $this->mail->ClearAddresses();
            $this->mail->ClearAttachments();

        }
        catch (phpmailerException $e)
        {
            echo $e->errorMessage();
        }
        catch (Exception $e)
        {
            echo $e->getMessage();
        }

    }
}