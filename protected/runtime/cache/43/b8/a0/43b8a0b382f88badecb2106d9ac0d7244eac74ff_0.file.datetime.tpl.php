<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-19 11:10:27
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/fields/datetime.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_594786f35447f5_69041878',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '43b8a0b382f88badecb2106d9ac0d7244eac74ff' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/fields/datetime.tpl',
      1 => 1469786303,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594786f35447f5_69041878 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="calendar calendar_datetime"><input name="<?php echo $_smarty_tpl->tpl_vars['name']->value;?>
" value="<?php echo htmlspecialchars($_smarty_tpl->tpl_vars['value']->value, ENT_QUOTES, 'UTF-8', true);?>
" class="calendar__field js-datetimepicker" data-date-format="dd.mm.yyyy hh:ii" tabindex="<?php echo $_smarty_tpl->tpl_vars['index']->value;?>
" readonly><span class="calendar__icon add-on"><i class="icon icon-calendar"></i></span></div><?php }
}
