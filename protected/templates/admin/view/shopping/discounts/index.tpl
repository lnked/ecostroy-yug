{strip}
<div class="button-container clearfix">
    <div class="button-container-limit">
        <select name="limit">
            <option value="">На странице</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
        </select>
    </div>
    <a href="{$base_path}/discounts/add" class="button button-blue"><i class="icon icon-plus-square"></i>Добавить промокод</a>
</div>

<table class="table orders-table">
<colgroup>
    <col width="30">
    <col>
    <col width="40">
</colgroup>
<thead>
    <tr>
        <th class="checkbox-col">
            {include file="system/controll.tpl"
                type        =   "checkbox"
                addclass    =   "controll_single"
                name        =   "order"
                onchange    =   "checkAll(this)"
            }
        </th>
        <th>Наименование</th>
        <th>Промокод</th>
        <th>Количество использований</th>
        <th>Размер скидки</th>
        <th>Дата действия</th>
        <th>Статус</th>
        <th>Действия</th>
    </tr>
</thead>
<tbody>
{if $discounts}
    {foreach $discounts as $key => $promo}
    <tr data-id="{$promo.id}" class="discounts-row">
        <td class="checkbox-col">
            {include file="system/controll.tpl"
                type        =   "checkbox"
                addclass    =   "controll_single"
                ctrlclass   =   "check-all-spy"
                name        =   "order["|cat:$promo.id|cat:"]"
                value       =   $promo.id
            }
        </td>
        <td><a href="{$base_path}/discounts/edit/{$promo.id}?backuri={$_backuri}" class="p-link1">{$promo.name}</a></td>
        <td>
            <span class="inner-copy j-clipboard" data-clipboard="{$promo.code}">{$promo.code}</span>
        </td>

        <td>{$promo.limit}</td>
        
        <td>{$promo.discount}{if $promo.discount_type == 1}%{else} руб.{/if}</td>

        <td>{$promo.date_start} - {$promo.date_end}</td>
        
        <td>
            {if $promo.active == 1}
            <span class="label green">Активен</span>
            {else}
            <span class="label amber">Заблокирован</span>
            {/if}
        </td>

        <td class="tac">
            <a href="{$base_path}/discounts/edit/{$promo.id}?backuri={$_backuri}" class="icon icon-edit" title="Редактировать"></a>
            <a href="{$base_path}/discounts/del/{$promo.id}?backuri={$_backuri}" class="icon icon-delete remove-trigger" title="Удалить" onclick="return cp.dialog('Вы действительно хотите удалить?')" data-no-instant></a>
        </td>
    </tr>
    {/foreach}
{else}
    <tr>
        <td colspan="8" class="empty-row">
            Промокодов нет
        </td>
    </tr>
{/if}
</tbody>
</table>
{/strip}