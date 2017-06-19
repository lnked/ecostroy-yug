<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-19 10:59:14
  from "/Users/edik/web/ecostroy.dev/protected/modules/documents/tpl/documents.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_59478452f40012_25579870',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'b65796672c998f5998bd3fc8198330e7b774c402' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/modules/documents/tpl/documents.tpl',
      1 => 1497626026,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_59478452f40012_25579870 (Smarty_Internal_Template $_smarty_tpl) {
?>
<ul class="s-documents__list j-documents" id="documents"><?php if (!empty($_smarty_tpl->tpl_vars['documents']->value)) {
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['documents']->value, 'doc', false, NULL, 'documents', array (
  'first' => true,
  'index' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['doc']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_documents']->value['index']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_documents']->value['first'] = !$_smarty_tpl->tpl_vars['__smarty_foreach_documents']->value['index'];
if ($_smarty_tpl->tpl_vars['doc']->value['docs']) {
if (!(isset($_smarty_tpl->tpl_vars['__smarty_foreach_documents']->value['first']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_documents']->value['first'] : null)) {?><li class="s-documents__list__header is-motion is-hidden"><div class="s-documents__list__header__title"><?php echo $_smarty_tpl->tpl_vars['doc']->value['name'];?>
</div></li><?php }
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['doc']->value['docs'], 'image');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['image']->value) {
?><li class="s-documents__list__item<?php if (!(isset($_smarty_tpl->tpl_vars['__smarty_foreach_documents']->value['first']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_documents']->value['first'] : null)) {?> is-motion is-hidden<?php }?>"><a href="<?php echo $_smarty_tpl->tpl_vars['image']->value['original']['file'];?>
" class="s-documents__list__item__link zoom" data-fancybox="gallery" target="_blank"><span class="s-documents__list__item__image"><img class="lazy" data-src="<?php echo $_smarty_tpl->tpl_vars['image']->value['preview']['file'];?>
" alt=""><noscript><img src="<?php echo $_smarty_tpl->tpl_vars['image']->value['preview']['file'];?>
" alt=""></noscript><svg class="s-documents__list__item__checked" role="image"><use xlink:href="#checked"/></svg></span><span class="s-documents__list__item__title"><?php echo $_smarty_tpl->tpl_vars['image']->value['original']['title'];?>
</span></a></li><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}?></ul><div class="page-button"><div class="page-button__center"><a href="/documents.zip" class="button-link" download>Скачать докуметы</a></div></div><div class="page-button _down"><span class="button j-load-documents" data-motion="show"><span class="button__text--up">СКРЫТЬ ДОКУМЕНТЫ</span><span class="button__text--down">ЕЩЕ ДОКУМЕНТЫ</span></span></div><?php }
}
