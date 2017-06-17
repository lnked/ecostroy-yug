{strip}
<div class="s-actions__wrapper">
    <div class="s-actions__special">
        <div class="s-actions__special__title">Cпецпредложение!</div>
        <div class="s-actions__special__text">
            При 100% оплате скидка 2000 <span class="rouble">a</span> с квадратного метра.<br>
            Акция распространяется на литер 1 и действует до<br>1 августа.
            <strong>Спешите, время акции ограничено!</strong>
        </div>

        <div class="s-actions__special__countdown">
            <div class="s-actions__special__countdown__title">осталось:</div>

            <div class="timer">
                <svg class="timer__icon" role="image">
                    <use xlink:href="#timer"/>
                </svg>
                
                <div class="timer__parts" id="countdown">
                    <div class="timer__parts__column">
                        <div class="timer__parts__digit">10</div>
                        <div class="timer__parts__caption">Дней</div>
                    </div>

                    <div class="timer__parts__column">
                        <div class="timer__parts__digit">14</div>
                        <div class="timer__parts__caption">Часов</div>
                    </div>

                    <div class="timer__parts__column">
                        <div class="timer__parts__digit">30</div>
                        <div class="timer__parts__caption">Минут</div>
                    </div>

                    <div class="timer__parts__column">
                        <div class="timer__parts__digit">16</div>
                        <div class="timer__parts__caption">Секунд</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="s-actions__form">
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