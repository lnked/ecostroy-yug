{strip}
<table class="module-table" id="meta_data">
    {if !empty( $meta_list )}
    <colgroup>
        <col width="30">
        {foreach item=item from=$meta_fields}
            {if $item.in_list}
                {if $item.f_sys_name == 'ord'}
                    <col width="100">
                {elseif $item.f_sys_name == 'visible'}
                    <col width="50">
                {else}
                    <col>
                {/if}
            {/if}
        {/foreach}
        <col width="65">
    </colgroup>
    {/if}

    <thead>
        <tr>
            {if !empty( $meta_list )}
                {assign var="colspan" value=$meta_fields|count_array:"in_list":"1":"1"}
                {math equation="x+1" x=$colspan assign="colspan"}
            {else}
                {assign var="colspan" value="1"}
            {/if}

            <th class="module-table__header" colspan="{$colspan}">{$meta_module.name}</th>
        </tr>
    </thead>

    <tbody>
    {if !empty( $meta_list )}
        <tr>
            <td class="module-table__sub-header module-table__center">
                {include file="system/controll.tpl"
                    type        =   "checkbox"
                    addclass    =   "controll_single"
                    name        =   "checkall"
                    onchange    =   "checkAll(this)"
                }
            </td>
            {foreach item=item from=$meta_fields}
                {if $item.in_list}
                    {if $item.f_sys_name == 'visible'}
                        <td class="module-table__sub-header module-table__center">
                            <span class="icon icon-eye"></span>
                        </td>
                    {else}
                        <td class="module-table__sub-header">{$item.f_name|strip_tags|escape}</td>
                    {/if}
                {/if}
            {/foreach}
            <td class="module-table__sub-header"></td>
        </tr>
        
        {if isset($meta_list.result )}
            {assign var='result' value=$meta_list.result}
        {else}
            {assign var='result' value=$meta_list}
        {/if}
        
        {foreach item=item from=$result name=i}
            {assign var="index" value='0'}
            <tr>
                <td class="module-table__column module-table__center">
                    {include file="system/controll.tpl"
                        type        =   "checkbox"
                        addclass    =   "controll_single"
                        ctrlclass   =   "check-all-spy"
                        name        =   "checked["|cat:$item.id|cat:"]"
                        value       =   $item.id
                    }
                </td>
                {foreach item=it from=$item key=k}
                    {if $k == "visible"}
                        <td class="module-table__column module-table__center">
                            {*
                            <label class="switch">
                                <input name="visible" onchange="return cp.toggleModule(this, event);" type="checkbox"{if $product.visible == 1} checked {/if}>
                                <div class="slider"></div>
                            </label>
                            *}

                            <a href="/{$ADMIN_DIR}/meta/module/visible/{$meta_module.id}/{$item.id}" class="icon icon-eye{if $it == 0}-off{/if} visible-link" onclick="return cp.toggleModule(this, event);" data-no-instant></a>
                        </td>
                    {elseif $k == "ord"}
                        <td class="module-table__column">{$it}</td>
                    {elseif $k != "id"}
                        <td class="module-table__column">
                            {if $index == '0'}
                                {* <a href="{$base_path}/module/edit/{$meta_module.id}/{$item.id}{if isset($back_to_page) && $back_to_page !== '' && $back_to_page > 0}?back_to_page={$back_to_page}{/if}" title="Редактировать"><span class="catalog-edit icon icon-edit"></span> {$it|stripslashes}</a> *}
                                <a href="{$base_path}/module/edit/{$meta_module.id}/{$item.id}?backuri={$_backuri}" title="Редактировать"><span class="catalog-edit icon icon-edit"></span> {$it|stripslashes}</a>
                                {assign var="index" value='1'}
                            {else}
                                {$it|stripslashes}
                            {/if}
                        </td>
                    {elseif is_array($it)}
                        <td>{$it.value_res}</td>
                    {/if}
                {/foreach}
                <td class="module-table__column module-table__center">
                    {if $check_dispatch=="1"}
                        <a href="icon icon-envelope"><a href="{$base_path}/module/dispatch/{$meta_module.id}/{$item.id}" title="Разослать"></a>
                    {/if}

                    {* <a href="{$base_path}/module/edit/{$meta_module.id}/{$item.id}{if isset($back_to_page ) && $back_to_page !== '' && $back_to_page > 0}?back_to_page={$back_to_page}{/if}" class="icon icon-edit" title="Редактировать"></a> *}

                    <a href="{$base_path}/module/del/{$meta_module.id}/{$item.id}?backuri={$_backuri}" class="catalog-remove remove-trigger" title="Удалить" onclick="return cp.dialog('Вы действительно хотите удалить?')" data-no-instant>
                        <i class="icon icon-delete"></i>
                    </a>
                </td>
            </tr>
        {/foreach}
    {else}
        <tr>
            <td colspan="{$colspan}" class="module-table__column module-table__empty">Данные отсутствуют</td>
        </tr>
    {/if}    
    </tbody>
</table>
{/strip}