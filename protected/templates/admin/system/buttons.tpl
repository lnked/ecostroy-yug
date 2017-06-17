{strip}
<div class="button-container">
    <button class="button is-save" name="save" type="submit" onclick="return CheckAndSubmit('form_mdd')"><i class="icon icon-save"></i>{t('buttons.save.and.close')}</button>
    <button class="button is-apply" name="apply" type="submit" onclick="return CheckAndSubmit('form_mdd')"><i class="icon icon-check-square"></i>{t('buttons.save')}</button>
    <span class="button-container__title">или</span>
    <a class="button-link" href="{$base_path}/"><i class="icon icon-arrow-left"></i>{t('buttons.cancel')}</a>
</div>
{/strip}