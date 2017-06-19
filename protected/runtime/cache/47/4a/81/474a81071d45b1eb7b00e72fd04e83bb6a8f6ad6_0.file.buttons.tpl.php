<?php
/* Smarty version 3.1.31, created on 2017-06-19 12:27:12
  from "/Users/edik/web/ecostroy.dev/protected/templates/admin/system/buttons.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_594798f070b357_73559689',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '474a81071d45b1eb7b00e72fd04e83bb6a8f6ad6' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/admin/system/buttons.tpl',
      1 => 1495750055,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594798f070b357_73559689 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="button-container"><button class="button is-save" name="save" type="submit" onclick="return CheckAndSubmit('form_mdd')"><i class="icon icon-save"></i><?php echo t('buttons.save.and.close');?>
</button><button class="button is-apply" name="apply" type="submit" onclick="return CheckAndSubmit('form_mdd')"><i class="icon icon-check-square"></i><?php echo t('buttons.save');?>
</button><span class="button-container__title">или</span><a class="button-link" href="<?php echo $_smarty_tpl->tpl_vars['base_path']->value;?>
/"><i class="icon icon-arrow-left"></i><?php echo t('buttons.cancel');?>
</a></div><?php }
}
