<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-19 11:10:27
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/view/structure/index/edit.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_594786f32656d4_43570712',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8d29fc16128e8636b7e64084bb287293540f0bef' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/view/structure/index/edit.tpl',
      1 => 1469786303,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:system/buttons.tpl' => 1,
  ),
),false)) {
function content_594786f32656d4_43570712 (Smarty_Internal_Template $_smarty_tpl) {
?>
<form method="post" id="form_stc"><input type="hidden" name="action" value="edit"><?php $_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/_fields_meta.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
$_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/_fields_og.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
$_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/_fields_structure.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, true);
?>
<div class="button-container-structure"><a href="#" class="button button-purple button-container-structure-add" onclick="return cp.addBlock(<?php echo $_smarty_tpl->tpl_vars['stc_page']->value['id'];?>
, event);"><i class="icon icon-plus-square"></i> Добавить часть страницы</a><?php $_smarty_tpl->_subTemplateRender("file:system/buttons.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
</div></form><?php }
}
