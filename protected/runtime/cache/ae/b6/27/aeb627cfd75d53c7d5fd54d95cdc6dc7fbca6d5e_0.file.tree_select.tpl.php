<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-19 11:10:27
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/view/structure/tree_select.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_594786f35800f1_06681691',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'aeb627cfd75d53c7d5fd54d95cdc6dc7fbca6d5e' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/view/structure/tree_select.tpl',
      1 => 1469786303,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594786f35800f1_06681691 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_math')) require_once '/Users/edik/web/ecostroy.dev/protected/core/lib/templaters/smarty/plugins/function.math.php';
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['a_tree']->value, 'item');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
	<option value="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"<?php if ($_smarty_tpl->tpl_vars['curr_id']->value == $_smarty_tpl->tpl_vars['item']->value['id']) {?> selected="selected"<?php }?>>
		<?php
$__section_nbsp_0_saved = isset($_smarty_tpl->tpl_vars['__smarty_section_nbsp']) ? $_smarty_tpl->tpl_vars['__smarty_section_nbsp'] : false;
$__section_nbsp_0_loop = (is_array(@$_loop=$_smarty_tpl->tpl_vars['nbsp_count']->value) ? count($_loop) : max(0, (int) $_loop));
$__section_nbsp_0_total = $__section_nbsp_0_loop;
$_smarty_tpl->tpl_vars['__smarty_section_nbsp'] = new Smarty_Variable(array());
if ($__section_nbsp_0_total != 0) {
for ($__section_nbsp_0_iteration = 1, $_smarty_tpl->tpl_vars['__smarty_section_nbsp']->value['index'] = 0; $__section_nbsp_0_iteration <= $__section_nbsp_0_total; $__section_nbsp_0_iteration++, $_smarty_tpl->tpl_vars['__smarty_section_nbsp']->value['index']++){
?>•<?php
}
}
if ($__section_nbsp_0_saved) {
$_smarty_tpl->tpl_vars['__smarty_section_nbsp'] = $__section_nbsp_0_saved;
}
?>
		<?php if ($_smarty_tpl->tpl_vars['nbsp_count']->value > 0) {?>&nbsp;<?php }?>
		<?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>

	</option>
	
	<?php if ($_smarty_tpl->tpl_vars['item']->value['a_tree']) {?>
		<?php echo smarty_function_math(array('equation'=>"x+y",'x'=>$_smarty_tpl->tpl_vars['nbsp_count']->value,'y'=>3,'assign'=>"nbsp_count"),$_smarty_tpl);?>

		
        <?php $_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/tree_select.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('a_tree'=>$_smarty_tpl->tpl_vars['item']->value['a_tree'],'nbsp_count'=>$_smarty_tpl->tpl_vars['nbsp_count']->value,'curr_id'=>$_smarty_tpl->tpl_vars['curr_id']->value), 0, true);
?>

		
		<?php echo smarty_function_math(array('equation'=>"x-y",'x'=>$_smarty_tpl->tpl_vars['nbsp_count']->value,'y'=>3,'assign'=>"nbsp_count"),$_smarty_tpl);?>

	<?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}
}
