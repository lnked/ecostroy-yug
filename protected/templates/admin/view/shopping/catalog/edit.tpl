{if $product nocache}
{strip}

{include file="./template.tpl"}

{if isset($smarty.get.msg ) && $smarty.get.msg == "apply"}
<div class="apply">Данные были успешно сохранены!</div>
{/if}

<form action="" method="post" enctype="multipart/form-data" name="meta_form">
    <input type="hidden" name="form_action" value="edit">
    <input type="hidden" name="id" value="{$product.id}">
    
    {include file="fields/meta.tpl"
        title           =   $product.meta_title
        keywords        =   $product.meta_keywords
        description     =   $product.meta_description
        robots          =   $product.meta_robots
    }

    <table class="table">
        <col width="200">
        <col>
        <thead>
            <tr>
                <th colspan="2">{t('contents.title')}</th>
            </tr>
        </thead>
        <tbody>

           	<tr>
                <td class="h">Наименование:</td>
                <td>
                    <input name="name" value="{$product.name}">
                </td>
            </tr>

            <tr>
                <td class="h">Системное имя:</td>
                <td>
                    <input name="system" value="{$product.system}" class="js-binding" data-binding-name="name" data-binding-element="system">
                </td>
            </tr>

			<tr>
                <td class="h">Категория:</td>
                <td>
                  	<select name="category">
					    <option value="0">Родительская категория</option>
					    {include file="fields/select_tree.tpl"
					        name            =   'category'
					        tree            =   $category_list
					        children        =   'tree'
					        value_key       =   'id'
					        value_name      =   'name'
					        selected        =   $product.category
					    }
					</select>
                </td>
            </tr>

            <tr>
                <td class="h">Артикул:</td>
                <td>
                    <input name="article" value="{$product.article}" class="width-50">
                </td>
            </tr>

            <tr>
                <td class="h">Информация:</td>
                <td>
                    <div class="params">
                        <div class="params__item">
                            <div class="params__item__label">Всегда в наличии</div>
                            <div class="params__item__value">
                                <label class="switch">
                                    <input name="infinity" value="1" onchange="catalog.update(event, 'infinity', {$product.id})" type="checkbox"{if $product.infinity == 1} checked {/if}>
                                    <div class="slider"></div>
                                </label>
                            </div>
                        </div>

                        <div class="params__item">
                            <div class="params__item__label">Акция</div>
                            <div class="params__item__value">
                                <label class="switch">
                                    <input name="special" value="1" onchange="catalog.update(event, 'special', {$product.id})" type="checkbox"{if $product.special == 1} checked {/if}>
                                    <div class="slider"></div>
                                </label>
                            </div>
                        </div>

                        <div class="params__item">
                            <div class="params__item__label">Новинка</div>
                            <div class="params__item__value">
                                <label class="switch">
                                    <input name="novelty" value="1" onchange="catalog.update(event, 'novelty', {$product.id})" type="checkbox"{if $product.novelty == 1} checked {/if}>
                                    <div class="slider"></div>
                                </label>
                            </div>
                        </div>

                        <div class="params__item">
                            <div class="params__item__label">Значок</div>
                            <div class="params__item__value">
                                <input name="badge" value="{$product.badge}">
                            </div>
                        </div>
                    </div>
                </td>
            </tr>

            <tr>
                <td class="h">Стоимость:</td>
                <td>
                    <input name="price" value="{$product.price}" class="width-25 float">
                </td>
            </tr>

            <tr>
                <td class="h">Скидка:</td>
                <td>
                    <input name="discount" value="{if $product.discount}{$product.discount}{else}0{/if}" class="width-25 float reducing-trigger" style="margin-right: 2px;">

                    {include file="system/group.tpl"
                        name    = "discount_type"
                        check   = $product.discount_type
                        list    = [
                            [ value => 0, text => "%", checked => true ],
                            [ value => 1, text => "₽" ]
                        ]
                    }
                </td>
            </tr>

            <tr>
                <td class="h">Фотографии:</td>
                <td>
                    {include file="fields/image.tpl"
                        action      =   $fields.action
                        name        =   $fields.name
                        list        =   $fields.list
                        json        =   $fields.json
                        value       =   $fields.value
                        settings    =   $fields.settings
                    }
                </td>
            </tr>

            <tr>
                <td class="h">Статус:</td>
                <td>
                    {include file="system/group.tpl"
                        name    = "visible"
                        check   = $product.visible
                        list    = [
                            [ value => 1, text => "Доступен в каталоге", checked => true ],
                            [ value => 0, text => "Недоступен в каталоге" ]
                        ]
                    }
                </td>
            </tr>

            {*
            <tr>
                <td class="h">Порядок:</td>
                <td>
                    <input name="ord" value="{$product.ord}" class="ord integer reducing-trigger">
                </td>
            </tr>
            *}
        </tbody>
    </table>

    <nav class="tabs catalog-tabs">
        <ul class="tabs__list">
        {foreach $catalog_tabs as $system => $tab name=tabs}
            <li class="tabs__list__item">
                <a href="#tab={$system}" class="tabs__list__link{if $smarty.foreach.tabs.first} tabs__list__link_current{/if}" onclick="catalog.tab(this, '{$system}')" data-instant>{$tab}</a>
            </li>
        {/foreach}
        </ul>
    </nav>

    {foreach $catalog_tabs as $system => $tab name=content}
    <section class="catalog-tabs__item{if $smarty.foreach.content.first} current{/if}" id="tab-{$system}">
         {include file="fields/redactor.tpl"
            type    =   'imperavi'
            name    =   $system
            value   =   $product[$system]
        }
    </section>
    {/foreach}

    {include file="system/buttons.tpl"}
</form>
{/strip}
{/if}