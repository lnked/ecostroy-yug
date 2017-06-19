<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-19 10:59:13
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/view/structure/structure_tree.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_594784518b2946_99688038',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e3990df2ebcdc1629c59fc8e96ee7d216e2ebd54' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/view/structure/structure_tree.tpl',
      1 => 1469786303,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594784518b2946_99688038 (Smarty_Internal_Template $_smarty_tpl) {
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['a_tree']->value, 'item');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
$_smarty_tpl->_assignInScope('cookie', ('structure_collapse_').($_smarty_tpl->tpl_vars['item']->value['id']));
if ($_smarty_tpl->tpl_vars['item']->value['sys_name'] !== 'main') {?><li class="dd-item<?php ob_start();
echo $_smarty_tpl->tpl_vars['cookie']->value;
$_prefixVariable1=ob_get_clean();
if (isset($_COOKIE[$_prefixVariable1])) {?> dd-collapsed<?php }?> dd-<?php if ($_smarty_tpl->tpl_vars['item']->value['visible'] == 0) {?>in-<?php }?>visible" id="node-<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
" data-id="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"><?php if (isset($_smarty_tpl->tpl_vars['item']->value['a_tree']) && !empty($_smarty_tpl->tpl_vars['item']->value['a_tree']) && $_smarty_tpl->tpl_vars['item']->value['sys_name'] !== 'main') {?><button data-action="collapse" type="button" class="dd-button dd-button__collapse"<?php ob_start();
echo $_smarty_tpl->tpl_vars['cookie']->value;
$_prefixVariable2=ob_get_clean();
if (isset($_COOKIE[$_prefixVariable2])) {?> style="display: none;"<?php }?>></button><button data-action="expand" type="button" class="dd-button dd-button__expand"<?php ob_start();
echo $_smarty_tpl->tpl_vars['cookie']->value;
$_prefixVariable3=ob_get_clean();
if (!isset($_COOKIE[$_prefixVariable3])) {?> style="display: none;"<?php }?>></button><?php }?><div class="dd-handle"></div><div class="dd-content"><?php if (!isset($_smarty_tpl->tpl_vars['item']->value['m_link'])) {
if (isset($_smarty_tpl->tpl_vars['item']->value['a_tree']) && !empty($_smarty_tpl->tpl_vars['item']->value['a_tree'])) {?><i class="icon icon-folder page-icon"></i><?php } elseif ($_smarty_tpl->tpl_vars['item']->value['mod_id']) {?><i class="icon icon-file page-icon"></i><?php } elseif ($_smarty_tpl->tpl_vars['item']->value['dynamic'] == 1) {?><i class="icon icon-apps page-icon"></i><?php } elseif ($_smarty_tpl->tpl_vars['item']->value['sys_name'] == 'search') {?><i class="icon icon-search page-icon"></i><?php } else { ?><i class="icon icon-file-text page-icon"></i><?php }
if ($_smarty_tpl->tpl_vars['item']->value['redirect'] || $_smarty_tpl->tpl_vars['item']->value['access'] || $_smarty_tpl->tpl_vars['item']->value['dynamic'] == 1) {?><div class="structure__flags"><?php if ($_smarty_tpl->tpl_vars['item']->value['access']) {?><span class="label label-sm bg-danger">Ограниченный доступ</span><?php }
if ($_smarty_tpl->tpl_vars['item']->value['redirect']) {?><span class="label label-sm deep-orange" title="Редирект на другую страницу">R &rarr; <?php echo $_smarty_tpl->tpl_vars['item']->value['redirect'];?>
</span><?php }
if ($_smarty_tpl->tpl_vars['item']->value['dynamic'] == 1) {?><span class="label label-sm bg-success" title="Получаем аргументы">A</span><?php }?></div><?php }?><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if (isset($_smarty_tpl->tpl_vars['item']->value['mid'])) {?>meta/edit/<?php echo $_smarty_tpl->tpl_vars['item']->value['mid'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/edit/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['sys_name'];?>
/<?php }?>" class="structure__link"><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
</a><span class="structure__plus js-structure-controll"><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if ($_smarty_tpl->tpl_vars['item']->value['mod_id']) {?>meta/add/<?php echo $_smarty_tpl->tpl_vars['item']->value['mod_id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/add/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
/<?php }?>" class="structure__plus__add label bg-dark pos-rlt m-r-xs"><b class="arrow left b-dark pull-in"></b>+</a><span class="structure__control animate"><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if ($_smarty_tpl->tpl_vars['item']->value['mod_id']) {?>meta/add/<?php echo $_smarty_tpl->tpl_vars['item']->value['mod_id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/add/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
/<?php }?>" class="structure__control__icon icon icon-file-plus" title="Добавить подраздел"></a><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if (isset($_smarty_tpl->tpl_vars['item']->value['mid'])) {?>meta/edit/<?php echo $_smarty_tpl->tpl_vars['item']->value['mid'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/edit/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
/<?php }?>" class="structure__control__icon icon icon-edit" title="Редактировать раздел"></a><a href="#" onclick="ajax_vis_toggle(this, <?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
,<?php if (isset($_smarty_tpl->tpl_vars['item']->value['mid'])) {
echo $_smarty_tpl->tpl_vars['item']->value['mid'];
} else { ?>0<?php }?>);return false;" class="structure__control__icon icon icon-eye<?php if ($_smarty_tpl->tpl_vars['item']->value['visible'] == 0) {?>-off<?php }?>" title="Отображение страницы"></a><?php if ($_smarty_tpl->tpl_vars['item']->value['id'] !== '1') {?><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if (isset($_smarty_tpl->tpl_vars['item']->value['mid'])) {?>meta/del/<?php echo $_smarty_tpl->tpl_vars['item']->value['mid'];?>
/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/del/<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
/<?php }?>" class="structure__control__icon icon icon-delete" title="Удалить раздел" onclick="return cp.dialog('Вы действительно хотите удалить раздел?');" data-no-instant></a><?php }?></span></span><?php }?></div><?php if (isset($_smarty_tpl->tpl_vars['item']->value['a_tree']) && !empty($_smarty_tpl->tpl_vars['item']->value['a_tree'])) {?><ol class="dd-list" id="item<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"><?php $_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/structure_tree.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('a_tree'=>$_smarty_tpl->tpl_vars['item']->value['a_tree']), 0, true);
?>
</ol><?php }?></li><?php }
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}
}
