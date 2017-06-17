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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wb3B1cC5qcyJdLCJuYW1lcyI6WyIkIiwiZGVmYXVsdHMiLCJ3cmFwcGVyIiwicG9wdXBDbGFzcyIsInRyaWdnZXJDbGFzcyIsImRpYWxvZ0NsYXNzIiwiY2xvc2VDbGFzcyIsInNwZWVkIiwib3ZlcmxheSIsImVuYWJsZSIsImVsZW1lbnQiLCJvdmVybGF5Q2xpY2tDbG9zZSIsImNzc1Bvc2l0aW9uIiwiYm9keWNsYXNzIiwiaGFzaENoZWNrIiwiaGFzaENoYW5nZSIsImtleUhvb2tzIiwidGVtcGxhdGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJub3RpZmljYXRpb24iLCJwb3B1cCIsIm5vdHkiLCJ0ZW1wIiwibmVzdGVkIiwiJGRpYWxvZyIsIiR0cmlnZ2VyIiwiJGJvZHkiLCIkd2luIiwid2luZG93IiwiJGRvYyIsImRvY3VtZW50Iiwic2VsZWN0b3JfY2FjaGUiLCJub3RpZnlfdGltZW91dCIsImlzX25lc3RlZCIsInJlc2l6ZVRpbWVvdXQiLCJjbG9zZSIsInJlbW92ZUNsYXNzIiwic2V0VGltZW91dCIsImZpbHRlciIsInJlbW92ZSIsIl9nZXRQb3B1cCIsInNlbGVjdG9yIiwiJHBvcHVwIiwibGVuZ3RoIiwiX2dldFBvc2l0aW9uIiwicHJvcCIsInd3Iiwid2lkdGgiLCJ3aCIsImhlaWdodCIsImR3IiwiZGgiLCJwdyIsIm91dGVyV2lkdGgiLCJwaCIsIm91dGVySGVpZ2h0Iiwic3QiLCJzY3JvbGxUb3AiLCJsZWZ0IiwidG9wIiwiY3NzIiwicG9zVHlwZSIsImF0dHIiLCIkcmVhbFdyYXBwZXIiLCJNYXRoIiwicm91bmQiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsImNlaWwiLCJyaWdodCIsIl9jaGFuZ2VQb3NpdGlvbiIsIl9jaGVja1Njcm9sbCIsImZpbmQiLCJhZGRDbGFzcyIsImNhbGxiYWNrIiwic2Nyb2xsIiwiY2IiLCJpc19uYXRpdmUiLCIkcG9wdXBzIiwidHJpZ2dlciIsIm9mZiIsImxvY2F0aW9uIiwiaGFzaCIsImFwcGx5IiwiaW5pdFdyYXBDbG9zZSIsIm9uIiwiZSIsInRhcmdldCIsImNsb3Nlc3QiLCJoYXNDbGFzcyIsInN1YnN0ciIsImhvb2tzIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImtleUNvZGUiLCJjbGVhclRpbWVvdXQiLCJlYWNoIiwic2hvdyIsImRhdGEiLCJnZXQiLCJ0YWdOYW1lIiwiYXBwZW5kIiwiY2xpY2tzIiwib3BlbiIsImluZGV4T2YiLCJzcGxpdCIsInNsaWNlIiwiYXBwIiwidGFicyIsImhhc2hVcmwiLCJjaGVjayIsInRpdGxlIiwidGV4dCIsImJ0biIsImluaXQiLCJvcHRpb25zIiwieCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBTUEsQ0FBQyxDQUFDLFVBQVNBLENBQVQsRUFBWTtBQUNiOztBQUVBLEtBQUlDLFdBQVc7QUFDZEMsV0FBUyxNQURLO0FBRWRDLGNBQVksUUFGRTtBQUdkQyxnQkFBYyxlQUhBO0FBSWRDLGVBQWEsaUJBSkM7QUFLZEMsY0FBWSxnQkFMRTtBQU1kQyxTQUFPLEdBTk87QUFPZEMsV0FBUztBQUNSQyxXQUFRLENBQUMsQ0FERDtBQUVSQyxZQUFTO0FBRkQsR0FQSztBQVdkQyxxQkFBbUIsQ0FBQyxDQVhOO0FBWWRDLGVBQWEsQ0FBQyxDQVpBO0FBYWRDLGFBQVcsQ0FBQyxDQWJFO0FBY2RDLGFBQVcsQ0FBQyxDQWRFO0FBZWRDLGNBQVksQ0FBQyxDQWZDO0FBZ0JkQyxZQUFVLENBQUMsQ0FoQkc7QUFpQmRDLFlBQVU7QUFDVEMsVUFBTyxrQkFERTtBQUVUQyxZQUFTLG9CQUZBO0FBR1RDLGlCQUFjO0FBSEw7QUFqQkksRUFBZjtBQUFBLEtBdUJBQyxRQUFRLElBdkJSO0FBQUEsS0F3QkFDLE9BQU8sSUF4QlA7QUFBQSxLQXlCQUMsT0FBTyxJQXpCUDtBQUFBLEtBMEJBQyxTQUFTLEVBMUJUO0FBQUEsS0EyQkFDLFVBQVUsRUEzQlY7QUFBQSxLQTRCQUMsV0FBVyxFQTVCWDtBQUFBLEtBNkJBQyxRQUFRM0IsRUFBRSxNQUFGLENBN0JSO0FBQUEsS0E4QkE0QixPQUFPNUIsRUFBRTZCLE1BQUYsQ0E5QlA7QUFBQSxLQStCQUMsT0FBTzlCLEVBQUUrQixRQUFGLENBL0JQO0FBQUEsS0FnQ0FDLGNBaENBO0FBQUEsS0FpQ0FDLGNBakNBO0FBQUEsS0FrQ0FDLFNBbENBO0FBQUEsS0FtQ0FDLGFBbkNBOztBQXFDQW5DLEdBQUVRLE9BQUYsR0FBWTtBQUNYNEIsU0FBTyxpQkFBVztBQUNqQnBDLEtBQUVDLFNBQVNPLE9BQVQsQ0FBaUJFLE9BQW5CLEVBQTRCMkIsV0FBNUIsQ0FBd0MsU0FBeEM7O0FBRUFDLGNBQVcsWUFBVTtBQUNYdEMsTUFBRUMsU0FBU08sT0FBVCxDQUFpQkUsT0FBbkIsRUFBNEIyQixXQUE1QixDQUF3QyxpQkFBeEM7QUFDQXJDLE1BQUVDLFNBQVNPLE9BQVQsQ0FBaUJFLE9BQW5CLEVBQTRCNkIsTUFBNUIsQ0FBbUMsT0FBbkMsRUFBNENDLE1BQTVDO0FBQ0EsSUFIVixFQUdZdkMsU0FBU00sS0FIckI7QUFJQTtBQVJVLEVBQVo7O0FBV0FQLEdBQUVxQixLQUFGLEdBQVU7QUFDSG9CLGFBQVcsbUJBQVNDLFFBQVQsRUFDWDtBQUNJLE9BQUlDLE1BQUo7O0FBRUEsT0FBRyxRQUFPRCxRQUFQLHlDQUFPQSxRQUFQLE1BQW9CLFFBQXZCLEVBQWlDO0FBQzdCLFdBQU9BLFFBQVA7QUFDSDs7QUFFREMsWUFBUzNDLEVBQUUsTUFBSTBDLFFBQU4sQ0FBVDs7QUFFQSxVQUFPQyxPQUFPQyxNQUFQLEdBQWdCRCxNQUFoQixHQUF5QixJQUFoQztBQUNILEdBWkU7O0FBY0hFLGdCQUFjLHNCQUFTRixNQUFULEVBQ2Q7QUFDQ3RCLFdBQVEsSUFBUjs7QUFFRyxPQUFJLENBQUNwQixTQUFTVyxXQUFkLEVBQ0E7QUFDSSxXQUFPLEVBQVA7QUFDSDs7QUFFVixPQUFJa0MsT0FBTyxFQUFYO0FBQUEsT0FDQ0MsS0FBS25CLEtBQUtvQixLQUFMLEVBRE47QUFBQSxPQUVhQyxLQUFLckIsS0FBS3NCLE1BQUwsRUFGbEI7QUFBQSxPQUlhQyxLQUFLckIsS0FBS2tCLEtBQUwsRUFKbEI7QUFBQSxPQUthSSxLQUFLdEIsS0FBS29CLE1BQUwsRUFMbEI7QUFBQSxPQU9hRyxLQUFLVixPQUFPVyxVQUFQLEVBUGxCO0FBQUEsT0FRYUMsS0FBS1osT0FBT2EsV0FBUCxFQVJsQjtBQUFBLE9BVWFDLEtBQUs3QixLQUFLOEIsU0FBTCxFQVZsQjtBQUFBLE9BWWFDLE9BQU8sQ0FacEI7QUFBQSxPQWFhQyxNQUFNLENBYm5CO0FBQUEsT0FjYUMsTUFBTSxFQWRuQjtBQUFBLE9BZ0JhQyxVQUFVbkIsT0FBT29CLElBQVAsQ0FBWSxlQUFaLENBaEJ2QjtBQUFBLE9Ba0JhQyxlQUFlLElBbEI1Qjs7QUFvQlMsT0FBR2IsTUFBTUUsRUFBVCxFQUFhO0FBQ1RNLFdBQU9NLEtBQUtDLEtBQUwsQ0FBVyxDQUFDZixLQUFLRSxFQUFOLElBQVUsQ0FBckIsQ0FBUDtBQUNIOztBQUVELE9BQUdKLE1BQU1NLEVBQVQsRUFBYTtBQUNUTSxRQUFJTSxRQUFKLEdBQWUsT0FBZjtBQUNBUCxVQUFNLEtBQU47QUFDQUMsUUFBSU8sU0FBSixHQUFnQixNQUFNSCxLQUFLSSxJQUFMLENBQVdkLEtBQUssQ0FBaEIsQ0FBTixHQUE0QixJQUE1QztBQUNILElBSkQsTUFLSztBQUNKTSxRQUFJTSxRQUFKLEdBQWUsVUFBZjtBQUNHUCxVQUFNSCxLQUFHUSxLQUFLQyxLQUFMLENBQVcsQ0FBQ2pCLEtBQUtNLEVBQU4sSUFBVSxDQUFyQixDQUFUO0FBQ0g7O0FBRURNLE9BQUlELEdBQUosR0FBVUEsR0FBVjs7QUFFQSxPQUFHRSxXQUFXLE9BQWQsRUFBdUI7QUFDbkJELFFBQUlTLEtBQUosR0FBWSxDQUFaO0FBQ0gsSUFGRCxNQUdLO0FBQ0RULFFBQUlGLElBQUosR0FBV0EsSUFBWDtBQUNIOztBQUVELFVBQU9FLEdBQVA7QUFDVCxHQW5FUTs7QUFxRUhVLG1CQUFpQix5QkFBUzdCLFFBQVQsRUFDakI7QUFDTCxPQUFJQyxTQUFTLEtBQUtGLFNBQUwsQ0FBZUMsUUFBZixDQUFiOztBQUVBLE9BQUksQ0FBQ3pDLFNBQVNXLFdBQWQsRUFDQTtBQUNDK0IsV0FBT2tCLEdBQVAsQ0FBVyxLQUFLaEIsWUFBTCxDQUFrQkYsTUFBbEIsQ0FBWDtBQUNBO0FBQ0ssR0E3RUU7O0FBK0VINkIsZ0JBQWMsc0JBQVNuRCxLQUFULEVBQ2Q7QUFDQ0ksYUFBVXpCLEVBQUVxQixLQUFGLEVBQVNvRCxJQUFULENBQWN4RSxTQUFTSSxXQUF2QixDQUFWOztBQUVBLE9BQUlvQixRQUFRK0IsV0FBUixLQUF3QjVCLEtBQUtzQixNQUFMLEVBQTVCLEVBQ0E7QUFDQ3pCLFlBQVFpRCxRQUFSLENBQWlCLGNBQWpCO0FBQ0gsSUFIRSxNQUlFO0FBQ0pqRCxZQUFRWSxXQUFSLENBQW9CLGNBQXBCO0FBQ0E7QUFDRSxHQTFGRTs7QUE0RlRELFNBQU8sZUFBUzFCLE9BQVQsRUFBa0JpRSxRQUFsQixFQUNQO0FBQ0N0RCxXQUFRLElBQVI7O0FBRUEsT0FBSXVELFNBQVMsQ0FBYjtBQUFBLE9BQWdCQyxLQUFLLEtBQXJCO0FBQUEsT0FBNEJDLFlBQVksSUFBeEM7QUFBQSxPQUE4Q0MsT0FBOUM7O0FBRUFBLGFBQVVwRCxNQUFNOEMsSUFBTixDQUFXLGdCQUFYLENBQVY7O0FBRUEsT0FBSSxPQUFPL0QsT0FBUCxLQUFtQixXQUF2QixFQUNBO0FBQ0NxRSxjQUFVL0UsRUFBRVUsT0FBRixDQUFWO0FBQ0FvRSxnQkFBWSxLQUFaO0FBQ0E7O0FBRVEsT0FBSSxPQUFPSCxRQUFQLEtBQW9CLFdBQXhCLEVBQXFDO0FBQ3BDRSxTQUFLLElBQUw7QUFDQTs7QUFFVmxELFNBQU1xRCxPQUFOLENBQWMsb0JBQWQsRUFBb0NELE9BQXBDOztBQUVTLE9BQUk5RSxTQUFTTyxPQUFULENBQWlCQyxNQUFqQixJQUEyQnFFLFNBQS9CLEVBQTBDO0FBQ2xEOUUsTUFBRVEsT0FBRixDQUFVNEIsS0FBVjtBQUNNOztBQUVFcEMsS0FBRUMsU0FBU0MsT0FBWCxFQUFvQitFLEdBQXBCLENBQXdCLGlCQUF4Qjs7QUFFQUYsV0FBUTFDLFdBQVIsQ0FBb0IsU0FBcEI7O0FBRUFDLGNBQVcsWUFBVTtBQUNwQnlDLFlBQVExQyxXQUFSLENBQW9CLGlCQUFwQjtBQUNBMEMsWUFBUXhDLE1BQVIsQ0FBZSxPQUFmLEVBQXdCQyxNQUF4QjtBQUNBYixVQUFNcUQsT0FBTixDQUFjLG1CQUFkLEVBQW1DRCxPQUFuQzs7QUFFQSxRQUFJRixFQUFKLEVBQVE7QUFDRHZDLGdCQUFXLFlBQVU7QUFDakJULGFBQU9xRCxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixFQUF2QjtBQUNUUixlQUFTUyxLQUFUO0FBQ0EsTUFISyxFQUdILEVBSEc7QUFJTjtBQUNELElBWEQsRUFXR25GLFNBQVNNLEtBWFo7O0FBYUEsT0FBSSxDQUFDc0UsRUFBRCxJQUFPQyxTQUFYLEVBQ0E7QUFDSW5ELFVBQU1VLFdBQU4sQ0FBa0IsWUFBbEI7O0FBRUEsUUFBR3BDLFNBQVNjLFVBQVosRUFBd0I7QUFDcEI2RCxjQUFTaEQsS0FBSzhCLFNBQUwsRUFBVDtBQUNBN0IsWUFBT3FELFFBQVAsQ0FBZ0JDLElBQWhCLEdBQXVCLEVBQXZCO0FBQ0F2RCxVQUFLOEIsU0FBTCxDQUFla0IsTUFBZjtBQUNIO0FBQ0o7O0FBRURqRCxTQUFNcUQsT0FBTixDQUFjLGFBQWQsRUFBNkJELE9BQTdCOztBQUVBLFVBQU8sSUFBUDtBQUNILEdBbkpFOztBQXFKSE0saUJBQWUseUJBQ2xCO0FBQ0NoRSxXQUFRLElBQVI7O0FBRUFyQixLQUFFQyxTQUFTQyxPQUFYLEVBQW9Cb0YsRUFBcEIsQ0FBdUIsaUJBQXZCLEVBQTBDLFVBQVNDLENBQVQsRUFBWTtBQUNyRCxRQUFJLENBQUN2RixFQUFFdUYsRUFBRUMsTUFBSixFQUFZQyxPQUFaLENBQW9CeEYsU0FBU0UsVUFBN0IsRUFBeUN5QyxNQUExQyxJQUFvRCxDQUFDNUMsRUFBRXVGLEVBQUVDLE1BQUosRUFBWUUsUUFBWixDQUFxQnpGLFNBQVNHLFlBQVQsQ0FBc0J1RixNQUF0QixDQUE2QixDQUE3QixDQUFyQixDQUFyRCxJQUE4RyxDQUFDM0YsRUFBRXVGLEVBQUVDLE1BQUosRUFBWUMsT0FBWixDQUFvQnhGLFNBQVNHLFlBQTdCLEVBQTJDd0MsTUFBOUosRUFDQTtBQUNGdkIsV0FBTWUsS0FBTjtBQUNHO0FBQ0UsSUFMSjtBQU9HLEdBaEtFOztBQWtLSHdELFNBQU8saUJBQ1A7QUFDQ3ZFLFdBQVEsSUFBUjs7QUFFTk0sU0FBTTJELEVBQU4sQ0FBUyxPQUFULEVBQWtCckYsU0FBU0ssVUFBM0IsRUFBdUMsVUFBU2lGLENBQVQsRUFBWTtBQUN6Q0EsTUFBRU0sY0FBRixHQUFtQk4sRUFBRU0sY0FBRixFQUFuQixHQUF3Q04sRUFBRU8sV0FBRixHQUFnQixLQUF4RDtBQUNBekUsVUFBTWUsS0FBTjtBQUNILElBSFA7O0FBS0EsT0FBSW5DLFNBQVNlLFFBQWIsRUFDQTtBQUNDVyxVQUFNMkQsRUFBTixDQUFTLGtCQUFULEVBQTZCLFVBQVNDLENBQVQsRUFBWTtBQUN4QyxTQUFHQSxFQUFFUSxPQUFGLElBQWEsRUFBaEIsRUFBb0I7QUFDUDFFLFlBQU1lLEtBQU47QUFDSDtBQUNKLEtBSlA7QUFLQTs7QUFFSyxPQUFJbkMsU0FBU08sT0FBVCxDQUFpQkMsTUFBakIsSUFBMkJSLFNBQVNVLGlCQUF4QyxFQUNBO0FBQ0xYLE1BQUVDLFNBQVNPLE9BQVQsQ0FBaUJFLE9BQW5CLEVBQTRCNEUsRUFBNUIsQ0FBK0IsT0FBL0IsRUFBd0MsWUFBVztBQUN6Q2pFLFdBQU1lLEtBQU47QUFDQSxLQUZWO0FBR007O0FBRURSLFFBQUswRCxFQUFMLENBQVEsY0FBUixFQUF3QixZQUFXO0FBQy9CVSxpQkFBYTdELGFBQWI7O0FBRUdBLG9CQUFnQkcsV0FBVyxZQUFXOztBQUVsQ1gsV0FBTThDLElBQU4sQ0FBVyxnQkFBWCxFQUE2QndCLElBQTdCLENBQWtDLFlBQVc7QUFDNUMsVUFBSSxDQUFDaEcsU0FBU1csV0FBZCxFQUNUO0FBQ1VTLGFBQU1rRCxlQUFOLENBQXNCdkUsRUFBRSxJQUFGLENBQXRCO0FBQ0E7O0FBRURxQixZQUFNbUQsWUFBTixDQUFtQnhFLEVBQUUsSUFBRixDQUFuQjtBQUNILE1BUEU7QUFTSCxLQVhlLEVBV2IsR0FYYSxDQUFoQjtBQVlOLElBZkQ7O0FBaUJBLFVBQU8sSUFBUDtBQUNOLEdBN01ROztBQStNSGtHLFFBQU0sY0FBU3hELFFBQVQsRUFBbUJsQyxPQUFuQixFQUE0QkssU0FBNUIsRUFDTjtBQUNJLE9BQUk4QixTQUFTLElBQWI7QUFDSHRCLFdBQVEsSUFBUjs7QUFFQSxPQUFJLE9BQU9xQixRQUFQLEtBQW9CLFdBQXBCLElBQW1DQSxhQUFhLEVBQXBELEVBQ047QUFDQyxRQUFJeUQsT0FBT0EsUUFBUSxFQUFuQjtBQUFBLFFBQXVCckQsT0FBTyxFQUE5QjtBQUFBLFFBQWtDSCxNQUFsQzs7QUFFQSxRQUFJOUIsU0FBSixFQUNBO0FBQ0NjLFdBQU0rQyxRQUFOLENBQWUsWUFBZjtBQUNBOztBQUVELFFBQUksUUFBT2hDLFFBQVAseUNBQU9BLFFBQVAsTUFBbUIsUUFBdkIsRUFDTTtBQUNDQyxjQUFTM0MsRUFBRTBDLFFBQUYsQ0FBVDtBQUNBLEtBSFAsTUFLTTtBQUNDLFNBQUkxQyxFQUFFLE1BQUkwQyxRQUFOLEVBQWdCZ0QsUUFBaEIsQ0FBeUIsT0FBekIsQ0FBSixFQUNOO0FBQ0MvQyxlQUFTM0MsRUFBRSxNQUFJMEMsUUFBTixDQUFUO0FBQ0EsTUFISyxNQUlELElBQUkxQyxFQUFFLE1BQUkwQyxRQUFOLEVBQWdCRSxNQUFoQixJQUEwQjVDLEVBQUUsTUFBSTBDLFFBQU4sRUFBZ0IwRCxHQUFoQixDQUFvQixDQUFwQixFQUF1QkMsT0FBdkIsSUFBa0MsUUFBNUQsSUFBd0VyRyxFQUFFLE1BQUkwQyxRQUFOLEVBQWdCMEQsR0FBaEIsQ0FBb0IsQ0FBcEIsRUFBdUJDLE9BQXZCLElBQWtDLFVBQTlHLEVBQ0w7QUFDQzFELGVBQVMzQyxFQUFFaUIsU0FBU3lCLFFBQVQsRUFBbUJ5RCxJQUFuQixDQUFGLENBQVQ7QUFDQXhELGFBQU8rQixRQUFQLENBQWdCLE1BQWhCOztBQUVBL0MsWUFBTTJFLE1BQU4sQ0FBYTNELE1BQWI7QUFDQTtBQUNLOztBQUVLLFFBQUlBLE1BQUosRUFDQTtBQUNJQSxZQUFPK0IsUUFBUCxDQUFnQixpQkFBaEI7O0FBRUEsU0FBSSxDQUFDekUsU0FBU1csV0FBZCxFQUNBO0FBQ0krQixhQUFPa0IsR0FBUCxDQUFXeEMsTUFBTXdCLFlBQU4sQ0FBbUJGLE1BQW5CLENBQVg7QUFDSDs7QUFFRCxTQUFJbkMsT0FBSixFQUFhO0FBQ1RSLFFBQUVDLFNBQVNPLE9BQVQsQ0FBaUJFLE9BQW5CLEVBQTRCZ0UsUUFBNUIsQ0FBcUMsU0FBckM7O0FBRUFwQyxpQkFBVyxZQUFVO0FBQ2pCdEMsU0FBRUMsU0FBU08sT0FBVCxDQUFpQkUsT0FBbkIsRUFBNEJnRSxRQUE1QixDQUFxQyxTQUFyQztBQUNILE9BRkQsRUFFRyxFQUZIO0FBR0gsTUFORCxNQU9LO0FBQ0QsV0FBS1csYUFBTDtBQUNIOztBQUVEaEUsV0FBTW1ELFlBQU4sQ0FBbUI3QixNQUFuQjs7QUFFQUwsZ0JBQVcsWUFBVTtBQUNqQkssYUFBTytCLFFBQVAsQ0FBZ0IsU0FBaEI7QUFDQS9DLFlBQU1xRCxPQUFOLENBQWMsa0JBQWQsRUFBa0NyQyxNQUFsQzs7QUFFQUwsaUJBQVcsWUFBVTtBQUNqQkssY0FBT2UsU0FBUCxDQUFpQixDQUFqQjtBQUNILE9BRkQsRUFFRyxFQUZIOztBQUlBLFVBQUlsQyxPQUFPb0IsTUFBWCxFQUNBO0FBQ0lqQixhQUFNcUQsT0FBTixDQUFjLG1CQUFkLEVBQW1DLEVBQUUzRCxPQUFPc0IsTUFBVCxFQUFpQm5CLFFBQVFBLE1BQXpCLEVBQW5DO0FBQ0g7QUFDSixNQVpELEVBWUcsRUFaSDs7QUFjQUcsV0FBTXFELE9BQU4sQ0FBYyxZQUFkLEVBQTRCckMsTUFBNUI7QUFDSDtBQUNiOztBQUVELFVBQU8sSUFBUDtBQUNNLEdBelJFOztBQTJSSDRELFVBQVEsZ0JBQVN2QixPQUFULEVBQ1I7QUFDQzNELFdBQVEsSUFBUjs7QUFFQU0sU0FBTTJELEVBQU4sQ0FBUyxPQUFULEVBQWtCTixPQUFsQixFQUEyQixVQUFTTyxDQUFULEVBQVk7QUFDdEMsUUFBSS9FLFVBQVVQLFNBQVNPLE9BQVQsQ0FBaUJDLE1BQS9CO0FBQUEsUUFBdUNJLFlBQVlaLFNBQVNZLFNBQTVEO0FBQUEsUUFBdUVILE9BQXZFOztBQUVBLFFBQUlWLEVBQUUsZ0JBQUYsRUFBb0I0QyxNQUF4QixFQUNBO0FBQ0NqQixXQUFNcUQsT0FBTixDQUFjLG1CQUFkLEVBQW1DaEYsRUFBRSxnQkFBRixDQUFuQztBQUNBOztBQUVQLFFBQUksQ0FBQ0MsU0FBU2MsVUFBZCxFQUNBO0FBQ0N3RSxPQUFFTSxjQUFGLEdBQW1CTixFQUFFTSxjQUFGLEVBQW5CLEdBQXdDTixFQUFFTyxXQUFGLEdBQWdCLEtBQXhEO0FBQ0E7O0FBRUQsUUFBSSxPQUFPOUYsRUFBRSxJQUFGLEVBQVFtRyxJQUFSLENBQWEsV0FBYixDQUFQLEtBQXNDLFdBQTFDLEVBQ0E7QUFDQ3RGLGlCQUFZYixFQUFFLElBQUYsRUFBUW1HLElBQVIsQ0FBYSxXQUFiLENBQVo7QUFDQTs7QUFFRCxRQUFJLE9BQU9uRyxFQUFFLElBQUYsRUFBUW1HLElBQVIsQ0FBYSxTQUFiLENBQVAsS0FBb0MsV0FBeEMsRUFDQTtBQUNDM0YsZUFBVVIsRUFBRSxJQUFGLEVBQVFtRyxJQUFSLENBQWEsU0FBYixDQUFWO0FBQ0E7O0FBRUQsUUFBSW5HLEVBQUUsSUFBRixFQUFRbUcsSUFBUixDQUFhLE9BQWIsQ0FBSixFQUNZO0FBQ0l6RixlQUFVVixFQUFFLElBQUYsRUFBUW1HLElBQVIsQ0FBYSxPQUFiLENBQVY7QUFDSCxLQUhiLE1BSUssSUFBSW5HLEVBQUUsSUFBRixFQUFRK0QsSUFBUixDQUFhLE1BQWIsQ0FBSixFQUNPO0FBQ0lyRCxlQUFVVixFQUFFLElBQUYsRUFBUStELElBQVIsQ0FBYSxNQUFiLENBQVY7QUFDSDs7QUFFYjFDLFVBQU1tRixJQUFOLENBQVc5RixPQUFYLEVBQW9CRixPQUFwQixFQUE2QkssU0FBN0I7O0FBRUEsUUFBSSxPQUFPYixFQUFFLElBQUYsRUFBUW1HLElBQVIsQ0FBYSxZQUFiLENBQVAsS0FBdUMsV0FBM0MsRUFDQTtBQUNDLFlBQU9uRyxFQUFFLElBQUYsRUFBUW1HLElBQVIsQ0FBYSxZQUFiLENBQVA7QUFDQTtBQUNELElBdENLOztBQXdDTixVQUFPLElBQVA7QUFDQSxHQXhVUTs7QUEwVVRLLFFBQU0sY0FBUzlELFFBQVQsRUFBbUJsQyxPQUFuQixFQUE0QkssU0FBNUIsRUFDTjtBQUNDUSxXQUFRLElBQVI7O0FBRUEsT0FBSSxPQUFPcUIsUUFBUCxLQUFxQixXQUFyQixJQUFvQ0EsU0FBU0UsTUFBVCxHQUFrQixDQUF0RCxJQUEyREYsU0FBU2lELE1BQVQsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsTUFBMEIsR0FBekYsRUFDQTtBQUNDakQsZUFBVyxNQUFNQSxRQUFqQjtBQUNBOztBQUVEbkIsVUFBTyxJQUFQLEVBQWFTLGlCQUFpQixJQUE5QixFQUFvQ1IsU0FBUyxFQUE3Qzs7QUFFQSxPQUFJLE9BQU9rQixRQUFQLElBQW1CLFdBQW5CLElBQWtDekMsU0FBU2MsVUFBM0MsSUFBeURjLE9BQU9xRCxRQUFQLENBQWdCQyxJQUFoQixDQUFxQnZDLE1BQXJCLEdBQThCLENBQTNGLEVBQ0E7QUFDQ3JCLFdBQU9NLE9BQU9xRCxRQUFQLENBQWdCQyxJQUF2QjtBQUNBLElBSEQsTUFJSyxJQUFJLE9BQU96QyxRQUFQLEtBQW9CLFdBQXhCLEVBQ0w7QUFDQyxRQUFJQSxTQUFTaUQsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQixLQUF5QixHQUE3QixFQUNBO0FBQ0NwRSxZQUFPbUIsUUFBUDtBQUNBO0FBQ0Q7O0FBRUQsT0FBSW5CLFNBQVMsSUFBVCxJQUFpQkEsS0FBS2tGLE9BQUwsQ0FBYSxHQUFiLEtBQXFCLENBQTFDLEVBQ0E7QUFDQ2pGLGFBQVNELEtBQUttRixLQUFMLENBQVcsR0FBWCxDQUFUO0FBQ0E7O0FBRUR4RSxlQUFZLEtBQVo7QUFDQVEsY0FBV25CLElBQVg7O0FBRUEsT0FBSUMsT0FBT29CLE1BQVgsRUFDQTtBQUNDVixnQkFBWSxJQUFaO0FBQ0FRLGVBQVdsQixPQUFPLENBQVAsQ0FBWDtBQUNBQSxhQUFTQSxPQUFPbUYsS0FBUCxDQUFhLENBQWIsQ0FBVDtBQUNBOztBQUVELE9BQUksT0FBT2pFLFFBQVAsS0FBb0IsV0FBcEIsSUFBbUNBLGFBQWEsSUFBcEQsRUFDQTtBQUNPLFFBQUlBLFNBQVNpRCxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CLEtBQXlCLEdBQTdCLEVBQ047QUFDQ2pELGdCQUFXQSxTQUFTaUQsTUFBVCxDQUFnQixDQUFoQixDQUFYO0FBQ0E7O0FBRUQsUUFBSTNGLEVBQUUsZ0JBQUYsRUFBb0I0QyxNQUF4QixFQUNBO0FBQ0NaLHNCQUFpQmhDLEVBQUUsZ0JBQUYsRUFBb0IrRCxJQUFwQixDQUF5QixJQUF6QixDQUFqQjs7QUFFQSxTQUFLN0IsYUFBYSxDQUFDVixPQUFPb0IsTUFBdEIsSUFBa0NGLGFBQWFWLGNBQW5ELEVBQ0E7QUFDQ1gsWUFBTWUsS0FBTixDQUFZcEMsRUFBRSxnQkFBRixDQUFaO0FBQ0EsTUFIRCxNQUtBO0FBQ0NBLFFBQUU0RyxHQUFGLENBQU1DLElBQU4sQ0FBV0MsT0FBWCxDQUFtQkMsS0FBbkIsQ0FBeUIxRixLQUF6QixFQUFnQ0csTUFBaEM7QUFDQTtBQUNEOztBQUVELFFBQUl4QixFQUFFLFVBQVUwQyxRQUFaLEVBQXNCRSxNQUExQixFQUNBO0FBQ0NGLGdCQUFXLFNBQU9BLFFBQWxCO0FBQ0E7O0FBRVcsUUFBSTFDLEVBQUUsV0FBVzBDLFFBQWIsRUFBdUJFLE1BQTNCLEVBQ0E7QUFDSUYsZ0JBQVcsVUFBUUEsUUFBbkI7QUFDSDs7QUFFYixRQUFJLE9BQU9sQyxPQUFQLElBQWtCLFdBQXRCLEVBQ0E7QUFDQ0EsZUFBVVAsU0FBU08sT0FBVCxDQUFpQkMsTUFBM0I7QUFDQTs7QUFFRCxRQUFJLE9BQU9JLFNBQVAsSUFBb0IsV0FBeEIsRUFDQTtBQUNDQSxpQkFBWVosU0FBU1ksU0FBckI7QUFDQTs7QUFFRCxRQUFJYixFQUFFLE1BQUkwQyxRQUFOLEVBQWdCZ0QsUUFBaEIsQ0FBeUIsT0FBekIsS0FDYTFGLEVBQUUsTUFBSTBDLFFBQU4sRUFBZ0JFLE1BQWhCLElBQTBCNUMsRUFBRSxNQUFJMEMsUUFBTixFQUFnQjBELEdBQWhCLENBQW9CLENBQXBCLEVBQXVCQyxPQUF2QixJQUFrQyxRQUR6RSxJQUVhckcsRUFBRSxNQUFJMEMsUUFBTixFQUFnQkUsTUFBaEIsSUFBMEI1QyxFQUFFLE1BQUkwQyxRQUFOLEVBQWdCMEQsR0FBaEIsQ0FBb0IsQ0FBcEIsRUFBdUJDLE9BQXZCLElBQWtDLFVBRjdFLEVBR0E7QUFDQ2hGLFdBQU02RSxJQUFOLENBQVd4RCxRQUFYLEVBQXFCbEMsT0FBckIsRUFBOEJLLFNBQTlCO0FBQ0E7QUFDRDs7QUFFRSxVQUFPLElBQVA7QUFDSCxHQWxhUTs7QUFvYU5PLGdCQUFjLHNCQUFTNEYsS0FBVCxFQUFnQkMsSUFBaEIsRUFDZDtBQUNDNUYsV0FBUSxJQUFSOztBQUVBMkUsZ0JBQWEvRCxjQUFiOztBQUVNLE9BQUksQ0FBQ04sTUFBTThDLElBQU4sQ0FBVywyQkFBWCxFQUF3QzdCLE1BQTdDLEVBQ0E7QUFDQ3RCLFdBQU90QixFQUFFaUIsU0FBU2hCLFNBQVNnQixRQUFULENBQWtCRyxZQUEzQixFQUF5QyxFQUFFLFNBQVM0RixLQUFYLEVBQWtCLFFBQVFDLElBQTFCLEVBQXpDLENBQUYsQ0FBUDs7QUFFQTNGLFNBQUtvRCxRQUFMLENBQWMsTUFBZDtBQUNBcEQsU0FBS3lDLElBQUwsQ0FBVSxJQUFWLEVBQWdCLDBCQUFoQjs7QUFFR3BDLFVBQU0yRSxNQUFOLENBQWFoRixJQUFiOztBQUVBRCxVQUFNNkUsSUFBTixDQUFXNUUsSUFBWCxFQUFpQixLQUFqQixFQUF3QixLQUF4QjtBQUNIOztBQUVEVyxvQkFBaUJLLFdBQVcsWUFBVTs7QUFFbENoQixTQUFLZSxXQUFMLENBQWlCLFNBQWpCOztBQUVBQyxlQUFXLFlBQVU7O0FBRWpCaEIsVUFBS2tCLE1BQUw7QUFFSCxLQUpELEVBSUcsR0FKSDtBQU1ILElBVmdCLEVBVWQsSUFWYyxDQUFqQjtBQVdOLEdBamNLOztBQW1jTnJCLFdBQVMsaUJBQVM2RixLQUFULEVBQWdCQyxJQUFoQixFQUFzQkMsR0FBdEIsRUFDVDtBQUNDN0YsV0FBUSxJQUFSOztBQUVHLE9BQUlFLE9BQU92QixFQUFFaUIsU0FBU2hCLFNBQVNnQixRQUFULENBQWtCRSxPQUEzQixFQUFvQyxFQUFDLFNBQVM2RixLQUFWLEVBQWlCLFFBQVFDLElBQXpCLEVBQStCLE9BQU9DLE9BQU8sSUFBN0MsRUFBcEMsQ0FBRixDQUFYOztBQUVBM0YsUUFBS21ELFFBQUwsQ0FBYyxNQUFkOztBQUVBL0MsU0FBTTJFLE1BQU4sQ0FBYS9FLElBQWI7O0FBRUFBLFFBQUtzQyxHQUFMLENBQVMsS0FBS2hCLFlBQUwsQ0FBa0J0QixJQUFsQixDQUFUOztBQUVHRixTQUFNZSxLQUFOLENBQVlULE1BQU04QyxJQUFOLENBQVcsZ0JBQVgsQ0FBWixFQUEwQyxZQUFXO0FBQ2pEcEQsVUFBTTZFLElBQU4sQ0FBVzNFLElBQVg7QUFDSCxJQUZEO0FBR04sR0FsZEs7O0FBb2ROTCxTQUFPLGVBQVM4RixLQUFULEVBQWdCQyxJQUFoQixFQUNQO0FBQ0M1RixXQUFRLElBQVI7O0FBRUcsT0FBSUUsT0FBT3ZCLEVBQUVpQixTQUFTaEIsU0FBU2dCLFFBQVQsQ0FBa0JDLEtBQTNCLEVBQWtDLEVBQUUsU0FBUzhGLEtBQVgsRUFBa0IsUUFBUUMsSUFBMUIsRUFBbEMsQ0FBRixDQUFYOztBQUVBMUYsUUFBS21ELFFBQUwsQ0FBYyxNQUFkOztBQUVBL0MsU0FBTTJFLE1BQU4sQ0FBYS9FLElBQWI7O0FBRUFBLFFBQUtzQyxHQUFMLENBQVMsS0FBS2hCLFlBQUwsQ0FBa0J0QixJQUFsQixDQUFUOztBQUVBRixTQUFNZSxLQUFOLENBQVlULE1BQU04QyxJQUFOLENBQVcsZ0JBQVgsQ0FBWixFQUEwQyxZQUFXO0FBQzlDcEQsVUFBTTZFLElBQU4sQ0FBVzNFLElBQVg7QUFDSCxJQUZKO0FBR0gsR0FuZUs7O0FBcWVINEYsUUFBTSxjQUFTbkMsT0FBVCxFQUFrQm9DLE9BQWxCLEVBQ047QUFDQ25ILFlBQVNHLFlBQVQsR0FBd0I0RSxPQUF4Qjs7QUFFQSxPQUFJLE9BQU9vQyxPQUFQLEtBQW1CLFdBQXZCLEVBQ0E7QUFDQyxTQUFLLElBQUlDLENBQVQsSUFBY0QsT0FBZCxFQUNBO0FBQ0MsU0FBSSxPQUFPbkgsU0FBU29ILENBQVQsQ0FBUCxLQUF1QixXQUEzQixFQUNBO0FBQ0NwSCxlQUFTb0gsQ0FBVCxJQUFjRCxRQUFRQyxDQUFSLENBQWQ7QUFDQTtBQUNEO0FBQ0Q7O0FBRUQsUUFBS2IsSUFBTDtBQUNOLFFBQUtELE1BQUwsQ0FBWXZCLE9BQVo7QUFDQSxRQUFLWSxLQUFMO0FBQ0E7QUF2ZlEsRUFBVjtBQTBmQSxDQTdpQkEsRUE2aUJFMEIsTUE3aUJGIiwiZmlsZSI6Il9wb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4kLnBvcHVwLmluaXQoJy50cmlnZ2VyLXBvcHVwJyk7XG4kLnBvcHVwLm9wZW4oJ3BvcHVwLWNob29zZS1waG90by1zb3VyY2UnKTtcbiQucG9wdXAub3BlbigncG9wdXAtY2hvb3NlLXBob3RvLXNvdXJjZS9uZXN0ZWQtdGFiJyk7XG4qL1xuXG47KGZ1bmN0aW9uKCQpIHtcblx0XCJ1c2Ugc3RyaWN0XCI7XG5cdFxuXHR2YXIgZGVmYXVsdHMgPSB7XG5cdFx0d3JhcHBlcjogJ2JvZHknLFxuXHRcdHBvcHVwQ2xhc3M6ICcucG9wdXAnLFxuXHRcdHRyaWdnZXJDbGFzczogJy5qLW9wZW4tcG9wdXAnLFxuXHRcdGRpYWxvZ0NsYXNzOiAnLmotcG9wdXAtZGlhbG9nJyxcblx0XHRjbG9zZUNsYXNzOiAnLmotcG9wdXAtY2xvc2UnLFxuXHRcdHNwZWVkOiA1NTAsXG5cdFx0b3ZlcmxheToge1xuXHRcdFx0ZW5hYmxlOiAhMCxcblx0XHRcdGVsZW1lbnQ6ICcjb3ZlcmxheSdcblx0XHR9LFxuXHRcdG92ZXJsYXlDbGlja0Nsb3NlOiAhMCxcblx0XHRjc3NQb3NpdGlvbjogITAsXG5cdFx0Ym9keWNsYXNzOiAhMCxcblx0XHRoYXNoQ2hlY2s6ICEwLFxuXHRcdGhhc2hDaGFuZ2U6ICEwLFxuXHRcdGtleUhvb2tzOiAhMCxcblx0XHR0ZW1wbGF0ZToge1xuXHRcdFx0ZXJyb3I6ICd0bXBsLXBvcHVwLWVycm9yJyxcblx0XHRcdG1lc3NhZ2U6ICd0bXBsLXBvcHVwLW1lc3NhZ2UnLFxuXHRcdFx0bm90aWZpY2F0aW9uOiAndG1wbC1ub3RpZmljYXRpb24nXG5cdFx0fVxuXHR9LFxuXHRwb3B1cCA9IG51bGwsXG5cdG5vdHkgPSBudWxsLFxuXHR0ZW1wID0gbnVsbCxcblx0bmVzdGVkID0gW10sXG5cdCRkaWFsb2cgPSAnJyxcblx0JHRyaWdnZXIgPSAnJyxcblx0JGJvZHkgPSAkKCdib2R5JyksXG5cdCR3aW4gPSAkKHdpbmRvdyksIFxuXHQkZG9jID0gJChkb2N1bWVudCksXG5cdHNlbGVjdG9yX2NhY2hlLFxuXHRub3RpZnlfdGltZW91dCxcblx0aXNfbmVzdGVkLFxuXHRyZXNpemVUaW1lb3V0O1xuXG5cdCQub3ZlcmxheSA9IHtcblx0XHRjbG9zZTogZnVuY3Rpb24oKSB7XG5cdFx0XHQkKGRlZmF1bHRzLm92ZXJsYXkuZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcblxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgXHQkKGRlZmF1bHRzLm92ZXJsYXkuZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ3Zpc2libGUgaXMtb3BlbicpO1xuICAgICAgICAgICAgXHQkKGRlZmF1bHRzLm92ZXJsYXkuZWxlbWVudCkuZmlsdGVyKCcudGVtcCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSwgZGVmYXVsdHMuc3BlZWQpO1xuXHRcdH1cblx0fTtcblx0XG5cdCQucG9wdXAgPSB7XG4gICAgICAgIF9nZXRQb3B1cDogZnVuY3Rpb24oc2VsZWN0b3IpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciAkcG9wdXA7XG5cbiAgICAgICAgICAgIGlmKHR5cGVvZihzZWxlY3RvcikgPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZWN0b3I7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICRwb3B1cCA9ICQoJyMnK3NlbGVjdG9yKTtcblxuICAgICAgICAgICAgcmV0dXJuICRwb3B1cC5sZW5ndGggPyAkcG9wdXAgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgX2dldFBvc2l0aW9uOiBmdW5jdGlvbigkcG9wdXApIFxuICAgICAgICB7XG4gICAgICAgIFx0cG9wdXAgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAoIWRlZmF1bHRzLmNzc1Bvc2l0aW9uKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuXHRcdFx0dmFyIHByb3AgPSB7fSxcblx0XHRcdFx0d3cgPSAkd2luLndpZHRoKCksXG4gICAgICAgICAgICAgICAgd2ggPSAkd2luLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGR3ID0gJGRvYy53aWR0aCgpLFxuICAgICAgICAgICAgICAgIGRoID0gJGRvYy5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBwdyA9ICRwb3B1cC5vdXRlcldpZHRoKCksXG4gICAgICAgICAgICAgICAgcGggPSAkcG9wdXAub3V0ZXJIZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBzdCA9ICR3aW4uc2Nyb2xsVG9wKCksXG5cbiAgICAgICAgICAgICAgICBsZWZ0ID0gMCxcbiAgICAgICAgICAgICAgICB0b3AgPSAwLFxuICAgICAgICAgICAgICAgIGNzcyA9IHt9LFxuXG4gICAgICAgICAgICAgICAgcG9zVHlwZSA9ICRwb3B1cC5hdHRyKCdkYXRhLXBvc2l0aW9uJyksXG5cbiAgICAgICAgICAgICAgICAkcmVhbFdyYXBwZXIgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihkdyA+PSBwdykge1xuICAgICAgICAgICAgICAgIGxlZnQgPSBNYXRoLnJvdW5kKChkdyAtIHB3KS8yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYod2ggPj0gcGgpIHtcbiAgICAgICAgICAgICAgICBjc3MucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICAgICAgICAgIHRvcCA9ICc1MCUnO1xuICAgICAgICAgICAgICAgIGNzcy5tYXJnaW5Ub3AgPSAnLScgKyBNYXRoLmNlaWwoIHBoIC8gMiApICsgJ3B4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgXHRjc3MucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIHRvcCA9IHN0K01hdGgucm91bmQoKHdoIC0gcGgpLzIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjc3MudG9wID0gdG9wO1xuXG4gICAgICAgICAgICBpZihwb3NUeXBlID09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgICBjc3MucmlnaHQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3NzLmxlZnQgPSBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY3NzO1xuXHRcdH0sXG4gICAgICAgIFxuICAgICAgICBfY2hhbmdlUG9zaXRpb246IGZ1bmN0aW9uKHNlbGVjdG9yKVxuICAgICAgICB7XG5cdFx0XHR2YXIgJHBvcHVwID0gdGhpcy5fZ2V0UG9wdXAoc2VsZWN0b3IpO1xuXG5cdFx0XHRpZiAoIWRlZmF1bHRzLmNzc1Bvc2l0aW9uKVxuXHRcdFx0e1xuXHRcdFx0XHQkcG9wdXAuY3NzKHRoaXMuX2dldFBvc2l0aW9uKCRwb3B1cCkpO1xuXHRcdFx0fVxuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgX2NoZWNrU2Nyb2xsOiBmdW5jdGlvbihwb3B1cClcbiAgICAgICAge1xuICAgICAgICBcdCRkaWFsb2cgPSAkKHBvcHVwKS5maW5kKGRlZmF1bHRzLmRpYWxvZ0NsYXNzKTtcblxuICAgICAgICBcdGlmICgkZGlhbG9nLm91dGVySGVpZ2h0KCkgPiAkd2luLmhlaWdodCgpKVxuICAgICAgICBcdHtcbiAgICAgICAgXHRcdCRkaWFsb2cuYWRkQ2xhc3MoJ2lzLXNjcm9sbGluZycpXG4gICAgXHRcdH1cbiAgICBcdFx0ZWxzZSB7XG4gICAgXHRcdFx0JGRpYWxvZy5yZW1vdmVDbGFzcygnaXMtc2Nyb2xsaW5nJylcbiAgICBcdFx0fVxuICAgICAgICB9LFxuXG5cdFx0Y2xvc2U6IGZ1bmN0aW9uKGVsZW1lbnQsIGNhbGxiYWNrKVxuXHRcdHtcblx0XHRcdHBvcHVwID0gdGhpcztcblxuXHRcdFx0dmFyIHNjcm9sbCA9IDAsIGNiID0gZmFsc2UsIGlzX25hdGl2ZSA9IHRydWUsICRwb3B1cHM7XG5cblx0XHRcdCRwb3B1cHMgPSAkYm9keS5maW5kKCcucG9wdXAuaXMtb3BlbicpO1xuXG5cdFx0XHRpZiAodHlwZW9mIGVsZW1lbnQgIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0e1xuXHRcdFx0XHQkcG9wdXBzID0gJChlbGVtZW50KTtcblx0XHRcdFx0aXNfbmF0aXZlID0gZmFsc2U7XG5cdFx0XHR9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBcdGNiID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuXHRcdFx0JGJvZHkudHJpZ2dlcigncG9wdXAuYmVmb3JlX2Nsb3NlJywgJHBvcHVwcyk7XG5cbiAgICAgICAgICAgIGlmIChkZWZhdWx0cy5vdmVybGF5LmVuYWJsZSAmJiBpc19uYXRpdmUpIHtcblx0XHRcdFx0JC5vdmVybGF5LmNsb3NlKCk7XG5cdCAgICAgICAgfTtcblxuICAgICAgICAgICAgJChkZWZhdWx0cy53cmFwcGVyKS5vZmYoJ2NsaWNrLndyYXBDbG9zZScpO1xuXG4gICAgICAgICAgICAkcG9wdXBzLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFx0JHBvcHVwcy5yZW1vdmVDbGFzcygndmlzaWJsZSBpcy1vcGVuJyk7XG4gICAgICAgICAgICBcdCRwb3B1cHMuZmlsdGVyKCcudGVtcCcpLnJlbW92ZSgpO1xuICAgICAgICAgICAgXHQkYm9keS50cmlnZ2VyKCdwb3B1cC5hZnRlcl9jbG9zZScsICRwb3B1cHMpO1xuXG4gICAgICAgICAgICBcdGlmIChjYikge1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaGFzaCA9ICcnO1xuXHRcdCAgICAgICAgICAgIFx0Y2FsbGJhY2suYXBwbHkoKTtcblx0XHQgICAgICAgICAgICB9LCAxMCk7XG5cdCAgICAgICAgICAgXHR9XG4gICAgICAgICAgICB9LCBkZWZhdWx0cy5zcGVlZCk7XG5cbiAgICAgICAgICAgIGlmICghY2IgJiYgaXNfbmF0aXZlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICRib2R5LnJlbW92ZUNsYXNzKCdwb3B1cC1vcGVuJyk7XG5cbiAgICAgICAgICAgICAgICBpZihkZWZhdWx0cy5oYXNoQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbCA9ICR3aW4uc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICR3aW4uc2Nyb2xsVG9wKHNjcm9sbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdwb3B1cC5jbG9zZScsICRwb3B1cHMpO1xuXHRcdFxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdFdyYXBDbG9zZTogZnVuY3Rpb24oKVxuICAgIFx0e1xuICAgIFx0XHRwb3B1cCA9IHRoaXM7XG5cbiAgICBcdFx0JChkZWZhdWx0cy53cmFwcGVyKS5vbignY2xpY2sud3JhcENsb3NlJywgZnVuY3Rpb24oZSkge1xuICAgIFx0XHRcdGlmICghJChlLnRhcmdldCkuY2xvc2VzdChkZWZhdWx0cy5wb3B1cENsYXNzKS5sZW5ndGggJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKGRlZmF1bHRzLnRyaWdnZXJDbGFzcy5zdWJzdHIoMSkpICYmICEkKGUudGFyZ2V0KS5jbG9zZXN0KGRlZmF1bHRzLnRyaWdnZXJDbGFzcykubGVuZ3RoKVxuICAgIFx0XHRcdHtcblx0XHRcdFx0XHRwb3B1cC5jbG9zZSgpO1xuXHQgICAgXHRcdH1cblx0ICAgICAgICB9KTtcblxuICAgICAgICB9LFxuXG4gICAgICAgIGhvb2tzOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgXHRwb3B1cCA9IHRoaXM7XG4gICAgICAgIFx0XG5cdFx0XHQkYm9keS5vbignY2xpY2snLCBkZWZhdWx0cy5jbG9zZUNsYXNzLCBmdW5jdGlvbihlKSB7XG5cdCAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cdCAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG5cdCAgICAgICAgfSk7XG5cblx0XHRcdGlmIChkZWZhdWx0cy5rZXlIb29rcylcblx0XHRcdHtcblx0XHRcdFx0JGJvZHkub24oJ2tleXByZXNzIGtleWRvd24nLCBmdW5jdGlvbihlKSB7XG5cdFx0XHRcdFx0aWYoZS5rZXlDb2RlID09IDI3KSB7XG5cdFx0ICAgICAgICAgICAgICAgIHBvcHVwLmNsb3NlKCk7XG5cdFx0ICAgICAgICAgICAgfVxuXHRcdCAgICAgICAgfSk7XG5cdFx0XHR9O1xuXG5cdCAgICAgICAgaWYgKGRlZmF1bHRzLm92ZXJsYXkuZW5hYmxlICYmIGRlZmF1bHRzLm92ZXJsYXlDbGlja0Nsb3NlKVxuXHQgICAgICAgIHtcblx0XHRcdFx0JChkZWZhdWx0cy5vdmVybGF5LmVsZW1lbnQpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICBcdHBvcHVwLmNsb3NlKCk7XG5cdCAgICAgICAgICAgIH0pO1xuXHQgICAgICAgIH1cblxuXHQgICAgICAgICR3aW4ub24oJ3Jlc2l6ZS5wb3B1cCcsIGZ1bmN0aW9uKCkge1xuXHQgICAgICAgICAgICBjbGVhclRpbWVvdXQocmVzaXplVGltZW91dCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgcmVzaXplVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkYm9keS5maW5kKCcucG9wdXAuaXMtb3BlbicpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIFx0aWYgKCFkZWZhdWx0cy5jc3NQb3NpdGlvbilcbiAgICAgICAgXHRcdFx0XHR7XG5cdCAgICAgICAgICAgICAgICAgICAgXHRwb3B1cC5fY2hhbmdlUG9zaXRpb24oJCh0aGlzKSk7XG5cdCAgICAgICAgICAgICAgICAgICAgfVxuXG5cdCAgICAgICAgICAgICAgICAgICAgcG9wdXAuX2NoZWNrU2Nyb2xsKCQodGhpcykpO1xuXHQgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB9LCAxMDApO1xuXHQgICAgICAgIH0pO1xuXG5cdCAgICAgICAgcmV0dXJuIHRoaXM7XG5cdFx0fSxcblxuICAgICAgICBzaG93OiBmdW5jdGlvbihzZWxlY3Rvciwgb3ZlcmxheSwgYm9keWNsYXNzKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgJHBvcHVwID0gbnVsbDtcbiAgICAgICAgXHRwb3B1cCA9IHRoaXM7XG5cbiAgICAgICAgXHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAndW5kZWZpbmVkJyAmJiBzZWxlY3RvciAhPT0gJycpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBkYXRhID0gZGF0YSB8fCB7fSwgcHJvcCA9IHt9LCAkcG9wdXA7XG5cdFx0XHRcdFxuXHRcdFx0XHRpZiAoYm9keWNsYXNzKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JGJvZHkuYWRkQ2xhc3MoJ3BvcHVwLW9wZW4nKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdFx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PSAnb2JqZWN0Jylcblx0ICAgICAgICBcdHtcblx0ICAgICAgICBcdFx0JHBvcHVwID0gJChzZWxlY3Rvcik7XG5cdCAgICAgICAgXHR9XG5cdCAgICAgICAgXHRlbHNlXG5cdCAgICAgICAgXHR7XG5cdCAgICAgICAgXHRcdGlmICgkKCcjJytzZWxlY3RvcikuaGFzQ2xhc3MoJ3BvcHVwJykpXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0JHBvcHVwID0gJCgnIycrc2VsZWN0b3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlIGlmICgkKCcjJytzZWxlY3RvcikubGVuZ3RoICYmICQoJyMnK3NlbGVjdG9yKS5nZXQoMCkudGFnTmFtZSA9PSAnU0NSSVBUJyB8fCAkKCcjJytzZWxlY3RvcikuZ2V0KDApLnRhZ05hbWUgPT0gJ1RFTVBMQVRFJylcblx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHQkcG9wdXAgPSAkKHRlbXBsYXRlKHNlbGVjdG9yLCBkYXRhKSk7XG5cdFx0XHRcdFx0XHQkcG9wdXAuYWRkQ2xhc3MoJ3RlbXAnKTtcblxuXHRcdFx0XHRcdFx0JGJvZHkuYXBwZW5kKCRwb3B1cCk7XG5cdFx0XHRcdFx0fVxuXHQgICAgICAgIFx0fVxuXG4gICAgICAgICAgICAgICAgaWYgKCRwb3B1cClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICRwb3B1cC5hZGRDbGFzcygndmlzaWJsZSBpcy1vcGVuJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZWZhdWx0cy5jc3NQb3NpdGlvbilcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJHBvcHVwLmNzcyhwb3B1cC5fZ2V0UG9zaXRpb24oJHBvcHVwKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAob3ZlcmxheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChkZWZhdWx0cy5vdmVybGF5LmVsZW1lbnQpLmFkZENsYXNzKCd2aXNpYmxlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKGRlZmF1bHRzLm92ZXJsYXkuZWxlbWVudCkuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFdyYXBDbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcG9wdXAuX2NoZWNrU2Nyb2xsKCRwb3B1cCk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJHBvcHVwLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkYm9keS50cmlnZ2VyKCdwb3B1cC5hZnRlcl9vcGVuJywgJHBvcHVwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRwb3B1cC5zY3JvbGxUb3AoMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXN0ZWQubGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ3BvcHVwLmluaXRfbmVzdGVkJywgeyBwb3B1cDogJHBvcHVwLCBuZXN0ZWQ6IG5lc3RlZCB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xuXG4gICAgICAgICAgICAgICAgICAgICRib2R5LnRyaWdnZXIoJ3BvcHVwLm9wZW4nLCAkcG9wdXApO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHRoaXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xpY2tzOiBmdW5jdGlvbih0cmlnZ2VyKVxuICAgICAgICB7XG4gICAgICAgIFx0cG9wdXAgPSB0aGlzO1xuICAgICAgICBcdFxuICAgICAgICBcdCRib2R5Lm9uKCdjbGljaycsIHRyaWdnZXIsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgXHRcdHZhciBvdmVybGF5ID0gZGVmYXVsdHMub3ZlcmxheS5lbmFibGUsIGJvZHljbGFzcyA9IGRlZmF1bHRzLmJvZHljbGFzcywgZWxlbWVudDtcblxuICAgICAgICBcdFx0aWYgKCQoJy5wb3B1cC5pcy1vcGVuJykubGVuZ3RoKVxuICAgICAgICBcdFx0e1xuICAgICAgICBcdFx0XHQkYm9keS50cmlnZ2VyKCdwb3B1cC5iZWZvcmVfb3BlbicsICQoJy5wb3B1cC5pcy1vcGVuJykpO1xuICAgICAgICBcdFx0fVxuXG5cdFx0XHRcdGlmICghZGVmYXVsdHMuaGFzaENoYW5nZSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodHlwZW9mKCQodGhpcykuZGF0YSgnYm9keWNsYXNzJykpICE9PSAndW5kZWZpbmVkJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGJvZHljbGFzcyA9ICQodGhpcykuZGF0YSgnYm9keWNsYXNzJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAodHlwZW9mKCQodGhpcykuZGF0YSgnb3ZlcmxheScpKSAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRvdmVybGF5ID0gJCh0aGlzKS5kYXRhKCdvdmVybGF5Jyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCdwb3B1cCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9ICQodGhpcykuZGF0YSgncG9wdXAnKTtcbiAgICAgICAgICAgICAgICB9XG5cdFx0XHRcdGVsc2UgaWYgKCQodGhpcykuYXR0cignaHJlZicpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuICAgICAgICAgICAgICAgIH1cblxuXHRcdFx0XHRwb3B1cC5vcGVuKGVsZW1lbnQsIG92ZXJsYXksIGJvZHljbGFzcyk7XG5cblx0XHRcdFx0aWYgKHR5cGVvZigkKHRoaXMpLmRhdGEoJ2hhc2hjaGFuZ2UnKSkgIT09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cmV0dXJuICQodGhpcykuZGF0YSgnaGFzaGNoYW5nZScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fSxcbiAgICAgICAgXG5cdFx0b3BlbjogZnVuY3Rpb24oc2VsZWN0b3IsIG92ZXJsYXksIGJvZHljbGFzcylcblx0XHR7XG5cdFx0XHRwb3B1cCA9IHRoaXM7XG5cblx0XHRcdGlmICh0eXBlb2Yoc2VsZWN0b3IpICE9PSAndW5kZWZpbmVkJyAmJiBzZWxlY3Rvci5sZW5ndGggPiAxICYmIHNlbGVjdG9yLnN1YnN0cigwLCAxKSAhPT0gJyMnKVxuXHRcdFx0e1xuXHRcdFx0XHRzZWxlY3RvciA9ICcjJyArIHNlbGVjdG9yO1xuXHRcdFx0fVxuXG5cdFx0XHR0ZW1wID0gbnVsbCwgc2VsZWN0b3JfY2FjaGUgPSBudWxsLCBuZXN0ZWQgPSBbXTtcblxuXHRcdFx0aWYgKHR5cGVvZiBzZWxlY3RvciA9PSAndW5kZWZpbmVkJyAmJiBkZWZhdWx0cy5oYXNoQ2hhbmdlICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmxlbmd0aCA+IDEpXG5cdFx0XHR7XG5cdFx0XHRcdHRlbXAgPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblx0XHRcdH1cblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBzZWxlY3RvciAhPT0gJ3VuZGVmaW5lZCcpXG5cdFx0XHR7XG5cdFx0XHRcdGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgPT0gJyMnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGVtcCA9IHNlbGVjdG9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRcblx0XHRcdGlmICh0ZW1wICE9PSBudWxsICYmIHRlbXAuaW5kZXhPZignLycpID49IDApXG5cdFx0XHR7XG5cdFx0XHRcdG5lc3RlZCA9IHRlbXAuc3BsaXQoJy8nKTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aXNfbmVzdGVkID0gZmFsc2U7XG5cdFx0XHRzZWxlY3RvciA9IHRlbXA7XG5cdFx0XHRcblx0XHRcdGlmIChuZXN0ZWQubGVuZ3RoKVxuXHRcdFx0e1xuXHRcdFx0XHRpc19uZXN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRzZWxlY3RvciA9IG5lc3RlZFswXTtcblx0XHRcdFx0bmVzdGVkID0gbmVzdGVkLnNsaWNlKDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodHlwZW9mIHNlbGVjdG9yICE9PSAndW5kZWZpbmVkJyAmJiBzZWxlY3RvciAhPT0gbnVsbClcblx0XHRcdHtcbiAgICAgICAgXHRcdGlmIChzZWxlY3Rvci5zdWJzdHIoMCwgMSkgPT0gJyMnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zdWJzdHIoMSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoJCgnLnBvcHVwLmlzLW9wZW4nKS5sZW5ndGgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRzZWxlY3Rvcl9jYWNoZSA9ICQoJy5wb3B1cC5pcy1vcGVuJykuYXR0cignaWQnKTtcblx0XHRcdFx0XG5cdFx0XHRcdFx0aWYgKChpc19uZXN0ZWQgJiYgIW5lc3RlZC5sZW5ndGgpIHx8IChzZWxlY3RvciAhPT0gc2VsZWN0b3JfY2FjaGUpKVxuXHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdHBvcHVwLmNsb3NlKCQoJy5wb3B1cC5pcy1vcGVuJykpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRlbHNlXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0JC5hcHAudGFicy5oYXNoVXJsLmNoZWNrKHBvcHVwLCBuZXN0ZWQpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICgkKCcjdHBsLScgKyBzZWxlY3RvcikubGVuZ3RoKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0c2VsZWN0b3IgPSAndHBsLScrc2VsZWN0b3I7XG5cdFx0XHRcdH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoJCgnI3RtcGwtJyArIHNlbGVjdG9yKS5sZW5ndGgpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3RvciA9ICd0bXBsLScrc2VsZWN0b3I7XG4gICAgICAgICAgICAgICAgfVxuXG5cdFx0XHRcdGlmICh0eXBlb2Ygb3ZlcmxheSA9PSAndW5kZWZpbmVkJylcblx0XHRcdFx0e1xuXHRcdFx0XHRcdG92ZXJsYXkgPSBkZWZhdWx0cy5vdmVybGF5LmVuYWJsZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICh0eXBlb2YgYm9keWNsYXNzID09ICd1bmRlZmluZWQnKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0Ym9keWNsYXNzID0gZGVmYXVsdHMuYm9keWNsYXNzO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCQoJyMnK3NlbGVjdG9yKS5oYXNDbGFzcygncG9wdXAnKSB8fFxuICAgICAgICAgICAgICAgICAgICAoJCgnIycrc2VsZWN0b3IpLmxlbmd0aCAmJiAkKCcjJytzZWxlY3RvcikuZ2V0KDApLnRhZ05hbWUgPT0gJ1NDUklQVCcpIHx8XG4gICAgICAgICAgICAgICAgICAgICgkKCcjJytzZWxlY3RvcikubGVuZ3RoICYmICQoJyMnK3NlbGVjdG9yKS5nZXQoMCkudGFnTmFtZSA9PSAnVEVNUExBVEUnKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHBvcHVwLnNob3coc2VsZWN0b3IsIG92ZXJsYXksIGJvZHljbGFzcyk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XG5cdCAgICBcdHJldHVybiB0aGlzO1xuXHRcdH0sXG5cblx0ICAgIG5vdGlmaWNhdGlvbjogZnVuY3Rpb24odGl0bGUsIHRleHQpXG5cdCAgICB7XG5cdCAgICBcdHBvcHVwID0gdGhpcztcblxuXHQgICAgXHRjbGVhclRpbWVvdXQobm90aWZ5X3RpbWVvdXQpO1xuXG4gICAgICAgICAgICBpZiAoISRib2R5LmZpbmQoJyNhbGVydC1wb3B1cC1ub3RpZmljYXRpb24nKS5sZW5ndGgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICBcdG5vdHkgPSAkKHRlbXBsYXRlKGRlZmF1bHRzLnRlbXBsYXRlLm5vdGlmaWNhdGlvbiwgeyAndGl0bGUnOiB0aXRsZSwgJ3RleHQnOiB0ZXh0IH0gKSk7XG5cbiAgICAgICAgICAgIFx0bm90eS5hZGRDbGFzcygndGVtcCcpO1xuICAgICAgICAgICAgXHRub3R5LmF0dHIoJ2lkJywgJ2FsZXJ0LXBvcHVwLW5vdGlmaWNhdGlvbicpO1xuXG4gICAgICAgICAgICAgICBcdCRib2R5LmFwcGVuZChub3R5KTtcblxuICAgICAgICAgICAgICAgIHBvcHVwLnNob3cobm90eSwgZmFsc2UsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbm90aWZ5X3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbm90eS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuXG4gICAgICAgICAgICAgICAgICAgIG5vdHkucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgICAgICB9LCAzMDApO1xuXG4gICAgICAgICAgICB9LCA1MDAwKTtcblx0ICAgIH0sXG5cdCAgICBcblx0ICAgIG1lc3NhZ2U6IGZ1bmN0aW9uKHRpdGxlLCB0ZXh0LCBidG4pXG5cdCAgICB7XG5cdCAgICBcdHBvcHVwID0gdGhpcztcblxuXHQgICAgICAgXHR2YXIgdGVtcCA9ICQodGVtcGxhdGUoZGVmYXVsdHMudGVtcGxhdGUubWVzc2FnZSwgeyd0aXRsZSc6IHRpdGxlLCAndGV4dCc6IHRleHQsICdidG4nOiBidG4gfHwgbnVsbCB9KSk7XG5cblx0ICAgICAgICB0ZW1wLmFkZENsYXNzKCd0ZW1wJyk7XG5cblx0ICAgICAgICAkYm9keS5hcHBlbmQodGVtcCk7XG5cblx0ICAgICAgIFx0dGVtcC5jc3ModGhpcy5fZ2V0UG9zaXRpb24odGVtcCkpO1xuXG4gICAgICAgICAgICBwb3B1cC5jbG9zZSgkYm9keS5maW5kKCcucG9wdXAuaXMtb3BlbicpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3B1cC5zaG93KHRlbXApO1xuICAgICAgICAgICAgfSk7XG5cdCAgICB9LFxuXHQgICAgXG5cdCAgICBlcnJvcjogZnVuY3Rpb24odGl0bGUsIHRleHQpXG5cdCAgICB7XG5cdCAgICBcdHBvcHVwID0gdGhpcztcblxuXHQgICAgICAgXHR2YXIgdGVtcCA9ICQodGVtcGxhdGUoZGVmYXVsdHMudGVtcGxhdGUuZXJyb3IsIHsgJ3RpdGxlJzogdGl0bGUsICd0ZXh0JzogdGV4dCB9KSk7XG5cblx0ICAgICAgICB0ZW1wLmFkZENsYXNzKCd0ZW1wJyk7XG5cblx0ICAgICAgICAkYm9keS5hcHBlbmQodGVtcCk7XG5cblx0ICAgICAgICB0ZW1wLmNzcyh0aGlzLl9nZXRQb3NpdGlvbih0ZW1wKSk7XG5cblx0ICAgICAgICBwb3B1cC5jbG9zZSgkYm9keS5maW5kKCcucG9wdXAuaXMtb3BlbicpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBwb3B1cC5zaG93KHRlbXApO1xuICAgICAgICAgICAgfSk7XG5cdCAgICB9LFxuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKHRyaWdnZXIsIG9wdGlvbnMpXG4gICAgICAgIHtcbiAgICAgICAgXHRkZWZhdWx0cy50cmlnZ2VyQ2xhc3MgPSB0cmlnZ2VyO1xuXG4gICAgICAgIFx0aWYgKHR5cGVvZiBvcHRpb25zICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgXHR7XG4gICAgICAgIFx0XHRmb3IgKHZhciB4IGluIG9wdGlvbnMpXG4gICAgICAgIFx0XHR7XG4gICAgICAgIFx0XHRcdGlmICh0eXBlb2YgZGVmYXVsdHNbeF0gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICBcdFx0XHR7XG4gICAgICAgIFx0XHRcdFx0ZGVmYXVsdHNbeF0gPSBvcHRpb25zW3hdO1xuICAgICAgICBcdFx0XHR9XG4gICAgICAgIFx0XHR9XG4gICAgICAgIFx0fVxuICAgICAgICBcdFxuICAgICAgICBcdHRoaXMub3BlbigpO1xuXHRcdFx0dGhpcy5jbGlja3ModHJpZ2dlcik7XG5cdFx0XHR0aGlzLmhvb2tzKCk7XG5cdFx0fVxuXHR9O1xuICAgIFxufSkoalF1ZXJ5KTsiXX0=

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
        [].slice.call(document.querySelectorAll("use[*|href]")

        /**
        * Filter out all elements whose namespaced `href` attribute doesn't
        * start with `#` (i.e. all non-relative IRI's)
        *
        * Note: we're assuming the `xlink` prefix for the XLink namespace!
        */
        ).filter(function (element) {
            return element.getAttribute("xlink:href").indexOf("#") === 0;
        }

        /**
        * Prepend `window.location` to the namespaced `href` attribute value,
        * in order to make it an absolute IRI
        *
        * Note: we're assuming the `xlink` prefix for the XLink namespace!
        */
        ).forEach(function (element) {
            element.setAttribute("xlink:href", baseUrl + element.getAttribute("xlink:href"));
        });
    }, false);
})(document, window);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zdmdmaXhlci5qcyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsIndpbmRvdyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYXNlVXJsIiwibG9jYXRpb24iLCJocmVmIiwicmVwbGFjZSIsImhhc2giLCJzbGljZSIsImNhbGwiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmlsdGVyIiwiZWxlbWVudCIsImdldEF0dHJpYnV0ZSIsImluZGV4T2YiLCJmb3JFYWNoIiwic2V0QXR0cmlidXRlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7O0FBZUMsV0FBU0EsUUFBVCxFQUFtQkMsTUFBbkIsRUFBMkI7QUFDeEI7O0FBRUE7Ozs7QUFHQUQsYUFBU0UsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7O0FBRXJEOzs7QUFHQSxZQUFJQyxVQUFVRixPQUFPRyxRQUFQLENBQWdCQyxJQUFoQixDQUNUQyxPQURTLENBQ0RMLE9BQU9HLFFBQVAsQ0FBZ0JHLElBRGYsRUFDcUIsRUFEckIsQ0FBZDs7QUFHQTs7Ozs7O0FBTUEsV0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWNULFNBQVNVLGdCQUFULENBQTBCLGFBQTFCOztBQUVWOzs7Ozs7QUFGSixVQVFLQyxNQVJMLENBUVksVUFBU0MsT0FBVCxFQUFrQjtBQUN0QixtQkFBUUEsUUFBUUMsWUFBUixDQUFxQixZQUFyQixFQUFtQ0MsT0FBbkMsQ0FBMkMsR0FBM0MsTUFBb0QsQ0FBNUQ7QUFDSDs7QUFFRDs7Ozs7O0FBWkosVUFrQktDLE9BbEJMLENBa0JhLFVBQVNILE9BQVQsRUFBa0I7QUFDdkJBLG9CQUFRSSxZQUFSLENBQXFCLFlBQXJCLEVBQW1DYixVQUFVUyxRQUFRQyxZQUFSLENBQXFCLFlBQXJCLENBQTdDO0FBQ0gsU0FwQkw7QUFzQkgsS0FwQ0QsRUFvQ0csS0FwQ0g7QUFzQ0gsQ0E1Q0EsRUE0Q0NiLFFBNUNELEVBNENXQyxNQTVDWCxDQUFEIiwiZmlsZSI6Il9zdmdmaXhlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU1ZHIEZpeGVyXG4gKlxuICogRml4ZXMgcmVmZXJlbmNlcyB0byBpbmxpbmUgU1ZHIGVsZW1lbnRzIHdoZW4gdGhlIDxiYXNlPiB0YWcgaXMgaW4gdXNlLlxuICogRmlyZWZveCB3b24ndCBkaXNwbGF5IFNWRyBpY29ucyByZWZlcmVuY2VkIHdpdGhcbiAqIGA8c3ZnPjx1c2UgeGxpbms6aHJlZj1cIiNpZC1vZi1pY29uLWRlZlwiPjwvdXNlPjwvc3ZnPmAgd2hlbiB0aGUgPGJhc2U+IHRhZyBpcyBvbiB0aGUgcGFnZS5cbiAqXG4gKiBNb3JlIGluZm86XG4gKiAtIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzE4MjY1MzM2Lzc5NjE1MlxuICogLSBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcvbGlua2luZy5odG1sXG4gKlxuICogT25lIHdvdWxkIHRoaW5rIHRoYXQgc2V0dGluZyB0aGUgYHhtbDpiYXNlYCBhdHRyaWJ1dGUgZml4ZXMgdGhpbmdzLFxuICogYnV0IHRoYXQgaXMgYmVpbmcgcmVtb3ZlZCBmcm9tIHRoZSBwbGF0Zm9ybTogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTM0MTg1NFxuICovXG5cbihmdW5jdGlvbihkb2N1bWVudCwgd2luZG93KSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICAvKipcbiAgICAqIEluaXRpYWxpemUgdGhlIFNWRyBGaXhlciBhZnRlciB0aGUgRE9NIGlzIHJlYWR5XG4gICAgKi9cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbigpIHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3VycmVudCBVUkwsIHdpdGhvdXQgdGhlIGhhc2hcbiAgICAgICAgICovXG4gICAgICAgIHZhciBiYXNlVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWZcbiAgICAgICAgICAgIC5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5oYXNoLCBcIlwiKTtcblxuICAgICAgICAvKipcbiAgICAgICAgKiAgRmluZCBhbGwgYHVzZWAgZWxlbWVudHMgd2l0aCBhIG5hbWVzcGFjZWQgYGhyZWZgIGF0dHJpYnV0ZSwgZS5nLlxuICAgICAgICAqICA8dXNlIHhsaW5rOmhyZWY9XCIjc29tZS1pZFwiPjwvdXNlPlxuICAgICAgICAqXG4gICAgICAgICogIFNlZTogaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjMwNDc4ODgvNzk2MTUyXG4gICAgICAgICovXG4gICAgICAgIFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcInVzZVsqfGhyZWZdXCIpKVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICogRmlsdGVyIG91dCBhbGwgZWxlbWVudHMgd2hvc2UgbmFtZXNwYWNlZCBgaHJlZmAgYXR0cmlidXRlIGRvZXNuJ3RcbiAgICAgICAgICAgICogc3RhcnQgd2l0aCBgI2AgKGkuZS4gYWxsIG5vbi1yZWxhdGl2ZSBJUkkncylcbiAgICAgICAgICAgICpcbiAgICAgICAgICAgICogTm90ZTogd2UncmUgYXNzdW1pbmcgdGhlIGB4bGlua2AgcHJlZml4IGZvciB0aGUgWExpbmsgbmFtZXNwYWNlIVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24oZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIpLmluZGV4T2YoXCIjXCIpID09PSAwKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIC8qKlxuICAgICAgICAgICAgKiBQcmVwZW5kIGB3aW5kb3cubG9jYXRpb25gIHRvIHRoZSBuYW1lc3BhY2VkIGBocmVmYCBhdHRyaWJ1dGUgdmFsdWUsXG4gICAgICAgICAgICAqIGluIG9yZGVyIHRvIG1ha2UgaXQgYW4gYWJzb2x1dGUgSVJJXG4gICAgICAgICAgICAqXG4gICAgICAgICAgICAqIE5vdGU6IHdlJ3JlIGFzc3VtaW5nIHRoZSBgeGxpbmtgIHByZWZpeCBmb3IgdGhlIFhMaW5rIG5hbWVzcGFjZSFcbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJ4bGluazpocmVmXCIsIGJhc2VVcmwgKyBlbGVtZW50LmdldEF0dHJpYnV0ZShcInhsaW5rOmhyZWZcIikpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICB9LCBmYWxzZSk7XG5cbn0oZG9jdW1lbnQsIHdpbmRvdykpO1xuIl19

;(function (d) {
    function template(id, data) {
        if (d.getElementById(id) !== null) {
            var pattern = d.getElementById(id).innerHTML;
            return Template7.compile(pattern)(data || {});
        }

        return '';
    }

    window.template = template;
})(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImlkIiwiZGF0YSIsImQiLCJnZXRFbGVtZW50QnlJZCIsInBhdHRlcm4iLCJpbm5lckhUTUwiLCJUZW1wbGF0ZTciLCJjb21waWxlIiwid2luZG93IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiJBQUFBLENBQUMsQ0FBRSxhQUFLO0FBQ0osYUFBU0EsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0JDLElBQXRCLEVBQTRCO0FBQ3hCLFlBQUlDLEVBQUVDLGNBQUYsQ0FBaUJILEVBQWpCLE1BQXlCLElBQTdCLEVBQW1DO0FBQy9CLGdCQUFNSSxVQUFVRixFQUFFQyxjQUFGLENBQWlCSCxFQUFqQixFQUFxQkssU0FBckM7QUFDQSxtQkFBT0MsVUFBVUMsT0FBVixDQUFrQkgsT0FBbEIsRUFBMkJILFFBQVEsRUFBbkMsQ0FBUDtBQUNIOztBQUVELGVBQU8sRUFBUDtBQUNIOztBQUVETyxXQUFPVCxRQUFQLEdBQWtCQSxRQUFsQjtBQUNILENBWEEsRUFXR1UsUUFYSCIsImZpbGUiOiJfdGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KChkID0+IHtcbiAgICBmdW5jdGlvbiB0ZW1wbGF0ZShpZCwgZGF0YSkge1xuICAgICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSBkLmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUw7XG4gICAgICAgICAgICByZXR1cm4gVGVtcGxhdGU3LmNvbXBpbGUocGF0dGVybikoZGF0YSB8fCB7fSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgd2luZG93LnRlbXBsYXRlID0gdGVtcGxhdGU7XG59KSkoZG9jdW1lbnQpOyJdfQ==
