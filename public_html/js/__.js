'use strict';

var app = app || {};

(function (body) {
    "use strict";

    app.carousel = {

        init: function init() {
            if ($('.j-carousel').length && $('.j-carousel').find('.slick-slide').length) {
                var count = 4,
                    classname = 'carousel';

                $('.j-carousel').each(function () {
                    count = 4;
                    classname = 'carousel';

                    if ($(this).data('viewcount')) {
                        count = parseInt($(this).data('viewcount'));
                    }

                    if ($(this).data('classname')) {
                        classname = $(this).data('classname');
                    }

                    $(this).slick({
                        infinite: true,
                        dots: false,
                        draggable: true,
                        speed: 170,
                        slidesToShow: count,
                        slidesToScroll: 1,
                        swipeToSlide: true,
                        prevArrow: '<button type="button" class="' + classname + '__control _prev slick-prev"></button>',
                        nextArrow: '<button type="button" class="' + classname + '__control _next slick-next"></button>',
                        responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: true
                            }
                        }, {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }]
                    });
                });
            }
        }

    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuY2Fyb3VzZWwuanMiXSwibmFtZXMiOlsiYXBwIiwiYm9keSIsImNhcm91c2VsIiwiaW5pdCIsIiQiLCJsZW5ndGgiLCJmaW5kIiwiY291bnQiLCJjbGFzc25hbWUiLCJlYWNoIiwiZGF0YSIsInBhcnNlSW50Iiwic2xpY2siLCJpbmZpbml0ZSIsImRvdHMiLCJkcmFnZ2FibGUiLCJzcGVlZCIsInNsaWRlc1RvU2hvdyIsInNsaWRlc1RvU2Nyb2xsIiwic3dpcGVUb1NsaWRlIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBQyxVQUFTQyxJQUFULEVBQWM7QUFDWDs7QUFFQUQsUUFBSUUsUUFBSixHQUFlOztBQUVYQyxjQUFNLGdCQUFXO0FBQ2IsZ0JBQUlDLEVBQUUsYUFBRixFQUFpQkMsTUFBakIsSUFBMkJELEVBQUUsYUFBRixFQUFpQkUsSUFBakIsQ0FBc0IsY0FBdEIsRUFBc0NELE1BQXJFLEVBQ0E7QUFDSSxvQkFBSUUsUUFBUSxDQUFaO0FBQUEsb0JBQWVDLFlBQVksVUFBM0I7O0FBRUFKLGtCQUFFLGFBQUYsRUFBaUJLLElBQWpCLENBQXNCLFlBQVU7QUFDNUJGLDRCQUFRLENBQVI7QUFDQUMsZ0NBQVksVUFBWjs7QUFFQSx3QkFBSUosRUFBRSxJQUFGLEVBQVFNLElBQVIsQ0FBYSxXQUFiLENBQUosRUFDQTtBQUNJSCxnQ0FBUUksU0FBU1AsRUFBRSxJQUFGLEVBQVFNLElBQVIsQ0FBYSxXQUFiLENBQVQsQ0FBUjtBQUNIOztBQUVELHdCQUFJTixFQUFFLElBQUYsRUFBUU0sSUFBUixDQUFhLFdBQWIsQ0FBSixFQUNBO0FBQ0lGLG9DQUFZSixFQUFFLElBQUYsRUFBUU0sSUFBUixDQUFhLFdBQWIsQ0FBWjtBQUNIOztBQUVETixzQkFBRSxJQUFGLEVBQVFRLEtBQVIsQ0FBYztBQUNWQyxrQ0FBVSxJQURBO0FBRVZDLDhCQUFNLEtBRkk7QUFHVkMsbUNBQVcsSUFIRDtBQUlWQywrQkFBTyxHQUpHO0FBS1ZDLHNDQUFjVixLQUxKO0FBTVZXLHdDQUFnQixDQU5OO0FBT1ZDLHNDQUFjLElBUEo7QUFRVkMsbUNBQVcsa0NBQWdDWixTQUFoQyxHQUEwQyx1Q0FSM0M7QUFTVmEsbUNBQVcsa0NBQWdDYixTQUFoQyxHQUEwQyx1Q0FUM0M7QUFVVmMsb0NBQVksQ0FDUjtBQUNJQyx3Q0FBWSxJQURoQjtBQUVJQyxzQ0FBVTtBQUNOUCw4Q0FBYyxDQURSO0FBRU5DLGdEQUFnQixDQUZWO0FBR05MLDBDQUFVLElBSEo7QUFJTkMsc0NBQU07QUFKQTtBQUZkLHlCQURRLEVBVVI7QUFDSVMsd0NBQVksR0FEaEI7QUFFSUMsc0NBQVU7QUFDTlAsOENBQWMsQ0FEUjtBQUVOQyxnREFBZ0I7QUFGVjtBQUZkLHlCQVZRLEVBaUJSO0FBQ0lLLHdDQUFZLEdBRGhCO0FBRUlDLHNDQUFVO0FBQ05QLDhDQUFjLENBRFI7QUFFTkMsZ0RBQWdCO0FBRlY7QUFGZCx5QkFqQlE7QUFWRixxQkFBZDtBQW9DSCxpQkFsREQ7QUFtREg7QUFDSjs7QUEzRFUsS0FBZjtBQStESCxDQWxFRCxFQWtFR08sU0FBU3hCLElBbEVaIiwiZmlsZSI6Il9hcHAuY2Fyb3VzZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYXBwIHx8IHt9O1xuXG4oZnVuY3Rpb24oYm9keSl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAuY2Fyb3VzZWwgPSB7XG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCgnLmotY2Fyb3VzZWwnKS5sZW5ndGggJiYgJCgnLmotY2Fyb3VzZWwnKS5maW5kKCcuc2xpY2stc2xpZGUnKS5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIGNvdW50ID0gNCwgY2xhc3NuYW1lID0gJ2Nhcm91c2VsJztcblxuICAgICAgICAgICAgICAgICQoJy5qLWNhcm91c2VsJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBjb3VudCA9IDQ7XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzbmFtZSA9ICdjYXJvdXNlbCc7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCQodGhpcykuZGF0YSgndmlld2NvdW50JykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCd2aWV3Y291bnQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS5kYXRhKCdjbGFzc25hbWUnKSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NuYW1lID0gJCh0aGlzKS5kYXRhKCdjbGFzc25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwZWVkOiAxNzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IGNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2lwZVRvU2xpZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicrY2xhc3NuYW1lKydfX2NvbnRyb2wgX3ByZXYgc2xpY2stcHJldlwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIicrY2xhc3NuYW1lKydfX2NvbnRyb2wgX25leHQgc2xpY2stbmV4dFwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDI0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvdHM6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA2MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ4MCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9O1xuXG59KShkb2N1bWVudC5ib2R5KTsiXX0=

'use strict';

;(function (body) {
    'use strict';

    var _this_ = void 0;

    app.modal = {

        config: {
            prefix: 'tmpl-modal-',
            trigger: '.j-open-popup'
        },

        prepare: function prepare(selector) {
            if (typeof selector !== 'undefined' && selector.length > 1) {
                if (selector.substr(0, 1) == '#') {
                    selector = selector.substr(1);
                }

                selector = _this_.config.input + selector;
            }

            alert(selector);

            return selector;
        },
        bind: function bind() {
            // data-change="true"
            // autosize($('textarea'));

            $('body').on('click', _this_.config.trigger, function (e) {
                e.preventDefault();

                var modal = $(this).data('target') || $(this).attr('href');

                if ($(_this_.prepare(modal)).length) {
                    alert(_this_.prepare(modal));
                }

                return !1;
            });
        },
        init: function init(config) {
            _this_ = this;

            if (typeof config !== 'undefined') {
                _this_.config = app._extend(_this_.config, config);
            }

            _this_.bind();
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAubW9kYWwuanMiXSwibmFtZXMiOlsiX3RoaXNfIiwiYXBwIiwibW9kYWwiLCJjb25maWciLCJwcmVmaXgiLCJ0cmlnZ2VyIiwicHJlcGFyZSIsInNlbGVjdG9yIiwibGVuZ3RoIiwic3Vic3RyIiwiaW5wdXQiLCJhbGVydCIsImJpbmQiLCIkIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJkYXRhIiwiYXR0ciIsImluaXQiLCJfZXh0ZW5kIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsQ0FBRSxnQkFBUTtBQUNQOztBQUVBLFFBQUlBLGVBQUo7O0FBRUFDLFFBQUlDLEtBQUosR0FBWTs7QUFFUkMsZ0JBQVE7QUFDSkMsb0JBQVEsYUFESjtBQUVKQyxxQkFBUztBQUZMLFNBRkE7O0FBT1JDLGVBUFEsbUJBT0FDLFFBUEEsRUFPVTtBQUNkLGdCQUFJLE9BQVFBLFFBQVIsS0FBc0IsV0FBdEIsSUFBcUNBLFNBQVNDLE1BQVQsR0FBa0IsQ0FBM0QsRUFDQTtBQUNJLG9CQUFJRCxTQUFTRSxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEtBQXlCLEdBQTdCLEVBQ0E7QUFDSUYsK0JBQVdBLFNBQVNFLE1BQVQsQ0FBZ0IsQ0FBaEIsQ0FBWDtBQUNIOztBQUVERiwyQkFBV1AsT0FBT0csTUFBUCxDQUFjTyxLQUFkLEdBQXVCSCxRQUFsQztBQUNIOztBQUVESSxrQkFBTUosUUFBTjs7QUFFQSxtQkFBT0EsUUFBUDtBQUNILFNBckJPO0FBdUJSSyxZQXZCUSxrQkF1QkQ7QUFDSDtBQUNBOztBQUVBQyxjQUFFLE1BQUYsRUFBVUMsRUFBVixDQUFhLE9BQWIsRUFBc0JkLE9BQU9HLE1BQVAsQ0FBY0UsT0FBcEMsRUFBNkMsVUFBU1UsQ0FBVCxFQUFXO0FBQ3BEQSxrQkFBRUMsY0FBRjs7QUFFQSxvQkFBTWQsUUFBUVcsRUFBRSxJQUFGLEVBQVFJLElBQVIsQ0FBYSxRQUFiLEtBQTBCSixFQUFFLElBQUYsRUFBUUssSUFBUixDQUFhLE1BQWIsQ0FBeEM7O0FBRUEsb0JBQUlMLEVBQUViLE9BQU9NLE9BQVAsQ0FBZUosS0FBZixDQUFGLEVBQXlCTSxNQUE3QixFQUNBO0FBQ0lHLDBCQUFNWCxPQUFPTSxPQUFQLENBQWVKLEtBQWYsQ0FBTjtBQUNIOztBQUVELHVCQUFPLENBQUMsQ0FBUjtBQUNILGFBWEQ7QUFZSCxTQXZDTztBQXlDUmlCLFlBekNRLGdCQXlDSGhCLE1BekNHLEVBeUNLO0FBQ1RILHFCQUFTLElBQVQ7O0FBRUEsZ0JBQUksT0FBT0csTUFBUCxLQUFrQixXQUF0QixFQUNBO0FBQ0lILHVCQUFPRyxNQUFQLEdBQWdCRixJQUFJbUIsT0FBSixDQUFZcEIsT0FBT0csTUFBbkIsRUFBMkJBLE1BQTNCLENBQWhCO0FBQ0g7O0FBRURILG1CQUFPWSxJQUFQO0FBQ0g7QUFsRE8sS0FBWjtBQXFESCxDQTFEQSxFQTBER1MsU0FBU0MsSUExRFoiLCJmaWxlIjoiX2FwcC5tb2RhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoKGJvZHkgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGxldCBfdGhpc187XG5cbiAgICBhcHAubW9kYWwgPSB7XG5cbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICBwcmVmaXg6ICd0bXBsLW1vZGFsLScsXG4gICAgICAgICAgICB0cmlnZ2VyOiAnLmotb3Blbi1wb3B1cCdcbiAgICAgICAgfSxcblxuICAgICAgICBwcmVwYXJlKHNlbGVjdG9yKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChzZWxlY3RvcikgIT09ICd1bmRlZmluZWQnICYmIHNlbGVjdG9yLmxlbmd0aCA+IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PSAnIycpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZWxlY3RvciA9IF90aGlzXy5jb25maWcuaW5wdXQgICsgc2VsZWN0b3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFsZXJ0KHNlbGVjdG9yKTtcblxuICAgICAgICAgICAgcmV0dXJuIHNlbGVjdG9yO1xuICAgICAgICB9LFxuXG4gICAgICAgIGJpbmQoKSB7XG4gICAgICAgICAgICAvLyBkYXRhLWNoYW5nZT1cInRydWVcIlxuICAgICAgICAgICAgLy8gYXV0b3NpemUoJCgndGV4dGFyZWEnKSk7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBfdGhpc18uY29uZmlnLnRyaWdnZXIsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZGFsID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAgICAgICAgIGlmICgkKF90aGlzXy5wcmVwYXJlKG1vZGFsKSkubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoX3RoaXNfLnByZXBhcmUobW9kYWwpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQoY29uZmlnKSB7XG4gICAgICAgICAgICBfdGhpc18gPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgX3RoaXNfLmNvbmZpZyA9IGFwcC5fZXh0ZW5kKF90aGlzXy5jb25maWcsIGNvbmZpZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIF90aGlzXy5iaW5kKCk7XG4gICAgICAgIH1cblxuICAgIH07XG59KSkoZG9jdW1lbnQuYm9keSk7Il19

// $('.js-print-btn').on('click', function (e) {
//     e.preventDefault();
//     printContent($(this).attr('href'));
// });
// function printContent(el) { // {{{
//     printcontent = $(el).html();
//     printcontent = printcontent.replace('table table-condensed table-bordered ', '');
//     printcontent = printcontent.replace(new RegExp('<a href=', 'g'), '<nolink _href').replace(new RegExp('<a ', 'g'), '<nolink ').replace(new RegExp('</a>', 'g'), '</nolink>');
// //                      console.log(printcontent);
//     var printDivCSS = new String('<body><style>.td-submit, .btn, .js-errors, input  {display: none;} table {border-collapse: collapse;border-spacing: 0;} table td, table th {border:1px #ccc solid; padding: 5px;}</style>');
//     var printDivAfter = new String('</body>');
//     var newWindow = window.open();
//     newWindow.document.write(printDivCSS + printcontent + printDivAfter);
//     newWindow.document.close();
//     newWindow.focus();
//     newWindow.print();
//     newWindow.close();
// }
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAucHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Il9hcHAucHJpbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAkKCcuanMtcHJpbnQtYnRuJykub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbi8vICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICAgcHJpbnRDb250ZW50KCQodGhpcykuYXR0cignaHJlZicpKTtcbi8vIH0pO1xuLy8gZnVuY3Rpb24gcHJpbnRDb250ZW50KGVsKSB7IC8vIHt7e1xuLy8gICAgIHByaW50Y29udGVudCA9ICQoZWwpLmh0bWwoKTtcbi8vICAgICBwcmludGNvbnRlbnQgPSBwcmludGNvbnRlbnQucmVwbGFjZSgndGFibGUgdGFibGUtY29uZGVuc2VkIHRhYmxlLWJvcmRlcmVkICcsICcnKTtcbi8vICAgICBwcmludGNvbnRlbnQgPSBwcmludGNvbnRlbnQucmVwbGFjZShuZXcgUmVnRXhwKCc8YSBocmVmPScsICdnJyksICc8bm9saW5rIF9ocmVmJykucmVwbGFjZShuZXcgUmVnRXhwKCc8YSAnLCAnZycpLCAnPG5vbGluayAnKS5yZXBsYWNlKG5ldyBSZWdFeHAoJzwvYT4nLCAnZycpLCAnPC9ub2xpbms+Jyk7XG4vLyAvLyAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcmludGNvbnRlbnQpO1xuLy8gICAgIHZhciBwcmludERpdkNTUyA9IG5ldyBTdHJpbmcoJzxib2R5PjxzdHlsZT4udGQtc3VibWl0LCAuYnRuLCAuanMtZXJyb3JzLCBpbnB1dCAge2Rpc3BsYXk6IG5vbmU7fSB0YWJsZSB7Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtib3JkZXItc3BhY2luZzogMDt9IHRhYmxlIHRkLCB0YWJsZSB0aCB7Ym9yZGVyOjFweCAjY2NjIHNvbGlkOyBwYWRkaW5nOiA1cHg7fTwvc3R5bGU+Jyk7XG4vLyAgICAgdmFyIHByaW50RGl2QWZ0ZXIgPSBuZXcgU3RyaW5nKCc8L2JvZHk+Jyk7XG4vLyAgICAgdmFyIG5ld1dpbmRvdyA9IHdpbmRvdy5vcGVuKCk7XG4vLyAgICAgbmV3V2luZG93LmRvY3VtZW50LndyaXRlKHByaW50RGl2Q1NTICsgcHJpbnRjb250ZW50ICsgcHJpbnREaXZBZnRlcik7XG4vLyAgICAgbmV3V2luZG93LmRvY3VtZW50LmNsb3NlKCk7XG4vLyAgICAgbmV3V2luZG93LmZvY3VzKCk7XG4vLyAgICAgbmV3V2luZG93LnByaW50KCk7XG4vLyAgICAgbmV3V2luZG93LmNsb3NlKCk7XG4vLyB9Il19

'use strict';

var app = app || {};

(function (body) {
    'use strict';

    var _this_ = void 0;

    app.quantity = {

        config: {
            element: '.j-quantity',
            input: '.j-quantity-count',
            control: '.j-quantity-control',
            complete: null
        },

        element: null,

        setValue: function setValue(quantity) {
            var min = 1;
            var max = 100;

            if (this.element.data('min')) {
                min = this.element.data('min');
            }

            if (this.element.data('max')) {
                max = this.element.data('max');
            }

            if (quantity > max) {
                quantity = max;
            }

            if (quantity < min) {
                quantity = min;
            }

            this.element.find(this.config.input).val(quantity);
        },
        increase: function increase(quantity) {
            quantity += 1;

            this.setValue(quantity);
        },
        decrease: function decrease(quantity) {
            if (quantity > 1) {
                quantity -= 1;
            }

            this.setValue(quantity);
        },
        callback: function callback() {
            if (typeof this.element.data('product') !== 'undefined' && typeof this.config.complete == 'function') {
                this.config.complete.call(null, this.element, this.element.data('product'));
            }
        },
        keys: function keys() {
            var _this = this;
            var role = '';

            $('body').on('keydown', _this_.config.input, function (e) {
                if ([38, 40].includes(e.keyCode)) {
                    e.preventDefault();

                    role = {
                        38: 'increase',
                        40: 'decrease'
                    };

                    _this_.element = $(this).closest(_this_.config.element);

                    _this[role[e.keyCode]](parseInt(_this_.element.find(_this_.config.input).val()));

                    _this_.callback();

                    return false;
                }
            });
        },
        bind: function bind() {
            var role = '';

            $('body').on('click', _this_.config.control, function (e) {
                e.preventDefault();

                _this_.element = $(this).closest(_this_.config.element);

                role = $(this).data('role');

                if (['increase', 'decrease'].includes(role)) {
                    _this[role](parseInt(_this_.element.find(_this_.config.input).val()));
                }

                _this_.callback();

                return !1;
            });
        },
        init: function init(config) {
            _this_ = this;

            if (typeof config !== 'undefined') {
                _this_.config = app._extend(_this_.config, config);
            }

            _this_.bind();
            _this_.keys();
        }
    };
})(document.body);

// this.quantity.init({
//     complete: function(element, id) {
//         // $(element).css({
//         //     'border': '1px solid lime'
//         // });

//         console.log("id :", id);
//     }
// });

// <div class="quantity j-quantity clearfix" data-product="1000" data-min="1" data-max="999">
//     <button type="button" class="quantity__control _decrease j-quantity-control" data-role="decrease"></button>
//     <input type="text" name="count[1000]" value="1" data-role="quantity-input" class="quantity__count j-quantity-count" maxlength="3" autocomplete="off">
//     <button type="button" class="quantity__control _increase j-quantity-control" data-role="increase"></button>
// </div>
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAucXVhbnRpdHkuanMiXSwibmFtZXMiOlsiYXBwIiwiX3RoaXNfIiwicXVhbnRpdHkiLCJjb25maWciLCJlbGVtZW50IiwiaW5wdXQiLCJjb250cm9sIiwiY29tcGxldGUiLCJzZXRWYWx1ZSIsIm1pbiIsIm1heCIsImRhdGEiLCJmaW5kIiwidmFsIiwiaW5jcmVhc2UiLCJkZWNyZWFzZSIsImNhbGxiYWNrIiwiY2FsbCIsImtleXMiLCJfdGhpcyIsInJvbGUiLCIkIiwib24iLCJlIiwiaW5jbHVkZXMiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJjbG9zZXN0IiwicGFyc2VJbnQiLCJiaW5kIiwiaW5pdCIsIl9leHRlbmQiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsTUFBTUEsT0FBTyxFQUFuQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUEsUUFBSUMsZUFBSjs7QUFFQUQsUUFBSUUsUUFBSixHQUFlOztBQUVYQyxnQkFBUTtBQUNKQyxxQkFBUyxhQURMO0FBRUpDLG1CQUFPLG1CQUZIO0FBR0pDLHFCQUFTLHFCQUhMO0FBSUpDLHNCQUFVO0FBSk4sU0FGRzs7QUFTWEgsaUJBQVMsSUFURTs7QUFXWEksZ0JBWFcsb0JBV0ZOLFFBWEUsRUFXUTtBQUNmLGdCQUFJTyxNQUFNLENBQVY7QUFDQSxnQkFBSUMsTUFBTSxHQUFWOztBQUVBLGdCQUFJLEtBQUtOLE9BQUwsQ0FBYU8sSUFBYixDQUFrQixLQUFsQixDQUFKLEVBQThCO0FBQzFCRixzQkFBTSxLQUFLTCxPQUFMLENBQWFPLElBQWIsQ0FBa0IsS0FBbEIsQ0FBTjtBQUNIOztBQUVELGdCQUFJLEtBQUtQLE9BQUwsQ0FBYU8sSUFBYixDQUFrQixLQUFsQixDQUFKLEVBQThCO0FBQzFCRCxzQkFBTSxLQUFLTixPQUFMLENBQWFPLElBQWIsQ0FBa0IsS0FBbEIsQ0FBTjtBQUNIOztBQUVELGdCQUFJVCxXQUFXUSxHQUFmLEVBQW9CO0FBQ2hCUiwyQkFB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SUFBVDs7QUFFQSxnQkFBSSxPQUFPRSxNQUFQLEtBQWtCLFdBQXRCLEVBQ0E7QUFDSUYsdUJBQU9FLE1BQVAsR0FBZ0JILElBQUkrQixPQUFKLENBQVk5QixPQUFPRSxNQUFuQixFQUEyQkEsTUFBM0IsQ0FBaEI7QUFDSDs7QUFFREYsbUJBQU80QixJQUFQO0FBQ0E1QixtQkFBT2lCLElBQVA7QUFDSDtBQS9HVSxLQUFmO0FBa0hILENBdkhELEVBdUhJYyxTQUFTQyxJQXZIYjs7QUF5SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJfYXBwLnF1YW50aXR5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgICd1c2Ugc3RyaWN0JztcblxuICAgIGxldCBfdGhpc187XG5cbiAgICBhcHAucXVhbnRpdHkgPSB7XG5cbiAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICBlbGVtZW50OiAnLmotcXVhbnRpdHknLFxuICAgICAgICAgICAgaW5wdXQ6ICcuai1xdWFudGl0eS1jb3VudCcsXG4gICAgICAgICAgICBjb250cm9sOiAnLmotcXVhbnRpdHktY29udHJvbCcsXG4gICAgICAgICAgICBjb21wbGV0ZTogbnVsbFxuICAgICAgICB9LFxuXG4gICAgICAgIGVsZW1lbnQ6IG51bGwsXG5cbiAgICAgICAgc2V0VmFsdWUocXVhbnRpdHkpIHtcbiAgICAgICAgICAgIGxldCBtaW4gPSAxO1xuICAgICAgICAgICAgbGV0IG1heCA9IDEwMDtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhKCdtaW4nKSkge1xuICAgICAgICAgICAgICAgIG1pbiA9IHRoaXMuZWxlbWVudC5kYXRhKCdtaW4nKTsgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudC5kYXRhKCdtYXgnKSkge1xuICAgICAgICAgICAgICAgIG1heCA9IHRoaXMuZWxlbWVudC5kYXRhKCdtYXgnKTsgICBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHF1YW50aXR5ID4gbWF4KSB7XG4gICAgICAgICAgICAgICAgcXVhbnRpdHkgPSBtYXg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChxdWFudGl0eSA8IG1pbikge1xuICAgICAgICAgICAgICAgIHF1YW50aXR5ID0gbWluO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuZmluZCh0aGlzLmNvbmZpZy5pbnB1dCkudmFsKHF1YW50aXR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbmNyZWFzZShxdWFudGl0eSkge1xuICAgICAgICAgICAgcXVhbnRpdHkgKz0gMTtcblxuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZShxdWFudGl0eSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZGVjcmVhc2UocXVhbnRpdHkpIHtcbiAgICAgICAgICAgIGlmIChxdWFudGl0eSA+IDEpIHtcbiAgICAgICAgICAgICAgICBxdWFudGl0eSAtPSAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlKHF1YW50aXR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxsYmFjaygpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMuZWxlbWVudC5kYXRhKCdwcm9kdWN0JykpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgKHRoaXMuY29uZmlnLmNvbXBsZXRlKSA9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLmNvbXBsZXRlLmNhbGwobnVsbCwgdGhpcy5lbGVtZW50LCB0aGlzLmVsZW1lbnQuZGF0YSgncHJvZHVjdCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBrZXlzKCkge1xuICAgICAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgbGV0IHJvbGUgPSAnJztcblxuICAgICAgICAgICAgJCgnYm9keScpLm9uKCdrZXlkb3duJywgX3RoaXNfLmNvbmZpZy5pbnB1dCwgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChbMzgsIDQwXS5pbmNsdWRlcyhlLmtleUNvZGUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJvbGUgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAzODogJ2luY3JlYXNlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIDQwOiAnZGVjcmVhc2UnXG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXNfLmVsZW1lbnQgPSAkKHRoaXMpLmNsb3Nlc3QoX3RoaXNfLmNvbmZpZy5lbGVtZW50KTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpc1tyb2xlW2Uua2V5Q29kZV1dKHBhcnNlSW50KF90aGlzXy5lbGVtZW50LmZpbmQoX3RoaXNfLmNvbmZpZy5pbnB1dCkudmFsKCkpKTtcblxuICAgICAgICAgICAgICAgICAgICBfdGhpc18uY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmluZCgpIHtcbiAgICAgICAgICAgIGxldCByb2xlID0gJyc7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBfdGhpc18uY29uZmlnLmNvbnRyb2wsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBfdGhpc18uZWxlbWVudCA9ICQodGhpcykuY2xvc2VzdChfdGhpc18uY29uZmlnLmVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgcm9sZSA9ICQodGhpcykuZGF0YSgncm9sZScpO1xuICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoWydpbmNyZWFzZScsICdkZWNyZWFzZSddLmluY2x1ZGVzKHJvbGUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXNbcm9sZV0ocGFyc2VJbnQoX3RoaXNfLmVsZW1lbnQuZmluZChfdGhpc18uY29uZmlnLmlucHV0KS52YWwoKSkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzXy5jYWxsYmFjaygpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdChjb25maWcpIHtcbiAgICAgICAgICAgIF90aGlzXyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBfdGhpc18uY29uZmlnID0gYXBwLl9leHRlbmQoX3RoaXNfLmNvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3RoaXNfLmJpbmQoKTtcbiAgICAgICAgICAgIF90aGlzXy5rZXlzKCk7XG4gICAgICAgIH1cblxuICAgIH07XG59KSkoZG9jdW1lbnQuYm9keSk7XG5cbi8vIHRoaXMucXVhbnRpdHkuaW5pdCh7XG4vLyAgICAgY29tcGxldGU6IGZ1bmN0aW9uKGVsZW1lbnQsIGlkKSB7XG4vLyAgICAgICAgIC8vICQoZWxlbWVudCkuY3NzKHtcbi8vICAgICAgICAgLy8gICAgICdib3JkZXInOiAnMXB4IHNvbGlkIGxpbWUnXG4vLyAgICAgICAgIC8vIH0pO1xuXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKFwiaWQgOlwiLCBpZCk7XG4vLyAgICAgfVxuLy8gfSk7XG5cbi8vIDxkaXYgY2xhc3M9XCJxdWFudGl0eSBqLXF1YW50aXR5IGNsZWFyZml4XCIgZGF0YS1wcm9kdWN0PVwiMTAwMFwiIGRhdGEtbWluPVwiMVwiIGRhdGEtbWF4PVwiOTk5XCI+XG4vLyAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJxdWFudGl0eV9fY29udHJvbCBfZGVjcmVhc2Ugai1xdWFudGl0eS1jb250cm9sXCIgZGF0YS1yb2xlPVwiZGVjcmVhc2VcIj48L2J1dHRvbj5cbi8vICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiY291bnRbMTAwMF1cIiB2YWx1ZT1cIjFcIiBkYXRhLXJvbGU9XCJxdWFudGl0eS1pbnB1dFwiIGNsYXNzPVwicXVhbnRpdHlfX2NvdW50IGotcXVhbnRpdHktY291bnRcIiBtYXhsZW5ndGg9XCIzXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCI+XG4vLyAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJxdWFudGl0eV9fY29udHJvbCBfaW5jcmVhc2Ugai1xdWFudGl0eS1jb250cm9sXCIgZGF0YS1yb2xlPVwiaW5jcmVhc2VcIj48L2J1dHRvbj5cbi8vIDwvZGl2PiJdfQ==

'use strict';

// _section.js

;(function ($) {
    "use strict";

    var body = $('body'),
        $htmlbody = $('html, body'),
        $active,
        $next,
        started = false,
        init_shadow = false,
        popup_is_open = false,
        index = 0,
        min,
        v_height = $(window).height(),
        openPopup = null,
        section_class = 'js-section',
        section = '.' + section_class,
        sections = {},
        scrollPosition,
        scrolltoSection,
        container,
        keyinterval,
        background;

    $.app.section = {

        _checkPopup: function _checkPopup() {
            openPopup = null;
            popup_is_open = false;

            if ($('.popup.is-open').length) {
                popup_is_open = true;
                openPopup = $('.popup.is-open');
            }
        },

        _getPosition: function _getPosition() {
            $(section).map(function (index) {
                $(this).attr('id', 'section-' + index);
                sections[index] = $(this).offset().top;
            });
        },

        resize: function resize() {
            var _this = this;
            var resize_timeout;

            $(window).on('resize', function () {
                resize_timeout = setTimeout(function () {
                    clearTimeout(resize_timeout);

                    scrollPosition = body.scrollTop();

                    $(section).map(function (index) {
                        sections[index] = $(this).offset().top; // + scrollPosition;
                    });

                    _this.calculate();

                    if (v_height !== $(window).height() || is_availableSize()) {
                        var items = [];

                        for (var x in sections) {
                            items.push(Math.abs(sections[x] - scrollPosition));
                        }

                        min = Math.min.apply(null, items), scrolltoSection = items.indexOf(min);

                        setTimeout(function () {
                            started = true;
                            $next = $(section).eq(scrolltoSection);

                            $htmlbody.stop().animate({
                                scrollTop: sections[scrolltoSection]
                            }, 'fast', function () {
                                $('.' + section_class + '.active').removeClass('active');
                                $next.addClass('active');
                                started = false;
                            });
                        }, 300);
                    }
                }, 300);
            });
        },

        _setActive: function _setActive() {
            scrollPosition = body.scrollTop();

            $(section).map(function (index) {
                sections[index] = $(this).offset().top;
            });

            $(section).removeClass('active');

            var items = [];

            for (var x in sections) {
                items.push(Math.abs(sections[x] - scrollPosition));
            }

            scrolltoSection = items.indexOf(Math.min.apply(null, items));

            $(section).eq(scrolltoSection).addClass('active');
        },

        calculate: function calculate() {
            var _this = this;

            if (is_availableSize()) {
                if (!$(section).hasClass('initialized')) {
                    v_height = $(window).height();

                    $(section).addClass('initialized');

                    $(section).css({ 'height': v_height });

                    _this._setActive();
                    _this._getPosition();
                    _this._checkPopup();
                }
            } else {
                if ($(section).hasClass('initialized')) {
                    $(section).removeClass('initialized');
                    $(section).css({ 'height': 'auto' });
                    $(section).removeClass('active');
                }
            }
        },

        init: function init() {
            var _this = this;

            $.app.BrowserDetect.init();

            var scrollingPause = 600,
                scrollingSpeed = 200,
                prevTime = new Date().getTime(),
                curTime,
                timeDiff,
                debounce,
                history,
                history_count = 0,
                delta;

            _this.calculate();

            _this.resize();

            var _container = body,
                _background = body.find('.js-shadow-background');

            function checkHeader() {
                var scrollTop = 0;

                if ($.app.BrowserDetect.browser == 'Explorer') {
                    scrollTop = $(window).scrollTop();
                } else {
                    scrollTop = _container.scrollTop();
                }

                if (scrollTop > _background.height()) {
                    if (!_background.hasClass('active')) {
                        setTimeout(function () {
                            _background.addClass('active');
                        }, 10);
                    }
                } else {
                    if (_background.hasClass('active')) {
                        setTimeout(function () {
                            _background.removeClass('active');
                        }, 10);
                    }
                }
            }

            if (body.find('.js-shadow').length && is_availableSize()) {

                body.on('keyup', function (e) {
                    if ([38, 40].indexOf(e.keyCode) >= 0) {
                        keyinterval = setTimeout(function () {

                            checkHeader();
                        }, 100);
                    }
                });
            }

            if (!body.hasClass('is-scroll')) {
                checkHeader();
            }

            function mousescroll(e) {
                clearTimeout(keyinterval);

                if (!body.hasClass('popup-open') && !body.hasClass('page-open') && $(section).length > 1) {
                    if (is_availableSize()) {
                        e.preventDefault ? e.preventDefault() : e.returnValue = false;

                        curTime = new Date().getTime();

                        debounce = setTimeout(function () {

                            if (!started) {
                                timeDiff = curTime - prevTime;

                                $active = $('.' + section_class + '.active');

                                if (timeDiff > scrollingPause && $active.length && $active.hasClass(section_class)) {
                                    started = true;

                                    delta = e.detail < 0 ? 1 : e.wheelDelta > 0 ? 1 : -1;

                                    if (delta != history) // || history_count <= 1
                                        {
                                            started = false;
                                            history_count++;
                                            prevTime = curTime;
                                        } else {
                                        history_count = 0;
                                        $next = delta < 0 ? $active.next(section) : $active.prev(section);

                                        if ($next.length) {
                                            index = parseInt($next.attr('id').split('-')[1]);

                                            $htmlbody.stop().animate({
                                                scrollTop: sections[index]
                                            }, 'medium', function () {
                                                $active.removeClass('active');
                                                $next.addClass('active');

                                                setTimeout(function () {
                                                    started = false;
                                                    prevTime = curTime;
                                                }, 300);
                                            });
                                        } else {
                                            started = false;
                                        }
                                    }

                                    history = delta;
                                }
                            }

                            clearTimeout(debounce);
                        }, scrollingSpeed);
                    }
                } else {
                    debounce = setTimeout(function () {
                        _this._checkPopup();

                        if (body.find('.js-shadow').length && !popup_is_open) {
                            if (is_availableSize()) {
                                init_shadow = true;
                            }
                        }

                        if (popup_is_open || init_shadow) {
                            if (init_shadow && !popup_is_open) {
                                container = body;
                                background = body.find('.js-shadow-background');
                            } else {
                                container = openPopup.find('.js-shadow-container');
                                background = openPopup.find('.js-shadow-background');
                            }

                            var scrollTop = 0;

                            if ($.app.BrowserDetect.browser == 'Explorer') {
                                scrollTop = $(window).scrollTop();
                            } else {
                                scrollTop = container.scrollTop();
                            }

                            if (scrollTop > background.height()) {
                                if (!background.hasClass('active')) {
                                    setTimeout(function () {
                                        background.addClass('active');
                                    }, 10);
                                }
                            } else {
                                if (background.hasClass('active')) {
                                    setTimeout(function () {
                                        background.removeClass('active');
                                    }, 10);
                                }
                            }
                        }

                        clearTimeout(debounce);
                    }, 150);
                }
            };

            if ($.app.BrowserDetect.browser == 'Explorer') {
                document.body.addEventListener('mousewheel', mousescroll, false);
            } else {
                document.body.addEventListener('mousewheel', mousescroll, false); // Chrome/Safari/Opera
                document.body.addEventListener('DOMMouseScroll', mousescroll, false); // Firefox
            }
        }

    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc2VjdGlvbnMuanMiXSwibmFtZXMiOlsiJCIsImJvZHkiLCIkaHRtbGJvZHkiLCIkYWN0aXZlIiwiJG5leHQiLCJzdGFydGVkIiwiaW5pdF9zaGFkb3ciLCJwb3B1cF9pc19vcGVuIiwiaW5kZXgiLCJtaW4iLCJ2X2hlaWdodCIsIndpbmRvdyIsImhlaWdodCIsIm9wZW5Qb3B1cCIsInNlY3Rpb25fY2xhc3MiLCJzZWN0aW9uIiwic2VjdGlvbnMiLCJzY3JvbGxQb3NpdGlvbiIsInNjcm9sbHRvU2VjdGlvbiIsImNvbnRhaW5lciIsImtleWludGVydmFsIiwiYmFja2dyb3VuZCIsImFwcCIsIl9jaGVja1BvcHVwIiwibGVuZ3RoIiwiX2dldFBvc2l0aW9uIiwibWFwIiwiYXR0ciIsIm9mZnNldCIsInRvcCIsInJlc2l6ZSIsIl90aGlzIiwicmVzaXplX3RpbWVvdXQiLCJvbiIsInNldFRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJzY3JvbGxUb3AiLCJjYWxjdWxhdGUiLCJpc19hdmFpbGFibGVTaXplIiwiaXRlbXMiLCJ4IiwicHVzaCIsIk1hdGgiLCJhYnMiLCJhcHBseSIsImluZGV4T2YiLCJlcSIsInN0b3AiLCJhbmltYXRlIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsIl9zZXRBY3RpdmUiLCJoYXNDbGFzcyIsImNzcyIsImluaXQiLCJCcm93c2VyRGV0ZWN0Iiwic2Nyb2xsaW5nUGF1c2UiLCJzY3JvbGxpbmdTcGVlZCIsInByZXZUaW1lIiwiRGF0ZSIsImdldFRpbWUiLCJjdXJUaW1lIiwidGltZURpZmYiLCJkZWJvdW5jZSIsImhpc3RvcnkiLCJoaXN0b3J5X2NvdW50IiwiZGVsdGEiLCJfY29udGFpbmVyIiwiX2JhY2tncm91bmQiLCJmaW5kIiwiY2hlY2tIZWFkZXIiLCJicm93c2VyIiwiZSIsImtleUNvZGUiLCJtb3VzZXNjcm9sbCIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJkZXRhaWwiLCJ3aGVlbERlbHRhIiwibmV4dCIsInByZXYiLCJwYXJzZUludCIsInNwbGl0IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLENBQUMsQ0FBRSxVQUFVQSxDQUFWLEVBQWE7QUFDWjs7QUFFQSxRQUFJQyxPQUFPRCxFQUFFLE1BQUYsQ0FBWDtBQUFBLFFBQ0lFLFlBQVlGLEVBQUUsWUFBRixDQURoQjtBQUFBLFFBRUlHLE9BRko7QUFBQSxRQUVhQyxLQUZiO0FBQUEsUUFHSUMsVUFBVSxLQUhkO0FBQUEsUUFJSUMsY0FBYyxLQUpsQjtBQUFBLFFBS0lDLGdCQUFnQixLQUxwQjtBQUFBLFFBTUlDLFFBQVEsQ0FOWjtBQUFBLFFBT0lDLEdBUEo7QUFBQSxRQVFJQyxXQUFXVixFQUFFVyxNQUFGLEVBQVVDLE1BQVYsRUFSZjtBQUFBLFFBU0lDLFlBQVksSUFUaEI7QUFBQSxRQVVJQyxnQkFBZ0IsWUFWcEI7QUFBQSxRQVdJQyxVQUFVLE1BQU1ELGFBWHBCO0FBQUEsUUFZSUUsV0FBVyxFQVpmO0FBQUEsUUFhSUMsY0FiSjtBQUFBLFFBY0lDLGVBZEo7QUFBQSxRQWVJQyxTQWZKO0FBQUEsUUFnQklDLFdBaEJKO0FBQUEsUUFpQklDLFVBakJKOztBQW1CQXJCLE1BQUVzQixHQUFGLENBQU1QLE9BQU4sR0FBZ0I7O0FBRVpRLHFCQUFhLHVCQUNiO0FBQ0lWLHdCQUFZLElBQVo7QUFDQU4sNEJBQWdCLEtBQWhCOztBQUVBLGdCQUFJUCxFQUFFLGdCQUFGLEVBQW9Cd0IsTUFBeEIsRUFDQTtBQUNJakIsZ0NBQWdCLElBQWhCO0FBQ0FNLDRCQUFZYixFQUFFLGdCQUFGLENBQVo7QUFDSDtBQUNKLFNBWlc7O0FBY1p5QixzQkFBYyx3QkFDZDtBQUNJekIsY0FBRWUsT0FBRixFQUFXVyxHQUFYLENBQWUsVUFBU2xCLEtBQVQsRUFBZ0I7QUFDM0JSLGtCQUFFLElBQUYsRUFBUTJCLElBQVIsQ0FBYSxJQUFiLEVBQW1CLGFBQWFuQixLQUFoQztBQUNBUSx5QkFBU1IsS0FB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XG47KCBmdW5jdGlvbiggJCApe1xuICAgIFwidXNlIHN0cmljdFwiO1xuICAgIFxuICAgIHZhciBib2R5ID0gJCgnYm9keScpLFxuICAgICAgICAkaHRtbGJvZHkgPSAkKCdodG1sLCBib2R5JyksXG4gICAgICAgICRhY3RpdmUsICRuZXh0LFxuICAgICAgICBzdGFydGVkID0gZmFsc2UsXG4gICAgICAgIGluaXRfc2hhZG93ID0gZmFsc2UsXG4gICAgICAgIHBvcHVwX2lzX29wZW4gPSBmYWxzZSxcbiAgICAgICAgaW5kZXggPSAwLFxuICAgICAgICBtaW4sXG4gICAgICAgIHZfaGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpLFxuICAgICAgICBvcGVuUG9wdXAgPSBudWxsLFxuICAgICAgICBzZWN0aW9uX2NsYXNzID0gJ2pzLXNlY3Rpb24nLFxuICAgICAgICBzZWN0aW9uID0gJy4nICsgc2VjdGlvbl9jbGFzcyxcbiAgICAgICAgc2VjdGlvbnMgPSB7fSxcbiAgICAgICAgc2Nyb2xsUG9zaXRpb24sXG4gICAgICAgIHNjcm9sbHRvU2VjdGlvbixcbiAgICAgICAgY29udGFpbmVyLFxuICAgICAgICBrZXlpbnRlcnZhbCxcbiAgICAgICAgYmFja2dyb3VuZDtcblxuICAgICQuYXBwLnNlY3Rpb24gPSB7XG5cbiAgICAgICAgX2NoZWNrUG9wdXA6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgb3BlblBvcHVwID0gbnVsbDtcbiAgICAgICAgICAgIHBvcHVwX2lzX29wZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCQoJy5wb3B1cC5pcy1vcGVuJykubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBvcHVwX2lzX29wZW4gPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wZW5Qb3B1cCA9ICQoJy5wb3B1cC5pcy1vcGVuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgX2dldFBvc2l0aW9uOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoc2VjdGlvbikubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdpZCcsICdzZWN0aW9uLScgKyBpbmRleCk7XG4gICAgICAgICAgICAgICAgc2VjdGlvbnNbaW5kZXhdID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNpemU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciByZXNpemVfdGltZW91dDtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHJlc2l6ZV90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVfdGltZW91dCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsUG9zaXRpb24gPSBib2R5LnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoc2VjdGlvbikubWFwKGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0gPSAkKHRoaXMpLm9mZnNldCgpLnRvcDsgLy8gKyBzY3JvbGxQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2FsY3VsYXRlKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCh2X2hlaWdodCAhPT0gJCh3aW5kb3cpLmhlaWdodCgpKSB8fCBpc19hdmFpbGFibGVTaXplKCkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpdGVtcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB4IGluIHNlY3Rpb25zKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zLnB1c2goTWF0aC5hYnMoc2VjdGlvbnNbeF0gLSBzY3JvbGxQb3NpdGlvbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4gPSBNYXRoLm1pbi5hcHBseShudWxsLCBpdGVtcyksXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbHRvU2VjdGlvbiA9IGl0ZW1zLmluZGV4T2YobWluKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRuZXh0ID0gJChzZWN0aW9uKS5lcShzY3JvbGx0b1NlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGh0bWxib2R5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zdG9wKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiBzZWN0aW9uc1tzY3JvbGx0b1NlY3Rpb25dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sICdmYXN0JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoJy4nICsgc2VjdGlvbl9jbGFzcyArICcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJG5leHQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBfc2V0QWN0aXZlOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNjcm9sbFBvc2l0aW9uID0gYm9keS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgJChzZWN0aW9uKS5tYXAoZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBzZWN0aW9uc1tpbmRleF0gPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKHNlY3Rpb24pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGl0ZW1zID0gW107XG5cbiAgICAgICAgICAgIGZvciAodmFyIHggaW4gc2VjdGlvbnMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaXRlbXMucHVzaChNYXRoLmFicyhzZWN0aW9uc1t4XSAtIHNjcm9sbFBvc2l0aW9uKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNjcm9sbHRvU2VjdGlvbiA9IGl0ZW1zLmluZGV4T2YoTWF0aC5taW4uYXBwbHkobnVsbCwgaXRlbXMpKTtcblxuICAgICAgICAgICAgJChzZWN0aW9uKS5lcShzY3JvbGx0b1NlY3Rpb24pLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxjdWxhdGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKGlzX2F2YWlsYWJsZVNpemUoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAoISQoc2VjdGlvbikuaGFzQ2xhc3MoJ2luaXRpYWxpemVkJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2X2hlaWdodCA9ICQod2luZG93KS5oZWlnaHQoKTtcblxuICAgICAgICAgICAgICAgICAgICAkKHNlY3Rpb24pLmFkZENsYXNzKCdpbml0aWFsaXplZCcpO1xuXG4gICAgICAgICAgICAgICAgICAgICQoc2VjdGlvbikuY3NzKHsgJ2hlaWdodCc6IHZfaGVpZ2h0IH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9zZXRBY3RpdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2dldFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLl9jaGVja1BvcHVwKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgkKHNlY3Rpb24pLmhhc0NsYXNzKCdpbml0aWFsaXplZCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChzZWN0aW9uKS5yZW1vdmVDbGFzcygnaW5pdGlhbGl6ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgJChzZWN0aW9uKS5jc3MoeyAnaGVpZ2h0JzogJ2F1dG8nIH0pO1xuICAgICAgICAgICAgICAgICAgICAkKHNlY3Rpb24pLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICQuYXBwLkJyb3dzZXJEZXRlY3QuaW5pdCgpO1xuXG4gICAgICAgICAgICB2YXIgc2Nyb2xsaW5nUGF1c2UgPSA2MDAsXG4gICAgICAgICAgICBzY3JvbGxpbmdTcGVlZCA9IDIwMCxcbiAgICAgICAgICAgIHByZXZUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBjdXJUaW1lLFxuICAgICAgICAgICAgdGltZURpZmYsXG4gICAgICAgICAgICBkZWJvdW5jZSxcbiAgICAgICAgICAgIGhpc3RvcnksXG4gICAgICAgICAgICBoaXN0b3J5X2NvdW50ID0gMCxcbiAgICAgICAgICAgIGRlbHRhO1xuXG4gICAgICAgICAgICBfdGhpcy5jYWxjdWxhdGUoKTtcblxuICAgICAgICAgICAgX3RoaXMucmVzaXplKCk7XG5cbiAgICAgICAgICAgIHZhciBfY29udGFpbmVyID0gYm9keSwgX2JhY2tncm91bmQgPSBib2R5LmZpbmQoJy5qcy1zaGFkb3ctYmFja2dyb3VuZCcpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja0hlYWRlcigpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgICAgICAgICBpZiAoJC5hcHAuQnJvd3NlckRldGVjdC5icm93c2VyID09ICdFeHBsb3JlcicpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3AgPSBfY29udGFpbmVyLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChzY3JvbGxUb3AgPiBfYmFja2dyb3VuZC5oZWlnaHQoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghX2JhY2tncm91bmQuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2JhY2tncm91bmQuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfYmFja2dyb3VuZC5oYXNDbGFzcygnYWN0aXZlJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYmFja2dyb3VuZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChib2R5LmZpbmQoJy5qcy1zaGFkb3cnKS5sZW5ndGggJiYgaXNfYXZhaWxhYmxlU2l6ZSgpKVxuICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgYm9keS5vbigna2V5dXAnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFszOCwgNDBdLmluZGV4T2YoZS5rZXlDb2RlKSA+PSAwKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlpbnRlcnZhbCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja0hlYWRlcigpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYm9keS5oYXNDbGFzcygnaXMtc2Nyb2xsJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2hlY2tIZWFkZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbW91c2VzY3JvbGwoZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoa2V5aW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFib2R5Lmhhc0NsYXNzKCdwb3B1cC1vcGVuJykgJiYgIWJvZHkuaGFzQ2xhc3MoJ3BhZ2Utb3BlbicpICYmICQoc2VjdGlvbikubGVuZ3RoID4gMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc19hdmFpbGFibGVTaXplKCkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1clRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgZGVib3VuY2UgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdGFydGVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmYgPSBjdXJUaW1lLXByZXZUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGFjdGl2ZSA9ICQoJy4nICsgc2VjdGlvbl9jbGFzcyArICcuYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZURpZmYgPiBzY3JvbGxpbmdQYXVzZSAmJiAkYWN0aXZlLmxlbmd0aCAmJiAkYWN0aXZlLmhhc0NsYXNzKHNlY3Rpb25fY2xhc3MpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGEgPSAoZS5kZXRhaWw8MCkgPyAxIDogKGUud2hlZWxEZWx0YT4wKSA/IDEgOiAtMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlbHRhICE9IGhpc3RvcnkpIC8vIHx8IGhpc3RvcnlfY291bnQgPD0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoaXN0b3J5X2NvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlRpbWUgPSBjdXJUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnlfY291bnQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRuZXh0ID0gKGRlbHRhIDwgMCkgPyAkYWN0aXZlLm5leHQoc2VjdGlvbikgOiAkYWN0aXZlLnByZXYoc2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJG5leHQubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBwYXJzZUludCgkbmV4dC5hdHRyKCdpZCcpLnNwbGl0KCctJylbMV0pO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRodG1sYm9keVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnN0b3AoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogc2VjdGlvbnNbaW5kZXhdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAnbWVkaXVtJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkYWN0aXZlLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkbmV4dC5hZGRDbGFzcygnYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJldlRpbWUgPSBjdXJUaW1lO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhpc3RvcnkgPSBkZWx0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIHNjcm9sbGluZ1NwZWVkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBkZWJvdW5jZSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuX2NoZWNrUG9wdXAoKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5maW5kKCcuanMtc2hhZG93JykubGVuZ3RoICYmICFwb3B1cF9pc19vcGVuKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc19hdmFpbGFibGVTaXplKCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0X3NoYWRvdyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9wdXBfaXNfb3BlbiB8fCBpbml0X3NoYWRvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaW5pdF9zaGFkb3cgJiYgIXBvcHVwX2lzX29wZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIgPSBib2R5O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kID0gYm9keS5maW5kKCcuanMtc2hhZG93LWJhY2tncm91bmQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyID0gb3BlblBvcHVwLmZpbmQoJy5qcy1zaGFkb3ctY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQgPSBvcGVuUG9wdXAuZmluZCgnLmpzLXNoYWRvdy1iYWNrZ3JvdW5kJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjcm9sbFRvcCA9IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJC5hcHAuQnJvd3NlckRldGVjdC5icm93c2VyID09ICdFeHBsb3JlcicpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3AgPSBjb250YWluZXIuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IGJhY2tncm91bmQuaGVpZ2h0KCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWJhY2tncm91bmQuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJhY2tncm91bmQuaGFzQ2xhc3MoJ2FjdGl2ZScpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChkZWJvdW5jZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDE1MCk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoJC5hcHAuQnJvd3NlckRldGVjdC5icm93c2VyID09ICdFeHBsb3JlcicpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCAnbW91c2V3aGVlbCcsIG1vdXNlc2Nyb2xsLCBmYWxzZSApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lciggJ21vdXNld2hlZWwnLCBtb3VzZXNjcm9sbCwgZmFsc2UgKTsgICAgIC8vIENocm9tZS9TYWZhcmkvT3BlcmFcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoICdET01Nb3VzZVNjcm9sbCcsIG1vdXNlc2Nyb2xsLCBmYWxzZSApOyAvLyBGaXJlZm94XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH07XG5cbn0pKCBqUXVlcnkgKTsiXX0=

'use strict';

// _social.js

;(function ($) {
    "use strict";

    var $body = $('body');

    $.app.social = {
        init: function init() {

            $body.on('click', '.social-trigger', function (e) {
                var $this = $(this),
                    authPopup,
                    x = 200,
                    y = 200;

                e.preventDefault();

                if ($this.hasClass('state-disabled') || $this.hasClass('state-inactive')) {
                    return;
                }

                authPopup = window.open(this.href, $this.text(), 'location,width=700,height=400,top=' + x + ',left=' + y);
                authPopup.focus();
            });
        },

        command: function command(_command, data) {
            if (_command == 'NEW') {
                $.popup.open('#popup-user/user-registry');

                $('#user-registry input[name="firstname"]').val(data.profile.first_name);
                $('#user-registry input[name="lastname"]').val(data.profile.last_name);
                $('#user-registry input[name="external_provider"]').val(data.social_provider);
                $('#user-registry input[name="external_identity"]').val(data.profile.id);
            }

            if (_command == 'RELOAD') {
                window.location.href = data.url;
            }
        }
    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc29jaWFsLmpzIl0sIm5hbWVzIjpbIiQiLCIkYm9keSIsImFwcCIsInNvY2lhbCIsImluaXQiLCJvbiIsImUiLCIkdGhpcyIsImF1dGhQb3B1cCIsIngiLCJ5IiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsIndpbmRvdyIsIm9wZW4iLCJocmVmIiwidGV4dCIsImZvY3VzIiwiY29tbWFuZCIsImRhdGEiLCJwb3B1cCIsInZhbCIsInByb2ZpbGUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwic29jaWFsX3Byb3ZpZGVyIiwiaWQiLCJsb2NhdGlvbiIsInVybCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFFQSxDQUFDLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ1Y7O0FBRUEsUUFBSUMsUUFBUUQsRUFBRSxNQUFGLENBQVo7O0FBRUFBLE1BQUVFLEdBQUYsQ0FBTUMsTUFBTixHQUFlO0FBQ1hDLGNBQU0sZ0JBQVc7O0FBRWJILGtCQUFNSSxFQUFOLENBQVMsT0FBVCxFQUFrQixpQkFBbEIsRUFBcUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzdDLG9CQUFJQyxRQUFRUCxFQUFFLElBQUYsQ0FBWjtBQUFBLG9CQUFxQlEsU0FBckI7QUFBQSxvQkFBZ0NDLElBQUksR0FBcEM7QUFBQSxvQkFBeUNDLElBQUksR0FBN0M7O0FBRUFKLGtCQUFFSyxjQUFGOztBQUVBLG9CQUFHSixNQUFNSyxRQUFOLENBQWUsZ0JBQWYsS0FBb0NMLE1BQU1LLFFBQU4sQ0FBZSxnQkFBZixDQUF2QyxFQUF5RTtBQUFDO0FBQVE7O0FBRWxGSiw0QkFBWUssT0FBT0MsSUFBUCxDQUFZLEtBQUtDLElBQWpCLEVBQXVCUixNQUFNUyxJQUFOLEVBQXZCLEVBQXFDLHVDQUF1Q1AsQ0FBdkMsR0FBNEMsUUFBNUMsR0FBdURDLENBQTVGLENBQVo7QUFDQUYsMEJBQVVTLEtBQVY7QUFDSCxhQVREO0FBVUgsU0FiVTs7QUFlWEMsaUJBQVMsaUJBQVNBLFFBQVQsRUFBa0JDLElBQWxCLEVBQXdCO0FBQzdCLGdCQUFJRCxZQUFXLEtBQWYsRUFDQTtBQUNJbEIsa0JBQUVvQixLQUFGLENBQVFOLElBQVIsQ0FBYSwyQkFBYjs7QUFFQWQsa0JBQUUsd0NBQUYsRUFBNENxQixHQUE1QyxDQUFnREYsS0FBS0csT0FBTCxDQUFhQyxVQUE3RDtBQUNBdkIsa0JBQUUsdUNBQUYsRUFBMkNxQixHQUEzQyxDQUErQ0YsS0FBS0csT0FBTCxDQUFhRSxTQUE1RDtBQUNBeEIsa0JBQUUsZ0RBQUYsRUFBb0RxQixHQUFwRCxDQUF3REYsS0FBS00sZUFBN0Q7QUFDQXpCLGtCQUFFLGdEQUFGLEVBQW9EcUIsR0FBcEQsQ0FBd0RGLEtBQUtHLE9BQUwsQ0FBYUksRUFBckU7QUFDSDs7QUFFRCxnQkFBSVIsWUFBVyxRQUFmLEVBQ0E7QUFDSUwsdUJBQU9jLFFBQVAsQ0FBZ0JaLElBQWhCLEdBQXVCSSxLQUFLUyxHQUE1QjtBQUNIO0FBQ0o7QUE5QlUsS0FBZjtBQWlDSCxDQXRDQSxFQXNDRUMsTUF0Q0YiLCJmaWxlIjoiX2FwcC5zb2NpYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBfc29jaWFsLmpzXG5cbjsoZnVuY3Rpb24oJCkge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyICRib2R5ID0gJCgnYm9keScpO1xuXG4gICAgJC5hcHAuc29jaWFsID0ge1xuICAgICAgICBpbml0OiBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgJGJvZHkub24oJ2NsaWNrJywgJy5zb2NpYWwtdHJpZ2dlcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLCBhdXRoUG9wdXAsIHggPSAyMDAsIHkgPSAyMDA7XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZigkdGhpcy5oYXNDbGFzcygnc3RhdGUtZGlzYWJsZWQnKSB8fCAkdGhpcy5oYXNDbGFzcygnc3RhdGUtaW5hY3RpdmUnKSkge3JldHVybjt9XG5cbiAgICAgICAgICAgICAgICBhdXRoUG9wdXAgPSB3aW5kb3cub3Blbih0aGlzLmhyZWYsICR0aGlzLnRleHQoKSwgJ2xvY2F0aW9uLHdpZHRoPTcwMCxoZWlnaHQ9NDAwLHRvcD0nICsgeCArICAnLGxlZnQ9JyArIHkpO1xuICAgICAgICAgICAgICAgIGF1dGhQb3B1cC5mb2N1cygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29tbWFuZDogZnVuY3Rpb24oY29tbWFuZCwgZGF0YSkge1xuICAgICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ05FVycpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJC5wb3B1cC5vcGVuKCcjcG9wdXAtdXNlci91c2VyLXJlZ2lzdHJ5Jyk7XG5cbiAgICAgICAgICAgICAgICAkKCcjdXNlci1yZWdpc3RyeSBpbnB1dFtuYW1lPVwiZmlyc3RuYW1lXCJdJykudmFsKGRhdGEucHJvZmlsZS5maXJzdF9uYW1lKTtcbiAgICAgICAgICAgICAgICAkKCcjdXNlci1yZWdpc3RyeSBpbnB1dFtuYW1lPVwibGFzdG5hbWVcIl0nKS52YWwoZGF0YS5wcm9maWxlLmxhc3RfbmFtZSk7XG4gICAgICAgICAgICAgICAgJCgnI3VzZXItcmVnaXN0cnkgaW5wdXRbbmFtZT1cImV4dGVybmFsX3Byb3ZpZGVyXCJdJykudmFsKGRhdGEuc29jaWFsX3Byb3ZpZGVyKTtcbiAgICAgICAgICAgICAgICAkKCcjdXNlci1yZWdpc3RyeSBpbnB1dFtuYW1lPVwiZXh0ZXJuYWxfaWRlbnRpdHlcIl0nKS52YWwoZGF0YS5wcm9maWxlLmlkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbW1hbmQgPT0gJ1JFTE9BRCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkYXRhLnVybDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxufSkoalF1ZXJ5KTsiXX0=

'use strict';

var app = app || {};

(function (body) {
    "use strict";

    var _this, _scrollTop, _timeout;

    app.stick = {

        config: {
            delay: 20,
            element: '.js-stick'
        },

        cache: [],

        offset: [],

        calc: function calc() {
            _this = this;

            if ($(_this.config.element).length) {
                var top = 0;

                $(_this.config.element).map(function (index) {
                    $(this).addClass('js-stick-' + index);

                    top = $(this).offset().top;

                    if ($(this).data('offset')) {
                        top -= parseInt($(this).data('offset'));
                    }

                    _this.cache[index] = top;
                    _this.offset[index] = $(this).offset().left;
                });
            }
        },

        resize: function resize() {
            _this = this;

            $(window).on('resize', function () {
                _this.calc();
            });
        },

        check: function check() {
            _this = this;

            _scrollTop = $(window).scrollTop();

            var x, stick;

            for (x in _this.cache) {
                stick = $('.js-stick-' + x);

                if (_scrollTop >= _this.cache[x]) {
                    if (!stick.hasClass('sticked')) {
                        stick.addClass('sticked');
                        stick.css({
                            left: _this.offset[x] + 'px'
                        });
                    }
                } else {
                    if (stick.hasClass('sticked')) {
                        stick.removeAttr('style');
                        stick.removeClass('sticked');
                    }
                }
            }
        },

        initScroll: function initScroll() {
            _this = this;

            $(window).on('scroll', function (e) {

                clearTimeout(_timeout);

                _timeout = setTimeout(function () {

                    _this.check();
                }, _this.config.delay);
            });
        },

        init: function init() {
            this.calc();
            this.check();
            this.resize();

            this.initScroll();
        }

    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAuc3RpY2suanMiXSwibmFtZXMiOlsiYXBwIiwiYm9keSIsIl90aGlzIiwiX3Njcm9sbFRvcCIsIl90aW1lb3V0Iiwic3RpY2siLCJjb25maWciLCJkZWxheSIsImVsZW1lbnQiLCJjYWNoZSIsIm9mZnNldCIsImNhbGMiLCIkIiwibGVuZ3RoIiwidG9wIiwibWFwIiwiaW5kZXgiLCJhZGRDbGFzcyIsImRhdGEiLCJwYXJzZUludCIsImxlZnQiLCJyZXNpemUiLCJ3aW5kb3ciLCJvbiIsImNoZWNrIiwic2Nyb2xsVG9wIiwieCIsImhhc0NsYXNzIiwiY3NzIiwicmVtb3ZlQXR0ciIsInJlbW92ZUNsYXNzIiwiaW5pdFNjcm9sbCIsImUiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiaW5pdCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxNQUFNQSxPQUFPLEVBQWpCOztBQUVBLENBQUMsVUFBU0MsSUFBVCxFQUFjO0FBQ1g7O0FBRUEsUUFBSUMsS0FBSixFQUFXQyxVQUFYLEVBQXVCQyxRQUF2Qjs7QUFFQUosUUFBSUssS0FBSixHQUFZOztBQUVSQyxnQkFBUTtBQUNKQyxtQkFBTyxFQURIO0FBRUpDLHFCQUFTO0FBRkwsU0FGQTs7QUFPUkMsZUFBTyxFQVBDOztBQVNSQyxnQkFBUSxFQVRBOztBQVdSQyxjQUFNLGdCQUNOO0FBQ0lULG9CQUFRLElBQVI7O0FBRUEsZ0JBQUlVLEVBQUVWLE1BQU1JLE1BQU4sQ0FBYUUsT0FBZixFQUF3QkssTUFBNUIsRUFDQTtBQUNJLG9CQUFJQyxNQUFNLENBQVY7O0FBRUFGLGtCQUFFVixNQUFNSSxNQUFOLENBQWFFLE9BQWYsRUFBd0JPLEdBQXhCLENBQTRCLFVBQVNDLEtBQVQsRUFBZ0I7QUFDeENKLHNCQUFFLElBQUYsRUFBUUssUUFBUixDQUFpQixjQUFjRCxLQUEvQjs7QUFFQUYsMEJBQU1GLEVBQUUsSUFBRixFQUFRRixNQUFSLEdBQWlCSSxHQUF2Qjs7QUFFQSx3QkFBSUYsRUFBRSxJQUFGLEVBQVFNLElBQVIsQ0FBYSxRQUFiLENBQUosRUFDQTtBQUNJSiwrQkFBT0ssU0FBU1AsRUFBRSxJQUFGLEVBQVFNLElBQVIsQ0FBYSxRQUFiLENBQVQsQ0FBUDtBQUNIOztBQUVEaEIsMEJBQU1PLEtBQU4sQ0FBWU8sS0FBWixJQUFxQkYsR0FBckI7QUFDQVosMEJBQU1RLE1BQU4sQ0FBYU0sS0FBYixJQUFzQkosRUFBRSxJQUFGLEVBQVFGLE1BQVIsR0FBaUJVLElBQXZDO0FBQ0gsaUJBWkQ7QUFhSDtBQUNKLFNBakNPOztBQW1DUkMsZ0JBQVEsa0JBQ1I7QUFDSW5CLG9CQUFRLElBQVI7O0FBRUFVLGNBQUVVLE1BQUYsRUFBVUMsRUFBVixDQUFhLFFBQWIsRUFBdUIsWUFBVztBQUM5QnJCLHNCQUFNUyxJQUFOO0FBQ0gsYUFGRDtBQUdILFNBMUNPOztBQTRDUmEsZUFBTyxpQkFDUDtBQUNJdEIsb0JBQVEsSUFBUjs7QUFFQUMseUJBQWFTLEVBQUVVLE1BQUYsRUFBVUcsU0FBVixFQUFiOztBQUVBLGdCQUFJQyxDQUFKLEVBQU9yQixLQUFQOztBQUVBLGlCQUFJcUIsQ0FBSixJQUFTeEIsTUFBTU8sS0FBZixFQUNBO0FBQ0lKLHdCQUFRTyxFQUFFLGVBQWVjLENBQWpCLENBQVI7O0FBRUEsb0JBQUl2QixjQUFjRCxNQUFNTyxLQUFOLENBQVlpQixDQUFaLENBQWxCLEVBQ0E7QUFDSSx3QkFBSSxDQUFDckIsTUFBTXNCLFFBQU4sQ0FBZSxTQUFmLENBQUwsRUFDQTtBQUNJdEIsOEJBQU1ZLFFBQU4sQ0FBZSxTQUFmO0FBQ0FaLDhCQUFNdUIsR0FBTixDQUFVO0FBQ05SLGtDQUFNbEIsTUFBTVEsTUFBTixDQUFhZ0IsQ0FBYixJQUFrQjtBQURsQix5QkFBVjtBQUdIO0FBQ0osaUJBVEQsTUFXQTtBQUNJLHdCQUFJckIsTUFBTXNCLFFBQU4sQ0FBZSxTQUFmLENBQUosRUFDQTtBQUNJdEIsOEJBQU13QixVQUFOLENBQWlCLE9BQWpCO0FBQ0F4Qiw4QkFBTXlCLFdBQU4sQ0FBa0IsU0FBbEI7QUFDSDtBQUNKO0FBQ0o7QUFDSixTQTNFTzs7QUE2RVJDLG9CQUFZLHNCQUNaO0FBQ0k3QixvQkFBUSxJQUFSOztBQUVBVSxjQUFFVSxNQUFGLEVBQVVDLEVBQVYsQ0FBYSxRQUFiLEVBQXVCLFVBQVNTLENBQVQsRUFBVzs7QUFFOUJDLDZCQUFhN0IsUUFBYjs7QUFFQUEsMkJBQVc4QixXQUFXLFlBQVc7O0FBRTdCaEMsMEJBQU1zQixLQUFOO0FBRUgsaUJBSlUsRUFJUnRCLE1BQU1JLE1BQU4sQ0FBYUMsS0FKTCxDQUFYO0FBTUgsYUFWRDtBQVdILFNBNUZPOztBQThGUjRCLGNBQU0sZ0JBQ047QUFDSSxpQkFBS3hCLElBQUw7QUFDQSxpQkFBS2EsS0FBTDtBQUNBLGlCQUFLSCxNQUFMOztBQUVBLGlCQUFLVSxVQUFMO0FBQ0g7O0FBckdPLEtBQVo7QUF5R0gsQ0E5R0QsRUE4R0dLLE1BOUdIIiwiZmlsZSI6Il9hcHAuc3RpY2suanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYXBwIHx8IHt9O1xuXG4oZnVuY3Rpb24oYm9keSl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICB2YXIgX3RoaXMsIF9zY3JvbGxUb3AsIF90aW1lb3V0O1xuXG4gICAgYXBwLnN0aWNrID0ge1xuXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgZGVsYXk6IDIwLFxuICAgICAgICAgICAgZWxlbWVudDogJy5qcy1zdGljaydcbiAgICAgICAgfSxcblxuICAgICAgICBjYWNoZTogW10sXG5cbiAgICAgICAgb2Zmc2V0OiBbXSxcblxuICAgICAgICBjYWxjOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCQoX3RoaXMuY29uZmlnLmVsZW1lbnQpLmxlbmd0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9wID0gMDtcblxuICAgICAgICAgICAgICAgICQoX3RoaXMuY29uZmlnLmVsZW1lbnQpLm1hcChmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdqcy1zdGljay0nICsgaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIHRvcCA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLmRhdGEoJ29mZnNldCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3AgLT0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCdvZmZzZXQnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWNoZVtpbmRleF0gPSB0b3A7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm9mZnNldFtpbmRleF0gPSAkKHRoaXMpLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jYWxjKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBjaGVjazogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIF9zY3JvbGxUb3AgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIHZhciB4LCBzdGljaztcblxuICAgICAgICAgICAgZm9yKHggaW4gX3RoaXMuY2FjaGUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RpY2sgPSAkKCcuanMtc3RpY2stJyArIHgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKF9zY3JvbGxUb3AgPj0gX3RoaXMuY2FjaGVbeF0pXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXN0aWNrLmhhc0NsYXNzKCdzdGlja2VkJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0aWNrLmFkZENsYXNzKCdzdGlja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGljay5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IF90aGlzLm9mZnNldFt4XSArICdweCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGljay5oYXNDbGFzcygnc3RpY2tlZCcpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGljay5yZW1vdmVBdHRyKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RpY2sucmVtb3ZlQ2xhc3MoJ3N0aWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBpbml0U2Nyb2xsOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbihlKXtcblxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChfdGltZW91dCk7XG5cbiAgICAgICAgICAgICAgICBfdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2soKTtcblxuICAgICAgICAgICAgICAgIH0sIF90aGlzLmNvbmZpZy5kZWxheSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2FsYygpO1xuICAgICAgICAgICAgdGhpcy5jaGVjaygpO1xuICAgICAgICAgICAgdGhpcy5yZXNpemUoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5pbml0U2Nyb2xsKCk7XG4gICAgICAgIH1cblxuICAgIH07XG5cbn0pKGpRdWVyeSk7Il19


// function checkOpacity (elements, scrollTop, direction) {
//     elements.forEach((item) => {
//         ((element) => {
//             if (angular.element(element.item).hasClass('co-scroll-animate--latest')) {
//                 if (direction === 'down') {
//                     if (scrollTop > element.to) {
//                         angular.element(element.item).addClass('co-scroll-fade-in');
//                         angular.element(element.item).removeClass('co-scroll-animate--latest');
//                         // angular.element(element.item).find('.co-animate-transform').addClass('is-animate');
//                     }
//                 }
//                 // } else if (direction === 'up') {
//                 //     if (scrollTop < element.from) {
//                 //         angular.element(element.item).find('.co-animate-transform').removeClass('is-animate')
//                 //         angular.element(element.item).removeClass('co-scroll-fade-in');
//                 //         angular.element(element.item).removeClass('co-scroll-animate--latest');
//                 //     }
//                 // }
//             }
//         })(item);
//     });
// }

// function changeEffect ($timeout, elements, scrollTop, direction) {
//     elements.forEach((item) => {
//         ((element) => {
//             if (scrollTop >= element.from) {
//                 const current = angular.element(element.item);

//                 if (!current.hasClass('co-scroll-animate--latest')) {
//                     current.addClass('co-scroll-animate--latest');
//                 }

//                 current.addClass('co-scroll-fade-in');

//                 $timeout(() => {
//                     current.find('.co-animate-transform').addClass('is-animate');
//                 }, 10);
//             }
//         })(item);
//     });

//     checkOpacity(elements, scrollTop, direction);
// }

// let time = Number(Date.now());
// let uptime = 0;

// function debounce (fn, delay) {
//     uptime = Number(Date.now());
//     const difference = Number(Math.abs(uptime - time));

//     if (difference >= delay) {
//         time = Number(Date.now());
//         fn();
//     }
// }

// function initScroll ($timeout, $window, $rootScope) {
//     let itemsProcessed = 0;

//     const width = angular.element($window).width();
//     const wheight = angular.element($window).height() - (angular.element($window).height() / 6);
//     const animate = document.querySelectorAll('.co-scroll-animate');
//     const length = animate.length;

//     angular.element($window).unbind('scroll.animation');

//     function callback () {
//         let last = 0;

//         angular.element($window).bind('scroll.animation', () => {
//             let direction = null;
//             const scrollTop = angular.element($window).scrollTop();

//             if (scrollTop > last) {
//                 direction = 'down';
//             } else {
//                 direction = 'up';
//             }

//             debounce(() => {
//                 changeEffect($timeout, $rootScope.elements, (scrollTop + wheight), direction);
//             }, 15);

//             last = scrollTop;
//         });

//         $rootScope.$apply();
//     }

//     if (width >= 480) {
//         animate.forEach((item) => {
//             itemsProcessed++;

//             const ptop = angular.element(item).offset().top;
//             const height = angular.element(item).height();

//             $rootScope.elements.push({
//                 item: angular.element(item),
//                 from: ptop,
//                 to: ptop + height,
//                 h: height
//             });

//             if (itemsProcessed === length) {
//                 callback();
//             }
//         });
//     }
// }
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9hcHAudmlld3BvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJfYXBwLnZpZXdwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vLyBmdW5jdGlvbiBjaGVja09wYWNpdHkgKGVsZW1lbnRzLCBzY3JvbGxUb3AsIGRpcmVjdGlvbikge1xuLy8gICAgIGVsZW1lbnRzLmZvckVhY2goKGl0ZW0pID0+IHtcbi8vICAgICAgICAgKChlbGVtZW50KSA9PiB7XG4vLyAgICAgICAgICAgICBpZiAoYW5ndWxhci5lbGVtZW50KGVsZW1lbnQuaXRlbSkuaGFzQ2xhc3MoJ2NvLXNjcm9sbC1hbmltYXRlLS1sYXRlc3QnKSkge1xuLy8gICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkb3duJykge1xuLy8gICAgICAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gZWxlbWVudC50bykge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgYW5ndWxhci5lbGVtZW50KGVsZW1lbnQuaXRlbSkuYWRkQ2xhc3MoJ2NvLXNjcm9sbC1mYWRlLWluJyk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZWxlbWVudC5pdGVtKS5yZW1vdmVDbGFzcygnY28tc2Nyb2xsLWFuaW1hdGUtLWxhdGVzdCcpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy8gYW5ndWxhci5lbGVtZW50KGVsZW1lbnQuaXRlbSkuZmluZCgnLmNvLWFuaW1hdGUtdHJhbnNmb3JtJykuYWRkQ2xhc3MoJ2lzLWFuaW1hdGUnKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAvLyB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3VwJykge1xuLy8gICAgICAgICAgICAgICAgIC8vICAgICBpZiAoc2Nyb2xsVG9wIDwgZWxlbWVudC5mcm9tKSB7XG4vLyAgICAgICAgICAgICAgICAgLy8gICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZWxlbWVudC5pdGVtKS5maW5kKCcuY28tYW5pbWF0ZS10cmFuc2Zvcm0nKS5yZW1vdmVDbGFzcygnaXMtYW5pbWF0ZScpXG4vLyAgICAgICAgICAgICAgICAgLy8gICAgICAgICBhbmd1bGFyLmVsZW1lbnQoZWxlbWVudC5pdGVtKS5yZW1vdmVDbGFzcygnY28tc2Nyb2xsLWZhZGUtaW4nKTtcbi8vICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFuZ3VsYXIuZWxlbWVudChlbGVtZW50Lml0ZW0pLnJlbW92ZUNsYXNzKCdjby1zY3JvbGwtYW5pbWF0ZS0tbGF0ZXN0Jyk7XG4vLyAgICAgICAgICAgICAgICAgLy8gICAgIH1cbi8vICAgICAgICAgICAgICAgICAvLyB9XG4vLyAgICAgICAgICAgICB9XG4vLyAgICAgICAgIH0pKGl0ZW0pO1xuLy8gICAgIH0pO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBjaGFuZ2VFZmZlY3QgKCR0aW1lb3V0LCBlbGVtZW50cywgc2Nyb2xsVG9wLCBkaXJlY3Rpb24pIHtcbi8vICAgICBlbGVtZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4vLyAgICAgICAgICgoZWxlbWVudCkgPT4ge1xuLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+PSBlbGVtZW50LmZyb20pIHtcbi8vICAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50ID0gYW5ndWxhci5lbGVtZW50KGVsZW1lbnQuaXRlbSk7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnQuaGFzQ2xhc3MoJ2NvLXNjcm9sbC1hbmltYXRlLS1sYXRlc3QnKSkge1xuLy8gICAgICAgICAgICAgICAgICAgICBjdXJyZW50LmFkZENsYXNzKCdjby1zY3JvbGwtYW5pbWF0ZS0tbGF0ZXN0Jyk7XG4vLyAgICAgICAgICAgICAgICAgfVxuXG4vLyAgICAgICAgICAgICAgICAgY3VycmVudC5hZGRDbGFzcygnY28tc2Nyb2xsLWZhZGUtaW4nKTtcblxuLy8gICAgICAgICAgICAgICAgICR0aW1lb3V0KCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICAgICAgY3VycmVudC5maW5kKCcuY28tYW5pbWF0ZS10cmFuc2Zvcm0nKS5hZGRDbGFzcygnaXMtYW5pbWF0ZScpO1xuLy8gICAgICAgICAgICAgICAgIH0sIDEwKTtcbi8vICAgICAgICAgICAgIH1cbi8vICAgICAgICAgfSkoaXRlbSk7XG4vLyAgICAgfSk7XG5cbi8vICAgICBjaGVja09wYWNpdHkoZWxlbWVudHMsIHNjcm9sbFRvcCwgZGlyZWN0aW9uKTtcbi8vIH1cblxuLy8gbGV0IHRpbWUgPSBOdW1iZXIoRGF0ZS5ub3coKSk7XG4vLyBsZXQgdXB0aW1lID0gMDtcblxuLy8gZnVuY3Rpb24gZGVib3VuY2UgKGZuLCBkZWxheSkge1xuLy8gICAgIHVwdGltZSA9IE51bWJlcihEYXRlLm5vdygpKTtcbi8vICAgICBjb25zdCBkaWZmZXJlbmNlID0gTnVtYmVyKE1hdGguYWJzKHVwdGltZSAtIHRpbWUpKTtcblxuLy8gICAgIGlmIChkaWZmZXJlbmNlID49IGRlbGF5KSB7XG4vLyAgICAgICAgIHRpbWUgPSBOdW1iZXIoRGF0ZS5ub3coKSk7XG4vLyAgICAgICAgIGZuKCk7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBmdW5jdGlvbiBpbml0U2Nyb2xsICgkdGltZW91dCwgJHdpbmRvdywgJHJvb3RTY29wZSkge1xuLy8gICAgIGxldCBpdGVtc1Byb2Nlc3NlZCA9IDA7XG5cbi8vICAgICBjb25zdCB3aWR0aCA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KS53aWR0aCgpO1xuLy8gICAgIGNvbnN0IHdoZWlnaHQgPSBhbmd1bGFyLmVsZW1lbnQoJHdpbmRvdykuaGVpZ2h0KCkgLSAoYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLmhlaWdodCgpIC8gNik7XG4vLyAgICAgY29uc3QgYW5pbWF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jby1zY3JvbGwtYW5pbWF0ZScpO1xuLy8gICAgIGNvbnN0IGxlbmd0aCA9IGFuaW1hdGUubGVuZ3RoO1xuXG4vLyAgICAgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLnVuYmluZCgnc2Nyb2xsLmFuaW1hdGlvbicpO1xuXG4vLyAgICAgZnVuY3Rpb24gY2FsbGJhY2sgKCkge1xuLy8gICAgICAgICBsZXQgbGFzdCA9IDA7XG5cbi8vICAgICAgICAgYW5ndWxhci5lbGVtZW50KCR3aW5kb3cpLmJpbmQoJ3Njcm9sbC5hbmltYXRpb24nLCAoKSA9PiB7XG4vLyAgICAgICAgICAgICBsZXQgZGlyZWN0aW9uID0gbnVsbDtcbi8vICAgICAgICAgICAgIGNvbnN0IHNjcm9sbFRvcCA9IGFuZ3VsYXIuZWxlbWVudCgkd2luZG93KS5zY3JvbGxUb3AoKTtcblxuLy8gICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA+IGxhc3QpIHtcbi8vICAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSAnZG93bic7XG4vLyAgICAgICAgICAgICB9IGVsc2Uge1xuLy8gICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9ICd1cCc7XG4vLyAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgIGRlYm91bmNlKCgpID0+IHtcbi8vICAgICAgICAgICAgICAgICBjaGFuZ2VFZmZlY3QoJHRpbWVvdXQsICRyb290U2NvcGUuZWxlbWVudHMsIChzY3JvbGxUb3AgKyB3aGVpZ2h0KSwgZGlyZWN0aW9uKTtcbi8vICAgICAgICAgICAgIH0sIDE1KTtcblxuLy8gICAgICAgICAgICAgbGFzdCA9IHNjcm9sbFRvcDtcbi8vICAgICAgICAgfSk7XG5cbi8vICAgICAgICAgJHJvb3RTY29wZS4kYXBwbHkoKTtcbi8vICAgICB9XG5cbi8vICAgICBpZiAod2lkdGggPj0gNDgwKSB7XG4vLyAgICAgICAgIGFuaW1hdGUuZm9yRWFjaCgoaXRlbSkgPT4ge1xuLy8gICAgICAgICAgICAgaXRlbXNQcm9jZXNzZWQrKztcblxuLy8gICAgICAgICAgICAgY29uc3QgcHRvcCA9IGFuZ3VsYXIuZWxlbWVudChpdGVtKS5vZmZzZXQoKS50b3A7XG4vLyAgICAgICAgICAgICBjb25zdCBoZWlnaHQgPSBhbmd1bGFyLmVsZW1lbnQoaXRlbSkuaGVpZ2h0KCk7XG5cbi8vICAgICAgICAgICAgICRyb290U2NvcGUuZWxlbWVudHMucHVzaCh7XG4vLyAgICAgICAgICAgICAgICAgaXRlbTogYW5ndWxhci5lbGVtZW50KGl0ZW0pLFxuLy8gICAgICAgICAgICAgICAgIGZyb206IHB0b3AsXG4vLyAgICAgICAgICAgICAgICAgdG86IHB0b3AgKyBoZWlnaHQsXG4vLyAgICAgICAgICAgICAgICAgaDogaGVpZ2h0XG4vLyAgICAgICAgICAgICB9KTtcblxuLy8gICAgICAgICAgICAgaWYgKGl0ZW1zUHJvY2Vzc2VkID09PSBsZW5ndGgpIHtcbi8vICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuLy8gICAgICAgICAgICAgfVxuLy8gICAgICAgICB9KTtcbi8vICAgICB9XG4vLyB9XG4iXX0=
