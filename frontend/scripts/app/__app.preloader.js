let app = app || {};

((body => {
    "use strict";

    app.preloader = {
        placeholder: {},

        compose () {
            if ($('.j-image-preload').length) {
                const _this = this;

                $('.j-image-preload').each((k, item) => {
                    let _id;
                    const $item = $(item);

                    if (!$item.attr('id')) {
                        _id = `preload_${Math.random().toString().split('.')[1]}`;
                        $item.attr('id', _id);
                    } else {
                        _id = $item.attr('id');
                    }
                    
                    _this.placeholder[_id] = {
                        top: $item.offset().top,
                        image: $item.data('large')
                    };
                });
            }
        },

        preload (id) {
            const $item = $(`#${id}`);

            if (!$item.find('img').length) {
                const preload = this.placeholder[id];

                const img = new Image();

                img.src = preload.image;
                img.onload = function () {
                    $(img).addClass('loaded');
                };

                $item.append(img);
            }
        },

        init ()
        {
            this.compose();
        }
    };

}))(document.body);