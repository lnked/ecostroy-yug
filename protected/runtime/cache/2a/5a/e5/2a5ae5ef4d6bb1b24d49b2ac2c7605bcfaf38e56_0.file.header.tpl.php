<?php
/* Smarty version 3.1.31, created on 2017-06-19 12:22:54
  from "/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/components/header.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_594797ee1e4546_32291241',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '2a5ae5ef4d6bb1b24d49b2ac2c7605bcfaf38e56' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/components/header.tpl',
      1 => 1497661194,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594797ee1e4546_32291241 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_unit')) require_once '/Users/edik/web/ecostroy.dev/protected/core/lib/smarty.plugins/function.unit.php';
?>
<div class="layout-header__similar"></div><header class="layout-header" itemscope="itemscope" itemtype="http://schema.org/WPHeader"><a href="/action" class="action-sticker j-navigation"><span class="action-sticker__text">АКЦИЯ!</span></a><div class="layout-header__container"><div class="layout-header__wrapper layout"><a href="/" class="layout-header__logo logo j-navigation" rel="home" itemprop="url" accesskey="1" data-instant><span itemprop="name"><?php echo smarty_function_unit(array('item'=>'11'),$_smarty_tpl);?>
</span></a><?php $_smarty_tpl->_assignInScope('accesskey', 1);
if (isset($_smarty_tpl->tpl_vars['_sitemenu']->value['main'])) {?><nav class="navigation" role="navigation" id="navigation"><ul class="navigation__list"><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['_sitemenu']->value['main'], 'e');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['e']->value) {
$_smarty_tpl->_assignInScope('accesskey', $_smarty_tpl->tpl_vars['accesskey']->value+1 ,true);
?><li class="navigation__item" itemscope="itemscope" itemtype="http://www.schema.org/SiteNavigationElement"><a href="<?php echo $_smarty_tpl->tpl_vars['e']->value['link'];?>
" itemprop="url" accesskey="<?php echo $_smarty_tpl->tpl_vars['accesskey']->value;?>
" class="navigation__link j-navigation"><span class="navigation__link__name" itemprop="name"><?php echo $_smarty_tpl->tpl_vars['e']->value['name'];?>
</span></a></li><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
</ul></nav><?php }
echo smarty_function_unit(array('item'=>'10'),$_smarty_tpl);?>
</div></div></header>
<?php }
}
