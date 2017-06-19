'use strict';

(function (global) {
	'use strict';

	global.console = global.console || {};
	var con = global.console,
	    prop,
	    method,
	    empty = {},
	    dummy = function dummy() {},
	    properties = 'memory'.split(','),
	    methods = 'assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn'.split(',');
	while (prop = properties.pop()) {
		if (!con[prop]) con[prop] = empty;
	}while (method = methods.pop()) {
		if (!con[method]) con[method] = dummy;
	}
})(typeof window === 'undefined' ? undefined : window);

!function () {
	function e(e, t) {
		var n = 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size: 14px;' + (e ? "font-weight: bold;" : "") + "color: " + t + ";";
		return n;
	}

	if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
		console.log("%c♥ %c✰ %cCELEBRO.CMS %c✰ %c http://cms.celebro.ru %c♥", e(!0, "#f00"), e(!0, "#af55e2"), e(!0, "#777"), e(!0, "#af55e2"), e(!0, "#557de2"), e(!0, "#f00"));
	} else {
		console.log('celebro.cms http://cms.celebro.ru');
	}
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jb25zb2xlLmpzIl0sIm5hbWVzIjpbImdsb2JhbCIsImNvbnNvbGUiLCJjb24iLCJwcm9wIiwibWV0aG9kIiwiZW1wdHkiLCJkdW1teSIsInByb3BlcnRpZXMiLCJzcGxpdCIsIm1ldGhvZHMiLCJwb3AiLCJ3aW5kb3ciLCJlIiwidCIsIm4iLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJsb2ciXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxVQUFTQSxNQUFULEVBQWlCO0FBQ2pCOztBQUNBQSxRQUFPQyxPQUFQLEdBQWlCRCxPQUFPQyxPQUFQLElBQWtCLEVBQW5DO0FBQ0EsS0FBSUMsTUFBTUYsT0FBT0MsT0FBakI7QUFBQSxLQUNDRSxJQUREO0FBQUEsS0FDT0MsTUFEUDtBQUFBLEtBRUNDLFFBQVEsRUFGVDtBQUFBLEtBR0NDLFFBQVEsU0FBUkEsS0FBUSxHQUFXLENBQUUsQ0FIdEI7QUFBQSxLQUlDQyxhQUFhLFNBQVNDLEtBQVQsQ0FBZSxHQUFmLENBSmQ7QUFBQSxLQUtDQyxVQUFXLHVNQUFELENBQTBNRCxLQUExTSxDQUFnTixHQUFoTixDQUxYO0FBTUEsUUFBT0wsT0FBT0ksV0FBV0csR0FBWCxFQUFkO0FBQWdDLE1BQUksQ0FBQ1IsSUFBSUMsSUFBSixDQUFMLEVBQWdCRCxJQUFJQyxJQUFKLElBQVlFLEtBQVo7QUFBaEQsRUFDQSxPQUFPRCxTQUFTSyxRQUFRQyxHQUFSLEVBQWhCO0FBQStCLE1BQUksQ0FBQ1IsSUFBSUUsTUFBSixDQUFMLEVBQWtCRixJQUFJRSxNQUFKLElBQWNFLEtBQWQ7QUFBakQ7QUFDQSxDQVhELEVBV0csT0FBT0ssTUFBUCxLQUFrQixXQUFsQixlQUF1Q0EsTUFYMUM7O0FBYUEsQ0FBQyxZQUFXO0FBQ1IsVUFBU0MsQ0FBVCxDQUFXQSxDQUFYLEVBQWNDLENBQWQsRUFBaUI7QUFDYixNQUFJQyxJQUFJLGtGQUFrRkYsSUFBSSxvQkFBSixHQUEyQixFQUE3RyxJQUFtSCxTQUFuSCxHQUErSEMsQ0FBL0gsR0FBbUksR0FBM0k7QUFDQSxTQUFPQyxDQUFQO0FBQ0g7O0FBRUosS0FBSUMsVUFBVUMsU0FBVixDQUFvQkMsV0FBcEIsR0FBa0NDLE9BQWxDLENBQTBDLFFBQTFDLElBQXNELENBQUMsQ0FBM0QsRUFBOEQ7QUFDN0RqQixVQUFRa0IsR0FBUixDQUFZLHdEQUFaLEVBQXNFUCxFQUFFLENBQUMsQ0FBSCxFQUFNLE1BQU4sQ0FBdEUsRUFBcUZBLEVBQUUsQ0FBQyxDQUFILEVBQU0sU0FBTixDQUFyRixFQUF1R0EsRUFBRSxDQUFDLENBQUgsRUFBTSxNQUFOLENBQXZHLEVBQXNIQSxFQUFFLENBQUMsQ0FBSCxFQUFNLFNBQU4sQ0FBdEgsRUFBd0lBLEVBQUUsQ0FBQyxDQUFILEVBQU0sU0FBTixDQUF4SSxFQUEwSkEsRUFBRSxDQUFDLENBQUgsRUFBTSxNQUFOLENBQTFKO0FBQ0EsRUFGRCxNQUdLO0FBQ0pYLFVBQVFrQixHQUFSLENBQVksbUNBQVo7QUFDQTtBQUNELENBWkEsRUFBRCIsImZpbGUiOiJfY29uc29sZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbihnbG9iYWwpIHtcblx0J3VzZSBzdHJpY3QnO1xuXHRnbG9iYWwuY29uc29sZSA9IGdsb2JhbC5jb25zb2xlIHx8IHt9O1xuXHR2YXIgY29uID0gZ2xvYmFsLmNvbnNvbGUsXG5cdFx0cHJvcCwgbWV0aG9kLFxuXHRcdGVtcHR5ID0ge30sXG5cdFx0ZHVtbXkgPSBmdW5jdGlvbigpIHt9LFxuXHRcdHByb3BlcnRpZXMgPSAnbWVtb3J5Jy5zcGxpdCgnLCcpLFxuXHRcdG1ldGhvZHMgPSAoJ2Fzc2VydCxjbGVhcixjb3VudCxkZWJ1ZyxkaXIsZGlyeG1sLGVycm9yLGV4Y2VwdGlvbixncm91cCxncm91cENvbGxhcHNlZCxncm91cEVuZCxpbmZvLGxvZyxtYXJrVGltZWxpbmUscHJvZmlsZSxwcm9maWxlcyxwcm9maWxlRW5kLHNob3csdGFibGUsdGltZSx0aW1lRW5kLHRpbWVsaW5lLHRpbWVsaW5lRW5kLHRpbWVTdGFtcCx0cmFjZSx3YXJuJykuc3BsaXQoJywnKTtcblx0d2hpbGUgKHByb3AgPSBwcm9wZXJ0aWVzLnBvcCgpKSBpZiAoIWNvbltwcm9wXSkgY29uW3Byb3BdID0gZW1wdHk7XG5cdHdoaWxlIChtZXRob2QgPSBtZXRob2RzLnBvcCgpKSBpZiAoIWNvblttZXRob2RdKSBjb25bbWV0aG9kXSA9IGR1bW15O1xufSkodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgPyB0aGlzIDogd2luZG93KTtcblxuIWZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGUoZSwgdCkge1xuICAgICAgICB2YXIgbiA9ICdmb250LWZhbWlseTogXCJIZWx2ZXRpY2EgTmV1ZVwiLCBIZWx2ZXRpY2EsIEFyaWFsLCBzYW5zLXNlcmlmO2ZvbnQtc2l6ZTogMTRweDsnICsgKGUgPyBcImZvbnQtd2VpZ2h0OiBib2xkO1wiIDogXCJcIikgKyBcImNvbG9yOiBcIiArIHQgKyBcIjtcIjtcbiAgICAgICAgcmV0dXJuIG5cbiAgICB9XG5cdFxuXHRpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoXCJjaHJvbWVcIikgPiAtMSkge1xuXHRcdGNvbnNvbGUubG9nKFwiJWPimaUgJWPinLAgJWNDRUxFQlJPLkNNUyAlY+KcsCAlYyBodHRwOi8vY21zLmNlbGVicm8ucnUgJWPimaVcIiwgZSghMCwgXCIjZjAwXCIpLCBlKCEwLCBcIiNhZjU1ZTJcIiksIGUoITAsIFwiIzc3N1wiKSwgZSghMCwgXCIjYWY1NWUyXCIpLCBlKCEwLCBcIiM1NTdkZTJcIiksIGUoITAsIFwiI2YwMFwiKSk7XG5cdH1cblx0ZWxzZSB7XG5cdFx0Y29uc29sZS5sb2coJ2NlbGVicm8uY21zIGh0dHA6Ly9jbXMuY2VsZWJyby5ydScpXG5cdH1cbn0oKTsiXX0=

'use strict';

var cp = function ($) {
    var data = [];

    var notify_timeout, _notify;

    return {
        addTemplate: function addTemplate(e) {
            $('#addtemplate').find('input').attr('disabled', false);
            $('#addtemplate').toggle();
        },
        addTemplateFile: function addTemplateFile(tid) {
            var name = $('#template_name').val(),
                file = $('#template_file').val();

            $.ajax({
                url: '/' + ADMIN_DIR + '/ajax/structure/',
                type: "post",
                data: {
                    act: "ajaxAddTemplate",
                    name: name,
                    file: file
                },
                success: function success(response) {
                    if (response.length) {
                        var select = [];

                        for (var x in response) {
                            var _data = response[x];
                            var selected = tid == _data.id ? ' selected' : '';

                            select.push('<option value="' + _data.id + '"' + selected + '>' + _data.name + '</option>');
                        }

                        $('#select_field').html('<select name="stc_tid" id="templates_list">' + select.join('') + '</select>');
                        selectize('#templates_list');
                    }

                    $('#addtemplate').find('input').attr('disabled', true);
                    $('#addtemplate').hide();
                },
                dataType: "JSON"
            });
        },


        dropdown: function dropdown() {
            $('.trigger-dropdown').on('click', function () {
                var dd = $(this).data('toggle');
                $('#dropdown-' + dd).toggle();
            });
        },

        cleditor: function cleditor() {
            if (typeof jQuery.cleditor !== 'undefined') {
                $(".redactor_cleditor").cleditor();
            }
        },

        notify: function notify(text, status) {
            clearTimeout(notify_timeout);

            if (!$('body').find('.notify-message').length) {
                _notify = $('<div class="notify notify-message">' + text + '</div>');

                $('body').append(_notify);

                setTimeout(function () {
                    _notify.addClass('animate');
                }, 10);
            }

            notify_timeout = setTimeout(function () {

                _notify.removeClass('animate');

                setTimeout(function () {

                    _notify.remove();
                }, 300);
            }, 2500);
        },

        fileChange: function fileChange(element) {
            var filename = element.value;

            if (filename.lastIndexOf('\\')) {
                var i = filename.lastIndexOf('\\') + 1;
            } else {
                var i = filename.lastIndexOf('/') + 1;
            }
            filename = filename.slice(i);

            $(element).closest('.file--upload').find('.file--upload-placehoder').html(filename);
        },

        binding: function binding(name, element) {
            $('input[name="' + name + '"]').on('keyup', function () {
                if (this.value != '') {
                    $('input[name="' + element + '"]').val(transliterate(this.value, URL_TRANSLATE));
                }
            });
        },

        saveSettings: function saveSettings(id, e) {
            if (typeof e !== 'undefined') {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }

            var arr = {},
                block = '#settings-container-toggle-' + id;

            $(block).find('input, select').each(function () {
                var type = $(this).attr('type'),
                    name = $(this).attr('name'),
                    value = $(this).val();

                if (typeof name !== 'undefined') {
                    if (type !== 'radio' && type !== 'checkbox' || $(this).is(':checked') === true) {
                        name = name.replace('SETTINGS_', '');
                        arr[name] = value;
                    }
                }
            });

            $.post('/' + ADMIN_DIR + '/structure/saveSettings/', { 'arr': arr }, function (data) {

                if (data.result == 1) {
                    cp.notify('Сохранено', 'success');
                }
            }, 'JSON');

            return !1;
        },

        removeSettings: function removeSettings(id, e) {
            if (typeof e !== 'undefined') {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }

            if (cp.dialog("Вы дейсвительно хотите удалить блок?")) {
                $.post('/' + ADMIN_DIR + '/structure/removeSettings/', { 'id': id }, function (data) {
                    if (data.result == 1) {
                        $('#settings-' + id).remove();
                        $('#breadcrumbs-' + id).remove();
                        $('#container-' + id).remove();
                        $('#emptysplash-' + id).remove();
                    }
                }, 'JSON');
            }

            return !1;
        },

        arrLength: function arrLength(obj) {
            var i = 0;
            for (var x in obj) {
                if (obj.hasOwnProperty(x)) i++;
            }return i;
        },

        loadSettings: function loadSettings(val, id, item) {
            var arr = { 1: 'type', 2: 'item', 3: 'mode' },
                prev = '',
                action = '',
                mode = '',
                lvl = 1,
                next,
                block = 'cnt_' + item + '-' + id;

            if (item == 'type') {
                lvl = 1;
                action = val;
            } else if (item == 'item') {
                lvl = 2;
                action = $('#cnt_' + arr[1] + '-' + id).find('option:selected').val();
                mode = val;
            } else if (item == 'mode') {
                lvl = 3;
                action = $('#cnt_' + arr[2] + '-' + id).find('option:selected').val();
                mode = val;
            }

            next = lvl + 1;

            for (var xx = next; xx <= 4; xx++) {
                if ($('#block-lvl' + xx + '-' + id).length > 0) {
                    $('#block-lvl' + xx + '-' + id).remove();
                }
            }

            $.post('/' + ADMIN_DIR + '/structure/loadSettings/', { 'action': action, 'mode': mode }, function (data) {
                if (typeof data !== 'undefined' && cp.arrLength(data) > 0) {
                    var select = [],
                        hash = 'cnt_' + arr[next] + '-' + id,
                        block = 'cnt_item-' + id + '-type';

                    select.push('<div class="block-settings-select-block lvl' + next + '" id="block-lvl' + next + '-' + id + '">');
                    select.push('<select name="SETTINGS_' + arr[next] + '_' + id + '" id="' + hash + '" onchange="cp.loadSettings(this.value, ' + id + ', \'' + arr[next] + '\');">');

                    select.push(' <option value="" selected>Выбрать</option>');

                    for (var system in data) {
                        select.push('<option value="' + system + '">' + data[system] + '</option>');
                    }

                    select.push('</select>');
                    select.push('</div>');

                    $('#block-settings-select-block-' + id).append(select.join(''));

                    selectize('#' + hash);
                }
            }, 'JSON');
        },

        toggleModule: function toggleModule(element, e) {
            if (typeof e !== 'undefined') {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }

            var path = $(element).attr('href');

            $(element).append('<i class="loading"></i>');

            $.post(path, function (data) {
                if (data.status === true) {
                    if ($(element).hasClass('icon-eye-off')) {
                        $(element).removeClass('icon-eye-off').addClass('icon-eye').html('');
                    } else {
                        $(element).removeClass('icon-eye').addClass('icon-eye-off').html('');
                    }
                }
            }, 'JSON');

            return !1;
        },

        toggleSettings: function toggleSettings(element, e) {
            if (typeof e !== 'undefined') {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }

            var href = $(element).attr('href').substr(1);

            $(element).toggleClass('block-settings-open');
            $("#" + href).toggle();

            return !1;
        },

        tableToggle: function tableToggle(id, e) {
            if (typeof e !== 'undefined') {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }

            var hash = window.location.pathname.replace(/\//g, "|"),
                PATH_HASH = md5(hash);
            var cookie_toggle = id + '_toogle_' + PATH_HASH;

            if (typeof e == 'undefined') {
                if (typeof $.cookie(cookie_toggle) == 'undefined') {
                    $("#" + id + " th .table_hdr").removeClass('table_u').addClass('table_d');
                    $("#" + id + " tr:not(.th)").hide();
                }
            } else {
                $("#" + id + " th .table_hdr").toggleClass('table_u').toggleClass('table_d');
                $("#" + id + " tr:not(.th)").toggle();

                if ($("#" + id + " tr:not(.th)").is(':visible')) {
                    $.cookie(cookie_toggle, 'show', { expires: 30, path: '/' });
                } else {
                    $.removeCookie(cookie_toggle, { path: '/' });
                }
            }

            return !1;
        },

        tableToggleList: function tableToggleList() {
            var hash = window.location.pathname.replace(/\//g, "|"),
                PATH_HASH = md5(hash);

            if ($('.table-toggle-trigger').length > 0) {
                $('.table-toggle-trigger').each(function () {
                    var id = this.id,
                        cookie_toggle = id + '_toogle_' + PATH_HASH;

                    if (typeof $.cookie(cookie_toggle) !== 'undefined') {
                        $("#" + id + " th .table_hdr").addClass('table_u').removeClass('table_d');
                        $("#" + id + " tr:not(.th)").show();
                    } else {
                        $("#" + id + " th .table_hdr").removeClass('table_u').addClass('table_d');
                        $("#" + id + " tr:not(.th)").hide();
                    }
                });
            }
        },

        addBlock: function addBlock(parent, e) {
            if (typeof e !== 'undefined') {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }

            var order = 10;

            if ($('#cont_data').find('.block-settings-order-input').length) {
                var temp = [];
                $('#cont_data').find('.block-settings-order-input').each(function () {
                    temp.push($(this).find('input').val());
                });

                if (temp.length) {
                    order = temp.max() + 10;
                }
            }

            $.post('/' + ADMIN_DIR + '/structure/getNewId/', { 'parent': parent, 'order': order }, function (newitem) {

                var row = ['<tr id="settings-' + newitem + '">', '<td class="settings-row">', '<div class="settings-container clearfix">', '<a href="#" onclick="return cp.removeSettings(' + newitem + ', event);" class="block-settings-link block-settings-remove"><i class="icon icon-delete"></i>Удалить блок</a>', '<a href="#settings-container-toggle-' + newitem + '" onclick="return cp.toggleSettings(this, event);" class="block-settings-link block-settings-title block-settings-open">', '<span class="block-settings-title-drop"><i class="icon icon-cog"></i></span>', '<span class="block-settings-title-text">Настройки блока</span>', '</a>', '<div class="settings-container-toggle opened" id="settings-container-toggle-' + newitem + '">', '<div class="block-settings-ln block-settings-visible clearfix">', '<div class="option-group option-combo option-simple">', '<label><input type="radio" name="SETTINGS_visible_' + newitem + '" value="1" checked="checked"><span class="option">Активен</span></label>', '<label class="disallow"><input type="radio" name="SETTINGS_visible_' + newitem + '" value="0"><span class="option">Не активен</span></label>', '</div>', '</div>', '<div class="block-settings-ln block-settings-order clearfix">', '<div class="block-settings-order-input">', '<input name="SETTINGS_ord_' + newitem + '" value="' + order + '" placeholder="Порядок">', '</div>', '</div>', '<div class="block-settings-ln block-settings-select clearfix" id="block-settings-select-block-' + newitem + '">', '<div class="block-settings-select-block lvl1" id="block-lvl1-' + newitem + '">', '<select name="SETTINGS_type_' + newitem + '" id="cnt_type-' + newitem + '" onchange="cp.loadSettings(this.value, ' + newitem + ', \'type\');"><option value="" selected>Выбрать</option><option value="redactor">Визуальный редактор</option><option value="editor">Редактор кода</option><option value="module">Модуль</option><option value="zone">Зона</option><option value="block">Блок</option><option value="banner">Баннер</option><option value="search">Поиск</option></select>', '</div>', '</div>', '<div class="block-settings-ln block-settings-system clearfix">', '<div class="block-settings-system-input">', '<input name="SETTINGS_system_' + newitem + '" value="" placeholder="Системное имя">', '</div>', '</div>', '<div class="block-settings-buttons clearfix">', '<a href="#" onclick="return cp.saveSettings(' + newitem + ', event);" class="button button-purple block-settings-save"><i class="icon icon-check-square"></i>Сохранить</a>', '</div>', '</div>', '</div>', '</td>', '</tr>'];

                $('#cont_data').find('tbody').append(row.join(''));

                selectize();
            });

            return !1;
        },

        dialog: function dialog(text) {
            return confirm(text);
        },

        indexation: function indexation(e) {
            if (typeof e !== 'undefined') {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1;
            }

            if (cp.dialog('Начать индексацию?')) {
                $('#indexation-good').hide();
                $('#loader').fadeIn();

                var iurl = '/' + ADMIN_DIR + '/search/indexer/';

                $.ajax({
                    url: iurl,
                    type: 'get',
                    data: {
                        start: 0
                    },
                    success: function success(data) {
                        if (data != "good") {
                            $.get(iurl, {
                                start: data
                            });
                        } else {
                            $("#loader").fadeOut();
                            $("#indexation-good").show();
                        }
                    },
                    error: function error(response) {}
                });
            }
        },

        push: function push(item) {
            data.push(item);
        },

        pop: function pop() {
            return data.pop();
        },

        length: function length() {
            return data.length;
        }
    };
}(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9jcC5qcyJdLCJuYW1lcyI6WyJjcCIsIiQiLCJkYXRhIiwibm90aWZ5X3RpbWVvdXQiLCJub3RpZnkiLCJhZGRUZW1wbGF0ZSIsImUiLCJmaW5kIiwiYXR0ciIsInRvZ2dsZSIsImFkZFRlbXBsYXRlRmlsZSIsInRpZCIsIm5hbWUiLCJ2YWwiLCJmaWxlIiwiYWpheCIsInVybCIsIkFETUlOX0RJUiIsInR5cGUiLCJhY3QiLCJzdWNjZXNzIiwicmVzcG9uc2UiLCJsZW5ndGgiLCJzZWxlY3QiLCJ4Iiwic2VsZWN0ZWQiLCJpZCIsInB1c2giLCJodG1sIiwiam9pbiIsInNlbGVjdGl6ZSIsImhpZGUiLCJkYXRhVHlwZSIsImRyb3Bkb3duIiwib24iLCJkZCIsImNsZWRpdG9yIiwialF1ZXJ5IiwidGV4dCIsInN0YXR1cyIsImNsZWFyVGltZW91dCIsImFwcGVuZCIsInNldFRpbWVvdXQiLCJhZGRDbGFzcyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlIiwiZmlsZUNoYW5nZSIsImVsZW1lbnQiLCJmaWxlbmFtZSIsInZhbHVlIiwibGFzdEluZGV4T2YiLCJpIiwic2xpY2UiLCJjbG9zZXN0IiwiYmluZGluZyIsInRyYW5zbGl0ZXJhdGUiLCJVUkxfVFJBTlNMQVRFIiwic2F2ZVNldHRpbmdzIiwicHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsImFyciIsImJsb2NrIiwiZWFjaCIsImlzIiwicmVwbGFjZSIsInBvc3QiLCJyZXN1bHQiLCJyZW1vdmVTZXR0aW5ncyIsImRpYWxvZyIsImFyckxlbmd0aCIsIm9iaiIsImhhc093blByb3BlcnR5IiwibG9hZFNldHRpbmdzIiwiaXRlbSIsInByZXYiLCJhY3Rpb24iLCJtb2RlIiwibHZsIiwibmV4dCIsInh4IiwiaGFzaCIsInN5c3RlbSIsInRvZ2dsZU1vZHVsZSIsInBhdGgiLCJoYXNDbGFzcyIsInRvZ2dsZVNldHRpbmdzIiwiaHJlZiIsInN1YnN0ciIsInRvZ2dsZUNsYXNzIiwidGFibGVUb2dnbGUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiUEFUSF9IQVNIIiwibWQ1IiwiY29va2llX3RvZ2dsZSIsImNvb2tpZSIsImV4cGlyZXMiLCJyZW1vdmVDb29raWUiLCJ0YWJsZVRvZ2dsZUxpc3QiLCJzaG93IiwiYWRkQmxvY2siLCJwYXJlbnQiLCJvcmRlciIsInRlbXAiLCJtYXgiLCJuZXdpdGVtIiwicm93IiwiY29uZmlybSIsImluZGV4YXRpb24iLCJmYWRlSW4iLCJpdXJsIiwic3RhcnQiLCJnZXQiLCJmYWRlT3V0IiwiZXJyb3IiLCJwb3AiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsS0FBTSxVQUFTQyxDQUFULEVBQVk7QUFDcEIsUUFBSUMsT0FBTyxFQUFYOztBQUVBLFFBQUlDLGNBQUosRUFBb0JDLE9BQXBCOztBQUVBLFdBQU87QUFFSEMsbUJBRkcsdUJBRVVDLENBRlYsRUFFYTtBQUNaTCxjQUFFLGNBQUYsRUFBa0JNLElBQWxCLENBQXVCLE9BQXZCLEVBQWdDQyxJQUFoQyxDQUFxQyxVQUFyQyxFQUFpRCxLQUFqRDtBQUNBUCxjQUFFLGNBQUYsRUFBa0JRLE1BQWxCO0FBQ0gsU0FMRTtBQU9IQyx1QkFQRywyQkFPY0MsR0FQZCxFQU9tQjtBQUNsQixnQkFBSUMsT0FBT1gsRUFBRSxnQkFBRixFQUFvQlksR0FBcEIsRUFBWDtBQUFBLGdCQUNJQyxPQUFPYixFQUFFLGdCQUFGLEVBQW9CWSxHQUFwQixFQURYOztBQUdBWixjQUFFYyxJQUFGLENBQU87QUFDSEMscUJBQUssTUFBTUMsU0FBTixHQUFrQixrQkFEcEI7QUFFSEMsc0JBQU0sTUFGSDtBQUdIaEIsc0JBQU07QUFDRmlCLHlCQUFLLGlCQURIO0FBRUZQLDBCQUFNQSxJQUZKO0FBR0ZFLDBCQUFNQTtBQUhKLGlCQUhIO0FBUUhNLHlCQUFTLGlCQUFTQyxRQUFULEVBQW1CO0FBQ3hCLHdCQUFJQSxTQUFTQyxNQUFiLEVBQXFCO0FBQ2pCLDRCQUFNQyxTQUFTLEVBQWY7O0FBRUEsNkJBQUksSUFBSUMsQ0FBUixJQUFhSCxR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VThDLElBQVY7QUFDSCxTQTVjRTs7QUE4Y0gyQyxhQUFLLGVBQ0w7QUFDSSxtQkFBT2xILEtBQUtrSCxHQUFMLEVBQVA7QUFDSCxTQWpkRTs7QUFtZEg5RixnQkFBUSxrQkFBVztBQUNmLG1CQUFPcEIsS0FBS29CLE1BQVo7QUFDSDtBQXJkRSxLQUFQO0FBdWRILENBNWRXLENBNGRWZSxNQTVkVSxDQUFaIiwiZmlsZSI6Il9jcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNwID0gKGZ1bmN0aW9uKCQpIHtcbiAgICB2YXIgZGF0YSA9IFtdO1xuXG4gICAgdmFyIG5vdGlmeV90aW1lb3V0LCBub3RpZnk7XG5cbiAgICByZXR1cm4ge1xuXG4gICAgICAgIGFkZFRlbXBsYXRlIChlKSB7XG4gICAgICAgICAgICAkKCcjYWRkdGVtcGxhdGUnKS5maW5kKCdpbnB1dCcpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgJCgnI2FkZHRlbXBsYXRlJykudG9nZ2xlKCk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkVGVtcGxhdGVGaWxlICh0aWQpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gJCgnI3RlbXBsYXRlX25hbWUnKS52YWwoKSxcbiAgICAgICAgICAgICAgICBmaWxlID0gJCgnI3RlbXBsYXRlX2ZpbGUnKS52YWwoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvJyArIEFETUlOX0RJUiArICcvYWpheC9zdHJ1Y3R1cmUvJyxcbiAgICAgICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIGFjdDogXCJhamF4QWRkVGVtcGxhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogZmlsZSBcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdCA9IFtdO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHggaW4gcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gcmVzcG9uc2VbeF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSAodGlkID09IGRhdGEuaWQpID8gJyBzZWxlY3RlZCcgOiAnJztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5wdXNoKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPG9wdGlvbiB2YWx1ZT1cIicrZGF0YS5pZCsnXCInK3NlbGVjdGVkKyc+JytkYXRhLm5hbWUrJzwvb3B0aW9uPidcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNzZWxlY3RfZmllbGQnKS5odG1sKCc8c2VsZWN0IG5hbWU9XCJzdGNfdGlkXCIgaWQ9XCJ0ZW1wbGF0ZXNfbGlzdFwiPicrc2VsZWN0LmpvaW4oJycpKyc8L3NlbGVjdD4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGl6ZSgnI3RlbXBsYXRlc19saXN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAkKCcjYWRkdGVtcGxhdGUnKS5maW5kKCdpbnB1dCcpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICQoJyNhZGR0ZW1wbGF0ZScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJvcGRvd246IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgICQoJy50cmlnZ2VyLWRyb3Bkb3duJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICB2YXIgZGQgPSAkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgICAgICQoJyNkcm9wZG93bi0nICsgZGQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY2xlZGl0b3I6IGZ1bmN0aW9uICgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YoalF1ZXJ5LmNsZWRpdG9yKSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJChcIi5yZWRhY3Rvcl9jbGVkaXRvclwiKS5jbGVkaXRvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG5vdGlmeTogZnVuY3Rpb24gKHRleHQsIHN0YXR1cylcbiAgICAgICAge1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KG5vdGlmeV90aW1lb3V0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCEkKCdib2R5JykuZmluZCgnLm5vdGlmeS1tZXNzYWdlJykubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5vdGlmeSA9ICQoJzxkaXYgY2xhc3M9XCJub3RpZnkgbm90aWZ5LW1lc3NhZ2VcIj4nICsgdGV4dCArICc8L2Rpdj4nKTtcblxuICAgICAgICAgICAgICAgICQoJ2JvZHknKS5hcHBlbmQobm90aWZ5KTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5LmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgfSwgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBub3RpZnlfdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBub3RpZnkucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblxuICAgICAgICAgICAgICAgICAgICBub3RpZnkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0sIDMwMCk7XG5cbiAgICAgICAgICAgIH0sIDI1MDApO1xuICAgICAgICB9LFxuXG4gICAgICAgIGZpbGVDaGFuZ2U6IGZ1bmN0aW9uKGVsZW1lbnQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBmaWxlbmFtZSA9IGVsZW1lbnQudmFsdWU7XG5cbiAgICAgICAgICAgIGlmIChmaWxlbmFtZS5sYXN0SW5kZXhPZignXFxcXCcpKXtcbiAgICAgICAgICAgICAgICB2YXIgaSA9IGZpbGVuYW1lLmxhc3RJbmRleE9mKCdcXFxcJykrMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgdmFyIGkgPSBmaWxlbmFtZS5sYXN0SW5kZXhPZignLycpKzE7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGZpbGVuYW1lID0gZmlsZW5hbWUuc2xpY2UoaSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoZWxlbWVudCkuY2xvc2VzdCgnLmZpbGUtLXVwbG9hZCcpLmZpbmQoJy5maWxlLS11cGxvYWQtcGxhY2Vob2RlcicpLmh0bWwoZmlsZW5hbWUpO1xuICAgICAgICB9LFxuICAgICAgICBcbiAgICAgICAgYmluZGluZzogZnVuY3Rpb24obmFtZSwgZWxlbWVudClcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnaW5wdXRbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKCl7XG5cdFx0ICAgICAgICBpZiAodGhpcy52YWx1ZSAhPSAnJylcblx0XHQgICAgICAgIHtcblx0XHQgICAgICAgIFx0JCgnaW5wdXRbbmFtZT1cIicgKyBlbGVtZW50ICsgJ1wiXScpLnZhbCh0cmFuc2xpdGVyYXRlKHRoaXMudmFsdWUsIFVSTF9UUkFOU0xBVEUpKTtcblx0XHQgICAgICAgIH1cblx0XHQgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgc2F2ZVNldHRpbmdzOiBmdW5jdGlvbihpZCwgZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodHlwZW9mIGUgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gITE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBhcnIgPSB7fSwgYmxvY2sgPSAnI3NldHRpbmdzLWNvbnRhaW5lci10b2dnbGUtJyArIGlkO1xuXG4gICAgICAgICAgICAkKGJsb2NrKS5maW5kKCdpbnB1dCwgc2VsZWN0JykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIHZhciB0eXBlID0gJCh0aGlzKS5hdHRyKCd0eXBlJyksIG5hbWUgPSAkKHRoaXMpLmF0dHIoJ25hbWUnKSwgdmFsdWUgPSAkKHRoaXMpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZihuYW1lKSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZih0eXBlICE9PSAncmFkaW8nICYmIHR5cGUgIT09ICdjaGVja2JveCcgfHwgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSA9PT0gdHJ1ZSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgnU0VUVElOR1NfJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW25hbWVdID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJC5wb3N0KCcvJyArIEFETUlOX0RJUiArICcvc3RydWN0dXJlL3NhdmVTZXR0aW5ncy8nLCB7ICdhcnInOiBhcnIgfSwgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5yZXN1bHQgPT0gMSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGNwLm5vdGlmeSgn0KHQvtGF0YDQsNC90LXQvdC+JywgJ3N1Y2Nlc3MnKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sICdKU09OJyk7XG5cbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfSxcblxuICAgICAgICByZW1vdmVTZXR0aW5nczogZnVuY3Rpb24oaWQsIGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9ICExO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY3AuZGlhbG9nKFwi0JLRiyDQtNC10LnRgdCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINCx0LvQvtC6P1wiKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkLnBvc3QoJy8nICsgQURNSU5fRElSICsgJy9zdHJ1Y3R1cmUvcmVtb3ZlU2V0dGluZ3MvJywgeyAnaWQnOiBpZCB9LCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEucmVzdWx0ID09IDEpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNzZXR0aW5ncy0nK2lkKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNicmVhZGNydW1icy0nK2lkKS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJyNjb250YWluZXItJytpZCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCcjZW1wdHlzcGxhc2gtJytpZCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAnSlNPTicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgYXJyTGVuZ3RoOiBmdW5jdGlvbihvYmopXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBpPTA7XG4gICAgICAgICAgICBmb3IgKHZhciB4IGluIG9iaikgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eSh4KSkgaSsrO1xuICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgbG9hZFNldHRpbmdzOiBmdW5jdGlvbih2YWwsIGlkLCBpdGVtKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgYXJyID0geyAxOiAndHlwZScsIDI6ICdpdGVtJywgMzogJ21vZGUnIH0sIHByZXYgPSAnJywgYWN0aW9uID0gJycsIG1vZGUgPSAnJywgbHZsID0gMSwgbmV4dCwgYmxvY2sgPSAnY250XycgKyBpdGVtICsgJy0nICsgaWQ7XG5cbiAgICAgICAgICAgIGlmKGl0ZW0gPT0gJ3R5cGUnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGx2bCA9IDE7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihpdGVtID09ICdpdGVtJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsdmwgPSAyO1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9ICQoJyNjbnRfJyArIGFyclsxXSArICctJyArIGlkKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcbiAgICAgICAgICAgICAgICBtb2RlID0gdmFsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihpdGVtID09ICdtb2RlJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBsdmwgPSAzO1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9ICQoJyNjbnRfJyArIGFyclsyXSArICctJyArIGlkKS5maW5kKCdvcHRpb246c2VsZWN0ZWQnKS52YWwoKTtcbiAgICAgICAgICAgICAgICBtb2RlID0gdmFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBuZXh0ID0gbHZsICsgMTtcblxuICAgICAgICAgICAgZm9yKHZhciB4eCA9IG5leHQ7IHh4IDw9IDQ7IHh4ICsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKCQoJyNibG9jay1sdmwnICsgeHggKyAnLScgKyBpZCkubGVuZ3RoID4gMClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNibG9jay1sdmwnICsgeHggKyAnLScgKyBpZCkucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkLnBvc3QoJy8nICsgQURNSU5fRElSICsgJy9zdHJ1Y3R1cmUvbG9hZFNldHRpbmdzLycsIHsgJ2FjdGlvbic6IGFjdGlvbiwgJ21vZGUnOiBtb2RlIH0sIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgICAgICBpZih0eXBlb2YoZGF0YSkgIT09ICd1bmRlZmluZWQnICYmIGNwLmFyckxlbmd0aChkYXRhKSA+IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VsZWN0ID0gW10sIGhhc2ggPSAnY250XycgKyBhcnJbbmV4dF0gKyAnLScgKyBpZCwgYmxvY2sgPSAnY250X2l0ZW0tJyArIGlkICsgJy10eXBlJztcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5wdXNoKCc8ZGl2IGNsYXNzPVwiYmxvY2stc2V0dGluZ3Mtc2VsZWN0LWJsb2NrIGx2bCcgKyBuZXh0ICsgJ1wiIGlkPVwiYmxvY2stbHZsJyArIG5leHQgKyAnLScgKyBpZCArICdcIj4nKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LnB1c2goJzxzZWxlY3QgbmFtZT1cIlNFVFRJTkdTXycgKyBhcnJbbmV4dF0gKyAnXycgKyBpZCArICdcIiBpZD1cIicgKyBoYXNoICsgJ1wiIG9uY2hhbmdlPVwiY3AubG9hZFNldHRpbmdzKHRoaXMudmFsdWUsICcgKyBpZCArICcsIFxcJycgKyBhcnJbbmV4dF0gKyAnXFwnKTtcIj4nKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdC5wdXNoKCcgPG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPtCS0YvQsdGA0LDRgtGMPC9vcHRpb24+Jyk7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgc3lzdGVtIGluIGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdC5wdXNoKCc8b3B0aW9uIHZhbHVlPVwiJyArIHN5c3RlbSArICdcIj4nICsgZGF0YVtzeXN0ZW1dICsgJzwvb3B0aW9uPicpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0LnB1c2goJzwvc2VsZWN0PicpO1xuICAgICAgICAgICAgICAgICAgICBzZWxlY3QucHVzaCgnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAkKCcjYmxvY2stc2V0dGluZ3Mtc2VsZWN0LWJsb2NrLScgKyBpZCkuYXBwZW5kKHNlbGVjdC5qb2luKCcnKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0aXplKCcjJytoYXNoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH0sICdKU09OJyk7XG4gICAgICAgICAgIFxuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZU1vZHVsZTogZnVuY3Rpb24oZWxlbWVudCwgZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodHlwZW9mIGUgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gITE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXRoID0gJChlbGVtZW50KS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICQoZWxlbWVudCkuYXBwZW5kKCc8aSBjbGFzcz1cImxvYWRpbmdcIj48L2k+Jyk7XG5cbiAgICAgICAgICAgICQucG9zdChwYXRoLCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCQoZWxlbWVudCkuaGFzQ2xhc3MoJ2ljb24tZXllLW9mZicpKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsZW1lbnQpLnJlbW92ZUNsYXNzKCdpY29uLWV5ZS1vZmYnKS5hZGRDbGFzcygnaWNvbi1leWUnKS5odG1sKCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoZWxlbWVudCkucmVtb3ZlQ2xhc3MoJ2ljb24tZXllJykuYWRkQ2xhc3MoJ2ljb24tZXllLW9mZicpLmh0bWwoJycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgJ0pTT04nKTtcblxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9LFxuXG4gICAgICAgIHRvZ2dsZVNldHRpbmdzOiBmdW5jdGlvbihlbGVtZW50LCBlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0eXBlb2YgZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSAhMTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGhyZWYgPSAkKGVsZW1lbnQpLmF0dHIoJ2hyZWYnKS5zdWJzdHIoMSk7XG5cbiAgICAgICAgICAgICQoZWxlbWVudCkudG9nZ2xlQ2xhc3MoJ2Jsb2NrLXNldHRpbmdzLW9wZW4nKTtcbiAgICAgICAgICAgICQoXCIjXCIraHJlZikudG9nZ2xlKCk7XG5cbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfSxcblxuICAgICAgICB0YWJsZVRvZ2dsZTogZnVuY3Rpb24oaWQsIGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9ICExO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC8vZywgXCJ8XCIpLCBQQVRIX0hBU0ggPSBtZDUoaGFzaCk7XG4gICAgICAgICAgICB2YXIgY29va2llX3RvZ2dsZSA9IGlkICsgJ190b29nbGVfJyArIFBBVEhfSEFTSDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYodHlwZW9mKGUpID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YoJC5jb29raWUoY29va2llX3RvZ2dsZSkpID09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNcIitpZCtcIiB0aCAudGFibGVfaGRyXCIpLnJlbW92ZUNsYXNzKCd0YWJsZV91JykuYWRkQ2xhc3MoJ3RhYmxlX2QnKTtcbiAgICAgICAgICAgICAgICAgICAgJChcIiNcIitpZCtcIiB0cjpub3QoLnRoKVwiKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoXCIjXCIraWQrXCIgdGggLnRhYmxlX2hkclwiKS50b2dnbGVDbGFzcygndGFibGVfdScpLnRvZ2dsZUNsYXNzKCd0YWJsZV9kJyk7XG4gICAgICAgICAgICAgICAgJChcIiNcIitpZCtcIiB0cjpub3QoLnRoKVwiKS50b2dnbGUoKTsgICBcbiAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKCQoXCIjXCIraWQrXCIgdHI6bm90KC50aClcIikuaXMoJzp2aXNpYmxlJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkLmNvb2tpZShjb29raWVfdG9nZ2xlLCAnc2hvdycsIHsgZXhwaXJlczogMzAsIHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJC5yZW1vdmVDb29raWUoY29va2llX3RvZ2dsZSwgeyBwYXRoOiAnLycgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgdGFibGVUb2dnbGVMaXN0OiBmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcLy9nLCBcInxcIiksIFBBVEhfSEFTSCA9IG1kNShoYXNoKTtcblxuICAgICAgICAgICAgaWYoJCgnLnRhYmxlLXRvZ2dsZS10cmlnZ2VyJykubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKCcudGFibGUtdG9nZ2xlLXRyaWdnZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpZCA9IHRoaXMuaWQsIGNvb2tpZV90b2dnbGUgPSBpZCArICdfdG9vZ2xlXycgKyBQQVRIX0hBU0g7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YoJC5jb29raWUoY29va2llX3RvZ2dsZSkpICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNcIitpZCtcIiB0aCAudGFibGVfaGRyXCIpLmFkZENsYXNzKCd0YWJsZV91JykucmVtb3ZlQ2xhc3MoJ3RhYmxlX2QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjXCIraWQrXCIgdHI6bm90KC50aClcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNcIitpZCtcIiB0aCAudGFibGVfaGRyXCIpLnJlbW92ZUNsYXNzKCd0YWJsZV91JykuYWRkQ2xhc3MoJ3RhYmxlX2QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIjXCIraWQrXCIgdHI6bm90KC50aClcIikuaGlkZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgYWRkQmxvY2s6IGZ1bmN0aW9uIChwYXJlbnQsIGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHR5cGVvZiBlICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9ICExO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgb3JkZXIgPSAxMDtcblxuICAgICAgICAgICAgaWYoJCgnI2NvbnRfZGF0YScpLmZpbmQoJy5ibG9jay1zZXR0aW5ncy1vcmRlci1pbnB1dCcpLmxlbmd0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcCA9IFtdO1xuICAgICAgICAgICAgICAgICQoJyNjb250X2RhdGEnKS5maW5kKCcuYmxvY2stc2V0dGluZ3Mtb3JkZXItaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIHRlbXAucHVzaCgkKHRoaXMpLmZpbmQoJ2lucHV0JykudmFsKCkpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBpZih0ZW1wLmxlbmd0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG9yZGVyID0gdGVtcC5tYXgoKSArIDEwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJC5wb3N0KCcvJyArIEFETUlOX0RJUiArICcvc3RydWN0dXJlL2dldE5ld0lkLycsIHsgJ3BhcmVudCc6IHBhcmVudCwgJ29yZGVyJzogb3JkZXIgfSwgZnVuY3Rpb24obmV3aXRlbSkge1xuICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB2YXIgcm93ID0gW1xuICAgICAgICAgICAgICAgICAgICAnPHRyIGlkPVwic2V0dGluZ3MtJyArIG5ld2l0ZW0gKyAnXCI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJzZXR0aW5ncy1yb3dcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwic2V0dGluZ3MtY29udGFpbmVyIGNsZWFyZml4XCI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxhIGhyZWY9XCIjXCIgb25jbGljaz1cInJldHVybiBjcC5yZW1vdmVTZXR0aW5ncygnICsgbmV3aXRlbSArICcsIGV2ZW50KTtcIiBjbGFzcz1cImJsb2NrLXNldHRpbmdzLWxpbmsgYmxvY2stc2V0dGluZ3MtcmVtb3ZlXCI+PGkgY2xhc3M9XCJpY29uIGljb24tZGVsZXRlXCI+PC9pPtCj0LTQsNC70LjRgtGMINCx0LvQvtC6PC9hPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBocmVmPVwiI3NldHRpbmdzLWNvbnRhaW5lci10b2dnbGUtJyArIG5ld2l0ZW0gKyAnXCIgb25jbGljaz1cInJldHVybiBjcC50b2dnbGVTZXR0aW5ncyh0aGlzLCBldmVudCk7XCIgY2xhc3M9XCJibG9jay1zZXR0aW5ncy1saW5rIGJsb2NrLXNldHRpbmdzLXRpdGxlIGJsb2NrLXNldHRpbmdzLW9wZW5cIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiYmxvY2stc2V0dGluZ3MtdGl0bGUtZHJvcFwiPjxpIGNsYXNzPVwiaWNvbiBpY29uLWNvZ1wiPjwvaT48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8c3BhbiBjbGFzcz1cImJsb2NrLXNldHRpbmdzLXRpdGxlLXRleHRcIj7QndCw0YHRgtGA0L7QudC60Lgg0LHQu9C+0LrQsDwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9hPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInNldHRpbmdzLWNvbnRhaW5lci10b2dnbGUgb3BlbmVkXCIgaWQ9XCJzZXR0aW5ncy1jb250YWluZXItdG9nZ2xlLScgKyBuZXdpdGVtICsgJ1wiPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJsb2NrLXNldHRpbmdzLWxuIGJsb2NrLXNldHRpbmdzLXZpc2libGUgY2xlYXJmaXhcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3B0aW9uLWdyb3VwIG9wdGlvbi1jb21ibyBvcHRpb24tc2ltcGxlXCI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cIlNFVFRJTkdTX3Zpc2libGVfJyArIG5ld2l0ZW0gKyAnXCIgdmFsdWU9XCIxXCIgY2hlY2tlZD1cImNoZWNrZWRcIj48c3BhbiBjbGFzcz1cIm9wdGlvblwiPtCQ0LrRgtC40LLQtdC9PC9zcGFuPjwvbGFiZWw+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxsYWJlbCBjbGFzcz1cImRpc2FsbG93XCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJTRVRUSU5HU192aXNpYmxlXycgKyBuZXdpdGVtICsgJ1wiIHZhbHVlPVwiMFwiPjxzcGFuIGNsYXNzPVwib3B0aW9uXCI+0J3QtSDQsNC60YLQuNCy0LXQvTwvc3Bhbj48L2xhYmVsPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJibG9jay1zZXR0aW5ncy1sbiBibG9jay1zZXR0aW5ncy1vcmRlciBjbGVhcmZpeFwiPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJibG9jay1zZXR0aW5ncy1vcmRlci1pbnB1dFwiPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8aW5wdXQgbmFtZT1cIlNFVFRJTkdTX29yZF8nICsgbmV3aXRlbSArICdcIiB2YWx1ZT1cIicgKyBvcmRlciArICdcIiBwbGFjZWhvbGRlcj1cItCf0L7RgNGP0LTQvtC6XCI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJsb2NrLXNldHRpbmdzLWxuIGJsb2NrLXNldHRpbmdzLXNlbGVjdCBjbGVhcmZpeFwiIGlkPVwiYmxvY2stc2V0dGluZ3Mtc2VsZWN0LWJsb2NrLScgKyBuZXdpdGVtICsgJ1wiPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJibG9jay1zZXR0aW5ncy1zZWxlY3QtYmxvY2sgbHZsMVwiIGlkPVwiYmxvY2stbHZsMS0nICsgbmV3aXRlbSArICdcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPHNlbGVjdCBuYW1lPVwiU0VUVElOR1NfdHlwZV8nICsgbmV3aXRlbSArICdcIiBpZD1cImNudF90eXBlLScgKyBuZXdpdGVtICsgJ1wiIG9uY2hhbmdlPVwiY3AubG9hZFNldHRpbmdzKHRoaXMudmFsdWUsICcgKyBuZXdpdGVtICsgJywgXFwndHlwZVxcJyk7XCI+PG9wdGlvbiB2YWx1ZT1cIlwiIHNlbGVjdGVkPtCS0YvQsdGA0LDRgtGMPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cInJlZGFjdG9yXCI+0JLQuNC30YPQsNC70YzQvdGL0Lkg0YDQtdC00LDQutGC0L7RgDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJlZGl0b3JcIj7QoNC10LTQsNC60YLQvtGAINC60L7QtNCwPC9vcHRpb24+PG9wdGlvbiB2YWx1ZT1cIm1vZHVsZVwiPtCc0L7QtNGD0LvRjDwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJ6b25lXCI+0JfQvtC90LA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwiYmxvY2tcIj7QkdC70L7Qujwvb3B0aW9uPjxvcHRpb24gdmFsdWU9XCJiYW5uZXJcIj7QkdCw0L3QvdC10YA8L29wdGlvbj48b3B0aW9uIHZhbHVlPVwic2VhcmNoXCI+0J/QvtC40YHQujwvb3B0aW9uPjwvc2VsZWN0PicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJibG9jay1zZXR0aW5ncy1sbiBibG9jay1zZXR0aW5ncy1zeXN0ZW0gY2xlYXJmaXhcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYmxvY2stc2V0dGluZ3Mtc3lzdGVtLWlucHV0XCI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCBuYW1lPVwiU0VUVElOR1Nfc3lzdGVtXycgKyBuZXdpdGVtICsgJ1wiIHZhbHVlPVwiXCIgcGxhY2Vob2xkZXI9XCLQodC40YHRgtC10LzQvdC+0LUg0LjQvNGPXCI+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImJsb2NrLXNldHRpbmdzLWJ1dHRvbnMgY2xlYXJmaXhcIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8YSBocmVmPVwiI1wiIG9uY2xpY2s9XCJyZXR1cm4gY3Auc2F2ZVNldHRpbmdzKCcgKyBuZXdpdGVtICsgJywgZXZlbnQpO1wiIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi1wdXJwbGUgYmxvY2stc2V0dGluZ3Mtc2F2ZVwiPjxpIGNsYXNzPVwiaWNvbiBpY29uLWNoZWNrLXNxdWFyZVwiPjwvaT7QodC+0YXRgNCw0L3QuNGC0Yw8L2E+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L3RkPicsXG4gICAgICAgICAgICAgICAgICAgICc8L3RyPidcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgJCgnI2NvbnRfZGF0YScpLmZpbmQoJ3Rib2R5JykuYXBwZW5kKHJvdy5qb2luKCcnKSk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2VsZWN0aXplKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuICExO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRpYWxvZzogZnVuY3Rpb24gKHRleHQpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBjb25maXJtKHRleHQpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGluZGV4YXRpb246IGZ1bmN0aW9uIChlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0eXBlb2YgZSAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSAhMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoY3AuZGlhbG9nKCfQndCw0YfQsNGC0Ywg0LjQvdC00LXQutGB0LDRhtC40Y4/JykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJCgnI2luZGV4YXRpb24tZ29vZCcpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKCcjbG9hZGVyJykuZmFkZUluKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgaXVybCA9ICcvJyArIEFETUlOX0RJUiArICcvc2VhcmNoL2luZGV4ZXIvJztcblxuICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogaXVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2dldCcsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IFwiZ29vZFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQuZ2V0KCBpdXJsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBkYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKFwiI2xvYWRlclwiKS5mYWRlT3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcIiNpbmRleGF0aW9uLWdvb2RcIikuc2hvdygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgcHVzaDogZnVuY3Rpb24gKGl0ZW0pXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChpdGVtKTtcbiAgICAgICAgfSxcbiAgICAgICAgXG4gICAgICAgIHBvcDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGF0YS5wb3AoKTtcbiAgICAgICAgfSxcblxuICAgICAgICBsZW5ndGg6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEubGVuZ3RoO1xuICAgICAgICB9XG4gICAgfTtcbn0oalF1ZXJ5KSk7XG4iXX0=

'use strict';

;(function ($) {
	"use strict";

	$.fn.timeoutClass = function (classname, timeout) {
		timeout = timeout || 10;
		var that = this;
		setTimeout(function () {
			$(that).toggleClass(classname);
		}, timeout);
	};

	$.fn.extend({
		popover: function popover(options) {
			this.defaults = {};
			var settings = $.extend({}, this.defaults, options),
			    isopen = false,
			    scrollShift = 100,
			    popover = {},
			    $page = $('#page-wrapper'),
			    onOpenScrollTop,
			    $popover,
			    $target;

			popover.position = function (target) {
				var left = 0,
				    ww = $(window).width(),
				    top = 0;

				if ($(target).hasClass('trigger-popover')) {
					$target = $(target);
				} else {
					$target = $(target).closest('.trigger-popover');
				}

				left = $target.offset().left + $target.width();
				top = $target.offset().top + $target.height() + 8;

				return { 'left': left, 'top': top };
			};

			popover.hide = function (callback) {
				if ($('.popover.open').length) {
					$popover = $('.popover.open');
					$popover.removeClass('animate');

					setTimeout(function () {
						$popover.removeClass('open');

						if (typeof callback == 'function') {
							callback.apply();
						}
					}, 250);
				} else {
					if (typeof callback == 'function') {
						callback.apply();
					}
				}
			};

			$page.on('click', function (e) {
				if ((isopen || $('.popover.open').length) && !$(e.target).closest('.trigger-popover').length && !$(e.target).closest('.popover').length) {
					popover.hide();
				}
			});

			$(window).resize(function () {
				popover.hide();
			});

			$page.scroll(function () {
				if (isopen === true && (onOpenScrollTop + scrollShift < $page.scrollTop() || onOpenScrollTop - scrollShift > $page.scrollTop())) {
					popover.hide();
				}
			});

			return this.each(function () {
				$(this).on('click', function (e) {
					e.preventDefault();

					var block = $(this).data('popover'),
					    $popover;

					isopen = true;

					popover.hide(function () {

						if ($('#popover-' + block).length == 0) {
							$popover = $(template('tpl_' + block, {}));
							$page.append($popover);
						} else {
							$popover = $('#popover-' + block);
						}

						if (!$('#popover-' + block).hasClass('open')) {
							onOpenScrollTop = $page.scrollTop();

							$popover.css(popover.position(e.target));
							$popover.toggleClass('open').timeoutClass('animate');
						}
					});
				});
			});
		}
	});
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9wb3BvdmVyLmpzIl0sIm5hbWVzIjpbIiQiLCJmbiIsInRpbWVvdXRDbGFzcyIsImNsYXNzbmFtZSIsInRpbWVvdXQiLCJ0aGF0Iiwic2V0VGltZW91dCIsInRvZ2dsZUNsYXNzIiwiZXh0ZW5kIiwicG9wb3ZlciIsIm9wdGlvbnMiLCJkZWZhdWx0cyIsInNldHRpbmdzIiwiaXNvcGVuIiwic2Nyb2xsU2hpZnQiLCIkcGFnZSIsIm9uT3BlblNjcm9sbFRvcCIsIiRwb3BvdmVyIiwiJHRhcmdldCIsInBvc2l0aW9uIiwidGFyZ2V0IiwibGVmdCIsInd3Iiwid2luZG93Iiwid2lkdGgiLCJ0b3AiLCJoYXNDbGFzcyIsImNsb3Nlc3QiLCJvZmZzZXQiLCJoZWlnaHQiLCJoaWRlIiwiY2FsbGJhY2siLCJsZW5ndGgiLCJyZW1vdmVDbGFzcyIsImFwcGx5Iiwib24iLCJlIiwicmVzaXplIiwic2Nyb2xsIiwic2Nyb2xsVG9wIiwiZWFjaCIsInByZXZlbnREZWZhdWx0IiwiYmxvY2siLCJkYXRhIiwidGVtcGxhdGUiLCJhcHBlbmQiLCJjc3MiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxDQUFFLFVBQVVBLENBQVYsRUFBYTtBQUNmOztBQUVHQSxHQUFFQyxFQUFGLENBQUtDLFlBQUwsR0FBb0IsVUFBU0MsU0FBVCxFQUFvQkMsT0FBcEIsRUFBNkI7QUFDN0NBLFlBQVVBLFdBQVcsRUFBckI7QUFDQSxNQUFJQyxPQUFPLElBQVg7QUFDQUMsYUFBVyxZQUFVO0FBQ2pCTixLQUFFSyxJQUFGLEVBQVFFLFdBQVIsQ0FBb0JKLFNBQXBCO0FBQ0gsR0FGRCxFQUVHQyxPQUZIO0FBR0gsRUFORDs7QUFRSEosR0FBRUMsRUFBRixDQUFLTyxNQUFMLENBQVk7QUFDWEMsV0FBUyxpQkFBU0MsT0FBVCxFQUNUO0FBQ0MsUUFBS0MsUUFBTCxHQUFnQixFQUFoQjtBQUNBLE9BQUlDLFdBQVdaLEVBQUVRLE1BQUYsQ0FBVSxFQUFWLEVBQWMsS0FBS0csUUFBbkIs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dEIsVUFBSTlCLEVBQUUsY0FBYzBDLEtBQWhCLEVBQXVCVixNQUF2QixJQUFpQyxDQUFyQyxFQUNBO0FBQ0NmLGtCQUFXakIsRUFBRTRDLFNBQVMsU0FBU0YsS0FBbEIsRUFBeUIsRUFBekIsQ0FBRixDQUFYO0FBQ0EzQixhQUFNOEIsTUFBTixDQUFhNUIsUUFBYjtBQUNBLE9BSkQsTUFNQTtBQUNDQSxrQkFBV2pCLEVBQUUsY0FBYzBDLEtBQWhCLENBQVg7QUFDQTs7QUFFRCxVQUFJLENBQUMxQyxFQUFFLGNBQWMwQyxLQUFoQixFQUF1QmhCLFFBQXZCLENBQWdDLE1BQWhDLENBQUwsRUFDQTtBQUNDVix5QkFBa0JELE1BQU13QixTQUFOLEVBQWxCOztBQUVBdEIsZ0JBQVM2QixHQUFULENBQWFyQyxRQUFRVSxRQUFSLENBQWlCaUIsRUFBRWhCLE1BQW5CLENBQWI7QUFDQUgsZ0JBQVNWLFdBQVQsQ0FBcUIsTUFBckIsRUFBNkJMLFlBQTdCLENBQTBDLFNBQTFDO0FBQ0E7QUFFRCxNQXBCRDtBQXFCQSxLQTVCRDtBQThCQSxJQS9CTSxDQUFQO0FBZ0NBO0FBdEdVLEVBQVo7QUF3R0EsQ0FuSEEsRUFtSEc2QyxNQW5ISCIsImZpbGUiOiJfcG9wb3Zlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoIGZ1bmN0aW9uKCAkICl7XG5cdFwidXNlIHN0cmljdFwiO1xuXG4gICAgJC5mbi50aW1lb3V0Q2xhc3MgPSBmdW5jdGlvbihjbGFzc25hbWUsIHRpbWVvdXQpIHtcbiAgICAgICAgdGltZW91dCA9IHRpbWVvdXQgfHwgMTA7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGF0KS50b2dnbGVDbGFzcyhjbGFzc25hbWUpO1xuICAgICAgICB9LCB0aW1lb3V0KTtcbiAgICB9O1xuXG5cdCQuZm4uZXh0ZW5kKHtcblx0XHRwb3BvdmVyOiBmdW5jdGlvbihvcHRpb25zKVxuXHRcdHtcblx0XHRcdHRoaXMuZGVmYXVsdHMgPSB7fTtcblx0XHRcdHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKCB7fSwgdGhpcy5kZWZhdWx0cywgb3B0aW9ucyApLFxuXHRcdFx0XHRpc29wZW4gPSBmYWxzZSwgc2Nyb2xsU2hpZnQgPSAxMDAsIHBvcG92ZXIgPSB7fSxcblx0XHRcdFx0JHBhZ2UgPSAkKCcjcGFnZS13cmFwcGVyJyksXG5cdFx0XHRcdG9uT3BlblNjcm9sbFRvcCwgJHBvcG92ZXIsICR0YXJnZXQ7XG5cblx0XHRcdHBvcG92ZXIucG9zaXRpb24gPSBmdW5jdGlvbih0YXJnZXQpXG5cdFx0XHR7XG5cdFx0XHRcdHZhciBsZWZ0ID0gMCwgd3cgPSAkKHdpbmRvdykud2lkdGgoKSwgdG9wID0gMDtcblxuXHRcdFx0XHRpZiAoJCh0YXJnZXQpLmhhc0NsYXNzKCd0cmlnZ2VyLXBvcG92ZXInKSlcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCR0YXJnZXQgPSAkKHRhcmdldCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0JHRhcmdldCA9ICQodGFyZ2V0KS5jbG9zZXN0KCcudHJpZ2dlci1wb3BvdmVyJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRsZWZ0ID0gJHRhcmdldC5vZmZzZXQoKS5sZWZ0ICsgJHRhcmdldC53aWR0aCgpO1xuXHRcdFx0XHR0b3AgPSAkdGFyZ2V0Lm9mZnNldCgpLnRvcCArICR0YXJnZXQuaGVpZ2h0KCkgKyA4O1xuXHRcdFx0XHRcblx0XHRcdFx0cmV0dXJuIHsgJ2xlZnQnOiBsZWZ0LCAndG9wJzogdG9wIH07XG5cdFx0XHR9XG5cblx0XHRcdHBvcG92ZXIuaGlkZSA9IGZ1bmN0aW9uKGNhbGxiYWNrKVxuXHRcdFx0e1xuXHRcdFx0XHRpZiAoJCgnLnBvcG92ZXIub3BlbicpLmxlbmd0aClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdCRwb3BvdmVyID0gJCgnLnBvcG92ZXIub3BlbicpO1xuXHRcdFx0XHRcdCRwb3BvdmVyLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG5cdFx0XHRcdFxuXHRcdFx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcblx0XHRcdCAgXHRcdFx0JHBvcG92ZXIucmVtb3ZlQ2xhc3MoJ29wZW4nKTtcblx0XHRcdCAgXHRcdFx0XG5cdFx0XHQgIFx0XHRcdGlmICh0eXBlb2YoY2FsbGJhY2spID09ICdmdW5jdGlvbicpXG5cdFx0XHQgIFx0XHRcdHtcblx0XHRcdCAgXHRcdFx0XHRjYWxsYmFjay5hcHBseSgpO1xuXHRcdFx0ICBcdFx0XHR9XG5cdFx0XHQgIFx0XHR9LCAyNTApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2Vcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGlmICh0eXBlb2YoY2FsbGJhY2spID09ICdmdW5jdGlvbicpXG5cdFx0ICBcdFx0XHR7XG5cdFx0ICBcdFx0XHRcdGNhbGxiYWNrLmFwcGx5KCk7XG5cdFx0ICBcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0JHBhZ2Uub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuXHRcdFx0XHRpZiAoKGlzb3BlbiB8fCAkKCcucG9wb3Zlci5vcGVuJykubGVuZ3RoKSAmJiAhJChlLnRhcmdldCkuY2xvc2VzdCgnLnRyaWdnZXItcG9wb3ZlcicpLmxlbmd0aCAmJiAhJChlLnRhcmdldCkuY2xvc2VzdCgnLnBvcG92ZXInKS5sZW5ndGgpXG5cdFx0XHRcdHtcblx0XHRcdFx0XHRwb3BvdmVyLmhpZGUoKTtcblx0XHRcdFx0fVxuXHRcdCAgICB9KTtcblxuXHRcdFx0JCh3aW5kb3cpLnJlc2l6ZShmdW5jdGlvbigpe1xuXHRcdFx0XHRwb3BvdmVyLmhpZGUoKTtcblx0XHRcdH0pO1xuXG5cdFx0XHQkcGFnZS5zY3JvbGwoZnVuY3Rpb24oKXtcblx0XHRcdFx0aWYgKGlzb3BlbiA9PT0gdHJ1ZSAmJiAoKChvbk9wZW5TY3JvbGxUb3AgKyBzY3JvbGxTaGlmdCkgPCAkcGFnZS5zY3JvbGxUb3AoKSkgfHwgKChvbk9wZW5TY3JvbGxUb3AgLSBzY3JvbGxTaGlmdCkgPiAkcGFnZS5zY3JvbGxUb3AoKSkpKVxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0cG9wb3Zlci5oaWRlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cblx0XHRcdFx0XHR2YXIgYmxvY2sgPSAkKHRoaXMpLmRhdGEoJ3BvcG92ZXInKSwgJHBvcG92ZXI7XG5cdFx0XHRcdFx0XG5cdFx0XHRcdFx0aXNvcGVuID0gdHJ1ZTtcblxuXHRcdFx0XHRcdHBvcG92ZXIuaGlkZShmdW5jdGlvbigpe1xuXG5cdFx0XHRcdFx0XHRpZiAoJCgnI3BvcG92ZXItJyArIGJsb2NrKS5sZW5ndGggPT0gMClcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0JHBvcG92ZXIgPSAkKHRlbXBsYXRlKCd0cGxfJyArIGJsb2NrLCB7fSkpO1xuXHRcdFx0XHRcdFx0XHQkcGFnZS5hcHBlbmQoJHBvcG92ZXIpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0ZWxzZVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQkcG9wb3ZlciA9ICQoJyNwb3BvdmVyLScgKyBibG9jayk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdGlmICghJCgnI3BvcG92ZXItJyArIGJsb2NrKS5oYXNDbGFzcygnb3BlbicpKVxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRvbk9wZW5TY3JvbGxUb3AgPSAkcGFnZS5zY3JvbGxUb3AoKTtcblx0XHRcdFx0XHRcdFx0XG5cdFx0XHRcdFx0XHRcdCRwb3BvdmVyLmNzcyhwb3BvdmVyLnBvc2l0aW9uKGUudGFyZ2V0KSk7XG5cdFx0XHRcdFx0XHRcdCRwb3BvdmVyLnRvZ2dsZUNsYXNzKCdvcGVuJykudGltZW91dENsYXNzKCdhbmltYXRlJyk7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdH0pO1xuXHRcdH1cblx0fSk7XG59KSggalF1ZXJ5ICk7Il19

"use strict";

var category, controls;

function doOnLoad(path) {
  category = new dhtmlXTreeObject("treeboxbox_tree", "100%", "100%", 0);
  category.setImagePath('/' + ADMIN_DIR + '/images/tree/');
  category.enableDragAndDrop(true);
  category.setEditStartAction(true / false);
  category.enableKeyboardNavigation(true);
  category.enableMultiselection(true);
  category.enableTreeLines(true);
  category.makeAllDraggable();

  /*
  category.enableCheckBoxes(true);
  */

  category.attachEvent("onDrop", function (sId, tId, id, sObject, tObject) {
    $.ajax({
      url: '/' + ADMIN_DIR + '/' + path + '/updateStructure',
      type: "post",
      data: {
        oid: sId,
        pid: tId
      }
    });
  });

  category.attachEvent("onDblClick", function (id) {});
}

function controlLink(path, page, type, id, attribute) {
  switch (type) {
    case 'add':
      return '<a href="/' + ADMIN_DIR + '/' + path + '/' + page + '/add/' + id + '" class="control-icon icon icon-file-plus" title="Добавить подраздел" data-no-instant></a>';
      break;

    case 'edit':
      return '<a href="/' + ADMIN_DIR + '/' + path + '/' + page + '/edit/' + id + '" class="control-icon icon icon-edit" title="Редактировать раздел" data-no-instant></a>';
      break;

    case 'visible':
      return '<a href="/' + ADMIN_DIR + '/' + path + '/' + page + '/visible/' + id + '" class="control-icon icon icon-eye' + (attribute == 0 ? '-off' : '') + '" onclick="ajax_vis_toggle(this, 15, 0); return false;" title="Отображение страницы" data-no-instant></a>';
      break;

    case 'delete':
      return '<a href="/' + ADMIN_DIR + '/' + path + '/' + page + '/del/' + id + '" class="control-icon icon icon-delete" title="Удалить раздел" onclick="return cp.dialog(\'Вы действительно хотите удалить раздел?\');" data-no-instant></a>';
      break;
  }
}

function buildTree(path, page) {
  $.ajax({
    url: '/' + ADMIN_DIR + '/' + path + '/getStructure',
    type: "get",
    dataType: "JSON",
    success: function success(response) {
      category.deleteChildItems(0);

      if (response.length) {
        for (var x in response) {
          controls = '';

          controls += '<span class="control-icons">';
          controls += controlLink(path, page, 'add', response[x].id);
          controls += controlLink(path, page, 'edit', response[x].id);
          controls += controlLink(path, page, 'visible', response[x].id, response[x].visible);
          controls += controlLink(path, page, 'delete', response[x].id);
          controls += '</span>';

          close = 0;
          open = 0;
          leaf = 0;

          if (response[x].pid == 0) {
            leaf = 'icon/home.svg';
            open = 'icon/home.svg';
            close = 'icon/home.svg';
          } else if (response[x].dynamic == 1) {
            leaf = 'icon/application-code.svg';
          } else {
            leaf = 'icon/file.svg';
          }

          category.insertNewChild(response[x].pid, response[x].id, response[x].name + ' ' + controls, 0, leaf, open, close);
        }
      }

      category.openOnItemAdding(true);
    }
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zdHJ1Y3R1cmUuanMiXSwibmFtZXMiOlsiY2F0ZWdvcnkiLCJjb250cm9scyIsImRvT25Mb2FkIiwicGF0aCIsImRodG1sWFRyZWVPYmplY3QiLCJzZXRJbWFnZVBhdGgiLCJBRE1JTl9ESVIiLCJlbmFibGVEcmFnQW5kRHJvcCIsInNldEVkaXRTdGFydEFjdGlvbiIsImVuYWJsZUtleWJvYXJkTmF2aWdhdGlvbiIsImVuYWJsZU11bHRpc2VsZWN0aW9uIiwiZW5hYmxlVHJlZUxpbmVzIiwibWFrZUFsbERyYWdnYWJsZSIsImF0dGFjaEV2ZW50Iiwic0lkIiwidElkIiwiaWQiLCJzT2JqZWN0IiwidE9iamVjdCIsIiQiLCJhamF4IiwidXJsIiwidHlwZSIsImRhdGEiLCJvaWQiLCJwaWQiLCJjb250cm9sTGluayIsInBhZ2UiLCJhdHRyaWJ1dGUiLCJidWlsZFRyZWUiLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImRlbGV0ZUNoaWxkSXRlbXMiLCJsZW5ndGgiLCJ4IiwidmlzaWJsZSIsImNsb3NlIiwib3BlbiIsImxlYWYiLCJkeW5hbWljIiwiaW5zZXJ0TmV3Q2hpbGQiLCJuYW1lIiwib3Blbk9uSXRlbUFkZGluZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxRQUFKLEVBQWNDLFFBQWQ7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsSUFBbEIsRUFDQTtBQUNDSCxhQUFXLElBQUlJLGdCQUFKLENBQXFCLGlCQUFyQixFQUF3QyxNQUF4QyxFQUFnRCxNQUFoRCxFQUF3RCxDQUF4RCxDQUFYO0FBQ0FKLFdBQVNLLFlBQVQsQ0FBc0IsTUFBTUMsU0FBTixHQUFrQixlQUF4QztBQUNBTixXQUFTTyxpQkFBVCxDQUEyQixJQUEzQjtBQUNBUCxXQUFTUSxrQkFBVCxDQUE0QixPQUFLLEtBQWpDO0FBQ0FSLFdBQVNTLHdCQUFULENBQWtDLElBQWxDO0FBQ0FULFdBQVNVLG9CQUFULENBQThCLElBQTlCO0FBQ0FWLFdBQVNXLGVBQVQsQ0FBeUIsSUFBekI7QUFDQVgsV0FBU1ksZ0JBQVQ7O0FBRUE7Ozs7QUFJQVosV0FBU2EsV0FBVCxDQUFxQixRQUFyQixFQUErQixVQUFTQyxHQUFULEVBQWNDLEdBQWQsRUFBbUJDLEVBQW5CLEVBQXVCQyxPQUF2QixFQUFnQ0MsT0FBaEMsRUFBd0M7QUFDdEVDLE1BQUVDLElBQUYsQ0FBTztBQUNHQyxXQUFLLE1BQU1mLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0JILElBQXhCLEdBQStCLGtCQUR2QztBQUVHbUIsWUFBTSxNQUZUO0FBR0dDLFlBQU07QUFDTEMsYUFBS1YsR0FEQTtBQUVMVyxhQUFLVjtBQUZBO0FBSFQsS0FBUDtBQVFBLEdBVEQ7O0FBV0FmLFdBQVNhLFdBQVQsQ0FBcUIsWUFBckIsRUFBbUMsVUFBU0csRUFBVCxFQUFZLENBRTlDLENBRkQ7QUFHQTs7QUFFRCxTQUFTVSxXQUFULENBQXFCdkIsSUFBckIsRUFBMkJ3QixJQUEzQixFQUFpQ0wsSUFBakMsRUFBdUNOLEVBQXZDLEVBQTJDWSxTQUEzQyxFQUNBO0FBQ0MsVUFBT04sSUFBUDtBQUVDLFNBQUssS0FBTDtBQUNDLGFBQU8sZUFBZWhCLFNBQWYsR0FBMkIsR0FBM0IsR0FBaUNILElBQWpDLEdBQXdDLEdBQXhDLEdBQThDd0IsSUFBOUMsR0FBcUQsT0FBckQsR0FBK0RYLEVBQS9ELEdBQW9FLDRGQUEzRTtBQUNEOztBQUVBLFNBQUssTUFBTDtBQUNDLGFBQU8sZUFBZVYsU0FBZixHQUEyQixHQUEzQixHQUFpQ0gsSUFBakMsR0FBd0MsR0FBeEMsR0FBOEN3QixJQUE5QyxHQUFxRCxRQUFyRCxHQUFnRVgsRUFBaEUsR0FBcUUseUZBQTVFO0FBQ0Q7O0FBRUEsU0FBSyxTQUFMO0FBQ0MsYUFBTyxlQUFlVixTQUFmLEdBQTJCLEdBQTNCLEdBQWlDSCxJQUFqQyxHQUF3QyxHQUF4QyxHQUE4Q3dCLElBQTlDLEdBQXFELFdBQXJELEdBQW1FWCxFQUFuRSxHQUF3RSxxQ0FBeEUsSUFBaUhZLGFBQWEsQ0FBYixHQUFpQixNQUFqQixHQUEwQixFQUEzSSxJQUFpSiwyR0FBeEo7QUFDRDs7QUFFQSxTQUFLLFFBQUw7QUFDQyxhQUFPLGVBQWV0QixTQUFmLEdBQTJCLEdBQTNCLEdBQWlDSCxJQUFqQyxHQUF3QyxHQUF4QyxHQUE4Q3dCLElBQTlDLEdBQXFELE9BQXJELEdBQStEWCxFQUEvRCxHQUFvRSw4SkFBM0U7QUFDRDtBQWhCRDtBQWtCQTs7QUFFRCxTQUFTYSxTQUFULENBQW1CMUIsSUFBbkIsRUFBeUJ3QixJQUF6QixFQUNBO0FBQ0NSLElBQUVDLElBQUYsQ0FBTztBQUNBQyxTQUFLLE1BQU1mLFNBQU4sR0FBa0IsR0FBbEIsR0FBd0JILElBQXhCLEdBQStCLGVBRHBDO0FBRUFtQixVQUFNLEtBRk47QUFHQVEsY0FBVSxNQUhWO0FBSUFDLGFBQVMsaUJBQVNDLFFBQVQsRUFDVDtBQUNDaEMsZUFBU2lDLGdCQUFULENBQTBCLENBQTFCOztBQUVBLFVBQUlELFNBQVNFLE1BQWIsRUFDQTtBQUNJLGFBQUksSUFBSUMsQ0FBUixJQUFhSCxRQUFiLEVBQ0E7QUFDQy9CLHFCQUFXLEVBQVg7O0FBRUFBLHNCQUFZLDhCQUFaO0FBQ0FBLHNCQUFZeUIsWUFBWXZCLElBQVosRUFBa0J3QixJQUFsQixFQUF3QixLQUF4QixFQUErQkssU0FBU0csQ0FBVCxFQUFZbkIsRUFBM0MsQ0FBWjtBQUNBZixzQkFBWXlCLFlBQVl2QixJQUFaLEVBQWtCd0IsSUFBbEIsRUFBd0IsTUFBeEIsRUFBZ0NLLFNBQVNHLENBQVQsRUFBWW5CLEVBQTVDLENBQVo7QUFDQWYsc0JBQVl5QixZQUFZdkIsSUFBWixFQUFrQndCLElBQWxCLEVBQXdCLFNBQXhCLEVBQW1DSyxTQUFTRyxDQUFULEVBQVluQixFQUEvQyxFQUFtRGdCLFNBQVNHLENBQVQsRUFBWUMsT0FBL0QsQ0FBWjtBQUNBbkMsc0JBQVl5QixZQUFZdkIsSUFBWixFQUFrQndCLElBQWxCLEVBQXdCLFFBQXhCLEVBQWtDSyxTQUFTRyxDQUFULEVBQVluQixFQUE5QyxDQUFaO0FBQ0FmLHNCQUFZLFNBQVo7O0FBRUFvQyxrQkFBUSxDQUFSO0FBQ0FDLGlCQUFPLENBQVA7QUFDQUMsaUJBQU8sQ0FBUDs7QUFFQSxjQUFJUCxTQUFTRyxDQUFULEVBQVlWLEdBQVosSUFBbUIsQ0FBdkIsRUFDQTtBQUNDYyxtQkFBTyxlQUFQO0FBQ0FELG1CQUFPLGVBQVA7QUFDQUQsb0JBQVEsZUFBUjtBQUNBLFdBTEQsTUFNSyxJQUFJTCxTQUFTRyxDQUFULEVBQVlLLE9BQVosSUFBdUIsQ0FBM0IsRUFDTDtBQUNSRCxtQkFBTywyQkFBUDtBQUNTLFdBSEksTUFJQTtBQUNKQSxtQkFBTyxlQUFQO0FBQ0E7O0FBRUR2QyxtQkFBU3lDLGNBQVQsQ0FBd0JULFNBQVNHLENBQVQsRUFBWVYsR0FBcEMsRUFBeUNPLFNBQVNHLENBQVQsRUFBWW5CLEVBQXJELEVBQXlEZ0IsU0FBU0csQ0FBVCxFQUFZTyxJQUFaLEdBQW1CLEdBQW5CLEdBQXlCekMsUUFBbEYsRUFBNEYsQ0FBNUYsRUFBK0ZzQyxJQUEvRixFQUFxR0QsSUFBckcsRUFBMkdELEtBQTNHO0FBQ0E7QUFDSjs7QUFFRHJDLGVBQVMyQyxnQkFBVCxDQUEwQixJQUExQjtBQUNBO0FBNUNELEdBQVA7QUE4Q0EiLCJmaWxlIjoiX3N0cnVjdHVyZS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBjYXRlZ29yeSwgY29udHJvbHM7XG5cbmZ1bmN0aW9uIGRvT25Mb2FkKHBhdGgpXG57XG5cdGNhdGVnb3J5ID0gbmV3IGRodG1sWFRyZWVPYmplY3QoXCJ0cmVlYm94Ym94X3RyZWVcIiwgXCIxMDAlXCIsIFwiMTAwJVwiLCAwKTtcblx0Y2F0ZWdvcnkuc2V0SW1hZ2VQYXRoKCcvJyArIEFETUlOX0RJUiArICcvaW1hZ2VzL3RyZWUvJyk7XG5cdGNhdGVnb3J5LmVuYWJsZURyYWdBbmREcm9wKHRydWUpO1xuXHRjYXRlZ29yeS5zZXRFZGl0U3RhcnRBY3Rpb24odHJ1ZS9mYWxzZSk7XG5cdGNhdGVnb3J5LmVuYWJsZUtleWJvYXJkTmF2aWdhdGlvbih0cnVlKTtcblx0Y2F0ZWdvcnkuZW5hYmxlTXVsdGlzZWxlY3Rpb24odHJ1ZSk7XG5cdGNhdGVnb3J5LmVuYWJsZVRyZWVMaW5lcyh0cnVlKTtcblx0Y2F0ZWdvcnkubWFrZUFsbERyYWdnYWJsZSgpO1xuXHRcblx0Lypcblx0Y2F0ZWdvcnkuZW5hYmxlQ2hlY2tCb3hlcyh0cnVlKTtcblx0Ki9cblx0XG5cdGNhdGVnb3J5LmF0dGFjaEV2ZW50KFwib25Ecm9wXCIsIGZ1bmN0aW9uKHNJZCwgdElkLCBpZCwgc09iamVjdCwgdE9iamVjdCl7XG5cdFx0JC5hamF4KHtcbiAgICAgICAgICAgIHVybDogJy8nICsgQURNSU5fRElSICsgJy8nICsgcGF0aCArICcvdXBkYXRlU3RydWN0dXJlJyxcbiAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgXHRvaWQ6IHNJZCxcbiAgICAgICAgICAgIFx0cGlkOiB0SWRcbiAgICAgICAgICAgIH1cbiAgICAgICBcdH0pO1xuXHR9KTtcblxuXHRjYXRlZ29yeS5hdHRhY2hFdmVudChcIm9uRGJsQ2xpY2tcIiwgZnVuY3Rpb24oaWQpe1xuXHQgICAgXG5cdH0pO1xufVxuXG5mdW5jdGlvbiBjb250cm9sTGluayhwYXRoLCBwYWdlLCB0eXBlLCBpZCwgYXR0cmlidXRlKVxue1xuXHRzd2l0Y2godHlwZSlcblx0e1xuXHRcdGNhc2UgJ2FkZCc6XG5cdFx0XHRyZXR1cm4gJzxhIGhyZWY9XCIvJyArIEFETUlOX0RJUiArICcvJyArIHBhdGggKyAnLycgKyBwYWdlICsgJy9hZGQvJyArIGlkICsgJ1wiIGNsYXNzPVwiY29udHJvbC1pY29uIGljb24gaWNvbi1maWxlLXBsdXNcIiB0aXRsZT1cItCU0L7QsdCw0LLQuNGC0Ywg0L/QvtC00YDQsNC30LTQtdC7XCIgZGF0YS1uby1pbnN0YW50PjwvYT4nO1xuXHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnZWRpdCc6XG5cdFx0XHRyZXR1cm4gJzxhIGhyZWY9XCIvJyArIEFETUlOX0RJUiArICcvJyArIHBhdGggKyAnLycgKyBwYWdlICsgJy9lZGl0LycgKyBpZCArICdcIiBjbGFzcz1cImNvbnRyb2wtaWNvbiBpY29uIGljb24tZWRpdFwiIHRpdGxlPVwi0KDQtdC00LDQutGC0LjRgNC+0LLQsNGC0Ywg0YDQsNC30LTQtdC7XCIgZGF0YS1uby1pbnN0YW50PjwvYT4nO1xuXHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAndmlzaWJsZSc6XG5cdFx0XHRyZXR1cm4gJzxhIGhyZWY9XCIvJyArIEFETUlOX0RJUiArICcvJyArIHBhdGggKyAnLycgKyBwYWdlICsgJy92aXNpYmxlLycgKyBpZCArICdcIiBjbGFzcz1cImNvbnRyb2wtaWNvbiBpY29uIGljb24tZXllJyArIChhdHRyaWJ1dGUgPT0gMCA/ICctb2ZmJyA6ICcnKSArICdcIiBvbmNsaWNrPVwiYWpheF92aXNfdG9nZ2xlKHRoaXMsIDE1LCAwKTsgcmV0dXJuIGZhbHNlO1wiIHRpdGxlPVwi0J7RgtC+0LHRgNCw0LbQtdC90LjQtSDRgdGC0YDQsNC90LjRhtGLXCIgZGF0YS1uby1pbnN0YW50PjwvYT4nO1xuXHRcdGJyZWFrO1xuXG5cdFx0Y2FzZSAnZGVsZXRlJzpcblx0XHRcdHJldHVybiAnPGEgaHJlZj1cIi8nICsgQURNSU5fRElSICsgJy8nICsgcGF0aCArICcvJyArIHBhZ2UgKyAnL2RlbC8nICsgaWQgKyAnXCIgY2xhc3M9XCJjb250cm9sLWljb24gaWNvbiBpY29uLWRlbGV0ZVwiIHRpdGxlPVwi0KPQtNCw0LvQuNGC0Ywg0YDQsNC30LTQtdC7XCIgb25jbGljaz1cInJldHVybiBjcC5kaWFsb2coXFwn0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0YDQsNC30LTQtdC7P1xcJyk7XCIgZGF0YS1uby1pbnN0YW50PjwvYT4nO1xuXHRcdGJyZWFrO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkVHJlZShwYXRoLCBwYWdlKVxue1xuXHQkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvJyArIEFETUlOX0RJUiArICcvJyArIHBhdGggKyAnL2dldFN0cnVjdHVyZScsXG4gICAgICAgIHR5cGU6IFwiZ2V0XCIsXG4gICAgICAgIGRhdGFUeXBlOiBcIkpTT05cIixcbiAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzcG9uc2UpXG4gICAgICAgIHtcbiAgICAgICAgXHRjYXRlZ29yeS5kZWxldGVDaGlsZEl0ZW1zKDApO1xuXHRcdFx0XG4gICAgICAgIFx0aWYgKHJlc3BvbnNlLmxlbmd0aClcbiAgICAgICAgXHR7XG4gICAgICAgICAgICBcdGZvcih2YXIgeCBpbiByZXNwb25zZSlcbiAgICAgICAgICAgIFx0e1xuICAgICAgICAgICAgXHRcdGNvbnRyb2xzID0gJyc7XG5cbiAgICAgICAgICAgIFx0XHRjb250cm9scyArPSAnPHNwYW4gY2xhc3M9XCJjb250cm9sLWljb25zXCI+JztcbiAgICAgICAgICAgIFx0XHRjb250cm9scyArPSBjb250cm9sTGluayhwYXRoLCBwYWdlLCAnYWRkJywgcmVzcG9uc2VbeF0uaWQpO1xuICAgICAgICAgICAgXHRcdGNvbnRyb2xzICs9IGNvbnRyb2xMaW5rKHBhdGgsIHBhZ2UsICdlZGl0JywgcmVzcG9uc2VbeF0uaWQpO1xuICAgICAgICAgICAgXHRcdGNvbnRyb2xzICs9IGNvbnRyb2xMaW5rKHBhdGgsIHBhZ2UsICd2aXNpYmxlJywgcmVzcG9uc2VbeF0uaWQsIHJlc3BvbnNlW3hdLnZpc2libGUpO1xuICAgICAgICAgICAgXHRcdGNvbnRyb2xzICs9IGNvbnRyb2xMaW5rKHBhdGgsIHBhZ2UsICdkZWxldGUnLCByZXNwb25zZVt4XS5pZCk7XG4gICAgICAgICAgICBcdFx0Y29udHJvbHMgKz0gJzwvc3Bhbj4nO1xuXG4gICAgICAgICAgICBcdFx0Y2xvc2UgPSAwO1xuICAgICAgICAgICAgXHRcdG9wZW4gPSAwO1xuICAgICAgICAgICAgXHRcdGxlYWYgPSAwO1xuXG4gICAgICAgICAgICBcdFx0aWYgKHJlc3BvbnNlW3hdLnBpZCA9PSAwKVxuICAgICAgICAgICAgXHRcdHtcbiAgICAgICAgICAgIFx0XHRcdGxlYWYgPSAnaWNvbi9ob21lLnN2Zyc7XG4gICAgICAgICAgICBcdFx0XHRvcGVuID0gJ2ljb24vaG9tZS5zdmcnO1xuICAgICAgICAgICAgXHRcdFx0Y2xvc2UgPSAnaWNvbi9ob21lLnN2Zyc7XG4gICAgICAgICAgICBcdFx0fVxuICAgICAgICAgICAgXHRcdGVsc2UgaWYgKHJlc3BvbnNlW3hdLmR5bmFtaWMgPT0gMSlcbiAgICAgICAgICAgIFx0XHR7XG5cdFx0XHRcdFx0XHRsZWFmID0gJ2ljb24vYXBwbGljYXRpb24tY29kZS5zdmcnO1xuICAgICAgICAgICAgXHRcdH1cbiAgICAgICAgICAgIFx0XHRlbHNlIHtcbiAgICAgICAgICAgIFx0XHRcdGxlYWYgPSAnaWNvbi9maWxlLnN2Zyc7XG4gICAgICAgICAgICBcdFx0fVxuXG4gICAgICAgICAgICBcdFx0Y2F0ZWdvcnkuaW5zZXJ0TmV3Q2hpbGQocmVzcG9uc2VbeF0ucGlkLCByZXNwb25zZVt4XS5pZCwgcmVzcG9uc2VbeF0ubmFtZSArICcgJyArIGNvbnRyb2xzLCAwLCBsZWFmLCBvcGVuLCBjbG9zZSk7XG4gICAgICAgICAgICBcdH1cbiAgICAgICAgXHR9XG5cdFx0XHRcbiAgICAgICAgXHRjYXRlZ29yeS5vcGVuT25JdGVtQWRkaW5nKHRydWUpO1xuICAgICAgICB9XG4gICBcdH0pO1xufSJdfQ==

'use strict';

;(function (d) {
    function template(id, data) {
        if (d.getElementById(id) !== null) {
            return Template7.compile(d.getElementById(id).innerHTML)(data || {});
        }
        return '';
    }
    window.template = template;
})(document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl90ZW1wbGF0ZS5qcyJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsImlkIiwiZGF0YSIsImQiLCJnZXRFbGVtZW50QnlJZCIsIlRlbXBsYXRlNyIsImNvbXBpbGUiLCJpbm5lckhUTUwiLCJ3aW5kb3ciLCJkb2N1bWVudCJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLENBQUUsYUFBSztBQUNKLGFBQVNBLFFBQVQsQ0FBa0JDLEVBQWxCLEVBQXNCQyxJQUF0QixFQUE0QjtBQUN4QixZQUFJQyxFQUFFQyxjQUFGLENBQWlCSCxFQUFqQixNQUF5QixJQUE3QixFQUFtQztBQUMvQixtQkFBT0ksVUFBVUMsT0FBVixDQUFrQkgsRUFBRUMsY0FBRixDQUFpQkgsRUFBakIsRUFBcUJNLFNBQXZDLEVBQWtETCxRQUFRLEVBQTFELENBQVA7QUFDSDtBQUNELGVBQU8sRUFBUDtBQUNIO0FBQ0RNLFdBQU9SLFFBQVAsR0FBa0JBLFFBQWxCO0FBQ0gsQ0FSQSxFQVFHUyxRQVJIIiwiZmlsZSI6Il90ZW1wbGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjsoKGQgPT4ge1xuICAgIGZ1bmN0aW9uIHRlbXBsYXRlKGlkLCBkYXRhKSB7XG4gICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIFRlbXBsYXRlNy5jb21waWxlKGQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVySFRNTCkoZGF0YSB8fCB7fSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICB3aW5kb3cudGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbn0pKShkb2N1bWVudCk7XG4iXX0=

'use strict';

$(document).ready(function () {

    $.upload = {
        open: function open(selector, isClearErr, isResetForm, isOverlay) {
            clearInterval(uploadOpenTimeout);
            uploadOpenTimeout = setTimeout(function () {
                upload._open(selector, isClearErr, isResetForm, isOverlay);
            }, 200);
        },
        clearErrors: function clearErrors($upload) {
            $upload.find('.error').removeClass('error');
            $upload.find('.upload__errorList').addClass('hide').empty();
            $upload.find('.hide-on-open').hide();
            $upload.find('.tooltip').remove();
        }
    };

    $.upload.init = function () {
        var formAction = '/' + ADMIN_DIR + '/meta/fileUpload';
        var filesLimit = 0;

        $('.js-fileupload').each(function (index, item) {
            return function (element) {
                var $attachments = $(element);
                var id = $attachments.find('.js-fileupload-control').attr('id');

                var groupid = $attachments.find('.js-fileupload-group').val();
                var settings = $attachments.find('.js-fileupload-settings').val();
                var input_name = $attachments.find('.js-fileupload-group').attr('name');

                if ($attachments.data('action')) {
                    formAction = $attachments.data('action');
                }

                var uploader = new qq.FineUploader({
                    debug: false,

                    multiple: true,

                    element: document.getElementById(id),

                    template: 'upload-template',

                    request: {
                        accessKey: "file_key",
                        endpoint: formAction,
                        inputName: 'file',
                        includeExif: false,
                        defaultQuality: 100,
                        params: {
                            groupid: groupid,
                            settings: settings
                        }
                    },

                    deleteFile: {
                        enabled: true,
                        forceConfirm: false,
                        endpoint: '/' + ADMIN_DIR + '/meta/filedelete'
                    },

                    thumbnails: {
                        placeholders: {
                            waitingPath: '/' + ADMIN_DIR + '/images/fine-uploader/waiting-generic.png',
                            notAvailablePath: '/' + ADMIN_DIR + '/images/fine-uploader/not_available-generic.png'
                        }
                    },

                    validation: {
                        // allowedExtensions: ['jpeg', 'jpg', 'png', 'gif', 'txt'],
                        itemLimit: filesLimit,
                        sizeLimit: 2048000
                    },

                    callbacks: {
                        onComplete: function onComplete(id, name, response) {
                            this.setUuid(id, response.id);
                        }
                    }
                });

                uploader.addInitialFiles(initialFiles);

                $attachments.on('click', '.qq-upload-file-selector', function (e) {
                    e.preventDefault();
                    var title = $(this).text();
                    var index = $(this).closest('.attachments-list__item').index();
                    var id = uploader.getUuid(index);

                    var update = Module.changeFileName(id, title);

                    if (update) {
                        uploader.setName(index, update);
                    }
                });
            }(item);
        });
    };
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl91cGxvYWQuanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJ1cGxvYWQiLCJvcGVuIiwic2VsZWN0b3IiLCJpc0NsZWFyRXJyIiwiaXNSZXNldEZvcm0iLCJpc092ZXJsYXkiLCJjbGVhckludGVydmFsIiwidXBsb2FkT3BlblRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiX29wZW4iLCJjbGVhckVycm9ycyIsIiR1cGxvYWQiLCJmaW5kIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsImVtcHR5IiwiaGlkZSIsInJlbW92ZSIsImluaXQiLCJmb3JtQWN0aW9uIiwiQURNSU5fRElSIiwiZmlsZXNMaW1pdCIsImVhY2giLCJpbmRleCIsIml0ZW0iLCJlbGVtZW50IiwiJGF0dGFjaG1lbnRzIiwiaWQiLCJhdHRyIiwiZ3JvdXBpZCIsInZhbCIsInNldHRpbmdzIiwiaW5wdXRfbmFtZSIsImRhdGEiLCJ1cGxvYWRlciIsInFxIiwiRmluZVVwbG9hZGVyIiwiZGVidWciLCJtdWx0aXBsZSIsImdldEVsZW1lbnRCeUlkIiwidGVtcGxhdGUiLCJyZXF1ZXN0IiwiYWNjZXNzS2V5IiwiZW5kcG9pbnQiLCJpbnB1dE5hbWUiLCJpbmNsdWRlRXhpZiIsImRlZmF1bHRRdWFsaXR5IiwicGFyYW1zIiwiZGVsZXRlRmlsZSIsImVuYWJsZWQiLCJmb3JjZUNvbmZpcm0iLCJ0aHVtYm5haWxzIiwicGxhY2Vob2xkZXJzIiwid2FpdGluZ1BhdGgiLCJub3RBdmFpbGFibGVQYXRoIiwidmFsaWRhdGlvbiIsIml0ZW1MaW1pdCIsInNpemVMaW1pdCIsImNhbGxiYWNrcyIsIm9uQ29tcGxldGUiLCJuYW1lIiwicmVzcG9uc2UiLCJzZXRVdWlkIiwiYWRkSW5pdGlhbEZpbGVzIiwiaW5pdGlhbEZpbGVzIiwib24iLCJlIiwicHJldmVudERlZmF1bHQiLCJ0aXRsZSIsInRleHQiLCJjbG9zZXN0IiwiZ2V0VXVpZCIsInVwZGF0ZSIsIk1vZHVsZSIsImNoYW5nZUZpbGVO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bkMsRUFBYixFQUFpQmtDLFNBQVNsQyxFQUExQjtBQUNIO0FBSE07QUF4Q3NCLGlCQUFwQixDQUFqQjs7QUErQ0FPLHlCQUFTNkIsZUFBVCxDQUF5QkMsWUFBekI7O0FBRUF0Qyw2QkFBYXVDLEVBQWIsQ0FBZ0IsT0FBaEIsRUFBeUIsMEJBQXpCLEVBQXFELFVBQVNDLENBQVQsRUFBWTtBQUM3REEsc0JBQUVDLGNBQUY7QUFDQSx3QkFBTUMsUUFBUXZFLEVBQUUsSUFBRixFQUFRd0UsSUFBUixFQUFkO0FBQ0Esd0JBQU05QyxRQUFRMUIsRUFBRSxJQUFGLEVBQVF5RSxPQUFSLENBQWdCLHlCQUFoQixFQUEyQy9DLEtBQTNDLEVBQWQ7QUFDQSx3QkFBTUksS0FBS08sU0FBU3FDLE9BQVQsQ0FBaUJoRCxLQUFqQixDQUFYOztBQUVBLHdCQUFNaUQsU0FBU0MsT0FBT0MsY0FBUCxDQUFzQi9DLEVBQXRCLEVBQTBCeUMsS0FBMUIsQ0FBZjs7QUFFQSx3QkFBSUksTUFBSixFQUFZO0FBQ1J0QyxpQ0FBU3lDLE9BQVQsQ0FBaUJwRCxLQUFqQixFQUF3QmlELE1BQXhCO0FBQ0g7QUFDSixpQkFYRDtBQWFILGFBM0VNLENBMkVKaEQsSUEzRUksQ0FBUDtBQTRFSCxTQTdFRDtBQThFSCxLQWxGRDtBQW1GSCxDQXJHRCIsImZpbGUiOiJfdXBsb2FkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgJC51cGxvYWQgPSB7XG4gICAgICAgIG9wZW46IGZ1bmN0aW9uKHNlbGVjdG9yLCBpc0NsZWFyRXJyLCBpc1Jlc2V0Rm9ybSwgaXNPdmVybGF5KVxuICAgICAgICB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHVwbG9hZE9wZW5UaW1lb3V0KTtcbiAgICAgICAgICAgIHVwbG9hZE9wZW5UaW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB1cGxvYWQuX29wZW4oc2VsZWN0b3IsIGlzQ2xlYXJFcnIsIGlzUmVzZXRGb3JtLCBpc092ZXJsYXkpO1xuICAgICAgICAgICAgfSwgMjAwKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJFcnJvcnM6IGZ1bmN0aW9uKCR1cGxvYWQpIHtcbiAgICAgICAgICAgICR1cGxvYWQuZmluZCgnLmVycm9yJykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICAkdXBsb2FkLmZpbmQoJy51cGxvYWRfX2Vycm9yTGlzdCcpLmFkZENsYXNzKCdoaWRlJykuZW1wdHkoKTtcbiAgICAgICAgICAgICR1cGxvYWQuZmluZCgnLmhpZGUtb24tb3BlbicpLmhpZGUoKTtcbiAgICAgICAgICAgICR1cGxvYWQuZmluZCgnLnRvb2x0aXAnKS5yZW1vdmUoKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAkLnVwbG9hZC5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBmb3JtQWN0aW9uID0gYC8ke0FETUlOX0RJUn0vbWV0YS9maWxlVXBsb2FkYDtcbiAgICAgICAgbGV0IGZpbGVzTGltaXQgPSAwO1xuXG4gICAgICAgICQoJy5qcy1maWxldXBsb2FkJykuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCAkYXR0YWNobWVudHMgPSAkKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gJGF0dGFjaG1lbnRzLmZpbmQoJy5qcy1maWxldXBsb2FkLWNvbnRyb2wnKS5hdHRyKCdpZCcpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZ3JvdXBpZCA9ICRhdHRhY2htZW50cy5maW5kKCcuanMtZmlsZXVwbG9hZC1ncm91cCcpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gJGF0dGFjaG1lbnRzLmZpbmQoJy5qcy1maWxldXBsb2FkLXNldHRpbmdzJykudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRfbmFtZSA9ICRhdHRhY2htZW50cy5maW5kKCcuanMtZmlsZXVwbG9hZC1ncm91cCcpLmF0dHIoJ25hbWUnKTtcblxuICAgICAgICAgICAgICAgIGlmICgkYXR0YWNobWVudHMuZGF0YSgnYWN0aW9uJykpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3JtQWN0aW9uID0gJGF0dGFjaG1lbnRzLmRhdGEoJ2FjdGlvbicpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZGVyID0gbmV3IHFxLkZpbmVVcGxvYWRlcih7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnOiBmYWxzZSxcblxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZTogdHJ1ZSxcblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCksXG5cbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6ICd1cGxvYWQtdGVtcGxhdGUnLFxuXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3Q6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY2Vzc0tleTogXCJmaWxlX2tleVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGZvcm1BY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dE5hbWU6ICdmaWxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGVFeGlmOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRRdWFsaXR5OiAxMDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cGlkOiBncm91cGlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiBzZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZUZpbGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JjZUNvbmZpcm06IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW5kcG9pbnQ6IGAvJHtBRE1JTl9ESVJ9L21ldGEvZmlsZWRlbGV0ZWBcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB0aHVtYm5haWxzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YWl0aW5nUGF0aDogYC8ke0FETUlOX0RJUn0vaW1hZ2VzL2ZpbmUtdXBsb2FkZXIvd2FpdGluZy1nZW5lcmljLnBuZ2AsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90QXZhaWxhYmxlUGF0aDogYC8ke0FETUlOX0RJUn0vaW1hZ2VzL2ZpbmUtdXBsb2FkZXIvbm90X2F2YWlsYWJsZS1nZW5lcmljLnBuZ2BcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhbGxvd2VkRXh0ZW5zaW9uczogWydqcGVnJywgJ2pwZycsICdwbmcnLCAnZ2lmJywgJ3R4dCddLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbUxpbWl0OiBmaWxlc0xpbWl0LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUxpbWl0OiAyMDQ4MDAwXG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2tzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiBmdW5jdGlvbihpZCwgbmFtZSwgcmVzcG9uc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFV1aWQoaWQsIHJlc3BvbnNlLmlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdXBsb2FkZXIuYWRkSW5pdGlhbEZpbGVzKGluaXRpYWxGaWxlcyk7XG5cbiAgICAgICAgICAgICAgICAkYXR0YWNobWVudHMub24oJ2NsaWNrJywgJy5xcS11cGxvYWQtZmlsZS1zZWxlY3RvcicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aXRsZSA9ICQodGhpcykudGV4dCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9ICQodGhpcykuY2xvc2VzdCgnLmF0dGFjaG1lbnRzLWxpc3RfX2l0ZW0nKS5pbmRleCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHVwbG9hZGVyLmdldFV1aWQoaW5kZXgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwZGF0ZSA9IE1vZHVsZS5jaGFuZ2VGaWxlTmFtZShpZCwgdGl0bGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZGVyLnNldE5hbWUoaW5kZXgsIHVwZGF0ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSkoaXRlbSk7XG4gICAgICAgIH0pO1xuICAgIH07XG59KTsiXX0=

'use strict';

var d = document;

function keyControls() {
    var clipboard = new Clipboard('.j-clipboard', {
        text: function text(trigger) {
            $(trigger).addClass('copied');

            setTimeout(function () {
                $(trigger).removeClass("copied");
            }, 700);

            return trigger.getAttribute('data-clipboard');
        }
    });

    $("body").on('click', '.remove-trigger', function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var _self_ = this,
            href = $(_self_).attr('href');

        $.post(href, function () {
            cp.notify('Удалено', 'info');

            if (typeof $(_self_).attr('rel') !== 'undefined' && $($(_self_).attr('rel')).length > 0) {
                $($(_self_).attr('rel')).remove();
            } else {
                $(_self_).closest('tr').remove();
            }
        });

        return !1;
    });

    $('body').on('click', '.js-remove-item', function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;

        var _self_ = this,
            href = $(_self_).attr('href');

        $.post(href, function () {
            cp.notify('Удалено', 'info');

            if (typeof $(_self_).attr('rel') !== 'undefined' && $($(_self_).attr('rel')).length > 0) {
                $($(_self_).attr('rel')).remove();
            } else {
                $(_self_).closest('tr').remove();
            }
        });

        return !1;
    });

    $('body').on('click', '.js-add-template', function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var $wrap = $(this).closest('.js-template-wrapper'),
            iteration = parseInt($(this).data('iteration')),
            tpl = $(this).data('template'),
            data = {};

        if (typeof iteration !== 'undefined') {
            data['id'] = iteration;
            iteration += -1;
            $(this).data('iteration', iteration);
        }

        $wrap.append(template(tpl, data));
    });

    $('body').on('keydown', '.reducing-trigger', function (e) {
        if (e.which == 38 || e.which == 40) {
            e.preventDefault();

            var reducing = $(this).data('reducing') || 10,
                format = $(this).data('format'),
                value = parseInt($(this).val()) || 0,
                result = 0;

            if (e.which == 38) {
                result = value + reducing;
            } else if (e.which == 40) {
                result = value - reducing;
            }

            if (result < 0) {
                result = 0;
            }

            if (typeof format !== 'undefined') {
                result = '?i%'.replace('?i', result);
            }

            $(this).val(result);
        }
    });

    $('body').on('keypress', '.latin', function (e) {
        var regex = /[^A-Za-z]/g;
        if (regex.test(String.fromCharCode(e.keyCode))) {
            return !1;
        }
    });

    $("body").on('keypress', '.integer', function (e) {
        if ([0, 8, 13, 38, 40].indexOf(e.which) < 0 && (e.which < 48 || e.which > 57)) {
            return !1;
        }
    });

    $("body").on('keypress', '.float', function (e) {
        if ([0, 8, 13, 38, 40, 44, 46].indexOf(e.which) < 0 && (e.which < 48 || e.which > 57)) {
            return !1;
        }
    });
}

function fileManager() {}

function on_load() {
    fileManager();

    $(".watch-datemask").mask("99/99/9999");
    $(".watch-phonemask").mask("+ 7 (999) 999-99-99");
    $(".watch-cartnumber").mask("999-999-999");

    $('body').on('click', '.js-size-delete', function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;
        $(this).closest('tr').remove();
    });

    $('body').on('click', '.js-add-size', function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1;

        var $table = $(this).closest('.js-size-list').find('table').find('tbody'),
            iteration = parseInt($(this).data('iteration')),
            index = 0;

        $table.find('tr').each(function () {
            if (parseInt($(this).data('index')) > index) {
                index = parseInt($(this).data('index'));
            }
        });

        index++;

        $table.append(template('tpl_image_row', {
            index: index,
            button: true,
            iteration: iteration
        }));
    });

    if ($('.js-table-toggle').length) {
        $('.js-table-toggle').on('click', function (e, flag) {
            e.preventDefault ? e.preventDefault() : e.returnValue = !1;

            if (flag) {
                cp.tableToggle($(this).data('toggle'));
            } else {
                cp.tableToggle($(this).data('toggle'), e);
            }
        });

        if ($('.js-table-toggle[data-toggle-init="true"]').length) {
            $('.js-table-toggle[data-toggle-init="true"]').trigger('click', true);
        }
    }

    if ($('.js-slider').length) {
        $('.js-slider').each(function () {
            var id = $(this).attr('id');
            var type = $(this).data('type');
            var value = $(this).data('value');
            var min = $(this).data('min');
            var max = $(this).data('max');

            slider(id, type, value, min, max);
        });
    }

    if ($('.js-map').length) {
        $('.js-map').each(function () {
            var element = $(this).data('element');
            var provider = $(this).data('provider');

            mapConteiner(provider, element);
        });
    }

    if ($('.js-redactor').length) {
        $('.js-redactor').each(function () {
            var id = $(this).attr('id');
            var type = $(this).data('redactor');

            _redactor.init(id, type);
        });
    }

    if ($('.js-editor').length) {
        $('.js-editor').each(function () {
            var id = $(this).attr('id');
            var type = $(this).data('editor');
            var hightlight = $(this).data('hightlight');

            _editor.init(id, type, hightlight);
        });
    }

    $("body").on('click', '.js-toggle-binding', function (e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = false;
        var $target = $(this);

        if ($target.data('element').length) {
            var $input = $($(this).data('element'));
            $target.toggleClass('on').toggleClass('off');
            $input.prop('readonly', !$target.hasClass('on'));
            $('input[name="' + $input.data('binding-name') + '"]').trigger('blur');
        }
    });

    if ($('.js-binding').length) {
        $('.js-binding').each(function () {
            if (!$(this).hasClass('js-binding-init')) {
                binding($(this).data('binding-name'), $(this).data('binding-element'));
            }
        });
    }

    if ($('.js-fileupload').length) {
        $.upload.init();
    }

    $('body').on('mouseenter', '.js-structure-controll', function (e) {
        $(this).find('.structure__control.animate').removeClass('animate');
    });

    $('body').on('mouseleave', '.js-structure-controll', function (e) {
        $(this).find('.structure__control').addClass('animate');
    });

    $('body').on('click', '.menu-trigger', function (e) {
        e.preventDefault();
        $('#page').toggleClass('page-open');

        var visibility = 'visible';

        if (!$('#page').hasClass('page-open')) {
            visibility = 'hidden';
        }

        $('#overlay').css({
            'visibility': visibility
        });

        return !1;
    });

    $('#meta_data').sortable({
        handle: '.js-trigger-drag',
        pullPlaceholder: false,
        bodyClass: 'dragging',
        draggedClass: 'dragged',
        containerSelector: 'table',
        itemPath: '> tbody',
        itemSelector: 'tr',
        placeholder: '<tr class="placeholder"/>',
        onDrop: function onDrop($item, container, _super, event) {
            $item.removeClass('dragged').removeAttr("style");
            $("body").removeClass('dragging');
        }
    });

    $('body').on('mouseenter', '.trigger-navigation', function (e) {
        var $item = $(this),
            $page = $('#page'),
            title = $item.attr('rel'),
            tooltip,
            id = 'tooltip-' + $item.attr('id');

        if (title && !$('#' + id).length && !$page.hasClass('page-open')) {
            var pos_top = $item.offset().top + 10;

            tooltip = document.createElement('span');
            tooltip.id = id;
            tooltip.innerHTML = title;
            tooltip.className = 'navigation__tooltip navigation__tooltip_animate';
            tooltip.style.top = pos_top + 'px';

            $page.append(tooltip);

            setTimeout(function () {
                $(tooltip).removeClass('navigation__tooltip_animate');
            }, 30);
        }
    });

    $('body').on('mouseleave', '.trigger-navigation', function (e) {
        var id = 'tooltip-' + $(this).attr('id');

        if ($('#' + id).length) {
            var $tooltip = $('#' + id);

            $tooltip.addClass('navigation__tooltip_animate');

            setTimeout(function () {
                $tooltip.remove();
            }, 200);
        }
    });

    $('body').on('click', '.wrapper', function (e) {
        $('#page').removeClass('page-open');
        $('#overlay').css({
            'visibility': 'hidden'
        });
    });

    $('body').on('mouseenter', '.trigger-tooltip', function (e) {
        $(this).data('xtitle', $(this).prop('title'));
        $(this).prop('title', '');
    });

    $('body').on('mouseleave', '.trigger-tooltip', function (e) {
        $(this).prop('title', $(this).data('xtitle'));
        $(this).data('xtitle', '');
    });

    $('.trigger-popover').popover();

    if ($('.nestable-tree').length) {
        var structure_tree = $('.nestable-tree').eq(0);

        if (typeof structure_tree.data('path') !== 'undefined' && typeof structure_tree.data('group') !== 'undefined') {
            var path = structure_tree.data('path'),
                group = parseInt(structure_tree.data('group'));

            structure_tree.nestable({
                group: group,
                maxDepth: 20,
                dragStop: function dragStop(el) {
                    var target, parent, next;

                    next = 0;
                    target = parseInt(el[0].id.split('-')[1]);
                    parent = parseInt(el[0].offsetParent.offsetParent.id.split('-')[1]);

                    if (isNaN(parent)) {
                        parent = group;
                    }

                    if (el[0].nextElementSibling !== null) {
                        next = parseInt(el[0].nextElementSibling.id.split('-')[1]);
                    }

                    if (!isNaN(target) && !isNaN(parent)) {
                        $.ajax({
                            url: '/' + ADMIN_DIR + '/' + path + '/updateStructure',
                            type: "post",
                            data: {
                                oid: target,
                                pid: parent,
                                nid: next
                            }
                        });
                    }
                },
                afterExpand: function afterExpand(el) {
                    var id = el[0].id.split('-')[1];
                    $.removeCookie(path + '_collapse_' + id, { path: '/' });
                },
                afterCollapse: function afterCollapse(el) {
                    var id = el[0].id.split('-')[1];
                    $.cookie(path + '_collapse_' + id, '1', { expires: 30, path: '/' });
                }
            });
        }
    }

    /*
    doOnLoad('structure');
    buildTree('structure', 'index');
      $('#nestable-menu').on('click', function(e)
    {
        var target = $(e.target),
            action = target.data('action');
        if (action === 'expand-all') {
            $('.dd').nestable('expandAll');
        }
        if (action === 'collapse-all') {
            $('.dd').nestable('collapseAll');
        }
    });
     var list = this;
    list.el.find(list.options.itemNodeName).each(function() {
        list.collapseItem($(this));
    });
      expandItem: function(li)
    {
        li.removeClass(this.options.collapsedClass);
        li.children('[data-action="expand"]').hide();
        li.children('[data-action="collapse"]').show();
        li.children(this.options.listNodeName).show();
    },
     collapseItem: function(li)
    {
        var lists = li.children(this.options.listNodeName);
        if (lists.length) {
            li.addClass(this.options.collapsedClass);
            li.children('[data-action="collapse"]').hide();
            li.children('[data-action="expand"]').show();
            li.children(this.options.listNodeName).hide();
        }
    },
     var updateOutput = function(e)
    {
        var list   = e.length ? e : $(e.target),
            output = list.data('output');
        if (window.JSON) {
            output.val(window.JSON.stringify(list.nestable('serialize')));//, null, 2));
        } else {
            output.val('JSON browser support required for this demo.');
        }
    };
     // activate Nestable for list 1
    $('#nestable').nestable({
        group: 1
    })
    .on('change', updateOutput);
     // activate Nestable for list 2
    $('#nestable2').nestable({
        group: 1
    })
    .on('change', updateOutput);
     // output initial serialised data
    updateOutput($('#nestable').data('output', $('#nestable-output')));
    updateOutput($('#nestable2').data('output', $('#nestable2-output')));
     $('#nestable-menu').on('click', function(e)
    {
        var target = $(e.target),
            action = target.data('action');
        if (action === 'expand-all') {
            $('.dd').nestable('expandAll');
        }
        if (action === 'collapse-all') {
            $('.dd').nestable('collapseAll');
        }
    });
     $('#nestable3').nestable();
    */
}

$(document).ready(function () {
    selectize();
    datepicker();
    metaCounter();
    seoCrowl();
    keyControls();
    on_load();
    cp.dropdown();
    cp.tableToggleList();
    cp.cleditor();
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiZCIsImRvY3VtZW50Iiwia2V5Q29udHJvbHMiLCJjbGlwYm9hcmQiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwidHJpZ2dlciIsIiQiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDbGFzcyIsImdldEF0dHJpYnV0ZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJfc2VsZl8iLCJocmVmIiwiYXR0ciIsInBvc3QiLCJjcCIsIm5vdGlmeSIsImxlbmd0aCIsInJlbW92ZSIsImNsb3Nlc3QiLCIkd3JhcCIsIml0ZXJhdGlvbiIsInBhcnNlSW50IiwiZGF0YSIsInRwbCIsImFwcGVuZCIsInRlbXBsYXRlIiwid2hpY2giLCJyZWR1Y2luZyIsImZvcm1hdCIsInZhbHVlIiwidmFsIiwicmVzdWx0IiwicmVwbGFjZSIsInJlZ2V4IiwidGVzdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImtleUNvZGUiLCJpbmRleE9mIiwiZmlsZU1hbmFnZXIiLCJvbl9sb2FkIiwibWFzayIsIiR0YWJsZSIsImZpbmQiLCJpbmRleCIsImVhY2giLCJidXR0b24iLCJmbGFnIiwidGFibGVUb2dnbGUiLCJpZCIsInR5cGUiLCJtaW4iLCJtYXgiLCJzbGlkZXIiLCJlbGVtZW50IiwicHJvdmlkZXIiLCJtYXBDb250ZWluZXIiLCJfcmVkYWN0b3IiLCJpbml0IiwiaGlnaHRsaWdodCIsIl9lZGl0b3IiLCIkdGFyZ2V0IiwiJGlucHV0IiwidG9nZ2xlQ2xhc3MiLCJwcm9wIiwiaGFzQ2xhc3MiLCJiaW5kaW5nIiwidXBsb2FkIiwidmlzaWJpbGl0eSIsImNzcyIsInNvcnRhYmxlIiwiaGFuZGxlIiwicHVsbFBsYWNlaG9sZGVyIiwiYm9keUNsYXNzIiwiZHJhZ2dlZENsYXNzIiwiY29udGFpbmVyU2VsZWN0b3IiLCJpdGVtUGF0aCIsIml0ZW1TZWxlY3RvciIsInBsYWNlaG9sZGVyIiwib25Ecm9wIiwiJGl0ZW0iLCJjb250YWluZXIiLCJfc3VwZXIiLCJldmVudCIsInJlbW92ZUF0dHIiLCIkcGFnZSIsInRpdGxlIiwidG9vbHRpcCIsInBvc190b3AiLCJvZmZzZXQiLCJ0b3AiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiY2xhc3NOYW1lIiwic3R5bGUiLCIkdG9vbHRpcCIsInBvcG92ZXIiLCJzdHJ1Y3R1cmVfdHJlZSIsImVxIiwicGF0aCIsImdyb3VwIiwibmVzdGFibGUiLCJtYXhEZXB0aCIsImRyYWdTdG9wIiwiZWwiLCJ0YXJnZXQiLCJwYXJlbnQiLCJuZXh0Iiwic3BsaXQiLCJvZmZzZXRQYXJlbnQiLCJpc05hTiIsIm5leHRFbGVtZW50U2libGluZyIsImFqYXgiLCJ1cmwiLCJBRE1JTl9ESVIiLCJvaWQiLCJwaWQiLCJuaWQiLCJhZnRlckV4cGFuZCIsInJlbW92ZUNvb2tpZSIsImFmdGVyQ29sbGFwc2UiLCJjb29raWUiLCJleHBpcmVzIiwicmVhZHkiLCJzZWxlY3RpemUiLCJkYXRlcGlja2VyIiwibWV0YUNvdW50ZXIiLCJzZW9Dcm93bCIsImRyb3Bkb3duIiwidGFibGVUb2dnbGVMaXN0IiwiY2xlZGl0b3IiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsSUFBSUMsUUFBUjs7QUFFQSxTQUFTQyxXQUFULEdBQ0E7QUFDSSxRQUFJQyxZQUFZLElBQUlDLFNBQUosQ0FBYyxjQUFkLEVBQThCO0FBQzFDQyxjQUFNLGNBQVNDLE9BQVQsRUFBa0I7QUFDcEJDLGNBQUVELE9BQUYsRUFBV0UsUUFBWCxDQUFvQixRQUFwQjs7QUFFQUMsdUJBQVcsWUFBVTtBQUNqQkYsa0JBQUVELE9BQUYsRUFBV0ksV0FBWCxDQUF1QixRQUF2QjtBQUNILGFBRkQsRUFFRyxHQUZIOztBQUlBLG1CQUFPSixRQUFRSyxZQUFSLENBQXFCLGdCQUFyQixDQUFQO0FBQ0g7QUFUeUMsS0FBOUIsQ0FBaEI7O0FBWUFKLE1BQUUsTUFBRixFQUFVSyxFQUFWLENBQWEsT0FBYixFQUFzQixpQkFBdEIsRUFBeUMsVUFBVUMs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QUFNLE1BRkg7QUFHSDVCLGtDQUFNO0FBQ0Y2RixxQ0FBS1YsTUFESDtBQUVGVyxxQ0FBS1YsTUFGSDtBQUdGVyxxQ0FBS1Y7QUFISDtBQUhILHlCQUFQO0FBU0g7QUFDSixpQkFqQ21CO0FBa0NwQlcsNkJBQWEscUJBQVNkLEVBQVQsRUFDYjtBQUNJLHdCQUFJdkQsS0FBS3VELEdBQUcsQ0FBSCxFQUFNdkQsRUFBTixDQUFTMkQsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBVDtBQUNBM0csc0JBQUVzSCxZQUFGLENBQWVwQixPQUFPLFlBQVAsR0FBc0JsRCxFQUFyQyxFQUF5QyxFQUFFa0QsTUFBTSxHQUFSLEVBQXpDO0FBQ0gsaUJBdENtQjtBQXVDcEJxQiwrQkFBZSx1QkFBU2hCLEVBQVQsRUFDZjtBQUNJLHdCQUFJdkQsS0FBS3VELEdBQUcsQ0FBSCxFQUFNdkQsRUFBTixDQUFTMkQsS0FBVCxDQUFlLEdBQWYsRUFBb0IsQ0FBcEIsQ0FBVDtBQUNBM0csc0JBQUV3SCxNQUFGLENBQVN0QixPQUFPLFlBQVAsR0FBc0JsRCxFQUEvQixFQUFtQyxHQUFuQyxFQUF3QyxFQUFFeUUsU0FBUyxFQUFYLEVBQWV2QixNQUFNLEdBQXJCLEVBQXhDO0FBQ0g7QUEzQ21CLGFBQXhCO0FBNkNIO0FBQ0o7O0FBRUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0ZIOztBQUVEbEcsRUFBRU4sUUFBRixFQUFZZ0ksS0FBWixDQUFrQixZQUFVO0FBQ3hCQztBQUNBQztBQUNBQztBQUNBQztBQUNBbkk7QUFDQTRDO0FBQ0ExQixPQUFHa0gsUUFBSDtBQUNBbEgsT0FBR21ILGVBQUg7QUFDQW5ILE9BQUdvSCxRQUFIO0FBQ0gsQ0FWRCIsImZpbGUiOiJpbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGQgPSBkb2N1bWVudDtcblxuZnVuY3Rpb24ga2V5Q29udHJvbHMoKVxue1xuICAgIHZhciBjbGlwYm9hcmQgPSBuZXcgQ2xpcGJvYXJkKCcuai1jbGlwYm9hcmQnLCB7XG4gICAgICAgIHRleHQ6IGZ1bmN0aW9uKHRyaWdnZXIpIHtcbiAgICAgICAgICAgICQodHJpZ2dlcikuYWRkQ2xhc3MoJ2NvcGllZCcpO1xuXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgJCh0cmlnZ2VyKS5yZW1vdmVDbGFzcyhcImNvcGllZFwiKTtcbiAgICAgICAgICAgIH0sIDcwMCk7XG5cbiAgICAgICAgICAgIHJldHVybiB0cmlnZ2VyLmdldEF0dHJpYnV0ZSgnZGF0YS1jbGlwYm9hcmQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5yZW1vdmUtdHJpZ2dlcicsIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcblxuICAgICAgICB2YXIgX3NlbGZfID0gdGhpcywgaHJlZiA9ICQoX3NlbGZfKS5hdHRyKCdocmVmJyk7XG5cbiAgICAgICAgJC5wb3N0KGhyZWYsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjcC5ub3RpZnkoJ9Cj0LTQsNC70LXQvdC+JywgJ2luZm8nKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZigkKF9zZWxmXykuYXR0cigncmVsJykpICE9PSAndW5kZWZpbmVkJyAmJiAkKCQoX3NlbGZfKS5hdHRyKCdyZWwnKSkubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKCQoX3NlbGZfKS5hdHRyKCdyZWwnKSkucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKF9zZWxmXykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuICExO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuanMtcmVtb3ZlLWl0ZW0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBfc2VsZl8gPSB0aGlzLCBocmVmID0gJChfc2VsZl8pLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAkLnBvc3QoaHJlZiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNwLm5vdGlmeSgn0KPQtNCw0LvQtdC90L4nLCAnaW5mbycpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mKCQoX3NlbGZfKS5hdHRyKCdyZWwnKSkgIT09ICd1bmRlZmluZWQnICYmICQoJChfc2VsZl8pLmF0dHIoJ3JlbCcpKS5sZW5ndGggPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoJChfc2VsZl8pLmF0dHIoJ3JlbCcpKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoX3NlbGZfKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gITE7XG4gICAgfSk7XG4gICAgXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuanMtYWRkLXRlbXBsYXRlJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdmFyICR3cmFwID0gJCh0aGlzKS5jbG9zZXN0KCcuanMtdGVtcGxhdGUtd3JhcHBlcicpLFxuICAgICAgICAgICAgaXRlcmF0aW9uID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCdpdGVyYXRpb24nKSksXG4gICAgICAgICAgICB0cGwgPSAkKHRoaXMpLmRhdGEoJ3RlbXBsYXRlJyksXG4gICAgICAgICAgICBkYXRhID0ge307XG5cbiAgICAgICAgaWYgKHR5cGVvZiBpdGVyYXRpb24gIT09ICd1bmRlZmluZWQnKVxuICAgICAgICB7XG4gICAgICAgICAgICBkYXRhWydpZCddID0gaXRlcmF0aW9uO1xuICAgICAgICAgICAgaXRlcmF0aW9uICs9IC0xO1xuICAgICAgICAgICAgJCh0aGlzKS5kYXRhKCdpdGVyYXRpb24nLCBpdGVyYXRpb24pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAkd3JhcC5hcHBlbmQodGVtcGxhdGUodHBsLCBkYXRhKSk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2tleWRvd24nLCAnLnJlZHVjaW5nLXRyaWdnZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZS53aGljaCA9PSAzOCB8fCBlLndoaWNoID09IDQwKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHZhciByZWR1Y2luZyA9ICQodGhpcykuZGF0YSgncmVkdWNpbmcnKSB8fCAxMCxcbiAgICAgICAgICAgICAgICBmb3JtYXQgPSAkKHRoaXMpLmRhdGEoJ2Zvcm1hdCcpLFxuICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyc2VJbnQoJCh0aGlzKS52YWwoKSkgfHwgMCwgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGUud2hpY2ggPT0gMzgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWUgKyByZWR1Y2luZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUud2hpY2ggPT0gNDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdmFsdWUgLSByZWR1Y2luZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHJlc3VsdCA8IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZihmb3JtYXQpICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAnP2klJy5yZXBsYWNlKCc/aScsIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQodGhpcykudmFsKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAkKCdib2R5Jykub24oJ2tleXByZXNzJywgJy5sYXRpbicsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIHJlZ2V4ID0gL1teQS1aYS16XS9nO1xuICAgICAgICBpZiAocmVnZXgudGVzdChTdHJpbmcuZnJvbUNoYXJDb2RlKGUua2V5Q29kZSkpKSB7XG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcbiAgICAkKFwiYm9keVwiKS5vbigna2V5cHJlc3MnLCAnLmludGVnZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoWzAsIDgsIDEzLCAzOCwgNDBdLmluZGV4T2YoIGUud2hpY2ggKSA8IDAgJiYgKGUud2hpY2ggPCA0OCB8fCBlLndoaWNoID4gNTcpKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCJib2R5XCIpLm9uKCdrZXlwcmVzcycsICcuZmxvYXQnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoIFswLCA4LCAxMywgMzgsIDQwLCA0NCwgNDZdLmluZGV4T2YoIGUud2hpY2ggKSA8IDAgJiYgKCBlLndoaWNoIDwgNDggfHwgZS53aGljaCA+IDU3ICkgKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gITE7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZmlsZU1hbmFnZXIoKVxue1xuICAgIFxufVxuXG5mdW5jdGlvbiBvbl9sb2FkKClcbntcbiAgICBmaWxlTWFuYWdlcigpO1xuXG4gICAgJChcIi53YXRjaC1kYXRlbWFza1wiKS5tYXNrKFwiOTkvOTkvOTk5OVwiKTtcbiAgICAkKFwiLndhdGNoLXBob25lbWFza1wiKS5tYXNrKFwiKyA3ICg5OTkpIDk5OS05OS05OVwiKTtcbiAgICAkKFwiLndhdGNoLWNhcnRudW1iZXJcIikubWFzayhcIjk5OS05OTktOTk5XCIpO1xuICAgIFxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmpzLXNpemUtZGVsZXRlJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gITE7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgndHInKS5yZW1vdmUoKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLmpzLWFkZC1zaXplJywgZnVuY3Rpb24oZSl7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gITE7XG5cbiAgICAgICAgdmFyICR0YWJsZSA9ICQodGhpcykuY2xvc2VzdCgnLmpzLXNpemUtbGlzdCcpLmZpbmQoJ3RhYmxlJykuZmluZCgndGJvZHknKSxcbiAgICAgICAgICAgIGl0ZXJhdGlvbiA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnaXRlcmF0aW9uJykpLFxuICAgICAgICAgICAgaW5kZXggPSAwO1xuXG4gICAgICAgICR0YWJsZS5maW5kKCd0cicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmIChwYXJzZUludCgkKHRoaXMpLmRhdGEoJ2luZGV4JykpID4gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ2luZGV4JykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpbmRleCArKztcblxuICAgICAgICAkdGFibGUuYXBwZW5kKFxuICAgICAgICAgICAgdGVtcGxhdGUoJ3RwbF9pbWFnZV9yb3cnLCB7XG4gICAgICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgICAgIGJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpdGVyYXRpb246IGl0ZXJhdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgKTtcbiAgICB9KTtcblxuICAgIGlmICgkKCcuanMtdGFibGUtdG9nZ2xlJykubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgJCgnLmpzLXRhYmxlLXRvZ2dsZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUsIGZsYWcpe1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSAhMTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGZsYWcpIHtcbiAgICAgICAgICAgICAgICBjcC50YWJsZVRvZ2dsZSgkKHRoaXMpLmRhdGEoJ3RvZ2dsZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNwLnRhYmxlVG9nZ2xlKCQodGhpcykuZGF0YSgndG9nZ2xlJyksIGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoJCgnLmpzLXRhYmxlLXRvZ2dsZVtkYXRhLXRvZ2dsZS1pbml0PVwidHJ1ZVwiXScpLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnLmpzLXRhYmxlLXRvZ2dsZVtkYXRhLXRvZ2dsZS1pbml0PVwidHJ1ZVwiXScpLnRyaWdnZXIoJ2NsaWNrJywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoJCgnLmpzLXNsaWRlcicpLmxlbmd0aClcbiAgICB7XG4gICAgICAgICQoJy5qcy1zbGlkZXInKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICB2YXIgdHlwZSA9ICQodGhpcykuZGF0YSgndHlwZScpO1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gJCh0aGlzKS5kYXRhKCd2YWx1ZScpO1xuICAgICAgICAgICAgdmFyIG1pbiA9ICQodGhpcykuZGF0YSgnbWluJyk7XG4gICAgICAgICAgICB2YXIgbWF4ID0gJCh0aGlzKS5kYXRhKCdtYXgnKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc2xpZGVyKGlkLCB0eXBlLCB2YWx1ZSwgbWluLCBtYXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJCgnLmpzLW1hcCcpLmxlbmd0aClcbiAgICB7XG4gICAgICAgICQoJy5qcy1tYXAnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgZWxlbWVudCA9ICQodGhpcykuZGF0YSgnZWxlbWVudCcpO1xuICAgICAgICAgICAgdmFyIHByb3ZpZGVyID0gJCh0aGlzKS5kYXRhKCdwcm92aWRlcicpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYXBDb250ZWluZXIocHJvdmlkZXIsIGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJCgnLmpzLXJlZGFjdG9yJykubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgJCgnLmpzLXJlZGFjdG9yJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ3JlZGFjdG9yJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIF9yZWRhY3Rvci5pbml0KGlkLCB0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy1lZGl0b3InKS5sZW5ndGgpXG4gICAge1xuICAgICAgICAkKCcuanMtZWRpdG9yJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIGlkID0gJCh0aGlzKS5hdHRyKCdpZCcpO1xuICAgICAgICAgICAgdmFyIHR5cGUgPSAkKHRoaXMpLmRhdGEoJ2VkaXRvcicpO1xuICAgICAgICAgICAgdmFyIGhpZ2h0bGlnaHQgPSAkKHRoaXMpLmRhdGEoJ2hpZ2h0bGlnaHQnKTtcblxuICAgICAgICAgICAgX2VkaXRvci5pbml0KGlkLCB0eXBlLCBoaWdodGxpZ2h0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJChcImJvZHlcIikub24oJ2NsaWNrJywgJy5qcy10b2dnbGUtYmluZGluZycsIGZ1bmN0aW9uIChlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgY29uc3QgJHRhcmdldCA9ICQodGhpcyk7XG5cbiAgICAgICAgaWYgKCR0YXJnZXQuZGF0YSgnZWxlbWVudCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgJGlucHV0ID0gJCgkKHRoaXMpLmRhdGEoJ2VsZW1lbnQnKSk7XG4gICAgICAgICAgICAkdGFyZ2V0LnRvZ2dsZUNsYXNzKCdvbicpLnRvZ2dsZUNsYXNzKCdvZmYnKTtcbiAgICAgICAgICAgICRpbnB1dC5wcm9wKCdyZWFkb25seScsICEkdGFyZ2V0Lmhhc0NsYXNzKCdvbicpKTtcbiAgICAgICAgICAgICQoJ2lucHV0W25hbWU9XCInKyRpbnB1dC5kYXRhKCdiaW5kaW5nLW5hbWUnKSsnXCJdJykudHJpZ2dlcignYmx1cicpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAoJCgnLmpzLWJpbmRpbmcnKS5sZW5ndGgpXG4gICAge1xuICAgICAgICAkKCcuanMtYmluZGluZycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnanMtYmluZGluZy1pbml0JykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmluZGluZygkKHRoaXMpLmRhdGEoJ2JpbmRpbmctbmFtZScpLCAkKHRoaXMpLmRhdGEoJ2JpbmRpbmctZWxlbWVudCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy1maWxldXBsb2FkJykubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgJC51cGxvYWQuaW5pdCgpO1xuICAgIH1cblxuICAgICQoJ2JvZHknKS5vbignbW91c2VlbnRlcicsICcuanMtc3RydWN0dXJlLWNvbnRyb2xsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN0cnVjdHVyZV9fY29udHJvbC5hbmltYXRlJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignbW91c2VsZWF2ZScsICcuanMtc3RydWN0dXJlLWNvbnRyb2xsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN0cnVjdHVyZV9fY29udHJvbCcpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5tZW51LXRyaWdnZXInLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcjcGFnZScpLnRvZ2dsZUNsYXNzKCdwYWdlLW9wZW4nKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB2aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgIGlmICghJCgnI3BhZ2UnKS5oYXNDbGFzcygncGFnZS1vcGVuJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI292ZXJsYXknKS5jc3Moe1xuICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiB2aXNpYmlsaXR5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9KTtcblxuICAgICQoJyNtZXRhX2RhdGEnKS5zb3J0YWJsZSh7XG4gICAgICAgIGhhbmRsZTogJy5qcy10cmlnZ2VyLWRyYWcnLFxuICAgICAgICBwdWxsUGxhY2Vob2xkZXI6IGZhbHNlLFxuICAgICAgICBib2R5Q2xhc3M6ICdkcmFnZ2luZycsXG4gICAgICAgIGRyYWdnZWRDbGFzczogJ2RyYWdnZWQnLFxuICAgICAgICBjb250YWluZXJTZWxlY3RvcjogJ3RhYmxlJyxcbiAgICAgICAgaXRlbVBhdGg6ICc+IHRib2R5JyxcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAndHInLFxuICAgICAgICBwbGFjZWhvbGRlcjogJzx0ciBjbGFzcz1cInBsYWNlaG9sZGVyXCIvPicsXG4gICAgICAgIG9uRHJvcDogZnVuY3Rpb24gKCRpdGVtLCBjb250YWluZXIsIF9zdXBlciwgZXZlbnQpIHtcbiAgICAgICAgICAgICRpdGVtLnJlbW92ZUNsYXNzKCdkcmFnZ2VkJykucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoJ2RyYWdnaW5nJylcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy50cmlnZ2VyLW5hdmlnYXRpb24nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyICRpdGVtID0gJCh0aGlzKSwgJHBhZ2UgPSAkKCcjcGFnZScpLCB0aXRsZSA9ICRpdGVtLmF0dHIoJ3JlbCcpLCB0b29sdGlwLCBpZCA9ICd0b29sdGlwLScgKyAkaXRlbS5hdHRyKCdpZCcpO1xuXG4gICAgICAgIGlmICh0aXRsZSAmJiAhJCgnIycraWQpLmxlbmd0aCAmJiAhJHBhZ2UuaGFzQ2xhc3MoJ3BhZ2Utb3BlbicpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcG9zX3RvcCA9ICRpdGVtLm9mZnNldCgpLnRvcCArIDEwO1xuXG4gICAgICAgICAgICB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdG9vbHRpcC5pZCA9IGlkO1xuICAgICAgICAgICAgdG9vbHRpcC5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIHRvb2x0aXAuY2xhc3NOYW1lID0gJ25hdmlnYXRpb25fX3Rvb2x0aXAgbmF2aWdhdGlvbl9fdG9vbHRpcF9hbmltYXRlJztcbiAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gcG9zX3RvcCArICdweCc7XG5cbiAgICAgICAgICAgICRwYWdlLmFwcGVuZCh0b29sdGlwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQodG9vbHRpcCkucmVtb3ZlQ2xhc3MoJ25hdmlnYXRpb25fX3Rvb2x0aXBfYW5pbWF0ZScpO1xuICAgICAgICAgICAgfSwgMzApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgJy50cmlnZ2VyLW5hdmlnYXRpb24nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGlkID0gJ3Rvb2x0aXAtJyArICQodGhpcykuYXR0cignaWQnKTtcblxuICAgICAgICBpZiAoJCgnIycraWQpLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJCgnIycraWQpO1xuXG4gICAgICAgICAgICAkdG9vbHRpcC5hZGRDbGFzcygnbmF2aWdhdGlvbl9fdG9vbHRpcF9hbmltYXRlJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkdG9vbHRpcC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLndyYXBwZXInLCBmdW5jdGlvbihlKXtcbiAgICAgICAgJCgnI3BhZ2UnKS5yZW1vdmVDbGFzcygncGFnZS1vcGVuJyk7XG4gICAgICAgICQoJyNvdmVybGF5JykuY3NzKHtcbiAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ2hpZGRlbidcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXInLCAnLnRyaWdnZXItdG9vbHRpcCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAkKHRoaXMpLmRhdGEoJ3h0aXRsZScsICQodGhpcykucHJvcCgndGl0bGUnKSk7XG4gICAgICAgICQodGhpcykucHJvcCgndGl0bGUnLCAnJyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCAnLnRyaWdnZXItdG9vbHRpcCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAkKHRoaXMpLnByb3AoJ3RpdGxlJywgJCh0aGlzKS5kYXRhKCd4dGl0bGUnKSk7XG4gICAgICAgICQodGhpcykuZGF0YSgneHRpdGxlJywgJycpO1xuICAgIH0pO1xuXG4gICAgJCgnLnRyaWdnZXItcG9wb3ZlcicpLnBvcG92ZXIoKTtcblxuICAgIGlmICgkKCcubmVzdGFibGUtdHJlZScpLmxlbmd0aClcbiAgICB7XG4gICAgICAgIHZhciBzdHJ1Y3R1cmVfdHJlZSA9ICQoJy5uZXN0YWJsZS10cmVlJykuZXEoMCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihzdHJ1Y3R1cmVfdHJlZS5kYXRhKCdwYXRoJykpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Yoc3RydWN0dXJlX3RyZWUuZGF0YSgnZ3JvdXAnKSkgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IHN0cnVjdHVyZV90cmVlLmRhdGEoJ3BhdGgnKSxcbiAgICAgICAgICAgICAgICBncm91cCA9IHBhcnNlSW50KHN0cnVjdHVyZV90cmVlLmRhdGEoJ2dyb3VwJykpO1xuXG4gICAgICAgICAgICBzdHJ1Y3R1cmVfdHJlZS5uZXN0YWJsZSh7XG4gICAgICAgICAgICAgICAgZ3JvdXA6ICBncm91cCxcbiAgICAgICAgICAgICAgICBtYXhEZXB0aDogMjAsXG4gICAgICAgICAgICAgICAgZHJhZ1N0b3A6IGZ1bmN0aW9uKGVsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCwgcGFyZW50LCBuZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBwYXJzZUludChlbFswXS5pZC5zcGxpdCgnLScpWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyc2VJbnQoZWxbMF0ub2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudC5pZC5zcGxpdCgnLScpWzFdKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocGFyZW50KSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbFswXS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBwYXJzZUludChlbFswXS5uZXh0RWxlbWVudFNpYmxpbmcuaWQuc3BsaXQoJy0nKVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHRhcmdldCkgJiYgIWlzTmFOKHBhcmVudCkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLycgKyBBRE1JTl9ESVIgKyAnLycgKyBwYXRoICsgJy91cGRhdGVTdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2lkOiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWQ6IG5leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWZ0ZXJFeHBhbmQ6IGZ1bmN0aW9uKGVsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gZWxbMF0uaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgJC5yZW1vdmVDb29raWUocGF0aCArICdfY29sbGFwc2VfJyArIGlkLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFmdGVyQ29sbGFwc2U6IGZ1bmN0aW9uKGVsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gZWxbMF0uaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgJC5jb29raWUocGF0aCArICdfY29sbGFwc2VfJyArIGlkLCAnMScsIHsgZXhwaXJlczogMzAsIHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgZG9PbkxvYWQoJ3N0cnVjdHVyZScpO1xuICAgIGJ1aWxkVHJlZSgnc3RydWN0dXJlJywgJ2luZGV4Jyk7XG4gXG4gICAgJCgnI25lc3RhYmxlLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKVxuICAgIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxuICAgICAgICAgICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xuICAgICAgICBpZiAoYWN0aW9uID09PSAnZXhwYW5kLWFsbCcpIHtcbiAgICAgICAgICAgICQoJy5kZCcpLm5lc3RhYmxlKCdleHBhbmRBbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uID09PSAnY29sbGFwc2UtYWxsJykge1xuICAgICAgICAgICAgJCgnLmRkJykubmVzdGFibGUoJ2NvbGxhcHNlQWxsJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBsaXN0ID0gdGhpcztcbiAgICBsaXN0LmVsLmZpbmQobGlzdC5vcHRpb25zLml0ZW1Ob2RlTmFtZSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzdC5jb2xsYXBzZUl0ZW0oJCh0aGlzKSk7XG4gICAgfSk7XG5cblxuICAgIGV4cGFuZEl0ZW06IGZ1bmN0aW9uKGxpKVxuICAgIHtcbiAgICAgICAgbGkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmNvbGxhcHNlZENsYXNzKTtcbiAgICAgICAgbGkuY2hpbGRyZW4oJ1tkYXRhLWFjdGlvbj1cImV4cGFuZFwiXScpLmhpZGUoKTtcbiAgICAgICAgbGkuY2hpbGRyZW4oJ1tkYXRhLWFjdGlvbj1cImNvbGxhcHNlXCJdJykuc2hvdygpO1xuICAgICAgICBsaS5jaGlsZHJlbih0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKS5zaG93KCk7XG4gICAgfSxcblxuICAgIGNvbGxhcHNlSXRlbTogZnVuY3Rpb24obGkpXG4gICAge1xuICAgICAgICB2YXIgbGlzdHMgPSBsaS5jaGlsZHJlbih0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKTtcbiAgICAgICAgaWYgKGxpc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmNvbGxhcHNlZENsYXNzKTtcbiAgICAgICAgICAgIGxpLmNoaWxkcmVuKCdbZGF0YS1hY3Rpb249XCJjb2xsYXBzZVwiXScpLmhpZGUoKTtcbiAgICAgICAgICAgIGxpLmNoaWxkcmVuKCdbZGF0YS1hY3Rpb249XCJleHBhbmRcIl0nKS5zaG93KCk7XG4gICAgICAgICAgICBsaS5jaGlsZHJlbih0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdmFyIHVwZGF0ZU91dHB1dCA9IGZ1bmN0aW9uKGUpXG4gICAge1xuICAgICAgICB2YXIgbGlzdCAgID0gZS5sZW5ndGggPyBlIDogJChlLnRhcmdldCksXG4gICAgICAgICAgICBvdXRwdXQgPSBsaXN0LmRhdGEoJ291dHB1dCcpO1xuICAgICAgICBpZiAod2luZG93LkpTT04pIHtcbiAgICAgICAgICAgIG91dHB1dC52YWwod2luZG93LkpTT04uc3RyaW5naWZ5KGxpc3QubmVzdGFibGUoJ3NlcmlhbGl6ZScpKSk7Ly8sIG51bGwsIDIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dHB1dC52YWwoJ0pTT04gYnJvd3NlciBzdXBwb3J0IHJlcXVpcmVkIGZvciB0aGlzIGRlbW8uJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWN0aXZhdGUgTmVzdGFibGUgZm9yIGxpc3QgMVxuICAgICQoJyNuZXN0YWJsZScpLm5lc3RhYmxlKHtcbiAgICAgICAgZ3JvdXA6IDFcbiAgICB9KVxuICAgIC5vbignY2hhbmdlJywgdXBkYXRlT3V0cHV0KTtcblxuICAgIC8vIGFjdGl2YXRlIE5lc3RhYmxlIGZvciBsaXN0IDJcbiAgICAkKCcjbmVzdGFibGUyJykubmVzdGFibGUoe1xuICAgICAgICBncm91cDogMVxuICAgIH0pXG4gICAgLm9uKCdjaGFuZ2UnLCB1cGRhdGVPdXRwdXQpO1xuXG4gICAgLy8gb3V0cHV0IGluaXRpYWwgc2VyaWFsaXNlZCBkYXRhXG4gICAgdXBkYXRlT3V0cHV0KCQoJyNuZXN0YWJsZScpLmRhdGEoJ291dHB1dCcsICQoJyNuZXN0YWJsZS1vdXRwdXQnKSkpO1xuICAgIHVwZGF0ZU91dHB1dCgkKCcjbmVzdGFibGUyJykuZGF0YSgnb3V0cHV0JywgJCgnI25lc3RhYmxlMi1vdXRwdXQnKSkpO1xuXG4gICAgJCgnI25lc3RhYmxlLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKVxuICAgIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxuICAgICAgICAgICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xuICAgICAgICBpZiAoYWN0aW9uID09PSAnZXhwYW5kLWFsbCcpIHtcbiAgICAgICAgICAgICQoJy5kZCcpLm5lc3RhYmxlKCdleHBhbmRBbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uID09PSAnY29sbGFwc2UtYWxsJykge1xuICAgICAgICAgICAgJCgnLmRkJykubmVzdGFibGUoJ2NvbGxhcHNlQWxsJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNuZXN0YWJsZTMnKS5uZXN0YWJsZSgpO1xuICAgICovXG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgc2VsZWN0aXplKCk7XG4gICAgZGF0ZXBpY2tlcigpO1xuICAgIG1ldGFDb3VudGVyKCk7XG4gICAgc2VvQ3Jvd2woKTtcbiAgICBrZXlDb250cm9scygpO1xuICAgIG9uX2xvYWQoKTtcbiAgICBjcC5kcm9wZG93bigpO1xuICAgIGNwLnRhYmxlVG9nZ2xlTGlzdCgpO1xuICAgIGNwLmNsZWRpdG9yKCk7XG59KTsiXX0=
