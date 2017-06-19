let app = app || {};

((body => {
    "use strict";

    app.toggle = {
        init ()
        {
            $('body').on('click', '.j-show', function(e) {
                e.preventDefault();

                var href = $(this).attr('href');

                if ($(href).length) {
                    $(href).addClass('is-show');
                }
                
                $(this).hide();

                return false;
            });
        }
    };

}))(document.body);
