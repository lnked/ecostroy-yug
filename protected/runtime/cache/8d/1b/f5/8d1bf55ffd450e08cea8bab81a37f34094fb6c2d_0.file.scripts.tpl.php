<?php
/* Smarty version 3.1.32-dev-1, created on 2017-06-17 03:57:42
  from "/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/components/scripts.tpl" */

/* @var Smarty_Internal_Template $_smarty_tpl */
if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'version' => '3.1.32-dev-1',
  'unifunc' => 'content_59447e861b9403_76145891',
  'has_nocache_code' => false,
  'file_dependency' => 
  array (
    '8d1bf55ffd450e08cea8bab81a37f34094fb6c2d' => 
    array (
      0 => '/Users/edik/web/ecostroy.dev/protected/templates/themes/base/smarty/components/scripts.tpl',
      1 => 1497349560,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_59447e861b9403_76145891 (Smarty_Internal_Template $_smarty_tpl) {
if (!is_callable('smarty_function_compress')) require_once '/Users/edik/web/ecostroy.dev/protected/core/lib/templaters/smarty/plugins_cms/function.compress.php';
echo smarty_function_compress(array('attr'=>'data-no-instant','mode'=>'js','source'=>array(array('file'=>'/js/vendors.min.js'),array('file'=>'/js/libs.min.js'),array('file'=>'/js/app.min.js'))),$_smarty_tpl);
echo '<script'; ?>
 src="//api-maps.yandex.ru/2.1/?lang=ru_RU&onload=yandexMap" async><?php echo '</script'; ?>
><!--[if lt IE 9]><?php echo '<script'; ?>
 src="//cdnjs.cloudflare.com/ajax/libs/html5shiv/r29/html5.min.js"><?php echo '</script'; ?>
><![endif]--><!-- Yandex.Metrika counter --><?php echo '<script'; ?>
 type="text/javascript">
    (function (d, w, c) {
        (w[c] = w[c] || []).push(function() {
            try {
                w.yaCounter44937940 = new Ya.Metrika({
                    id:44937940,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true,
                    webvisor:true
                });
            } catch(e) { }
        });

        var n = d.getElementsByTagName("script")[0],
            s = d.createElement("script"),
            f = function () { n.parentNode.insertBefore(s, n); };
        s.type = "text/javascript";
        s.async = true;
        s.src = "https://mc.yandex.ru/metrika/watch.js";

        if (w.opera == "[object Opera]") {
            d.addEventListener("DOMContentLoaded", f, false);
        } else { f(); }
    })(document, window, "yandex_metrika_callbacks");
<?php echo '</script'; ?>
><noscript><div><img src="https://mc.yandex.ru/watch/44937940" style="position:absolute; left:-9999px;" alt="" /></div></noscript><!-- /Yandex.Metrika counter --></body></html><?php }
}
