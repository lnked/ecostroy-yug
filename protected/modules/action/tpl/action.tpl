{strip}
<div class="s-action__wrapper">
    <div class="s-action__special">
        <div class="s-action__special__title">{$action.name}</div>
        <div class="s-action__special__text">
            {$action.description}
        </div>

        <div class="s-action__special__countdown" id="countdown-holder">
            <div class="s-action__special__countdown__title">осталось:</div>

            <div class="timer">
                <svg class="timer__icon" role="image">
                    <use xlink:href="#timer"/>
                </svg>
                
                <div class="timer__parts" id="countdown"{if isset($action.dateend)} data-timestamp="{$action.dateend}"{/if}>
                    <div class="timer__parts__column">
                        <div class="timer__parts__digit">0</div>
                        <div class="timer__parts__caption">Дней</div>
                    </div>

                    <div class="timer__parts__column">
                        <div class="timer__parts__digit">0</div>
                        <div class="timer__parts__caption">Часов</div>
                    </div>

                    <div class="timer__parts__column">
                        <div class="timer__parts__digit">0</div>
                        <div class="timer__parts__caption">Минут</div>
                    </div>

                    <div class="timer__parts__column">
                        <div class="timer__parts__digit">0</div>
                        <div class="timer__parts__caption">Секунд</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="s-action__form">
        <form method="post" action="/api/send" class="form-ajax form-reset action-form">
            <div class="action-form__content">
                <div class="action-form__header action-form__center">
                    <span class="action-form__header__large">Оставьте заявку,</span>
                    и наш менеджер подберет 
                    лучшее решение!
                </div>
                    
                <label class="f-label">
                    <input name="name" class="f-input" placeholder="Ваше Имя">
                </label>
                
                <label class="f-label">
                    <input name="phone" class="f-input mask-phone" placeholder="Ваш телефон">
                </label>

                <div class="action-form__center">
                    <button type="submit" class="button">ЗАКАЗАТЬ ЗВОНОК</button>
                </div>
            </div>
        </form>
    </div>
</div>
{/strip}