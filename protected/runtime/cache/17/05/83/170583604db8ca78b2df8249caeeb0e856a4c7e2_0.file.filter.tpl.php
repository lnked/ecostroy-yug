<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-17 03:34:06
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/view/meta/module/filter.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_594478fe154379_53447245',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '170583604db8ca78b2df8249caeeb0e856a4c7e2' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/view/meta/module/filter.tpl',
      1 => 1497222490,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594478fe154379_53447245 (Smarty_Internal_Template $_smarty_tpl) {
$_smarty_tpl->_assignInScope('pagerCookie', "module_limit_".((string)$_smarty_tpl->tpl_vars['module_id']->value));
?><div class="button-container clearfix"><div class="button-container--right"><div class="button-container-limit"><select name="limit" onchange="Module.setLimit(this, <?php echo $_smarty_tpl->tpl_vars['module_id']->value;?>
)"><option value="">На странице</option><?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['page_count']->value, 'page');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['page']->value) {
?><option value="<?php echo $_smarty_tpl->tpl_vars['page']->value;?>
"<?php if (isset($_COOKIE[$_smarty_tpl->tpl_vars['pagerCookie']->value]) && $_COOKIE[$_smarty_tpl->tpl_vars['pagerCookie']->value] == $_smarty_tpl->tpl_vars['page']->value) {?> selected<?php }?>><?php echo $_smarty_tpl->tpl_vars['page']->value;?>
</option><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>
</select></div></div><a href="<?php echo $_smarty_tpl->tpl_vars['base_path']->value;?>
/module/add/<?php echo $_smarty_tpl->tpl_vars['module_id']->value;
if (isset($_smarty_tpl->tpl_vars['back_to_page']->value) && $_smarty_tpl->tpl_vars['back_to_page']->value !== '' && $_smarty_tpl->tpl_vars['back_to_page']->value > 0) {?>?back_to_page=<?php echo $_smarty_tpl->tpl_vars['back_to_page']->value;
}?>" class="button"><i class="icon icon-plus-square"></i>Добавить поле</a><?php if ($_SESSION['userinf']['gid'] == 10) {?><a href="/<?php echo $_smarty_tpl->tpl_vars['ADMIN_DIR']->value;?>
/modules/index/edit/<?php echo $_smarty_tpl->tpl_vars['module_id']->value;?>
" class="button button-gray"><i class="icon icon-settings"></i>Настройки модуля</a><?php }?></div><?php }
}
