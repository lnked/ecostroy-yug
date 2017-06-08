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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmluaXQuanMiXSwibmFtZXMiOlsiYXBwIiwiX2V4dGVuZCIsInNvdXJjZSIsImNvbmZpZyIsIngiLCJiaW5kIiwiXyIsImluaXQiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxJQUFJQSxNQUFNQSxPQUFPLEVBQWpCOztBQUVBLENBQUUsZ0JBQVE7QUFDTjs7QUFFQUEsVUFBTTtBQUVGQyxlQUZFLG1CQUVNQyxNQUZOLEVBRWNDLE1BRmQsRUFFc0I7QUFDcEIsZ0JBQUksT0FBT0EsTUFBUCxLQUFrQixXQUF0QixFQUNBO0FBQ0kscUJBQUssSUFBTUMsQ0FBWCxJQUFnQkQsTUFBaEIsRUFDQTtBQUNJRCwyQkFBT0UsQ0FBUCxJQUFZRCxPQUFPQyxDQUFQLENBQVo7QUFDSDtBQUNKOztBQUVELG1CQUFPRixNQUFQO0FBQ0gsU0FaQztBQWNGRyxZQWRFLGtCQWNLO0FBQ0gsaUJBQUksSUFBTUMsQ0FBVixJQUFlLElBQWYsRUFDQTtBQUNJLG9CQUFJLFFBQVEsS0FBS0EsQ0FBTCxDQUFSLEtBQW9CLFFBQXBCLElBQWdDLE9BQVEsS0FBS0EsQ0FBTCxFQUFRQyxJQUFoQixLQUEwQixXQUE5RCxFQUNBO0FBQ0ksd0JBQUksT0FBUSxLQUFLRCxDQUFMLEVBQVFDLElBQWhCLElBQXlCLFVBQTdCLEVBQ0E7QUFDSSw2QkFBS0QsQ0FBTCxFQUFRQyxJQUFSO0FBQ0g7QUFDSjtBQUNKO0FBQ0osU0F6QkM7QUEyQkZBLFlBM0JFLGtCQTJCSztBQUNILGlCQUFLRixJQUFMO0FBQ0g7QUE3QkMsS0FBTjtBQWdDSCxDQW5DRCxFQW1DSUcsU0FBU0MsSUFuQ2IiLCJmaWxlIjoiX19hcHAuaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYXBwID0ge1xuXG4gICAgICAgIF9leHRlbmQoc291cmNlLCBjb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHggaW4gY29uZmlnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlW3hdID0gY29uZmlnW3hdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfSxcblxuICAgICAgICBiaW5kKCkge1xuICAgICAgICAgICAgZm9yKGNvbnN0IF8gaW4gdGhpcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzW19dKSA9PSAnb2JqZWN0JyAmJiB0eXBlb2YgKHRoaXNbX10uaW5pdCkgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpc1tfXS5pbml0KSA9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW19dLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbml0KCkge1xuICAgICAgICAgICAgdGhpcy5iaW5kKCk7XG4gICAgICAgIH1cblxuICAgIH07XG59KSkoZG9jdW1lbnQuYm9keSk7Il19

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
                $.app.initBlock('.j-timeline-slider');
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

        bind: function bind() {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLnRpbWVsaW5lLmpzIl0sIm5hbWVzIjpbImFwcCIsInRpbWVsaW5lIiwiZGF0YSIsImZpbHRlciIsInllYXJzIiwibW9udGhzIiwiX2luaXRDYXJvdXNlbCIsIndpZHRoIiwiJCIsIndpbmRvdyIsInNsaWRlcyIsImZpbmQiLCJsZW5ndGgiLCJzbGljayIsImxhenlMb2FkIiwiZG90cyIsImluZmluaXRlIiwiZHJhZ2dhYmxlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJmYWRlIiwiX2N1cnJlbnRZZWFyIiwicGFyc2VJbnQiLCJfY3VycmVudE1vbnRoIiwiX2hhbmRsZSIsImN1cnJlbnQiLCJlYWNoIiwia2V5IiwiaXRlbSIsInN0cmluZ3MiLCJzcGxpdCIsIngiLCJwdXNoIiwieWVhciIsIl9yZWluaXRDYXJvdXNlbCIsIl9zZWxmXyIsIm1vbnRoIiwiaGFzQ2xhc3MiLCJodG1sIiwiY291bnQiLCJrIiwiYXBwZW5kIiwiY2xvbmUiLCJzZXRUaW1lb3V0IiwiaW5pdEJsb2NrIiwiX2NoYW5nZUZpcnN0TW9udGgiLCJ0cmlnZ2VyIiwiX21hdGNoIiwicmVtb3ZlQ2xhc3MiLCJpbmRleE9mIiwiYWRkQ2xhc3MiLCJfZXZlbnRzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJiaW5kIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxRQUFKLEdBQWU7O0FBRVhDLGNBQU0sRUFGSztBQUdYQyxnQkFBUSxJQUhHO0FBSVhDLGVBQU8sSUFKSTtBQUtYQyxnQkFBUSxJQUxHOztBQU9YQyx1QkFBZSx5QkFBVztBQUN0QixnQkFBSUMsUUFBUUMsRUFBRUMsTUFBRixFQUFVRixLQUFWLEVB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QUFGLEVBQVFnRCxRQUFSLENBQWlCLFlBQWpCOztBQUVBZiwyQkFBT1ksTUFBUDtBQUNBWiwyQkFBT0QsZUFBUDtBQUNIO0FBQ0osYUFYRDtBQVlILFNBMUtVOztBQTRLWHFCLGNBQU0sZ0JBQ047QUFDSSxnQkFBSXBCLFNBQVMsSUFBYjs7QUFFQSxpQkFBS3RDLE1BQUwsR0FBY0ssRUFBRSxrQkFBRixDQUFkO0FBQ0EsaUJBQUtKLEtBQUwsR0FBYSxLQUFLRCxNQUFMLENBQVlRLElBQVosQ0FBaUIsbUJBQWpCLENBQWI7QUFDQSxpQkFBS04sTUFBTCxHQUFjLEtBQUtGLE1BQUwsQ0FBWVEsSUFBWixDQUFpQixvQkFBakIsQ0FBZDs7QUFFQSxpQkFBSzBDLE1BQUw7QUFDQSxpQkFBS0ksT0FBTDs7QUFFQSxpQkFBS2pCLGVBQUw7QUFDSDtBQXhMVSxLQUFmO0FBMkxILENBOUxELEVBOExJc0IsU0FBU0MsSUE5TGIiLCJmaWxlIjoiX19hcHAudGltZWxpbmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGFwcC50aW1lbGluZSA9IHtcblxuICAgICAgICBkYXRhOiB7fSxcbiAgICAgICAgZmlsdGVyOiBudWxsLFxuICAgICAgICB5ZWFyczogbnVsbCxcbiAgICAgICAgbW9udGhzOiBudWxsLFxuXG4gICAgICAgIF9pbml0Q2Fyb3VzZWw6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gJCh3aW5kb3cpLndpZHRoKCksXG4gICAgICAgICAgICAgICAgc2xpZGVzID0gJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuZmluZCgnLnNsaWNrLXNsaWRlJykubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgKHdpZHRoID4gNzY4ICYmIHNsaWRlcyA+PSA0KSB8fFxuICAgICAgICAgICAgICAgICh3aWR0aCA+IDU2OCAmJiBzbGlkZXMgPj0gMykgfHxcbiAgICAgICAgICAgICAgICAod2lkdGggPiAzNzUgJiYgc2xpZGVzID49IDIpIHx8XG4gICAgICAgICAgICAgICAgKHdpZHRoIDwgMzc1ICYmIHNsaWRlcyA+PSAxKVxuICAgICAgICAgICAgKSB7XG5cbiAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtY2Fyb3VzZWwnKS5zbGljayh7XG4gICAgICAgICAgICAgICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc3BlZWQ6IDI1OSxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYXJvdXNlbF9fbmF2aWdhdGlvbiBfcHJldiBzbGljay1wcmV2XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjYXJvdXNlbF9fbmF2aWdhdGlvbiBfbmV4dCBzbGljay1uZXh0XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNTY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDM3NSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2N1cnJlbnRZZWFyOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLnllYXJzLmZpbmQoJy5pcy1jdXJyZW50JykuZGF0YSgndmFsdWUnKSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2N1cnJlbnRNb250aDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VJbnQodGhpcy5tb250aHMuZmluZCgnLmlzLWN1cnJlbnQnKS5kYXRhKCd2YWx1ZScpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfaGFuZGxlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jdXJyZW50ID0gdGhpcy5fY3VycmVudFllYXIoKTtcbiAgICAgICAgICAgIHRoaXMuZGF0YS5tb250aHMgPSBbXTtcblxuICAgICAgICAgICAgdGhpcy5tb250aHMuZmluZCgnLmotdGltZWxpbmUtbW9udGhzLWl0ZW0nKS5lYWNoKChrZXksIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICB2YXIgeWVhcnMgPSBbXSwgc3RyaW5ncyA9ICQoaXRlbSkuZGF0YSgnaWYnKSArICcnO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzdHJpbmdzICE9PSAndW5kZWZpbmVkJyAmJiBzdHJpbmdzICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB5ZWFycyA9IHN0cmluZ3Muc3BsaXQoJywnKTtcblxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4IGluIHllYXJzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyc1t4XSA9IHBhcnNlSW50KHllYXJzW3hdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YS5tb250aHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW06IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgIHllYXI6IHllYXJzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBfcmVpbml0Q2Fyb3VzZWw6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIF9zZWxmXyA9IHRoaXMsXG4gICAgICAgICAgICAgICAgeWVhciA9IHRoaXMuX2N1cnJlbnRZZWFyKCksXG4gICAgICAgICAgICAgICAgbW9udGggPSB0aGlzLl9jdXJyZW50TW9udGgoKTtcblxuICAgICAgICAgICAgaWYgKCQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLmhhc0NsYXNzKCdzbGljay1pbml0aWFsaXplZCcpKSB7XG4gICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuc2xpY2soJ3Vuc2xpY2snKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuaHRtbCgnJyk7XG5cbiAgICAgICAgICAgIHZhciBjb3VudCA9ICQoJyN0aW1lbGluZS1jYWNoZScpLmZpbmQoJy5jYXJvdXNlbF9faXRlbS5pcy15ZWFyLScrIHllYXIgKycuaXMtbW9udGgtJyttb250aCkubGVuZ3RoO1xuXG4gICAgICAgICAgICAkKCcjdGltZWxpbmUtY2FjaGUnKS5maW5kKCcuY2Fyb3VzZWxfX2l0ZW0uaXMteWVhci0nKyB5ZWFyICsnLmlzLW1vbnRoLScrbW9udGgpLmVhY2goZnVuY3Rpb24oaywgaXRlbSkge1xuICAgICAgICAgICAgICAgICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLmFwcGVuZCgkKHRoaXMpLmNsb25lKCkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKChrKzEpID09IGNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfc2VsZl8uX2luaXRDYXJvdXNlbCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJC5hcHAuaW5pdEJsb2NrKCcuai10aW1lbGluZS1zbGlkZXInKTtcbiAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2NoYW5nZUZpcnN0TW9udGg6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5tb250aHMuZmluZCgnLmotdGltZWxpbmUtbW9udGhzLWl0ZW0uaXMtYWN0aXZlOmZpcnN0JykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfbWF0Y2g6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIF9zZWxmXyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZSgpO1xuXG4gICAgICAgICAgICB0aGlzLm1vbnRocy5maW5kKCcuai10aW1lbGluZS1tb250aHMtaXRlbScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgJC5lYWNoKHRoaXMuZGF0YS5tb250aHMsIChrLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ueWVhci5pbmRleE9mKHRoaXMuZGF0YS5jdXJyZW50KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoaXRlbS5pdGVtKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmlsdGVyLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZXZlbnRzOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfc2VsZl8gPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnllYXJzLmZpbmQoJy5qLXRpbWVsaW5lLXllYXJzLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy1jdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWZpbHRlcicpLmZpbmQoJy5qLXRpbWVsaW5lLXllYXJzJykuZmluZCgnLmlzLWN1cnJlbnQnKS5yZW1vdmVDbGFzcygnaXMtY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICBfc2VsZl8uX21hdGNoKCk7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmXy5fY2hhbmdlRmlyc3RNb250aCgpO1xuICAgICAgICAgICAgICAgICAgICBfc2VsZl8uX3JlaW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMubW9udGhzLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocy1pdGVtJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaXMtY3VycmVudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyN0aW1lbGluZS1maWx0ZXInKS5maW5kKCcuai10aW1lbGluZS1tb250aHMnKS5maW5kKCcuaXMtY3VycmVudCcpLnJlbW92ZUNsYXNzKCdpcy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9zZWxmXy5fbWF0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9yZWluaXRDYXJvdXNlbCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJpbmQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIF9zZWxmXyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuZmlsdGVyID0gJCgnI3RpbWVsaW5lLWZpbHRlcicpO1xuICAgICAgICAgICAgdGhpcy55ZWFycyA9IHRoaXMuZmlsdGVyLmZpbmQoJy5qLXRpbWVsaW5lLXllYXJzJyk7XG4gICAgICAgICAgICB0aGlzLm1vbnRocyA9IHRoaXMuZmlsdGVyLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocycpO1xuXG4gICAgICAgICAgICB0aGlzLl9tYXRjaCgpO1xuICAgICAgICAgICAgdGhpcy5fZXZlbnRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3JlaW5pdENhcm91c2VsKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSkoZG9jdW1lbnQuYm9keSk7Il19

'use strict';

(function (d) {
    d.addEventListener('DOMContentLoaded', function () {
        app.init();
    });
})(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJpbml0IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBRSxhQUFLO0FBQ0hBLE1BQUVDLGdCQUFGLENBQW1CLGtCQUFuQixFQUF1QyxZQUFNO0FBQ3pDQyxZQUFJQyxJQUFKO0FBQ0gsS0FGRDtBQUdILENBSkQsRUFJSUMsUUFKSiIsImZpbGUiOiJpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKChkID0+IHtcbiAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGFwcC5pbml0KCk7XG4gICAgfSk7XG59KSkoZG9jdW1lbnQpOyJdfQ==
