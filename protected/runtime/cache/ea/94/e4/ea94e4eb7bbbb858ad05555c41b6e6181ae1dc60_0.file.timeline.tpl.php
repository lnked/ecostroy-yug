<?php
/* Smarty version 3.1.31, created on 2017-06-19 11:25:17
  from "/Users/edik/web/ecostroy.dev/protected/modules/timeline/tpl/timeline.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_59478a6d9595a8_51010073',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'ea94e4eb7bbbb858ad05555c41b6e6181ae1dc60' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/modules/timeline/tpl/timeline.tpl',
      1 => 1497644236,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_59478a6d9595a8_51010073 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="s-timeline__carousel carousel j-timeline" id="timeline"><?php echo '<script'; ?>
>var timelineConfig = <?php echo $_smarty_tpl->tpl_vars['json']->value;?>
;<?php echo '</script'; ?>
><div class="carousel__outer"><div class="carousel__wrapper j-timeline-slider" id="timeline-carousel"><?php if (!empty($_smarty_tpl->tpl_vars['timeline']->value[$_smarty_tpl->tpl_vars['tabs']->value['y']][$_smarty_tpl->tpl_vars['tabs']->value['m']])) {
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['timeline']->value[$_smarty_tpl->tpl_vars['tabs']->value['y']][$_smarty_tpl->tpl_vars['tabs']->value['m']], 'photo');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['photo']->value) {
?><div class="carousel__item slick-slide"><a href="<?php echo $_smarty_tpl->tpl_vars['photo']->value['original'];?>
" onclick="return false" class="carousel__item__image zoom"><img src="<?php echo $_smarty_tpl->tpl_vars['photo']->value['preview'];?>
" class="carousel__item__image__src" alt=""></a></div><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}?></div></div><?php if ($_smarty_tpl->tpl_vars['tabs']->value['years'] && $_smarty_tpl->tpl_vars['tabs']->value['months']) {?><div class="b-filter is-active" id="s-timeline-filter"><div class="b-filter__years j-timeline-years"><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['tabs']->value['years'], 'year', false, NULL, 'years', array (
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['year']->value) {
?><span class="b-filter__years__tab j-timeline-years-tab<?php if ($_smarty_tpl->tpl_vars['tabs']->value['y'] == $_smarty_tpl->tpl_vars['year']->value) {?> is-current<?php }?>" data-value="<?php echo $_smarty_tpl->tpl_vars['year']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['year']->value;?>
</span><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
</div><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['tabs']->value['months'], 'months', false, 'year');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['year']->value => $_smarty_tpl->tpl_vars['months']->value) {
if (!empty($_smarty_tpl->tpl_vars['months']->value)) {?><div class="b-filter__months j-timeline-months<?php if ($_smarty_tpl->tpl_vars['year']->value == $_smarty_tpl->tpl_vars['tabs']->value['y']) {?> is-active<?php }?>" data-year="<?php echo $_smarty_tpl->tpl_vars['year']->value;?>
"><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['months']->value, 'month', false, NULL, 'months', array (
  'first' => true,
  'index' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['month']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_months']->value['index']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_months']->value['first'] = !$_smarty_tpl->tpl_vars['__smarty_foreach_months']->value['index'];
?><span class="b-filter__months__tab j-timeline-months-tab is-active<?php if ((isset($_smarty_tpl->tpl_vars['__smarty_foreach_months']->value['first']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_months']->value['first'] : null)) {?> is-current<?php }?>" data-value="<?php echo $_smarty_tpl->tpl_vars['month']->value['id'];?>
"><?php echo $_smarty_tpl->tpl_vars['month']->value['name'];?>
</span><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
</div><?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
</div><?php }?></div><?php }
}
