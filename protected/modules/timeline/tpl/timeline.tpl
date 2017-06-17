{strip}
<div class="s-timeline__carousel carousel j-timeline" id="timeline">
    <script>
        var timelineConfig = {$json};
    </script>

    <div class="carousel__outer">
        <div class="carousel__wrapper j-timeline-slider" id="timeline-carousel">
            {if !empty($timeline[$tabs.y][$tabs.m])}
                {foreach $timeline[$tabs.y][$tabs.m] as $photo}
                <div class="carousel__item slick-slide">
                    <a href="{$photo.original}" onclick="return false" class="carousel__item__image zoom">
                        <img src="{$photo.preview}" class="carousel__item__image__src" alt="">
                    </a>
                </div>
                {/foreach}
            {/if}
        </div>
    </div>

    {if $tabs.years && $tabs.months}
    <div class="b-filter is-active" id="s-timeline-filter">
        <div class="b-filter__years j-timeline-years">
        {foreach $tabs.years as $year name=years}
            <span class="b-filter__years__tab j-timeline-years-tab{if $tabs.y == $year} is-current{/if}" data-value="{$year}">
                {$year}
            </span>
        {/foreach}
        </div>

        {foreach $tabs.months as $year => $months}
            {if !empty($months)}
            <div class="b-filter__months j-timeline-months{if $year == $tabs.y} is-active{/if}" data-year="{$year}">
                {foreach $months as $month name=months}
                <span class="b-filter__months__tab j-timeline-months-tab is-active{if $smarty.foreach.months.first} is-current{/if}" data-value="{$month.id}">
                    {$month.name}
                </span>
                {/foreach}
            </div>
            {/if}
        {/foreach}
    </div>
    {/if}

</div>

{/strip}