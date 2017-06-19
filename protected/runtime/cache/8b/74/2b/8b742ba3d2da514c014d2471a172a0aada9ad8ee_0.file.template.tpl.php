<?php
/* Smarty version 3.1.31, created on 2017-06-19 12:22:54
  from "/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/components/template.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_594797ee1a9735_25262515',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8b742ba3d2da514c014d2471a172a0aada9ad8ee' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/components/template.tpl',
      1 => 1497648145,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594797ee1a9735_25262515 (Smarty_Internal_Template $_smarty_tpl) {
?>
<template id="tmpl-notification"><div class="notification" id="popup_notification">{{#title}}<div class="notification__header">{{title}}</div>{{/title}}{{#text}}<div class="notification__content clearfix">{{text}}</div>{{/text}}</div></template><template id="tmpl-popup-message"><div class="popup popup_message" id="popup_message"><div class="popup__dialog popup__dialog--simple"><div class="popup__content"><b class="popup__close j-popup-close"><svg class="popup__close__ico" role="image"><use xlink:href="#close"/></svg></b>{{#if title}}<header class="popup__header"><span class="popup__header__title">{{title}}</span></header>{{/if}}{{#if text}}<div class="popup__body clearfix">{{text}}</div>{{/if}}</div></div></div></template><template id="tmpl-popup-message"><div class="popup popup_error" id="popup_error"><div class="popup__dialog popup__dialog--simple"><div class="popup__content"><b class="popup__close j-popup-close"><svg class="popup__close__ico" role="image"><use xlink:href="#close"/></svg></b>{{#if title}}<header class="popup__header"><span class="popup__header__title">{{title}}</span></header>{{/if}}{{#if text}}<div class="popup__body clearfix">{{text}}</div>{{/if}}</div></div></div></template><template id="tmpl-popup-feedback"><div class="popup" id="popup-feedback"><div class="popup__dialog popup__dialog--simple"><div class="popup__content"><b class="popup__close j-popup-close"><svg class="popup__close__ico" role="image"><use xlink:href="#close"/></svg></b><header class="popup__header"><span class="popup__header__title">Обратная связь</span></header><div class="popup__body clearfix"><form method="post" action="/api/send" class="form-ajax form-reset request-form request-form--clear"><label class="f-label"><input name="name" class="f-input f-input--pure" placeholder="Ваше имя"></label><label class="f-label"><input name="phone" class="f-input f-input--pure mask-phone" placeholder="Ваш телефон"></label><label class="f-label"><textarea name="message" class="f-textarea f-textarea--pure" placeholder="Ваше сообщение"></textarea></label><div class="f-center"><button type="submit" class="button">Отправить сообщение</button></div></form></div></div></div></div></template><?php }
}
