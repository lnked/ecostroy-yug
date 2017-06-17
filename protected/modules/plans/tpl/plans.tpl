{strip}
<div class="s-plans__group">
    {if $tabs}
        {foreach $tabs as $liter => $tab name=liters}
        <div class="s-plans__group__item">
            <div class="s-plans__header">Литер {$liter}</div>

            <div class="s-plans__tabs">
            {foreach $tab as $floor name=floors}
                <a href="#liter-{$liter}-{$floor}" data-target="liter-{$liter}-{$floor}" class="s-plans__tabs__item j-tabs-trigger{if $smarty.foreach.liters.last && $smarty.foreach.floors.last} is-current{/if}">
                    {$floor} этаж
                </a>
            {/foreach}
            </div>
        </div>
        {/foreach}
    {/if}
</div>

{if $plans}
<div class="s-plans__carousel">
    {foreach $plans as $liter => $floors name=liters}
        {foreach $floors as $floor => $image name=floors}
        <div class="s-plans__carousel__item j-tabs-content{if $smarty.foreach.liters.last && $smarty.foreach.floors.last} is-active{/if}" data-system="liter-{$liter}-{$floor}">
            <img src="{$image.file}" class="s-plans__carousel__item__image" alt="">
        </div>
        {/foreach}
    {/foreach}
</div>
{/if}
{/strip}