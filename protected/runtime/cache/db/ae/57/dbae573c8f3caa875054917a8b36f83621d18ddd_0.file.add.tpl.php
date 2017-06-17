<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-17 03:58:56
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/view/blocks/items/add.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_59447ed0d2a550_63514779',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'dbae573c8f3caa875054917a8b36f83621d18ddd' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/view/blocks/items/add.tpl',
      1 => 1496159026,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
    'file:system/editor.tpl' => 1,
    'file:system/group.tpl' => 1,
    'file:system/buttons.tpl' => 1,
  ),
),false)) {
function content_59447ed0d2a550_63514779 (Smarty_Internal_Template $_smarty_tpl) {
?>
<form action="<?php echo $_smarty_tpl->tpl_vars['request_path']->value;?>
" id="form" method="post"><input type="hidden" name="action" value="block_add"><table class="table"><col width="200"><col><thead><tr><th colspan="2">Добавление элемента</th></tr></thead><tbody><tr><td class="h hl">Зона вывода <span class="ness_color">*</span></td><td><select name="zone_id" class="ness"><option value="">..выбрать</option><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['zone_list']->value, 'item');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?><option value="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"><?php echo htmlspecialchars($_smarty_tpl->tpl_vars['item']->value['name'], ENT_QUOTES, 'UTF-8', true);?>
</option><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
</select></td></tr><tr><td class="h hl"><?php echo t('titles.name');?>
 <span class="ness_color">*</span></td><td><input name="name" class="w50 ness"></td></tr><tr><td class="h hl">На каких страницах отображать блок?</td><td><textarea name="pages_on" cols="50" rows="5" class="mb10"></textarea><div class="apply notice mb0">Перечислите системные имена страниц ( например news; company; about; ), на которых должен выводится блок, разделяя их точкой с запятой (;)<br>Если оставить поле пустым, то блок будет отображаться на всех страницах!</div></td></tr><tr><td class="h hl">На каких страницах не отображать блок?</td><td><textarea name="pages_off" cols="50" rows="5" class="mb10"></textarea><div class="apply notice mb0">Перечислите системные имена страниц ( например news; company; about; ), на которых не должен выводится блок, разделяя их точкой с запятой (;)<br>Если оставить поле пустым, то блок будет отображаться на всех страницах!</div></td></tr><tr><td class="h hl">Локализация</td><td><div class="width-50" style="position: relative"><select name="locale"><option value="ru">Русский язык</option><option value="en">Английский язык</option></select></div></td></tr><tr><td class="h hl">Модуль</td><td><div class="width-50" style="position: relative"><select name="module"><option value="0">..выбрать модуль</option><?php if (isset($_smarty_tpl->tpl_vars['modules_list']->value)) {
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['modules_list']->value, 'item');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?><option value="<?php echo $_smarty_tpl->tpl_vars['item']->value['id'];?>
"<?php if ($_smarty_tpl->tpl_vars['block_item']->value['module'] == $_smarty_tpl->tpl_vars['item']->value['id']) {?> selected<?php }?>><?php echo $_smarty_tpl->tpl_vars['item']->value['name'];?>
: <?php echo $_smarty_tpl->tpl_vars['item']->value['func_name'];?>
</option><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}?></select></div></td></tr><tr><td class="h hl">Содержимое блока</td><td><?php $_smarty_tpl->_subTemplateRender("file:system/editor.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('editor_name'=>"block_cont",'editor_id'=>"block_cont",'editor_cont'=>'','editor_hightlight'=>"php",'editor_save_btn'=>true), 0, false);
?>
</td></tr><tr><td class="h hl">Сортировка</td><td><input name="ord" class="ord integer reducing-trigger" value="<?php echo $_smarty_tpl->tpl_vars['next_ord']->value;?>
"></td></tr><tr><td class="h hl">Активен</td><td><?php $_smarty_tpl->_subTemplateRender("file:system/group.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array('name'=>"visible",'list'=>array(array('value'=>'1','text'=>"Да",'default'=>true),array('value'=>'0','text'=>"Нет"))), 0, false);
?>
</td></tr></tbody></table><?php $_smarty_tpl->_subTemplateRender("file:system/buttons.tpl", $_smarty_tpl->cache_id, $_smarty_tpl->compile_id, 0, $_smarty_tpl->cache_lifetime, array(), 0, false);
?>
</form><?php }
}
