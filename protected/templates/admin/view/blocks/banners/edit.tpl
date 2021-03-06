{strip}
<form id="form" method="post">
	<input type="hidden" name="action" value="banners_edit">

	<table class="table">
	    <col width="200">
	    <col>
	    <thead>
            <tr>
                <th colspan="2">Редактирование банера</th>
            </tr>
	    </thead>
	    <tbody>
            <tr>
                <td class="h hl">{t('titles.name')} <span class="ness_color">*</span></td>
                <td><input name="name" class="ness" value="{$banner_item.name}"></td>
            </tr>
            <tr>
                <td class="h hl">Системное имя <span class="ness_color">*</span></td>
                <td>
                    <input name="sys_name" class="ness js-binding{if $banner_item.sys_name} js-binding-init{/if}" data-binding-name="name" data-binding-element="sys_name" value="{$banner_item.sys_name}">
                </td>
            </tr>
            <tr>
                <td class="h hl">Ссылка</td>
                <td><input name="link" value="{$banner_item.link}"></td>
            </tr>
            <tr>
                <td class="h hl">Файл<br>(картинка или flash-банер) <span class="ness_color">*</span></td>
                <td>
                    <div id="file_banner" class="clearfix">
                        <div class="uploadfiles" class="file-list"></div>
                        
                        <div class="upload-block file_box clearfix">
                            <input type="hidden" name="file" value="{if $file_gid}{$file_gid}{else}mid{$meta_module.id}_fid{$fid}_{$time}{/if}">
                            <input type="file" name="fileToUpload" id="banner" class="w50">
                            <span class="file_loading"><img src="/{$ADMIN_DIR}/images/preloader-64.gif" width="32" height="32" alt="Загрузка"></span>
                        </div>
                        
                        <button onclick="return ajaxFileUpload('file_banner', 'banner', '{if $file_gid}{$file_gid}{else}mid{$meta_module.id}_fid{$fid}_{$time}{/if}')" class="button button-green"><i class="icon icon-save"></i> Закачать</button>
                    </div>
                </td>
            </tr>	
            <tr>	
                <td class="h hl">Активен</td>
                <td>
                    {include file="system/group.tpl"
                        name    = "visible"
                        check   = $banner_item.visible
                        list    = [
                            [ value => '1', text => "Да", default => true ],
                            [ value => '0', text => "Нет" ]
                        ]
                    }
                </td>
            </tr>
        </tbody>
	</table>
    
    {include file="system/buttons.tpl"}
</form>
{/strip}