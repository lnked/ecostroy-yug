let app = app || {};

((body => {
    "use strict";

    app.gallery = {
        init ()
        {
            $('.zoom').fancybox();

            $('body').on('click', '.j-load-gallery', function(e) {
                console.log('click gallery');
                const $button = $(this);
                const motion = $button.data('motion');

                if (motion === 'show') {
                    console.log('1');
                    $button.data('motion', 'hide');
                    $('#gallery').find('.is-motion').removeClass('is-hidden');
                } else {
                    console.log('2');
                    $button.data('motion', 'show');

                    $('html, body').stop().animate({ 'scrollTop': $('#gallery-anchor').offset().top }, 'fast');

                    setTimeout(function(){
                        $('#gallery').find('.is-motion').addClass('is-hidden');
                    }, 200);
                }

                $button.closest('.page-button').toggleClass('_down').toggleClass('_up');
            });
        }
    };

}))(document.body);