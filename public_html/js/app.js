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
            var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'b';

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmluaXQuanMiXSwibmFtZXMiOlsiYXBwIiwiX2V4dGVuZCIsInNvdXJjZSIsImNvbmZpZyIsIngiLCJiaW5kIiwiYSIsIl8iLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFVBQU07QUFFRkMsZUFGRSxtQkFFTUMsTUFGTixFQUVjQyxNQUZkLEVBRXNCO0FBQ3BCLGdCQUFJLE9BQU9BLE1BQVAsS0FBa0IsV0FBdEIsRUFDQTtBQUNJLHFCQUFLLElBQU1DLENBQVgsSUFBZ0JELE1BQWhCLEVBQ0E7QUFDSUQsMkJBQU9FLENBQVAsSUFBWUQsT0FBT0MsQ0FBUCxDQUFaO0FBQ0g7QUFDSjs7QUFFRCxtQkFBT0YsTUFBUDtBQUNILFNBWkM7QUFjRkcsWUFkRSxrQkFjWTtBQUFBLGdCQUFUQyxDQUFTLHVFQUFMLEdBQUs7O0FBQ1YsaUJBQUksSUFBTUMsQ0FBVixJQUFlLElBQWYsRUFDQTtBQUNJLG9CQUFJLFFBQVEsS0FBS0EsQ0FBTCxDQUFSLEtBQW9CLFFBQXBCLElBQWdDLE9BQVEsS0FBS0EsQ0FBTCxFQUFRQyxJQUFoQixLQUEwQixXQUE5RCxFQUNBO0FBQ0ksd0JBQUksT0FBUSxLQUFLRCxDQUFMLEVBQVFDLElBQWhCLElBQXlCLFVBQTdCLEVBQ0E7QUFDSSw2QkFBS0QsQ0FBTCxFQUFRQyxJQUFSO0FBQ0g7QUFDSjtBQUNKO0FBQ0osU0F6QkM7QUEyQkZBLFlBM0JFLGtCQTJCSztBQUNILGlCQUFLSCxJQUFMO0FBQ0g7QUE3QkMsS0FBTjtBQWdDSCxDQW5DRCxFQW1DSUksU0FBU0MsSUFuQ2IiLCJmaWxlIjoiX19hcHAuaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgYXBwID0ge1xuXG4gICAgICAgIF9leHRlbmQoc291cmNlLCBjb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHggaW4gY29uZmlnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlW3hdID0gY29uZmlnW3hdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfSxcblxuICAgICAgICBiaW5kKGEgPSAnYicpIHtcbiAgICAgICAgICAgIGZvcihjb25zdCBfIGluIHRoaXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpc1tfXSkgPT0gJ29iamVjdCcgJiYgdHlwZW9mICh0aGlzW19dLmluaXQpICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXNbX10uaW5pdCkgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tfXS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIHRoaXMuYmluZCgpO1xuICAgICAgICB9XG5cbiAgICB9O1xufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

'use strict';

(function (d) {
    d.addEventListener('DOMContentLoaded', function () {
        app.init();
    });
})(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhcHAiLCJpbml0IiwiZG9jdW1lbnQiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBRSxhQUFLO0FBQ0hBLE1BQUVDLGdCQUFGLENBQW1CLGtCQUFuQixFQUF1QyxZQUFNO0FBQ3pDQyxZQUFJQyxJQUFKO0FBQ0gsS0FGRDtBQUdILENBSkQsRUFJSUMsUUFKSiIsImZpbGUiOiJpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKChkID0+IHtcbiAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGFwcC5pbml0KCk7XG4gICAgfSk7XG59KSkoZG9jdW1lbnQpOyJdfQ==
