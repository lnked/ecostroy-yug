<!DOCTYPE html>
<!-- (c) lnk. Celebro Studio | https://celebro.ru -->
{strip}
<html class="no-js" itemscope="itemscope" itemtype="http://schema.org/{if !isset($uri[1])}WebPage{else}ItemPage{/if}" lang="{$_page.lang}">
<head>
    <title itemprop="name">{$_page.title}</title>

    <meta charset="UTF-8">
    <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible">
    <meta content="width=device-width,initial-scale=1,maximum-scale=5" name="viewport">
    <meta content="skype_toolbar_parser_compatible" name="skype_toolbar">
    <meta content="telephone=no" name="format-detection">
    <meta name="yandex-verification" content="1da0468787e53eac" />

    <meta content="true" name="HandheldFriendly">
    <meta content="320" name="MobileOptimized">
    <meta content="on" http-equiv="cleartype">

	<meta content="{$_page.lang}" itemprop="inLanguage">
    <meta content="{$_page.robots}" name="robots">
    <meta content="{$_page.keywords}" name="keywords">
    <meta content="{$_page.description}" name="description" itemprop="description">

	{compress
		mode   = 'css'
		media  = 'all'
		source = [
			[ file => '/css/vendors.min.css' ],
			[ file => '/css/main.min.css' ]
		]
	}
    
    {compress
        attr   = 'data-no-instant'
        mode   = 'js'
        type   = 'inline'
        source = [
            [ 'file' => '/js/fonts.min.js' ]
        ]
    }

    <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png">
    <link rel="manifest" href="/favicon/manifest.json">
    <link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff">
    <link rel="shortcut icon" href="/favicon/favicon.ico">
    <meta name="msapplication-config" content="/favicon/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">

	{if $_csrf_token nocache}
	<meta content="{$_csrf_param}" name="csrf-param">
	<meta content="{$_csrf_token}" name="csrf-token">
	{/if}

    <!--[if IEMobile]>
        <meta http-equiv="cleartype" content="on">
        <meta http-equiv="imagetoolbar" content="false">
    <![endif]-->

    <script>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);</script>
</head>
<body>
{/strip}