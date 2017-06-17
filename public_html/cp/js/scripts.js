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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl91cGxvYWQuZmluZXVwbG9hZGVyLmpzIl0sIm5hbWVzIjpbIiQiLCJkb2N1bWVudCIsInJlYWR5IiwidXBsb2FkIiwib3BlbiIsInNlbGVjdG9yIiwiaXNDbGVhckVyciIsImlzUmVzZXRGb3JtIiwiaXNPdmVybGF5IiwiY2xlYXJJbnRlcnZhbCIsInVwbG9hZE9wZW5UaW1lb3V0Iiwic2V0VGltZW91dCIsIl9vcGVuIiwiY2xlYXJFcnJvcnMiLCIkdXBsb2FkIiwiZmluZCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJlbXB0eSIsImhpZGUiLCJyZW1vdmUiLCJpbml0IiwiZm9ybUFjdGlvbiIsIkFETUlOX0RJUiIsImZpbGVzTGltaXQiLCJlYWNoIiwiaW5kZXgiLCJpdGVtIiwiZWxlbWVudCIsIiRhdHRhY2htZW50cyIsImlkIiwiYXR0ciIsImdyb3VwaWQiLCJ2YWwiLCJzZXR0aW5ncyIsImlucHV0X25hbWUiLCJkYXRhIiwidXBsb2FkZXIiLCJxcSIsIkZpbmVVcGxvYWRlciIsImRlYnVnIiwibXVsdGlwbGUiLCJnZXRFbGVtZW50QnlJZCIsInRlbXBsYXRlIiwicmVxdWVzdCIsImFjY2Vzc0tleSIsImVuZHBvaW50IiwiaW5wdXROYW1lIiwiaW5jbHVkZUV4aWYiLCJkZWZhdWx0UXVhbGl0eSIsInBhcmFtcyIsImRlbGV0ZUZpbGUiLCJlbmFibGVkIiwiZm9yY2VDb25maXJtIiwidGh1bWJuYWlscyIsInBsYWNlaG9sZGVycyIsIndhaXRpbmdQYXRoIiwibm90QXZhaWxhYmxlUGF0aCIsInZhbGlkYXRpb24iLCJpdGVtTGltaXQiLCJzaXplTGltaXQiLCJjYWxsYmFja3MiLCJvbkNvbXBsZXRlIiwibmFtZSIsInJlc3BvbnNlIiwic2V0VXVpZCIsImFkZEluaXRpYWxGaWxlcyIsImluaXRpYWxGaWxlcyIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGl0bGUiLCJ0ZXh0IiwiY2xvc2VzdCIsImdldFV1aWQiLCJ1cGRhdGUiLCJNb2R1bGUi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QUtDLE9BQUwsQ0FBYW5DLEVBQWIsRUFBaUJrQyxTQUFTbEMsRUFBMUI7QUFDSDtBQUhNO0FBeENzQixpQkFBcEIsQ0FBakI7O0FBK0NBTyx5QkFBUzZCLGVBQVQsQ0FBeUJDLFlBQXpCOztBQUVBdEMsNkJBQWF1QyxFQUFiLENBQWdCLE9BQWhCLEVBQXlCLDBCQUF6QixFQUFxRCxVQUFTQyxDQUFULEVBQVk7QUFDN0RBLHNCQUFFQyxjQUFGO0FBQ0Esd0JBQU1DLFFBQVF2RSxFQUFFLElBQUYsRUFBUXdFLElBQVIsRUFBZDtBQUNBLHdCQUFNOUMsUUFBUTFCLEVBQUUsSUFBRixFQUFReUUsT0FBUixDQUFnQix5QkFBaEIsRUFBMkMvQyxLQUEzQyxFQUFkO0FBQ0Esd0JBQU1JLEtBQUtPLFNBQVNxQyxPQUFULENBQWlCaEQsS0FBakIsQ0FBWDs7QUFFQSx3QkFBTWlELFNBQVNDLE9BQU9DLGNBQVAsQ0FBc0IvQyxFQUF0QixFQUEwQnlDLEtBQTFCLENBQWY7O0FBRUEsd0JBQUlJLE1BQUosRUFBWTtBQUNSdEMsaUNBQVN5QyxPQUFULENBQWlCcEQsS0FBakIsRUFBd0JpRCxNQUF4QjtBQUNIO0FBQ0osaUJBWEQ7QUFhSCxhQTNFTSxDQTJFSmhELElBM0VJLENBQVA7QUE0RUgsU0E3RUQ7QUE4RUgsS0FsRkQ7QUFtRkgsQ0FyR0QiLCJmaWxlIjoiX3VwbG9hZC5maW5ldXBsb2FkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAkLnVwbG9hZCA9IHtcbiAgICAgICAgb3BlbjogZnVuY3Rpb24oc2VsZWN0b3IsIGlzQ2xlYXJFcnIsIGlzUmVzZXRGb3JtLCBpc092ZXJsYXkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodXBsb2FkT3BlblRpbWVvdXQpO1xuICAgICAgICAgICAgdXBsb2FkT3BlblRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHVwbG9hZC5fb3BlbihzZWxlY3RvciwgaXNDbGVhckVyciwgaXNSZXNldEZvcm0sIGlzT3ZlcmxheSk7XG4gICAgICAgICAgICB9LCAyMDApO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhckVycm9yczogZnVuY3Rpb24oJHVwbG9hZCkge1xuICAgICAgICAgICAgJHVwbG9hZC5maW5kKCcuZXJyb3InKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgICR1cGxvYWQuZmluZCgnLnVwbG9hZF9fZXJyb3JMaXN0JykuYWRkQ2xhc3MoJ2hpZGUnKS5lbXB0eSgpO1xuICAgICAgICAgICAgJHVwbG9hZC5maW5kKCcuaGlkZS1vbi1vcGVuJykuaGlkZSgpO1xuICAgICAgICAgICAgJHVwbG9hZC5maW5kKCcudG9vbHRpcCcpLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQudXBsb2FkLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGZvcm1BY3Rpb24gPSBgLyR7QURNSU5fRElSfS9tZXRhL2ZpbGVVcGxvYWRgO1xuICAgICAgICBsZXQgZmlsZXNMaW1pdCA9IDA7XG5cbiAgICAgICAgJCgnLmpzLWZpbGV1cGxvYWQnKS5lYWNoKChpbmRleCwgaXRlbSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0ICRhdHRhY2htZW50cyA9ICQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSAkYXR0YWNobWVudHMuZmluZCgnLmpzLWZpbGV1cGxvYWQtY29udHJvbCcpLmF0dHIoJ2lkJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBncm91cGlkID0gJGF0dGFjaG1lbnRzLmZpbmQoJy5qcy1maWxldXBsb2FkLWdyb3VwJykudmFsKCk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSAkYXR0YWNobWVudHMuZmluZCgnLmpzLWZpbGV1cGxvYWQtc2V0dGluZ3MnKS52YWwoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dF9uYW1lID0gJGF0dGFjaG1lbnRzLmZpbmQoJy5qcy1maWxldXBsb2FkLWdyb3VwJykuYXR0cignbmFtZScpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCRhdHRhY2htZW50cy5kYXRhKCdhY3Rpb24nKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1BY3Rpb24gPSAkYXR0YWNobWVudHMuZGF0YSgnYWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkZXIgPSBuZXcgcXEuRmluZVVwbG9hZGVyKHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWc6IGZhbHNlLFxuXG4gICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiB0cnVlLFxuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSxcblxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ3VwbG9hZC10ZW1wbGF0ZScsXG5cbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWNjZXNzS2V5OiBcImZpbGVfa2V5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogZm9ybUFjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0TmFtZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZUV4aWY6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFF1YWxpdHk6IDEwMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwaWQ6IGdyb3VwaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHNldHRpbmdzXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlRmlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlQ29uZmlybTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbmRwb2ludDogYC8ke0FETUlOX0RJUn0vbWV0YS9maWxlZGVsZXRlYFxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdhaXRpbmdQYXRoOiBgLyR7QURNSU5fRElSfS9pbWFnZXMvZmluZS11cGxvYWRlci93YWl0aW5nLWdlbmVyaWMucG5nYCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RBdmFpbGFibGVQYXRoOiBgLyR7QURNSU5fRElSfS9pbWFnZXMvZmluZS11cGxvYWRlci9ub3RfYXZhaWxhYmxlLWdlbmVyaWMucG5nYFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFsbG93ZWRFeHRlbnNpb25zOiBbJ2pwZWcnLCAnanBnJywgJ3BuZycsICdnaWYnLCAndHh0J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtTGltaXQ6IGZpbGVzTGltaXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplTGltaXQ6IDIwNDgwMDBcbiAgICAgICAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6IGZ1bmN0aW9uKGlkLCBuYW1lLCByZXNwb25zZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0VXVpZChpZCwgcmVzcG9uc2UuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICB1cGxvYWRlci5hZGRJbml0aWFsRmlsZXMoaW5pdGlhbEZpbGVzKTtcblxuICAgICAgICAgICAgICAgICRhdHRhY2htZW50cy5vbignY2xpY2snLCAnLnFxLXVwbG9hZC1maWxlLXNlbGVjdG9yJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gJCh0aGlzKS50ZXh0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJCh0aGlzKS5jbG9zZXN0KCcuYXR0YWNobWVudHMtbGlzdF9faXRlbScpLmluZGV4KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdXBsb2FkZXIuZ2V0VXVpZChpbmRleCk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlID0gTW9kdWxlLmNoYW5nZUZpbGVOYW1lKGlkLCB0aXRsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBsb2FkZXIuc2V0TmFtZShpbmRleCwgdXBkYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9KShpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pOyJdfQ==

// $(document).ready(function(){

//    $.upload = {
//         open: function(selector, isClearErr, isResetForm, isOverlay)
//         {
//             clearInterval(uploadOpenTimeout);
//             uploadOpenTimeout = setTimeout(function() {
//                 upload._open(selector, isClearErr, isResetForm, isOverlay);
//             }, 200);
//         },
//         clearErrors: function($upload) {
//             $upload.find('.error').removeClass('error');
//             $upload.find('.upload__errorList').addClass('hide').empty();
//             $upload.find('.hide-on-open').hide();
//             $upload.find('.tooltip').remove();
//         }
//     };

//     $.upload.init = function() {
//         var dropzoneTemplate = $('.js-dropzone-template').html();
//         var action = '/' + ADMIN_DIR + '/meta/fileUpload';
//         var token = $('meta[name="csrf-token"]').attr('content');
//         var myDropzone, count = 0, maxFiles, dzid, groupid, settings, input_name;

//         Dropzone.autoDiscover = false;

//         $('.js-fileupload').each(function(i){

//             var element = this;
//             var element = '.js-fileupload';

//             return (function(element) {

//                 var $myDropzone = $(element);

//                 if ($myDropzone.data('action'))
//                 {
//                     action = $myDropzone.data('action');
//                 }

//                 dzid = $myDropzone.attr('id');
//                 count = parseInt($myDropzone.find('.js-fileupload-count').val());
//                 maxFiles = null;

//                 if (count == 0) {
//                     maxFiles = 1;
//                 }

//                 var dropzone = new Dropzone('#' + dzid, {
//                     url: action,
//                     paramName: 'file',
//                     headers: { 'X-CSRF-TOKEN': token },
//                     maxFiles: maxFiles,
//                     clickable: '#' + dzid + '-target',
//                     acceptedFiles: 'image/*',
//                     previewsContainer: '#' + dzid + '-preview',
//                     previewTemplate: dropzoneTemplate,
//                     parallelUploads: 2,

//                     init: function()
//                     {
//                         this.on("success", function(file, response) {
//                             console.log("success");
//                         });
//                     },

//                     maxfilesexceeded: function(file)
//                     {
//                         //this.addFile(file);
//                         //this.removeAllFiles();
//                         cp.notify("Можно загрузить только 1 файл");
//                     },

//                     sending: function(file, xhr, formData)
//                     {
//                         console.log(this.element);

//                         groupid = $(this.element).find('.js-fileupload-group').val();
//                         settings = $(this.element).find('.js-fileupload-settings').val();
//                         input_name = $(this.element).find('.js-fileupload-group').attr('name');

//                         formData.append("name", input_name);
//                         formData.append("groupid", groupid);
//                         formData.append("settings", settings);

//                         //console.log("item", count, dzid, groupid, settings, input_name);
//                     },

//                     thumbnail: function(file, dataUrl)
//                     {
//                         if (file.previewElement)
//                         {
//                             file.previewElement.classList.remove("dz-file-preview");
//                             var images = file.previewElement.querySelectorAll("[data-dz-thumbnail]");
//                             var extension = '';

//                             for (var i = 0; i < images.length; i++)
//                             {
//                                 extension = file.name.split('.');
//                                 extension = extension[extension.length-1];

//                                 console.log(file.name, extension);
//                                 dataUrl = '/' + ADMIN_DIR + '/images/ff/' + extension + '.svg';

//                                 var thumbnailElement = images[i];
//                                 thumbnailElement.alt = file.name;
//                                 thumbnailElement.src = dataUrl;
//                             }

//                             setTimeout(function() { file.previewElement.classList.add("dz-image-preview"); }, 1);
//                         }
//                     },

//                     uploadprogress: function(file, progress, bytesSent)
//                     {
//                         if (progress == 100)
//                         {
//                             $(file.previewElement).find('.dz-progress').fadeOut(300, function(){
//                                 $(this).remove();
//                             });
//                         }
//                     }
//                 });

//             })(this);

//         });
//     };
// });
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl91cGxvYWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoiX3VwbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbi8vICAgICQudXBsb2FkID0ge1xuLy8gICAgICAgICBvcGVuOiBmdW5jdGlvbihzZWxlY3RvciwgaXNDbGVhckVyciwgaXNSZXNldEZvcm0sIGlzT3ZlcmxheSlcbi8vICAgICAgICAge1xuLy8gICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh1cGxvYWRPcGVuVGltZW91dCk7XG4vLyAgICAgICAgICAgICB1cGxvYWRPcGVuVGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4vLyAgICAgICAgICAgICAgICAgdXBsb2FkLl9vcGVuKHNlbGVjdG9yLCBpc0NsZWFyRXJyLCBpc1Jlc2V0Rm9ybSwgaXNPdmVybGF5KTtcbi8vICAgICAgICAgICAgIH0sIDIwMCk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGNsZWFyRXJyb3JzOiBmdW5jdGlvbigkdXBsb2FkKSB7XG4vLyAgICAgICAgICAgICAkdXBsb2FkLmZpbmQoJy5lcnJvcicpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuLy8gICAgICAgICAgICAgJHVwbG9hZC5maW5kKCcudXBsb2FkX19lcnJvckxpc3QnKS5hZGRDbGFzcygnaGlkZScpLmVtcHR5KCk7XG4vLyAgICAgICAgICAgICAkdXBsb2FkLmZpbmQoJy5oaWRlLW9uLW9wZW4nKS5oaWRlKCk7XG4vLyAgICAgICAgICAgICAkdXBsb2FkLmZpbmQoJy50b29sdGlwJykucmVtb3ZlKCk7XG4vLyAgICAgICAgIH1cbi8vICAgICB9O1xuXG4vLyAgICAgJC51cGxvYWQuaW5pdCA9IGZ1bmN0aW9uKCkge1xuLy8gICAgICAgICB2YXIgZHJvcHpvbmVUZW1wbGF0ZSA9ICQoJy5qcy1kcm9wem9uZS10ZW1wbGF0ZScpLmh0bWwoKTtcbi8vICAgICAgICAgdmFyIGFjdGlvbiA9ICcvJyArIEFETUlOX0RJUiArICcvbWV0YS9maWxlVXBsb2FkJztcbi8vICAgICAgICAgdmFyIHRva2VuID0gJCgnbWV0YVtuYW1lPVwiY3NyZi10b2tlblwiXScpLmF0dHIoJ2NvbnRlbnQnKTtcbi8vICAgICAgICAgdmFyIG15RHJvcHpvbmUsIGNvdW50ID0gMCwgbWF4RmlsZXMsIGR6aWQsIGdyb3VwaWQsIHNldHRpbmdzLCBpbnB1dF9uYW1lO1xuXG4vLyAgICAgICAgIERyb3B6b25lLmF1dG9EaXNjb3ZlciA9IGZhbHNlO1xuXG4vLyAgICAgICAgICQoJy5qcy1maWxldXBsb2FkJykuZWFjaChmdW5jdGlvbihpKXtcbiAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGlzO1xuLy8gICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSAnLmpzLWZpbGV1cGxvYWQnO1xuXG4vLyAgICAgICAgICAgICByZXR1cm4gKGZ1bmN0aW9uKGVsZW1lbnQpIHtcblxuLy8gICAgICAgICAgICAgICAgIHZhciAkbXlEcm9wem9uZSA9ICQoZWxlbWVudCk7XG5cbi8vICAgICAgICAgICAgICAgICBpZiAoJG15RHJvcHpvbmUuZGF0YSgnYWN0aW9uJykpXG4vLyAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgICBhY3Rpb24gPSAkbXlEcm9wem9uZS5kYXRhKCdhY3Rpb24nKTtcbi8vICAgICAgICAgICAgICAgICB9XG5cbi8vICAgICAgICAgICAgICAgICBkemlkID0gJG15RHJvcHpvbmUuYXR0cignaWQnKTtcbi8vICAgICAgICAgICAgICAgICBjb3VudCA9IHBhcnNlSW50KCRteURyb3B6b25lLmZpbmQoJy5qcy1maWxldXBsb2FkLWNvdW50JykudmFsKCkpO1xuLy8gICAgICAgICAgICAgICAgIG1heEZpbGVzID0gbnVsbDtcblxuLy8gICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PSAwKSB7XG4vLyAgICAgICAgICAgICAgICAgICAgIG1heEZpbGVzID0gMTtcbi8vICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgdmFyIGRyb3B6b25lID0gbmV3IERyb3B6b25lKCcjJyArIGR6aWQsIHtcbi8vICAgICAgICAgICAgICAgICAgICAgdXJsOiBhY3Rpb24sXG4vLyAgICAgICAgICAgICAgICAgICAgIHBhcmFtTmFtZTogJ2ZpbGUnLFxuLy8gICAgICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdYLUNTUkYtVE9LRU4nOiB0b2tlbiB9LFxuLy8gICAgICAgICAgICAgICAgICAgICBtYXhGaWxlczogbWF4RmlsZXMsXG4vLyAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogJyMnICsgZHppZCArICctdGFyZ2V0Jyxcbi8vICAgICAgICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlczogJ2ltYWdlLyonLFxuLy8gICAgICAgICAgICAgICAgICAgICBwcmV2aWV3c0NvbnRhaW5lcjogJyMnICsgZHppZCArICctcHJldmlldycsXG4vLyAgICAgICAgICAgICAgICAgICAgIHByZXZpZXdUZW1wbGF0ZTogZHJvcHpvbmVUZW1wbGF0ZSxcbi8vICAgICAgICAgICAgICAgICAgICAgcGFyYWxsZWxVcGxvYWRzOiAyLFxuXG4vLyAgICAgICAgICAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uKClcbi8vICAgICAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbihcInN1Y2Nlc3NcIiwgZnVuY3Rpb24oZmlsZSwgcmVzcG9uc2UpIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3NcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgIG1heGZpbGVzZXhjZWVkZWQ6IGZ1bmN0aW9uKGZpbGUpXG4vLyAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhpcy5hZGRGaWxlKGZpbGUpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnJlbW92ZUFsbEZpbGVzKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjcC5ub3RpZnkoXCLQnNC+0LbQvdC+INC30LDQs9GA0YPQt9C40YLRjCDRgtC+0LvRjNC60L4gMSDRhNCw0LnQu1wiKTtcbi8vICAgICAgICAgICAgICAgICAgICAgfSxcblxuLy8gICAgICAgICAgICAgICAgICAgICBzZW5kaW5nOiBmdW5jdGlvbihmaWxlLCB4aHIsIGZvcm1EYXRhKVxuLy8gICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmVsZW1lbnQpO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBncm91cGlkID0gJCh0aGlzLmVsZW1lbnQpLmZpbmQoJy5qcy1maWxldXBsb2FkLWdyb3VwJykudmFsKCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5ncyA9ICQodGhpcy5lbGVtZW50KS5maW5kKCcuanMtZmlsZXVwbG9hZC1zZXR0aW5ncycpLnZhbCgpO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfbmFtZSA9ICQodGhpcy5lbGVtZW50KS5maW5kKCcuanMtZmlsZXVwbG9hZC1ncm91cCcpLmF0dHIoJ25hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKFwibmFtZVwiLCBpbnB1dF9uYW1lKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcImdyb3VwaWRcIiwgZ3JvdXBpZCk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoXCJzZXR0aW5nc1wiLCBzZXR0aW5ncyk7XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJpdGVtXCIsIGNvdW50LCBkemlkLCBncm91cGlkLCBzZXR0aW5ncywgaW5wdXRfbmFtZSk7XG4vLyAgICAgICAgICAgICAgICAgICAgIH0sXG5cbi8vICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsOiBmdW5jdGlvbihmaWxlLCBkYXRhVXJsKVxuLy8gICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZS5wcmV2aWV3RWxlbWVudClcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnByZXZpZXdFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkei1maWxlLXByZXZpZXdcIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltYWdlcyA9IGZpbGUucHJldmlld0VsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWR6LXRodW1ibmFpbF1cIik7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dGVuc2lvbiA9ICcnO1xuXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbnNpb24gPSBmaWxlLm5hbWUuc3BsaXQoJy4nKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0ZW5zaW9uID0gZXh0ZW5zaW9uW2V4dGVuc2lvbi5sZW5ndGgtMV07XG5cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZmlsZS5uYW1lLCBleHRlbnNpb24pO1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhVXJsID0gJy8nICsgQURNSU5fRElSICsgJy9pbWFnZXMvZmYvJyArIGV4dGVuc2lvbiArICcuc3ZnJztcblxuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGh1bWJuYWlsRWxlbWVudCA9IGltYWdlc1tpXTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGh1bWJuYWlsRWxlbWVudC5hbHQgPSBmaWxlLm5hbWU7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRodW1ibmFpbEVsZW1lbnQuc3JjID0gZGF0YVVybDtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHsgZmlsZS5wcmV2aWV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZHotaW1hZ2UtcHJldmlld1wiKTsgfSwgMSk7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB9XG4vLyAgICAgICAgICAgICAgICAgICAgIH0sXG5cbi8vICAgICAgICAgICAgICAgICAgICAgdXBsb2FkcHJvZ3Jlc3M6IGZ1bmN0aW9uKGZpbGUsIHByb2dyZXNzLCBieXRlc1NlbnQpXG4vLyAgICAgICAgICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA9PSAxMDApXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChmaWxlLnByZXZpZXdFbGVtZW50KS5maW5kKCcuZHotcHJvZ3Jlc3MnKS5mYWRlT3V0KDMwMCwgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmUoKTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbi8vICAgICAgICAgICAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgICAgICAgICAgfVxuLy8gICAgICAgICAgICAgICAgIH0pO1xuXG4vLyAgICAgICAgICAgICB9KSh0aGlzKTtcblxuLy8gICAgICAgICB9KTtcbi8vICAgICB9O1xuLy8gfSk7Il19

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnNvbGUuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiY29uc29sZSIsImNvbiIsInByb3AiLCJtZXRob2QiLCJlbXB0eSIsImR1bW15IiwicHJvcGVydGllcyIsInNwbGl0IiwibWV0aG9kcyIsInBvcCIsIndpbmRvdyIsImUiLCJ0IiwibiIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxDQUFDLFVBQVNBLE1BQVQsRUFBaUI7QUFDakI7O0FBQ0FBLFFBQU9DLE9BQVAsR0FBaUJELE9BQU9DLE9BQVAsSUFBa0IsRUFBbkM7QUFDQSxLQUFJQyxNQUFNRixPQUFPQyxPQUFqQjtBQUFBLEtBQ0NFLElBREQ7QUFBQSxLQUNPQyxNQURQO0FBQUEsS0FFQ0MsUUFBUSxFQUZUO0FBQUEsS0FHQ0MsUUFBUSxTQUFSQSxLQUFRLEdBQVcsQ0FBRSxDQUh0QjtBQUFBLEtBSUNDLGFBQWEsU0FBU0MsS0FBVCxDQUFlLEdBQWYsQ0FKZDtBQUFBLEtBS0NDLFVBQVcsdU1BQUQsQ0FBME1ELEtBQTFNLENBQWdOLEdBQWhOLENBTFg7QUFNQSxRQUFPTCxPQUFPSSxXQUFXRyxHQUFYLEVBQWQ7QUFBZ0MsTUFBSSxDQUFDUixJQUFJQyxJQUFKLENBQUwsRUFBZ0JELElBQUlDLElBQUosSUFBWUUsS0FBWjtBQUFoRCxFQUNBLE9BQU9ELFNBQVNLLFFBQVFDLEdBQVIsRUFBaEI7QUFBK0IsTUFBSSxDQUFDUixJQUFJRSxNQUFKLENBQUwsRUFBa0JGLElBQUlFLE1BQUosSUFBY0UsS0FBZDtBQUFqRDtBQUNBLENBWEQsRUFXRyxPQUFPSyxNQUFQLEtBQWtCLFdBQWxCLGVBQXVDQSxNQVgxQzs7QUFhQSxDQUFDLFlBQVc7QUFDUixVQUFTQyxDQUFULENBQVdBLENBQVgsRUFBY0MsQ0FBZCxFQUFpQjtBQUNiLE1BQUlDLElBQUksa0ZBQWtGRixJQUFJLG9CQUFKLEdBQTJCLEVBQTdHLElBQW1ILFNBQW5ILEdBQStIQyxDQUEvSCxHQUFtSSxHQUEzSTtBQUNBLFNBQU9DLENBQVA7QUFDSDs7QUFFSixLQUFJQyxVQUFVQyxTQUFWLENBQW9CQyxXQUFwQixHQUFrQ0MsT0FBbEMsQ0FBMEMsUUFBMUMsSUFBc0QsQ0FBQyxDQUEzRCxFQUE4RDtBQUM3RGpCLFVBQVFrQixHQUFSLENBQVksd0RBQVosRUFBc0VQLEVBQUUsQ0FBQyxDQUFILEVBQU0sTUFBTixDQUF0RSxFQUFxRkEsRUFBRSxDQUFDLENBQUgsRUFBTSxTQUFOLENBQXJGLEVBQXVHQSxFQUFFLENBQUMsQ0FBSCxFQUFNLE1BQU4sQ0FBdkcsRUFBc0hBLEVBQUUsQ0FBQyxDQUFILEVBQU0sU0FBTixDQUF0SCxFQUF3SUEsRUFBRSxDQUFDLENBQUgsRUFBTSxTQUFOLENBQXhJLEVBQTBKQSxFQUFFLENBQUMsQ0FBSCxFQUFNLE1BQU4sQ0FBMUo7QUFDQSxFQUZELE1BR0s7QUFDSlgsVUFBUWtCLEdBQVIsQ0FBWSxtQ0FBWjtBQUNBO0FBQ0QsQ0FaQSxFQUFEIiwiZmlsZSI6ImNvbnNvbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oZ2xvYmFsKSB7XG5cdCd1c2Ugc3RyaWN0Jztcblx0Z2xvYmFsLmNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSB8fCB7fTtcblx0dmFyIGNvbiA9IGdsb2JhbC5jb25zb2xlLFxuXHRcdHByb3AsIG1ldGhvZCxcblx0XHRlbXB0eSA9IHt9LFxuXHRcdGR1bW15ID0gZnVuY3Rpb24oKSB7fSxcblx0XHRwcm9wZXJ0aWVzID0gJ21lbW9yeScuc3BsaXQoJywnKSxcblx0XHRtZXRob2RzID0gKCdhc3NlcnQsY2xlYXIsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sZ3JvdXAsZ3JvdXBDb2xsYXBzZWQsZ3JvdXBFbmQsaW5mbyxsb2csbWFya1RpbWVsaW5lLHByb2ZpbGUscHJvZmlsZXMscHJvZmlsZUVuZCxzaG93LHRhYmxlLHRpbWUsdGltZUVuZCx0aW1lbGluZSx0aW1lbGluZUVuZCx0aW1lU3RhbXAsdHJhY2Usd2FybicpLnNwbGl0KCcsJyk7XG5cdHdoaWxlIChwcm9wID0gcHJvcGVydGllcy5wb3AoKSkgaWYgKCFjb25bcHJvcF0pIGNvbltwcm9wXSA9IGVtcHR5O1xuXHR3aGlsZSAobWV0aG9kID0gbWV0aG9kcy5wb3AoKSkgaWYgKCFjb25bbWV0aG9kXSkgY29uW21ldGhvZF0gPSBkdW1teTtcbn0pKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gdGhpcyA6IHdpbmRvdyk7XG5cbiFmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBlKGUsIHQpIHtcbiAgICAgICAgdmFyIG4gPSAnZm9udC1mYW1pbHk6IFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtmb250LXNpemU6IDE0cHg7JyArIChlID8gXCJmb250LXdlaWdodDogYm9sZDtcIiA6IFwiXCIpICsgXCJjb2xvcjogXCIgKyB0ICsgXCI7XCI7XG4gICAgICAgIHJldHVybiBuXG4gICAgfVxuXHRcblx0aWYgKG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKFwiY2hyb21lXCIpID4gLTEpIHtcblx0XHRjb25zb2xlLmxvZyhcIiVj4pmlICVj4pywICVjQ0VMRUJSTy5DTVMgJWPinLAgJWMgaHR0cDovL2Ntcy5jZWxlYnJvLnJ1ICVj4pmlXCIsIGUoITAsIFwiI2YwMFwiKSwgZSghMCwgXCIjYWY1NWUyXCIpLCBlKCEwLCBcIiM3NzdcIiksIGUoITAsIFwiI2FmNTVlMlwiKSwgZSghMCwgXCIjNTU3ZGUyXCIpLCBlKCEwLCBcIiNmMDBcIikpO1xuXHR9XG5cdGVsc2Uge1xuXHRcdGNvbnNvbGUubG9nKCdjZWxlYnJvLmNtcyBodHRwOi8vY21zLmNlbGVicm8ucnUnKVxuXHR9XG59KCk7Il19

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaXQuanMiXSwibmFtZXMiOlsiZCIsImRvY3VtZW50Iiwia2V5Q29udHJvbHMiLCJjbGlwYm9hcmQiLCJDbGlwYm9hcmQiLCJ0ZXh0IiwidHJpZ2dlciIsIiQiLCJhZGRDbGFzcyIsInNldFRpbWVvdXQiLCJyZW1vdmVDbGFzcyIsImdldEF0dHJpYnV0ZSIsIm9uIiwiZSIsInByZXZlbnREZWZhdWx0IiwicmV0dXJuVmFsdWUiLCJfc2VsZl8iLCJocmVmIiwiYXR0ciIsInBvc3QiLCJjcCIsIm5vdGlmeSIsImxlbmd0aCIsInJlbW92ZSIsImNsb3Nlc3QiLCIkd3JhcCIsIml0ZXJhdGlvbiIsInBhcnNlSW50IiwiZGF0YSIsInRwbCIsImFwcGVuZCIsInRlbXBsYXRlIiwid2hpY2giLCJyZWR1Y2luZyIsImZvcm1hdCIsInZhbHVlIiwidmFsIiwicmVzdWx0IiwicmVwbGFjZSIsInJlZ2V4IiwidGVzdCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImtleUNvZGUiLCJpbmRleE9mIiwiZmlsZU1hbmFnZXIiLCJvbl9sb2FkIiwibWFzayIsIiR0YWJsZSIsImZpbmQiLCJpbmRleCIsImVhY2giLCJidXR0b24iLCJmbGFnIiwidGFibGVUb2dnbGUiLCJpZCIsInR5cGUiLCJtaW4iLCJtYXgiLCJzbGlkZXIiLCJlbGVtZW50IiwicHJvdmlkZXIiLCJtYXBDb250ZWluZXIiLCJfcmVkYWN0b3IiLCJpbml0IiwiaGlnaHRsaWdodCIsIl9lZGl0b3IiLCJoYXNDbGFzcyIsImJpbmRpbmciLCJ1cGxvYWQiLCJ0b2dnbGVDbGFzcyIsInZpc2liaWxpdHkiLCJjc3MiLCJzb3J0YWJsZSIsImhhbmRsZSIsInB1bGxQbGFjZWhvbGRlciIsImJvZHlDbGFzcyIsImRyYWdnZWRDbGFzcyIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbVBhdGgiLCJpdGVtU2VsZWN0b3IiLCJwbGFjZWhvbGRlciIsIm9uRHJvcCIsIiRpdGVtIiwiY29udGFpbmVyIiwiX3N1cGVyIiwiZXZlbnQiLCJyZW1vdmVBdHRyIiwiJHBhZ2UiLCJ0aXRsZSIsInRvb2x0aXAiLCJwb3NfdG9wIiwib2Zmc2V0IiwidG9wIiwiY3JlYXRlRWxlbWVudCIsImlubmVySFRNTCIsImNsYXNzTmFtZSIsInN0eWxlIiwiJHRvb2x0aXAiLCJwcm9wIiwicG9wb3ZlciIsInN0cnVjdHVyZV90cmVlIiwiZXEiLCJwYXRoIiwiZ3JvdXAiLCJuZXN0YWJsZSIsIm1heERlcHRoIiwiZHJhZ1N0b3AiLCJlbCIsInRhcmdldCIsInBhcmVudCIsIm5leHQiLCJzcGxpdCIsIm9mZnNldFBhcmVudCIsImlzTmFOIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWpheCIsInVybCIsIkFETUlOX0RJUiIsIm9pZCIsInBpZCIsIm5pZCIsImFmdGVyRXhwYW5kIiwicmVtb3ZlQ29va2llIiwiYWZ0ZXJDb2xsYXBzZSIsImNvb2tpZSIsImV4cGlyZXMiLCJyZWFkeSIsInNlbGVjdGl6ZSIsImRhdGVwaWNrZXIiLCJtZXRhQ291bnRlciIsInNlb0Nyb3dsIiwiZHJvcGRvd24iLCJ0YWJsZVRvZ2dsZUxpc3QiLCJjbGVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxJQUFJQyxRQUFSOztBQUVBLFNBQVNDLFdBQVQsR0FDQTtBQUNJLFFBQUlDLFlBQVksSUFBSUMsU0FBSixDQUFjLGNBQWQsRUFBOEI7QUFDMUNDLGNBQU0sY0FBU0MsT0FBVCxFQUFrQjtBQUNwQkMsY0FBRUQsT0FBRixFQUFXRSxRQUFYLENBQW9CLFFBQXBCOztBQUVBQyx1QkFBVyxZQUFVO0FBQ2pCRixrQkFBRUQsT0FBRixFQUFXSSxXQUFYLENBQXVCLFFBQXZCO0FBQ0gsYUFGRCxFQUVHLEdBRkg7O0FBSUEsbUJBQU9KLFFBQVFLLFlBQVIsQ0FBcUIsZ0JBQXJCLENBQVA7QUFDSDtBQVR5QyxLQUE5QixDQUFoQjs7QUFZQUosTUFBRSxNQUFGLEVBQVVLLEVBQVYsQ0FBYSxPQUFiLEVBQXNCLGlCQUF0QixFQUF5QyxVQUFVQyxDQUFWLEVBQVk7QUFDakRBLFVB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YUFBeEI7QUE2Q0g7QUFDSjs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrRkg7O0FBRURoRyxFQUFFTixRQUFGLEVBQVk4SCxLQUFaLENBQWtCLFlBQVU7QUFDeEJDO0FBQ0FDO0FBQ0FDO0FBQ0FDO0FBQ0FqSTtBQUNBNEM7QUFDQTFCLE9BQUdnSCxRQUFIO0FBQ0FoSCxPQUFHaUgsZUFBSDtBQUNBakgsT0FBR2tILFFBQUg7QUFDSCxDQVZEIiwiZmlsZSI6ImluaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZCA9IGRvY3VtZW50O1xuXG5mdW5jdGlvbiBrZXlDb250cm9scygpXG57XG4gICAgdmFyIGNsaXBib2FyZCA9IG5ldyBDbGlwYm9hcmQoJy5qLWNsaXBib2FyZCcsIHtcbiAgICAgICAgdGV4dDogZnVuY3Rpb24odHJpZ2dlcikge1xuICAgICAgICAgICAgJCh0cmlnZ2VyKS5hZGRDbGFzcygnY29waWVkJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkKHRyaWdnZXIpLnJlbW92ZUNsYXNzKFwiY29waWVkXCIpO1xuICAgICAgICAgICAgfSwgNzAwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHRyaWdnZXIuZ2V0QXR0cmlidXRlKCdkYXRhLWNsaXBib2FyZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiYm9keVwiKS5vbignY2xpY2snLCAnLnJlbW92ZS10cmlnZ2VyJywgZnVuY3Rpb24gKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBfc2VsZl8gPSB0aGlzLCBocmVmID0gJChfc2VsZl8pLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgICAkLnBvc3QoaHJlZiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNwLm5vdGlmeSgn0KPQtNCw0LvQtdC90L4nLCAnaW5mbycpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mKCQoX3NlbGZfKS5hdHRyKCdyZWwnKSkgIT09ICd1bmRlZmluZWQnICYmICQoJChfc2VsZl8pLmF0dHIoJ3JlbCcpKS5sZW5ndGggPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoJChfc2VsZl8pLmF0dHIoJ3JlbCcpKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICQoX3NlbGZfKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gITE7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qcy1yZW1vdmUtaXRlbScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQgPyBlLnByZXZlbnREZWZhdWx0KCkgOiBlLnJldHVyblZhbHVlID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIF9zZWxmXyA9IHRoaXMsIGhyZWYgPSAkKF9zZWxmXykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICQucG9zdChocmVmLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY3Aubm90aWZ5KCfQo9C00LDQu9C10L3QvicsICdpbmZvJyk7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YoJChfc2VsZl8pLmF0dHIoJ3JlbCcpKSAhPT0gJ3VuZGVmaW5lZCcgJiYgJCgkKF9zZWxmXykuYXR0cigncmVsJykpLmxlbmd0aCA+IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgJCgkKF9zZWxmXykuYXR0cigncmVsJykpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgJChfc2VsZl8pLmNsb3Nlc3QoJ3RyJykucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9KTtcbiAgICBcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5qcy1hZGQtdGVtcGxhdGUnLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB2YXIgJHdyYXAgPSAkKHRoaXMpLmNsb3Nlc3QoJy5qcy10ZW1wbGF0ZS13cmFwcGVyJyksXG4gICAgICAgICAgICBpdGVyYXRpb24gPSBwYXJzZUludCgkKHRoaXMpLmRhdGEoJ2l0ZXJhdGlvbicpKSxcbiAgICAgICAgICAgIHRwbCA9ICQodGhpcykuZGF0YSgndGVtcGxhdGUnKSxcbiAgICAgICAgICAgIGRhdGEgPSB7fTtcblxuICAgICAgICBpZiAodHlwZW9mIGl0ZXJhdGlvbiAhPT0gJ3VuZGVmaW5lZCcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGRhdGFbJ2lkJ10gPSBpdGVyYXRpb247XG4gICAgICAgICAgICBpdGVyYXRpb24gKz0gLTE7XG4gICAgICAgICAgICAkKHRoaXMpLmRhdGEoJ2l0ZXJhdGlvbicsIGl0ZXJhdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICR3cmFwLmFwcGVuZCh0ZW1wbGF0ZSh0cGwsIGRhdGEpKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbigna2V5ZG93bicsICcucmVkdWNpbmctdHJpZ2dlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChlLndoaWNoID09IDM4IHx8IGUud2hpY2ggPT0gNDApIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIHJlZHVjaW5nID0gJCh0aGlzKS5kYXRhKCdyZWR1Y2luZycpIHx8IDEwLFxuICAgICAgICAgICAgICAgIGZvcm1hdCA9ICQodGhpcykuZGF0YSgnZm9ybWF0JyksXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJzZUludCgkKHRoaXMpLnZhbCgpKSB8fCAwLCByZXN1bHQgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZS53aGljaCA9PSAzOClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZSArIHJlZHVjaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZS53aGljaCA9PSA0MClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB2YWx1ZSAtIHJlZHVjaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVzdWx0IDwgMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mKGZvcm1hdCkgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9ICc/aSUnLnJlcGxhY2UoJz9pJywgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCh0aGlzKS52YWwocmVzdWx0KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgICQoJ2JvZHknKS5vbigna2V5cHJlc3MnLCAnLmxhdGluJywgZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgcmVnZXggPSAvW15BLVphLXpdL2c7XG4gICAgICAgIGlmIChyZWdleC50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKSkpIHtcbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgICQoXCJib2R5XCIpLm9uKCdrZXlwcmVzcycsICcuaW50ZWdlcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChbMCwgOCwgMTMsIDM4LCA0MF0uaW5kZXhPZiggZS53aGljaCApIDwgMCAmJiAoZS53aGljaCA8IDQ4IHx8IGUud2hpY2ggPiA1NykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcImJvZHlcIikub24oJ2tleXByZXNzJywgJy5mbG9hdCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICggWzAsIDgsIDEzLCAzOCwgNDAsIDQ0LCA0Nl0uaW5kZXhPZiggZS53aGljaCApIDwgMCAmJiAoIGUud2hpY2ggPCA0OCB8fCBlLndoaWNoID4gNTcgKSApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAhMTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBmaWxlTWFuYWdlcigpXG57XG4gICAgXG59XG5cbmZ1bmN0aW9uIG9uX2xvYWQoKVxue1xuICAgIGZpbGVNYW5hZ2VyKCk7XG5cbiAgICAkKFwiLndhdGNoLWRhdGVtYXNrXCIpLm1hc2soXCI5OS85OS85OTk5XCIpO1xuICAgICQoXCIud2F0Y2gtcGhvbmVtYXNrXCIpLm1hc2soXCIrIDcgKDk5OSkgOTk5LTk5LTk5XCIpO1xuICAgICQoXCIud2F0Y2gtY2FydG51bWJlclwiKS5tYXNrKFwiOTk5LTk5OS05OTlcIik7XG4gICAgXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuanMtc2l6ZS1kZWxldGUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSAhMTtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCd0cicpLnJlbW92ZSgpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuanMtYWRkLXNpemUnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCA/IGUucHJldmVudERlZmF1bHQoKSA6IGUucmV0dXJuVmFsdWUgPSAhMTtcblxuICAgICAgICB2YXIgJHRhYmxlID0gJCh0aGlzKS5jbG9zZXN0KCcuanMtc2l6ZS1saXN0JykuZmluZCgndGFibGUnKS5maW5kKCd0Ym9keScpLFxuICAgICAgICAgICAgaXRlcmF0aW9uID0gcGFyc2VJbnQoJCh0aGlzKS5kYXRhKCdpdGVyYXRpb24nKSksXG4gICAgICAgICAgICBpbmRleCA9IDA7XG5cbiAgICAgICAgJHRhYmxlLmZpbmQoJ3RyJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICAgICAgaWYgKHBhcnNlSW50KCQodGhpcykuZGF0YSgnaW5kZXgnKSkgPiBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHBhcnNlSW50KCQodGhpcykuZGF0YSgnaW5kZXgnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGluZGV4ICsrO1xuXG4gICAgICAgICR0YWJsZS5hcHBlbmQoXG4gICAgICAgICAgICB0ZW1wbGF0ZSgndHBsX2ltYWdlX3JvdycsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGl0ZXJhdGlvbjogaXRlcmF0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICApO1xuICAgIH0pO1xuXG4gICAgaWYgKCQoJy5qcy10YWJsZS10b2dnbGUnKS5sZW5ndGgpXG4gICAge1xuICAgICAgICAkKCcuanMtdGFibGUtdG9nZ2xlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSwgZmxhZyl7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0ID8gZS5wcmV2ZW50RGVmYXVsdCgpIDogZS5yZXR1cm5WYWx1ZSA9ICExO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoZmxhZykge1xuICAgICAgICAgICAgICAgIGNwLnRhYmxlVG9nZ2xlKCQodGhpcykuZGF0YSgndG9nZ2xlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY3AudGFibGVUb2dnbGUoJCh0aGlzKS5kYXRhKCd0b2dnbGUnKSwgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmICgkKCcuanMtdGFibGUtdG9nZ2xlW2RhdGEtdG9nZ2xlLWluaXQ9XCJ0cnVlXCJdJykubGVuZ3RoKVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCcuanMtdGFibGUtdG9nZ2xlW2RhdGEtdG9nZ2xlLWluaXQ9XCJ0cnVlXCJdJykudHJpZ2dlcignY2xpY2snLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICgkKCcuanMtc2xpZGVyJykubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgJCgnLmpzLXNsaWRlcicpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBpZCA9ICQodGhpcykuYXR0cignaWQnKTtcbiAgICAgICAgICAgIHZhciB0eXBlID0gJCh0aGlzKS5kYXRhKCd0eXBlJyk7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XG4gICAgICAgICAgICB2YXIgbWluID0gJCh0aGlzKS5kYXRhKCdtaW4nKTtcbiAgICAgICAgICAgIHZhciBtYXggPSAkKHRoaXMpLmRhdGEoJ21heCcpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzbGlkZXIoaWQsIHR5cGUsIHZhbHVlLCBtaW4sIG1heCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkKCcuanMtbWFwJykubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgJCgnLmpzLW1hcCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBlbGVtZW50ID0gJCh0aGlzKS5kYXRhKCdlbGVtZW50Jyk7XG4gICAgICAgICAgICB2YXIgcHJvdmlkZXIgPSAkKHRoaXMpLmRhdGEoJ3Byb3ZpZGVyJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcENvbnRlaW5lcihwcm92aWRlciwgZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICgkKCcuanMtcmVkYWN0b3InKS5sZW5ndGgpXG4gICAge1xuICAgICAgICAkKCcuanMtcmVkYWN0b3InKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICB2YXIgdHlwZSA9ICQodGhpcykuZGF0YSgncmVkYWN0b3InKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgX3JlZGFjdG9yLmluaXQoaWQsIHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJCgnLmpzLWVkaXRvcicpLmxlbmd0aClcbiAgICB7XG4gICAgICAgICQoJy5qcy1lZGl0b3InKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgaWQgPSAkKHRoaXMpLmF0dHIoJ2lkJyk7XG4gICAgICAgICAgICB2YXIgdHlwZSA9ICQodGhpcykuZGF0YSgnZWRpdG9yJyk7XG4gICAgICAgICAgICB2YXIgaGlnaHRsaWdodCA9ICQodGhpcykuZGF0YSgnaGlnaHRsaWdodCcpO1xuXG4gICAgICAgICAgICBfZWRpdG9yLmluaXQoaWQsIHR5cGUsIGhpZ2h0bGlnaHQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoJCgnLmpzLWJpbmRpbmcnKS5sZW5ndGgpXG4gICAge1xuICAgICAgICAkKCcuanMtYmluZGluZycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnanMtYmluZGluZy1pbml0JykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmluZGluZygkKHRoaXMpLmRhdGEoJ2JpbmRpbmctbmFtZScpLCAkKHRoaXMpLmRhdGEoJ2JpbmRpbmctZWxlbWVudCcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCQoJy5qcy1maWxldXBsb2FkJykubGVuZ3RoKVxuICAgIHtcbiAgICAgICAgJC51cGxvYWQuaW5pdCgpO1xuICAgIH1cblxuICAgICQoJ2JvZHknKS5vbignbW91c2VlbnRlcicsICcuanMtc3RydWN0dXJlLWNvbnRyb2xsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN0cnVjdHVyZV9fY29udHJvbC5hbmltYXRlJykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignbW91c2VsZWF2ZScsICcuanMtc3RydWN0dXJlLWNvbnRyb2xsJywgZnVuY3Rpb24oZSl7XG4gICAgICAgICQodGhpcykuZmluZCgnLnN0cnVjdHVyZV9fY29udHJvbCcpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5tZW51LXRyaWdnZXInLCBmdW5jdGlvbihlKXtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcjcGFnZScpLnRvZ2dsZUNsYXNzKCdwYWdlLW9wZW4nKTtcbiAgICAgICAgXG4gICAgICAgIHZhciB2aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuXG4gICAgICAgIGlmICghJCgnI3BhZ2UnKS5oYXNDbGFzcygncGFnZS1vcGVuJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZpc2liaWxpdHkgPSAnaGlkZGVuJ1xuICAgICAgICB9XG5cbiAgICAgICAgJCgnI292ZXJsYXknKS5jc3Moe1xuICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiB2aXNpYmlsaXR5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiAhMTtcbiAgICB9KTtcblxuICAgICQoJyNtZXRhX2RhdGEnKS5zb3J0YWJsZSh7XG4gICAgICAgIGhhbmRsZTogJy5qcy10cmlnZ2VyLWRyYWcnLFxuICAgICAgICBwdWxsUGxhY2Vob2xkZXI6IGZhbHNlLFxuICAgICAgICBib2R5Q2xhc3M6ICdkcmFnZ2luZycsXG4gICAgICAgIGRyYWdnZWRDbGFzczogJ2RyYWdnZWQnLFxuICAgICAgICBjb250YWluZXJTZWxlY3RvcjogJ3RhYmxlJyxcbiAgICAgICAgaXRlbVBhdGg6ICc+IHRib2R5JyxcbiAgICAgICAgaXRlbVNlbGVjdG9yOiAndHInLFxuICAgICAgICBwbGFjZWhvbGRlcjogJzx0ciBjbGFzcz1cInBsYWNlaG9sZGVyXCIvPicsXG4gICAgICAgIG9uRHJvcDogZnVuY3Rpb24gKCRpdGVtLCBjb250YWluZXIsIF9zdXBlciwgZXZlbnQpIHtcbiAgICAgICAgICAgICRpdGVtLnJlbW92ZUNsYXNzKCdkcmFnZ2VkJykucmVtb3ZlQXR0cihcInN0eWxlXCIpO1xuICAgICAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoJ2RyYWdnaW5nJylcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdtb3VzZWVudGVyJywgJy50cmlnZ2VyLW5hdmlnYXRpb24nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyICRpdGVtID0gJCh0aGlzKSwgJHBhZ2UgPSAkKCcjcGFnZScpLCB0aXRsZSA9ICRpdGVtLmF0dHIoJ3JlbCcpLCB0b29sdGlwLCBpZCA9ICd0b29sdGlwLScgKyAkaXRlbS5hdHRyKCdpZCcpO1xuXG4gICAgICAgIGlmICh0aXRsZSAmJiAhJCgnIycraWQpLmxlbmd0aCAmJiAhJHBhZ2UuaGFzQ2xhc3MoJ3BhZ2Utb3BlbicpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcG9zX3RvcCA9ICRpdGVtLm9mZnNldCgpLnRvcCArIDEwO1xuXG4gICAgICAgICAgICB0b29sdGlwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgdG9vbHRpcC5pZCA9IGlkO1xuICAgICAgICAgICAgdG9vbHRpcC5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICAgICAgICAgIHRvb2x0aXAuY2xhc3NOYW1lID0gJ25hdmlnYXRpb25fX3Rvb2x0aXAgbmF2aWdhdGlvbl9fdG9vbHRpcF9hbmltYXRlJztcbiAgICAgICAgICAgIHRvb2x0aXAuc3R5bGUudG9wID0gcG9zX3RvcCArICdweCc7XG5cbiAgICAgICAgICAgICRwYWdlLmFwcGVuZCh0b29sdGlwKTtcblxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICQodG9vbHRpcCkucmVtb3ZlQ2xhc3MoJ25hdmlnYXRpb25fX3Rvb2x0aXBfYW5pbWF0ZScpO1xuICAgICAgICAgICAgfSwgMzApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgXG4gICAgJCgnYm9keScpLm9uKCdtb3VzZWxlYXZlJywgJy50cmlnZ2VyLW5hdmlnYXRpb24nLCBmdW5jdGlvbihlKXtcbiAgICAgICAgdmFyIGlkID0gJ3Rvb2x0aXAtJyArICQodGhpcykuYXR0cignaWQnKTtcblxuICAgICAgICBpZiAoJCgnIycraWQpLmxlbmd0aClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyICR0b29sdGlwID0gJCgnIycraWQpO1xuXG4gICAgICAgICAgICAkdG9vbHRpcC5hZGRDbGFzcygnbmF2aWdhdGlvbl9fdG9vbHRpcF9hbmltYXRlJyk7XG5cbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAkdG9vbHRpcC5yZW1vdmUoKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLndyYXBwZXInLCBmdW5jdGlvbihlKXtcbiAgICAgICAgJCgnI3BhZ2UnKS5yZW1vdmVDbGFzcygncGFnZS1vcGVuJyk7XG4gICAgICAgICQoJyNvdmVybGF5JykuY3NzKHtcbiAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ2hpZGRlbidcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ21vdXNlZW50ZXInLCAnLnRyaWdnZXItdG9vbHRpcCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAkKHRoaXMpLmRhdGEoJ3h0aXRsZScsICQodGhpcykucHJvcCgndGl0bGUnKSk7XG4gICAgICAgICQodGhpcykucHJvcCgndGl0bGUnLCAnJyk7XG4gICAgfSk7XG5cbiAgICAkKCdib2R5Jykub24oJ21vdXNlbGVhdmUnLCAnLnRyaWdnZXItdG9vbHRpcCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAkKHRoaXMpLnByb3AoJ3RpdGxlJywgJCh0aGlzKS5kYXRhKCd4dGl0bGUnKSk7XG4gICAgICAgICQodGhpcykuZGF0YSgneHRpdGxlJywgJycpO1xuICAgIH0pO1xuXG4gICAgJCgnLnRyaWdnZXItcG9wb3ZlcicpLnBvcG92ZXIoKTtcblxuICAgIGlmICgkKCcubmVzdGFibGUtdHJlZScpLmxlbmd0aClcbiAgICB7XG4gICAgICAgIHZhciBzdHJ1Y3R1cmVfdHJlZSA9ICQoJy5uZXN0YWJsZS10cmVlJykuZXEoMCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZihzdHJ1Y3R1cmVfdHJlZS5kYXRhKCdwYXRoJykpICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2Yoc3RydWN0dXJlX3RyZWUuZGF0YSgnZ3JvdXAnKSkgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgcGF0aCA9IHN0cnVjdHVyZV90cmVlLmRhdGEoJ3BhdGgnKSxcbiAgICAgICAgICAgICAgICBncm91cCA9IHBhcnNlSW50KHN0cnVjdHVyZV90cmVlLmRhdGEoJ2dyb3VwJykpO1xuXG4gICAgICAgICAgICBzdHJ1Y3R1cmVfdHJlZS5uZXN0YWJsZSh7XG4gICAgICAgICAgICAgICAgZ3JvdXA6ICBncm91cCxcbiAgICAgICAgICAgICAgICBtYXhEZXB0aDogMjAsXG4gICAgICAgICAgICAgICAgZHJhZ1N0b3A6IGZ1bmN0aW9uKGVsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCwgcGFyZW50LCBuZXh0O1xuXG4gICAgICAgICAgICAgICAgICAgIG5leHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBwYXJzZUludChlbFswXS5pZC5zcGxpdCgnLScpWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gcGFyc2VJbnQoZWxbMF0ub2Zmc2V0UGFyZW50Lm9mZnNldFBhcmVudC5pZC5zcGxpdCgnLScpWzFdKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOYU4ocGFyZW50KSlcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gZ3JvdXA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbFswXS5uZXh0RWxlbWVudFNpYmxpbmcgIT09IG51bGwpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSBwYXJzZUludChlbFswXS5uZXh0RWxlbWVudFNpYmxpbmcuaWQuc3BsaXQoJy0nKVsxXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKHRhcmdldCkgJiYgIWlzTmFOKHBhcmVudCkpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnLycgKyBBRE1JTl9ESVIgKyAnLycgKyBwYXRoICsgJy91cGRhdGVTdHJ1Y3R1cmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2lkOiB0YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBpZDogcGFyZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuaWQ6IG5leHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYWZ0ZXJFeHBhbmQ6IGZ1bmN0aW9uKGVsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gZWxbMF0uaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgJC5yZW1vdmVDb29raWUocGF0aCArICdfY29sbGFwc2VfJyArIGlkLCB7IHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFmdGVyQ29sbGFwc2U6IGZ1bmN0aW9uKGVsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlkID0gZWxbMF0uaWQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgJC5jb29raWUocGF0aCArICdfY29sbGFwc2VfJyArIGlkLCAnMScsIHsgZXhwaXJlczogMzAsIHBhdGg6ICcvJyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgZG9PbkxvYWQoJ3N0cnVjdHVyZScpO1xuICAgIGJ1aWxkVHJlZSgnc3RydWN0dXJlJywgJ2luZGV4Jyk7XG4gXG4gICAgJCgnI25lc3RhYmxlLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKVxuICAgIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxuICAgICAgICAgICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xuICAgICAgICBpZiAoYWN0aW9uID09PSAnZXhwYW5kLWFsbCcpIHtcbiAgICAgICAgICAgICQoJy5kZCcpLm5lc3RhYmxlKCdleHBhbmRBbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uID09PSAnY29sbGFwc2UtYWxsJykge1xuICAgICAgICAgICAgJCgnLmRkJykubmVzdGFibGUoJ2NvbGxhcHNlQWxsJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBsaXN0ID0gdGhpcztcbiAgICBsaXN0LmVsLmZpbmQobGlzdC5vcHRpb25zLml0ZW1Ob2RlTmFtZSkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgbGlzdC5jb2xsYXBzZUl0ZW0oJCh0aGlzKSk7XG4gICAgfSk7XG5cblxuICAgIGV4cGFuZEl0ZW06IGZ1bmN0aW9uKGxpKVxuICAgIHtcbiAgICAgICAgbGkucmVtb3ZlQ2xhc3ModGhpcy5vcHRpb25zLmNvbGxhcHNlZENsYXNzKTtcbiAgICAgICAgbGkuY2hpbGRyZW4oJ1tkYXRhLWFjdGlvbj1cImV4cGFuZFwiXScpLmhpZGUoKTtcbiAgICAgICAgbGkuY2hpbGRyZW4oJ1tkYXRhLWFjdGlvbj1cImNvbGxhcHNlXCJdJykuc2hvdygpO1xuICAgICAgICBsaS5jaGlsZHJlbih0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKS5zaG93KCk7XG4gICAgfSxcblxuICAgIGNvbGxhcHNlSXRlbTogZnVuY3Rpb24obGkpXG4gICAge1xuICAgICAgICB2YXIgbGlzdHMgPSBsaS5jaGlsZHJlbih0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKTtcbiAgICAgICAgaWYgKGxpc3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgbGkuYWRkQ2xhc3ModGhpcy5vcHRpb25zLmNvbGxhcHNlZENsYXNzKTtcbiAgICAgICAgICAgIGxpLmNoaWxkcmVuKCdbZGF0YS1hY3Rpb249XCJjb2xsYXBzZVwiXScpLmhpZGUoKTtcbiAgICAgICAgICAgIGxpLmNoaWxkcmVuKCdbZGF0YS1hY3Rpb249XCJleHBhbmRcIl0nKS5zaG93KCk7XG4gICAgICAgICAgICBsaS5jaGlsZHJlbih0aGlzLm9wdGlvbnMubGlzdE5vZGVOYW1lKS5oaWRlKCk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgdmFyIHVwZGF0ZU91dHB1dCA9IGZ1bmN0aW9uKGUpXG4gICAge1xuICAgICAgICB2YXIgbGlzdCAgID0gZS5sZW5ndGggPyBlIDogJChlLnRhcmdldCksXG4gICAgICAgICAgICBvdXRwdXQgPSBsaXN0LmRhdGEoJ291dHB1dCcpO1xuICAgICAgICBpZiAod2luZG93LkpTT04pIHtcbiAgICAgICAgICAgIG91dHB1dC52YWwod2luZG93LkpTT04uc3RyaW5naWZ5KGxpc3QubmVzdGFibGUoJ3NlcmlhbGl6ZScpKSk7Ly8sIG51bGwsIDIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG91dHB1dC52YWwoJ0pTT04gYnJvd3NlciBzdXBwb3J0IHJlcXVpcmVkIGZvciB0aGlzIGRlbW8uJyk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gYWN0aXZhdGUgTmVzdGFibGUgZm9yIGxpc3QgMVxuICAgICQoJyNuZXN0YWJsZScpLm5lc3RhYmxlKHtcbiAgICAgICAgZ3JvdXA6IDFcbiAgICB9KVxuICAgIC5vbignY2hhbmdlJywgdXBkYXRlT3V0cHV0KTtcblxuICAgIC8vIGFjdGl2YXRlIE5lc3RhYmxlIGZvciBsaXN0IDJcbiAgICAkKCcjbmVzdGFibGUyJykubmVzdGFibGUoe1xuICAgICAgICBncm91cDogMVxuICAgIH0pXG4gICAgLm9uKCdjaGFuZ2UnLCB1cGRhdGVPdXRwdXQpO1xuXG4gICAgLy8gb3V0cHV0IGluaXRpYWwgc2VyaWFsaXNlZCBkYXRhXG4gICAgdXBkYXRlT3V0cHV0KCQoJyNuZXN0YWJsZScpLmRhdGEoJ291dHB1dCcsICQoJyNuZXN0YWJsZS1vdXRwdXQnKSkpO1xuICAgIHVwZGF0ZU91dHB1dCgkKCcjbmVzdGFibGUyJykuZGF0YSgnb3V0cHV0JywgJCgnI25lc3RhYmxlMi1vdXRwdXQnKSkpO1xuXG4gICAgJCgnI25lc3RhYmxlLW1lbnUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKVxuICAgIHtcbiAgICAgICAgdmFyIHRhcmdldCA9ICQoZS50YXJnZXQpLFxuICAgICAgICAgICAgYWN0aW9uID0gdGFyZ2V0LmRhdGEoJ2FjdGlvbicpO1xuICAgICAgICBpZiAoYWN0aW9uID09PSAnZXhwYW5kLWFsbCcpIHtcbiAgICAgICAgICAgICQoJy5kZCcpLm5lc3RhYmxlKCdleHBhbmRBbGwnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uID09PSAnY29sbGFwc2UtYWxsJykge1xuICAgICAgICAgICAgJCgnLmRkJykubmVzdGFibGUoJ2NvbGxhcHNlQWxsJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoJyNuZXN0YWJsZTMnKS5uZXN0YWJsZSgpO1xuICAgICovXG59XG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gICAgc2VsZWN0aXplKCk7XG4gICAgZGF0ZXBpY2tlcigpO1xuICAgIG1ldGFDb3VudGVyKCk7XG4gICAgc2VvQ3Jvd2woKTtcbiAgICBrZXlDb250cm9scygpO1xuICAgIG9uX2xvYWQoKTtcbiAgICBjcC5kcm9wZG93bigpO1xuICAgIGNwLnRhYmxlVG9nZ2xlTGlzdCgpO1xuICAgIGNwLmNsZWRpdG9yKCk7XG59KTsiXX0=

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cnVjdHVyZS5qcyJdLCJuYW1lcyI6WyJjYXRlZ29yeSIsImNvbnRyb2xzIiwiZG9PbkxvYWQiLCJwYXRoIiwiZGh0bWxYVHJlZU9iamVjdCIsInNldEltYWdlUGF0aCIsIkFETUlOX0RJUiIsImVuYWJsZURyYWdBbmREcm9wIiwic2V0RWRpdFN0YXJ0QWN0aW9uIiwiZW5hYmxlS2V5Ym9hcmROYXZpZ2F0aW9uIiwiZW5hYmxlTXVsdGlzZWxlY3Rpb24iLCJlbmFibGVUcmVlTGluZXMiLCJtYWtlQWxsRHJhZ2dhYmxlIiwiYXR0YWNoRXZlbnQiLCJzSWQiLCJ0SWQiLCJpZCIsInNPYmplY3QiLCJ0T2JqZWN0IiwiJCIsImFqYXgiLCJ1cmwiLCJ0eXBlIiwiZGF0YSIsIm9pZCIsInBpZCIsImNvbnRyb2xMaW5rIiwicGFnZSIsImF0dHJpYnV0ZSIsImJ1aWxkVHJlZSIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwiZGVsZXRlQ2hpbGRJdGVtcyIsImxlbmd0aCIsIngiLCJ2aXNpYmxlIiwiY2xvc2UiLCJvcGVuIiwibGVhZiIsImR5bmFtaWMiLCJpbnNlcnROZXdDaGlsZCIsIm5hbWUiLCJvcGVuT25JdGVtQWRkaW5nIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQUosRUFBY0MsUUFBZDs7QUFFQSxTQUFTQyxRQUFULENBQWtCQyxJQUFsQixFQUNBO0FBQ0NILGFBQVcsSUFBSUksZ0JBQUosQ0FBcUIsaUJBQXJCLEVBQXdDLE1BQXhDLEVBQWdELE1BQWhELEVBQXdELENBQXhELENBQVg7QUFDQUosV0FBU0ssWUFBVCxDQUFzQixNQUFNQyxTQUFOLEdBQWtCLGVBQXhDO0FBQ0FOLFdBQVNPLGlCQUFULENBQTJCLElBQTNCO0FBQ0FQLFdBQVNRLGtCQUFULENBQTRCLE9BQUssS0FBakM7QUFDQVIsV0FBU1Msd0JBQVQsQ0FBa0MsSUFBbEM7QUFDQVQsV0FBU1Usb0JBQVQsQ0FBOEIsSUFBOUI7QUFDQVYsV0FBU1csZUFBVCxDQUF5QixJ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QUFRLENBQVI7QUFDQUMsaUJBQU8sQ0FBUDtBQUNBQyxpQkFBTyxDQUFQOztBQUVBLGNBQUlQLFNBQVNHLENBQVQsRUFBWVYsR0FBWixJQUFtQixDQUF2QixFQUNBO0FBQ0NjLG1CQUFPLGVBQVA7QUFDQUQsbUJBQU8sZUFBUDtBQUNBRCxvQkFBUSxlQUFSO0FBQ0EsV0FMRCxNQU1LLElBQUlMLFNBQVNHLENBQVQsRUFBWUssT0FBWixJQUF1QixDQUEzQixFQUNMO0FBQ1JELG1CQUFPLDJCQUFQO0FBQ1MsV0FISSxNQUlBO0FBQ0pBLG1CQUFPLGVBQVA7QUFDQTs7QUFFRHZDLG1CQUFTeUMsY0FBVCxDQUF3QlQsU0FBU0csQ0FBVCxFQUFZVixHQUFwQyxFQUF5Q08sU0FBU0csQ0FBVCxFQUFZbkIsRUFBckQsRUFBeURnQixTQUFTRyxDQUFULEVBQVlPLElBQVosR0FBbUIsR0FBbkIsR0FBeUJ6QyxRQUFsRixFQUE0RixDQUE1RixFQUErRnNDLElBQS9GLEVBQXFHRCxJQUFyRyxFQUEyR0QsS0FBM0c7QUFDQTtBQUNKOztBQUVEckMsZUFBUzJDLGdCQUFULENBQTBCLElBQTFCO0FBQ0E7QUE1Q0QsR0FBUDtBQThDQSIsImZpbGUiOiJzdHJ1Y3R1cmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2F0ZWdvcnksIGNvbnRyb2xzO1xuXG5mdW5jdGlvbiBkb09uTG9hZChwYXRoKVxue1xuXHRjYXRlZ29yeSA9IG5ldyBkaHRtbFhUcmVlT2JqZWN0KFwidHJlZWJveGJveF90cmVlXCIsIFwiMTAwJVwiLCBcIjEwMCVcIiwgMCk7XG5cdGNhdGVnb3J5LnNldEltYWdlUGF0aCgnLycgKyBBRE1JTl9ESVIgKyAnL2ltYWdlcy90cmVlLycpO1xuXHRjYXRlZ29yeS5lbmFibGVEcmFnQW5kRHJvcCh0cnVlKTtcblx0Y2F0ZWdvcnkuc2V0RWRpdFN0YXJ0QWN0aW9uKHRydWUvZmFsc2UpO1xuXHRjYXRlZ29yeS5lbmFibGVLZXlib2FyZE5hdmlnYXRpb24odHJ1ZSk7XG5cdGNhdGVnb3J5LmVuYWJsZU11bHRpc2VsZWN0aW9uKHRydWUpO1xuXHRjYXRlZ29yeS5lbmFibGVUcmVlTGluZXModHJ1ZSk7XG5cdGNhdGVnb3J5Lm1ha2VBbGxEcmFnZ2FibGUoKTtcblx0XG5cdC8qXG5cdGNhdGVnb3J5LmVuYWJsZUNoZWNrQm94ZXModHJ1ZSk7XG5cdCovXG5cdFxuXHRjYXRlZ29yeS5hdHRhY2hFdmVudChcIm9uRHJvcFwiLCBmdW5jdGlvbihzSWQsIHRJZCwgaWQsIHNPYmplY3QsIHRPYmplY3Qpe1xuXHRcdCQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvJyArIEFETUlOX0RJUiArICcvJyArIHBhdGggKyAnL3VwZGF0ZVN0cnVjdHVyZScsXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIFx0b2lkOiBzSWQsXG4gICAgICAgICAgICBcdHBpZDogdElkXG4gICAgICAgICAgICB9XG4gICAgICAgXHR9KTtcblx0fSk7XG5cblx0Y2F0ZWdvcnkuYXR0YWNoRXZlbnQoXCJvbkRibENsaWNrXCIsIGZ1bmN0aW9uKGlkKXtcblx0ICAgIFxuXHR9KTtcbn1cblxuZnVuY3Rpb24gY29udHJvbExpbmsocGF0aCwgcGFnZSwgdHlwZSwgaWQsIGF0dHJpYnV0ZSlcbntcblx0c3dpdGNoKHR5cGUpXG5cdHtcblx0XHRjYXNlICdhZGQnOlxuXHRcdFx0cmV0dXJuICc8YSBocmVmPVwiLycgKyBBRE1JTl9ESVIgKyAnLycgKyBwYXRoICsgJy8nICsgcGFnZSArICcvYWRkLycgKyBpZCArICdcIiBjbGFzcz1cImNvbnRyb2wtaWNvbiBpY29uIGljb24tZmlsZS1wbHVzXCIgdGl0bGU9XCLQlNC+0LHQsNCy0LjRgtGMINC/0L7QtNGA0LDQt9C00LXQu1wiIGRhdGEtbm8taW5zdGFudD48L2E+Jztcblx0XHRicmVhaztcblxuXHRcdGNhc2UgJ2VkaXQnOlxuXHRcdFx0cmV0dXJuICc8YSBocmVmPVwiLycgKyBBRE1JTl9ESVIgKyAnLycgKyBwYXRoICsgJy8nICsgcGFnZSArICcvZWRpdC8nICsgaWQgKyAnXCIgY2xhc3M9XCJjb250cm9sLWljb24gaWNvbiBpY29uLWVkaXRcIiB0aXRsZT1cItCg0LXQtNCw0LrRgtC40YDQvtCy0LDRgtGMINGA0LDQt9C00LXQu1wiIGRhdGEtbm8taW5zdGFudD48L2E+Jztcblx0XHRicmVhaztcblxuXHRcdGNhc2UgJ3Zpc2libGUnOlxuXHRcdFx0cmV0dXJuICc8YSBocmVmPVwiLycgKyBBRE1JTl9ESVIgKyAnLycgKyBwYXRoICsgJy8nICsgcGFnZSArICcvdmlzaWJsZS8nICsgaWQgKyAnXCIgY2xhc3M9XCJjb250cm9sLWljb24gaWNvbiBpY29uLWV5ZScgKyAoYXR0cmlidXRlID09IDAgPyAnLW9mZicgOiAnJykgKyAnXCIgb25jbGljaz1cImFqYXhfdmlzX3RvZ2dsZSh0aGlzLCAxNSwgMCk7IHJldHVybiBmYWxzZTtcIiB0aXRsZT1cItCe0YLQvtCx0YDQsNC20LXQvdC40LUg0YHRgtGA0LDQvdC40YbRi1wiIGRhdGEtbm8taW5zdGFudD48L2E+Jztcblx0XHRicmVhaztcblxuXHRcdGNhc2UgJ2RlbGV0ZSc6XG5cdFx0XHRyZXR1cm4gJzxhIGhyZWY9XCIvJyArIEFETUlOX0RJUiArICcvJyArIHBhdGggKyAnLycgKyBwYWdlICsgJy9kZWwvJyArIGlkICsgJ1wiIGNsYXNzPVwiY29udHJvbC1pY29uIGljb24gaWNvbi1kZWxldGVcIiB0aXRsZT1cItCj0LTQsNC70LjRgtGMINGA0LDQt9C00LXQu1wiIG9uY2xpY2s9XCJyZXR1cm4gY3AuZGlhbG9nKFxcJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMINGA0LDQt9C00LXQuz9cXCcpO1wiIGRhdGEtbm8taW5zdGFudD48L2E+Jztcblx0XHRicmVhaztcblx0fVxufVxuXG5mdW5jdGlvbiBidWlsZFRyZWUocGF0aCwgcGFnZSlcbntcblx0JC5hamF4KHtcbiAgICAgICAgdXJsOiAnLycgKyBBRE1JTl9ESVIgKyAnLycgKyBwYXRoICsgJy9nZXRTdHJ1Y3R1cmUnLFxuICAgICAgICB0eXBlOiBcImdldFwiLFxuICAgICAgICBkYXRhVHlwZTogXCJKU09OXCIsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICB7XG4gICAgICAgIFx0Y2F0ZWdvcnkuZGVsZXRlQ2hpbGRJdGVtcygwKTtcblx0XHRcdFxuICAgICAgICBcdGlmIChyZXNwb25zZS5sZW5ndGgpXG4gICAgICAgIFx0e1xuICAgICAgICAgICAgXHRmb3IodmFyIHggaW4gcmVzcG9uc2UpXG4gICAgICAgICAgICBcdHtcbiAgICAgICAgICAgIFx0XHRjb250cm9scyA9ICcnO1xuXG4gICAgICAgICAgICBcdFx0Y29udHJvbHMgKz0gJzxzcGFuIGNsYXNzPVwiY29udHJvbC1pY29uc1wiPic7XG4gICAgICAgICAgICBcdFx0Y29udHJvbHMgKz0gY29udHJvbExpbmsocGF0aCwgcGFnZSwgJ2FkZCcsIHJlc3BvbnNlW3hdLmlkKTtcbiAgICAgICAgICAgIFx0XHRjb250cm9scyArPSBjb250cm9sTGluayhwYXRoLCBwYWdlLCAnZWRpdCcsIHJlc3BvbnNlW3hdLmlkKTtcbiAgICAgICAgICAgIFx0XHRjb250cm9scyArPSBjb250cm9sTGluayhwYXRoLCBwYWdlLCAndmlzaWJsZScsIHJlc3BvbnNlW3hdLmlkLCByZXNwb25zZVt4XS52aXNpYmxlKTtcbiAgICAgICAgICAgIFx0XHRjb250cm9scyArPSBjb250cm9sTGluayhwYXRoLCBwYWdlLCAnZGVsZXRlJywgcmVzcG9uc2VbeF0uaWQpO1xuICAgICAgICAgICAgXHRcdGNvbnRyb2xzICs9ICc8L3NwYW4+JztcblxuICAgICAgICAgICAgXHRcdGNsb3NlID0gMDtcbiAgICAgICAgICAgIFx0XHRvcGVuID0gMDtcbiAgICAgICAgICAgIFx0XHRsZWFmID0gMDtcblxuICAgICAgICAgICAgXHRcdGlmIChyZXNwb25zZVt4XS5waWQgPT0gMClcbiAgICAgICAgICAgIFx0XHR7XG4gICAgICAgICAgICBcdFx0XHRsZWFmID0gJ2ljb24vaG9tZS5zdmcnO1xuICAgICAgICAgICAgXHRcdFx0b3BlbiA9ICdpY29uL2hvbWUuc3ZnJztcbiAgICAgICAgICAgIFx0XHRcdGNsb3NlID0gJ2ljb24vaG9tZS5zdmcnO1xuICAgICAgICAgICAgXHRcdH1cbiAgICAgICAgICAgIFx0XHRlbHNlIGlmIChyZXNwb25zZVt4XS5keW5hbWljID09IDEpXG4gICAgICAgICAgICBcdFx0e1xuXHRcdFx0XHRcdFx0bGVhZiA9ICdpY29uL2FwcGxpY2F0aW9uLWNvZGUuc3ZnJztcbiAgICAgICAgICAgIFx0XHR9XG4gICAgICAgICAgICBcdFx0ZWxzZSB7XG4gICAgICAgICAgICBcdFx0XHRsZWFmID0gJ2ljb24vZmlsZS5zdmcnO1xuICAgICAgICAgICAgXHRcdH1cblxuICAgICAgICAgICAgXHRcdGNhdGVnb3J5Lmluc2VydE5ld0NoaWxkKHJlc3BvbnNlW3hdLnBpZCwgcmVzcG9uc2VbeF0uaWQsIHJlc3BvbnNlW3hdLm5hbWUgKyAnICcgKyBjb250cm9scywgMCwgbGVhZiwgb3BlbiwgY2xvc2UpO1xuICAgICAgICAgICAgXHR9XG4gICAgICAgIFx0fVxuXHRcdFx0XG4gICAgICAgIFx0Y2F0ZWdvcnkub3Blbk9uSXRlbUFkZGluZyh0cnVlKTtcbiAgICAgICAgfVxuICAgXHR9KTtcbn0iXX0=

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLmpzIl0sIm5hbWVzIjpbInRlbXBsYXRlIiwiaWQiLCJkYXRhIiwiZCIsImdldEVsZW1lbnRCeUlkIiwiVGVtcGxhdGU3IiwiY29tcGlsZSIsImlubmVySFRNTCIsIndpbmRvdyIsImRvY3VtZW50Il0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsQ0FBRSxhQUFLO0FBQ0osYUFBU0EsUUFBVCxDQUFrQkMsRUFBbEIsRUFBc0JDLElBQXRCLEVBQTRCO0FBQ3hCLFlBQUlDLEVBQUVDLGNBQUYsQ0FBaUJILEVBQWpCLE1BQXlCLElBQTdCLEVBQW1DO0FBQy9CLG1CQUFPSSxVQUFVQyxPQUFWLENBQWtCSCxFQUFFQyxjQUFGLENBQWlCSCxFQUFqQixFQUFxQk0sU0FBdkMsRUFBa0RMLFFBQVEsRUFBMUQsQ0FBUDtBQUNIO0FBQ0QsZUFBTyxFQUFQO0FBQ0g7QUFDRE0sV0FBT1IsUUFBUCxHQUFrQkEsUUFBbEI7QUFDSCxDQVJBLEVBUUdTLFFBUkgiLCJmaWxlIjoidGVtcGxhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KChkID0+IHtcbiAgICBmdW5jdGlvbiB0ZW1wbGF0ZShpZCwgZGF0YSkge1xuICAgICAgICBpZiAoZC5nZXRFbGVtZW50QnlJZChpZCkgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBUZW1wbGF0ZTcuY29tcGlsZShkLmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lckhUTUwpKGRhdGEgfHwge30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgd2luZG93LnRlbXBsYXRlID0gdGVtcGxhdGU7XG59KSkoZG9jdW1lbnQpO1xuIl19
