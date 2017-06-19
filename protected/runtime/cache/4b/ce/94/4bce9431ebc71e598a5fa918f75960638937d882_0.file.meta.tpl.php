<?php
/* Smarty version 3.1.31, created on 2017-06-19 11:25:17
  from "/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/components/meta.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_59478a6da8abf8_93282578',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '4bce9431ebc71e598a5fa918f75960638937d882' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/components/meta.tpl',
      1 => 1497661366,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_59478a6da8abf8_93282578 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_compress')) require_once '/Users/edik/web/ecostroy.dev/protected/core/lib/smarty.plugins/function.compress.php';
?>
<!DOCTYPE html>
<!-- (c) lnk. Celebro Studio | https://celebro.ru -->
<html class="no-js" itemscope="itemscope" itemtype="http://schema.org/<?php if (!isset($_smarty_tpl->tpl_vars['uri']->value[1])) {?>WebPage<?php } else { ?>ItemPage<?php }?>" lang="<?php echo $_smarty_tpl->tpl_vars['_page']->value['lang'];?>
"><head><title itemprop="name"><?php echo $_smarty_tpl->tpl_vars['_page']->value['title'];?>
</title><meta charset="UTF-8"><meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible"><meta content="width=device-width,initial-scale=1,maximum-scale=5" name="viewport"><meta content="skype_toolbar_parser_compatible" name="skype_toolbar"><meta content="telephone=no" name="format-detection"><meta name="yandex-verification" content="1da0468787e53eac" /><meta content="true" name="HandheldFriendly"><meta content="320" name="MobileOptimized"><meta content="on" http-equiv="cleartype"><meta name="cms" content="celebro.cms"><meta name="author" content="https://celebro.ru/"><meta content="<?php echo $_smarty_tpl->tpl_vars['_page']->value['lang'];?>
" itemprop="inLanguage"><meta content="<?php echo $_smarty_tpl->tpl_vars['_page']->value['robots'];?>
" name="robots"><meta content="<?php echo $_smarty_tpl->tpl_vars['_page']->value['keywords'];?>
" name="keywords"><meta content="<?php echo $_smarty_tpl->tpl_vars['_page']->value['description'];?>
" name="description" itemprop="description"><?php echo smarty_function_compress(array('mode'=>'css','media'=>'all','source'=>array(array('file'=>'/css/vendors.min.css'),array('file'=>'/css/main.min.css'))),$_smarty_tpl);
echo smarty_function_compress(array('attr'=>'data-no-instant','mode'=>'js','type'=>'inline','source'=>array(array('file'=>'/js/fonts.min.js'))),$_smarty_tpl);?>
<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/manifest.json"><link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#ffffff"><link rel="shortcut icon" href="/favicon/favicon.ico"><meta name="msapplication-config" content="/favicon/browserconfig.xml"><meta name="theme-color" content="#ffffff"><?php if ($_smarty_tpl->tpl_vars['_csrf_token']->value) {?><meta content="<?php echo $_smarty_tpl->tpl_vars['_csrf_param']->value;?>
" name="csrf-param"><meta content="<?php echo $_smarty_tpl->tpl_vars['_csrf_token']->value;?>
" name="csrf-token"><?php }?><!--[if IEMobile]><meta http-equiv="cleartype" content="on"><meta http-equiv="imagetoolbar" content="false"><![endif]--><?php echo '<script'; ?>
>(function(d) { d.className = d.className.replace(/\bno-js/, ''); })(document.documentElement);<?php echo '</script'; ?>
></head><body><?php }
}
