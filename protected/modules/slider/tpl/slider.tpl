{strip}
<div class="s-slider__carousel" id="carousel-slider">
{if !empty($slider)}
    {foreach $slider as $slide name=slider}
        <div class="s-slider__carousel__item j-slide j-image-preload{if $smarty.foreach.slider.first} is-last-active is-active{/if}"
            style="background-image: url({$slide.preview.file});"
            data-large="{$slide.original.file}"></div>
    {/foreach}
{/if}
</div>

<div class="s-slider__container">
    <div class="layout">
        <div class="s-slider__container__content">

            <div class="s-slider__righter">
                <div class="s-slider__marked"><strong>Сдача первого дома</strong> - 30.09.2017</div>
            </div>

            <div class="s-slider__title">ЖК “ЕВРОПЕЙСКИЙ”</div>

            <div class="s-slider__form">
                <form method="post" action="/api/send" class="form-ajax form-reset request-form request-form--nobg">
                    
                    <ul class="s-slider__form__check">
                        <li class="s-slider__form__check__item">Надежный застройщик на Юге России</li>
                        <li class="s-slider__form__check__item">Минимальная цена от - <strong>1 000 000</strong> <span class="rouble">a</span></li>
                    </ul>

                    <div class="request-form__content">
                        <input name="phone" class="f-input mask-phone" placeholder="Ваш телефон">
                        <button type="submit" class="button">ЗАКАЗАТЬ ЗВОНОК</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<button class="s-slider__nav s-slider__nav--prev" id="carousel-slider--prev">
    <svg class="s-slider__nav__ico" role="image">
        <use xlink:href="#left-arrow"/>
    </svg>
</button>

<button class="s-slider__nav s-slider__nav--next" id="carousel-slider--next">
    <svg class="s-slider__nav__ico" role="image">
        <use xlink:href="#right-arrow"/>
    </svg>
</button>

<div class="s-slider__dots" id="carousel-slider--dots"></div>
{/strip}