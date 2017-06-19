<?php
/* Smarty version 3.1.31, created on 2017-06-19 12:22:53
  from "/Users/edik/web/ecostroy.dev/protected/modules/action/tpl/action.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.31',
  'unifunc' => 'content_594797edd14b95_20760135',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    'e148297c52b93a8f2b55b02761ccea2c059fb23d' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/modules/action/tpl/action.tpl',
      1 => 1497862691,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_594797edd14b95_20760135 (Smarty_Internal_Template $_smarty_tpl) {
?>
<div class="s-action__wrapper"><div class="s-action__special"><div class="s-action__special__title"><?php echo $_smarty_tpl->tpl_vars['action']->value['name'];?>
</div><div class="s-action__special__text"><?php echo $_smarty_tpl->tpl_vars['action']->value['description'];?>
</div><div class="s-action__special__countdown" id="countdown-holder"><div class="s-action__special__countdown__title">осталось:</div><div class="timer"><svg class="timer__icon" role="image"><use xlink:href="#timer"/></svg><div class="timer__parts" id="countdown"<?php if (isset($_smarty_tpl->tpl_vars['action']->value['dateend'])) {?> data-timestamp="<?php echo $_smarty_tpl->tpl_vars['action']->value['dateend'];?>
"<?php }?>><div class="timer__parts__column"><div class="timer__parts__digit">0</div><div class="timer__parts__caption">Дней</div></div><div class="timer__parts__column"><div class="timer__parts__digit">0</div><div class="timer__parts__caption">Часов</div></div><div class="timer__parts__column"><div class="timer__parts__digit">0</div><div class="timer__parts__caption">Минут</div></div><div class="timer__parts__column"><div class="timer__parts__digit">0</div><div class="timer__parts__caption">Секунд</div></div></div></div></div></div><div class="s-action__form"><form method="post" action="/api/send" class="form-ajax form-reset action-form"><div class="action-form__content"><div class="action-form__header action-form__center"><span class="action-form__header__large">Оставьте заявку,</span>и наш менеджер подберетлучшее решение!</div><label class="f-label"><input name="name" class="f-input" placeholder="Ваше Имя"></label><label class="f-label"><input name="phone" class="f-input mask-phone" placeholder="Ваш телефон"></label><div class="action-form__center"><button type="submit" class="button">ЗАКАЗАТЬ ЗВОНОК</button></div></div></form></div></div><?php }
}
