let app = app || {};

((body => {
    "use strict";

    const History = window.History;

    const isMobile = $(window).width() <= 667;
    const $hasScroll = $('html,body');
    const $navigation = $('#navigation');
    const navHeight = $navigation.height();
    const winHeight = $(window).height();

    app.navigation = {

        elements: [],

        isAnimated: false,

        compose () {
            this.elements = $('.j-section').map((key, item) => {
                return {
                    offset: $(item).offset().top - navHeight,
                    element: $(item)
                }
            });
        },

        scrollToAnchor (hash, animate) {
            const _this = this;
            hash = hash.split('?')[0];

            const $target = $(`#${hash}-anchor`);

            if ($target.length) {
                _this.isAnimated = true;

                const top = $target.offset().top - navHeight;

                if (animate) {
                    $hasScroll.stop().animate({ 'scrollTop': top }, 'medium', () => {
                        $navigation.removeClass('is-disabled');

                        setTimeout(() => {
                            _this.isAnimated = false;
                        }, 100);
                    });
                } else {
                    $(window).scrollTop(top);

                    setTimeout(() => {
                        _this.isAnimated = false;
                    }, 100);
                }
            }
        },

        setCurrent ($current, slug, title) {
            $navigation.find('.j-navigation.is-current').removeClass('is-current');
            $current.addClass('is-current');

            if (slug !== 'main') {
                History.pushState(null, title, slug);
            }
        },

        changeItem (scrollTop) {
            let $element = null;

            this.elements.map((key, item) => {
                const element = item.element;

                if (scrollTop > (item.offset - winHeight / 4)) {
                    $element = element;
                }
            });

            if ($element !== null && $element.attr('id')) {
                const title = $element.data('title') || '';
                const slug = $element.attr('id').split('-')[0];
                const $current = $navigation.find('.j-navigation[href="/' + slug + '"]');

                if (!$current.hasClass('is-current')) {
                    this.setCurrent($current, slug, title);
                }
            }
        },

        check () {
            const State = History.getState();

            if (State.url) {
                const slug = State.url.split('/')[3];
                const $current = $navigation.find('.j-navigation[href="/' + slug + '"]');

                setTimeout(() => {
                    this.scrollToAnchor(slug, false);
                    this.setCurrent($current, slug, $(`#${slug}-anchor`).data('title'));
                }, 200);
            }
        },

        init () {
            const _this = this;

            $('body').on('click', '.j-navigation', function(e) {
                e.preventDefault();

                const $current = $(this);
                const slug = $current.attr('href').substr(1);
                $navigation.addClass('is-disabled');

                _this.scrollToAnchor(slug, true);
                _this.setCurrent($current, slug, $(`#${slug}-anchor`).data('title'));
            });

            setTimeout(() => {
                _this.compose();
                _this.check();
            }, 50);

            let last = Date.now();

            $(window).scroll(() => {
                if (!_this.isAnimated) {
                    const differance = Date.now() - last;

                    if (differance >= 500) {
                        _this.changeItem($(window).scrollTop());
                        last = Date.now();
                    }
                }
            });
        }
    };

}))(document.body);
