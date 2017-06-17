{strip}
<ul class="s-documents__list j-documents" id="documents">
{if !empty($documents)}
    {foreach $documents as $doc name=documents}
        {if $doc.docs}
            {if !$smarty.foreach.documents.first}
                <li class="s-documents__list__header is-motion is-hidden">
                    <div class="s-documents__list__header__title">
                        {$doc.name}
                    </div>
                </li>
            {/if}
    
            {foreach $doc.docs as $image}
                <li class="s-documents__list__item{if !$smarty.foreach.documents.first} is-motion is-hidden{/if}">
                    <a href="{$image.original.file}" class="s-documents__list__item__link zoom" data-fancybox="gallery" target="_blank">
                        <span class="s-documents__list__item__image">
                            <img class="lazy" data-src="{$image.preview.file}" alt="">
                            <noscript><img src="{$image.preview.file}" alt=""></noscript>

                            <svg class="s-documents__list__item__checked" role="image">
                                <use xlink:href="#checked"/>
                            </svg>
                        </span>

                        <span class="s-documents__list__item__title">{$image.original.title}</span>
                    </a>
                </li>
            {/foreach}
        {/if}
    {/foreach}
{/if}
</ul>

<div class="page-button">
    <div class="page-button__center">
        <a href="/documents.zip" class="button-link" download>Скачать докуметы</a>
    </div>
</div>

<div class="page-button _down">
    <span class="button j-load-documents" data-motion="show">
        <span class="button__text--up">СКРЫТЬ ДОКУМЕНТЫ</span>
        <span class="button__text--down">ЕЩЕ ДОКУМЕНТЫ</span>
    </span>
</div>
{/strip}