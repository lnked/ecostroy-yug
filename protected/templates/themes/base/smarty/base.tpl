{strip}
{include file="./components/meta.tpl"}

{include file="./components/svgstore.tpl"}
{include file="./components/template.tpl"}

<div class="layout-wrapper">

	{include file="./components/header.tpl"}
	
	<div class="layout-wrapper__pusher">

        {if ($_page.spa)}
            {foreach $_page.spa as $page}
            <section class="section s-{$page.sys_name} j-section" id="{$page.sys_name}-anchor" data-title="{$page.title}">
                {if $page.sys_name !== 'main'}
                    <div class="layout j-tabs">
                    {if $page.sys_name == 'advantages'}
                        <h1 class="section__title">{$page.name}</h1>
                    {elseif $page.sys_name == 'affordable-apartments'}
                        <h3 class="section__title section__title_small">{$page.name}</h3>
                    {else}
                        <h2 class="section__title">{$page.name}</h2>
                    {/if}
                {/if}
                    {$page.content}
                {if $page.sys_name !== 'main'}</div>{/if}

                {if $page.sys_name == 'contacts'}
                    {unit item='8'}
                {elseif $page.sys_name == 'plans'}
                    {unit item='9'}
                {/if}
            </section>
            {/foreach}
		{/if}

	</div>

</div>

{include file="./components/footer.tpl"}
{include file="./components/scripts.tpl"}
{/strip}