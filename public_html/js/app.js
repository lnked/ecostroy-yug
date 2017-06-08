"use strict";

var app = app || {};

(function (body) {
    "use strict";

    app.gallery = {
        init: function init() {}

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmdhbGxlcnkuanMiXSwibmFtZXMiOlsiYXBwIiwiYm9keSIsImdhbGxlcnkiLCJpbml0IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFDLFVBQVNDLElBQVQsRUFBYztBQUNYOztBQUVBRCxRQUFJRSxPQUFKLEdBQWM7QUFDVkMsY0FBTSxnQkFDTixDQUVDOztBQUpTLEtBQWQ7QUFRSCxDQVhELEVBV0dDLFNBQVNILElBWFoiLCJmaWxlIjoiX19hcHAuZ2FsbGVyeS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhcHAgfHwge307XG5cbihmdW5jdGlvbihib2R5KXtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIGFwcC5nYWxsZXJ5ID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICB9O1xuXG59KShkb2N1bWVudC5ib2R5KTsiXX0=

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = app || {};

(function (body) {
    'use strict';

    app = {
        _extend: function _extend(source, config) {
            if (typeof config !== 'undefined') {
                for (var x in config) {
                    source[x] = config[x];
                }
            }

            return source;
        },


        bind: function bind() {
            for (var _ in this) {
                if (_typeof(this[_]) == 'object' && typeof this[_].init !== 'undefined') {
                    if (typeof this[_].init == 'function') {
                        this[_].init();
                    }
                }
            }
        },

        init: function init() {
            this.bind();
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmluaXQuanMiXSwibmFtZXMiOlsiYXBwIiwiX2V4dGVuZCIsInNvdXJjZSIsImNvbmZpZyIsIngiLCJiaW5kIiwiXyIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxNQUFNQSxPQUFPLEVBQWpCOztBQUVBLENBQUUsZ0JBQVE7QUFDTjs7QUFFQUEsVUFBTTtBQUVGQyxlQUZFLG1CQUVNQyxNQUZOLEVBRWNDLE1BRmQsRUFFc0I7QUFDcEIsZ0JBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUNBO0FBQ0kscUJBQUssSUFBTUMsQ0FBWCxJQUFnQkQsTUFBaEIsRUFDQTtBQUNJRCwyQkFBT0UsQ0FBUCxJQUFZRCxPQUFPQyxDQUFQLENBQVo7QUFDSDtBQUNKOztBQUVELG1CQUFPRixNQUFQO0FBQ0gsU0FaQzs7O0FBY0ZHLGNBQU0sZ0JBQVc7QUFDYixpQkFBSSxJQUFNQyxDQUFWLElBQWUsSUFBZixFQUNBO0FBQ0ksb0JBQUksUUFBUSxLQUFLQSxDQUFMLENBQVIsS0FBb0IsUUFBcEIsSUFBZ0MsT0FBUSxLQUFLQSxDQUFMLEVBQVFDLElBQWhCLEtBQTBCLFdBQTlELEVBQ0E7QUFDSSx3QkFBSSxPQUFRLEtBQUtELENBQUwsRUFBUUMsSUFBaEIsSUFBeUIsVUFBN0IsRUFDQTtBQUNJLDZCQUFLRCxDQUFMLEVBQVFDLElBQVI7QUFDSDtBQUNKO0FBQ0o7QUFDSixTQXpCQzs7QUEyQkZBLGNBQU0sZ0JBQVc7QUFDYixpQkFBS0YsSUFBTDtBQUNIO0FBN0JDLEtBQU47QUFnQ0gsQ0FuQ0QsRUFtQ0lHLFNBQVNDLElBbkNiIiwiZmlsZSI6Il9fYXBwLmluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFwcCA9IHtcblxuICAgICAgICBfZXh0ZW5kKHNvdXJjZSwgY29uZmlnKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB4IGluIGNvbmZpZylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVt4XSA9IGNvbmZpZ1t4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmluZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmb3IoY29uc3QgXyBpbiB0aGlzKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXNbX10pID09ICdvYmplY3QnICYmIHR5cGVvZiAodGhpc1tfXS5pbml0KSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzW19dLmluaXQpID09ICdmdW5jdGlvbicpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXNbX10uaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSkoZG9jdW1lbnQuYm9keSk7Il19

'use strict';

var app = app || {};

(function (body) {
    "use strict";

    app.tabs = {
        init: function init() {
            var $tabs = void 0;

            $('body').on('click', '.j-tabs-trigger', function (e) {
                e.preventDefault();
                var $current = $(this);

                if (!$current.hasClass('is-current')) {
                    var target = $current.data('target');

                    // Clear
                    $tabs = $(this).closest('.j-tabs');
                    $tabs.find('.is-current').removeClass('is-current');
                    $tabs.find('.j-tabs-content').removeClass('is-active');

                    // Set current
                    $current.addClass('is-current');
                    $tabs.find('.j-tabs-content[data-system="' + target + '"]').addClass('is-active');

                    if ($current.hasClass('j-tabs-carousel')) {
                        app.carousel.main('reload', target);
                    }
                }

                return !1;
            });
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLnRhYnMuanMiXSwibmFtZXMiOlsiYXBwIiwiYm9keSIsInRhYnMiLCJpbml0IiwiJHRhYnMiLCIkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCIkY3VycmVudCIsImhhc0NsYXNzIiwidGFyZ2V0IiwiZGF0YSIsImNsb3Nlc3QiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImNhcm91c2VsIiwibWFpbiIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBQyxVQUFTQyxJQUFULEVBQWM7QUFDWDs7QUFFQUQsUUFBSUUsSUFBSixHQUFXO0FBQ1BDLGNBQU0sZ0JBQ047QUFDSSxnQkFBSUMsY0FBSjs7QUFFQUMsY0FBRSxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGlCQUF0QixFQUF5QyxVQUFTQyxDQUFULEVBQVc7QUFDaERBLGtCQUFFQyxjQUFGO0FBQ0Esb0JBQU1DLFdBQVdKLEVBQUUsSUFBRixDQUFqQjs7QUFFQSxvQkFBSSxDQUFDSSxTQUFTQyxRQUFULENBQWtCLFlBQWxCLENBQUwsRUFDQTtBQUNJLHdCQUFNQyxTQUFTRixTQUFTRyxJQUFULENBQWMsUUFBZCxDQUFmOztBQUVBO0FBQ0FSLDRCQUFRQyxFQUFFLElBQUYsRUFBUVEsT0FBUixDQUFnQixTQUFoQixDQUFSO0FBQ0FULDBCQUFNVSxJQUFOLENBQVcsYUFBWCxFQUEwQkMsV0FBMUIsQ0FBc0MsWUFBdEM7QUFDQVgsMEJBQU1VLElBQU4sQ0FBVyxpQkFBWCxFQUE4QkMsV0FBOUIsQ0FBMEMsV0FBMUM7O0FBRUE7QUFDQU4sNkJBQVNPLFFBQVQsQ0FBa0IsWUFBbEI7QUFDQVosMEJBQU1VLElBQU4sQ0FBVyxrQ0FBZ0NILE1BQWhDLEdBQXVDLElBQWxELEVBQXdESyxRQUF4RCxDQUFpRSxXQUFqRTs7QUFFQSx3QkFBSVAsU0FBU0MsUUFBVCxDQUFrQixpQkFBbEIsQ0FBSixFQUEwQztBQUN0Q1YsNEJBQUlpQixRQUFKLENBQWFDLElBQWIsQ0FBa0IsUUFBbEIsRUFBNEJQLE1BQTVCO0FBQ0g7QUFDSjs7QUFFRCx1QkFBTyxDQUFDLENBQVI7QUFDSCxhQXZCRDtBQXdCSDs7QUE3Qk0sS0FBWDtBQWlDSCxDQXBDRCxFQW9DR1EsU0FBU2xCLElBcENaIiwiZmlsZSI6Il9fYXBwLnRhYnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYXBwIHx8IHt9O1xuXG4oZnVuY3Rpb24oYm9keSl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAudGFicyA9IHtcbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgJHRhYnM7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmotdGFicy10cmlnZ2VyJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjdXJyZW50ID0gJCh0aGlzKTtcblxuICAgICAgICAgICAgICAgIGlmICghJGN1cnJlbnQuaGFzQ2xhc3MoJ2lzLWN1cnJlbnQnKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9ICRjdXJyZW50LmRhdGEoJ3RhcmdldCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIENsZWFyXG4gICAgICAgICAgICAgICAgICAgICR0YWJzID0gJCh0aGlzKS5jbG9zZXN0KCcuai10YWJzJyk7XG4gICAgICAgICAgICAgICAgICAgICR0YWJzLmZpbmQoJy5pcy1jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgJHRhYnMuZmluZCgnLmotdGFicy1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50XG4gICAgICAgICAgICAgICAgICAgICRjdXJyZW50LmFkZENsYXNzKCdpcy1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICR0YWJzLmZpbmQoJy5qLXRhYnMtY29udGVudFtkYXRhLXN5c3RlbT1cIicrdGFyZ2V0KydcIl0nKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRjdXJyZW50Lmhhc0NsYXNzKCdqLXRhYnMtY2Fyb3VzZWwnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXBwLmNhcm91c2VsLm1haW4oJ3JlbG9hZCcsIHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkoZG9jdW1lbnQuYm9keSk7Il19

'use strict';

var app = app || {};

(function (body) {
    'use strict';

    app.timeline = {

        data: {},
        filter: null,
        years: null,
        months: null,

        _initCarousel: function _initCarousel() {
            var width = $(window).width(),
                slides = $('#timeline-carousel').find('.slick-slide').length;

            if (width > 768 && slides >= 4 || width > 568 && slides >= 3 || width > 375 && slides >= 2 || width < 375 && slides >= 1) {

                $('#timeline-carousel').slick({
                    lazyLoad: 'ondemand',
                    dots: false,
                    infinite: true,
                    draggable: true,
                    speed: 259,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    prevArrow: '<button type="button" class="carousel__navigation _prev slick-prev"></button>',
                    nextArrow: '<button type="button" class="carousel__navigation _next slick-next"></button>',
                    responsive: [{
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3
                        }
                    }, {
                        breakpoint: 568,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    }, {
                        breakpoint: 375,
                        settings: {
                            fade: true,
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }]
                });
            }
        },

        _currentYear: function _currentYear() {
            return parseInt(this.years.find('.is-current').data('value'));
        },

        _currentMonth: function _currentMonth() {
            return parseInt(this.months.find('.is-current').data('value'));
        },

        _handle: function _handle() {
            var _this = this;

            this.data.current = this._currentYear();
            this.data.months = [];

            this.months.find('.j-timeline-months-item').each(function (key, item) {
                var years = [],
                    strings = $(item).data('if') + '';

                if (typeof strings !== 'undefined' && strings !== '') {
                    years = strings.split(',');

                    for (var x in years) {
                        years[x] = parseInt(years[x]);
                    }
                }

                _this.data.months.push({
                    item: item,
                    year: years
                });
            });
        },

        _reinitCarousel: function _reinitCarousel() {
            var _self_ = this,
                year = this._currentYear(),
                month = this._currentMonth();

            if ($('#timeline-carousel').hasClass('slick-initialized')) {
                $('#timeline-carousel').slick('unslick');
            }

            $('#timeline-carousel').html('');

            var count = $('#timeline-cache').find('.carousel__item.is-year-' + year + '.is-month-' + month).length;

            $('#timeline-cache').find('.carousel__item.is-year-' + year + '.is-month-' + month).each(function (k, item) {
                $('#timeline-carousel').append($(this).clone());

                if (k + 1 == count) {
                    setTimeout(function () {
                        _self_._initCarousel();
                    }, 50);
                }
            });

            setTimeout(function () {
                // $.app.initBlock('.j-timeline-slider');
            }, 300);
        },

        _changeFirstMonth: function _changeFirstMonth() {
            this.months.find('.j-timeline-months-item.is-active:first').trigger('click');
        },

        _match: function _match() {
            var _this2 = this;

            var _self_ = this;

            this._handle();

            this.months.find('.j-timeline-months-item').removeClass('is-active');

            $.each(this.data.months, function (k, item) {
                if (item.year.indexOf(_this2.data.current) >= 0) {
                    $(item.item).addClass('is-active');
                }
            });

            this.filter.addClass('is-active');
        },

        _events: function _events() {
            var _self_ = this;

            this.years.find('.j-timeline-years-item').on('click', function (e) {
                e.preventDefault();

                if (!$(this).hasClass('is-current')) {
                    $('#timeline-filter').find('.j-timeline-years').find('.is-current').removeClass('is-current');

                    $(this).addClass('is-current');

                    _self_._match();
                    _self_._changeFirstMonth();
                    _self_._reinitCarousel();
                }
            });

            this.months.find('.j-timeline-months-item').on('click', function (e) {
                e.preventDefault();

                if (!$(this).hasClass('is-current')) {
                    $('#timeline-filter').find('.j-timeline-months').find('.is-current').removeClass('is-current');

                    $(this).addClass('is-current');

                    _self_._match();
                    _self_._reinitCarousel();
                }
            });
        },

        init: function init() {
            var _self_ = this;

            this.filter = $('#timeline-filter');
            this.years = this.filter.find('.j-timeline-years');
            this.months = this.filter.find('.j-timeline-months');

            this._match();
            this._events();

            this._reinitCarousel();
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLnRpbWVsaW5lLmpzIl0sIm5hbWVzIjpbImFwcCIsInRpbWVsaW5lIiwiZGF0YSIsImZpbHRlciIsInllYXJzIiwibW9udGhzIiwiX2luaXRDYXJvdXNlbCIsIndpZHRoIiwiJCIsIndpbmRvdyIsInNsaWRlcyIsImZpbmQiLCJsZW5ndGgiLCJzbGljayIsImxhenlMb2FkIiwiZG90cyIsImluZmluaXRlIiwiZHJhZ2dhYmxlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJmYWRlIiwiX2N1cnJlbnRZZWFyIiwicGFyc2VJbnQiLCJfY3VycmVudE1vbnRoIiwiX2hhbmRsZSIsImN1cnJlbnQiLCJlYWNoIiwia2V5IiwiaXRlbSIsInN0cmluZ3MiLCJzcGxpdCIsIngiLCJwdXNoIiwieWVhciIsIl9yZWluaXRDYXJvdXNlbCIsIl9zZWxmXyIsIm1vbnRoIiwiaGFzQ2xhc3MiLCJodG1sIiwiY291bnQiLCJrIiwiYXBwZW5kIiwiY2xvbmUiLCJzZXRUaW1lb3V0IiwiX2NoYW5nZUZpcnN0TW9udGgiLCJ0cmlnZ2VyIiwiX21hdGNoIiwicmVtb3ZlQ2xhc3MiLCJpbmRleE9mIiwiYWRkQ2xhc3MiLCJfZXZlbnRzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxRQUFKLEdBQWU7O0FBRVhDLGNBQU0sRUFGSztBQUdYQyxnQkFBUSxJQUhHO0FBSVhDLGVBQU8sSUFKSTtBQUtYQyxnQkFBUSxJQUxHOztBQU9YQyx1QkFBZSx5QkFBVztBQUN0QixnQkFBSUMsUUFBUUMsRUFBRUMsTUFBRixFQUFVRixLQUFWLEVBQVo7QUFBQSxnQkFD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MkJBQU9ELGVBQVA7QUFDSDtBQUNKLGFBWEQ7QUFZSCxTQTFLVTs7QUE0S1hvQixjQUFNLGdCQUNOO0FBQ0ksZ0JBQUluQixTQUFTLElBQWI7O0FBRUEsaUJBQUt0QyxNQUFMLEdBQWNLLEVBQUUsa0JBQUYsQ0FBZDtBQUNBLGlCQUFLSixLQUFMLEdBQWEsS0FBS0QsTUFBTCxDQUFZUSxJQUFaLENBQWlCLG1CQUFqQixDQUFiO0FBQ0EsaUJBQUtOLE1BQUwsR0FBYyxLQUFLRixNQUFMLENBQVlRLElBQVosQ0FBaUIsb0JBQWpCLENBQWQ7O0FBRUEsaUJBQUt5QyxNQUFMO0FBQ0EsaUJBQUtJLE9BQUw7O0FBRUEsaUJBQUtoQixlQUFMO0FBQ0g7QUF4TFUsS0FBZjtBQTJMSCxDQTlMRCxFQThMSXFCLFNBQVNDLElBOUxiIiwiZmlsZSI6Il9fYXBwLnRpbWVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuKChib2R5ID0+IHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhcHAudGltZWxpbmUgPSB7XG5cbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIGZpbHRlcjogbnVsbCxcbiAgICAgICAgeWVhcnM6IG51bGwsXG4gICAgICAgIG1vbnRoczogbnVsbCxcblxuICAgICAgICBfaW5pdENhcm91c2VsOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9ICQod2luZG93KS53aWR0aCgpLFxuICAgICAgICAgICAgICAgIHNsaWRlcyA9ICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLmZpbmQoJy5zbGljay1zbGlkZScpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh3aWR0aCA+IDc2OCAmJiBzbGlkZXMgPj0gNCkgfHxcbiAgICAgICAgICAgICAgICAod2lkdGggPiA1NjggJiYgc2xpZGVzID49IDMpIHx8XG4gICAgICAgICAgICAgICAgKHdpZHRoID4gMzc1ICYmIHNsaWRlcyA+PSAyKSB8fFxuICAgICAgICAgICAgICAgICh3aWR0aCA8IDM3NSAmJiBzbGlkZXMgPj0gMSlcbiAgICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiAyNTksXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2Fyb3VzZWxfX25hdmlnYXRpb24gX3ByZXYgc2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiY2Fyb3VzZWxfX25hdmlnYXRpb24gX25leHQgc2xpY2stbmV4dFwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDU2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAzNzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIF9jdXJyZW50WWVhcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy55ZWFycy5maW5kKCcuaXMtY3VycmVudCcpLmRhdGEoJ3ZhbHVlJykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9jdXJyZW50TW9udGg6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMubW9udGhzLmZpbmQoJy5pcy1jdXJyZW50JykuZGF0YSgndmFsdWUnKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2hhbmRsZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmRhdGEuY3VycmVudCA9IHRoaXMuX2N1cnJlbnRZZWFyKCk7XG4gICAgICAgICAgICB0aGlzLmRhdGEubW9udGhzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMubW9udGhzLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocy1pdGVtJykuZWFjaCgoa2V5LCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgdmFyIHllYXJzID0gW10sIHN0cmluZ3MgPSAkKGl0ZW0pLmRhdGEoJ2lmJykgKyAnJztcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2Ygc3RyaW5ncyAhPT0gJ3VuZGVmaW5lZCcgJiYgc3RyaW5ncyAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgeWVhcnMgPSBzdHJpbmdzLnNwbGl0KCcsJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgeCBpbiB5ZWFycykge1xuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcnNbeF0gPSBwYXJzZUludCh5ZWFyc1t4XSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEubW9udGhzLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICBpdGVtOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICB5ZWFyOiB5ZWFyc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX3JlaW5pdENhcm91c2VsOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfc2VsZl8gPSB0aGlzLFxuICAgICAgICAgICAgICAgIHllYXIgPSB0aGlzLl9jdXJyZW50WWVhcigpLFxuICAgICAgICAgICAgICAgIG1vbnRoID0gdGhpcy5fY3VycmVudE1vbnRoKCk7XG5cbiAgICAgICAgICAgIGlmICgkKCcjdGltZWxpbmUtY2Fyb3VzZWwnKS5oYXNDbGFzcygnc2xpY2staW5pdGlhbGl6ZWQnKSkge1xuICAgICAgICAgICAgICAgICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLnNsaWNrKCd1bnNsaWNrJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLmh0bWwoJycpO1xuXG4gICAgICAgICAgICB2YXIgY291bnQgPSAkKCcjdGltZWxpbmUtY2FjaGUnKS5maW5kKCcuY2Fyb3VzZWxfX2l0ZW0uaXMteWVhci0nKyB5ZWFyICsnLmlzLW1vbnRoLScrbW9udGgpLmxlbmd0aDtcblxuICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhY2hlJykuZmluZCgnLmNhcm91c2VsX19pdGVtLmlzLXllYXItJysgeWVhciArJy5pcy1tb250aC0nK21vbnRoKS5lYWNoKGZ1bmN0aW9uKGssIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtY2Fyb3VzZWwnKS5hcHBlbmQoJCh0aGlzKS5jbG9uZSgpKTtcblxuICAgICAgICAgICAgICAgIGlmICgoaysxKSA9PSBjb3VudCkge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9pbml0Q2Fyb3VzZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vICQuYXBwLmluaXRCbG9jaygnLmotdGltZWxpbmUtc2xpZGVyJyk7XG4gICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9jaGFuZ2VGaXJzdE1vbnRoOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhzLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocy1pdGVtLmlzLWFjdGl2ZTpmaXJzdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX21hdGNoOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfc2VsZl8gPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLl9oYW5kbGUoKTtcblxuICAgICAgICAgICAgdGhpcy5tb250aHMuZmluZCgnLmotdGltZWxpbmUtbW9udGhzLWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICQuZWFjaCh0aGlzLmRhdGEubW9udGhzLCAoaywgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLnllYXIuaW5kZXhPZih0aGlzLmRhdGEuY3VycmVudCkgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKGl0ZW0uaXRlbSkuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLmZpbHRlci5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2V2ZW50czogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3NlbGZfID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy55ZWFycy5maW5kKCcuai10aW1lbGluZS15ZWFycy1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaXMtY3VycmVudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyN0aW1lbGluZS1maWx0ZXInKS5maW5kKCcuai10aW1lbGluZS15ZWFycycpLmZpbmQoJy5pcy1jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9tYXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICBfc2VsZl8uX2NoYW5nZUZpcnN0TW9udGgoKTtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9yZWluaXRDYXJvdXNlbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLm1vbnRocy5maW5kKCcuai10aW1lbGluZS1tb250aHMtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2lzLWN1cnJlbnQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtZmlsdGVyJykuZmluZCgnLmotdGltZWxpbmUtbW9udGhzJykuZmluZCgnLmlzLWN1cnJlbnQnKS5yZW1vdmVDbGFzcygnaXMtY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBfc2VsZl8uX21hdGNoKCk7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmXy5fcmVpbml0Q2Fyb3VzZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfc2VsZl8gPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9ICQoJyN0aW1lbGluZS1maWx0ZXInKTtcbiAgICAgICAgICAgIHRoaXMueWVhcnMgPSB0aGlzLmZpbHRlci5maW5kKCcuai10aW1lbGluZS15ZWFycycpO1xuICAgICAgICAgICAgdGhpcy5tb250aHMgPSB0aGlzLmZpbHRlci5maW5kKCcuai10aW1lbGluZS1tb250aHMnKTtcblxuICAgICAgICAgICAgdGhpcy5fbWF0Y2goKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cygpO1xuXG4gICAgICAgICAgICB0aGlzLl9yZWluaXRDYXJvdXNlbCgpO1xuICAgICAgICB9XG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

'use strict';

(function ($) {
    "use strict";

    var that,
        top,
        changeItem,
        scrollToAnchor,
        $target,
        $element,
        $current,
        $navigationMap,
        $navigation = $('#navigation'),
        $hasScroll = $('html, body');
    var is_mobile = $(window).width() <= 667;

    $navigationMap = $('.j-section').map(function () {
        return {
            offset: $(this).offset().top - 100,
            element: $(this)
        };
    });

    changeItem = function changeItem(scrollTop) {
        $element = null;

        $navigationMap.map(function () {
            that = $(this)[0];
            if (that.offset < scrollTop) {
                $element = that.element;
            }
        });

        if ($element !== null && $element.attr('id')) {

            $current = $navigation.find('.j-navigation[href="#' + $element.attr('id').split('-')[0] + '-section"]');

            if (!$current.hasClass('is-current')) {
                $navigation.find('.j-navigation.is-current').removeClass('is-current');
                $current.addClass('is-current');
            }
        }
    };

    scrollToAnchor = function scrollToAnchor(hash, animate) {
        hash = hash.replace('-section', '').split('?')[0];

        $target = $(hash + '-anchor');

        if ($target.length) {
            top = $target.offset().top - 100;
            is_mobile = $(window).width() <= 667;

            if (animate) {
                $hasScroll.stop().animate({ 'scrollTop': top }, 'medium', function () {
                    $navigation.removeClass('is-disabled');
                });
            } else {
                $hasScroll.scrollTop(top);
            }
        }
    };

    $('body').on('click', '.j-navigation', function (e) {
        $navigation.addClass('is-disabled');
        scrollToAnchor(this.hash, true);
    });

    setTimeout(function () {
        if (window.location.hash.length > 1) {
            $navigation.addClass('is-disabled');
            scrollToAnchor(window.location.hash, false);
        }
    }, 50);

    $(window).scroll(function () {
        changeItem($(window).scrollTop());
    });
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9uYXZpZ2F0aW9uLmpzIl0sIm5hbWVzIjpbIiQiLCJ0aGF0IiwidG9wIiwiY2hhbmdlSXRlbSIsInNjcm9sbFRvQW5jaG9yIiwiJHRhcmdldCIsIiRlbGVtZW50IiwiJGN1cnJlbnQiLCIkbmF2aWdhdGlvbk1hcCIsIiRuYXZpZ2F0aW9uIiwiJGhhc1Njcm9sbCIsImlzX21vYmlsZSIsIndpbmRvdyIsIndpZHRoIiwibWFwIiwib2Zmc2V0IiwiZWxlbWVudCIsInNjcm9sbFRvcCIsImF0dHIiLCJmaW5kIiwic3BsaXQiLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoYXNoIiwiYW5pbWF0ZSIsInJlcGxhY2UiLCJsZW5ndGgiLCJzdG9wIiwib24iLCJlIiwic2V0VGltZW91dCIsImxvY2F0aW9uIiwic2Nyb2xsIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1Q7O0FBRUEsUUFBSUMsSUFBSjtBQUFBLFFBQVVDLEdBQVY7QUFBQSxRQUFlQyxVQUFmO0FBQUEsUUFBMkJDLGNBQTNCO0FBQUEsUUFBMkNDLE9BQTNDO0FBQUEsUUFBb0RDLFFBQXBEO0FBQUEsUUFBOERDLFFBQTlEO0FBQUEsUUFBd0VDLGNBQXhFO0FBQUEsUUFBd0ZDLGNBQWNULEVBQUUsYUFBRixDQUF0RztBQUFBLFFBQXdIVSxhQUFhVixFQUFFLFlBQUYsQ0FBckk7QUFDQSxRQUFJVyxZQUFZWCxFQUFFWSxNQUFGLEVBQVVDLEtBQVYsTUFBcUIsR0FBckM7O0FBRUFMLHFCQUFpQlIsRUFBRSxZQUFGLEVBQWdCYyxHQUFoQixDQUFvQixZQUFVO0FBQzNDLGVBQU87QUFDSEMsb0JBQVFmLEVBQUUsSUFBRixFQUFRZSxNQUFSLEdBQWlCYixHQUFqQixHQUF1QixHQUQ1QjtBQUVIYyxxQkFBU2hCLEVBQUUsSUFBRjtBQUZOLFNBQVA7QUFJSCxLQUxnQixDQUFqQjs7QUFPQUcsaUJBQWEsb0JBQVNjLFNBQVQsRUFBb0I7QUFDN0JYLG1CQUFXLElBQVg7O0FBRUFFLHVCQUFlTSxHQUFmLENBQW1CLFlBQVU7QUFDekJiLG1CQUFPRCxFQUFFLElBQUYsRUFBUSxDQUFSLENBQVA7QUFDQSxnQkFBSUMsS0FBS2MsTUFBTCxHQUFjRSxTQUFsQixFQUE2QjtBQUN6QlgsMkJBQVdMLEtBQUtlLE9BQWhCO0FBQ0g7QUFDSixTQUxEOztBQU9BLFlBQUlWLGFBQWEsSUFBYixJQUFxQkEsU0FBU1ksSUFBVCxDQUFjLElBQWQsQ0FBekIsRUFBOEM7O0FBRTFDWCx1QkFBV0UsWUFBWVUsSUFBWixDQUFpQiwwQkFBMEJiLFNBQVNZLElBQVQsQ0FBYyxJQUFkLEVBQW9CRSxLQUFwQixDQUEwQixHQUExQixFQUErQixDQUEvQixDQUExQixHQUE4RCxZQUEvRSxDQUFYOztBQUVBLGdCQUFJLENBQUNiLFNBQVNjLFFBQVQsQ0FBa0IsWUFBbEIsQ0FBTCxFQUFzQztBQUNsQ1osNEJBQVlVLElBQVosQ0FBaUIsMEJBQWpCLEVBQTZDRyxXQUE3QyxDQUF5RCxZQUF6RDtBQUNBZix5QkFBU2dCLFFBQVQsQ0FBa0IsWUFBbEI7QUFDSDtBQUNKO0FBQ0osS0FuQkQ7O0FBcUJBbkIscUJBQWlCLHdCQUFTb0IsSUFBVCxFQUFlQyxPQUFmLEVBQXdCO0FBQ3JDRCxlQUFPQSxLQUFLRSxPQUFMLENBQWEsVUFBYixFQUF5QixFQUF6QixFQUE2Qk4sS0FBN0IsQ0FBbUMsR0FBbkMsRUFBd0MsQ0FBeEMsQ0FBUDs7QUFFQWYsa0JBQVVMLEVBQUV3QixPQUFPLFNBQVQsQ0FBVjs7QUFFQSxZQUFJbkIsUUFBUXNCLE1BQVosRUFDQTtBQUNJekIsa0JBQU1HLFFBQVFVLE1BQVIsR0FBaUJiLEdBQWpCLEdBQXVCLEdBQTdCO0FBQ0FTLHdCQUFZWCxFQUFFWSxNQUFGLEVBQVVDLEtBQVYsTUFBcUIsR0FBakM7O0FBRUEsZ0JBQUlZLE9BQUosRUFBYTtBQUNUZiwyQkFBV2tCLElBQVgsR0FBa0JILE9BQWxCLENBQTBCLEVBQUUsYUFBYXZCLEdBQWYsRUFBMUIsRUFBZ0QsUUFBaEQsRUFBMEQsWUFBVTtBQUNoRU8sZ0NBQVlhLFdBQVosQ0FBd0IsYUFBeEI7QUFDSCxpQkFGRDtBQUdILGFBSkQsTUFLSztBQUNEWiwyQkFBV08sU0FBWCxDQUFxQmYsR0FBckI7QUFDSDtBQUNKO0FBQ0osS0FuQkQ7O0FBcUJBRixNQUFFLE1BQUYsRUFBVTZCLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGVBQXRCLEVBQXVDLFVBQVNDLENBQVQsRUFBWTtBQUMvQ3JCLG9CQUFZYyxRQUFaLENBQXFCLGFBQXJCO0FBQ0FuQix1QkFBZSxLQUFLb0IsSUFBcEIsRUFBMEIsSUFBMUI7QUFDSCxLQUhEOztBQUtBTyxlQUFXLFlBQVU7QUFDakIsWUFBSW5CLE9BQU9vQixRQUFQLENBQWdCUixJQUFoQixDQUFxQkcsTUFBckIsR0FBOEIsQ0FBbEMsRUFBcUM7QUFDakNsQix3QkFBWWMsUUFBWixDQUFxQixhQUFyQjtBQUNBbkIsMkJBQWVRLE9BQU9vQixRQUFQLENBQWdCUixJQUEvQixFQUFxQyxLQUFyQztBQUNIO0FBQ0osS0FMRCxFQUtHLEVBTEg7O0FBT0F4QixNQUFFWSxNQUFGLEVBQVVxQixNQUFWLENBQWlCLFlBQVU7QUFDdkI5QixtQkFBV0gsRUFBRVksTUFBRixFQUFVSyxTQUFWLEVBQVg7QUFDSCxLQUZEO0FBR0gsQ0F0RUQsRUFzRUdpQixNQXRFSCIsImZpbGUiOiJfbmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgdGhhdCwgdG9wLCBjaGFuZ2VJdGVtLCBzY3JvbGxUb0FuY2hvciwgJHRhcmdldCwgJGVsZW1lbnQsICRjdXJyZW50LCAkbmF2aWdhdGlvbk1hcCwgJG5hdmlnYXRpb24gPSAkKCcjbmF2aWdhdGlvbicpLCAkaGFzU2Nyb2xsID0gJCgnaHRtbCwgYm9keScpO1xuICAgIHZhciBpc19tb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA2Njc7XG5cbiAgICAkbmF2aWdhdGlvbk1hcCA9ICQoJy5qLXNlY3Rpb24nKS5tYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldDogJCh0aGlzKS5vZmZzZXQoKS50b3AgLSAxMDAsXG4gICAgICAgICAgICBlbGVtZW50OiAkKHRoaXMpXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoYW5nZUl0ZW0gPSBmdW5jdGlvbihzY3JvbGxUb3ApIHtcbiAgICAgICAgJGVsZW1lbnQgPSBudWxsO1xuXG4gICAgICAgICRuYXZpZ2F0aW9uTWFwLm1hcChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhhdCA9ICQodGhpcylbMF07XG4gICAgICAgICAgICBpZiAodGhhdC5vZmZzZXQgPCBzY3JvbGxUb3ApIHtcbiAgICAgICAgICAgICAgICAkZWxlbWVudCA9IHRoYXQuZWxlbWVudDsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgaWYgKCRlbGVtZW50ICE9PSBudWxsICYmICRlbGVtZW50LmF0dHIoJ2lkJykpIHtcbiAgICAgICAgICAgXG4gICAgICAgICAgICAkY3VycmVudCA9ICRuYXZpZ2F0aW9uLmZpbmQoJy5qLW5hdmlnYXRpb25baHJlZj1cIiMnICsgJGVsZW1lbnQuYXR0cignaWQnKS5zcGxpdCgnLScpWzBdICsgJy1zZWN0aW9uXCJdJyk7XG5cbiAgICAgICAgICAgIGlmICghJGN1cnJlbnQuaGFzQ2xhc3MoJ2lzLWN1cnJlbnQnKSkge1xuICAgICAgICAgICAgICAgICRuYXZpZ2F0aW9uLmZpbmQoJy5qLW5hdmlnYXRpb24uaXMtY3VycmVudCcpLnJlbW92ZUNsYXNzKCdpcy1jdXJyZW50Jyk7XG4gICAgICAgICAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNjcm9sbFRvQW5jaG9yID0gZnVuY3Rpb24oaGFzaCwgYW5pbWF0ZSkge1xuICAgICAgICBoYXNoID0gaGFzaC5yZXBsYWNlKCctc2VjdGlvbicsICcnKS5zcGxpdCgnPycpWzBdO1xuXG4gICAgICAgICR0YXJnZXQgPSAkKGhhc2ggKyAnLWFuY2hvcicpO1xuXG4gICAgICAgIGlmICgkdGFyZ2V0Lmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdG9wID0gJHRhcmdldC5vZmZzZXQoKS50b3AgLSAxMDA7XG4gICAgICAgICAgICBpc19tb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA2Njc7XG5cbiAgICAgICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgJGhhc1Njcm9sbC5zdG9wKCkuYW5pbWF0ZSh7ICdzY3JvbGxUb3AnOiB0b3AgfSwgJ21lZGl1bScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICRuYXZpZ2F0aW9uLnJlbW92ZUNsYXNzKCdpcy1kaXNhYmxlZCcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJGhhc1Njcm9sbC5zY3JvbGxUb3AodG9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmotbmF2aWdhdGlvbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgJG5hdmlnYXRpb24uYWRkQ2xhc3MoJ2lzLWRpc2FibGVkJyk7XG4gICAgICAgIHNjcm9sbFRvQW5jaG9yKHRoaXMuaGFzaCwgdHJ1ZSk7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmICh3aW5kb3cubG9jYXRpb24uaGFzaC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAkbmF2aWdhdGlvbi5hZGRDbGFzcygnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgIHNjcm9sbFRvQW5jaG9yKHdpbmRvdy5sb2NhdGlvbi5oYXNoLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICB9LCA1MCk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gICAgICAgIGNoYW5nZUl0ZW0oJCh3aW5kb3cpLnNjcm9sbFRvcCgpKVxuICAgIH0pO1xufSkoalF1ZXJ5KTsiXX0=

'use strict';

function yandexMap() {
    ymaps.ready(function () {
        var YMap,
            myPlacemark,
            is_mobile = $(window).width() <= 667;

        YMap = new ymaps.Map('location-map', {
            center: [44.979825, 38.937198],
            zoom: 18,
            controls: ['zoomControl', 'fullscreenControl']
        });

        YMap.behaviors.disable('multiTouch');
        YMap.behaviors.disable('scrollZoom');
        YMap.controls.get('zoomControl').options.set('size', 'small');
        YMap.controls.get('zoomControl').options.set('position', { right: 10, top: 50 });

        if (is_mobile) {
            YMap.behaviors.disable('drag');
        }

        myPlacemark = new ymaps.Placemark(YMap.getCenter(), {}, {
            iconLayout: 'default#image',
            iconImageHref: '/images/ico/location-pin.svg',
            iconImageSize: [29, 40],
            iconImageOffset: [-29, -40]
        });

        YMap.geoObjects.add(myPlacemark);
    });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl95YW5kZXgubWFwLmpzIl0sIm5hbWVzIjpbInlhbmRleE1hcCIsInltYXBzIiwicmVhZHkiLCJZTWFwIiwibXlQbGFjZW1hcmsiLCJpc19tb2JpbGUiLCIkIiwid2luZG93Iiwid2lkdGgiLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwiY29udHJvbHMiLCJiZWhhdmlvcnMiLCJkaXNhYmxlIiwiZ2V0Iiwib3B0aW9ucyIsInNldCIsInJpZ2h0IiwidG9wIiwiUGxhY2VtYXJrIiwiZ2V0Q2VudGVyIiwiaWNvbkxheW91dCIsImljb25JbWFnZUhyZWYiLCJpY29uSW1hZ2VTaXplIiwiaWNvbkltYWdlT2Zmc2V0IiwiZ2VvT2JqZWN0cyIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxTQUFULEdBQXFCO0FBQ2pCQyxVQUFNQyxLQUFOLENBQVksWUFBWTtBQUNwQixZQUFJQyxJQUFKO0FBQUEsWUFBVUMsV0FBVjtBQUFBLFlBQXVCQyxZQUFZQyxFQUFFQyxNQUFGLEVBQVVDLEtBQVYsTUFBcUIsR0FBeEQ7O0FBRUFMLGVBQU8sSUFBSUYsTUFBTVEsR0FBVixDQUFjLGNBQWQsRUFBOEI7QUFDakNDLG9CQUFRLENBQUMsU0FBRCxFQUFZLFNBQVosQ0FEeUI7QUFFakNDLGtCQUFNLEVBRjJCO0FBR2pDQyxzQkFBVSxDQUFDLGFBQUQsRUFBZ0IsbUJBQWhCO0FBSHVCLFNBQTlCLENBQVA7O0FBTUFULGFBQUtVLFNBQUwsQ0FBZUMsT0FBZixDQUF1QixZQUF2QjtBQUNBWCxhQUFLVSxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsWUFBdkI7QUFDQVgsYUFBS1MsUUFBTCxDQUFjRyxHQUFkLENBQWtCLGFBQWxCLEVBQWlDQyxPQUFqQyxDQUF5Q0MsR0FBekMsQ0FBNkMsTUFBN0MsRUFBcUQsT0FBckQ7QUFDQWQsYUFBS1MsUUFBTCxDQUFjRyxHQUFkLENBQWtCLGFBQWxCLEVBQWlDQyxPQUFqQyxDQUF5Q0MsR0FBekMsQ0FBNkMsVUFBN0MsRUFBeUQsRUFBRUMsT0FBTyxFQUFULEVBQWFDLEtBQUssRUFBbEIsRUFBekQ7O0FBRUEsWUFBSWQsU0FBSixFQUFlO0FBQ1hGLGlCQUFLVSxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsTUFBdkI7QUFDSDs7QUFFRFYsc0JBQWMsSUFBSUgsTUFBTW1CLFNBQVYsQ0FBb0JqQixLQUFLa0IsU0FBTCxFQUFwQixFQUFzQyxFQUF0QyxFQUEwQztBQUNwREMsd0JBQVksZUFEd0M7QUFFcERDLDJCQUFlLDhCQUZxQztBQUdwREMsMkJBQWUsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUhxQztBQUlwREMsNkJBQWlCLENBQUMsQ0FBQyxFQUFGLEVBQU0sQ0FBQyxFQUFQO0FBSm1DLFNBQTFDLENBQWQ7O0FBT0F0QixhQUFLdUIsVUFBTCxDQUFnQkMsR0FBaEIsQ0FBb0J2QixXQUFwQjtBQUNILEtBMUJEO0FBMkJIIiwiZmlsZSI6Il95YW5kZXgubWFwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24geWFuZGV4TWFwKCkge1xuICAgIHltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIFlNYXAsIG15UGxhY2VtYXJrLCBpc19tb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA2Njc7XG4gICAgICAgIFxuICAgICAgICBZTWFwID0gbmV3IHltYXBzLk1hcCgnbG9jYXRpb24tbWFwJywge1xuICAgICAgICAgICAgY2VudGVyOiBbNDQuOTc5ODI1LCAzOC45MzcxOThdLFxuICAgICAgICAgICAgem9vbTogMTgsXG4gICAgICAgICAgICBjb250cm9sczogWyd6b29tQ29udHJvbCcsICdmdWxsc2NyZWVuQ29udHJvbCddXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ211bHRpVG91Y2gnKTtcbiAgICAgICAgWU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnc2Nyb2xsWm9vbScpO1xuICAgICAgICBZTWFwLmNvbnRyb2xzLmdldCgnem9vbUNvbnRyb2wnKS5vcHRpb25zLnNldCgnc2l6ZScsICdzbWFsbCcpO1xuICAgICAgICBZTWFwLmNvbnRyb2xzLmdldCgnem9vbUNvbnRyb2wnKS5vcHRpb25zLnNldCgncG9zaXRpb24nLCB7IHJpZ2h0OiAxMCwgdG9wOiA1MCB9KTtcblxuICAgICAgICBpZiAoaXNfbW9iaWxlKSB7XG4gICAgICAgICAgICBZTWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdkcmFnJyk7XG4gICAgICAgIH1cblxuICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoWU1hcC5nZXRDZW50ZXIoKSwge30sIHtcbiAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJyxcbiAgICAgICAgICAgIGljb25JbWFnZUhyZWY6ICcvaW1hZ2VzL2ljby9sb2NhdGlvbi1waW4uc3ZnJyxcbiAgICAgICAgICAgIGljb25JbWFnZVNpemU6IFsyOSwgNDBdLFxuICAgICAgICAgICAgaWNvbkltYWdlT2Zmc2V0OiBbLTI5LCAtNDBdXG4gICAgICAgIH0pO1xuXG4gICAgICAgIFlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgIH0pO1xufSJdfQ==

"use strict";

$(document).ready(function () {
    app.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhcHAiLCJpbml0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkMsUUFBSUMsSUFBSjtBQUNILENBRkQiLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGFwcC5pbml0KCk7XG59KTtcbiJdfQ==
