<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-17 03:34:06
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/view/meta/module/table.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_594478fe274330_14031742',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'cb4128b0cd8ae3c0a72117e7691756f24338e91d' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/view/meta/module/table.tpl',
      1 => 1497221703,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:system/controll.tpl' => 2,
  ),
),false)) {
function content_594478fe274330_14031742 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_modifier_count_array')) require_once '/Users/edik/web/ecostroy.dev/protected/core/lib/templaters/smarty/plugins_cms/modifier.count_array.php';
if (!is_callable('smarty_function_math')) require_once '/Users/edik/web/ecostroy.dev/protected/core/lib/templaters/smarty/plugins/function.math.php';
?>
<table class="module-table" id="meta_data"><?php if (!empty($_smarty_tpl->tpl_vars['meta_list']->value)) {?><colgroup><col width="30"><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['meta_fields']->value, 'item');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
if ($_smarty_tpl->tpl_vars['item']->value['in_list']) {
if ($_smarty_tpl->tpl_vars['item']->value['f_sys_name'] == 'ord') {?><col width="100"><?php } elseif ($_smarty_tpl->tpl_vars['item']->value['f_sys_name'] == 'visible') {?><col width="50"><?php } else { ?><col><?php }
}
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
<col width="65"></colgroup><?php }?><thead><tr><?php if (!empty($_smarty_tpl->tpl_vars['meta_list']->value)) {
$_smarty_tpl->_assignInScope('colspan', smarty_modifier_count_array($_smarty_tpl->tpl_vars['meta_fields']->value,"in_list","1","1"));
echo smarty_function_math(array('equation'=>"x+1",'x'=>$_smarty_tpl->tpl_vars['colspan']->value,'assign'=>"colspan"),$_smarty_tpl);
} else {
$_smarty_tpl->_assignInScope('colspan', "1");
}?><th class="module-table__header" colspan="<?php echo $_smarty_tpl->tpl_vars['colspan']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['meta_module']->value['name'];?>
</th></tr></thead><tbody><?php if (!empty($_smarty_tpl->tpl_vars['meta_list']->value)) {?><tr><td class="module-table__sub-header module-table__center"><?php $_smarty_tpl->_subTemplateRender("file:system/controll.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('type'=>"checkbox",'addclass'=>"controll_single",'name'=>"checkall",'onchange'=>"checkAll(this)"), 0, false);
?>
</td><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['meta_fields']->value, 'item');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
if ($_smarty_tpl->tpl_vars['item']->value['in_list']) {
if ($_smarty_tpl->tpl_vars['item']->value['f_sys_name'] == 'visible') {?><td class="module-table__sub-header module-table__center"><span class="icon icon-eye"></span></td><?php } else { ?><td class="module-table__sub-header"><?php echo htmlspecialchars(preg_replace('!<[^>]*?>!', ' ', $_smarty_tpl->tpl_vars['item']->value['f_name']), ENT_QUOTES, 'UTF-8', true);?>
</td><?php }
}
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
<td class="module-table__sub-header"></td></tr><?php if (isset($_smarty_tpl->tpl_vars['meta_list']->value['result'])) {
$_smarty_tpl->_assignInScope('result', $_smarty_tpl->tpl_vars['meta_list']->value['result']);
} else {
$_smarty_tpl->_assignInScope('result', $_smarty_tpl->tpl_vars['meta_list']->value);
}
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['result']->value, 'item', false, NULL, 'i', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->_assignInScope('index', '0');
?><tr><td class="module-table__column module-table__center"><?php $_smarty_tpl->_subTemplateRender("file:system/controll.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('type'=>"checkbox",'addclass'=>"controll_single",'ctrlclass'=>"check-all-spy",'name'=>(("checked[").($_smarty_tpl->tpl_vars['item']->value['id'])).("]"),'value'=>$_smarty_tpl->tpl_vars['item']->value['id']), 0, true);
?>
</td><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['item']->value, 'it', false, 'k');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['k']->value => $_smarty_tpl->tpl_vars['it']->value) {
if ($_smarty_tpl->tpl_vars['k']->value == "visible") {?><td class="module-table__column module-table__center"><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/meta/module/visible/<?php echo $_smarty_tpl->tpl_vars['meta_module']->value['id'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
" class="icon icon-eye<?php if ($_smarty_tpl->tpl_vars['it']->value == 0) {?>-off<?php }?> visible-link" onclick="return cp.toggleModule(this, event);" data-no-instant></a></td><?php } elseif ($_smarty_tpl->tpl_vars['k']->value == "ord") {?><td class="module-table__column"><?php echo $_smarty_tpl->tpl_vars['it']->value;?>
</td><?php } elseif ($_smarty_tpl->tpl_vars['k']->value != "id") {?><td class="module-table__column"><?php if ($_smarty_tpl->tpl_vars['index']->value == '0') {?><a href="<?php echo $_smarty_tpl->tpl_vars['base_path']->value;?>
/module/edit/<?php echo $_smarty_tpl->tpl_vars['meta_module']->value['id'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
?backuri=<?php echo $_smarty_tpl->tpl_vars['_backuri']->value;?>
" title="Редактировать"><span class="catalog-edit icon icon-edit"></span> <?php echo stripslashes($_smarty_tpl->tpl_vars['it']->value);?>
</a><?php $_smarty_tpl->_assignInScope('index', '1');
} else {
echo stripslashes($_smarty_tpl->tpl_vars['it']->value);
}?></td><?php } elseif (is_array($_smarty_tpl->tpl_vars['it']->value)) {?><td><?php echo $_smarty_tpl->tpl_vars['it']->value['value_res'];?>
</td><?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
<td class="module-table__column module-table__center"><?php if ($_smarty_tpl->tpl_vars['check_dispatch']->value == "1") {?><a href="icon icon-envelope"><a href="<?php echo $_smarty_tpl->tpl_vars['base_path']->value;?>
/module/dispatch/<?php echo $_smarty_tpl->tpl_vars['meta_module']->value['id'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
" title="Разослать"></a><?php }?><a href="<?php echo $_smarty_tpl->tpl_vars['base_path']->value;?>
/module/del/<?php echo $_smarty_tpl->tpl_vars['meta_module']->value['id'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
?backuri=<?php echo $_smarty_tpl->tpl_vars['_backuri']->value;?>
" class="catalog-remove remove-trigger" title="Удалить" onclick="return cp.dialog('Вы действительно хотите удалить?')" data-no-instant><i class="icon icon-delete"></i></a></td></tr><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
} else { ?><tr><td colspan="<?php echo $_smarty_tpl->tpl_vars['colspan']->value;?>
" class="module-table__column module-table__empty">Данные отсутствуют</td></tr><?php }?></tbody></table><?php }
}
