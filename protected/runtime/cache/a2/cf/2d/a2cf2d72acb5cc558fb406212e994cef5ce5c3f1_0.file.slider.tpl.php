<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-19 10:59:14
  from "/Users/edik/web/ecostroy.dev/protected/modules/slider/tpl/slider.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_5947845283b3b6_64326334',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'a2cf2d72acb5cc558fb406212e994cef5ce5c3f1' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/modules/slider/tpl/slider.tpl',
      1 => 1497626895,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_5947845283b3b6_64326334 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="s-slider__carousel" id="carousel-slider"><?php if (!empty($_smarty_tpl->tpl_vars['slider']->value)) {
$_from = $_smarty_tpl->smarty->ext->_foreach->init($_smarty_tpl, $_smarty_tpl->tpl_vars['slider']->value, 'slide', false, NULL, 'slider', array (
  'first' => true,
  'index' => true,
));
if ($_from !== null) {
foreach ($_from as $_smarty_tpl->tpl_vars['slide']->value) {
$_smarty_tpl->tpl_vars['__smarty_foreach_slider']->value['index']++;
$_smarty_tpl->tpl_vars['__smarty_foreach_slider']->value['first'] = !$_smarty_tpl->tpl_vars['__smarty_foreach_slider']->value['index'];
?><div class="s-slider__carousel__item j-slide j-image-preload<?php if ((isset($_smarty_tpl->tpl_vars['__smarty_foreach_slider']->value['first']) ? $_smarty_tpl->tpl_vars['__smarty_foreach_slider']->value['first'] : null)) {?> is-last-active is-active<?php }?>"style="background-image: url(<?php echo $_smarty_tpl->tpl_vars['slide']->value['preview']['file'];?>
);"data-large="<?php echo $_smarty_tpl->tpl_vars['slide']->value['original']['file'];?>
"></div><?php
}
}
$_smarty_tpl->smarty->ext->_foreach->restore($_smarty_tpl, 1);
}?></div><div class="s-slider__container"><div class="layout"><div class="s-slider__container__content"><div class="s-slider__righter"><div class="s-slider__marked"><strong>Сдача первого дома</strong> - 30.09.2017</div></div><div class="s-slider__title">ЖК “ЕВРОПЕЙСКИЙ”</div><div class="s-slider__form"><form method="post" action="/api/send" class="form-ajax form-reset request-form request-form--nobg"><ul class="s-slider__form__check"><li class="s-slider__form__check__item">Надежный застройщик на Юге России</li><li class="s-slider__form__check__item">Минимальная цена от - <strong>1 000 000</strong> <span class="rouble">a</span></li></ul><div class="request-form__content"><input name="phone" class="f-input mask-phone" placeholder="Ваш телефон"><button type="submit" class="button">ЗАКАЗАТЬ ЗВОНОК</button></div></form></div></div></div></div><button class="s-slider__nav s-slider__nav--prev" id="carousel-slider--prev"><svg class="s-slider__nav__ico" role="image"><use xlink:href="#left-arrow"/></svg></button><button class="s-slider__nav s-slider__nav--next" id="carousel-slider--next"><svg class="s-slider__nav__ico" role="image"><use xlink:href="#right-arrow"/></svg></button><div class="s-slider__dots" id="carousel-slider--dots"></div><?php }
}
