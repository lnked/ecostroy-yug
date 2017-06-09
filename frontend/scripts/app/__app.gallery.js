let app = app || {};

((body => {
    "use strict";

    app.gallery = {
        init ()
        {
            $('.zoom').fancybox();
        }
    };

}))(document.body);