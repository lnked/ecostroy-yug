<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-17 03:34:13
  from "/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/base.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_59447905804c92_04104608',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'd72f892c085d6edeb403d9ce7703e7eaaf4fe1cd' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/base.tpl',
      1 => 1497654589,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:./components/meta.tpl' => 1,
    'file:./components/svgstore.tpl' => 1,
    'file:./components/template.tpl' => 1,
    'file:./components/header.tpl' => 1,
    'file:./components/footer.tpl' => 1,
    'file:./components/scripts.tpl' => 1,
  ),
),false)) {
function content_59447905804c92_04104608 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_unit')) require_once '/Users/edik/web/ecostroy.dev/protected/core/lib/templaters/smarty/plugins_cms/function.unit.php';
$_smarty_tpl->_subTemplateRender("file:./components/meta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
$_smarty_tpl->_subTemplateRender("file:./components/svgstore.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
$_smarty_tpl->_subTemplateRender("file:./components/template.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
<div class="layout-wrapper"><?php $_smarty_tpl->_subTemplateRender("file:./components/header.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
<div class="layout-wrapper__pusher"><?php if (($_smarty_tpl->tpl_vars['_page']->value['spa'])) {
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['_page']->value['spa'], 'page');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['page']->value) {
?><section class="section s-<?php echo $_smarty_tpl->tpl_vars['page']->value['sys_name'];?>
 j-section" id="<?php echo $_smarty_tpl->tpl_vars['page']->value['sys_name'];?>
-anchor" data-title="<?php echo $_smarty_tpl->tpl_vars['page']->value['title'];?>
"><?php if ($_smarty_tpl->tpl_vars['page']->value['sys_name'] !== 'main') {?><div class="layout j-tabs"><h2 class="section__title"><?php echo $_smarty_tpl->tpl_vars['page']->value['name'];?>
</h2><?php }
echo $_smarty_tpl->tpl_vars['page']->value['content'];
if ($_smarty_tpl->tpl_vars['page']->value['sys_name'] !== 'main') {?></div><?php }
if ($_smarty_tpl->tpl_vars['page']->value['sys_name'] == 'contacts') {
echo smarty_function_unit(array('item'=>'8'),$_smarty_tpl);
} elseif ($_smarty_tpl->tpl_vars['page']->value['sys_name'] == 'plans') {
echo smarty_function_unit(array('item'=>'9'),$_smarty_tpl);
}?></section><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}?></div></div><?php $_smarty_tpl->_subTemplateRender("file:./components/footer.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
$_smarty_tpl->_subTemplateRender("file:./components/scripts.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
}
}
