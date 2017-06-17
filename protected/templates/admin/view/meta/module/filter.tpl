{strip}
{assign var="pagerCookie" value="module_limit_$module_id"}

<div class="button-container clearfix">
    <div class="button-container--right">
        {*
        {if $meta_filter}
            {foreach $meta_filter as $name => $filter}
                {if !empty($filter.list)}
                <div class="button-container-select button-container-select--{$filter.type}">
                    <select name="$name"{if $filter.type == 'multiselect'} multiple{/if} onchange="Module.setSort(this, {$module_id}, '{$name}')" placeholder="{$filter.name|escape}">
                        {if $filter.type != 'multiselect'}
                        <option value="">- {$filter.name|escape} -</option>
                        {/if}
                        {foreach $filter.list as $v => $n}
                            <option value="{$v}"{if isset($meta_cookie[$name]) && (is_array($meta_cookie[$name]) && in_array($v, $meta_cookie[$name]) || is_string($meta_cookie[$name]) && $v == $meta_cookie[$name])} selected{/if}>{$n}</option>
                        {/foreach}
                    </select>
                </div>
                {/if}
            {/foreach}
        {/if}
        *}

        <div class="button-container-limit">
            <select name="limit" onchange="Module.setLimit(this, {$module_id})">
                <option value="">На странице</option>
                {foreach $page_count as $page}
                    <option value="{$page}"{if isset($smarty.cookies[$pagerCookie]) && $smarty.cookies[$pagerCookie] == $page} selected{/if}>{$page}</option>
                {/foreach}
            </select>
        </div>
    </div>

    <a href="{$base_path}/module/add/{$module_id}{if isset($back_to_page ) && $back_to_page !== '' && $back_to_page > 0}?back_to_page={$back_to_page}{/if}" class="button"><i class="icon icon-plus-square"></i>Добавить поле</a>
    {if $smarty.session.userinf.gid == 10}
    <a href="/{$ADMIN_DIR}/modules/index/edit/{$module_id}" class="button button-gray"><i class="icon icon-settings"></i>Настройки модуля</a>
    {/if}
</div>
{/strip}