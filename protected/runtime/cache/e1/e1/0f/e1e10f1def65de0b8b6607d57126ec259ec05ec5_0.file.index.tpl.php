<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-19 10:59:13
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/view/structure/index/index.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_594784517ab099_51249631',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e1e10f1def65de0b8b6607d57126ec259ec05ec5' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/view/structure/index/index.tpl',
      1 => 1469786303,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594784517ab099_51249631 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="dd-tree"><?php $_smarty_tpl->_assignInScope('structure_item', $_smarty_tpl->tpl_vars['tv_struct']->value[0]);
?><li class="dd-root dd-<?php if ($_smarty_tpl->tpl_vars['structure_item']->value['visible'] == 0) {?>in-<?php }?>visible"><div class="dd-homepage"><i class="icon icon-home"></i></div><div class="dd-content"><?php if (!isset($_smarty_tpl->tpl_vars['structure_item']->value['m_link'])) {
if (isset($_smarty_tpl->tpl_vars['structure_item']->value['a_tree']) && !empty($_smarty_tpl->tpl_vars['structure_item']->value['a_tree'])) {?><i class="icon icon-folder page-icon"></i><?php } elseif ($_smarty_tpl->tpl_vars['structure_item']->value['mod_id']) {?><i class="icon icon-file page-icon"></i><?php } elseif ($_smarty_tpl->tpl_vars['structure_item']->value['dynamic'] == 1) {?><i class="icon icon-apps page-icon"></i><?php } elseif ($_smarty_tpl->tpl_vars['structure_item']->value['sys_name'] == 'search') {?><i class="icon icon-search page-icon"></i><?php } else { ?><i class="icon icon-file-text page-icon"></i><?php }
if ($_smarty_tpl->tpl_vars['structure_item']->value['redirect'] || $_smarty_tpl->tpl_vars['structure_item']->value['access'] || $_smarty_tpl->tpl_vars['structure_item']->value['dynamic'] == 1) {?><div class="structure__flags"><?php if ($_smarty_tpl->tpl_vars['structure_item']->value['access']) {?><span class="label label-sm bg-danger">Ограниченный доступ</span><?php }
if ($_smarty_tpl->tpl_vars['structure_item']->value['redirect']) {?><span class="label label-sm deep-orange" title="Редирект на другую страницу">R &rarr; <?php echo $_smarty_tpl->tpl_vars['structure_item']->value['redirect'];?>
</span><?php }
if ($_smarty_tpl->tpl_vars['structure_item']->value['dynamic'] == 1) {?><span class="label label-sm bg-success" title="Получаем аргументы">A</span><?php }?></div><?php }?><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if (isset($_smarty_tpl->tpl_vars['structure_item']->value['mid'])) {?>meta/edit/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['mid'];?>
/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/edit/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['id'];?>
/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['sys_name'];?>
/<?php }?>" class="structure__link"><?php echo $_smarty_tpl->tpl_vars['structure_item']->value['name'];?>
</a><span class="structure__plus js-structure-controll"><span class="label bg-dark pos-rlt m-r-xs"><b class="arrow left b-dark pull-in"></b>+</span><span class="structure__control animate"><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if ($_smarty_tpl->tpl_vars['structure_item']->value['mod_id']) {?>meta/add/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['mod_id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/add/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['id'];?>
/<?php }?>" class="structure__control__icon icon icon-file-plus" title="Добавить подраздел"></a><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if (isset($_smarty_tpl->tpl_vars['structure_item']->value['mid'])) {?>meta/edit/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['mid'];?>
/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/edit/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['id'];?>
/<?php }?>" class="structure__control__icon icon icon-edit" title="Редактировать раздел"></a><a href="#" onclick="ajax_vis_toggle(this, <?php echo $_smarty_tpl->tpl_vars['structure_item']->value['id'];?>
,<?php if (isset($_smarty_tpl->tpl_vars['structure_item']->value['mid'])) {
echo $_smarty_tpl->tpl_vars['structure_item']->value['mid'];
} else { ?>0<?php }?>);return false;" class="structure__control__icon icon icon-eye<?php if ($_smarty_tpl->tpl_vars['structure_item']->value['visible'] == 0) {?>-off<?php }?>" title="Отображение страницы"></a><?php if ($_smarty_tpl->tpl_vars['structure_item']->value['id'] !== '1') {?><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/<?php if (isset($_smarty_tpl->tpl_vars['structure_item']->value['mid'])) {?>meta/del/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['mid'];?>
/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['id'];?>
?backuri=/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/structure/<?php } else { ?>structure/index/del/<?php echo $_smarty_tpl->tpl_vars['structure_item']->value['id'];?>
/<?php }?>" class="structure__control__icon icon icon-delete" title="Удалить раздел" onclick="return cp.dialog('Вы действительно хотите удалить раздел?');" data-no-instant></a><?php }?></span></span><?php }?></div><?php if (isset($_smarty_tpl->tpl_vars['structure_item']->value['a_tree'])) {?><div class="dd nestable-tree" data-path="structure" data-group="1"><ol class="dd-list"><?php $_smarty_tpl->_subTemplateRender(((string)$_smarty_tpl->tpl_vars['TPL_PATH']->value)."/structure_tree.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('a_tree'=>$_smarty_tpl->tpl_vars['structure_item']->value['a_tree']), 0, true);
?>
</ol></div><?php }?></li></div>

<?php }
}
