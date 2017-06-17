<script type="text/html" id="tpl_status_payment">
	<div class="popover" id="popover-status_payment">
		<span class="popover__triangle"></span>
		<ul>
		{foreach from=$settings.status_payment item=item}
			<li>
				{include file="system/controll.tpl"
                    type        =   "radio"
                    needle		= 	"0"
                    addclass    =   "controll_fill"
                    name        =   "payment[]"
                    value       =   $order.value
                    text       	=   $order.variable
                }
			</li>
		{/foreach}
		</ul>
	</div>
</script>

<script type="text/html" id="tpl_status_delivery">
	<div class="popover" id="popover-status_delivery">
		<span class="popover__triangle"></span>
		<ul>
		{foreach from=$settings.status_delivery item=item}
			<li>
				{include file="system/controll.tpl"
                    type        =   "radio"
                    needle		= 	"0"
                    addclass    =   "controll_fill"
                    name        =   "delivery[]"
                    value       =   $order.value
                    text       	=   $order.variable
                }
			</li>
		{/foreach}
		</ul>
	</div>
</script>

<div class="section-order">
	{*
	<div class="widget-table-title">
		<h4 class="product-order-icon">Заказы магазина</h4>
		<p class="produc-count">Всего заказов: <strong>8</strong> шт.</p>
	</div>
	*}

    {* 
    Присвоить заказам статус:
    <select name="operation" class="order-operation">
        <option value="status_id_5">Выполнен</option>
        <option value="status_id_4">Отменен</option>
        <option value="status_id_3">В доставке</option>
        <option value="status_id_2">Оплачен</option>
        <option value="status_id_1">Ожидает оплаты</option>
        <option value="status_id_0">Не подтвержден</option>
    </select>

    <a href="">Удалить отмеченные заказы</a>
    
    <button class="button">Выполнить</button>
    *}

    {*
    <table>
    <tbody><tr>
    <td class="module-table__column">Всего продано на сумму:</td>
    <td class="module-table__column">31,015.00 p.</td>
    </tr>
    <tr>
    <td class="module-table__column">Всего продано в этом году на сумму:</td>
    <td class="module-table__column">15,005.00 p.</td>
    </tr>
    <tr>
    <td class="module-table__column">Всего заказов:</td>
    <td class="module-table__column">3</td>
    </tr>
    <tr>
    <td class="module-table__column">Всего покупателей:</td>
    <td class="module-table__column">0</td>
    </tr>
    <tr>
    <td class="module-table__column">Покупателей, ожидающих подтверждения:</td>
    <td class="module-table__column">0</td>
    </tr>
    <tr>
    <td class="module-table__column">Отзывов, ожидающих подтверждения:</td>
    <td class="module-table__column">0</td>
    </tr>
    <tr>
    <td class="module-table__column">Количество партнёров:</td>
    <td class="module-table__column">0</td>
    </tr>
    <tr>
    <td class="module-table__column">Партнёров, ожидающих подтверждения:</td>
    <td class="module-table__column">0</td>
    </tr>
    </tbody></table>
    *}

    <table class="module-table" id="orders-table">
        <colgroup>
            <col width="30">    {* Чекбокс *}
            <col width="100">    {* № заказа *}
            <col>               {* Ф.И.О. покупателя *}
            <col width="150">   {* Номер телефона *}
            <col width="150">    {* Способ доставки *}
            <col width="100">    {* Способ оплаты *}
            <col width="100">    {* Стоимость *}
            <col width="120">    {* Статус *}
            <col width="130">    {* Дата и время добавления *}
            <col width="90">    {* Состав заказа *}
            <col width="70">    {* Действия *}
        </colgroup>

    	<thead>
    		<tr>
                <th class="module-table__header module-table__center">
                    {include file="system/controll.tpl"
                        type        =   "checkbox"
                        addclass    =   "controll_single"
                        name        =   "order"
                        onchange    =   "checkAll(this)"
                    }
                </th>
                <th class="module-table__header">№ заказа</th>
    			<th class="module-table__header">Ф.И.О. покупателя</th>
    			<th class="module-table__header">Номер телефона</th>
    			<th class="module-table__header">Доставка</th>
    			<th class="module-table__header">Оплата</th>
    			<th class="module-table__header">Стоимость</th>
    			<th class="module-table__header">Статус</th>
    			<th class="module-table__header">Дата</th>
                <th class="module-table__header">Состав</th>
    			<th class="module-table__header"></th>
    		</tr>
    	</thead>
    	<tbody class="order-tbody">
    	{if isset($orders)}
    	{foreach $orders as $order}
    		<tr>
                <td class="module-table__column module-table__center">
                    {include file="system/controll.tpl"
                        type        =   "checkbox"
                        addclass    =   "controll_single"
                        ctrlclass   =   "check-all-spy"
                        name        =   "order["|cat:$order.id|cat:"]"
                        value       =   $order.id
                    }
                </td>

    			<td class="module-table__column">
                    <a href="/cp/shopping/orders/item/{$order.id}">{$order.number}</a>
                </td>

    			<td class="module-table__column">{$order.user.name}</td>

    			<td class="module-table__column">{$order.user.phone}</td>

    			<td class="module-table__column">{$order.delivery}</td>

    			<td class="module-table__column">{$order.payment}</td>

    			<td class="module-table__column module-table__center">{$order.cost} руб.</td>
                
    			<td class="module-table__column">
    				{* <span class="orders-status trigger-popover" data-popover="status_payment"><span class="orders-status__text">{$order.status_payment}</span> <i class="icon icon-caret-down-circle"></i></span> *}
    				{* <span class="orders-status trigger-popover" data-popover="status_delivery"><span class="orders-status__text">{$order.status_delivery}</span> <i class="icon icon-caret-down-circle"></i></span> *}
    			</td>
               
    			<td class="module-table__column">{$order.date}</td>
    
                <td class="module-table__column"><a href="/cp/shopping/orders/item/{$order.id}">Просмотр</a></td>
    
    			<td class="module-table__column module-table__center">
                    <a href="{$base_path}/orders/print/{$order.id}?backuri={$_backuri}" onclick="order.print(event, {$order.id})" class="catalog-print" title="Удалить" data-no-instant>
                        <i class="icon icon-print"></i>
                    </a>

                    <a href="{$base_path}/orders/del/{$order.id}?backuri={$_backuri}" onclick="order.delete(event, {$order.id})" class="catalog-remove" title="Удалить" data-no-instant>
                        <i class="icon icon-delete"></i>
                    </a>
    			</td>
    		</tr>
    	{/foreach}
    	{/if}
    	</tbody>
	</table>
</div>
