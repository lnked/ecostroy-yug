<?php
/* Smarty version 3.1.31, created on 2017-06-19 11:25:17
  from "/Users/edik/web/ecostroy.dev/protected/modules/payment/tpl/payment.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_59478a6d8cdea1_98405111',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'bf13b523b9d1340d1c2f6675022fbe5270808e1a' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/modules/payment/tpl/payment.tpl',
      1 => 1497599245,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_59478a6d8cdea1_98405111 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="section__sub-title">Приобрести жилье можно несколькими способами</div>

<?php if ($_smarty_tpl->tpl_vars['tabs']->value) {?>
<nav class="nav-tabs">
<?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['tabs']->value, 'tab', false, 'system');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['system']->value => $_smarty_tpl->tpl_vars['tab']->value) {
?>
    <a href="#tab-<?php echo $_smarty_tpl->tpl_vars['system']->value;?>
" class="nav-tabs__link j-tabs-trigger<?php if ($_smarty_tpl->tpl_vars['tab']->value['active']) {?> is-current<?php }?>" data-target="tab-<?php echo $_smarty_tpl->tpl_vars['system']->value;?>
"><?php echo $_smarty_tpl->tpl_vars['tab']->value['name'];?>
</a>
<?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

</nav>
<?php }?>

<?php if ($_smarty_tpl->tpl_vars['payment']->value) {?>
<div class="tabs-content">
    <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['payment']->value, 'item');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['item']->value) {
?>
        <div class="accordion-tab">
            <a href="#tab-<?php echo $_smarty_tpl->tpl_vars['item']->value['system'];?>
" class="accordion-tab__link j-tabs-trigger<?php if ($_smarty_tpl->tpl_vars['item']->value['active']) {?> is-current<?php }?>" data-target="tab-<?php echo $_smarty_tpl->tpl_vars['item']->value['system'];?>
">Наличные</a>
        </div>

        <div class="tabs-content__block j-tabs-content<?php if ($_smarty_tpl->tpl_vars['item']->value['active']) {?> is-active<?php }?>" data-system="tab-<?php echo $_smarty_tpl->tpl_vars['item']->value['system'];?>
">
            <?php echo $_smarty_tpl->tpl_vars['item']->value['content'];?>

            
            <?php if ($_smarty_tpl->tpl_vars['item']->value['logos']) {?>
            <ul class="banks">
                <?php
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['item']->value['logos'], 'logo');
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['logo']->value) {
?>
                <li class="banks__item">
                    <div class="banks__item__logo">
                        <img data-src="<?php echo $_smarty_tpl->tpl_vars['logo']->value['file'];?>
" class="banks__item__src" title="<?php echo $_smarty_tpl->tpl_vars['logo']->value['title'];?>
" alt="<?php echo $_smarty_tpl->tpl_vars['logo']->value['title'];?>
">
                    </div>
                </li>
                <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>

            </ul>
            <?php }?>
        </div>
    <?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
?>


    <hr class="separator">

    <form method="post" action="/api/send" class="form-ajax form-reset request-form">
        <div class="request-form__title">Получите подробную консультацию у нашего специалиста</div>

        <div class="request-form__content">
            <input name="phone" class="f-input mask-phone" placeholder="Ваш телефон">
            <button type="submit" class="button">ЗАКАЗАТЬ ЗВОНОК</button>
        </div>
    </form>
</div>
<?php }
}
}
