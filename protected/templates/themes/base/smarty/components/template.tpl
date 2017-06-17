{strip}
<template id="tmpl-notification">
    <div class="notification" id="popup_notification">
        {literal}{{#title}}{/literal}
        {literal}<div class="notification__header">{{title}}</div>{/literal}
        {literal}{{/title}}{/literal}

        {literal}{{#text}}{/literal}
        <div class="notification__content clearfix">
            {literal}{{text}}{/literal}
        </div>
        {literal}{{/text}}{/literal}
    </div>
</template>

<template id="tmpl-popup-message">
    <div class="popup popup_message" id="popup_message">
        <div class="popup__dialog popup__dialog--simple">
            <div class="popup__content">
                <b class="popup__close j-popup-close">
                    <svg class="popup__close__ico" role="image">
                        <use xlink:href="#close"/>
                    </svg>
                </b>

                {literal}{{#if title}}{/literal}
                <header class="popup__header">
                    {literal}<span class="popup__header__title">{{title}}</span>{/literal}
                </header>
                {literal}{{/if}}{/literal}

                {literal}{{#if text}}{/literal}
                <div class="popup__body clearfix">
                    {literal}{{text}}{/literal}
                </div>
                {literal}{{/if}}{/literal}
            </div>
        </div>
    </div>
</template>

<template id="tmpl-popup-message">
    <div class="popup popup_error" id="popup_error">
        <div class="popup__dialog popup__dialog--simple">
            <div class="popup__content">
                <b class="popup__close j-popup-close">
                    <svg class="popup__close__ico" role="image">
                        <use xlink:href="#close"/>
                    </svg>
                </b>

                {literal}{{#if title}}{/literal}
                <header class="popup__header">
                    {literal}<span class="popup__header__title">{{title}}</span>{/literal}
                </header>
                {literal}{{/if}}{/literal}

                {literal}{{#if text}}{/literal}
                <div class="popup__body clearfix">
                    {literal}{{text}}{/literal}
                </div>
                {literal}{{/if}}{/literal}
            </div>
        </div>
    </div>
</template>

<template id="tmpl-popup-feedback">
    <div class="popup" id="popup-feedback">
        <div class="popup__dialog popup__dialog--simple">
            <div class="popup__content">
                <b class="popup__close j-popup-close">
                    <svg class="popup__close__ico" role="image">
                        <use xlink:href="#close"/>
                    </svg>
                </b>

                <header class="popup__header">
                    <span class="popup__header__title">Обратная связь</span>
                </header>

                <div class="popup__body clearfix">
                    <form method="post" action="/api/send" class="form-ajax form-reset request-form request-form--clear">
                        <label class="f-label">
                            <input name="name" class="f-input f-input--pure" placeholder="Ваше имя">
                        </label>

                        <label class="f-label">
                            <input name="phone" class="f-input f-input--pure mask-phone" placeholder="Ваш телефон">
                        </label>

                        <label class="f-label">
                            <textarea name="message" class="f-textarea f-textarea--pure" placeholder="Ваше сообщение"></textarea>
                        </label>
                        
                        <div class="f-center">
                            <button type="submit" class="button">Отправить сообщение</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
{/strip}