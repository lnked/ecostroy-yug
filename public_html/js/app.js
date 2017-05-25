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

(function (d) {
    d.addEventListener('DOMContentLoaded', function () {
        app.init();
    });
})(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJpbml0IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBRSxhQUFLO0FBQ0hBLE1BQUVDLGdCQUFGLENBQW1CLGtCQUFuQixFQUF1QyxZQUFNO0FBQ3pDQyxZQUFJQyxJQUFKO0FBQ0gsS0FGRDtBQUdILENBSkQsRUFJSUMsUUFKSiIsImZpbGUiOiJpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKChkID0+IHtcbiAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGFwcC5pbml0KCk7XG4gICAgfSk7XG59KSkoZG9jdW1lbnQpOyJdfQ==
