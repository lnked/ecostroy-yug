let app = app || {};

((body => {
    "use strict";

    app.layzr = {
        init ()
        {
            $(window).lazyLoadXT({
                edgeY:  200,
                srcAttr: 'data-src'
            });

            // $.lazyLoadXT.onload = function() {
            //     var $el = $(this);
            //     $el
            //         .removeClass('lazy-hidden')
            //         .addClass('animated ' + $el.attr('data-effect'));
            // };
            // Slider
            // afterChange: function () {
            //     // $(window).lazyLoadXT();
            //     // $('#timeline-carousel').lazyLoadXT({visibleOnly: false, checkDuplicates: false});
            // }
        }
    };

}))(document.body);
