<div class="section__sub-title">Приобрести жилье можно несколькими способами</div>

{if $tabs}
<nav class="nav-tabs">
{foreach $tabs as $system => $tab}
    <a href="#tab-{$system}" class="nav-tabs__link j-tabs-trigger{if $tab.active} is-current{/if}" data-target="tab-{$system}">{$tab.name}</a>
{/foreach}
</nav>
{/if}

{if $payment}
<div class="tabs-content">
    {foreach $payment as $item}
        <div class="accordion-tab">
            <a href="#tab-{$item.system}" class="accordion-tab__link j-tabs-trigger{if $item.active} is-current{/if}" data-target="tab-{$item.system}">Наличные</a>
        </div>

        <div class="tabs-content__block j-tabs-content{if $item.active} is-active{/if}" data-system="tab-{$item.system}">
            {$item.content}
            
            {if $item.logos}
            <ul class="banks">
                {foreach $item.logos as $logo}
                <li class="banks__item">
                    <div class="banks__item__logo">
                        <img data-src="{$logo.file}" class="banks__item__src" title="{$logo.title}" alt="{$logo.title}">
                    </div>
                </li>
                {/foreach}
            </ul>
            {/if}
        </div>
    {/foreach}

    <hr class="separator">

    <form method="post" action="/api/send" class="form-ajax form-reset request-form">
        <div class="request-form__title">Получите подробную консультацию у нашего специалиста</div>

        <div class="request-form__content">
            <input name="phone" class="f-input mask-phone" placeholder="Ваш телефон">
            <button type="submit" class="button">ЗАКАЗАТЬ ЗВОНОК</button>
        </div>
    </form>
</div>
{/if}