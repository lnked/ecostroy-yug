// 'use strict';

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
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiX2hlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAndXNlIHN0cmljdCc7XG5cbi8vIHZhciBpID0gMTtcbi8vIHNldFRpbWVvdXQoZnVuY3Rpb24gcnVuKCkge1xuLy8gICAgIGZ1bmMoaSk7XG4vLyAgICAgc2V0VGltZW91dChydW4sIDEwMCk7XG4vLyB9LCAxMDApO1xuXG4vLyA7KChkID0+IHtcbi8vICAgICBmdW5jdGlvbiB0ZW1wbGF0ZShpZCwgZGF0YSkge1xuLy8gICAgICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkgIT09IG51bGwpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBUZW1wbGF0ZTcuY29tcGlsZShkLmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwpKGRhdGEgfHwge30pO1xuLy8gICAgICAgICB9XG4vLyAgICAgICAgIHJldHVybiAnJztcbi8vICAgICB9XG4vLyAgICAgd2luZG93LnRlbXBsYXRlID0gdGVtcGxhdGU7XG4vLyB9KSkoZG9jdW1lbnQpO1xuXG4vLyBjb25zdCBhZGRFdmVudCA9ICgoKCkgPT4ge1xuLy8gICAgY29uc3QgZmlsdGVyID0gKGVsLCB0eXBlLCBmbikgPT4ge1xuLy8gICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGVsLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4vLyAgICAgICAgICBhZGRFdmVudChlbFtpXSwgdHlwZSwgZm4pO1xuLy8gICAgICAgfVxuLy8gICAgfTtcbi8vICAgIGlmIChkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKSB7XG4vLyAgICAgICByZXR1cm4gKGVsLCB0eXBlLCBmbikgPT4ge1xuLy8gICAgICAgICAgaWYgKGVsICYmIGVsLm5vZGVOYW1lIHx8IGVsID09PSB3aW5kb3cpIHtcbi8vICAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgZm4sIGZhbHNlKTtcbi8vICAgICAgICAgIH0gZWxzZSBpZiAoZWwgJiYgZWwubGVuZ3RoKSB7XG4vLyAgICAgICAgICAgICBmaWx0ZXIoZWwsIHR5cGUsIGZuKTtcbi8vICAgICAgICAgIH1cbi8vICAgICAgIH07XG4vLyAgICB9XG4gXG4vLyAgICByZXR1cm4gKGVsLCB0eXBlLCBmbikgPT4ge1xuLy8gICAgICAgaWYgKGVsICYmIGVsLm5vZGVOYW1lIHx8IGVsID09PSB3aW5kb3cpIHtcbi8vICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KGBvbiR7dHlwZX1gLCAoKSA9PiBmbi5jYWxsKGVsLCB3aW5kb3cuZXZlbnQpKTtcbi8vICAgICAgIH0gZWxzZSBpZiAoZWwgJiYgZWwubGVuZ3RoKSB7XG4vLyAgICAgICAgICBmaWx0ZXIoZWwsIHR5cGUsIGZuKTtcbi8vICAgICAgIH1cbi8vICAgIH07XG4vLyB9KSkoKTtcblxuLy8gLy8gYWRkRXZlbnQoZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2EnKSwgJ2NsaWNrJywgZm4pO1xuXG4vLyBjb25zdCAkID0gZWwgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChlbCk7XG5cbi8vIC8vICQoJy5ib3gnKTtcblxuLy8gY29uc3QgbGF6eWxvYWQgPSAoY29udGFpbmVyLCBzZXR0aW5ncykgPT4ge1xuLy8gICAgY29uc3QgbGF6eUNsYXNzID0gJ2pzLWxhenlsb2FkLWltYWdlcyc7XG4vLyAgICByZXF1aXJlKFsnanF1ZXJ5JywgJ2xpYi9qcXVlcnkubGF6eWxvYWQnXSwgJCA9PiB7XG4vLyAgICAgICBjb25zdCBub2RlID0gJChjb250YWluZXIpO1xuLy8gICAgICAgY29uc3QgJGxhenlOb2RlID0gJChgLiR7bGF6eUNsYXNzfWAsIG5vZGUpO1xuLy8gICAgICAgJGxhenlOb2RlLmxhenlsb2FkKHNldHRpbmdzKS5yZW1vdmVDbGFzcyhsYXp5Q2xhc3MpO1xuLy8gICAgICAgbm9kZS5zY3JvbGwoKTtcbi8vICAgIH0pO1xuLy8gfTtcblxuLy8gLypcbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIGUgPT4ge1xuLy8gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlO1xuLy8gICAgaWYoIXN0YXRlKSByZXR1cm47XG4vLyAgICBpZihzdGF0ZS5sYXllcikge1xuLy8gICAgICAgY3JlYXRlX2xheWVyKHN0YXRlLmxheWVyLCBKU09OLnBhcnNlKHN0YXRlLnNldHRpbmdzKSk7XG4vLyAgICB9XG4vLyB9LCBmYWxzZSk7XG4vLyAqL1xuXG4vLyBmdW5jdGlvbiBmdWxsUHJlc2VudChlbGVtKVxuLy8ge1xuLy8gICB2YXIgZG9jVmlld1RvcCA9ICQod2luZG93KS5zY3JvbGxUb3AoKSxcbi8vICAgZG9jVmlld0JvdHRvbSA9IGRvY1ZpZXdUb3AgKyAkKHdpbmRvdykuaGVpZ2h0KCksXG4vLyAgIGVsZW1Ub3AgPSAkKGVsZW0pLm9mZnNldCgpLnRvcCxcbi8vICAgZWxlbUJvdHRvbSA9IGVsZW1Ub3AgKyAkKGVsZW0pLmhlaWdodCgpO1xuXG4vLyAgIHJldHVybiAoKGVsZW1Cb3R0b20gPD0gZG9jVmlld0JvdHRvbSkgJiYgKGVsZW1Ub3AgPj0gZG9jVmlld1RvcCkpO1xuLy8gfVxuXG5cbi8vIGZ1bmN0aW9uIHlvdVR1YmVHZXRJZCh1cmwpIHtcbi8vICAgICBjb25zdCBleHByZXNzaW9uID0gL14oPzpodHRwcz86XFwvXFwvKT8oPzp3d3dcXC4pPyg/OnlvdXR1XFwuYmVbLl0/XFwvfHlvdXR1YmVcXC5jb21bLl0/XFwvKD86ZW1iZWRcXC98dlxcL3x3YXRjaFxcLz9cXD8oPzpcXFMrPVxcUyomKSp2PSkpKFtcXHctXXsxMX0pXFxTKiQvO1xuLy8gICAgIHJldHVybiB1cmwubWF0Y2goZXhwcmVzc2lvbikgPyBSZWdFeHAuJDEgOiB1bmRlZmluZWQ7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGlzSW50KG4pe1xuLy8gICAgIHJldHVybiBOdW1iZXIobikgPT09IG4gJiYgbiAlIDEgPT09IDA7XG4vLyB9XG5cbi8vIGZ1bmN0aW9uIGlzRmxvYXQobil7XG4vLyAgICAgcmV0dXJuIE51bWJlcihuKSA9PT0gbiAmJiBuICUgMSAhPT0gMDtcbi8vIH1cbiJdfQ==

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

            if (!window.precompiledT7) {
                window.precompiledT7 = Template7.compile(pattern);
            }

            // return Template7.compile(pattern)(data || {});
            return window.precompiledT7(data || {});
        }

        return '';
    }

    window.template = template;
})(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImlkIiwiZGF0YSIsImQiLCJnZXRFbGVtZW50QnlJZCIsInBhdHRlcm4iLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJwcmVjb21waWxlZFQ3IiwiVGVtcGxhdGU3IiwiY29tcGlsZSIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsQ0FBRSxhQUFLO0FBQ0osYUFBU0EsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0JDLElBQXRCLEVBQTRCO0FBQ3hCLFlBQUlDLEVBQUVDLGNBQUYsQ0FBaUJILEVBQWpCLE1BQXlCLElBQTdCLEVBQW1DO0FBQy9CLGdCQUFNSSxVQUFVRixFQUFFQyxjQUFGLENBQWlCSCxFQUFqQixFQUFxQkssU0FBckM7O0FBRUEsZ0JBQUksQ0FBQ0MsT0FBT0MsYUFBWixFQUEyQjtBQUN2QkQsdUJBQU9DLGFBQVAsR0FBdUJDLFVBQVVDLE9BQVYsQ0FBa0JMLE9BQWxCLENBQXZCO0FBQ0g7O0FBRUQ7QUFDQSxtQkFBT0UsT0FBT0MsYUFBUCxDQUFxQk4sUUFBUSxFQUE3QixDQUFQO0FBQ0g7O0FBRUQsZUFBTyxFQUFQO0FBQ0g7O0FBRURLLFdBQU9QLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0gsQ0FqQkEsRUFpQkdXLFFBakJIIiwiZmlsZSI6Il90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoKGQgPT4ge1xuICAgIGZ1bmN0aW9uIHRlbXBsYXRlKGlkLCBkYXRhKSB7XG4gICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgcGF0dGVybiA9IGQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTDtcblxuICAgICAgICAgICAgaWYgKCF3aW5kb3cucHJlY29tcGlsZWRUNykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5wcmVjb21waWxlZFQ3ID0gVGVtcGxhdGU3LmNvbXBpbGUocGF0dGVybik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHJldHVybiBUZW1wbGF0ZTcuY29tcGlsZShwYXR0ZXJuKShkYXRhIHx8IHt9KTtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cucHJlY29tcGlsZWRUNyhkYXRhIHx8IHt9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB3aW5kb3cudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn0pKShkb2N1bWVudCk7Il19
