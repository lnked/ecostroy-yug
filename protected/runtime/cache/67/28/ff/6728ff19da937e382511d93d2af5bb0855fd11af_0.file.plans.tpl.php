<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-17 03:57:41
  from "/Users/edik/web/ecostroy.dev/protected/modules/plans/tpl/plans.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_59447e85cd3bf0_40048152',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '6728ff19da937e382511d93d2af5bb0855fd11af' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/modules/plans/tpl/plans.tpl',
      1 => 1497659321,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_59447e85cd3bf0_40048152 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="s-plans__group"><?php if ($_smarty_tpl->tpl_vars['tabs']->value) {
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['tabs']->value, 'tab', false, 'liter', 'liters', array (
  'last' => true,
  'iteration' => true,
  'total' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['liter']->value => $_smarty_tpl->tpl_vars['tab']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['iteration']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['last'] = $_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['iteration'] == $_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['total'];
?><div class="s-plans__group__item"><div class="s-plans__header">Литер <?php echo $_smarty_tpl->tpl_vars['liter']->value;?>
</div><div class="s-plans__tabs"><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['tab']->value, 'floor', false, NULL, 'floors', array (
  'last' => true,
  'iteration' => true,
  'total' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['floor']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['iteration']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['last'] = $_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['iteration'] == $_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['total'];
?><a href="#liter-<?php echo $_smarty_tpl->tpl_vars['liter']->value;?>
-<?php echo $_smarty_tpl->tpl_vars['floor']->value;?>
" data-target="liter-<?php echo $_smarty_tpl->tpl_vars['liter']->value;?>
-<?php echo $_smarty_tpl->tpl_vars['floor']->value;?>
" class="s-plans__tabs__item j-tabs-trigger<?php if ((isset($_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['last']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['last'] : null) && (isset($_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['last']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['last'] : null)) {?> is-current<?php }?>"><?php echo $_smarty_tpl->tpl_vars['floor']->value;?>
 этаж</a><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
</div></div><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}?></div><?php if ($_smarty_tpl->tpl_vars['plans']->value) {?><div class="s-plans__carousel"><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['plans']->value, 'floors', false, 'liter', 'liters', array (
  'last' => true,
  'iteration' => true,
  'total' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['liter']->value => $_smarty_tpl->tpl_vars['floors']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['iteration']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['last'] = $_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['iteration'] == $_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['total'];
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['floors']->value, 'image', false, 'floor', 'floors', array (
  'last' => true,
  'iteration' => true,
  'total' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['floor']->value => $_smarty_tpl->tpl_vars['image']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['iteration']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['last'] = $_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['iteration'] == $_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['total'];
?><div class="s-plans__carousel__item j-tabs-content<?php if ((isset($_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['last']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_liters']->value['last'] : null) && (isset($_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['last']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_floors']->value['last'] : null)) {?> is-active<?php }?>" data-system="liter-<?php echo $_smarty_tpl->tpl_vars['liter']->value;?>
-<?php echo $_smarty_tpl->tpl_vars['floor']->value;?>
"><img src="<?php echo $_smarty_tpl->tpl_vars['image']->value['file'];?>
" class="s-plans__carousel__item__image" alt=""></div><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
</div><?php }
}
}
