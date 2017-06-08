'use strict';

function declOfNum(n, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    n = Math.abs(n);
    return titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]];
}

// var i = 1;
// setTimeout(function run() {
//     func(i);
//     setTimeout(run, 100);
// }, 100);

// ;((d => {
//     function template(id, data) {
//         if (d.getElementById(id) !== null) {
//             return Template7.compile(d.getElementById(id).innerHTML)(data || {});
//         }
//         return '';
//     }
//     window.template = template;
// }))(document);

// const addEvent = ((() => {
//    const filter = (el, type, fn) => {
//       for (let i = 0, len = el.length; i < len; i++) {
//          addEvent(el[i], type, fn);
//       }
//    };
//    if (document.addEventListener) {
//       return (el, type, fn) => {
//          if (el && el.nodeName || el === window) {
//             el.addEventListener(type, fn, false);
//          } else if (el && el.length) {
//             filter(el, type, fn);
//          }
//       };
//    }

//    return (el, type, fn) => {
//       if (el && el.nodeName || el === window) {
//          el.attachEvent(`on${type}`, () => fn.call(el, window.event));
//       } else if (el && el.length) {
//          filter(el, type, fn);
//       }
//    };
// }))();

// // addEvent(document.getElementsByTagName('a'), 'click', fn);

// const $ = el => document.querySelectorAll(el);

// // $('.box');

// const lazyload = (container, settings) => {
//    const lazyClass = 'js-lazyload-images';
//    require(['jquery', 'lib/jquery.lazyload'], $ => {
//       const node = $(container);
//       const $lazyNode = $(`.${lazyClass}`, node);
//       $lazyNode.lazyload(settings).removeClass(lazyClass);
//       node.scroll();
//    });
// };

// /*
// window.addEventListener('popstate', e => {
//    const state = e.state;
//    if(!state) return;
//    if(state.layer) {
//       create_layer(state.layer, JSON.parse(state.settings));
//    }
// }, false);
// */

// function fullPresent(elem)
// {
//   var docViewTop = $(window).scrollTop(),
//   docViewBottom = docViewTop + $(window).height(),
//   elemTop = $(elem).offset().top,
//   elemBottom = elemTop + $(elem).height();

//   return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
// }


// function youTubeGetId(url) {
//     const expression = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be[.]?\/|youtube\.com[.]?\/(?:embed\/|v\/|watch\/?\?(?:\S+=\S*&)*v=))([\w-]{11})\S*$/;
//     return url.match(expression) ? RegExp.$1 : undefined;
// }

// function isInt(n){
//     return Number(n) === n && n % 1 === 0;
// }

// function isFloat(n){
//     return Number(n) === n && n % 1 !== 0;
// }
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbImRlY2xPZk51bSIsIm4iLCJ0aXRsZXMiLCJjYXNlcyIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJDLENBQW5CLEVBQXNCQyxNQUF0QixFQUE4QjtBQUMxQixRQUFNQyxRQUFRLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsQ0FBZDtBQUNBRixRQUFJRyxLQUFLQyxHQUFMLENBQVNKLENBQVQsQ0FBSjtBQUNBLFdBQU9DLE9BQVFELElBQUksR0FBSixHQUFVLENBQVYsSUFBZUEsSUFBSSxHQUFKLEdBQVUsRUFBMUIsR0FBZ0MsQ0FBaEMsR0FBb0NFLE1BQU9GLElBQUksRUFBSixHQUFTLENBQVYsR0FBZUEsSUFBSSxFQUFuQixHQUF3QixDQUE5QixDQUEzQyxDQUFQO0FBQ0g7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsImZpbGUiOiJfaGVscGVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gZGVjbE9mTnVtKG4sIHRpdGxlcykge1xuICAgIGNvbnN0IGNhc2VzID0gWzIsIDAsIDEsIDEsIDEsIDJdO1xuICAgIG4gPSBNYXRoLmFicyhuKTtcbiAgICByZXR1cm4gdGl0bGVzWyhuICUgMTAwID4gNCAmJiBuICUgMTAwIDwgMjApID8gMiA6IGNhc2VzWyhuICUgMTAgPCA1KSA/IG4gJSAxMCA6IDVdXTtcbn1cblxuLy8gdmFyIGkgPSAxO1xuLy8gc2V0VGltZW91dChmdW5jdGlvbiBydW4oKSB7XG4vLyAgICAgZnVuYyhpKTtcbi8vICAgICBzZXRUaW1lb3V0KHJ1biwgMTAwKTtcbi8vIH0sIDEwMCk7XG5cbi8vIDsoKGQgPT4ge1xuLy8gICAgIGZ1bmN0aW9uIHRlbXBsYXRlKGlkLCBkYXRhKSB7XG4vLyAgICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSAhPT0gbnVsbCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIFRlbXBsYXRlNy5jb21waWxlKGQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCkoZGF0YSB8fCB7fSk7XG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuICcnO1xuLy8gICAgIH1cbi8vICAgICB3aW5kb3cudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbi8vIH0pKShkb2N1bWVudCk7XG5cbi8vIGNvbnN0IGFkZEV2ZW50ID0gKCgoKSA9PiB7XG4vLyAgICBjb25zdCBmaWx0ZXIgPSAoZWwsIHR5cGUsIGZuKSA9PiB7XG4vLyAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gZWwubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbi8vICAgICAgICAgIGFkZEV2ZW50KGVsW2ldLCB0eXBlLCBmbik7XG4vLyAgICAgICB9XG4vLyAgICB9O1xuLy8gICAgaWYgKGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbi8vICAgICAgIHJldHVybiAoZWwsIHR5cGUsIGZuKSA9PiB7XG4vLyAgICAgICAgICBpZiAoZWwgJiYgZWwubm9kZU5hbWUgfHwgZWwgPT09IHdpbmRvdykge1xuLy8gICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmbiwgZmFsc2UpO1xuLy8gICAgICAgICAgfSBlbHNlIGlmIChlbCAmJiBlbC5sZW5ndGgpIHtcbi8vICAgICAgICAgICAgIGZpbHRlcihlbCwgdHlwZSwgZm4pO1xuLy8gICAgICAgICAgfVxuLy8gICAgICAgfTtcbi8vICAgIH1cbiBcbi8vICAgIHJldHVybiAoZWwsIHR5cGUsIGZuKSA9PiB7XG4vLyAgICAgICBpZiAoZWwgJiYgZWwubm9kZU5hbWUgfHwgZWwgPT09IHdpbmRvdykge1xuLy8gICAgICAgICAgZWwuYXR0YWNoRXZlbnQoYG9uJHt0eXBlfWAsICgpID0+IGZuLmNhbGwoZWwsIHdpbmRvdy5ldmVudCkpO1xuLy8gICAgICAgfSBlbHNlIGlmIChlbCAmJiBlbC5sZW5ndGgpIHtcbi8vICAgICAgICAgIGZpbHRlcihlbCwgdHlwZSwgZm4pO1xuLy8gICAgICAgfVxuLy8gICAgfTtcbi8vIH0pKSgpO1xuXG4vLyAvLyBhZGRFdmVudChkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYScpLCAnY2xpY2snLCBmbik7XG5cbi8vIGNvbnN0ICQgPSBlbCA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGVsKTtcblxuLy8gLy8gJCgnLmJveCcpO1xuXG4vLyBjb25zdCBsYXp5bG9hZCA9IChjb250YWluZXIsIHNldHRpbmdzKSA9PiB7XG4vLyAgICBjb25zdCBsYXp5Q2xhc3MgPSAnanMtbGF6eWxvYWQtaW1hZ2VzJztcbi8vICAgIHJlcXVpcmUoWydqcXVlcnknLCAnbGliL2pxdWVyeS5sYXp5bG9hZCddLCAkID0+IHtcbi8vICAgICAgIGNvbnN0IG5vZGUgPSAkKGNvbnRhaW5lcik7XG4vLyAgICAgICBjb25zdCAkbGF6eU5vZGUgPSAkKGAuJHtsYXp5Q2xhc3N9YCwgbm9kZSk7XG4vLyAgICAgICAkbGF6eU5vZGUubGF6eWxvYWQoc2V0dGluZ3MpLnJlbW92ZUNsYXNzKGxhenlDbGFzcyk7XG4vLyAgICAgICBub2RlLnNjcm9sbCgpO1xuLy8gICAgfSk7XG4vLyB9O1xuXG4vLyAvKlxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZSA9PiB7XG4vLyAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4vLyAgICBpZighc3RhdGUpIHJldHVybjtcbi8vICAgIGlmKHN0YXRlLmxheWVyKSB7XG4vLyAgICAgICBjcmVhdGVfbGF5ZXIoc3RhdGUubGF5ZXIsIEpTT04ucGFyc2Uoc3RhdGUuc2V0dGluZ3MpKTtcbi8vICAgIH1cbi8vIH0sIGZhbHNlKTtcbi8vICovXG5cbi8vIGZ1bmN0aW9uIGZ1bGxQcmVzZW50KGVsZW0pXG4vLyB7XG4vLyAgIHZhciBkb2NWaWV3VG9wID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpLFxuLy8gICBkb2NWaWV3Qm90dG9tID0gZG9jVmlld1RvcCArICQod2luZG93KS5oZWlnaHQoKSxcbi8vICAgZWxlbVRvcCA9ICQoZWxlbSkub2Zmc2V0KCkudG9wLFxuLy8gICBlbGVtQm90dG9tID0gZWxlbVRvcCArICQoZWxlbSkuaGVpZ2h0KCk7XG5cbi8vICAgcmV0dXJuICgoZWxlbUJvdHRvbSA8PSBkb2NWaWV3Qm90dG9tKSAmJiAoZWxlbVRvcCA+PSBkb2NWaWV3VG9wKSk7XG4vLyB9XG5cblxuLy8gZnVuY3Rpb24geW91VHViZUdldElkKHVybCkge1xuLy8gICAgIGNvbnN0IGV4cHJlc3Npb24gPSAvXig/Omh0dHBzPzpcXC9cXC8pPyg/Ond3d1xcLik/KD86eW91dHVcXC5iZVsuXT9cXC98eW91dHViZVxcLmNvbVsuXT9cXC8oPzplbWJlZFxcL3x2XFwvfHdhdGNoXFwvP1xcPyg/OlxcUys9XFxTKiYpKnY9KSkoW1xcdy1dezExfSlcXFMqJC87XG4vLyAgICAgcmV0dXJuIHVybC5tYXRjaChleHByZXNzaW9uKSA/IFJlZ0V4cC4kMSA6IHVuZGVmaW5lZDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaXNJbnQobil7XG4vLyAgICAgcmV0dXJuIE51bWJlcihuKSA9PT0gbiAmJiBuICUgMSA9PT0gMDtcbi8vIH1cblxuLy8gZnVuY3Rpb24gaXNGbG9hdChuKXtcbi8vICAgICByZXR1cm4gTnVtYmVyKG4pID09PSBuICYmIG4gJSAxICE9PSAwO1xuLy8gfVxuIl19

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
$.popup.init('.trigger-popup');
$.popup.open('popup-choose-photo-source');
$.popup.open('popup-choose-photo-source/nested-tab');
*/

;(function ($) {
	"use strict";

	var defaults = {
		wrapper: 'body',
		popupClass: '.popup',
		triggerClass: '.j-open-popup',
		dialogClass: '.j-popup-dialog',
		closeClass: '.j-popup-close',
		speed: 550,
		overlay: {
			enable: !0,
			element: '#overlay'
		},
		overlayClickClose: !0,
		cssPosition: !0,
		bodyclass: !0,
		hashCheck: !0,
		hashChange: !0,
		keyHooks: !0,
		template: {
			error: 'tmpl-popup-error',
			message: 'tmpl-popup-message',
			notification: 'tmpl-notification'
		}
	},
	    popup = null,
	    noty = null,
	    temp = null,
	    nested = [],
	    $dialog = '',
	    $trigger = '',
	    $body = $('body'),
	    $win = $(window),
	    $doc = $(document),
	    selector_cache,
	    notify_timeout,
	    is_nested,
	    resizeTimeout;

	$.overlay = {
		close: function close() {
			$(defaults.overlay.element).removeClass('animate');

			setTimeout(function () {
				$(defaults.overlay.element).removeClass('visible is-open');
				$(defaults.overlay.element).filter('.temp').remove();
			}, defaults.speed);
		}
	};

	$.popup = {
		_getPopup: function _getPopup(selector) {
			var $popup;

			if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
				return selector;
			}

			$popup = $('#' + selector);

			return $popup.length ? $popup : null;
		},

		_getPosition: function _getPosition($popup) {
			popup = this;

			if (!defaults.cssPosition) {
				return {};
			}

			var prop = {},
			    ww = $win.width(),
			    wh = $win.height(),
			    dw = $doc.width(),
			    dh = $doc.height(),
			    pw = $popup.outerWidth(),
			    ph = $popup.outerHeight(),
			    st = $win.scrollTop(),
			    left = 0,
			    top = 0,
			    css = {},
			    posType = $popup.attr('data-position'),
			    $realWrapper = null;

			if (dw >= pw) {
				left = Math.round((dw - pw) / 2);
			}

			if (wh >= ph) {
				css.position = 'fixed';
				top = '50%';
				css.marginTop = '-' + Math.ceil(ph / 2) + 'px';
			} else {
				css.position = 'absolute';
				top = st + Math.round((wh - ph) / 2);
			}

			css.top = top;

			if (posType == 'right') {
				css.right = 0;
			} else {
				css.left = left;
			}

			return css;
		},

		_changePosition: function _changePosition(selector) {
			var $popup = this._getPopup(selector);

			if (!defaults.cssPosition) {
				$popup.css(this._getPosition($popup));
			}
		},

		_checkScroll: function _checkScroll(popup) {
			$dialog = $(popup).find(defaults.dialogClass);

			if ($dialog.outerHeight() > $win.height()) {
				$dialog.addClass('is-scrolling');
			} else {
				$dialog.removeClass('is-scrolling');
			}
		},

		close: function close(element, callback) {
			popup = this;

			var scroll = 0,
			    cb = false,
			    is_native = true,
			    $popups;

			$popups = $body.find('.popup.is-open');

			if (typeof element !== 'undefined') {
				$popups = $(element);
				is_native = false;
			}

			if (typeof callback !== 'undefined') {
				cb = true;
			}

			$body.trigger('popup.before_close', $popups);

			if (defaults.overlay.enable && is_native) {
				$.overlay.close();
			};

			$(defaults.wrapper).off('click.wrapClose');

			$popups.removeClass('animate');

			setTimeout(function () {
				$popups.removeClass('visible is-open');
				$popups.filter('.temp').remove();
				$body.trigger('popup.after_close', $popups);

				if (cb) {
					setTimeout(function () {
						window.location.hash = '';
						callback.apply();
					}, 10);
				}
			}, defaults.speed);

			if (!cb && is_native) {
				$body.removeClass('popup-open');

				if (defaults.hashChange) {
					scroll = $win.scrollTop();
					window.location.hash = '';
					$win.scrollTop(scroll);
				}
			}

			$body.trigger('popup.close', $popups);

			return this;
		},

		initWrapClose: function initWrapClose() {
			popup = this;

			$(defaults.wrapper).on('click.wrapClose', function (e) {
				if (!$(e.target).closest(defaults.popupClass).length && !$(e.target).hasClass(defaults.triggerClass.substr(1)) && !$(e.target).closest(defaults.triggerClass).length) {
					popup.close();
				}
			});
		},

		hooks: function hooks() {
			popup = this;

			$body.on('click', defaults.closeClass, function (e) {
				e.preventDefault ? e.preventDefault() : e.returnValue = false;
				popup.close();
			});

			if (defaults.keyHooks) {
				$body.on('keypress keydown', function (e) {
					if (e.keyCode == 27) {
						popup.close();
					}
				});
			};

			if (defaults.overlay.enable && defaults.overlayClickClose) {
				$(defaults.overlay.element).on('click', function () {
					popup.close();
				});
			}

			$win.on('resize.popup', function () {
				clearTimeout(resizeTimeout);

				resizeTimeout = setTimeout(function () {

					$body.find('.popup.is-open').each(function () {
						if (!defaults.cssPosition) {
							popup._changePosition($(this));
						}

						popup._checkScroll($(this));
					});
				}, 100);
			});

			return this;
		},

		show: function show(selector, overlay, bodyclass) {
			var $popup = null;
			popup = this;

			if (typeof selector !== 'undefined' && selector !== '') {
				var data = data || {},
				    prop = {},
				    $popup;

				if (bodyclass) {
					$body.addClass('popup-open');
				}

				if ((typeof selector === 'undefined' ? 'undefined' : _typeof(selector)) == 'object') {
					$popup = $(selector);
				} else {
					if ($('#' + selector).hasClass('popup')) {
						$popup = $('#' + selector);
					} else if ($('#' + selector).length && $('#' + selector).get(0).tagName == 'SCRIPT' || $('#' + selector).get(0).tagName == 'TEMPLATE') {
						$popup = $(template(selector, data));
						$popup.addClass('temp');

						$body.append($popup);
					}
				}

				if ($popup) {
					$popup.addClass('visible is-open');

					if (!defaults.cssPosition) {
						$popup.css(popup._getPosition($popup));
					}

					if (overlay) {
						$(defaults.overlay.element).addClass('visible');

						setTimeout(function () {
							$(defaults.overlay.element).addClass('animate');
						}, 10);
					} else {
						this.initWrapClose();
					}

					popup._checkScroll($popup);

					setTimeout(function () {
						$popup.addClass('animate');
						$body.trigger('popup.after_open', $popup);

						setTimeout(function () {
							$popup.scrollTop(0);
						}, 10);

						if (nested.length) {
							$body.trigger('popup.init_nested', { popup: $popup, nested: nested });
						}
					}, 10);

					$body.trigger('popup.open', $popup);
				}
			}

			return this;
		},

		clicks: function clicks(trigger) {
			popup = this;

			$body.on('click', trigger, function (e) {
				var overlay = defaults.overlay.enable,
				    bodyclass = defaults.bodyclass,
				    element;

				if ($('.popup.is-open').length) {
					$body.trigger('popup.before_open', $('.popup.is-open'));
				}

				if (!defaults.hashChange) {
					e.preventDefault ? e.preventDefault() : e.returnValue = false;
				}

				if (typeof $(this).data('bodyclass') !== 'undefined') {
					bodyclass = $(this).data('bodyclass');
				}

				if (typeof $(this).data('overlay') !== 'undefined') {
					overlay = $(this).data('overlay');
				}

				if ($(this).data('popup')) {
					element = $(this).data('popup');
				} else if ($(this).attr('href')) {
					element = $(this).attr('href');
				}

				popup.open(element, overlay, bodyclass);

				if (typeof $(this).data('hashchange') !== 'undefined') {
					return $(this).data('hashchange');
				}
			});

			return this;
		},

		open: function open(selector, overlay, bodyclass) {
			popup = this;

			if (typeof selector !== 'undefined' && selector.length > 1 && selector.substr(0, 1) !== '#') {
				selector = '#' + selector;
			}

			temp = null, selector_cache = null, nested = [];

			if (typeof selector == 'undefined' && defaults.hashChange && window.location.hash.length > 1) {
				temp = window.location.hash;
			} else if (typeof selector !== 'undefined') {
				if (selector.substr(0, 1) == '#') {
					temp = selector;
				}
			}

			if (temp !== null && temp.indexOf('/') >= 0) {
				nested = temp.split('/');
			}

			is_nested = false;
			selector = temp;

			if (nested.length) {
				is_nested = true;
				selector = nested[0];
				nested = nested.slice(1);
			}

			if (typeof selector !== 'undefined' && selector !== null) {
				if (selector.substr(0, 1) == '#') {
					selector = selector.substr(1);
				}

				if ($('.popup.is-open').length) {
					selector_cache = $('.popup.is-open').attr('id');

					if (is_nested && !nested.length || selector !== selector_cache) {
						popup.close($('.popup.is-open'));
					} else {
						$.app.tabs.hashUrl.check(popup, nested);
					}
				}

				if ($('#tpl-' + selector).length) {
					selector = 'tpl-' + selector;
				}

				if ($('#tmpl-' + selector).length) {
					selector = 'tmpl-' + selector;
				}

				if (typeof overlay == 'undefined') {
					overlay = defaults.overlay.enable;
				}

				if (typeof bodyclass == 'undefined') {
					bodyclass = defaults.bodyclass;
				}

				if ($('#' + selector).hasClass('popup') || $('#' + selector).length && $('#' + selector).get(0).tagName == 'SCRIPT' || $('#' + selector).length && $('#' + selector).get(0).tagName == 'TEMPLATE') {
					popup.show(selector, overlay, bodyclass);
				}
			}

			return this;
		},

		notification: function notification(title, text) {
			popup = this;

			clearTimeout(notify_timeout);

			if (!$body.find('#alert-popup-notification').length) {
				noty = $(template(defaults.template.notification, { 'title': title, 'text': text }));

				noty.addClass('temp');
				noty.attr('id', 'alert-popup-notification');

				$body.append(noty);

				popup.show(noty, false, false);
			}

			notify_timeout = setTimeout(function () {

				noty.removeClass('animate');

				setTimeout(function () {

					noty.remove();
				}, 300);
			}, 5000);
		},

		message: function message(title, text, btn) {
			popup = this;

			var temp = $(template(defaults.template.message, { 'title': title, 'text': text, 'btn': btn || null }));

			temp.addClass('temp');

			$body.append(temp);

			temp.css(this._getPosition(temp));

			popup.close($body.find('.popup.is-open'), function () {
				popup.show(temp);
			});
		},

		error: function error(title, text) {
			popup = this;

			var temp = $(template(defaults.template.error, { 'title': title, 'text': text }));

			temp.addClass('temp');

			$body.append(temp);

			temp.css(this._getPosition(temp));

			popup.close($body.find('.popup.is-open'), function () {
				popup.show(temp);
			});
		},

		init: function init(trigger, options) {
			defaults.triggerClass = trigger;

			if (typeof options !== 'undefined') {
				for (var x in options) {
					if (typeof defaults[x] !== 'undefined') {
						defaults[x] = options[x];
					}
				}
			}

			this.open();
			this.clicks(trigger);
			this.hooks();
		}
	};
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wb3B1cC5qcyJdLCJuYW1lcyI6WyIkIiwiZGVmYXVsdHMiLCJ3cmFwcGVyIiwicG9wdXBDbGFzcyIsInRyaWdnZXJDbGFzcyIsImRpYWxvZ0NsYXNzIiwiY2xvc2VDbGFzcyIsInNwZWVkIiwib3ZlcmxheSIsImVuYWJsZSIsImVsZW1lbnQiLCJvdmVybGF5Q2xpY2tDbG9zZSIsImNzc1Bvc2l0aW9uIiwiYm9keWNsYXNzIiwiaGFzaENoZWNrIiwiaGFzaENoYW5nZSIsImtleUhvb2tzIiwidGVtcGxhdGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJub3RpZmljYXRpb24iLCJwb3B1cCIsIm5vdHkiLCJ0ZW1wIiwibmVzdGVkIiwiJGRpYWxvZyIsIiR0cmlnZ2VyIiwiJGJvZHkiLCIkd2luIiwid2luZG93IiwiJGRvYyIsImRvY3VtZW50Iiwic2VsZWN0b3JfY2FjaGUiLCJub3RpZnlfdGltZW91dCIsImlzX25lc3RlZCIsInJlc2l6ZVRpbWVvdXQiLCJjbG9zZSIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsImZpbHRlciIsInJlbW92ZSIsIl9nZXRQb3B1cCIsInNlbGVjdG9yIiwiJHBvcHVwIiwibGVuZ3RoIiwiX2dldFBvc2l0aW9uIiwicHJvcCIsInd3Iiwid2lkdGgiLCJ3aCIsImhlaWdodCIsImR3IiwiZGgiLCJwdyIsIm91dGVyV2lkdGgiLCJwaCIsIm91dGVySGVpZ2h0Iiwic3QiLCJzY3JvbGxUb3AiLCJsZWZ0IiwidG9wIiwiY3NzIiwicG9zVHlwZSIsImF0dHIiLCIkcmVhbFdyYXBwZXIiLCJNYXRoIiwicm91bmQiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsImNlaWwiLCJyaWdodCIsIl9jaGFuZ2VQb3NpdGlvbiIsIl9jaGVja1Njcm9sbCIsImZpbmQiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwic2Nyb2xsIiwiY2IiLCJpc19uYXRpdmUiLCIkcG9wdXBzIiwidHJpZ2dlciIsIm9mZiIsImxvY2F0aW9uIiwiaGFzaCIsImFwcGx5IiwiaW5pdFdyYXBDbG9zZSIsIm9uIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJoYXNDbGFzcyIsInN1YnN0ciIsImhvb2tzIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJjbGVhclRpbWVvdXQiLCJlYWNoIiwic2hvdyIsImRhdGEiLCJnZXQiLCJ0YWdOYW1lIiwiYXBwZW5kIiwiY2xpY2tzIiwib3BlbiIsImluZGV4T2YiLCJzcGxpdCIsInNsaWNlIiwiYXBwIiwidGFicyIsImhhc2hVcmwiLCJjaGVjayIsInRpdGxlIiwidGV4dCIsImJ0biIsImluaXQiLCJvcHRpb25zIiwieCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBOzs7Ozs7QUFNQSxDQUFDLENBQUMsVUFBU0EsQ0FBVCxFQUFZO0FBQ2I7O0FBRUEsS0FBSUMsV0FBVztBQUNkQyxXQUFTLE1BREs7QUFFZEMsY0FBWSxRQUZFO0FBR2RDLGdCQUFjLGVBSEE7QUFJZEMsZUFBYSxpQkFKQztBQUtkQyxjQUFZLGdCQUxFO0FBTWRDLFNBQU8sR0FOTztBQU9kQyxXQUFTO0FBQ1JDLFdBQVEsQ0FBQyxDQUREO0FBRVJDLFlBQVM7QUFGRCxHQVBLO0FBV2RDLHFCQUFtQixDQUFDLENBWE47QUFZZEMsZUFBYSxDQUFDLENBWkE7QUFhZEMsYUFBVyxDQUFDLENBYkU7QUFjZEMsYUFBVyxDQUFDLENBZEU7QUFlZEMsY0FBWSxDQUFDLENBZkM7QUFnQmRDLFlBQVUsQ0FBQyxDQWhCRztBQWlCZEMsWUFBVTtBQUNUQyxVQUFPLGtCQURFO0FBRVRDLFlBQVMsb0JBRkE7QUFHVEMsaUJBQWM7QUFITDtBQWpCSSxFQUFmO0FBQUEsS0F1QkFDLFFBQVEsSUF2QlI7QUFBQSxLQXdCQUMsT0FBTyxJQXhCUDtBQUFBLEtBeUJBQyxPQUFPLElBekJQO0FBQUEsS0EwQkFDLFNBQVMsRUExQlQ7QUFBQSxLQTJCQUMsVUFBVSxFQTNCVjtBQUFBLEtBNEJBQyxXQUFXLEVBNUJYO0FBQUEsS0E2QkFDLFFBQVEzQixFQUFFLE1BQUYsQ0E3QlI7QUFBQSxLQThCQTRCLE9BQU81QixFQUFFNkIsTUFBRixDQTlCUDtBQUFBLEtBK0JBQyxPQUFPOUIsRUFBRStCLFFBQUYsQ0EvQlA7QUFBQSxLQWdDQUMsY0FoQ0E7QUFBQSxLQWlDQUMsY0FqQ0E7QUFBQSxLQWtDQUMsU0FsQ0E7QUFBQSxLQW1DQUMsYUFuQ0E7O0FBcUNBbkMsR0FBRVEsT0FBRixHQUFZO0FBQ1g0QixTQUFPLGlCQUFXO0FBQ2pCcEMsS0FBRUMsU0FBU08sT0FBVCxDQUFpQkUsT0FBbkIsRUFBNEIyQixXQUE1QixDQUF3QyxTQUF4Qzs7QUFFQUMsY0FBVyxZQUFVO0FBQ1h0QyxNQUFFQyxTQUFTTyxPQUFULENBQWlCRSxPQUFuQixFQUE0QjJCLFdBQTVCLENBQXdDLGlCQUF4QztBQUNBckMsTUFBRUMsU0FBU08sT0FBVCxDQUFpQkUsT0FBbkIsRUFBNEI2QixNQUE1QixDQUFtQyxPQUFuQyxFQUE0Q0MsTUFBNUM7QUFDQSxJQUhWLEVBR1l2QyxTQUFTTSxLQUhyQjtBQUlBO0FBUlUsRUFBWjs7QUFXQVAsR0FBRXFCLEtBQUYsR0FBVTtBQUNIb0IsYUFBVyxtQkFBU0MsUUFBVCxFQUNYO0FBQ0ksT0FBSUMsTUFBSjs7QUFFQSxPQUFHLFFBQU9ELFFBQVAseUNBQU9BLFFBQVAsTUFBb0IsUUFBdkIsRUFBaUM7QUFDN0IsV0FBT0EsUUFBUDtBQUNIOztBQUVEQyxZQUFTM0MsRUFBRSxNQUFJMEMsUUFBTixDQUFUOztBQUVBLFVBQU9DLE9BQU9DLE1BQVAsR0FBZ0JELE1BQWhCLEdBQXlCLElBQWhDO0FBQ0gsR0FaRTs7QUFjSEUsZ0JBQWMsc0JBQVNGLE1BQVQsRUFDZDtBQUNDdEIsV0FBUSxJQUFSOztBQUVHLE9BQUksQ0FBQ3BCLFNBQVNXLFdBQWQsRUFDQTtBQUNJLFdBQU8sRUFBUDtBQUNIOztBQUVWLE9BQUlrQyxPQUFPLEVBQVg7QUFBQSxPQUNDQyxLQUFLbkIsS0FBS29CLEtBQUwsRUFETjtBQUFBLE9BRWFDLEtBQUtyQixLQUFLc0IsTUFBTCxFQUZsQjtBQUFBLE9BSWFDLEtBQUtyQixLQUFLa0IsS0FBTCxFQUpsQjtBQUFBLE9BS2FJLEtBQUt0QixLQUFLb0IsTUFBTCxFQUxsQjtBQUFBLE9BT2FHLEtBQUtWLE9BQU9XLFVBQVAsRUFQbEI7QUFBQSxPQVFhQyxLQUFLWixPQUFPYSxXQUFQLEVBUmxCO0FBQUEsT0FVYUMsS0FBSzdCLEtBQUs4QixTQUFMLEVBVmxCO0FBQUEsT0FZYUMsT0FBTyxDQVpwQjtBQUFBLE9BYWFDLE1BQU0sQ0FibkI7QUFBQSxPQWNhQyxNQUFNLEVBZG5CO0FBQUEsT0FnQmFDLFVBQVVuQixPQUFPb0IsSUFBUCxDQUFZLGVBQVosQ0FoQnZCO0FBQUEsT0FrQmFDLGVBQWUsSUFsQjVCOztBQW9CUyxPQUFHYixNQUFNRSxFQUFULEVBQWE7QUFDVE0sV0FBT00sS0FBS0MsS0FBTCxDQUFXLENBQUNmLEtBQUtFLEVBQU4sSUFBVSxDQUFyQixDQUFQO0FBQ0g7O0FBRUQsT0FBR0osTUFBTU0sRUFBVCxFQUFhO0FBQ1RNLFFBQUlNLFFBQUosR0FBZSxPQUFmO0FBQ0FQLFVBQU0sS0FBTjtBQUNBQyxRQUFJTyxTQUFKLEdBQWdCLE1BQU1ILEtBQUtJLElBQUwsQ0FBV2QsS0FBSyxDQUFoQixDQUFOLEdBQTRCLElBQTVDO0FBQ0gsSUFKRCxNQUtLO0FBQ0pNLFFBQUlNLFFBQUosR0FBZSxVQUFmO0FBQ0dQLFVBQU1ILEtBQUdRLEtBQUtDLEtBQUwsQ0FBVyxDQUFDakIsS0FBS00sRUFBTixJQUFVLENBQXJCLENBQVQ7QUFDSDs7QUFFRE0sT0FBSUQsR0FBSixHQUFVQSxHQUFWOztBQUVBLE9BQUdFLFdBQVcsT0FBZCxFQUF1QjtBQUNuQkQsUUFBSVMsS0FBSixHQUFZLENBQVo7QUFDSCxJQUZELE1BR0s7QUFDRFQsUUFBSUYsSUFBSixHQUFXQSxJQUFYO0FBQ0g7O0FBRUQsVUFBT0UsR0FBUDtBQUNULEdBbkVROztBQXFFSFUsbUJBQWlCLHlCQUFTN0IsUUFBVCxFQUNqQjtBQUNMLE9BQUlDLFNBQVMsS0FBS0YsU0FBTCxDQUFlQyxRQUFmLENBQWI7O0FBRUEsT0FBSSxDQUFDekMsU0FBU1csV0FBZCxFQUNBO0FBQ0MrQixXQUFPa0IsR0FBUCxDQUFXLEtBQUtoQixZQUFMLENBQWtCRixNQUFsQixDQUFYO0FBQ0E7QUFDSyxHQTdFRTs7QUErRUg2QixnQkFBYyxzQkFBU25ELEtBQVQsRUFDZDtBQUNDSSxhQUFVekIsRUFBRXFCLEtBQUYsRUFBU29ELElBQVQsQ0FBY3hFLFNBQVNJLFdBQXZCLENBQVY7O0FBRUEsT0FBSW9CLFFBQVErQixXQUFSLEtBQXdCNUIsS0FBS3NCLE1BQUwsRUFBNUIsRUFDQTtBQUNDekIsWUFBUWlELFFBQVIsQ0FBaUIsY0FBakI7QUFDSCxJQUhFLE1BSUU7QUFDSmpELFlBQVFZLFdBQVIsQ0FBb0IsY0FBcEI7QUFDQTtBQUNFLEdBMUZFOztBQTRGVEQsU0FBTyxlQUFTMUIsT0FBVCxFQUFrQmlFLFFBQWxCLEVBQ1A7QUFDQ3RELFdBQVEsSUFBUjs7QUFFQSxPQUFJdUQsU0FBUyxDQUFiO0FBQUEsT0FBZ0JDLEtBQUssS0FBckI7QUFBQSxPQUE0QkMsWUFBWSxJQUF4QztBQUFBLE9BQThDQyxPQUE5Qzs7QUFFQUEsYUFBVXBELE1BQU04QyxJQUFOLENBQVcsZ0JBQVgsQ0FBVjs7QUFFQSxPQUFJLE9BQU8vRCxPQUFQLEtBQW1CLFdBQXZCLEVBQ0E7QUFDQ3FFLGNBQVUvRSxFQUFFVSxPQUFGLENBQVY7QUFDQW9FLGdCQUFZLEtBQVo7QUFDQTs7QUFFUSxPQUFJLE9BQU9ILFFBQVAsS0FBb0IsV0FBeEIsRUFBcUM7QUFDcENFLFNBQUssSUFBTDtBQUNBOztBQUVWbEQsU0FBTXFELE9BQU4sQ0FBYyxvQkFBZCxFQUFvQ0QsT0FBcEM7O0FBRVMsT0FBSTlFLFNBQVNPLE9BQVQsQ0FBaUJDLE1BQWpCLElBQTJCcUUsU0FBL0IsRUFBMEM7QUFDbEQ5RSxNQUFFUSxPQUFGLENBQVU0QixLQUFWO0FBQ007O0FBRUVwQyxLQUFFQyxTQUFTQyxPQUFYLEVBQW9CK0UsR0FBcEIsQ0FBd0IsaUJBQXhCOztBQUVBRixXQUFRMUMsV0FBUixDQUFvQixTQUFwQjs7QUFFQUMsY0FBVyxZQUFVO0FBQ3BCeUMsWUFBUTFDLFdBQVIsQ0FBb0IsaUJBQXBCO0FBQ0EwQyxZQUFReEMsTUFBUixDQUFlLE9BQWYsRUFBd0JDLE1BQXhCO0FBQ0FiLFVBQU1xRCxPQUFOLENBQWMsbUJBQWQsRUFBbUNELE9BQW5DOztBQUVBLFFBQUlGLEVBQUosRUFBUTtBQUNEdkMsZ0JBQVcsWUFBVTtBQUNqQlQsYUFBT3FELFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLEVBQXZCO0FBQ1RSLGVBQVNTLEtBQVQ7QUFDQSxNQUhLLEVBR0gsRUFIRztBQUlOO0FBQ0QsSUFYRCxFQVdHbkYsU0FBU00sS0FYWjs7QUFhQSxPQUFJLENBQUNzRSxFQUFELElBQU9DLFNBQVgsRUFDQTtBQUNJbkQsVUFBTVUsV0FBTixDQUFrQixZQUFsQjs7QUFFQSxRQUFHcEMsU0FBU2MsVUFBWixFQUF3QjtBQUNwQjZELGNBQVNoRCxLQUFLOEIsU0FBTCxFQUFUO0FBQ0E3QixZQUFPcUQsUUFBUCxDQUFnQkMsSUFBaEIsR0FBdUIsRUFBdkI7QUFDQXZELFVBQUs4QixTQUFMLENBQWVrQixNQUFmO0FBQ0g7QUFDSjs7QUFFRGpELFNBQU1xRCxPQUFOLENBQWMsYUFBZCxFQUE2QkQsT0FBN0I7O0FBRUEsVUFBTyxJQUFQO0FBQ0gsR0FuSkU7O0FBcUpITSxpQkFBZSx5QkFDbEI7QUFDQ2hFLFdBQVEsSUFBUjs7QUFFQXJCLEtBQUVDLFNBQVNDLE9BQVgsRUFBb0JvRixFQUFwQixDQUF1QixpQkFBdkIsRUFBMEMsVUFBU0MsQ0FBVCxFQUFZO0FBQ3JELFFBQUksQ0FBQ3ZGLEVBQUV1RixFQUFFQyxNQUFKLEVBQVlDLE9BQVosQ0FBb0J4RixTQUFTRSxVQUE3QixFQUF5Q3lDLE1BQTFDLElBQW9ELENBQUM1QyxFQUFFdUYsRUFBRUMsTUFBSixFQUFZRSxRQUFaLENBQXFCekYsU0FBU0csWUFBVCxDQUFzQnVGLE1BQXRCLENBQTZCLENBQTdCLENBQXJCLENBQXJELElBQThHLENBQUMzRixFQUFFdUYsRUFBRUMsTUFBSixFQUFZQyxPQUFaLENBQW9CeEYsU0FBU0csWUFBN0IsRUFBMkN3QyxNQUE5SixFQUNBO0FBQ0Z2QixXQUFNZSxLQUFOO0FBQ0c7QUFDRSxJQUxKO0FBT0csR0FoS0U7O0FBa0tId0QsU0FBTyxpQkFDUDtBQUNDdkUsV0FBUSxJQUFSOztBQUVOTSxTQUFNMkQsRUFBTixDQUFTLE9BQVQsRUFBa0JyRixTQUFTSyxVQUEzQixFQUF1QyxVQUFTaUYsQ0FBVCxFQUFZO0FBQ3pDQSxNQUFFTSxjQUFGLEdBQW1CTixFQUFFTSxjQUFGLEVBQW5CLEdBQXdDTixFQUFFTyxXQUFGLEdBQWdCLEtBQXhEO0FBQ0F6RSxVQUFNZSxLQUFOO0FBQ0gsSUFIUDs7QUFLQSxPQUFJbkMsU0FBU2UsUUFBYixFQUNBO0FBQ0NXLFVBQU0yRCxFQUFOLENBQVMsa0JBQVQsRUFBNkIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3hDLFNBQUdBLEVBQUVRLE9BQUYsSUFBYSxFQUFoQixFQUFvQjtBQUNQMUUsWUFBTWUsS0FBTjtBQUNIO0FBQ0osS0FKUDtBQUtBOztBQUVLLE9BQUluQyxTQUFTTyxPQUFULENBQWlCQyxNQUFqQixJQUEyQlIsU0FBU1UsaUJBQXhDLEVBQ0E7QUFDTFgsTUFBRUMsU0FBU08sT0FBVCxDQUFpQkUsT0FBbkIsRUFBNEI0RSxFQUE1QixDQUErQixPQUEvQixFQUF3QyxZQUFXO0FBQ3pDakUsV0FBTWUsS0FBTjtBQUNBLEtBRlY7QUFHTTs7QUFFRFIsUUFBSzBELEVBQUwsQ0FBUSxjQUFSLEVBQXdCLFlBQVc7QUFDL0JVLGlCQUFhN0QsYUFBYjs7QUFFR0Esb0JBQWdCRyxXQUFXLFlBQVc7O0FBRWxDWCxXQUFNOEMsSUFBTixDQUFXLGdCQUFYLEVBQTZCd0IsSUFBN0IsQ0FBa0MsWUFBVztBQUM1QyxVQUFJLENBQUNoRyxTQUFTVyxXQUFkLEVBQ1Q7QUFDVVMsYUFBTWtELGVBQU4sQ0FBc0J2RSxFQUFFLElBQUYsQ0FBdEI7QUFDQTs7QUFFRHFCLFlBQU1tRCxZQUFOLENBQW1CeEUsRUFBRSxJQUFGLENBQW5CO0FBQ0gsTUFQRTtBQVNILEtBWGUsRUFXYixHQVhhLENBQWhCO0FBWU4sSUFmRDs7QUFpQkEsVUFBTyxJQUFQO0FBQ04sR0E3TVE7O0FBK01Ia0csUUFBTSxjQUFTeEQsUUFBVCxFQUFtQmxDLE9BQW5CLEVBQTRCSyxTQUE1QixFQUNOO0FBQ0ksT0FBSThCLFNBQVMsSUFBYjtBQUNIdEIsV0FBUSxJQUFSOztBQUVBLE9BQUksT0FBT3FCLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLGFBQWEsRUFBcEQsRUFDTjtBQUNDLFFBQUl5RCxPQUFPQSxRQUFRLEVBQW5CO0FBQUEsUUFBdUJyRCxPQUFPLEVBQTlCO0FBQUEsUUFBa0NILE1BQWxDOztBQUVBLFFBQUk5QixTQUFKLEVBQ0E7QUFDQ2MsV0FBTStDLFFBQU4sQ0FBZSxZQUFmO0FBQ0E7O0FBRUQsUUFBSSxRQUFPaEMsUUFBUCx5Q0FBT0EsUUFBUCxNQUFtQixRQUF2QixFQUNNO0FBQ0NDLGNBQVMzQyxFQUFFMEMsUUFBRixDQUFUO0FBQ0EsS0FIUCxNQUtNO0FBQ0MsU0FBSTFDLEVBQUUsTUFBSTBDLFFBQU4sRUFBZ0JnRCxRQUFoQixDQUF5QixPQUF6QixDQUFKLEVBQ047QUFDQy9DLGVBQVMzQyxFQUFFLE1BQUkwQyxRQUFOLENBQVQ7QUFDQSxNQUhLLE1BSUQsSUFBSTFDLEVBQUUsTUFBSTBDLFFBQU4sRUFBZ0JFLE1BQWhCLElBQTBCNUMsRUFBRSxNQUFJMEMsUUFBTixFQUFnQjBELEdBQWhCLENBQW9CLENBQXBCLEVBQXVCQyxPQUF2QixJQUFrQyxRQUE1RCxJQUF3RXJHLEVBQUUsTUFBSTBDLFFBQU4sRUFBZ0IwRCxHQUFoQixDQUFvQixDQUFwQixFQUF1QkMsT0FBdkIsSUFBa0MsVUFBOUcsRUFDTDtBQUNDMUQsZUFBUzNDLEVBQUVpQixTQUFTeUIsUUFBVCxFQUFtQnlELElBQW5CLENBQUYsQ0FBVDtBQUNBeEQsYUFBTytCLFFBQVAsQ0FBZ0IsTUFBaEI7O0FBRUEvQyxZQUFNMkUsTUFBTixDQUFhM0QsTUFBYjtBQUNBO0FBQ0s7O0FBRUssUUFBSUEsTUFBSixFQUNBO0FBQ0lBLFlBQU8rQixRQUFQLENBQWdCLGlCQUFoQjs7QUFFQSxTQUFJLENBQUN6RSxTQUFTVyxXQUFkLEVBQ0E7QUFDSStCLGFBQU9rQixHQUFQLENBQVd4QyxNQUFNd0IsWUFBTixDQUFtQkYsTUFBbkIsQ0FBWDtBQUNIOztBQUVELFNBQUluQyxPQUFKLEVBQWE7QUFDVFIsUUFBRUMsU0FBU08sT0FBVCxDQUFpQkUsT0FBbkIsRUFBNEJnRSxRQUE1QixDQUFxQyxTQUFyQzs7QUFFQXBDLGlCQUFXLFlBQVU7QUFDakJ0QyxTQUFFQyxTQUFTTyxPQUFULENBQWlCRSxPQUFuQixFQUE0QmdFLFFBQTVCLENBQXFDLFNBQXJDO0FBQ0gsT0FGRCxFQUVHLEVBRkg7QUFHSCxNQU5ELE1BT0s7QUFDRCxXQUFLVyxhQUFMO0FBQ0g7O0FBRURoRSxXQUFNbUQsWUFBTixDQUFtQjdCLE1BQW5COztBQUVBTCxnQkFBVyxZQUFVO0FBQ2pCSyxhQUFPK0IsUUFBUCxDQUFnQixTQUFoQjtBQUNBL0MsWUFBTXFELE9BQU4sQ0FBYyxrQkFBZCxFQUFrQ3JDLE1BQWxDOztBQUVBTCxpQkFBVyxZQUFVO0FBQ2pCSyxjQUFPZSxTQUFQLENBQWlCLENBQWpCO0FBQ0gsT0FGRCxFQUVHLEVBRkg7O0FBSUEsVUFBSWxDLE9BQU9vQixNQUFYLEVBQ0E7QUFDSWpCLGFBQU1xRCxPQUFOLENBQWMsbUJBQWQsRUFBbUMsRUFBRTNELE9BQU9zQixNQUFULEVBQWlCbkIsUUFBUUEsTUFBekIsRUFBbkM7QUFDSDtBQUNKLE1BWkQsRUFZRyxFQVpIOztBQWNBRyxXQUFNcUQsT0FBTixDQUFjLFlBQWQsRUFBNEJyQyxNQUE1QjtBQUNIO0FBQ2I7O0FBRUQsVUFBTyxJQUFQO0FBQ00sR0F6UkU7O0FBMlJINEQsVUFBUSxnQkFBU3ZCLE9BQVQsRUFDUjtBQUNDM0QsV0FBUSxJQUFSOztBQUVBTSxTQUFNMkQsRUFBTixDQUFTLE9BQVQsRUFBa0JOLE9BQWxCLEVBQTJCLFVBQVNPLENBQVQsRUFBWTtBQUN0QyxRQUFJL0UsVUFBVVAsU0FBU08sT0FBVCxDQUFpQkMsTUFBL0I7QUFBQSxRQUF1Q0ksWUFBWVosU0FBU1ksU0FBNUQ7QUFBQSxRQUF1RUgsT0FBdkU7O0FBRUEsUUFBSVYsRUFBRSxnQkFBRixFQUFvQjRDLE1BQXhCLEVBQ0E7QUFDQ2pCLFdBQU1xRCxPQUFOLENBQWMsbUJBQWQsRUFBbUNoRixFQUFFLGdCQUFGLENBQW5DO0FBQ0E7O0FBRVAsUUFBSSxDQUFDQyxTQUFTYyxVQUFkLEVBQ0E7QUFDQ3dFLE9BQUVNLGNBQUYsR0FBbUJOLEVBQUVNLGNBQUYsRUFBbkIsR0FBd0NOLEVBQUVPLFdBQUYsR0FBZ0IsS0FBeEQ7QUFDQTs7QUFFRCxRQUFJLE9BQU85RixFQUFFLElBQUYsRUFBUW1HLElBQVIsQ0FBYSxXQUFiLENBQVAsS0FBc0MsV0FBMUMsRUFDQTtBQUNDdEYsaUJBQVliLEVBQUUsSUFBRixFQUFRbUcsSUFBUixDQUFhLFdBQWIsQ0FBWjtBQUNBOztBQUVELFFBQUksT0FBT25HLEVBQUUsSUFBRixFQUFRbUcsSUFBUixDQUFhLFNBQWIsQ0FBUCxLQUFvQyxXQUF4QyxFQUNBO0FBQ0MzRixlQUFVUixFQUFFLElBQUYsRUFBUW1HLElBQVIsQ0FBYSxTQUFiLENBQVY7QUFDQTs7QUFFRCxRQUFJbkcsRUFBRSxJQUFGLEVBQVFtRyxJQUFSLENBQWEsT0FBYixDQUFKLEVBQ1k7QUFDSXpGLGVBQVVWLEVBQUUsSUFBRixFQUFRbUcsSUFBUixDQUFhLE9BQWIsQ0FBVjtBQUNILEtBSGIsTUFJSyxJQUFJbkcsRUFBRSxJQUFGLEVBQVErRCxJQUFSLENBQWEsTUFBYixDQUFKLEVBQ087QUFDSXJELGVBQVVWLEVBQUUsSUFBRixFQUFRK0QsSUFBUixDQUFhLE1BQWIsQ0FBVjtBQUNIOztBQUViMUMsVUFBTW1GLElBQU4sQ0FBVzlGLE9BQVgsRUFBb0JGLE9BQXBCLEVBQTZCSyxTQUE3Qjs7QUFFQSxRQUFJLE9BQU9iLEVBQUUsSUFBRixFQUFRbUcsSUFBUixDQUFhLFlBQWIsQ0FBUCxLQUF1QyxXQUEzQyxFQUNBO0FBQ0MsWUFBT25HLEVBQUUsSUFBRixFQUFRbUcsSUFBUixDQUFhLFlBQWIsQ0FBUDtBQUNBO0FBQ0QsSUF0Q0s7O0FBd0NOLFVBQU8sSUFBUDtBQUNBLEdBeFVROztBQTBVVEssUUFBTSxjQUFTOUQsUUFBVCxFQUFtQmxDLE9BQW5CLEVBQTRCSyxTQUE1QixFQUNOO0FBQ0NRLFdBQVEsSUFBUjs7QUFFQSxPQUFJLE9BQU9xQixRQUFQLEtBQXFCLFdBQXJCLElBQW9DQSxTQUFTRSxNQUFULEdBQWtCLENBQXRELElBQTJERixTQUFTaUQsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixNQUEwQixHQUF6RixFQUNBO0FBQ0NqRCxlQUFXLE1BQU1BLFFBQWpCO0FBQ0E7O0FBRURuQixVQUFPLElBQVAsRUFBYVMsaUJBQWlCLElBQTlCLEVBQW9DUixTQUFTLEVBQTdDOztBQUVBLE9BQUksT0FBT2tCLFFBQVAsSUFBbUIsV0FBbkIsSUFBa0N6QyxTQUFTYyxVQUEzQyxJQUF5RGMsT0FBT3FELFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCdkMsTUFBckIsR0FBOEIsQ0FBM0YsRUFDQTtBQUNDckIsV0FBT00sT0FBT3FELFFBQVAsQ0FBZ0JDLElBQXZCO0FBQ0EsSUFIRCxNQUlLLElBQUksT0FBT3pDLFFBQVAsS0FBb0IsV0FBeEIsRUFDTDtBQUNDLFFBQUlBLFNBQVNpRCxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEtBQXlCLEdBQTdCLEVBQ0E7QUFDQ3BFLFlBQU9tQixRQUFQO0FBQ0E7QUFDRDs7QUFFRCxPQUFJbkIsU0FBUyxJQUFULElBQWlCQSxLQUFLa0YsT0FBTCxDQUFhLEdBQWIsS0FBcUIsQ0FBMUMsRUFDQTtBQUNDakYsYUFBU0QsS0FBS21GLEtBQUwsQ0FBVyxHQUFYLENBQVQ7QUFDQTs7QUFFRHhFLGVBQVksS0FBWjtBQUNBUSxjQUFXbkIsSUFBWDs7QUFFQSxPQUFJQyxPQUFPb0IsTUFBWCxFQUNBO0FBQ0NWLGdCQUFZLElBQVo7QUFDQVEsZUFBV2xCLE9BQU8sQ0FBUCxDQUFYO0FBQ0FBLGFBQVNBLE9BQU9tRixLQUFQLENBQWEsQ0FBYixDQUFUO0FBQ0E7O0FBRUQsT0FBSSxPQUFPakUsUUFBUCxLQUFvQixXQUFwQixJQUFtQ0EsYUFBYSxJQUFwRCxFQUNBO0FBQ08sUUFBSUEsU0FBU2lELE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsS0FBeUIsR0FBN0IsRUFDTjtBQUNDakQsZ0JBQVdBLFNBQVNpRCxNQUFULENBQWdCLENBQWhCLENBQVg7QUFDQTs7QUFFRCxRQUFJM0YsRUFBRSxnQkFBRixFQUFvQjRDLE1BQXhCLEVBQ0E7QUFDQ1osc0JBQWlCaEMsRUFBRSxnQkFBRixFQUFvQitELElBQXBCLENBQXlCLElBQXpCLENBQWpCOztBQUVBLFNBQUs3QixhQUFhLENBQUNWLE9BQU9vQixNQUF0QixJQUFrQ0YsYUFBYVYsY0FBbkQsRUFDQTtBQUNDWCxZQUFNZSxLQUFOLENBQVlwQyxFQUFFLGdCQUFGLENBQVo7QUFDQSxNQUhELE1BS0E7QUFDQ0EsUUFBRTRHLEdBQUYsQ0FBTUMsSUFBTixDQUFXQyxPQUFYLENBQW1CQyxLQUFuQixDQUF5QjFGLEtBQXpCLEVBQWdDRyxNQUFoQztBQUNBO0FBQ0Q7O0FBRUQsUUFBSXhCLEVBQUUsVUFBVTBDLFFBQVosRUFBc0JFLE1BQTFCLEVBQ0E7QUFDQ0YsZ0JBQVcsU0FBT0EsUUFBbEI7QUFDQTs7QUFFVyxRQUFJMUMsRUFBRSxXQUFXMEMsUUFBYixFQUF1QkUsTUFBM0IsRUFDQTtBQUNJRixnQkFBVyxVQUFRQSxRQUFuQjtBQUNIOztBQUViLFFBQUksT0FBT2xDLE9BQVAsSUFBa0IsV0FBdEIsRUFDQTtBQUNDQSxlQUFVUCxTQUFTTyxPQUFULENBQWlCQyxNQUEzQjtBQUNBOztBQUVELFFBQUksT0FBT0ksU0FBUCxJQUFvQixXQUF4QixFQUNBO0FBQ0NBLGlCQUFZWixTQUFTWSxTQUFyQjtBQUNBOztBQUVELFFBQUliLEVBQUUsTUFBSTBDLFFBQU4sRUFBZ0JnRCxRQUFoQixDQUF5QixPQUF6QixLQUNhMUYsRUFBRSxNQUFJMEMsUUFBTixFQUFnQkUsTUFBaEIsSUFBMEI1QyxFQUFFLE1BQUkwQyxRQUFOLEVBQWdCMEQsR0FBaEIsQ0FBb0IsQ0FBcEIsRUFBdUJDLE9BQXZCLElBQWtDLFFBRHpFLElBRWFyRyxFQUFFLE1BQUkwQyxRQUFOLEVBQWdCRSxNQUFoQixJQUEwQjVDLEVBQUUsTUFBSTBDLFFBQU4sRUFBZ0IwRCxHQUFoQixDQUFvQixDQUFwQixFQUF1QkMsT0FBdkIsSUFBa0MsVUFGN0UsRUFHQTtBQUNDaEYsV0FBTTZFLElBQU4sQ0FBV3hELFFBQVgsRUFBcUJsQyxPQUFyQixFQUE4QkssU0FBOUI7QUFDQTtBQUNEOztBQUVFLFVBQU8sSUFBUDtBQUNILEdBbGFROztBQW9hTk8sZ0JBQWMsc0JBQVM0RixLQUFULEVBQWdCQyxJQUFoQixFQUNkO0FBQ0M1RixXQUFRLElBQVI7O0FBRUEyRSxnQkFBYS9ELGNBQWI7O0FBRU0sT0FBSSxDQUFDTixNQUFNOEMsSUFBTixDQUFXLDJCQUFYLEVBQXdDN0IsTUFBN0MsRUFDQTtBQUNDdEIsV0FBT3RCLEVBQUVpQixTQUFTaEIsU0FBU2dCLFFBQVQsQ0FBa0JHLFlBQTNCLEVBQXlDLEVBQUUsU0FBUzRGLEtBQVgsRUFBa0IsUUFBUUMsSUFBMUIsRUFBekMsQ0FBRixDQUFQOztBQUVBM0YsU0FBS29ELFFBQUwsQ0FBYyxNQUFkO0FBQ0FwRCxTQUFLeUMsSUFBTCxDQUFVLElBQVYsRUFBZ0IsMEJBQWhCOztBQUVHcEMsVUFBTTJFLE1BQU4sQ0FBYWhGLElBQWI7O0FBRUFELFVBQU02RSxJQUFOLENBQVc1RSxJQUFYLEVBQWlCLEtBQWpCLEVBQXdCLEtBQXhCO0FBQ0g7O0FBRURXLG9CQUFpQkssV0FBVyxZQUFVOztBQUVsQ2hCLFNBQUtlLFdBQUwsQ0FBaUIsU0FBakI7O0FBRUFDLGVBQVcsWUFBVTs7QUFFakJoQixVQUFLa0IsTUFBTDtBQUVILEtBSkQsRUFJRyxHQUpIO0FBTUgsSUFWZ0IsRUFVZCxJQVZjLENBQWpCO0FBV04sR0FqY0s7O0FBbWNOckIsV0FBUyxpQkFBUzZGLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCQyxHQUF0QixFQUNUO0FBQ0M3RixXQUFRLElBQVI7O0FBRUcsT0FBSUUsT0FBT3ZCLEVBQUVpQixTQUFTaEIsU0FBU2dCLFFBQVQsQ0FBa0JFLE9BQTNCLEVBQW9DLEVBQUMsU0FBUzZGLEtBQVYsRUFBaUIsUUFBUUMsSUFBekIsRUFBK0IsT0FBT0MsT0FBTyxJQUE3QyxFQUFwQyxDQUFGLENBQVg7O0FBRUEzRixRQUFLbUQsUUFBTCxDQUFjLE1BQWQ7O0FBRUEvQyxTQUFNMkUsTUFBTixDQUFhL0UsSUFBYjs7QUFFQUEsUUFBS3NDLEdBQUwsQ0FBUyxLQUFLaEIsWUFBTCxDQUFrQnRCLElBQWxCLENBQVQ7O0FBRUdGLFNBQU1lLEtBQU4sQ0FBWVQsTUFBTThDLElBQU4sQ0FBVyxnQkFBWCxDQUFaLEVBQTBDLFlBQVc7QUFDakRwRCxVQUFNNkUsSUFBTixDQUFXM0UsSUFBWDtBQUNILElBRkQ7QUFHTixHQWxkSzs7QUFvZE5MLFNBQU8sZUFBUzhGLEtBQVQsRUFBZ0JDLElBQWhCLEVBQ1A7QUFDQzVGLFdBQVEsSUFBUjs7QUFFRyxPQUFJRSxPQUFPdkIsRUFBRWlCLFNBQVNoQixTQUFTZ0IsUUFBVCxDQUFrQkMsS0FBM0IsRUFBa0MsRUFBRSxTQUFTOEYsS0FBWCxFQUFrQixRQUFRQyxJQUExQixFQUFsQyxDQUFGLENBQVg7O0FBRUExRixRQUFLbUQsUUFBTCxDQUFjLE1BQWQ7O0FBRUEvQyxTQUFNMkUsTUFBTixDQUFhL0UsSUFBYjs7QUFFQUEsUUFBS3NDLEdBQUwsQ0FBUyxLQUFLaEIsWUFBTCxDQUFrQnRCLElBQWxCLENBQVQ7O0FBRUFGLFNBQU1lLEtBQU4sQ0FBWVQsTUFBTThDLElBQU4sQ0FBVyxnQkFBWCxDQUFaLEVBQTBDLFlBQVc7QUFDOUNwRCxVQUFNNkUsSUFBTixDQUFXM0UsSUFBWDtBQUNILElBRko7QUFHSCxHQW5lSzs7QUFxZUg0RixRQUFNLGNBQVNuQyxPQUFULEVBQWtCb0MsT0FBbEIsRUFDTjtBQUNDbkgsWUFBU0csWUFBVCxHQUF3QjRFLE9BQXhCOztBQUVBLE9BQUksT0FBT29DLE9BQVAsS0FBbUIsV0FBdkIsRUFDQTtBQUNDLFNBQUssSUFBSUMsQ0FBVCxJQUFjRCxPQUFkLEVBQ0E7QUFDQyxTQUFJLE9BQU9uSCxTQUFTb0gsQ0FBVCxDQUFQLEtBQXVCLFdBQTNCLEVBQ0E7QUFDQ3BILGVBQVNvSCxDQUFULElBQWNELFFBQVFDLENBQVIsQ0FBZDtBQUNBO0FBQ0Q7QUFDRDs7QUFFRCxRQUFLYixJQUFMO0FBQ04sUUFBS0QsTUFBTCxDQUFZdkIsT0FBWjtBQUNBLFFBQUtZLEtBQUw7QUFDQTtBQXZmUSxFQUFWO0FBMGZBLENBN2lCQSxFQTZpQkUwQixNQTdpQkYiLCJmaWxlIjoiX3BvcHVwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiQucG9wdXAuaW5pdCgnLnRyaWdnZXItcG9wdXAnKTtcbiQucG9wdXAub3BlbigncG9wdXAtY2hvb3NlLXBob3RvLXNvdXJjZScpO1xuJC5wb3B1cC5vcGVuKCdwb3B1cC1jaG9vc2UtcGhvdG8tc291cmNlL25lc3RlZC10YWInKTtcbiovXG5cbjsoZnVuY3Rpb24oJCkge1xuXHRcInVzZSBzdHJpY3RcIjtcblx0XG5cdHZhciBkZWZhdWx0cyA9IHtcblx0XHR3cmFwcGVyOiAnYm9keScsXG5cdFx0cG9wdXBDbGFzczogJy5wb3B1cCcsXG5cdFx0dHJpZ2dlckNsYXNzOiAnLmotb3Blbi1wb3B1cCcsXG5cdFx0ZGlhbG9nQ2xhc3M6ICcuai1wb3B1cC1kaWFsb2cnLFxuXHRcdGNsb3NlQ2xhc3M6ICcuai1wb3B1cC1jbG9zZScsXG5cdFx0c3BlZWQ6IDU1MCxcblx0XHRvdmVybGF5OiB7XG5cdFx0XHRlbmFibGU6ICEwLFxuXHRcdFx0ZWxlbWVudDogJyNvdmVybGF5J1xuXHRcdH0sXG5cdFx0b3ZlcmxheUNsaWNrQ2xvc2U6ICEwLFxuXHRcdGNzc1Bvc2l0aW9uOiAhMCxcblx0XHRib2R5Y2xhc3M6ICEwLFxuXHRcdGhhc2hDaGVjazogITAsXG5cdFx0aGFzaENoYW5nZTogITAsXG5cdFx0a2V5SG9va3M6ICEwLFxuXHRcdHRlbXBsYXRlOiB7XG5cdFx0XHRlcnJvcjogJ3RtcGwtcG9wdXAtZXJyb3InLFxuXHRcdFx0bWVzc2FnZTogJ3RtcGwtcG9wdXAtbWVzc2FnZScsXG5cdFx0XHRub3RpZmljYXRpb246ICd0bXBsLW5vdGlmaWNhdGlvbidcblx0XHR9XG5cdH0sXG5cdHBvcHVwID0gbnVsbCxcblx0bm90eSA9IG51bGwsXG5cdHRlbXAgPSBudWxsLFxuXHRuZXN0ZWQgPSBbXSxcblx0JGRpYWxvZyA9ICcnLFxuXHQkdHJpZ2dlciA9ICcnLFxuXHQkYm9keSA9ICQoJ2JvZHknKSxcblx0JHdpbiA9ICQod2luZG93KSwgXG5cdCRkb2MgPSAkKGRvY3VtZW50KSxcblx0c2VsZWN0b3JfY2FjaGUsXG5cdG5vdGlmeV90aW1lb3V0LFxuXHRpc19uZXN0ZWQsXG5cdHJlc2l6ZVRpbWVvdXQ7XG5cblx0JC5vdmVybGF5ID0ge1xuXHRcdGNsb3NlOiBmdW5jdGlvbigpIHtcblx0XHRcdCQoZGVmYXVsdHMub3ZlcmxheS5lbGVtZW50KS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBcdCQoZGVmYXVsdHMub3ZlcmxheS5lbGVtZW50KS5yZW1vdmVDbGFzcygndmlzaWJsZSBpcy1vcGVuJyk7XG4gICAgICAgICAgICBcdCQoZGVmYXVsdHMub3ZlcmxheS5lbGVtZW50KS5maWx0ZXIoJy50ZW1wJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9LCBkZWZhdWx0cy5zcGVlZCk7XG5cdFx0fVxuXHR9O1xuXHRcblx0JC5wb3B1cCA9IHtcbiAgICAgICAgX2dldFBvcHVwOiBmdW5jdGlvbihzZWxlY3RvcilcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICRwb3B1cDtcblxuICAgICAgICAgICAgaWYodHlwZW9mKHNlbGVjdG9yKSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWxlY3RvcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJHBvcHVwID0gJCgnIycrc2VsZWN0b3IpO1xuXG4gICAgICAgICAgICByZXR1cm4gJHBvcHVwLmxlbmd0aCA/ICRwb3B1cCA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfZ2V0UG9zaXRpb246IGZ1bmN0aW9uKCRwb3B1cCkgXG4gICAgICAgIHtcbiAgICAgICAgXHRwb3B1cCA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghZGVmYXVsdHMuY3NzUG9zaXRpb24pXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG5cdFx0XHR2YXIgcHJvcCA9IHt9LFxuXHRcdFx0XHR3dyA9ICR3aW4ud2lkdGgoKSxcbiAgICAgICAgICAgICAgICB3aCA9ICR3aW4uaGVpZ2h0KCksXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZHcgPSAkZG9jLndpZHRoKCksXG4gICAgICAgICAgICAgICAgZGggPSAkZG9jLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHB3ID0gJHBvcHVwLm91dGVyV2lkdGgoKSxcbiAgICAgICAgICAgICAgICBwaCA9ICRwb3B1cC5vdXRlckhlaWdodCgpLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHN0ID0gJHdpbi5zY3JvbGxUb3AoKSxcblxuICAgICAgICAgICAgICAgIGxlZnQgPSAwLFxuICAgICAgICAgICAgICAgIHRvcCA9IDAsXG4gICAgICAgICAgICAgICAgY3NzID0ge30sXG5cbiAgICAgICAgICAgICAgICBwb3NUeXBlID0gJHBvcHVwLmF0dHIoJ2RhdGEtcG9zaXRpb24nKSxcblxuICAgICAgICAgICAgICAgICRyZWFsV3JhcHBlciA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmKGR3ID49IHB3KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9IE1hdGgucm91bmQoKGR3IC0gcHcpLzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZih3aCA+PSBwaCkge1xuICAgICAgICAgICAgICAgIGNzcy5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgICAgICAgICAgdG9wID0gJzUwJSc7XG4gICAgICAgICAgICAgICAgY3NzLm1hcmdpblRvcCA9ICctJyArIE1hdGguY2VpbCggcGggLyAyICkgKyAncHgnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBcdGNzcy5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgICAgICAgICAgICAgdG9wID0gc3QrTWF0aC5yb3VuZCgod2ggLSBwaCkvMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNzcy50b3AgPSB0b3A7XG5cbiAgICAgICAgICAgIGlmKHBvc1R5cGUgPT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICAgIGNzcy5yaWdodCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjc3MubGVmdCA9IGxlZnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjc3M7XG5cdFx0fSxcbiAgICAgICAgXG4gICAgICAgIF9jaGFuZ2VQb3NpdGlvbjogZnVuY3Rpb24oc2VsZWN0b3IpXG4gICAgICAgIHtcblx0XHRcdHZhciAkcG9wdXAgPSB0aGlzLl9nZXRQb3B1cChzZWxlY3Rvcik7XG5cblx0XHRcdGlmICghZGVmYXVsdHMuY3NzUG9zaXRpb24pXG5cdFx0XHR7XG5cdFx0XHRcdCRwb3B1cC5jc3ModGhpcy5fZ2V0UG9zaXRpb24oJHBvcHVwKSk7XG5cdFx0XHR9XG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgICAgICBfY2hlY2tTY3JvbGw6IGZ1bmN0aW9uKHBvcHVwKVxuICAgICAgICB7XG4gICAgICAgIFx0JGRpYWxvZyA9ICQocG9wdXApLmZpbmQoZGVmYXVsdHMuZGlhbG9nQ2xhc3MpO1xuXG4gICAgICAgIFx0aWYgKCRkaWFsb2cub3V0ZXJIZWlnaHQoKSA+ICR3aW4uaGVpZ2h0KCkpXG4gICAgICAgIFx0e1xuICAgICAgICBcdFx0JGRpYWxvZy5hZGRDbGFzcygnaXMtc2Nyb2xsaW5nJylcbiAgICBcdFx0fVxuICAgIFx0XHRlbHNlIHtcbiAgICBcdFx0XHQkZGlhbG9nLnJlbW92ZUNsYXNzKCdpcy1zY3JvbGxpbmcnKVxuICAgIFx0XHR9XG4gICAgICAgIH0sXG5cblx0XHRjbG9zZTogZnVuY3Rpb24oZWxlbWVudCwgY2FsbGJhY2spXG5cdFx0e1xuXHRcdFx0cG9wdXAgPSB0aGlzO1xuXG5cdFx0XHR2YXIgc2Nyb2xsID0gMCwgY2IgPSBmYWxzZSwgaXNfbmF0aXZlID0gdHJ1ZSwgJHBvcHVwcztcblxuXHRcdFx0JHBvcHVwcyA9ICRib2R5LmZpbmQoJy5wb3B1cC5pcy1vcGVuJyk7XG5cblx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdCRwb3B1cHMgPSAkKGVsZW1lbnQpO1xuXHRcdFx0XHRpc19uYXRpdmUgPSBmYWxzZTtcblx0XHRcdH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIFx0Y2IgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG5cdFx0XHQkYm9keS50cmlnZ2VyKCdwb3B1cC5iZWZvcmVfY2xvc2UnLCAkcG9wdXBzKTtcblxuICAgICAgICAgICAgaWYgKGRlZmF1bHRzLm92ZXJsYXkuZW5hYmxlICYmIGlzX25hdGl2ZSkge1xuXHRcdFx0XHQkLm92ZXJsYXkuY2xvc2UoKTtcblx0ICAgICAgICB9O1xuXG4gICAgICAgICAgICAkKGRlZmF1bHRzLndyYXBwZXIpLm9mZignY2xpY2sud3JhcENsb3NlJyk7XG5cbiAgICAgICAgICAgICRwb3B1cHMucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgXHQkcG9wdXBzLnJlbW92ZUNsYXNzKCd2aXNpYmxlIGlzLW9wZW4nKTtcbiAgICAgICAgICAgIFx0JHBvcHVwcy5maWx0ZXIoJy50ZW1wJykucmVtb3ZlKCk7XG4gICAgICAgICAgICBcdCRib2R5LnRyaWdnZXIoJ3BvcHVwLmFmdGVyX2Nsb3NlJywgJHBvcHVwcyk7XG5cbiAgICAgICAgICAgIFx0aWYgKGNiKSB7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG5cdFx0ICAgICAgICAgICAgXHRjYWxsYmFjay5hcHBseSgpO1xuXHRcdCAgICAgICAgICAgIH0sIDEwKTtcblx0ICAgICAgICAgICBcdH1cbiAgICAgICAgICAgIH0sIGRlZmF1bHRzLnNwZWVkKTtcblxuICAgICAgICAgICAgaWYgKCFjYiAmJiBpc19uYXRpdmUpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJGJvZHkucmVtb3ZlQ2xhc3MoJ3BvcHVwLW9wZW4nKTtcblxuICAgICAgICAgICAgICAgIGlmKGRlZmF1bHRzLmhhc2hDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsID0gJHdpbi5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSAnJztcbiAgICAgICAgICAgICAgICAgICAgJHdpbi5zY3JvbGxUb3Aoc2Nyb2xsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ3BvcHVwLmNsb3NlJywgJHBvcHVwcyk7XG5cdFx0XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBpbml0V3JhcENsb3NlOiBmdW5jdGlvbigpXG4gICAgXHR7XG4gICAgXHRcdHBvcHVwID0gdGhpcztcblxuICAgIFx0XHQkKGRlZmF1bHRzLndyYXBwZXIpLm9uKCdjbGljay53cmFwQ2xvc2UnLCBmdW5jdGlvbihlKSB7XG4gICAgXHRcdFx0aWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KGRlZmF1bHRzLnBvcHVwQ2xhc3MpLmxlbmd0aCAmJiAhJChlLnRhcmdldCkuaGFzQ2xhc3MoZGVmYXVsdHMudHJpZ2dlckNsYXNzLnN1YnN0cigxKSkgJiYgISQoZS50YXJnZXQpLmNsb3Nlc3QoZGVmYXVsdHMudHJpZ2dlckNsYXNzKS5sZW5ndGgpXG4gICAgXHRcdFx0e1xuXHRcdFx0XHRcdHBvcHVwLmNsb3NlKCk7XG5cdCAgICBcdFx0fVxuXHQgICAgICAgIH0pO1xuXG4gICAgICAgIH0sXG5cbiAgICAgICAgaG9va3M6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICBcdHBvcHVwID0gdGhpcztcbiAgICAgICAgXHRcblx0XHRcdCRib2R5Lm9uKCdjbGljaycsIGRlZmF1bHRzLmNsb3NlQ2xhc3MsIGZ1bmN0aW9uKGUpIHtcblx0ICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblx0ICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcblx0ICAgICAgICB9KTtcblxuXHRcdFx0aWYgKGRlZmF1bHRzLmtleUhvb2tzKVxuXHRcdFx0e1xuXHRcdFx0XHQkYm9keS5vbigna2V5cHJlc3Mga2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRpZihlLmtleUNvZGUgPT0gMjcpIHtcblx0XHQgICAgICAgICAgICAgICAgcG9wdXAuY2xvc2UoKTtcblx0XHQgICAgICAgICAgICB9XG5cdFx0ICAgICAgICB9KTtcblx0XHRcdH07XG5cblx0ICAgICAgICBpZiAoZGVmYXVsdHMub3ZlcmxheS5lbmFibGUgJiYgZGVmYXVsdHMub3ZlcmxheUNsaWNrQ2xvc2UpXG5cdCAgICAgICAge1xuXHRcdFx0XHQkKGRlZmF1bHRzLm92ZXJsYXkuZWxlbWVudCkub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIFx0cG9wdXAuY2xvc2UoKTtcblx0ICAgICAgICAgICAgfSk7XG5cdCAgICAgICAgfVxuXG5cdCAgICAgICAgJHdpbi5vbigncmVzaXplLnBvcHVwJywgZnVuY3Rpb24oKSB7XG5cdCAgICAgICAgICAgIGNsZWFyVGltZW91dChyZXNpemVUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZXNpemVUaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICRib2R5LmZpbmQoJy5wb3B1cC5pcy1vcGVuJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgXHRpZiAoIWRlZmF1bHRzLmNzc1Bvc2l0aW9uKVxuICAgICAgICBcdFx0XHRcdHtcblx0ICAgICAgICAgICAgICAgICAgICBcdHBvcHVwLl9jaGFuZ2VQb3NpdGlvbigkKHRoaXMpKTtcblx0ICAgICAgICAgICAgICAgICAgICB9XG5cblx0ICAgICAgICAgICAgICAgICAgICBwb3B1cC5fY2hlY2tTY3JvbGwoJCh0aGlzKSk7XG5cdCAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG5cdCAgICAgICAgfSk7XG5cblx0ICAgICAgICByZXR1cm4gdGhpcztcblx0XHR9LFxuXG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKHNlbGVjdG9yLCBvdmVybGF5LCBib2R5Y2xhc3MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkcG9wdXAgPSBudWxsO1xuICAgICAgICBcdHBvcHVwID0gdGhpcztcblxuICAgICAgICBcdGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICd1bmRlZmluZWQnICYmIHNlbGVjdG9yICE9PSAnJylcblx0XHRcdHtcblx0XHRcdFx0dmFyIGRhdGEgPSBkYXRhIHx8IHt9LCBwcm9wID0ge30sICRwb3B1cDtcblx0XHRcdFx0XG5cdFx0XHRcdGlmIChib2R5Y2xhc3MpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHQkYm9keS5hZGRDbGFzcygncG9wdXAtb3BlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAodHlwZW9mIHNlbGVjdG9yID09ICdvYmplY3QnKVxuXHQgICAgICAgIFx0e1xuXHQgICAgICAgIFx0XHQkcG9wdXAgPSAkKHNlbGVjdG9yKTtcblx0ICAgICAgICBcdH1cblx0ICAgICAgICBcdGVsc2Vcblx0ICAgICAgICBcdHtcblx0ICAgICAgICBcdFx0aWYgKCQoJyMnK3NlbGVjdG9yKS5oYXNDbGFzcygncG9wdXAnKSlcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkcG9wdXAgPSAkKCcjJytzZWxlY3Rvcik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2UgaWYgKCQoJyMnK3NlbGVjdG9yKS5sZW5ndGggJiYgJCgnIycrc2VsZWN0b3IpLmdldCgwKS50YWdOYW1lID09ICdTQ1JJUFQnIHx8ICQoJyMnK3NlbGVjdG9yKS5nZXQoMCkudGFnTmFtZSA9PSAnVEVNUExBVEUnKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdCRwb3B1cCA9ICQodGVtcGxhdGUoc2VsZWN0b3IsIGRhdGEpKTtcblx0XHRcdFx0XHRcdCRwb3B1cC5hZGRDbGFzcygndGVtcCcpO1xuXG5cdFx0XHRcdFx0XHQkYm9keS5hcHBlbmQoJHBvcHVwKTtcblx0XHRcdFx0XHR9XG5cdCAgICAgICAgXHR9XG5cbiAgICAgICAgICAgICAgICBpZiAoJHBvcHVwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKCd2aXNpYmxlIGlzLW9wZW4nKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlZmF1bHRzLmNzc1Bvc2l0aW9uKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcG9wdXAuY3NzKHBvcHVwLl9nZXRQb3NpdGlvbigkcG9wdXApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGRlZmF1bHRzLm92ZXJsYXkuZWxlbWVudCkuYWRkQ2xhc3MoJ3Zpc2libGUnKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoZGVmYXVsdHMub3ZlcmxheS5lbGVtZW50KS5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0V3JhcENsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwb3B1cC5fY2hlY2tTY3JvbGwoJHBvcHVwKTtcblxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkcG9wdXAuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ3BvcHVwLmFmdGVyX29wZW4nLCAkcG9wdXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJHBvcHVwLnNjcm9sbFRvcCgwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5lc3RlZC5sZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcigncG9wdXAuaW5pdF9uZXN0ZWQnLCB7IHBvcHVwOiAkcG9wdXAsIG5lc3RlZDogbmVzdGVkIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgJGJvZHkudHJpZ2dlcigncG9wdXAub3BlbicsICRwb3B1cCk7XG4gICAgICAgICAgICAgICAgfVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdGhpcztcbiAgICAgICAgfSxcblxuICAgICAgICBjbGlja3M6IGZ1bmN0aW9uKHRyaWdnZXIpXG4gICAgICAgIHtcbiAgICAgICAgXHRwb3B1cCA9IHRoaXM7XG4gICAgICAgIFx0XG4gICAgICAgIFx0JGJvZHkub24oJ2NsaWNrJywgdHJpZ2dlciwgZnVuY3Rpb24oZSkge1xuICAgICAgICBcdFx0dmFyIG92ZXJsYXkgPSBkZWZhdWx0cy5vdmVybGF5LmVuYWJsZSwgYm9keWNsYXNzID0gZGVmYXVsdHMuYm9keWNsYXNzLCBlbGVtZW50O1xuXG4gICAgICAgIFx0XHRpZiAoJCgnLnBvcHVwLmlzLW9wZW4nKS5sZW5ndGgpXG4gICAgICAgIFx0XHR7XG4gICAgICAgIFx0XHRcdCRib2R5LnRyaWdnZXIoJ3BvcHVwLmJlZm9yZV9vcGVuJywgJCgnLnBvcHVwLmlzLW9wZW4nKSk7XG4gICAgICAgIFx0XHR9XG5cblx0XHRcdFx0aWYgKCFkZWZhdWx0cy5oYXNoQ2hhbmdlKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0eXBlb2YoJCh0aGlzKS5kYXRhKCdib2R5Y2xhc3MnKSkgIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ym9keWNsYXNzID0gJCh0aGlzKS5kYXRhKCdib2R5Y2xhc3MnKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0eXBlb2YoJCh0aGlzKS5kYXRhKCdvdmVybGF5JykpICE9PSAndW5kZWZpbmVkJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG92ZXJsYXkgPSAkKHRoaXMpLmRhdGEoJ292ZXJsYXknKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ3BvcHVwJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdwb3B1cCcpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0ZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCdocmVmJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdHBvcHVwLm9wZW4oZWxlbWVudCwgb3ZlcmxheSwgYm9keWNsYXNzKTtcblxuXHRcdFx0XHRpZiAodHlwZW9mKCQodGhpcykuZGF0YSgnaGFzaGNoYW5nZScpKSAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRyZXR1cm4gJCh0aGlzKS5kYXRhKCdoYXNoY2hhbmdlJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9LFxuICAgICAgICBcblx0XHRvcGVuOiBmdW5jdGlvbihzZWxlY3Rvciwgb3ZlcmxheSwgYm9keWNsYXNzKVxuXHRcdHtcblx0XHRcdHBvcHVwID0gdGhpcztcblxuXHRcdFx0aWYgKHR5cGVvZihzZWxlY3RvcikgIT09ICd1bmRlZmluZWQnICYmIHNlbGVjdG9yLmxlbmd0aCA+IDEgJiYgc2VsZWN0b3Iuc3Vic3RyKDAsIDEpICE9PSAnIycpXG5cdFx0XHR7XG5cdFx0XHRcdHNlbGVjdG9yID0gJyMnICsgc2VsZWN0b3I7XG5cdFx0XHR9XG5cblx0XHRcdHRlbXAgPSBudWxsLCBzZWxlY3Rvcl9jYWNoZSA9IG51bGwsIG5lc3RlZCA9IFtdO1xuXG5cdFx0XHRpZiAodHlwZW9mIHNlbGVjdG9yID09ICd1bmRlZmluZWQnICYmIGRlZmF1bHRzLmhhc2hDaGFuZ2UgJiYgd2luZG93LmxvY2F0aW9uLmhhc2gubGVuZ3RoID4gMSlcblx0XHRcdHtcblx0XHRcdFx0dGVtcCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRcdFx0fVxuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAndW5kZWZpbmVkJylcblx0XHRcdHtcblx0XHRcdFx0aWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PSAnIycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZW1wID0gc2VsZWN0b3I7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKHRlbXAgIT09IG51bGwgJiYgdGVtcC5pbmRleE9mKCcvJykgPj0gMClcblx0XHRcdHtcblx0XHRcdFx0bmVzdGVkID0gdGVtcC5zcGxpdCgnLycpO1xuXHRcdFx0fVxuXHRcdFx0XG5cdFx0XHRpc19uZXN0ZWQgPSBmYWxzZTtcblx0XHRcdHNlbGVjdG9yID0gdGVtcDtcblx0XHRcdFxuXHRcdFx0aWYgKG5lc3RlZC5sZW5ndGgpXG5cdFx0XHR7XG5cdFx0XHRcdGlzX25lc3RlZCA9IHRydWU7XG5cdFx0XHRcdHNlbGVjdG9yID0gbmVzdGVkWzBdO1xuXHRcdFx0XHRuZXN0ZWQgPSBuZXN0ZWQuc2xpY2UoMSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICh0eXBlb2Ygc2VsZWN0b3IgIT09ICd1bmRlZmluZWQnICYmIHNlbGVjdG9yICE9PSBudWxsKVxuXHRcdFx0e1xuICAgICAgICBcdFx0aWYgKHNlbGVjdG9yLnN1YnN0cigwLCAxKSA9PSAnIycpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlbGVjdG9yLnN1YnN0cigxKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgkKCcucG9wdXAuaXMtb3BlbicpLmxlbmd0aClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHNlbGVjdG9yX2NhY2hlID0gJCgnLnBvcHVwLmlzLW9wZW4nKS5hdHRyKCdpZCcpO1xuXHRcdFx0XHRcblx0XHRcdFx0XHRpZiAoKGlzX25lc3RlZCAmJiAhbmVzdGVkLmxlbmd0aCkgfHwgKHNlbGVjdG9yICE9PSBzZWxlY3Rvcl9jYWNoZSkpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0cG9wdXAuY2xvc2UoJCgnLnBvcHVwLmlzLW9wZW4nKSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGVsc2Vcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkLmFwcC50YWJzLmhhc2hVcmwuY2hlY2socG9wdXAsIG5lc3RlZCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCQoJyN0cGwtJyArIHNlbGVjdG9yKS5sZW5ndGgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzZWxlY3RvciA9ICd0cGwtJytzZWxlY3Rvcjtcblx0XHRcdFx0fVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmICgkKCcjdG1wbC0nICsgc2VsZWN0b3IpLmxlbmd0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yID0gJ3RtcGwtJytzZWxlY3RvcjtcbiAgICAgICAgICAgICAgICB9XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBvdmVybGF5ID09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0b3ZlcmxheSA9IGRlZmF1bHRzLm92ZXJsYXkuZW5hYmxlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKHR5cGVvZiBib2R5Y2xhc3MgPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRib2R5Y2xhc3MgPSBkZWZhdWx0cy5ib2R5Y2xhc3M7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJCgnIycrc2VsZWN0b3IpLmhhc0NsYXNzKCdwb3B1cCcpIHx8XG4gICAgICAgICAgICAgICAgICAgICgkKCcjJytzZWxlY3RvcikubGVuZ3RoICYmICQoJyMnK3NlbGVjdG9yKS5nZXQoMCkudGFnTmFtZSA9PSAnU0NSSVBUJykgfHxcbiAgICAgICAgICAgICAgICAgICAgKCQoJyMnK3NlbGVjdG9yKS5sZW5ndGggJiYgJCgnIycrc2VsZWN0b3IpLmdldCgwKS50YWdOYW1lID09ICdURU1QTEFURScpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9wdXAuc2hvdyhzZWxlY3Rvciwgb3ZlcmxheSwgYm9keWNsYXNzKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcblx0ICAgIFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuXHQgICAgbm90aWZpY2F0aW9uOiBmdW5jdGlvbih0aXRsZSwgdGV4dClcblx0ICAgIHtcblx0ICAgIFx0cG9wdXAgPSB0aGlzO1xuXG5cdCAgICBcdGNsZWFyVGltZW91dChub3RpZnlfdGltZW91dCk7XG5cbiAgICAgICAgICAgIGlmICghJGJvZHkuZmluZCgnI2FsZXJ0LXBvcHVwLW5vdGlmaWNhdGlvbicpLmxlbmd0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIFx0bm90eSA9ICQodGVtcGxhdGUoZGVmYXVsdHMudGVtcGxhdGUubm90aWZpY2F0aW9uLCB7ICd0aXRsZSc6IHRpdGxlLCAndGV4dCc6IHRleHQgfSApKTtcblxuICAgICAgICAgICAgXHRub3R5LmFkZENsYXNzKCd0ZW1wJyk7XG4gICAgICAgICAgICBcdG5vdHkuYXR0cignaWQnLCAnYWxlcnQtcG9wdXAtbm90aWZpY2F0aW9uJyk7XG5cbiAgICAgICAgICAgICAgIFx0JGJvZHkuYXBwZW5kKG5vdHkpO1xuXG4gICAgICAgICAgICAgICAgcG9wdXAuc2hvdyhub3R5LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub3RpZnlfdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBub3R5LnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG5cbiAgICAgICAgICAgICAgICAgICAgbm90eS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgICAgIH0sIDUwMDApO1xuXHQgICAgfSxcblx0ICAgIFxuXHQgICAgbWVzc2FnZTogZnVuY3Rpb24odGl0bGUsIHRleHQsIGJ0bilcblx0ICAgIHtcblx0ICAgIFx0cG9wdXAgPSB0aGlzO1xuXG5cdCAgICAgICBcdHZhciB0ZW1wID0gJCh0ZW1wbGF0ZShkZWZhdWx0cy50ZW1wbGF0ZS5tZXNzYWdlLCB7J3RpdGxlJzogdGl0bGUsICd0ZXh0JzogdGV4dCwgJ2J0bic6IGJ0biB8fCBudWxsIH0pKTtcblxuXHQgICAgICAgIHRlbXAuYWRkQ2xhc3MoJ3RlbXAnKTtcblxuXHQgICAgICAgICRib2R5LmFwcGVuZCh0ZW1wKTtcblxuXHQgICAgICAgXHR0ZW1wLmNzcyh0aGlzLl9nZXRQb3NpdGlvbih0ZW1wKSk7XG5cbiAgICAgICAgICAgIHBvcHVwLmNsb3NlKCRib2R5LmZpbmQoJy5wb3B1cC5pcy1vcGVuJyksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvcHVwLnNob3codGVtcCk7XG4gICAgICAgICAgICB9KTtcblx0ICAgIH0sXG5cdCAgICBcblx0ICAgIGVycm9yOiBmdW5jdGlvbih0aXRsZSwgdGV4dClcblx0ICAgIHtcblx0ICAgIFx0cG9wdXAgPSB0aGlzO1xuXG5cdCAgICAgICBcdHZhciB0ZW1wID0gJCh0ZW1wbGF0ZShkZWZhdWx0cy50ZW1wbGF0ZS5lcnJvciwgeyAndGl0bGUnOiB0aXRsZSwgJ3RleHQnOiB0ZXh0IH0pKTtcblxuXHQgICAgICAgIHRlbXAuYWRkQ2xhc3MoJ3RlbXAnKTtcblxuXHQgICAgICAgICRib2R5LmFwcGVuZCh0ZW1wKTtcblxuXHQgICAgICAgIHRlbXAuY3NzKHRoaXMuX2dldFBvc2l0aW9uKHRlbXApKTtcblxuXHQgICAgICAgIHBvcHVwLmNsb3NlKCRib2R5LmZpbmQoJy5wb3B1cC5pcy1vcGVuJyksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHBvcHVwLnNob3codGVtcCk7XG4gICAgICAgICAgICB9KTtcblx0ICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24odHJpZ2dlciwgb3B0aW9ucylcbiAgICAgICAge1xuICAgICAgICBcdGRlZmF1bHRzLnRyaWdnZXJDbGFzcyA9IHRyaWdnZXI7XG5cbiAgICAgICAgXHRpZiAodHlwZW9mIG9wdGlvbnMgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICBcdHtcbiAgICAgICAgXHRcdGZvciAodmFyIHggaW4gb3B0aW9ucylcbiAgICAgICAgXHRcdHtcbiAgICAgICAgXHRcdFx0aWYgKHR5cGVvZiBkZWZhdWx0c1t4XSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIFx0XHRcdHtcbiAgICAgICAgXHRcdFx0XHRkZWZhdWx0c1t4XSA9IG9wdGlvbnNbeF07XG4gICAgICAgIFx0XHRcdH1cbiAgICAgICAgXHRcdH1cbiAgICAgICAgXHR9XG4gICAgICAgIFx0XG4gICAgICAgIFx0dGhpcy5vcGVuKCk7XG5cdFx0XHR0aGlzLmNsaWNrcyh0cmlnZ2VyKTtcblx0XHRcdHRoaXMuaG9va3MoKTtcblx0XHR9XG5cdH07XG4gICAgXG59KShqUXVlcnkpOyJdfQ==

"use strict";

/**
 * SVG Fixer
 *
 * Fixes references to inline SVG elements when the <base> tag is in use.
 * Firefox won't display SVG icons referenced with
 * `<svg><use xlink:href="#id-of-icon-def"></use></svg>` when the <base> tag is on the page.
 *
 * More info:
 * - http://stackoverflow.com/a/18265336/796152
 * - http://www.w3.org/TR/SVG/linking.html
 *
 * One would think that setting the `xml:base` attribute fixes things,
 * but that is being removed from the platform: https://code.google.com/p/chromium/issues/detail?id=341854
 */

(function (document, window) {
    "use strict";

    /**
    * Initialize the SVG Fixer after the DOM is ready
    */

    document.addEventListener("DOMContentLoaded", function () {

        /**
         * Current URL, without the hash
         */
        var baseUrl = window.location.href.replace(window.location.hash, "");

        /**
        *  Find all `use` elements with a namespaced `href` attribute, e.g.
        *  <use xlink:href="#some-id"></use>
        *
        *  See: http://stackoverflow.com/a/23047888/796152
        */
        [].slice.call(document.querySelectorAll("use[*|href]"))

        /**
        * Filter out all elements whose namespaced `href` attribute doesn't
        * start with `#` (i.e. all non-relative IRI's)
        *
        * Note: we're assuming the `xlink` prefix for the XLink namespace!
        */
        .filter(function (element) {
            return element.getAttribute("xlink:href").indexOf("#") === 0;
        })

        /**
        * Prepend `window.location` to the namespaced `href` attribute value,
        * in order to make it an absolute IRI
        *
        * Note: we're assuming the `xlink` prefix for the XLink namespace!
        */
        .forEach(function (element) {
            element.setAttribute("xlink:href", baseUrl + element.getAttribute("xlink:href"));
        });
    }, false);
})(document, window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zdmdmaXhlci5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYXNlVXJsIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsImhhc2giLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImluZGV4T2YiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiOztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQyxXQUFTQSxRQUFULEVBQW1CQyxNQUFuQixFQUEyQjtBQUN4Qjs7QUFFQTs7OztBQUdBRCxhQUFTRSxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBVzs7QUFFckQ7OztBQUdBLFlBQUlDLFVBQVVGLE9BQU9HLFFBQVAsQ0FBZ0JDLElBQWhCLENBQ1RDLE9BRFMsQ0FDREwsT0FBT0csUUFBUCxDQUFnQkcsSUFEZixFQUNxQixFQURyQixDQUFkOztBQUdBOzs7Ozs7QUFNQSxXQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBY1QsU0FBU1UsZ0JBQVQsQ0FBMEIsYUFBMUIsQ0FBZDs7QUFFSTs7Ozs7O0FBRkosU0FRS0MsTUFSTCxDQVFZLFVBQVNDLE9BQVQsRUFBa0I7QUFDdEIsbUJBQVFBLFFBQVFDLFlBQVIsQ0FBcUIsWUFBckIsRUFBbUNDLE9BQW5DLENBQTJDLEdBQTNDLE1BQW9ELENBQTVEO0FBQ0gsU0FWTDs7QUFZSTs7Ozs7O0FBWkosU0FrQktDLE9BbEJMLENBa0JhLFVBQVNILE9BQVQsRUFBa0I7QUFDdkJBLG9CQUFRSSxZQUFSLENBQXFCLFlBQXJCLEVBQW1DYixVQUFVUyxRQUFRQyxZQUFSLENBQXFCLFlBQXJCLENBQTdDO0FBQ0gsU0FwQkw7QUFzQkgsS0FwQ0QsRUFvQ0csS0FwQ0g7QUFzQ0gsQ0E1Q0EsRUE0Q0NiLFFBNUNELEVBNENXQyxNQTVDWCxDQUFEIiwiZmlsZSI6Il9zdmdmaXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU1ZHIEZpeGVyXG4gKlxuICogRml4ZXMgcmVmZXJlbmNlcyB0byBpbmxpbmUgU1ZHIGVsZW1lbnRzIHdoZW4gdGhlIDxiYXNlPiB0YWcgaXMgaW4gdXNlLlxuICogRmlyZWZveCB3b24ndCBkaXNwbGF5IFNWRyBpY29ucyByZWZlcmVuY2VkIHdpdGhcbiAqIGA8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNpZC1vZi1pY29uLWRlZlwiPjwvdXNlPjwvc3ZnPmAgd2hlbiB0aGUgPGJhc2U+IHRhZyBpcyBvbiB0aGUgcGFnZS5cbiAqXG4gKiBNb3JlIGluZm86XG4gKiAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MjY1MzM2Lzc5NjE1MlxuICogLSBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvbGlua2luZy5odG1sXG4gKlxuICogT25lIHdvdWxkIHRoaW5rIHRoYXQgc2V0dGluZyB0aGUgYHhtbDpiYXNlYCBhdHRyaWJ1dGUgZml4ZXMgdGhpbmdzLFxuICogYnV0IHRoYXQgaXMgYmVpbmcgcmVtb3ZlZCBmcm9tIHRoZSBwbGF0Zm9ybTogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM0MTg1NFxuICovXG5cbihmdW5jdGlvbihkb2N1bWVudCwgd2luZG93KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAqIEluaXRpYWxpemUgdGhlIFNWRyBGaXhlciBhZnRlciB0aGUgRE9NIGlzIHJlYWR5XG4gICAgKi9cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCBVUkwsIHdpdGhvdXQgdGhlIGhhc2hcbiAgICAgICAgICovXG4gICAgICAgIHZhciBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLCBcIlwiKTtcblxuICAgICAgICAvKipcbiAgICAgICAgKiAgRmluZCBhbGwgYHVzZWAgZWxlbWVudHMgd2l0aCBhIG5hbWVzcGFjZWQgYGhyZWZgIGF0dHJpYnV0ZSwgZS5nLlxuICAgICAgICAqICA8dXNlIHhsaW5rOmhyZWY9XCIjc29tZS1pZFwiPjwvdXNlPlxuICAgICAgICAqXG4gICAgICAgICogIFNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjMwNDc4ODgvNzk2MTUyXG4gICAgICAgICovXG4gICAgICAgIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVzZVsqfGhyZWZdXCIpKVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogRmlsdGVyIG91dCBhbGwgZWxlbWVudHMgd2hvc2UgbmFtZXNwYWNlZCBgaHJlZmAgYXR0cmlidXRlIGRvZXNuJ3RcbiAgICAgICAgICAgICogc3RhcnQgd2l0aCBgI2AgKGkuZS4gYWxsIG5vbi1yZWxhdGl2ZSBJUkkncylcbiAgICAgICAgICAgICpcbiAgICAgICAgICAgICogTm90ZTogd2UncmUgYXNzdW1pbmcgdGhlIGB4bGlua2AgcHJlZml4IGZvciB0aGUgWExpbmsgbmFtZXNwYWNlIVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpLmluZGV4T2YoXCIjXCIpID09PSAwKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBQcmVwZW5kIGB3aW5kb3cubG9jYXRpb25gIHRvIHRoZSBuYW1lc3BhY2VkIGBocmVmYCBhdHRyaWJ1dGUgdmFsdWUsXG4gICAgICAgICAgICAqIGluIG9yZGVyIHRvIG1ha2UgaXQgYW4gYWJzb2x1dGUgSVJJXG4gICAgICAgICAgICAqXG4gICAgICAgICAgICAqIE5vdGU6IHdlJ3JlIGFzc3VtaW5nIHRoZSBgeGxpbmtgIHByZWZpeCBmb3IgdGhlIFhMaW5rIG5hbWVzcGFjZSFcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIsIGJhc2VVcmwgKyBlbGVtZW50LmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9LCBmYWxzZSk7XG5cbn0oZG9jdW1lbnQsIHdpbmRvdykpO1xuIl19

'use strict';

;(function (d) {
    function template(id, data) {
        if (d.getElementById(id) !== null) {
            var pattern = d.getElementById(id).innerHTML;

            // if (!window.precompiledT7) {
            //     window.precompiledT7 = Template7.compile(pattern);
            // }
            // return window.precompiledT7(data || {});

            return Template7.compile(pattern)(data || {});
        }

        return '';
    }

    window.template = template;
})(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImlkIiwiZGF0YSIsImQiLCJnZXRFbGVtZW50QnlJZCIsInBhdHRlcm4iLCJpbm5lckhUTUwiLCJUZW1wbGF0ZTciLCJjb21waWxlIiwid2luZG93IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxDQUFFLGFBQUs7QUFDSixhQUFTQSxRQUFULENBQWtCQyxFQUFsQixFQUFzQkMsSUFBdEIsRUFBNEI7QUFDeEIsWUFBSUMsRUFBRUMsY0FBRixDQUFpQkgsRUFBakIsTUFBeUIsSUFBN0IsRUFBbUM7QUFDL0IsZ0JBQU1JLFVBQVVGLEVBQUVDLGNBQUYsQ0FBaUJILEVBQWpCLEVBQXFCSyxTQUFyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBT0MsVUFBVUMsT0FBVixDQUFrQkgsT0FBbEIsRUFBMkJILFFBQVEsRUFBbkMsQ0FBUDtBQUNIOztBQUVELGVBQU8sRUFBUDtBQUNIOztBQUVETyxXQUFPVCxRQUFQLEdBQWtCQSxRQUFsQjtBQUNILENBakJBLEVBaUJHVSxRQWpCSCIsImZpbGUiOiJfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KChkID0+IHtcbiAgICBmdW5jdGlvbiB0ZW1wbGF0ZShpZCwgZGF0YSkge1xuICAgICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBkLmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUw7XG5cbiAgICAgICAgICAgIC8vIGlmICghd2luZG93LnByZWNvbXBpbGVkVDcpIHtcbiAgICAgICAgICAgIC8vICAgICB3aW5kb3cucHJlY29tcGlsZWRUNyA9IFRlbXBsYXRlNy5jb21waWxlKHBhdHRlcm4pO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gcmV0dXJuIHdpbmRvdy5wcmVjb21waWxlZFQ3KGRhdGEgfHwge30pO1xuXG4gICAgICAgICAgICByZXR1cm4gVGVtcGxhdGU3LmNvbXBpbGUocGF0dGVybikoZGF0YSB8fCB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgd2luZG93LnRlbXBsYXRlID0gdGVtcGxhdGU7XG59KSkoZG9jdW1lbnQpOyJdfQ==
