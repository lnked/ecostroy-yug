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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fX2FwcC5pbml0LmpzIl0sIm5hbWVzIjpbImFwcCIsIl9leHRlbmQiLCJzb3VyY2UiLCJjb25maWciLCJ4IiwiYmluZCIsIl8iLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFVBQU07QUFFRkMsZUFGRSxtQkFFT0MsTUFGUCxFQUVlQyxNQUZmLEVBRXVCO0FBQ3JCLGdCQUFJLE9BQU9BLE1BQVAsS0FBa0IsV0FBdEIsRUFDQTtBQUNJLHFCQUFLLElBQU1DLENBQVgsSUFBZ0JELE1BQWhCLEVBQ0E7QUFDSUQsMkJBQU9FLENBQVAsSUFBWUQsT0FBT0MsQ0FBUCxDQUFaO0FBQ0g7QUFDSjs7QUFFRCxtQkFBT0YsTUFBUDtBQUNILFNBWkM7QUFjRkcsWUFkRSxrQkFjTTtBQUNKLGlCQUFJLElBQU1DLENBQVYsSUFBZSxJQUFmLEVBQ0E7QUFDSSxvQkFBSSxRQUFRLEtBQUtBLENBQUwsQ0FBUixLQUFvQixRQUFwQixJQUFnQyxPQUFRLEtBQUtBLENBQUwsRUFBUUMsSUFBaEIsS0FBMEIsV0FBOUQsRUFDQTtBQUNJLHdCQUFJLE9BQVEsS0FBS0QsQ0FBTCxFQUFRQyxJQUFoQixJQUF5QixVQUE3QixFQUNBO0FBQ0ksNkJBQUtELENBQUwsRUFBUUMsSUFBUjtBQUNIO0FBQ0o7QUFDSjtBQUNKLFNBekJDO0FBMkJGQSxZQTNCRSxrQkEyQk07QUFDSixpQkFBS0YsSUFBTDtBQUNIO0FBN0JDLEtBQU47QUFnQ0gsQ0FuQ0QsRUFtQ0lHLFNBQVNDLElBbkNiIiwiZmlsZSI6Il9fX2FwcC5pbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuKChib2R5ID0+IHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhcHAgPSB7XG5cbiAgICAgICAgX2V4dGVuZCAoc291cmNlLCBjb25maWcpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29uZmlnICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHggaW4gY29uZmlnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc291cmNlW3hdID0gY29uZmlnW3hdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHNvdXJjZTtcbiAgICAgICAgfSxcblxuICAgICAgICBiaW5kICgpIHtcbiAgICAgICAgICAgIGZvcihjb25zdCBfIGluIHRoaXMpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpc1tfXSkgPT0gJ29iamVjdCcgJiYgdHlwZW9mICh0aGlzW19dLmluaXQpICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXNbX10uaW5pdCkgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpc1tfXS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdCAoKSB7XG4gICAgICAgICAgICB0aGlzLmJpbmQoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTsiXX0=

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var app = app || {};

(function (body) {
    "use strict";

    var $body = $(body),
        _this;

    app.ajaxForm = {

        config: {
            form_class: '.form-ajax',
            form_reset: 'form-reset',
            link_class: '.js-request-link',
            error_class: 'error',
            error_message: 'form__error-message',
            error_message_class: 'j-error-message',
            error_message_addclass: 'show',
            form_label: '.form__wrapper',
            checkbox_label: 'checkbox__label'
        },

        callback_stack: {},

        extend: function extend(config) {
            _this = this;

            if (typeof config !== 'undefined') {
                var x;
                for (x in config) {
                    if (typeof _this.config[x] !== 'undefined') _this.config[x] = config[x];
                }
            }
        },
        default_handler: function default_handler(form, response) {
            _this = this;

            if (response.status) {
                if (response.hasOwnProperty('redirect_url')) {
                    window.location.href = response.redirect_url;
                }
            } else if (typeof response.errors !== 'undefined' || typeof response.error_message !== 'undefined') {
                var errors, error_message;

                if (typeof response.errors !== 'undefined') {
                    errors = response.errors;
                }

                if (typeof response.error_message !== 'undefined') {
                    error_message = response.error_message;
                }

                _this.validation(form, errors, response.error_message);
            }

            if (response.hasOwnProperty('open_popup')) {
                if ($('body').find('.popup.is-open').length) {
                    $.popup.close($('body').find('.popup.is-open'), function () {
                        $.popup.open(response.open_popup);
                    });
                } else {
                    $.popup.open(response.open_popup);
                }
            }

            if (response.hasOwnProperty('message')) {
                $.popup.message(response.title, response.message);
            }
        },
        validation: function validation(form, errors, error_message) {
            _this = this;

            form.find('.' + _this.config.error_class).removeClass(_this.config.error_class);
            form.find('.' + _this.config.error_message).remove();
            form.find('.' + _this.config.error_message_class).removeClass(_this.config.error_message_addclass);

            var fieldName, field;

            setTimeout(function () {
                if (typeof error_message !== 'undefined' && error_message !== '') {
                    form.find('.' + _this.config.error_message_class).html(error_message);
                    form.find('.' + _this.config.error_message_class).addClass(_this.config.error_message_addclass);
                }

                if (typeof errors !== 'undefined' && errors !== '') {
                    for (fieldName in errors) {
                        if (form.find('input[name="' + fieldName + '"]').length > 0) {
                            field = form.find('input[name="' + fieldName + '"]');
                        }

                        if (form.find('select[name="' + fieldName + '"]').length > 0) {
                            field = form.find('select[name="' + fieldName + '"]');
                        }

                        if (form.find('textarea[name="' + fieldName + '"]').length > 0) {
                            field = form.find('textarea[name="' + fieldName + '"]');
                        }

                        if (field.closest('.' + _this.config.checkbox_label).length > 0) {
                            field = field.closest('.' + _this.config.checkbox_label);
                        }

                        if (typeof field !== 'undefined') {
                            field.addClass(_this.config.error_class);
                            field.closest(_this.config.form_label).append('<div class="' + _this.config.error_message + '">' + errors[fieldName] + '</div>');
                        }
                    }
                }
            }, 10);
        },
        upload: function upload() {
            _this = this;

            $body.on('submit', '.form-file-upload', function (e) {
                return AIM.submit(this, {
                    onStart: function onStart() {},
                    onComplete: function onComplete(result) {
                        if ((typeof result === 'undefined' ? 'undefined' : _typeof(result)) === 'object' && result.status === true && result.hasOwnProperty('photo_url')) {}
                    }
                });
            });

            $(document).on('change', '.upload_button_onchange', function () {
                if ($(this).closest('.upload_button').find('.upload_button_field').length > 0) {
                    $(this).closest('.upload_button').find('.upload_button_field').html($(this).val());
                }
            });
        },
        send: function send(action, method, data, cb, err) {

            if (typeof cb !== 'function') {
                cb = function cb() {};
            }

            if (typeof err !== 'function') {
                err = function err() {};
            }

            try {

                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });

                $.ajax({
                    url: action,
                    type: method,
                    data: data,
                    contentType: false,
                    processData: method.toLowerCase() == 'get',
                    success: cb,
                    error: err,
                    dataType: 'JSON'
                });
            } catch (e) {}
        },
        initLink: function initLink() {
            _this = this;

            $body.on('click', _this.config.link_class, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var link = $(this);

                if (link.data('is-busy')) {
                    return;
                }

                link.data('is-busy', true);

                var action = $(this).attr('href') || $(this).data('action'),
                    method = $(this).data('method') || 'get',
                    data = {};

                _this.send(action, method, data, function (response) {
                    if (link.data('callback') && _this.callback_stack.hasOwnProperty(link.data('callback'))) {
                        _this.callback_stack[link.data('callback')](link, response);
                    } else {
                        _this.default_handler(link, response);
                    }

                    if (response.status === true) {}

                    link.data('is-busy', false);
                }, function (response) {
                    _this.default_handler(link, response);
                    link.data('is-busy', false);
                });
            });
        },
        initForm: function initForm() {
            _this = this;

            $body.on('submit', _this.config.form_class, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;

                var form = $(this),
                    action = form.attr('action'),
                    method = form.attr('method') || 'post',
                    data = !!window.FormData ? new FormData(form[0]) : form.serialize();

                if (form.data('is-busy')) {
                    return;
                }

                form.data('is-busy', true);

                if (typeof button !== 'undefined') {
                    if (button.data('loading')) {
                        button.data('original', button.text());
                        button.text(button.data('loading'));
                    }

                    button.addClass('preload');
                }

                if (form.data('precallback') && _this.callback_stack.hasOwnProperty(form.data('precallback'))) {
                    if (!_this.callback_stack[form.data('precallback')](form)) {
                        return false;
                    }
                }

                _this.send(action, method, data, function (response) {
                    if (form.data('callback') && _this.callback_stack.hasOwnProperty(form.data('callback'))) {
                        _this.callback_stack[form.data('callback')](form, response);
                    } else {
                        _this.default_handler(form, response);
                    }

                    if (response.status === true) {
                        if (form.hasClass(_this.config.form_reset)) {
                            form.find('.' + _this.config.error_class).removeClass(_this.config.error_class);
                            form.get(0).reset();
                        }
                    }

                    if (typeof button !== 'undefined') {
                        if (button.data('original')) {
                            button.text(button.data('original'));
                        }

                        button.removeClass('preload');
                    }

                    form.data('is-busy', false);
                }, function (response) {
                    _this.default_handler(form, response);
                    form.data('is-busy', false);
                });
            });
        },
        init: function init(config) {
            this.extend(config);

            this.initForm();
            this.initLink();
        }
    };

    app.ajaxForm.init();
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmFqYXguanMiXSwibmFtZXMiOlsiYXBwIiwiYm9keSIsIiRib2R5IiwiJCIsIl90aGlzIiwiYWpheEZvcm0iLCJjb25maWciLCJmb3JtX2NsYXNzIiwiZm9ybV9yZXNldCIsImxpbmtfY2xhc3MiLCJlcnJvcl9jbGFzcyIsImVycm9yX21lc3NhZ2UiLCJlcnJvcl9tZXNzYWdlX2NsYXNzIiwiZXJyb3JfbWVzc2FnZV9hZGRjbGFzcyIsImZvcm1fbGFiZWwiLCJjaGVja2JveF9sYWJlbCIsImNhbGxiYWNrX3N0YWNrIiwiZXh0ZW5kIiwieCIsImRlZmF1bHRfaGFuZGxlciIsImZvcm0iLCJyZXNwb25zZSIsInN0YXR1cyIsImhhc093blByb3BlcnR5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicmVkaXJlY3RfdXJsIiwiZXJyb3JzIiwidmFsaWRhdGlvbiIsImZpbmQiLCJsZW5ndGgiLCJwb3B1cCIsImNsb3NlIiwib3BlbiIsIm9wZW5fcG9wdXAiLCJtZXNzYWdlIiwidGl0bGUiLCJyZW1vdmVDbGFzcyIsInJlbW92ZSIsImZpZWxkTmFtZSIsImZpZWxkIiwic2V0VGltZW91dCIsImh0bWwiLCJhZGRDbGFzcyIsImNsb3Nlc3QiLCJhcHBlbmQiLCJ1cGxvYWQiLCJvbiIsImUiLCJBSU0iLCJzdWJtaXQiLCJvblN0YXJ0Iiwib25Db21wbGV0ZSIsInJlc3VsdCIsImRvY3VtZW50IiwidmFsIiwic2VuZCIsImFjdGlvbiIsIm1ldGhvZCIsImRhdGEiLCJjYiIsImVyciIsImFqYXhTZXR1cCIsImhlYWRlcnMiLCJhdHRyIiwiYWpheCIsInVybCIsInR5cGUiLCJjb250ZW50VHlwZSIsInByb2Nlc3NEYXRhIiwidG9Mb3dlckNhc2UiLCJzdWNjZXNzIiwiZXJyb3IiLCJkYXRhVHlwZSIsImluaXRMaW5rIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImxpbmsiLCJpbml0Rm9ybSIsIkZvcm1EYXRhIiwic2VyaWFsaXplIiwiYnV0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LFdBQTdCLEVBQTBDNEIsV0FBMUMsQ0FBc0RsQyxNQUFNRSxNQUFOLENBQWFJLFdBQW5FO0FBQ0FVLGlDQUFLaUUsR0FBTCxDQUFTLENBQVQsRUFBWUMsS0FBWjtBQUNIO0FBQ0o7O0FBRUQsd0JBQUksT0FBT0osTUFBUCxLQUFrQixXQUF0QixFQUNBO0FBQ0ksNEJBQUlBLE9BQU90QixJQUFQLENBQVksVUFBWixDQUFKLEVBQ0E7QUFDSXNCLG1DQUFPQyxJQUFQLENBQVlELE9BQU90QixJQUFQLENBQVksVUFBWixDQUFaO0FBQ0g7O0FBRURzQiwrQkFBTzVDLFdBQVAsQ0FBbUIsU0FBbkI7QUFDSDs7QUFFRGxCLHlCQUFLd0MsSUFBTCxDQUFVLFNBQVYsRUFBcUIsS0FBckI7QUFDSCxpQkFuQ0wsRUFvQ0ksVUFBU3ZDLFFBQVQsRUFDQTtBQUNJakIsMEJBQU1lLGVBQU4sQ0FBc0JDLElBQXRCLEVBQTRCQyxRQUE1QjtBQUNBRCx5QkFBS3dDLElBQUwsQ0FBVSxTQUFWLEVBQXFCLEtBQXJCO0FBQ0gsaUJBeENMO0FBMENILGFBMUVEO0FBMkVILFNBbFVVO0FBb1VYMkIsWUFwVVcsZ0JBb1VMakYsTUFwVUssRUFxVVg7QUFDSSxpQkFBS1csTUFBTCxDQUFZWCxNQUFaOztBQUVBLGlCQUFLeUUsUUFBTDtBQUNBLGlCQUFLSixRQUFMO0FBQ0g7QUExVVUsS0FBZjs7QUE2VUEzRSxRQUFJSyxRQUFKLENBQWFrRixJQUFiO0FBRUgsQ0FyVkQsRUFxVkdoQyxTQUFTdEQsSUFyVloiLCJmaWxlIjoiX19hcHAuYWpheC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhcHAgfHwge307XG5cbihmdW5jdGlvbihib2R5KXtcbiAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgIHZhciAkYm9keSA9ICQoYm9keSksXG4gICAgICAgIF90aGlzO1xuXG4gICAgYXBwLmFqYXhGb3JtID0ge1xuXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgZm9ybV9jbGFzczogJy5mb3JtLWFqYXgnLFxuICAgICAgICAgICAgZm9ybV9yZXNldDogJ2Zvcm0tcmVzZXQnLFxuICAgICAgICAgICAgbGlua19jbGFzczogJy5qcy1yZXF1ZXN0LWxpbmsnLFxuICAgICAgICAgICAgZXJyb3JfY2xhc3M6ICdlcnJvcicsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlOiAnZm9ybV9fZXJyb3ItbWVzc2FnZScsXG4gICAgICAgICAgICBlcnJvcl9tZXNzYWdlX2NsYXNzOiAnai1lcnJvci1tZXNzYWdlJyxcbiAgICAgICAgICAgIGVycm9yX21lc3NhZ2VfYWRkY2xhc3M6ICdzaG93JyxcbiAgICAgICAgICAgIGZvcm1fbGFiZWw6ICcuZm9ybV9fd3JhcHBlcicsXG4gICAgICAgICAgICBjaGVja2JveF9sYWJlbDogJ2NoZWNrYm94X19sYWJlbCdcbiAgICAgICAgfSxcblxuICAgICAgICBjYWxsYmFja19zdGFjazoge30sXG5cbiAgICAgICAgZXh0ZW5kIChjb25maWcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWcgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciB4O1xuICAgICAgICAgICAgICAgIGZvciAoeCBpbiBjb25maWcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF90aGlzLmNvbmZpZ1t4XSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb25maWdbeF0gPSBjb25maWdbeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGRlZmF1bHRfaGFuZGxlciAoZm9ybSwgcmVzcG9uc2UpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ3JlZGlyZWN0X3VybCcpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSByZXNwb25zZS5yZWRpcmVjdF91cmw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHJlc3BvbnNlLmVycm9ycyAhPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHJlc3BvbnNlLmVycm9yX21lc3NhZ2UgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBlcnJvcnMsIGVycm9yX21lc3NhZ2U7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlc3BvbnNlLmVycm9ycyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSByZXNwb25zZS5lcnJvcnM7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXNwb25zZS5lcnJvcl9tZXNzYWdlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVycm9yX21lc3NhZ2UgPSByZXNwb25zZS5lcnJvcl9tZXNzYWdlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLnZhbGlkYXRpb24oZm9ybSwgZXJyb3JzLCByZXNwb25zZS5lcnJvcl9tZXNzYWdlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmhhc093blByb3BlcnR5KCdvcGVuX3BvcHVwJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5maW5kKCcucG9wdXAuaXMtb3BlbicpLmxlbmd0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICQucG9wdXAuY2xvc2UoJCgnYm9keScpLmZpbmQoJy5wb3B1cC5pcy1vcGVuJyksIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICAgICAkLnBvcHVwLm9wZW4ocmVzcG9uc2Uub3Blbl9wb3B1cCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkLnBvcHVwLm9wZW4ocmVzcG9uc2Uub3Blbl9wb3B1cCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuaGFzT3duUHJvcGVydHkoJ21lc3NhZ2UnKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkLnBvcHVwLm1lc3NhZ2UocmVzcG9uc2UudGl0bGUsIHJlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgdmFsaWRhdGlvbiAoZm9ybSwgZXJyb3JzLCBlcnJvcl9tZXNzYWdlKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvcm0uZmluZCgnLicgKyBfdGhpcy5jb25maWcuZXJyb3JfY2xhc3MpLnJlbW92ZUNsYXNzKF90aGlzLmNvbmZpZy5lcnJvcl9jbGFzcyk7XG4gICAgICAgICAgICBmb3JtLmZpbmQoJy4nICsgX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2UpLnJlbW92ZSgpO1xuICAgICAgICAgICAgZm9ybS5maW5kKCcuJyArIF90aGlzLmNvbmZpZy5lcnJvcl9tZXNzYWdlX2NsYXNzKS5yZW1vdmVDbGFzcyhfdGhpcy5jb25maWcuZXJyb3JfbWVzc2FnZV9hZGRjbGFzcyk7XG5cbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUsIGZpZWxkO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3JfbWVzc2FnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgZXJyb3JfbWVzc2FnZSAhPT0gJycpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3JtLmZpbmQoJy4nICsgX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2VfY2xhc3MpLmh0bWwoZXJyb3JfbWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIGZvcm0uZmluZCgnLicgKyBfdGhpcy5jb25maWcuZXJyb3JfbWVzc2FnZV9jbGFzcykuYWRkQ2xhc3MoX3RoaXMuY29uZmlnLmVycm9yX21lc3NhZ2VfYWRkY2xhc3MpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3JzICE9PSAndW5kZWZpbmVkJyAmJiBlcnJvcnMgIT09ICcnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yKGZpZWxkTmFtZSBpbiBlcnJvcnMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmZpbmQoJ2lucHV0W25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJykubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZvcm0uZmluZCgnaW5wdXRbbmFtZT1cIicrZmllbGROYW1lKydcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0uZmluZCgnc2VsZWN0W25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJykubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZvcm0uZmluZCgnc2VsZWN0W25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtLmZpbmQoJ3RleHRhcmVhW25hbWU9XCInK2ZpZWxkTmFtZSsnXCJdJykubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCA9IGZvcm0uZmluZCgndGV4dGFyZWFbbmFtZT1cIicrZmllbGROYW1lKydcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmNsb3Nlc3QoJy4nICsgX3RoaXMuY29uZmlnLmNoZWNrYm94X2xhYmVsKS5sZW5ndGggPiAwKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkID0gZmllbGQuY2xvc2VzdCgnLicgKyBfdGhpcy5jb25maWcuY2hlY2tib3hfbGFiZWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5hZGRDbGFzcyhfdGhpcy5jb25maWcuZXJyb3JfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNsb3Nlc3QoX3RoaXMuY29uZmlnLmZvcm1fbGFiZWwpLmFwcGVuZCgnPGRpdiBjbGFzcz1cIicgKyBfdGhpcy5jb25maWcuZXJyb3JfbWVzc2FnZSArICdcIj4nICsgZXJyb3JzW2ZpZWxkTmFtZV0gKyAnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdXBsb2FkICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgJGJvZHkub24oJ3N1Ym1pdCcsICcuZm9ybS1maWxlLXVwbG9hZCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQUlNLnN1Ym1pdCh0aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIG9uU3RhcnQgKClcbiAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGUgKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnICYmIHJlc3VsdC5zdGF0dXMgPT09IHRydWUgJiYgcmVzdWx0Lmhhc093blByb3BlcnR5KCdwaG90b191cmwnKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChkb2N1bWVudCkub24oJ2NoYW5nZScsICcudXBsb2FkX2J1dHRvbl9vbmNoYW5nZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykuY2xvc2VzdCgnLnVwbG9hZF9idXR0b24nKS5maW5kKCcudXBsb2FkX2J1dHRvbl9maWVsZCcpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy51cGxvYWRfYnV0dG9uJykuZmluZCgnLnVwbG9hZF9idXR0b25fZmllbGQnKS5odG1sKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNlbmQgKGFjdGlvbiwgbWV0aG9kLCBkYXRhLCBjYiwgZXJyKVxuICAgICAgICB7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2IgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYiA9IGZ1bmN0aW9uKCkge307XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgZXJyID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHJ5IHtcblxuICAgICAgICAgICAgICAgICQuYWpheFNldHVwKHtcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ1gtQ1NSRi1UT0tFTic6ICQoJ21ldGFbbmFtZT1cImNzcmYtdG9rZW5cIl0nKS5hdHRyKCdjb250ZW50JylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzRGF0YTogbWV0aG9kLnRvTG93ZXJDYXNlKCkgPT0gJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGNiLFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyLFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogJ0pTT04nXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIH0gY2F0Y2goZSl7fVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdExpbmsgKClcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAkYm9keS5vbignY2xpY2snLCBfdGhpcy5jb25maWcubGlua19jbGFzcywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICB2YXIgbGluayA9ICQodGhpcyk7XG5cbiAgICAgICAgICAgICAgICBpZiAobGluay5kYXRhKCdpcy1idXN5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGxpbmsuZGF0YSgnaXMtYnVzeScsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9ICgkKHRoaXMpLmF0dHIoJ2hyZWYnKSkgfHwgJCh0aGlzKS5kYXRhKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kID0gKCQodGhpcykuZGF0YSgnbWV0aG9kJykpIHx8ICdnZXQnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zZW5kKFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChsaW5rLmRhdGEoJ2NhbGxiYWNrJykgJiYgX3RoaXMuY2FsbGJhY2tfc3RhY2suaGFzT3duUHJvcGVydHkobGluay5kYXRhKCdjYWxsYmFjaycpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5jYWxsYmFja19zdGFja1tsaW5rLmRhdGEoJ2NhbGxiYWNrJyldKGxpbmssIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5kZWZhdWx0X2hhbmRsZXIobGluaywgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmsuZGF0YSgnaXMtYnVzeScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlZmF1bHRfaGFuZGxlcihsaW5rLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rLmRhdGEoJ2lzLWJ1c3knLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdEZvcm0gKClcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICAkYm9keS5vbignc3VibWl0JywgX3RoaXMuY29uZmlnLmZvcm1fY2xhc3MsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZvcm0gICAgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb24gID0gZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kICA9IChmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdwb3N0JyksXG4gICAgICAgICAgICAgICAgICAgIGRhdGEgICAgPSAhIXdpbmRvdy5Gb3JtRGF0YSA/IG5ldyBGb3JtRGF0YShmb3JtWzBdKSA6IGZvcm0uc2VyaWFsaXplKCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5kYXRhKCdpcy1idXN5JykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZvcm0uZGF0YSgnaXMtYnVzeScsIHRydWUpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBidXR0b24gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGJ1dHRvbi5kYXRhKCdsb2FkaW5nJykpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5kYXRhKCdvcmlnaW5hbCcsIGJ1dHRvbi50ZXh0KCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnRleHQoYnV0dG9uLmRhdGEoJ2xvYWRpbmcnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBidXR0b24uYWRkQ2xhc3MoJ3ByZWxvYWQnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZm9ybS5kYXRhKCdwcmVjYWxsYmFjaycpICYmIF90aGlzLmNhbGxiYWNrX3N0YWNrLmhhc093blByb3BlcnR5KGZvcm0uZGF0YSgncHJlY2FsbGJhY2snKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoIV90aGlzLmNhbGxiYWNrX3N0YWNrW2Zvcm0uZGF0YSgncHJlY2FsbGJhY2snKV0oZm9ybSkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLnNlbmQoXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kLFxuICAgICAgICAgICAgICAgICAgICBkYXRhLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0uZGF0YSgnY2FsbGJhY2snKSAmJiBfdGhpcy5jYWxsYmFja19zdGFjay5oYXNPd25Qcm9wZXJ0eShmb3JtLmRhdGEoJ2NhbGxiYWNrJykpKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNhbGxiYWNrX3N0YWNrW2Zvcm0uZGF0YSgnY2FsbGJhY2snKV0oZm9ybSwgcmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlZmF1bHRfaGFuZGxlcihmb3JtLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvcm0uaGFzQ2xhc3MoX3RoaXMuY29uZmlnLmZvcm1fcmVzZXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5maW5kKCcuJyArIF90aGlzLmNvbmZpZy5lcnJvcl9jbGFzcykucmVtb3ZlQ2xhc3MoX3RoaXMuY29uZmlnLmVycm9yX2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybS5nZXQoMCkucmVzZXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYnV0dG9uICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYnV0dG9uLmRhdGEoJ29yaWdpbmFsJykpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24udGV4dChidXR0b24uZGF0YSgnb3JpZ2luYWwnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUNsYXNzKCdwcmVsb2FkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm0uZGF0YSgnaXMtYnVzeScsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmRlZmF1bHRfaGFuZGxlcihmb3JtLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtLmRhdGEoJ2lzLWJ1c3knLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdCAoY29uZmlnKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV4dGVuZChjb25maWcpO1xuXG4gICAgICAgICAgICB0aGlzLmluaXRGb3JtKCk7XG4gICAgICAgICAgICB0aGlzLmluaXRMaW5rKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgYXBwLmFqYXhGb3JtLmluaXQoKTtcblxufSkoZG9jdW1lbnQuYm9keSk7Il19

'use strict';

var app = app || {};

(function (body) {
    "use strict";

    function CountdownTimer(elm, tl) {
        this.initialize.apply(this, arguments);
    }

    CountdownTimer.prototype = {
        initialize: function initialize(elm, tl) {
            var elem = document.getElementById(elm);

            if (elem) {
                this.elem = elem;
                this.tl = tl;
                this.countDown();
            }
        },

        countDown: function countDown() {
            var today = new Date(),
                day = Math.floor((this.tl - today) / (24 * 60 * 60 * 1000)),
                hour = Math.floor((this.tl - today) % (24 * 60 * 60 * 1000) / (60 * 60 * 1000)),
                min = Math.floor((this.tl - today) % (24 * 60 * 60 * 1000) / (60 * 1000)) % 60,
                sec = Math.floor((this.tl - today) % (24 * 60 * 60 * 1000) / 1000) % 60 % 60,
                me = this;

            if (this.tl - today > 0) {

                var timer = ['<div class="timer__parts__column"><div class="timer__parts__digit">', this.addZero(day), '</div><div class="timer__parts__caption">', declOfNum(day, ['День', 'Дня', 'Дней']), '</div></div>', '<div class="timer__parts__column"><div class="timer__parts__digit">', this.addZero(hour), '</div><div class="timer__parts__caption">', declOfNum(hour, ['Час', 'Часа', 'Часов']), '</div></div>', '<div class="timer__parts__column"><div class="timer__parts__digit">', this.addZero(min), '</div><div class="timer__parts__caption">', declOfNum(min, ['Минута', 'Минуты', 'Минут']), '</div></div>', '<div class="timer__parts__column"><div class="timer__parts__digit">', this.addZero(sec), '</div><div class="timer__parts__caption">', declOfNum(sec, ['Секунда', 'Секунды', 'Секунд']), '</div></div>'];

                if (this.elem) {
                    this.elem.innerHTML = timer.join('');
                    setTimeout(function () {
                        me.countDown();
                    }, 1000);
                } else {
                    return;
                }
            } else {
                return false;
            }
        },

        addZero: function addZero(num) {
            return ('0' + num).slice(-2);
        }
    };

    app.countdown = {
        init: function init() {
            // Акция длится не более 7 - 9 дней
            // if (day < 7)
            // {
            //     t = new Date(year, month, 7, 23, 59, 59);
            // }
            // else if(7<=day && day<14)
            // {
            //     t = new Date(year, month, 14, 23, 59, 59);
            // }
            // else if(14<=day && day<21)
            // {
            //     t = new Date(year, month, 21, 23, 59, 59);
            // }
            // else if(21<=day && day<31)
            // { // если в месяце меньше 31 дня, то Date просто перейдет на следующий месяц
            //     t = new Date(year, month, 31, 23, 59, 59);
            // }

            // new Date(year, month, date, hours, minutes, seconds, ms)
            new CountdownTimer('countdown', new Date(2017, 7, 1, 0, 0, 0));
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmNvdW50ZG93bi5qcyJdLCJuYW1lcyI6WyJhcHAiLCJDb3VudGRvd25UaW1lciIsImVsbSIsInRsIiwiaW5pdGlhbGl6ZSIsImFwcGx5IiwiYXJndW1lbnRzIiwicHJvdG90eXBlIiwiZWxlbSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb3VudERvd24iLCJ0b2RheSIsIkRhdGUiLCJkYXkiLCJNYXRoIiwiZmxvb3IiLCJob3VyIiwibWluIiwic2VjIiwibWUiLCJ0aW1lciIsImFkZFplcm8iLCJkZWNsT2ZOdW0iLCJpbm5lckhUTUwiLCJqb2luIiwic2V0VGltZW91dCIsIm51bSIsInNsaWNlIiwiY291bnRkb3duIiwiaW5pdCIsImJvZHkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUEsYUFBU0MsY0FBVCxDQUF3QkMsR0FBeEIsRUFBNEJDLEVBQTVCLEVBQStCO0FBQzNCLGFBQUtDLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLElBQXRCLEVBQTRCQyxTQUE1QjtBQUNIOztBQUVETCxtQkFBZU0sU0FBZixHQUF5QjtBQUNyQkgsb0JBQVksb0JBQVNGLEdBQVQsRUFBYUMsRUFBYixFQUFpQjtBQUN6QixnQkFBSUssT0FBT0MsU0FBU0MsY0FBVCxDQUF3QlIsR0FBeEIsQ0FBWDs7QUFFQSxnQkFBR00sSUFBSCxFQUFTO0FBQ0wscUJBQUtBLElBQUwsR0FBWUEsSUFBWjtBQUNBLHFCQUFLTCxFQUFMLEdBQVVBLEVBQVY7QUFDQSxxQkFBS1EsU0FBTDtBQUNIO0FBQ0osU0FUb0I7O0FBV3JCQSxtQkFBVyxxQkFBVztBQUNsQixnQkFBSUMsUUFBTSxJQUFJQyxJQUFKLEVBQVY7QUFBQSxnQkFDSUMsTUFBSUMsS0FBS0MsS0FBTCxDQUFXLENBQUMsS0FBS2IsRUFBTCxHQUFRUyxLQUFULEtBQWlCLEtBQUcsRUFBSCxHQUFNLEVBQU4sR0FBUyxJQUExQixDQUFYLENBRFI7QUFBQSxnQkFFSUssT0FBS0YsS0FBS0MsS0FBTCxDQUFZLENBQUMsS0FBS2IsRUFBTCxHQUFRUyxLQUFULEtBQWlCLEtBQUcsRUFBSCxHQUFNLEVBQU4sR0FBUyxJQUExQixDQUFELElBQW1DLEtBQUcsRUFBSCxHQUFNLElBQXpDLENBQVgsQ0FGVDtBQUFBLGdCQUdJTSxNQUFJSCxLQUFLQyxLQUFMLENBQVksQ0FBQyxLQUFLYixFQUFMLEdBQVFTLEtBQVQsS0FBaUIsS0FBRyxFQUFILEdBQU0sRUFBTixHQUFTLElBQTFCLENBQUQsSUFBbUMsS0FBRyxJQUF0QyxDQUFYLElBQXdELEVBSGhFO0FBQUEsZ0JBSUlPLE1BQUlKLEtBQUtDLEtBQUwsQ0FBWSxDQUFDLEtBQUtiLEVBQUwsR0FBUVMsS0FBVCxLQUFpQixLQUFHLEVBQUgsR0FBTSxFQUFOLEdBQVMsSUFBMUIsQ0FBRCxHQUFrQyxJQUE3QyxJQUFtRCxFQUFuRCxHQUFzRCxFQUo5RDtBQUFBLGdCQUtJUSxLQUFHLElBTFA7O0FBT0EsZ0JBQU0sS0FBS2pCLEVBQUwsR0FBVVMsS0FBWixHQUFzQixDQUExQixFQUE2Qjs7QUFFekIsb0JBQU1TLFFBQVEsQ0FDVixxRUFEVSxFQUM2RCxLQUFLQyxPQUFMLENBQWFSLEdBQWIsQ0FEN0QsRUFDZ0YsMkNBRGhGLEVBQzZIUyxVQUFVVCxHQUFWLEVBQWUsQ0FBQyxNQUFELEVBQVMsS0FBVCxFQUFnQixNQUFoQixDQUFmLENBRDdILEVBQ3NLLGNBRHRLLEVBRVYscUVBRlUsRUFFNkQsS0FBS1EsT0FBTCxDQUFhTCxJQUFiLENBRjdELEVBRWlGLDJDQUZqRixFQUU4SE0sVUFBVU4sSUFBVixFQUFnQixDQUFDLEtBQUQsRUFBUSxNQUFSLEVBQWdCLE9BQWhCLENBQWhCLENBRjlILEVBRXlLLGNBRnpLLEVBR1YscUVBSFUsRUFHNkQsS0FBS0ssT0FBTCxDQUFhSixHQUFiLENBSDdELEVBR2dGLDJDQUhoRixFQUc2SEssVUFBVUwsR0FBVixFQUFlLENBQUMsUUFBRCxFQUFXLFFBQVgsRUFBcUIsT0FBckIsQ0FBZixDQUg3SCxFQUc0SyxjQUg1SyxFQUlWLHFFQUpVLEVBSTZELEtBQUtJLE9BQUwsQ0FBYUgsR0FBYixDQUo3RCxFQUlnRiwyQ0FKaEYsRUFJNkhJLFVBQVVKLEdBQVYsRUFBZSxDQUFDLFNBQUQsRUFBWSxTQUFaLEVBQXVCLFFBQXZCLENBQWYsQ0FKN0gsRUFJK0ssY0FKL0ssQ0FBZDs7QUFPQSxvQkFBSSxLQUFLWCxJQUFULEVBQWU7QUFDWCx5QkFBS0EsSUFBTCxDQUFVZ0IsU0FBVixHQUFzQkgsTUFBTUksSUFBTixDQUFXLEVBQVgsQ0FBdEI7QUFDQUMsK0JBQVcsWUFBTTtBQUNiTiwyQkFBR1QsU0FBSDtBQUNILHFCQUZELEVBRUcsSUFGSDtBQUdILGlCQUxELE1BS087QUFDSDtBQUNIO0FBRUosYUFsQkQsTUFrQk87QUFDSCx1QkFBTyxLQUFQO0FBQ0g7QUFDSixTQXhDb0I7O0FBMENyQlcsaUJBQVEsaUJBQVNLLEdBQVQsRUFBYTtBQUNqQixtQkFBTyxDQUFDLE1BQUlBLEdBQUwsRUFBVUMsS0FBVixDQUFnQixDQUFDLENBQWpCLENBQVA7QUFDSDtBQTVDb0IsS0FBekI7O0FBK0NBNUIsUUFBSTZCLFNBQUosR0FBZ0I7QUFDWkMsY0FBTSxnQkFDTjtBQUNJO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBSTdCLGNBQUosQ0FBbUIsV0FBbkIsRUFBZ0MsSUFBSVksSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLENBQWxCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLENBQWhDO0FBQ0g7QUF2QlcsS0FBaEI7QUEwQkgsQ0FoRkQsRUFnRklKLFNBQVNzQixJQWhGYiIsImZpbGUiOiJfX2FwcC5jb3VudGRvd24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgZnVuY3Rpb24gQ291bnRkb3duVGltZXIoZWxtLHRsKXtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuXG4gICAgQ291bnRkb3duVGltZXIucHJvdG90eXBlPXsgXG4gICAgICAgIGluaXRpYWxpemU6IGZ1bmN0aW9uKGVsbSx0bCkge1xuICAgICAgICAgICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbG0pO1xuXG4gICAgICAgICAgICBpZihlbGVtKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtID0gZWxlbTtcbiAgICAgICAgICAgICAgICB0aGlzLnRsID0gdGw7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjb3VudERvd246IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHRvZGF5PW5ldyBEYXRlKCksXG4gICAgICAgICAgICAgICAgZGF5PU1hdGguZmxvb3IoKHRoaXMudGwtdG9kYXkpLygyNCo2MCo2MCoxMDAwKSksXG4gICAgICAgICAgICAgICAgaG91cj1NYXRoLmZsb29yKCgodGhpcy50bC10b2RheSklKDI0KjYwKjYwKjEwMDApKS8oNjAqNjAqMTAwMCkpLFxuICAgICAgICAgICAgICAgIG1pbj1NYXRoLmZsb29yKCgodGhpcy50bC10b2RheSklKDI0KjYwKjYwKjEwMDApKS8oNjAqMTAwMCkpJTYwLFxuICAgICAgICAgICAgICAgIHNlYz1NYXRoLmZsb29yKCgodGhpcy50bC10b2RheSklKDI0KjYwKjYwKjEwMDApKS8xMDAwKSU2MCU2MCxcbiAgICAgICAgICAgICAgICBtZT10aGlzO1xuXG4gICAgICAgICAgICBpZiAoKCB0aGlzLnRsIC0gdG9kYXkgKSA+IDApIHtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVyID0gW1xuICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInRpbWVyX19wYXJ0c19fY29sdW1uXCI+PGRpdiBjbGFzcz1cInRpbWVyX19wYXJ0c19fZGlnaXRcIj4nLCB0aGlzLmFkZFplcm8oZGF5KSAsJzwvZGl2PjxkaXYgY2xhc3M9XCJ0aW1lcl9fcGFydHNfX2NhcHRpb25cIj4nLCBkZWNsT2ZOdW0oZGF5LCBbJ9CU0LXQvdGMJywgJ9CU0L3RjycsICfQlNC90LXQuSddKSAsJzwvZGl2PjwvZGl2PicsXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGltZXJfX3BhcnRzX19jb2x1bW5cIj48ZGl2IGNsYXNzPVwidGltZXJfX3BhcnRzX19kaWdpdFwiPicsIHRoaXMuYWRkWmVybyhob3VyKSAsJzwvZGl2PjxkaXYgY2xhc3M9XCJ0aW1lcl9fcGFydHNfX2NhcHRpb25cIj4nLCBkZWNsT2ZOdW0oaG91ciwgWyfQp9Cw0YEnLCAn0KfQsNGB0LAnLCAn0KfQsNGB0L7QsiddKSAsJzwvZGl2PjwvZGl2PicsXG4gICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwidGltZXJfX3BhcnRzX19jb2x1bW5cIj48ZGl2IGNsYXNzPVwidGltZXJfX3BhcnRzX19kaWdpdFwiPicsIHRoaXMuYWRkWmVybyhtaW4pICwnPC9kaXY+PGRpdiBjbGFzcz1cInRpbWVyX19wYXJ0c19fY2FwdGlvblwiPicsIGRlY2xPZk51bShtaW4sIFsn0JzQuNC90YPRgtCwJywgJ9Cc0LjQvdGD0YLRiycsICfQnNC40L3Rg9GCJ10pICwnPC9kaXY+PC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0aW1lcl9fcGFydHNfX2NvbHVtblwiPjxkaXYgY2xhc3M9XCJ0aW1lcl9fcGFydHNfX2RpZ2l0XCI+JywgdGhpcy5hZGRaZXJvKHNlYykgLCc8L2Rpdj48ZGl2IGNsYXNzPVwidGltZXJfX3BhcnRzX19jYXB0aW9uXCI+JywgZGVjbE9mTnVtKHNlYywgWyfQodC10LrRg9C90LTQsCcsICfQodC10LrRg9C90LTRiycsICfQodC10LrRg9C90LQnXSkgLCc8L2Rpdj48L2Rpdj4nLFxuICAgICAgICAgICAgICAgIF07XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbS5pbm5lckhUTUwgPSB0aW1lci5qb2luKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZS5jb3VudERvd24oKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkWmVybzpmdW5jdGlvbihudW0peyBcbiAgICAgICAgICAgIHJldHVybiAoJzAnK251bSkuc2xpY2UoLTIpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGFwcC5jb3VudGRvd24gPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgLy8g0JDQutGG0LjRjyDQtNC70LjRgtGB0Y8g0L3QtSDQsdC+0LvQtdC1IDcgLSA5INC00L3QtdC5XG4gICAgICAgICAgICAvLyBpZiAoZGF5IDwgNylcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDcsIDIzLCA1OSwgNTkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZWxzZSBpZig3PD1kYXkgJiYgZGF5PDE0KVxuICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgLy8gICAgIHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMTQsIDIzLCA1OSwgNTkpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZWxzZSBpZigxNDw9ZGF5ICYmIGRheTwyMSlcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0ID0gbmV3IERhdGUoeWVhciwgbW9udGgsIDIxLCAyMywgNTksIDU5KTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGVsc2UgaWYoMjE8PWRheSAmJiBkYXk8MzEpXG4gICAgICAgICAgICAvLyB7IC8vINC10YHQu9C4INCyINC80LXRgdGP0YbQtSDQvNC10L3RjNGI0LUgMzEg0LTQvdGPLCDRgtC+IERhdGUg0L/RgNC+0YHRgtC+INC/0LXRgNC10LnQtNC10YIg0L3QsCDRgdC70LXQtNGD0Y7RidC40Lkg0LzQtdGB0Y/RhlxuICAgICAgICAgICAgLy8gICAgIHQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgMzEsIDIzLCA1OSwgNTkpO1xuICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAvLyBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSwgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIG1zKVxuICAgICAgICAgICAgbmV3IENvdW50ZG93blRpbWVyKCdjb3VudGRvd24nLCBuZXcgRGF0ZSgyMDE3LCA3LCAxLCAwLCAwLCAwKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSkoZG9jdW1lbnQuYm9keSk7Il19

'use strict';

var app = app || {};

(function (body) {
    "use strict";

    app.documents = {
        init: function init() {
            $('body').on('click', '.j-load-documents', function (e) {
                var $button = $(this);
                var motion = $button.data('motion');

                if (motion === 'show') {
                    $button.data('motion', 'hide');
                    $('#documents').find('.is-motion').removeClass('is-hidden');
                } else {
                    $button.data('motion', 'show');

                    $('html, body').stop().animate({ 'scrollTop': $('#documentation-anchor').offset().top }, 'fast');

                    setTimeout(function () {
                        $('#documents').find('.is-motion').addClass('is-hidden');
                    }, 200);
                }

                $button.closest('.page-button').toggleClass('_down').toggleClass('_up');
            });
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmRvY3VtZW50cy5qcyJdLCJuYW1lcyI6WyJhcHAiLCJkb2N1bWVudHMiLCJpbml0IiwiJCIsIm9uIiwiZSIsIiRidXR0b24iLCJtb3Rpb24iLCJkYXRhIiwiZmluZCIsInJlbW92ZUNsYXNzIiwic3RvcCIsImFuaW1hdGUiLCJvZmZzZXQiLCJ0b3AiLCJzZXRUaW1lb3V0IiwiYWRkQ2xhc3MiLCJjbG9zZXN0IiwidG9nZ2xlQ2xhc3MiLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLFNBQUosR0FBZ0I7QUFDWkMsWUFEWSxrQkFFWjtBQUNJQyxjQUFFLE1BQUYsRUFBVUMsRUFBVixDQUFhLE9BQWIsRUFBc0IsbUJBQXRCLEVBQTJDLFVBQVNDLENBQVQsRUFBWTtBQUNuRCxvQkFBTUMsVUFBVUgsRUFBRSxJQUFGLENBQWhCO0FBQ0Esb0JBQU1JLFNBQVNELFFBQVFFLElBQVIsQ0FBYSxRQUFiLENBQWY7O0FBRUEsb0JBQUlELFdBQVcsTUFBZixFQUF1QjtBQUNuQkQsNEJBQVFFLElBQVIsQ0FBYSxRQUFiLEVBQXVCLE1BQXZCO0FBQ0FMLHNCQUFFLFlBQUYsRUFBZ0JNLElBQWhCLENBQXFCLFlBQXJCLEVBQW1DQyxXQUFuQyxDQUErQyxXQUEvQztBQUNILGlCQUhELE1BR087QUFDSEosNEJBQVFFLElBQVIsQ0FBYSxRQUFiLEVBQXVCLE1BQXZCOztBQUVBTCxzQkFBRSxZQUFGLEVBQWdCUSxJQUFoQixHQUF1QkMsT0FBdkIsQ0FBK0IsRUFBRSxhQUFhVCxFQUFFLHVCQUFGLEVBQTJCVSxNQUEzQixHQUFvQ0MsR0FBbkQsRUFBL0IsRUFBeUYsTUFBekY7O0FBRUFDLCtCQUFXLFlBQVU7QUFDakJaLDBCQUFFLFlBQUYsRUFBZ0JNLElBQWhCLENBQXFCLFlBQXJCLEVBQW1DTyxRQUFuQyxDQUE0QyxXQUE1QztBQUNILHFCQUZELEVBRUcsR0FGSDtBQUdIOztBQUVEVix3QkFBUVcsT0FBUixDQUFnQixjQUFoQixFQUFnQ0MsV0FBaEMsQ0FBNEMsT0FBNUMsRUFBcURBLFdBQXJELENBQWlFLEtBQWpFO0FBQ0gsYUFsQkQ7QUFtQkg7QUF0QlcsS0FBaEI7QUF5QkgsQ0E1QkQsRUE0QklDLFNBQVNDLElBNUJiIiwiZmlsZSI6Il9fYXBwLmRvY3VtZW50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAuZG9jdW1lbnRzID0ge1xuICAgICAgICBpbml0ICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmotbG9hZC1kb2N1bWVudHMnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgJGJ1dHRvbiA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgbW90aW9uID0gJGJ1dHRvbi5kYXRhKCdtb3Rpb24nKTtcblxuICAgICAgICAgICAgICAgIGlmIChtb3Rpb24gPT09ICdzaG93Jykge1xuICAgICAgICAgICAgICAgICAgICAkYnV0dG9uLmRhdGEoJ21vdGlvbicsICdoaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNkb2N1bWVudHMnKS5maW5kKCcuaXMtbW90aW9uJykucmVtb3ZlQ2xhc3MoJ2lzLWhpZGRlbicpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICRidXR0b24uZGF0YSgnbW90aW9uJywgJ3Nob3cnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoeyAnc2Nyb2xsVG9wJzogJCgnI2RvY3VtZW50YXRpb24tYW5jaG9yJykub2Zmc2V0KCkudG9wIH0sICdmYXN0Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnI2RvY3VtZW50cycpLmZpbmQoJy5pcy1tb3Rpb24nKS5hZGRDbGFzcygnaXMtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJGJ1dHRvbi5jbG9zZXN0KCcucGFnZS1idXR0b24nKS50b2dnbGVDbGFzcygnX2Rvd24nKS50b2dnbGVDbGFzcygnX3VwJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTsiXX0=

"use strict";

var app = app || {};

(function (body) {
    "use strict";

    app.gallery = {
        init: function init() {
            $('.zoom').fancybox();
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmdhbGxlcnkuanMiXSwibmFtZXMiOlsiYXBwIiwiZ2FsbGVyeSIsImluaXQiLCIkIiwiZmFuY3lib3giLCJkb2N1bWVudCIsImJvZHkiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsTUFBTUEsT0FBTyxFQUFqQjs7QUFFQSxDQUFFLGdCQUFRO0FBQ047O0FBRUFBLFFBQUlDLE9BQUosR0FBYztBQUNWQyxZQURVLGtCQUVWO0FBQ0lDLGNBQUUsT0FBRixFQUFXQyxRQUFYO0FBQ0g7QUFKUyxLQUFkO0FBT0gsQ0FWRCxFQVVJQyxTQUFTQyxJQVZiIiwiZmlsZSI6Il9fYXBwLmdhbGxlcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYXBwLmdhbGxlcnkgPSB7XG4gICAgICAgIGluaXQgKClcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLnpvb20nKS5mYW5jeWJveCgpO1xuICAgICAgICB9XG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

"use strict";

var app = app || {};

(function (body) {
    "use strict";

    app.layzr = {
        init: function init() {
            $(window).lazyLoadXT({
                edgeY: 200,
                srcAttr: 'data-src'
            });
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLmxheXpyLmpzIl0sIm5hbWVzIjpbImFwcCIsImxheXpyIiwiaW5pdCIsIiQiLCJ3aW5kb3ciLCJsYXp5TG9hZFhUIiwiZWRnZVkiLCJzcmNBdHRyIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxLQUFKLEdBQVk7QUFDUkMsWUFEUSxrQkFFUjtBQUNJQyxjQUFFQyxNQUFGLEVBQVVDLFVBQVYsQ0FBcUI7QUFDakJDLHVCQUFRLEdBRFM7QUFFakJDLHlCQUFTO0FBRlEsYUFBckI7QUFJSDtBQVBPLEtBQVo7QUFVSCxDQWJELEVBYUlDLFNBQVNDLElBYmIiLCJmaWxlIjoiX19hcHAubGF5enIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgYXBwID0gYXBwIHx8IHt9O1xuXG4oKGJvZHkgPT4ge1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgYXBwLmxheXpyID0ge1xuICAgICAgICBpbml0ICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQod2luZG93KS5sYXp5TG9hZFhUKHtcbiAgICAgICAgICAgICAgICBlZGdlWTogIDIwMCxcbiAgICAgICAgICAgICAgICBzcmNBdHRyOiAnZGF0YS1zcmMnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTtcbiJdfQ==

'use strict';

var app = app || {};

(function (body) {
    "use strict";

    app.mask = {
        bind: function bind() {
            var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.mask-phone';

            new Cleave(selector, {
                phone: true,
                phoneRegionCode: 'ru'
            });
        },
        init: function init() {
            var _this_ = this;

            _this_.bind();

            $('body').on('popup.after_open', function (e, popup) {

                setTimeout(function () {
                    _this_.bind($(popup).find('.mask-phone'));
                }, 100);
            });
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLm1hc2suanMiXSwibmFtZXMiOlsiYXBwIiwibWFzayIsImJpbmQiLCJzZWxlY3RvciIsIkNsZWF2ZSIsInBob25lIiwicGhvbmVSZWdpb25Db2RlIiwiaW5pdCIsIl90aGlzXyIsIiQiLCJvbiIsImUiLCJwb3B1cCIsInNldFRpbWVvdXQiLCJmaW5kIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxJQUFKLEdBQVc7QUFDUEMsWUFETyxrQkFDd0I7QUFBQSxnQkFBMUJDLFFBQTBCLHVFQUFmLGFBQWU7O0FBQzNCLGdCQUFJQyxNQUFKLENBQVdELFFBQVgsRUFBcUI7QUFDakJFLHVCQUFPLElBRFU7QUFFakJDLGlDQUFpQjtBQUZBLGFBQXJCO0FBSUgsU0FOTTtBQVFQQyxZQVJPLGtCQVFBO0FBQ0gsZ0JBQU1DLFNBQVMsSUFBZjs7QUFFQUEsbUJBQU9OLElBQVA7O0FBRUFPLGNBQUUsTUFBRixFQUFVQyxFQUFWLENBQWEsa0JBQWIsRUFBaUMsVUFBU0MsQ0FBVCxFQUFZQyxLQUFaLEVBQW1COztBQUVoREMsMkJBQVcsWUFBTTtBQUNiTCwyQkFBT04sSUFBUCxDQUFZTyxFQUFFRyxLQUFGLEVBQVNFLElBQVQsQ0FBYyxhQUFkLENBQVo7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSCxhQUxEO0FBTUg7QUFuQk0sS0FBWDtBQXNCSCxDQXpCRCxFQXlCSUMsU0FBU0MsSUF6QmIiLCJmaWxlIjoiX19hcHAubWFzay5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAubWFzayA9IHtcbiAgICAgICAgYmluZChzZWxlY3RvciA9ICcubWFzay1waG9uZScpIHtcbiAgICAgICAgICAgIG5ldyBDbGVhdmUoc2VsZWN0b3IsIHtcbiAgICAgICAgICAgICAgICBwaG9uZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwaG9uZVJlZ2lvbkNvZGU6ICdydSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICBjb25zdCBfdGhpc18gPSB0aGlzO1xuXG4gICAgICAgICAgICBfdGhpc18uYmluZCgpO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ3BvcHVwLmFmdGVyX29wZW4nLCBmdW5jdGlvbihlLCBwb3B1cCkge1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzXy5iaW5kKCQocG9wdXApLmZpbmQoJy5tYXNrLXBob25lJykpO1xuICAgICAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTsiXX0=

'use strict';

var app = app || {};

(function (body) {
    "use strict";

    var isAnimated = false;

    var History = window.History;

    var isMobile = $(window).width() <= 667;
    var $hasScroll = $('html, body');
    var $navigation = $('#navigation');
    var navHeight = $navigation.height();
    var winHeight = $(window).height();

    app.navigation = {

        elements: [],

        compose: function compose() {
            this.elements = $('.j-section').map(function (key, item) {
                return {
                    offset: $(item).offset().top - navHeight,
                    element: $(item)
                };
            });
        },
        scrollToAnchor: function scrollToAnchor(hash, animate) {
            hash = hash.split('?')[0];

            var $target = $('#' + hash + '-anchor');

            if ($target.length) {
                isAnimated = true;
                var top = $target.offset().top - navHeight;

                if (animate) {
                    $hasScroll.stop().animate({ 'scrollTop': top }, 'medium', function () {
                        isAnimated = false;
                        $navigation.removeClass('is-disabled');
                    });
                } else {
                    $hasScroll.scrollTop(top);
                }
            }
        },
        setCurrent: function setCurrent($current, slug, title) {
            $navigation.find('.j-navigation.is-current').removeClass('is-current');
            $current.addClass('is-current');

            History.pushState(null, title, slug);
        },
        changeItem: function changeItem(scrollTop) {
            var $element = null;

            this.elements.map(function (key, item) {
                var element = item.element;

                if (scrollTop > item.offset - winHeight / 4) {
                    $element = element;
                }
            });

            if ($element !== null && $element.attr('id')) {
                var title = $element.data('title') || '';
                var slug = $element.attr('id').split('-')[0];
                var $current = $navigation.find('.j-navigation[href="/' + slug + '"]');

                if (!$current.hasClass('is-current')) {
                    this.setCurrent($current, slug, title);
                }
            }
        },
        check: function check() {
            var State = History.getState();

            if (State.url) {
                var slug = State.url.split('/')[3];
                var $current = $navigation.find('.j-navigation[href="/' + slug + '"]');

                this.setCurrent($current, slug, $('#' + slug + '-anchor').data('title'));
            }
        },
        init: function init() {
            var _this = this;

            $('body').on('click', '.j-navigation', function (e) {
                e.preventDefault();

                var $current = $(this);
                var slug = $current.attr('href').substr(1);
                $navigation.addClass('is-disabled');

                _this.scrollToAnchor(slug, true);
                _this.setCurrent($current, slug, $('#' + slug + '-anchor').data('title'));
            });

            setTimeout(function () {
                _this.compose();
                _this.check();
            }, 50);

            var last = Date.now();

            $(window).scroll(function () {
                if (!isAnimated) {
                    var differance = Date.now() - last;

                    if (differance >= 500) {
                        _this.changeItem($(window).scrollTop());
                        last = Date.now();
                    }
                }
            });
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLm5hdmlnYXRpb24uanMiXSwibmFtZXMiOlsiYXBwIiwiaXNBbmltYXRlZCIsIkhpc3RvcnkiLCJ3aW5kb3ciLCJpc01vYmlsZSIsIiQiLCJ3aWR0aCIsIiRoYXNTY3JvbGwiLCIkbmF2aWdhdGlvbiIsIm5hdkhlaWdodCIsImhlaWdodCIsIndpbkhlaWdodCIsIm5hdmlnYXRpb24iLCJlbGVtZW50cyIsImNvbXBvc2UiLCJtYXAiLCJrZXkiLCJpdGVtIiwib2Zmc2V0IiwidG9wIiwiZWxlbWVudCIsInNjcm9sbFRvQW5jaG9yIiwiaGFzaCIsImFuaW1hdGUiLCJzcGxpdCIsIiR0YXJnZXQiLCJsZW5ndGgiLCJzdG9wIiwicmVtb3ZlQ2xhc3MiLCJzY3JvbGxUb3AiLCJzZXRDdXJyZW50IiwiJGN1cnJlbnQiLCJzbHVnIiwidGl0bGUiLCJmaW5kIiwiYWRkQ2xhc3MiLCJwdXNoU3RhdGUiLCJjaGFuZ2VJdGVtIiwiJGVsZW1lbnQiLCJhdHRyIiwiZGF0YSIsImhhc0NsYXNzIiwiY2hlY2siLCJTdGF0ZSIsImdldFN0YXRlIiwidXJsIiwiaW5pdCIsIl90aGlzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJzdWJzdHIiLCJzZXRUaW1lb3V0IiwibGFzdCIsIkRhdGUiLCJub3ciLCJzY3JvbGwiLCJkaWZmZXJhbmNlIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBLFFBQUlDLGFBQWEsS0FBakI7O0FBRUEsUUFBTUMsVUFBVUMsT0FBT0QsT0FBdkI7O0FBRUEsUUFBTUUsV0FBV0MsRUFBRUYsTUFBRixFQUFVRyxLQUFWLE1BQXFCLEdBQXRDO0FBQ0EsUUFBTUMsYUFBYUYsRUFBRSxZQUFGLENBQW5CO0FBQ0EsUUFBTUcsY0FBY0gsRUFBRSxhQUFGLENBQXBCO0FBQ0EsUUFBTUksWUFBWUQsWUFBWUUsTUFBWixFQUFsQjtBQUNBLFFB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QixTQUFWLEVBQWpCO0FBQ0F3QiwrQkFBT0MsS0FBS0MsR0FBTCxFQUFQO0FBQ0g7QUFDSjtBQUNKLGFBVEQ7QUFVSDtBQXhHWSxLQUFqQjtBQTJHSCxDQXhIRCxFQXdISUcsU0FBU0MsSUF4SGIiLCJmaWxlIjoiX19hcHAubmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBsZXQgaXNBbmltYXRlZCA9IGZhbHNlO1xuXG4gICAgY29uc3QgSGlzdG9yeSA9IHdpbmRvdy5IaXN0b3J5O1xuXG4gICAgY29uc3QgaXNNb2JpbGUgPSAkKHdpbmRvdykud2lkdGgoKSA8PSA2Njc7XG4gICAgY29uc3QgJGhhc1Njcm9sbCA9ICQoJ2h0bWwsIGJvZHknKTtcbiAgICBjb25zdCAkbmF2aWdhdGlvbiA9ICQoJyNuYXZpZ2F0aW9uJyk7XG4gICAgY29uc3QgbmF2SGVpZ2h0ID0gJG5hdmlnYXRpb24uaGVpZ2h0KCk7XG4gICAgY29uc3Qgd2luSGVpZ2h0ID0gJCh3aW5kb3cpLmhlaWdodCgpO1xuXG4gICAgYXBwLm5hdmlnYXRpb24gPSB7XG5cbiAgICAgICAgZWxlbWVudHM6IFtdLFxuXG4gICAgICAgIGNvbXBvc2UgKCkge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50cyA9ICQoJy5qLXNlY3Rpb24nKS5tYXAoKGtleSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogJChpdGVtKS5vZmZzZXQoKS50b3AgLSBuYXZIZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6ICQoaXRlbSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzY3JvbGxUb0FuY2hvciAoaGFzaCwgYW5pbWF0ZSkge1xuICAgICAgICAgICAgaGFzaCA9IGhhc2guc3BsaXQoJz8nKVswXTtcblxuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoYCMke2hhc2h9LWFuY2hvcmApO1xuXG4gICAgICAgICAgICBpZiAoJHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpc0FuaW1hdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcCAtIG5hdkhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmIChhbmltYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICRoYXNTY3JvbGwuc3RvcCgpLmFuaW1hdGUoeyAnc2Nyb2xsVG9wJzogdG9wIH0sICdtZWRpdW0nLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0FuaW1hdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAkbmF2aWdhdGlvbi5yZW1vdmVDbGFzcygnaXMtZGlzYWJsZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGhhc1Njcm9sbC5zY3JvbGxUb3AodG9wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2V0Q3VycmVudCAoJGN1cnJlbnQsIHNsdWcsIHRpdGxlKSB7XG4gICAgICAgICAgICAkbmF2aWdhdGlvbi5maW5kKCcuai1uYXZpZ2F0aW9uLmlzLWN1cnJlbnQnKS5yZW1vdmVDbGFzcygnaXMtY3VycmVudCcpO1xuICAgICAgICAgICAgJGN1cnJlbnQuYWRkQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgSGlzdG9yeS5wdXNoU3RhdGUobnVsbCwgdGl0bGUsIHNsdWcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGNoYW5nZUl0ZW0gKHNjcm9sbFRvcCkge1xuICAgICAgICAgICAgbGV0ICRlbGVtZW50ID0gbnVsbDtcblxuICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5tYXAoKGtleSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpdGVtLmVsZW1lbnQ7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID4gKGl0ZW0ub2Zmc2V0IC0gd2luSGVpZ2h0IC8gNCkpIHtcbiAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJGVsZW1lbnQgIT09IG51bGwgJiYgJGVsZW1lbnQuYXR0cignaWQnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gJGVsZW1lbnQuZGF0YSgndGl0bGUnKSB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBzbHVnID0gJGVsZW1lbnQuYXR0cignaWQnKS5zcGxpdCgnLScpWzBdO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRjdXJyZW50ID0gJG5hdmlnYXRpb24uZmluZCgnLmotbmF2aWdhdGlvbltocmVmPVwiLycgKyBzbHVnICsgJ1wiXScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkY3VycmVudC5oYXNDbGFzcygnaXMtY3VycmVudCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudCgkY3VycmVudCwgc2x1ZywgdGl0bGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBjaGVjayAoKSB7XG4gICAgICAgICAgICBjb25zdCBTdGF0ZSA9IEhpc3RvcnkuZ2V0U3RhdGUoKTtcblxuICAgICAgICAgICAgaWYgKFN0YXRlLnVybCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNsdWcgPSBTdGF0ZS51cmwuc3BsaXQoJy8nKVszXTtcbiAgICAgICAgICAgICAgICBjb25zdCAkY3VycmVudCA9ICRuYXZpZ2F0aW9uLmZpbmQoJy5qLW5hdmlnYXRpb25baHJlZj1cIi8nICsgc2x1ZyArICdcIl0nKTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudCgkY3VycmVudCwgc2x1ZywgJChgIyR7c2x1Z30tYW5jaG9yYCkuZGF0YSgndGl0bGUnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdCAoKSB7XG4gICAgICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmotbmF2aWdhdGlvbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCAkY3VycmVudCA9ICQodGhpcyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2x1ZyA9ICRjdXJyZW50LmF0dHIoJ2hyZWYnKS5zdWJzdHIoMSk7XG4gICAgICAgICAgICAgICAgJG5hdmlnYXRpb24uYWRkQ2xhc3MoJ2lzLWRpc2FibGVkJyk7XG5cbiAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGxUb0FuY2hvcihzbHVnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRDdXJyZW50KCRjdXJyZW50LCBzbHVnLCAkKGAjJHtzbHVnfS1hbmNob3JgKS5kYXRhKCd0aXRsZScpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb21wb3NlKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hlY2soKTtcbiAgICAgICAgICAgIH0sIDUwKTtcblxuICAgICAgICAgICAgbGV0IGxhc3QgPSBEYXRlLm5vdygpO1xuXG4gICAgICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQW5pbWF0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlmZmVyYW5jZSA9IERhdGUubm93KCkgLSBsYXN0O1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaWZmZXJhbmNlID49IDUwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hhbmdlSXRlbSgkKHdpbmRvdykuc2Nyb2xsVG9wKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGFzdCA9IERhdGUubm93KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKShkb2N1bWVudC5ib2R5KTtcbiJdfQ==

'use strict';

var app = app || {};

(function (body) {
    "use strict";

    app.popup = {
        init: function init() {
            $.popup.init('.j-open-popup', {
                hashChange: false,
                cssPosition: false,
                wrapper: '.layout-wrapper'
            });
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLnBvcHVwLmpzIl0sIm5hbWVzIjpbImFwcCIsInBvcHVwIiwiaW5pdCIsIiQiLCJoYXNoQ2hhbmdlIiwiY3NzUG9zaXRpb24iLCJ3cmFwcGVyIiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxLQUFKLEdBQVk7QUFDUkMsY0FBTSxnQkFDTjtBQUNJQyxjQUFFRixLQUFGLENBQVFDLElBQVIsQ0FBYSxlQUFiLEVBQThCO0FBQzFCRSw0QkFBWSxLQURjO0FBRTFCQyw2QkFBYSxLQUZhO0FBRzFCQyx5QkFBUztBQUhpQixhQUE5QjtBQUtIO0FBUk8sS0FBWjtBQVdILENBZEQsRUFjSUMsU0FBU0MsSUFkYiIsImZpbGUiOiJfX2FwcC5wb3B1cC5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBhcHAucG9wdXAgPSB7XG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgJC5wb3B1cC5pbml0KCcuai1vcGVuLXBvcHVwJywge1xuICAgICAgICAgICAgICAgIGhhc2hDaGFuZ2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNzc1Bvc2l0aW9uOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB3cmFwcGVyOiAnLmxheW91dC13cmFwcGVyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSkoZG9jdW1lbnQuYm9keSk7Il19

'use strict';

var app = app || {};

;(function (body) {
    "use strict";

    var _this;

    app.sandwich = {

        config: {
            keyHooks: !1,
            selector: '.js-sandwich-menu',
            wrapper: '.layout-wrapper',
            overlay: '.overlay'
        },

        extend: function extend(config) {
            _this = this;

            if (typeof config !== 'undefined') {
                var x;
                for (x in config) {
                    if (typeof _this.config[x] !== 'undefined') _this.config[x] = config[x];
                }
            }
        },

        isOpen: function isOpen() {
            return $('body').hasClass('page-visible');
        },

        hide: function hide() {
            $('body').removeClass('page-open');

            setTimeout(function () {
                $('body').removeClass('page-visible');
            }, 10);

            $(this.config.overlay).css({
                'visibility': 'hidden'
            });
        },

        toggle: function toggle() {
            if ($('body').hasClass('page-visible')) {
                $('body').removeClass('page-open');

                setTimeout(function () {
                    $('body').removeClass('page-visible');
                }, 200);
            } else {
                $('body').addClass('page-open');

                setTimeout(function () {
                    $('body').addClass('page-visible');
                }, 10);
            }

            var visibility = 'visible';

            if (!$('body').hasClass('page-open')) {
                visibility = 'hidden';
            }

            $(_this.config.overlay).css({
                'visibility': visibility
            });
        },

        sandwichTrigger: function sandwichTrigger() {
            _this = this;

            if (_this.config.keyHooks) {
                $('body').on('keydown', function (e) {
                    if (e.keyCode == 27 && _this.isOpen()) {
                        _this.toggle();
                    }
                });
            };

            $('body').on('click', _this.config.selector, function (e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = false;
                _this.toggle();
            });
        },

        overlayTrigger: function overlayTrigger() {
            _this = this;

            $('body').on('click', _this.config.overlay, function (e) {
                _this.hide();
            });
        },

        init: function init() {
            this.extend({
                keyHooks: !0,
                selector: '.js-sandwich-menu',
                wrapper: '.layout-wrapper',
                overlay: '#menu-overlay'
            });

            this.sandwichTrigger();
            this.overlayTrigger();
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLnNhbmR3aWNoLmpzIl0sIm5hbWVzIjpbImFwcCIsImJvZHkiLCJfdGhpcyIsInNhbmR3aWNoIiwiY29uZmlnIiwia2V5SG9va3MiLCJzZWxlY3RvciIsIndyYXBwZXIiLCJvdmVybGF5IiwiZXh0ZW5kIiwieCIsImlzT3BlbiIsIiQiLCJoYXNDbGFzcyIsImhpZGUiLCJyZW1vdmVDbGFzcyIsInNldFRpbWVvdXQiLCJjc3MiLCJ0b2dnbGUiLCJhZGRDbGFzcyIsInZpc2liaWxpdHkiLCJzYW5kd2ljaFRyaWdnZXIiLCJvbiIsImUiLCJrZXlDb2RlIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsIm92ZXJsYXlUcmlnZ2VyIiwiaW5pdCIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBQyxDQUFDLFVBQVNDLElBQVQsRUFBYztBQUNaOztBQUVBLFFBQUlDLEtBQUo7O0FBRUFGLFFBQUlHLFFBQUosR0FBZTs7QUFFWEMsZ0JBQVE7QUFDSkMsc0JBQVUsQ0FBQyxDQURQO0FBRUpDLHNCQUFVLG1CQUZOO0FBR0pDLHFCQUFTLGlCQUhMO0FBSUpDLHFCQUFTO0FBSkwsU0FGRzs7QUFTWEMsZ0JBQVEsZ0JBQVNMLE1BQVQsRUFDUjtBQUNJRixvQkFBUSxJQUFSOztBQUVBLGdCQUFJLE9BQU9FLE1BQVAsS0FBa0IsV0FBdEIsRUFDQTtBQUNJLG9CQUFJTSxDQUFKO0FBQ0EscUJBQUtBLENBQUwsSUFBVU4sTUFBVixFQUNBO0FBQ0ksd0JBQUksT0FBT0YsTUFBTUUsTUFBTixDQUFhTSxDQUFiLENBQVAsS0FBMkIsV0FBL0IsRUFDSVIsTUFBTUUsTUFBTixDQUFhTSxDQUFiLElBQWtCTixPQUFPTSxDQUFQLENBQWxCO0FBQ1A7QUFDSjtBQUNKLFNBdEJVOztBQXdCWEMsZ0JBQVEsa0JBQ1I7QUFDSSxtQkFBT0MsRUFBRSxNQUFGLEVBQVVDLFFBQVYsQ0FBbUIsY0FBbkIsQ0FBUDtBQUNILFNBM0JVOztBQTZCWEMsY0FBTSxnQkFDTjtBQUNJRixjQUFFLE1BQUYsRUFBVUcsV0FBVixDQUFzQixXQUF0Qjs7QUFFQUMsdUJBQVcsWUFBVTtBQUNqQkosa0JBQUUsTUFBRixFQUFVRyxXQUFWLENBQXNCLGNBQXRCO0FBQ0gsYUFGRCxFQUVHLEVBRkg7O0FBSUFILGNBQUUsS0FBS1IsTUFBTCxDQUFZSSxPQUFkLEVBQXVCUyxHQUF2QixDQUEyQjtBQUN2Qiw4QkFBYztBQURTLGFBQTNCO0FBR0gsU0F4Q1U7O0FBMENYQyxnQkFBUSxrQkFDUjtBQUNJLGdCQUFJTixFQUFFLE1BQUYsRUFBVUMsUUFBVixDQUFtQixjQUFuQixDQUFKLEVBQ0E7QUFDSUQsa0JBQUUsTUFBRixFQUFVRyxXQUFWLENBQXNCLFdBQXRCOztBQUVBQywyQkFBVyxZQUFVO0FBQ2pCSixzQkFBRSxNQUFGLEVBQVVHLFdBQVYsQ0FBc0IsY0FBdEI7QUFDSCxpQkFGRCxFQUVHLEdBRkg7QUFHSCxhQVBELE1BU0E7QUFDSUgsa0JBQUUsTUFBRixFQUFVTyxRQUFWLENBQW1CLFdBQW5COztBQUVBSCwyQkFBVyxZQUFVO0FBQ2pCSixzQkFBRSxNQUFGLEVBQVVPLFFBQVYsQ0FBbUIsY0FBbkI7QUFDSCxpQkFGRCxFQUVHLEVBRkg7QUFHSDs7QUFFRCxnQkFBSUMsYUFBYSxTQUFqQjs7QUFFQSxnQkFBSSxDQUFDUixFQUFFLE1BQUYsRUFBVUMsUUFBVixDQUFtQixXQUFuQixDQUFMLEVBQ0E7QUFDSU8sNkJBQWEsUUFBYjtBQUNIOztBQUVEUixjQUFFVixNQUFNRSxNQUFOLENBQWFJLE9BQWYsRUFBd0JTLEdBQXhCLENBQTRCO0FBQ3hCLDhCQUFjRztBQURVLGFBQTVCO0FBR0gsU0F2RVU7O0FBeUVYQyx5QkFBaUIsMkJBQ2pCO0FBQ0luQixvQkFBUSxJQUFSOztBQUVBLGdCQUFJQSxNQUFNRSxNQUFOLENBQWFDLFFBQWpCLEVBQ0E7QUFDSU8sa0JBQUUsTUFBRixFQUFVVSxFQUFWLENBQWEsU0FBYixFQUF3QixVQUFTQyxDQUFULEVBQVk7QUFDaEMsd0JBQUdBLEVBQUVDLE9BQUYsSUFBYSxFQUFiLElBQW1CdEIsTUFBTVMsTUFBTixFQUF0QixFQUNBO0FBQ0lULDhCQUFNZ0IsTUFBTjtBQUNIO0FBQ0osaUJBTEQ7QUFNSDs7QUFFRE4sY0FBRSxNQUFGLEVBQVVVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCcEIsTUFBTUUsTUFBTixDQUFhRSxRQUFuQyxFQUE2QyxVQUFTaUIsQ0FBVCxFQUFXO0FBQ3BEQSxrQkFBRUUsY0FBRixHQUFtQkYsRUFBRUUsY0FBRixFQUFuQixHQUF3Q0YsRUFBRUcsV0FBRixHQUFnQixLQUF4RDtBQUNBeEIsc0JBQU1nQixNQUFOO0FBQ0gsYUFIRDtBQUlILFNBM0ZVOztBQTZGWFMsd0JBQWdCLDBCQUNoQjtBQUNJekIsb0JBQVEsSUFBUjs7QUFFQVUsY0FBRSxNQUFGLEVBQVVVLEVBQVYsQ0FBYSxPQUFiLEVBQXNCcEIsTUFBTUUsTUFBTixDQUFhSSxPQUFuQyxFQUE0QyxVQUFTZSxDQUFULEVBQVc7QUFDbkRyQixzQkFBTVksSUFBTjtBQUNILGFBRkQ7QUFHSCxTQXBHVTs7QUFzR1hjLGNBQU0sZ0JBQ047QUFDSSxpQkFBS25CLE1BQUwsQ0FBWTtBQUNSSiwwQkFBVSxDQUFDLENBREg7QUFFUkMsMEJBQVUsbUJBRkY7QUFHUkMseUJBQVMsaUJBSEQ7QUFJUkMseUJBQVM7QUFKRCxhQUFaOztBQU9BLGlCQUFLYSxlQUFMO0FBQ0EsaUJBQUtNLGNBQUw7QUFDSDtBQWpIVSxLQUFmO0FBb0hILENBekhBLEVBeUhFRSxTQUFTNUIsSUF6SFgiLCJmaWxlIjoiX19hcHAuc2FuZHdpY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgYXBwID0gYXBwIHx8IHt9O1xuXG47KGZ1bmN0aW9uKGJvZHkpe1xuICAgIFwidXNlIHN0cmljdFwiO1xuXG4gICAgdmFyIF90aGlzO1xuXG4gICAgYXBwLnNhbmR3aWNoID0ge1xuXG4gICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAga2V5SG9va3M6ICExLFxuICAgICAgICAgICAgc2VsZWN0b3I6ICcuanMtc2FuZHdpY2gtbWVudScsXG4gICAgICAgICAgICB3cmFwcGVyOiAnLmxheW91dC13cmFwcGVyJyxcbiAgICAgICAgICAgIG92ZXJsYXk6ICcub3ZlcmxheSdcbiAgICAgICAgfSxcblxuICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uKGNvbmZpZylcbiAgICAgICAge1xuICAgICAgICAgICAgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbmZpZyAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdmFyIHg7XG4gICAgICAgICAgICAgICAgZm9yICh4IGluIGNvbmZpZylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX3RoaXMuY29uZmlnW3hdICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbmZpZ1t4XSA9IGNvbmZpZ1t4XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaXNPcGVuOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2UtdmlzaWJsZScpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGhpZGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdwYWdlLW9wZW4nKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5yZW1vdmVDbGFzcygncGFnZS12aXNpYmxlJyk7XG4gICAgICAgICAgICB9LCAxMCk7XG5cbiAgICAgICAgICAgICQodGhpcy5jb25maWcub3ZlcmxheSkuY3NzKHtcbiAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICdoaWRkZW4nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCQoJ2JvZHknKS5oYXNDbGFzcygncGFnZS12aXNpYmxlJykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdwYWdlLW9wZW4nKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdwYWdlLXZpc2libGUnKTtcbiAgICAgICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygncGFnZS1vcGVuJyk7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hZGRDbGFzcygncGFnZS12aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcblxuICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuaGFzQ2xhc3MoJ3BhZ2Utb3BlbicpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAkKF90aGlzLmNvbmZpZy5vdmVybGF5KS5jc3Moe1xuICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogdmlzaWJpbGl0eVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2FuZHdpY2hUcmlnZ2VyOiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKF90aGlzLmNvbmZpZy5rZXlIb29rcylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKCdib2R5Jykub24oJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGUua2V5Q29kZSA9PSAyNyAmJiBfdGhpcy5pc09wZW4oKSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBfdGhpcy5jb25maWcuc2VsZWN0b3IsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgX3RoaXMudG9nZ2xlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBvdmVybGF5VHJpZ2dlcjogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBfdGhpcy5jb25maWcub3ZlcmxheSwgZnVuY3Rpb24oZSl7XG4gICAgICAgICAgICAgICAgX3RoaXMuaGlkZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmV4dGVuZCh7XG4gICAgICAgICAgICAgICAga2V5SG9va3M6ICEwLFxuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnLmpzLXNhbmR3aWNoLW1lbnUnLFxuICAgICAgICAgICAgICAgIHdyYXBwZXI6ICcubGF5b3V0LXdyYXBwZXInLFxuICAgICAgICAgICAgICAgIG92ZXJsYXk6ICcjbWVudS1vdmVybGF5J1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuc2FuZHdpY2hUcmlnZ2VyKCk7XG4gICAgICAgICAgICB0aGlzLm92ZXJsYXlUcmlnZ2VyKCk7XG4gICAgICAgIH1cbiAgICB9O1xuXG59KShkb2N1bWVudC5ib2R5KTsiXX0=

'use strict';

var app = app || {};

(function (body) {
    "use strict";

    var $slider = $('#carousel-slider');

    app.slider = {

        count: 0,
        current: 0,
        timeout: 6500,
        interval: null,

        drop: function drop(callback) {
            var $target = $slider.find('.j-slide.is-active');
            $target.removeClass('is-last').removeClass('is-animate');
            $target.removeClass('is-active');

            callback();

            // setTimeout(() => {
            //     $target.removeClass('is-active');

            //     setTimeout(() => {
            //         callback();
            //     }, 10)
            // }, 350);
        },
        bind: function bind() {
            console.log('go to: ', this.current);

            var $target = $slider.find('.j-slide').eq(this.current - 1);

            console.log('bind: ', $target, this.current - 1);

            $target.addClass('is-active').addClass('is-last');
            $target.addClass('is-animate');

            this.startInterval();

            // setTimeout(() => {
            //     $target.addClass('is-animate');
            // }, 10);
        },
        prev: function prev() {
            var _this = this;

            _this.stopInterval();

            _this.drop(function () {
                _this.current -= 1;

                if (_this.current === 0) {
                    _this.current = _this.count;
                }

                _this.bind();
            });
        },
        next: function next() {
            var _this = this;

            _this.stopInterval();

            _this.drop(function () {
                _this.current += 1;

                if (_this.current >= _this.count) {
                    _this.current = 0;
                }

                _this.bind();
            });
        },
        goTo: function goTo(index) {
            var _this = this;

            _this.stopInterval();

            _this.drop(function () {
                _this.current = index;
                _this.bind();
            });
        },
        dots: function dots() {
            var i = 0;
            var item = '';
            var dots = [];
            var _this = this;

            for (i = 0; i < _this.count; i++) {
                if (i === 0) {
                    item = '<a href="#' + i + '" class="s-slider__dots__item j-slider-goto is-active"></a>';
                } else {
                    item = '<a href="#' + i + '" class="s-slider__dots__item j-slider-goto"></a>';
                }

                dots.push(item);
            }

            _this.dotsItem.html(dots.join(''));
            _this.dotsItem.addClass('is-active');

            $('body').on('click', '.j-slider-goto', function (e) {
                e.preventDefault();

                if (!$(this).hasClass('is-active')) {
                    _this.dotsItem.find('.j-slider-goto.is-active').removeClass('is-active');

                    _this.goTo($(this).attr('href').substr(-1));

                    $(this).addClass('is-active');
                }
            });
        },
        events: function events() {
            var _this2 = this;

            this.arrowPrev.on('click', function (e) {
                e.preventDefault();
                _this2.prev();
            });

            this.arrowNext.on('click', function (e) {
                e.preventDefault();
                _this2.next();
            });
        },
        stopInterval: function stopInterval() {
            console.log('clearInterval');
            clearInterval(this.interval);
        },
        startInterval: function startInterval() {
            var _this3 = this;

            console.log('startInterval');
            this.interval = setInterval(function () {
                _this3.next();
            }, this.timeout);
        },
        make: function make() {
            this.count = $slider.find('.j-slide').length;
            this.current = $slider.find('.j-slide.is-active').index();

            this.dotsItem = $('#carousel-slider--dots');
            this.arrowPrev = $('#carousel-slider--prev');
            this.arrowNext = $('#carousel-slider--next');

            this.arrowPrev.addClass('is-active');
            this.arrowNext.addClass('is-active');

            this.dots();

            this.events();

            this.startInterval();
        },
        init: function init() {
            if ($slider.length && $slider.find('.j-slide').length) {
                this.make();
            }
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLnNsaWRlci5qcyJdLCJuYW1lcyI6WyJhcHAiLCIkc2xpZGVyIiwiJCIsInNsaWRlciIsImNvdW50IiwiY3VycmVudCIsInRpbWVvdXQiLCJpbnRlcnZhbCIsImRyb3AiLCJjYWxsYmFjayIsIiR0YXJnZXQiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJiaW5kIiwiY29uc29sZSIsImxvZyIsImVxIiwiYWRkQ2xhc3MiLCJzdGFydEludGVydmFsIiwicHJldiIsIl90aGlzIiwic3RvcEludGVydmFsIiwibmV4dCIsImdvVG8iLCJpbmRleCIsImRvdHMiLCJpIiwiaXRlbSIsInB1c2giLCJkb3RzSXRlbSIsImh0bWwiLCJqb2luIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJoYXNDbGFzcyIsImF0dHIiLCJzdWJzdHIiLCJldmVudHMiLCJhcnJvd1ByZXYiLCJhcnJvd05leHQiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJtYWtlIiwibGVuZ3RoIiwiaW5pdCIsImRvY3VtZW50IiwiYm9keSJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxNQUFNQSxPQUFPLEVBQWpCOztBQUVBLENBQUUsZ0JBQVE7QUFDTjs7QUFFQSxRQUFNQyxVQUFVQyxFQUFFLGtCQUFGLENBQWhCOztBQUVBRixRQUFJRyxNQUFKLEdBQWE7O0FBRVRDLGVBQU8sQ0FGRTtBQUdUQyxpQkFBUyxDQUhBO0FBSVRDLGlCQUFTLElBSkE7QUFLVEMsa0JBQVUsSUFMRDs7QUFPVEMsWUFQUyxnQkFPSEMsUUFQRyxFQU9PO0FBQ1osZ0JBQU1DLFVBQVVULFFBQVFVLElBQVIsQ0FBYSxvQkFBYixDQUFoQjtBQUNBRCxvQkFBUUUsV0FBUixDQUFvQixTQUFwQixFQUErQkEsV0FBL0IsQ0FBMkMsWUFBM0M7QUFDQUYsb0JBQVFFLFdBQVIsQ0FBb0IsV0FBcEI7O0FBRUFIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDSCxTQXJCUTtBQXVCVEksWUF2QlMsa0JB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OztBQUVBLGlCQUFLYSxNQUFMOztBQUVBLGlCQUFLcEIsYUFBTDtBQUNILFNBekpRO0FBMkpUMkIsWUEzSlMsa0JBMkpEO0FBQ0osZ0JBQUk1QyxRQUFRMkMsTUFBUixJQUFrQjNDLFFBQVFVLElBQVIsQ0FBYSxVQUFiLEVBQXlCaUMsTUFBL0MsRUFBdUQ7QUFDbkQscUJBQUtELElBQUw7QUFDSDtBQUNKO0FBL0pRLEtBQWI7QUFtS0gsQ0F4S0QsRUF3S0lHLFNBQVNDLElBeEtiIiwiZmlsZSI6Il9fYXBwLnNsaWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImxldCBhcHAgPSBhcHAgfHwge307XG5cbigoYm9keSA9PiB7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgICBjb25zdCAkc2xpZGVyID0gJCgnI2Nhcm91c2VsLXNsaWRlcicpO1xuXG4gICAgYXBwLnNsaWRlciA9IHtcblxuICAgICAgICBjb3VudDogMCxcbiAgICAgICAgY3VycmVudDogMCxcbiAgICAgICAgdGltZW91dDogNjUwMCxcbiAgICAgICAgaW50ZXJ2YWw6IG51bGwsXG5cbiAgICAgICAgZHJvcCAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkc2xpZGVyLmZpbmQoJy5qLXNsaWRlLmlzLWFjdGl2ZScpO1xuICAgICAgICAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnaXMtbGFzdCcpLnJlbW92ZUNsYXNzKCdpcy1hbmltYXRlJyk7XG4gICAgICAgICAgICAkdGFyZ2V0LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgY2FsbGJhY2soKTtcblxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgJHRhcmdldC5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG5cbiAgICAgICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIC8vICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgIC8vICAgICB9LCAxMClcbiAgICAgICAgICAgIC8vIH0sIDM1MCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYmluZCAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZ28gdG86ICcsIHRoaXMuY3VycmVudCk7XG5cbiAgICAgICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkc2xpZGVyLmZpbmQoJy5qLXNsaWRlJykuZXEoKHRoaXMuY3VycmVudCAtIDEpKTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2JpbmQ6ICcsICR0YXJnZXQsIHRoaXMuY3VycmVudCAtIDEpO1xuXG4gICAgICAgICAgICAkdGFyZ2V0LmFkZENsYXNzKCdpcy1hY3RpdmUnKS5hZGRDbGFzcygnaXMtbGFzdCcpO1xuICAgICAgICAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtYW5pbWF0ZScpO1xuXG4gICAgICAgICAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoKTtcblxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAvLyAgICAgJHRhcmdldC5hZGRDbGFzcygnaXMtYW5pbWF0ZScpO1xuICAgICAgICAgICAgLy8gfSwgMTApO1xuICAgICAgICB9LFxuXG4gICAgICAgIHByZXYgKCkge1xuICAgICAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBfdGhpcy5zdG9wSW50ZXJ2YWwoKTtcblxuICAgICAgICAgICAgX3RoaXMuZHJvcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudCAtPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmN1cnJlbnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudCA9IF90aGlzLmNvdW50O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIF90aGlzLmJpbmQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIG5leHQgKCkge1xuICAgICAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgICBfdGhpcy5zdG9wSW50ZXJ2YWwoKTtcblxuICAgICAgICAgICAgX3RoaXMuZHJvcCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudCArPSAxO1xuXG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmN1cnJlbnQgPj0gX3RoaXMuY291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY3VycmVudCA9IDA7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgX3RoaXMuYmluZCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZ29UbyAoaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcblxuICAgICAgICAgICAgX3RoaXMuc3RvcEludGVydmFsKCk7XG5cbiAgICAgICAgICAgIF90aGlzLmRyb3AoKCkgPT4ge1xuICAgICAgICAgICAgICAgIF90aGlzLmN1cnJlbnQgPSBpbmRleDtcbiAgICAgICAgICAgICAgICBfdGhpcy5iaW5kKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBkb3RzICgpIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGxldCBpdGVtID0gJyc7XG4gICAgICAgICAgICBjb25zdCBkb3RzID0gW107XG4gICAgICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvciAoaT0wOyBpPF90aGlzLmNvdW50OyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtID0gJzxhIGhyZWY9XCIjJytpKydcIiBjbGFzcz1cInMtc2xpZGVyX19kb3RzX19pdGVtIGotc2xpZGVyLWdvdG8gaXMtYWN0aXZlXCI+PC9hPic7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbSA9ICc8YSBocmVmPVwiIycraSsnXCIgY2xhc3M9XCJzLXNsaWRlcl9fZG90c19faXRlbSBqLXNsaWRlci1nb3RvXCI+PC9hPic7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZG90cy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfdGhpcy5kb3RzSXRlbS5odG1sKGRvdHMuam9pbignJykpO1xuICAgICAgICAgICAgX3RoaXMuZG90c0l0ZW0uYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qLXNsaWRlci1nb3RvJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaXMtYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZG90c0l0ZW0uZmluZCgnLmotc2xpZGVyLWdvdG8uaXMtYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmdvVG8oJCh0aGlzKS5hdHRyKCdocmVmJykuc3Vic3RyKC0xKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXZlbnRzICgpIHtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dQcmV2Lm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMucHJldigpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuYXJyb3dOZXh0Lm9uKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMubmV4dCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc3RvcEludGVydmFsICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGVhckludGVydmFsJyk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgICB9LFxuXG4gICAgICAgIHN0YXJ0SW50ZXJ2YWwgKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3N0YXJ0SW50ZXJ2YWwnKTtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7IHRoaXMubmV4dCgpIH0sIHRoaXMudGltZW91dCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbWFrZSAoKSB7XG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gJHNsaWRlci5maW5kKCcuai1zbGlkZScpLmxlbmd0aDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9ICRzbGlkZXIuZmluZCgnLmotc2xpZGUuaXMtYWN0aXZlJykuaW5kZXgoKTtcblxuICAgICAgICAgICAgdGhpcy5kb3RzSXRlbSA9ICQoJyNjYXJvdXNlbC1zbGlkZXItLWRvdHMnKTtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dQcmV2ID0gJCgnI2Nhcm91c2VsLXNsaWRlci0tcHJldicpO1xuICAgICAgICAgICAgdGhpcy5hcnJvd05leHQgPSAkKCcjY2Fyb3VzZWwtc2xpZGVyLS1uZXh0Jyk7XG5cbiAgICAgICAgICAgIHRoaXMuYXJyb3dQcmV2LmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuYXJyb3dOZXh0LmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgdGhpcy5kb3RzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZXZlbnRzKCk7XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnRJbnRlcnZhbCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluaXQgKCkge1xuICAgICAgICAgICAgaWYgKCRzbGlkZXIubGVuZ3RoICYmICRzbGlkZXIuZmluZCgnLmotc2xpZGUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1ha2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

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
                    prevArrow: '<button class="carousel__nav carousel__nav--left slick-prev"><svg class="carousel__nav__ico" role="image"><use xlink:href="#left-arrow"/></svg></button>',
                    nextArrow: '<button class="carousel__nav carousel__nav--right slick-next"><svg class="carousel__nav__ico" role="image"><use xlink:href="#right-arrow"/></svg></button>',
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

            // $('#timeline-carousel').html('');

            // var count = $('#timeline-cache').find('.carousel__item.is-year-'+ year +'.is-month-'+month).length;

            // $('#timeline-cache').find('.carousel__item.is-year-'+ year +'.is-month-'+month).each(function(k, item) {
            //     $('#timeline-carousel').append($(this).clone());

            //     if ((k+1) == count) {
            //         setTimeout(function() {
            //             _self_._initCarousel();
            //         }, 50);
            //     }
            // });

            // setTimeout(function() {
            //     $('.zoom').fancybox();
            // }, 300);

            _self_._initCarousel();
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
            this.filter = $('#timeline-filter');
            this.years = this.filter.find('.j-timeline-years');
            this.months = this.filter.find('.j-timeline-months');

            this._match();
            this._events();

            this._reinitCarousel();
        }
    };
})(document.body);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9fYXBwLnRpbWVsaW5lLmpzIl0sIm5hbWVzIjpbImFwcCIsInRpbWVsaW5lIiwiZGF0YSIsImZpbHRlciIsInllYXJzIiwibW9udGhzIiwiX2luaXRDYXJvdXNlbCIsIndpZHRoIiwiJCIsIndpbmRvdyIsInNsaWRlcyIsImZpbmQiLCJsZW5ndGgiLCJzbGljayIsImxhenlMb2FkIiwiZG90cyIsImluZmluaXRlIiwiZHJhZ2dhYmxlIiwic3BlZWQiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJmYWRlIiwiX2N1cnJlbnRZZWFyIiwicGFyc2VJbnQiLCJfY3VycmVudE1vbnRoIiwiX2hhbmRsZSIsImN1cnJlbnQiLCJlYWNoIiwia2V5IiwiaXRlbSIsInN0cmluZ3MiLCJzcGxpdCIsIngiLCJwdXNoIiwieWVhciIsIl9yZWluaXRDYXJvdXNlbCIsIl9zZWxmXyIsIm1vbnRoIiwiaGFzQ2xhc3MiLCJfY2hhbmdlRmlyc3RNb250aCIsInRyaWdnZXIiLCJfbWF0Y2giLCJyZW1vdmVDbGFzcyIsImsiLCJpbmRleE9mIiwiYWRkQ2xhc3MiLCJfZXZlbnRzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJpbml0IiwiZG9jdW1lbnQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLE1BQU1BLE9BQU8sRUFBakI7O0FBRUEsQ0FBRSxnQkFBUTtBQUNOOztBQUVBQSxRQUFJQyxRQUFKLEdBQWU7O0FBRVhDLGNBQU0sRUFGSztBQUdYQyxnQkFBUSxJQUhHO0FBSVhDLGVBQU8sSUFKSTtBQUtYQyxnQkFBUSxJQUxHOztBQU9YQyxxQkFQVywyQkFPTTtBQUNiLGdCQUFJQyxRQUFRQyxFQUFFQyxNQUFGLEVBQVVGLEtBQVYsRUFBWjtBQUFBLGdCQUNJRyxTQUFTRixFQUFFLG9CQUFGLEVBQXdCRyxJQUF4QixDQUE2QixjQUE3QixF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c0JBQUUsSUFBRixFQUFRMEMsUUFBUixDQUFpQixZQUFqQjs7QUFFQVQsMkJBQU9LLE1BQVA7QUFDQUwsMkJBQU9HLGlCQUFQO0FBQ0FILDJCQUFPRCxlQUFQO0FBQ0g7QUFDSixhQVpEOztBQWNBLGlCQUFLbkMsTUFBTCxDQUFZTSxJQUFaLENBQWlCLHlCQUFqQixFQUE0Q3lDLEVBQTVDLENBQStDLE9BQS9DLEVBQXdELFVBQVNDLENBQVQsRUFBWTtBQUNoRUEsa0JBQUVDLGNBQUY7O0FBRUEsb0JBQUksQ0FBQzlDLEVBQUUsSUFBRixFQUFRbUMsUUFBUixDQUFpQixZQUFqQixDQUFMLEVBQXFDO0FBQ2pDbkMsc0JBQUUsa0JBQUYsRUFBc0JHLElBQXRCLENBQTJCLG9CQUEzQixFQUFpREEsSUFBakQsQ0FBc0QsYUFBdEQsRUFBcUVvQyxXQUFyRSxDQUFpRixZQUFqRjs7QUFFQXZDLHNCQUFFLElBQUYsRUFBUTBDLFFBQVIsQ0FBaUIsWUFBakI7O0FBRUFULDJCQUFPSyxNQUFQO0FBQ0FMLDJCQUFPRCxlQUFQO0FBQ0g7QUFDSixhQVhEO0FBWUgsU0E1S1U7QUE4S1hlLFlBOUtXLGtCQStLWDtBQUNJLGlCQUFLcEQsTUFBTCxHQUFjSyxFQUFFLGtCQUFGLENBQWQ7QUFDQSxpQkFBS0osS0FBTCxHQUFhLEtBQUtELE1BQUwsQ0FBWVEsSUFBWixDQUFpQixtQkFBakIsQ0FBYjtBQUNBLGlCQUFLTixNQUFMLEdBQWMsS0FBS0YsTUFBTCxDQUFZUSxJQUFaLENBQWlCLG9CQUFqQixDQUFkOztBQUVBLGlCQUFLbUMsTUFBTDtBQUNBLGlCQUFLSyxPQUFMOztBQUVBLGlCQUFLWCxlQUFMO0FBQ0g7QUF4TFUsS0FBZjtBQTJMSCxDQTlMRCxFQThMSWdCLFNBQVNDLElBOUxiIiwiZmlsZSI6Il9fYXBwLnRpbWVsaW5lLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IGFwcCA9IGFwcCB8fCB7fTtcblxuKChib2R5ID0+IHtcbiAgICAndXNlIHN0cmljdCc7XG5cbiAgICBhcHAudGltZWxpbmUgPSB7XG5cbiAgICAgICAgZGF0YToge30sXG4gICAgICAgIGZpbHRlcjogbnVsbCxcbiAgICAgICAgeWVhcnM6IG51bGwsXG4gICAgICAgIG1vbnRoczogbnVsbCxcblxuICAgICAgICBfaW5pdENhcm91c2VsICgpIHtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9ICQod2luZG93KS53aWR0aCgpLFxuICAgICAgICAgICAgICAgIHNsaWRlcyA9ICQoJyN0aW1lbGluZS1jYXJvdXNlbCcpLmZpbmQoJy5zbGljay1zbGlkZScpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICh3aWR0aCA+IDc2OCAmJiBzbGlkZXMgPj0gNCkgfHxcbiAgICAgICAgICAgICAgICAod2lkdGggPiA1NjggJiYgc2xpZGVzID49IDMpIHx8XG4gICAgICAgICAgICAgICAgKHdpZHRoID4gMzc1ICYmIHNsaWRlcyA+PSAyKSB8fFxuICAgICAgICAgICAgICAgICh3aWR0aCA8IDM3NSAmJiBzbGlkZXMgPj0gMSlcbiAgICAgICAgICAgICkge1xuXG4gICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuc2xpY2soe1xuICAgICAgICAgICAgICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHNwZWVkOiAyNTksXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gY2xhc3M9XCJjYXJvdXNlbF9fbmF2IGNhcm91c2VsX19uYXYtLWxlZnQgc2xpY2stcHJldlwiPjxzdmcgY2xhc3M9XCJjYXJvdXNlbF9fbmF2X19pY29cIiByb2xlPVwiaW1hZ2VcIj48dXNlIHhsaW5rOmhyZWY9XCIjbGVmdC1hcnJvd1wiLz48L3N2Zz48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWxfX25hdiBjYXJvdXNlbF9fbmF2LS1yaWdodCBzbGljay1uZXh0XCI+PHN2ZyBjbGFzcz1cImNhcm91c2VsX19uYXZfX2ljb1wiIHJvbGU9XCJpbWFnZVwiPjx1c2UgeGxpbms6aHJlZj1cIiNyaWdodC1hcnJvd1wiLz48L3N2Zz48L2J1dHRvbj4nLFxuICAgICAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA1NjgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMzc1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBfY3VycmVudFllYXIgKClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMueWVhcnMuZmluZCgnLmlzLWN1cnJlbnQnKS5kYXRhKCd2YWx1ZScpKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfY3VycmVudE1vbnRoICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLm1vbnRocy5maW5kKCcuaXMtY3VycmVudCcpLmRhdGEoJ3ZhbHVlJykpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9oYW5kbGUgKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5kYXRhLmN1cnJlbnQgPSB0aGlzLl9jdXJyZW50WWVhcigpO1xuICAgICAgICAgICAgdGhpcy5kYXRhLm1vbnRocyA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLm1vbnRocy5maW5kKCcuai10aW1lbGluZS1tb250aHMtaXRlbScpLmVhY2goKGtleSwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHZhciB5ZWFycyA9IFtdLCBzdHJpbmdzID0gJChpdGVtKS5kYXRhKCdpZicpICsgJyc7XG5cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHN0cmluZ3MgIT09ICd1bmRlZmluZWQnICYmIHN0cmluZ3MgIT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHllYXJzID0gc3RyaW5ncy5zcGxpdCgnLCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHggaW4geWVhcnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHllYXJzW3hdID0gcGFyc2VJbnQoeWVhcnNbeF0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLm1vbnRocy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgeWVhcjogeWVhcnNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9yZWluaXRDYXJvdXNlbCAoKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgX3NlbGZfID0gdGhpcyxcbiAgICAgICAgICAgICAgICB5ZWFyID0gdGhpcy5fY3VycmVudFllYXIoKSxcbiAgICAgICAgICAgICAgICBtb250aCA9IHRoaXMuX2N1cnJlbnRNb250aCgpO1xuXG4gICAgICAgICAgICBpZiAoJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuaGFzQ2xhc3MoJ3NsaWNrLWluaXRpYWxpemVkJykpIHtcbiAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtY2Fyb3VzZWwnKS5zbGljaygndW5zbGljaycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyAkKCcjdGltZWxpbmUtY2Fyb3VzZWwnKS5odG1sKCcnKTtcblxuICAgICAgICAgICAgLy8gdmFyIGNvdW50ID0gJCgnI3RpbWVsaW5lLWNhY2hlJykuZmluZCgnLmNhcm91c2VsX19pdGVtLmlzLXllYXItJysgeWVhciArJy5pcy1tb250aC0nK21vbnRoKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIC8vICQoJyN0aW1lbGluZS1jYWNoZScpLmZpbmQoJy5jYXJvdXNlbF9faXRlbS5pcy15ZWFyLScrIHllYXIgKycuaXMtbW9udGgtJyttb250aCkuZWFjaChmdW5jdGlvbihrLCBpdGVtKSB7XG4gICAgICAgICAgICAvLyAgICAgJCgnI3RpbWVsaW5lLWNhcm91c2VsJykuYXBwZW5kKCQodGhpcykuY2xvbmUoKSk7XG5cbiAgICAgICAgICAgIC8vICAgICBpZiAoKGsrMSkgPT0gY291bnQpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIF9zZWxmXy5faW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICAvLyAgICAgICAgIH0sIDUwKTtcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyB9KTtcblxuICAgICAgICAgICAgLy8gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIC8vICAgICAkKCcuem9vbScpLmZhbmN5Ym94KCk7XG4gICAgICAgICAgICAvLyB9LCAzMDApO1xuXG4gICAgICAgICAgICBfc2VsZl8uX2luaXRDYXJvdXNlbCgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIF9jaGFuZ2VGaXJzdE1vbnRoICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMubW9udGhzLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocy1pdGVtLmlzLWFjdGl2ZTpmaXJzdCcpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgX21hdGNoICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9zZWxmXyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuX2hhbmRsZSgpO1xuXG4gICAgICAgICAgICB0aGlzLm1vbnRocy5maW5kKCcuai10aW1lbGluZS1tb250aHMtaXRlbScpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAgICAgICAgICAgJC5lYWNoKHRoaXMuZGF0YS5tb250aHMsIChrLCBpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0ueWVhci5pbmRleE9mKHRoaXMuZGF0YS5jdXJyZW50KSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQoaXRlbS5pdGVtKS5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuZmlsdGVyLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgfSxcblxuICAgICAgICBfZXZlbnRzICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IF9zZWxmXyA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMueWVhcnMuZmluZCgnLmotdGltZWxpbmUteWVhcnMtaXRlbScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2lzLWN1cnJlbnQnKSkge1xuICAgICAgICAgICAgICAgICAgICAkKCcjdGltZWxpbmUtZmlsdGVyJykuZmluZCgnLmotdGltZWxpbmUteWVhcnMnKS5maW5kKCcuaXMtY3VycmVudCcpLnJlbW92ZUNsYXNzKCdpcy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaXMtY3VycmVudCcpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9zZWxmXy5fbWF0Y2goKTtcbiAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9jaGFuZ2VGaXJzdE1vbnRoKCk7XG4gICAgICAgICAgICAgICAgICAgIF9zZWxmXy5fcmVpbml0Q2Fyb3VzZWwoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy5tb250aHMuZmluZCgnLmotdGltZWxpbmUtbW9udGhzLWl0ZW0nKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdpcy1jdXJyZW50JykpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI3RpbWVsaW5lLWZpbHRlcicpLmZpbmQoJy5qLXRpbWVsaW5lLW1vbnRocycpLmZpbmQoJy5pcy1jdXJyZW50JykucmVtb3ZlQ2xhc3MoJ2lzLWN1cnJlbnQnKTtcblxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpcy1jdXJyZW50Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgX3NlbGZfLl9tYXRjaCgpO1xuICAgICAgICAgICAgICAgICAgICBfc2VsZl8uX3JlaW5pdENhcm91c2VsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5pdCAoKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZpbHRlciA9ICQoJyN0aW1lbGluZS1maWx0ZXInKTtcbiAgICAgICAgICAgIHRoaXMueWVhcnMgPSB0aGlzLmZpbHRlci5maW5kKCcuai10aW1lbGluZS15ZWFycycpO1xuICAgICAgICAgICAgdGhpcy5tb250aHMgPSB0aGlzLmZpbHRlci5maW5kKCcuai10aW1lbGluZS1tb250aHMnKTtcblxuICAgICAgICAgICAgdGhpcy5fbWF0Y2goKTtcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cygpO1xuXG4gICAgICAgICAgICB0aGlzLl9yZWluaXRDYXJvdXNlbCgpO1xuICAgICAgICB9XG4gICAgfTtcblxufSkpKGRvY3VtZW50LmJvZHkpOyJdfQ==

'use strict';

function yandexMap() {
    ymaps.ready(function () {
        var YMap,
            myPlacemark,
            is_mobile = $(window).width() <= 667;

        YMap = new ymaps.Map('location-map', {
            center: [44.970930, 38.934538],
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9feWFuZGV4Lm1hcC5qcyJdLCJuYW1lcyI6WyJ5YW5kZXhNYXAiLCJ5bWFwcyIsInJlYWR5IiwiWU1hcCIsIm15UGxhY2VtYXJrIiwiaXNfbW9iaWxlIiwiJCIsIndpbmRvdyIsIndpZHRoIiwiTWFwIiwiY2VudGVyIiwiem9vbSIsImNvbnRyb2xzIiwiYmVoYXZpb3JzIiwiZGlzYWJsZSIsImdldCIsIm9wdGlvbnMiLCJzZXQiLCJyaWdodCIsInRvcCIsIlBsYWNlbWFyayIsImdldENlbnRlciIsImljb25MYXlvdXQiLCJpY29uSW1hZ2VIcmVmIiwiaWNvbkltYWdlU2l6ZSIsImljb25JbWFnZU9mZnNldCIsImdlb09iamVjdHMiLCJhZGQiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsU0FBVCxHQUFxQjtBQUNqQkMsVUFBTUMsS0FBTixDQUFZLFlBQVk7QUFDcEIsWUFBSUMsSUFBSjtBQUFBLFlBQVVDLFdBQVY7QUFBQSxZQUF1QkMsWUFBWUMsRUFBRUMsTUFBRixFQUFVQyxLQUFWLE1BQXFCLEdBQXhEOztBQUVBTCxlQUFPLElBQUlGLE1BQU1RLEdBQVYsQ0FBYyxjQUFkLEVBQThCO0FBQ2pDQyxvQkFBUSxDQUFDLFNBQUQsRUFBWSxTQUFaLENBRHlCO0FBRWpDQyxrQkFBTSxFQUYyQjtBQUdqQ0Msc0JBQVUsQ0FBQyxhQUFELEVBQWdCLG1CQUFoQjtBQUh1QixTQUE5QixDQUFQOztBQU1BVCxhQUFLVSxTQUFMLENBQWVDLE9BQWYsQ0FBdUIsWUFBdkI7QUFDQVgsYUFBS1UsU0FBTCxDQUFlQyxPQUFmLENBQXVCLFlBQXZCO0FBQ0FYLGFBQUtTLFFBQUwsQ0FBY0csR0FBZCxDQUFrQixhQUFsQixFQUFpQ0MsT0FBakMsQ0FBeUNDLEdBQXpDLENBQTZDLE1BQTdDLEVBQXFELE9BQXJEO0FBQ0FkLGFBQUtTLFFBQUwsQ0FBY0csR0FBZCxDQUFrQixhQUFsQixFQUFpQ0MsT0FBakMsQ0FBeUNDLEdBQXpDLENBQTZDLFVBQTdDLEVBQXlELEVBQUVDLE9BQU8sRUFBVCxFQUFhQyxLQUFLLEVBQWxCLEVBQXpEOztBQUVBLFlBQUlkLFNBQUosRUFBZTtBQUNYRixpQkFBS1UsU0FBTCxDQUFlQyxPQUFmLENBQXVCLE1BQXZCO0FBQ0g7O0FBRURWLHNCQUFjLElBQUlILE1BQU1tQixTQUFWLENBQW9CakIsS0FBS2tCLFNBQUwsRUFBcEIsRUFBc0MsRUFBdEMsRUFBMEM7QUFDcERDLHdCQUFZLGVBRHdDO0FBRXBEQywyQkFBZSw4QkFGcUM7QUFHcERDLDJCQUFlLENBQUMsRUFBRCxFQUFLLEVBQUwsQ0FIcUM7QUFJcERDLDZCQUFpQixDQUFDLENBQUMsRUFBRixFQUFNLENBQUMsRUFBUDtBQUptQyxTQUExQyxDQUFkOztBQU9BdEIsYUFBS3VCLFVBQUwsQ0FBZ0JDLEdBQWhCLENBQW9CdkIsV0FBcEI7QUFDSCxLQTFCRDtBQTJCSCIsImZpbGUiOiJfX3lhbmRleC5tYXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiB5YW5kZXhNYXAoKSB7XG4gICAgeW1hcHMucmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgWU1hcCwgbXlQbGFjZW1hcmssIGlzX21vYmlsZSA9ICQod2luZG93KS53aWR0aCgpIDw9IDY2NztcbiAgICAgICAgXG4gICAgICAgIFlNYXAgPSBuZXcgeW1hcHMuTWFwKCdsb2NhdGlvbi1tYXAnLCB7XG4gICAgICAgICAgICBjZW50ZXI6IFs0NC45NzA5MzAsIDM4LjkzNDUzOF0sXG4gICAgICAgICAgICB6b29tOiAxOCxcbiAgICAgICAgICAgIGNvbnRyb2xzOiBbJ3pvb21Db250cm9sJywgJ2Z1bGxzY3JlZW5Db250cm9sJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgWU1hcC5iZWhhdmlvcnMuZGlzYWJsZSgnbXVsdGlUb3VjaCcpO1xuICAgICAgICBZTWFwLmJlaGF2aW9ycy5kaXNhYmxlKCdzY3JvbGxab29tJyk7XG4gICAgICAgIFlNYXAuY29udHJvbHMuZ2V0KCd6b29tQ29udHJvbCcpLm9wdGlvbnMuc2V0KCdzaXplJywgJ3NtYWxsJyk7XG4gICAgICAgIFlNYXAuY29udHJvbHMuZ2V0KCd6b29tQ29udHJvbCcpLm9wdGlvbnMuc2V0KCdwb3NpdGlvbicsIHsgcmlnaHQ6IDEwLCB0b3A6IDUwIH0pO1xuXG4gICAgICAgIGlmIChpc19tb2JpbGUpIHtcbiAgICAgICAgICAgIFlNYXAuYmVoYXZpb3JzLmRpc2FibGUoJ2RyYWcnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhZTWFwLmdldENlbnRlcigpLCB7fSwge1xuICAgICAgICAgICAgaWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLFxuICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogJy9pbWFnZXMvaWNvL2xvY2F0aW9uLXBpbi5zdmcnLFxuICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzI5LCA0MF0sXG4gICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMjksIC00MF1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgWU1hcC5nZW9PYmplY3RzLmFkZChteVBsYWNlbWFyayk7XG4gICAgfSk7XG59Il19

"use strict";

$(document).ready(function () {
    app.init();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJhcHAiLCJpbml0Il0sIm1hcHBpbmdzIjoiOztBQUFBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUN6QkMsUUFBSUMsSUFBSjtBQUNILENBRkQiLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIGFwcC5pbml0KCk7XG59KTtcbiJdfQ==
