{strip}
<form action="" method="get" class="button-container clearfix">
	<div class="button-container-limit">
		<select name="limit" onchange="catalog.setLimit('catalog', this)">
			<option value="">На странице</option>
			{foreach $page_count as $page}
				<option value="{$page}"{if $page == $limit} selected{/if}>{$page}</option>
			{/foreach}
		</select>
	</div>

	<a href="{$base_path}/catalog/add" class="button button-blue"><i class="icon icon-plus-square"></i>Добавить товар</a>
	
	{if !empty($smarty.get)}
	<a href="{$base_path}/catalog" class="button"><i class="icon icon-format-clear-all"></i>Сбросить фильтры</a>
	{/if}

	<span class="catalog-disable" id="remove-button">
		<button type="button" class="button button-red" onclick="catalog.deleteAll(event)">
			<i class="icon icon-delete"></i>Удалить выбранные товары
		</button>
	</span>
</form>

<div class="catalog">
	<table class="module-table" id="module-table">
		<colgroup>
			<col width="30"> 	{* Чекбокс *}
			<col width="50"> 	{* Номер *}
			<col> 				{* Название *}
			<col width="300"> 	{* Категория *}
			<col width="90"> 	{* Цена, руб. *}
			<col width="70"> 	{* Скидка *}
			<col width="70"> 	{* Остаток, шт. *}
			<col width="60"> 	{* На сайте *}
			<col width="60"> 	{* Клонирование *}
			<col width="70"> 	{* Акция *}
			<col width="50"> 	{* Отображать *}
			<col width="30"> 	{* Действия *}
		</colgroup>
		<thead>
			<tr>
				<th class="module-table__header module-table__center">
					{include file="system/controll.tpl"
						type        =   "checkbox"
						addclass    =   "controll_single"
						name        =   "order"
						onchange    =   "catalog.checkAll(this)"
					}
				</th>
				<th class="module-table__header">
					<span class="module-table__sort{if $sort.name == 'id'} {$sort.by}{/if}" onclick="catalog.sort('id')">№</span>
				</th>
				<th class="module-table__header">
					<span class="module-table__sort{if $sort.name == 'name'} {$sort.by}{/if}" onclick="catalog.sort('name')">Название</span>
				</th>
				<th class="module-table__header">
					<span class="module-table__sort{if $sort.name == 'category'} {$sort.by}{/if}" onclick="catalog.sort('category')">Категория</span>
				</th>
				<th class="module-table__header">
					<span class="module-table__sort{if $sort.name == 'price'} {$sort.by}{/if}" onclick="catalog.sort('price')">Цена, р.</span>
				</th>
				<th class="module-table__header module-table__center">Скидка</th>
				<th class="module-table__header module-table__center">Остаток</th>
				<th class="module-table__header module-table__center">Ссылка</th>
				<th class="module-table__header module-table__center">Клон</th>
				<th class="module-table__header module-table__center">
					<span class="module-table__sort{if $sort.name == 'special'} {$sort.by}{/if}" onclick="catalog.sort('special')">Акция</span>
				</th>
				<th class="module-table__header module-table__center"><i class="catalog-eye icon icon-eye"></i></th>
				<th class="module-table__header"></th>
			</tr>
			<tr>
				<td class="module-table__sub-header"></td>
				<td class="module-table__sub-header">
					<input name="id" class="catalog-input integer"{if $search.id} value="{$search.id}"{/if} placeholder="ID" onkeypress="catalog.search('id', this.value, true, event)">
				</td>
				<td class="module-table__sub-header">
					<input name="name" class="catalog-input"{if $search.name} value="{$search.name}"{/if} placeholder="Поиск по названию..." onkeypress="catalog.search('name', this.value, true, event)">
				</td>
				<td class="module-table__sub-header">
				{if $category}
				<div class="catalog-select">
					<select name="category" onchange="catalog.search('category', this.value)"><option value="">Выберите категорию</option>>
					{foreach $category as $item}
						<option value="{$item.id}"{if $item.id == $search.selected} selected{/if}>{$item.name}</option>

						{if !empty($item.tree)}
							{foreach $item.tree as $child}
							<option value="{$child.id}"{if $child.id == $search.selected} selected{/if}>---- {$child.name}</option>
							{/foreach}
						{/if}

					{/foreach}
					</select>
				</div>
				{/if}
				</td>
				<td class="module-table__sub-header"></td>
				<td class="module-table__sub-header"></td>
				<td class="module-table__sub-header"></td>
				<td class="module-table__sub-header"></td>
				<td class="module-table__sub-header"></td>
				<td class="module-table__sub-header module-table__center">
					<label class="switch">
						<input name="special" value="1" onchange="catalog.search('special', Number(this.checked))" type="checkbox"{if $search.special == 1} checked{/if}>
						<div class="slider"></div>
					</label>
				</td>
				<td class="module-table__sub-header module-table__center">
					<label class="switch">
						<input name="visible" value="1" onchange="catalog.search('visible', Number(this.checked))" type="checkbox"{if $search.visible == 1} checked{/if}>
						<div class="slider"></div>
					</label>
				</td>
				<td class="module-table__sub-header"></td>
			</tr>
		</thead>
		<tbody>
		{if $products}
			{foreach from=$products item=product}
			<tr data-id="{$product.id}" id="catalog-row-{$product.id}" class="module-table__row product-row{if $marked == $product.id} module-table__row--marked{/if}">
				<td class="module-table__column module-table__center">
				    {include file="system/controll.tpl"
				        type        =   "checkbox"
				        addclass    =   "controll_single"
				        ctrlclass   =   "check-all-spy"
				        name        =   "order["|cat:$product.id|cat:"]"
				        value       =   $product.id
				        onchange    =   "catalog.checkItem(this)"
				    }
				</td>

				<td class="module-table__column module-table__center">{$product.id}</td>

				<td class="module-table__column">
					<a href="{$base_path}/catalog/edit/{$product.id}?backuri={$_backuri}" title="Редактировать"><span class="catalog-edit icon icon-edit"></span> {$product.name}</a>
				</td>

				<td class="module-table__column">
					{if isset($product.category.name)}
						{$product.category.name}
					{else}
						<span class="label bg-light">Не указана</span>
					{/if}
				</td>

				<td class="module-table__column">
					<span>{$product.price|to_money}</span>
				</td>

				<td class="module-table__column module-table__center">
					<span>{$product.discount}</span>&nbsp;
					{if $product.discount_type == 0}
					<span>%</span>
					{elseif $product.discount_type == 1}
					<span>₽</span>
					{/if}
				</td>

				<td class="module-table__column module-table__center">
					{$product.balance}
				</td>

				<td class="module-table__column module-table__center">
				{if $product.link}
					<a href="{$product.link}" class="catalog-view" target="_blank">
						<i class="icon icon-open-in-new"></i>
					</a>
				{else}
					<span class="catalog-view-broken">
						<i class="icon icon-open-in-new"></i>
					</span>
				{/if}
				</td>

			    <td class="module-table__column module-table__center">
			    	<a href="{$base_path}/catalog/clone/{$product.id}?backuri={$_backuri}" class="catalog-clone">
						<i class="icon icon-collection-item"></i>
					</a>
			    </td>

				<td class="module-table__column module-table__center">
					<label class="switch">
						<input name="special" onchange="catalog.update(event, 'special', {$product.id})" type="checkbox"{if $product.special == 1} checked {/if}>
						<div class="slider"></div>
					</label>
				</td>

				<td class="module-table__column module-table__center">
					<label class="switch">
						<input name="visible" onchange="catalog.update(event, 'visible', {$product.id})" type="checkbox"{if $product.visible == 1} checked {/if}>
						<div class="slider"></div>
					</label>
				</td>

			    <td class="module-table__column module-table__center">
					<a href="{$base_path}/catalog/del/{$product.id}?backuri={$_backuri}" onclick="catalog.deleteProduct(event, {$product.id})" class="catalog-remove" title="Удалить" data-no-instant>
			    		<i class="icon icon-delete"></i>
			    	</a>
			    </td>
			</tr>
			{/foreach}
		{else}
			<tr>
				<td colspan="12" class="module-table__empty">
					В каталоге нет товаров
				</td>
			</tr>
		{/if}
		</tbody>
	</table>
</div>

{include file="system/pager.tpl"}
{/strip}