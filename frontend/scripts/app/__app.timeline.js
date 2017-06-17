let app = app || {};

((body => {
    'use strict';

    const $timeline = $('#timeline');
    const $carousel = $('#timeline-carousel');

    app.timeline = {

        _initCarousel () {
            var width = $(window).width(),
                slides = $carousel.find('.slick-slide').length;

            if ((width > 768 && slides >= 4) ||
                (width > 568 && slides >= 3) ||
                (width > 375 && slides >= 2) ||
                (width < 375 && slides >= 1)) {

                $timeline.removeClass('is-centered');
   
                $carousel.slick({
                    dots: false,
                    speed: 170,
                    infinite: true,
                    draggable: false,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: '<button class="carousel__nav carousel__nav--left slick-prev"><svg class="carousel__nav__ico" role="image"><use xlink:href="#left-arrow"/></svg></button>',
                    nextArrow: '<button class="carousel__nav carousel__nav--right slick-next"><svg class="carousel__nav__ico" role="image"><use xlink:href="#right-arrow"/></svg></button>',
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 3
                            }
                        },
                        {
                            breakpoint: 568,
                            settings: {
                                slidesToShow: 2
                            }
                        },
                        {
                            breakpoint: 375,
                            settings: {
                                draggable: true,
                                slidesToShow: 1
                            }
                        }
                    ]
                });
            } else {
                $timeline.addClass('is-centered');
            }
        },

        _reinitCarousel () {
            if ($carousel.hasClass('slick-initialized')) {
                $carousel.slick('unslick');
            }

            this._initCarousel();
        },

        _render (data) {
            const _this = this;
            const html = [];

            if (data.length) {
                $.each(data, (key, item) => {
                    if (item.original && item.preview) {
                        html.push(
                            [
                                '<div class="carousel__item slick-slide">',
                                    '<a href="'+item.original+'" onclick="return false" class="carousel__item__image zoom">',
                                        '<img src="'+item.preview+'" class="carousel__item__image__src" alt="">',
                                    '</a>',
                                '</div>'
                            ].join('')
                        );
                    }
                });

                $carousel.html('').append(html.join(''));

                setTimeout(() => {
                    _this._reinitCarousel();
                }, 10);
            }
        },

        _change () {
            const year = $timeline.find('.j-timeline-years-tab.is-current').data('value');
            const month = $timeline.find('.j-timeline-months.is-active').find('.j-timeline-months-tab.is-current').data('value');
            this._render(timelineConfig[year][month]);
        },

        _events () {
            const _this = this;

            $timeline.on('click', '.j-timeline-years-tab', function(e) {
                const $this = $(this);

                if (!$this.hasClass('is-current')) {
                    const year = parseInt($this.data('value'));

                    $timeline.find('.j-timeline-months.is-active').removeClass('is-active');
                    $timeline.find(`.j-timeline-months[data-year="${year}"]`).addClass('is-active');

                    $timeline.find('.j-timeline-years-tab.is-current').removeClass('is-current');
                    $this.addClass('is-current');

                    _this._change();
                }
            });

            $timeline.on('click', '.j-timeline-months-tab', function(e) {
                const $this = $(this);

                if (!$this.hasClass('is-current')) {
                    const month = parseInt($this.data('value'));

                    $timeline.find('.j-timeline-months.is-active').find('.j-timeline-months-tab.is-current').removeClass('is-current');

                    $this.addClass('is-current');

                    _this._change();
                }
            });
        },

        init () {
            this._events();
            this._reinitCarousel();
        }
    };

}))(document.body);