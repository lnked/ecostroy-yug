"use strict";

var getSettings = {
    merge: function merge(a1, a2) {
        return Object.assign({}, a1, a2);
    },
    codemirror: function codemirror(combine) {
        return this.merge(combine, {
            gutters: ["note-gutter", "CodeMirror-linenumbers"],
            tabSize: 4,
            indentUnit: 4,
            lineNumbers: true,
            lineWrapping: true,
            tabMode: "indent",
            autofocus: false,
            smartIndent: false,
            enterMode: "keep",
            smartyVersion: 3,
            continueComments: "Enter"
        });
    },
    tinymce: function tinymce(combine) {
        return this.merge(combine, {
            theme: 'modern',
            skin: 'lightgray',

            menubar: true,
            fullpage: false,
            image_advtab: true,

            visualblocks_default_state: false,
            end_container_on_empty_block: true,

            plugins: ["advlist autolink autosave link image lists charmap print preview hr anchor pagebreak spellchecker", "searchreplace wordcount visualblocks visualchars code fullscreen insertdatetime media nonbreaking", "table contextmenu directionality emoticons template textcolor paste fullpage colorpicker textpattern"],

            toolbar: 'code | formatselect fontselect fontsizeselect | bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | link unlink anchor | image media | hr removeformat | forecolor backcolor',

            toolbar_items_size: 'small',

            style_formats: [{ title: 'h1', inline: 'h1', classes: 'h1' }, { title: 'h2', inline: 'h2', classes: 'h2' }, { title: 'h3', inline: 'h3', classes: 'h3' }, { title: 'h4', inline: 'h4', classes: 'h4' }, { title: 'h5', inline: 'h5', classes: 'h5' }, { title: 'h6', inline: 'h6', classes: 'h6' }, { title: 'Paragraph', inline: 'p' }, { title: 'Red text', inline: 'span', styles: { color: '#f00' } }],
            content_css: []
        });
    },
    imperavi: function imperavi(combine) {
        return this.merge(combine, {
            lang: 'ru',
            minHeight: 10,
            maxHeight: 850,
            buttonSource: true,
            placeholder: 'Содержимое блока...',
            tabAsSpaces: 4,

            codemirror: true,

            formatting: ['p', 'div', 'blockquote', 'pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],

            fixed: true,
            visual: true,

            toolbarFixed: true,

            toolbarOverflow: true,

            fullpage: false,

            autoresize: true,

            linebreaks: false,

            cleanSpaces: true,

            cleanOnPaste: true,

            pastePlainText: false,

            convertDivs: false,

            removeComments: true,

            cleanStyleOnEnter: false,

            removeDataAttr: false,

            observeLinks: true,

            autoformat: false,

            removeClasses: false,

            removeStyles: false,

            convertLinks: true,

            convertUrlLinks: true,

            removeEmptyTags: true,

            convertImageLinks: true,

            convertVideoLinks: true,

            imageFloatMargin: '15px',

            buttonsHideOnMobile: ['image', 'video'],

            replaceStyles: [['font-weight:\s?bold', "strong"], ['font-weight:\s?700', "strong"], ['font-style:\s?italic', "em"], ['text-decoration:\s?underline', "u"]],

            removeEmpty: ['strong', 'em', 'span', 'p', 'div', 'i', 'b'],

            plugins: ['table', 'video', 'filemanager', 'limiter', 'fontcolor', 'fontsize', 'fontfamily', 'textdirection', 'imagemanager', 'definedlinks', 'counter', 'clips', 'fullscreen'],

            formattingAdd: [{
                tag: 'h6',
                title: 'Заголовок 6'
            }],

            replaceTags: [['strike', 'del'], ['i', 'em'], ['b', 'strong'], ['big', 'strong'], ['strike', 'del']],

            deniedTags: ['html', 'head', 'link', 'body', 'meta', 'applet', 'style', 'script', 'meta', 'link'],

            buttonsAdd: ['pre', '|'],

            activeButtonsAdd: {
                pre: 'pre'
            },

            buttonsCustom: {
                pre: {
                    title: 'Code',
                    callback: function callback() {
                        this.formatBlocks('pre');
                    }
                }
            },

            fileManagerJson: '/tests/files.json',

            fileUpload: '/apps/upload/file_upload.php',
            imageUpload: '/apps/upload/image_upload.php',
            clipboardUploadUrl: '/apps/upload/clipboard.php'
            // css: '/apps/wysiwyg/imperavi/redactor-iframe.css'
        });
    }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIl9zZXR0aW5ncy5qcyJdLCJuYW1lcyI6WyJnZXRTZXR0aW5ncyIsIm1lcmdlIiwiYTEiLCJhMiIsIk9iamVjdCIsImFzc2lnbiIsImNvZGVtaXJyb3IiLCJjb21iaW5lIiwiZ3V0dGVycyIsInRhYlNpemUiLCJpbmRlbnRVbml0IiwibGluZU51bWJlcnMiLCJsaW5lV3JhcHBpbmciLCJ0YWJNb2RlIiwiYXV0b2ZvY3VzIiwic21hcnRJbmRlbnQiLCJlbnRlck1vZGUiLCJzbWFydHlWZXJzaW9uIiwiY29udGludWVDb21tZW50cyIsInRpbnltY2UiLCJ0aGVtZSIsInNraW4iLCJtZW51YmFyIiwiZnVsbHBhZ2UiLCJpbWFnZV9hZHZ0YWIiLCJ2aXN1YWxibG9ja3NfZGVmYXVsdF9zdGF0ZSIsImVuZF9jb250YWluZXJfb25fZW1wdHlfYmxvY2siLCJwbHVnaW5zIiwidG9vbGJhciIsInRvb2xiYXJfaXRlbXNfc2l6ZSIsInN0eWxlX2Zvcm1hdHMiLCJ0aXRsZSIsImlubGluZSIsImNsYXNzZXMiLCJzdHlsZXMiLCJjb2xvciIsImNvbnRlbnRfY3NzIiwiaW1wZXJhdmkiLCJsYW5nIiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwiYnV0dG9uU291cmNlIiwicGxhY2Vob2xkZXIiLCJ0YWJBc1NwYWNlcyIsImZvcm1hdHRpbmciLCJmaXhlZCIsInZpc3VhbCIsInRvb2xiYXJGaXhlZCIsInRvb2xiYXJPdmVyZmxvdyIsImF1dG9yZXNpemUiLCJsaW5lYnJlYWtzIiwiY2xlYW5TcGFjZXMiLCJjbGVhbk9uUGFzdGUiLCJwYXN0ZVBsYWluVGV4dCIsImNvbnZlcnREaXZzIiwicmVtb3ZlQ29tbWVudHMiLCJjbGVhblN0eWxlT25FbnRlciIsInJlbW92ZURhdGFBdHRyIiwib2JzZXJ2ZUxpbmtzIiwiYXV0b2Zvcm1hdCIsInJlbW92ZUNsYXNzZXMiLCJyZW1vdmVTdHlsZXMiLCJjb252ZXJ0TGlua3MiLCJjb252ZXJ0VXJsTGlua3MiLCJyZW1vdmVFbXB0eVRhZ3MiLCJjb252ZXJ0SW1hZ2VMaW5rcyIsImNvbnZlcnRWaWRlb0xpbmtzIiwiaW1hZ2VGbG9hdE1hcmdpbiIsImJ1dHRvbnNIaWRlT25Nb2JpbGUiLCJyZXBsYWNlU3R5bGVzIiwicmVtb3ZlRW1wdHkiLCJmb3JtYXR0aW5nQWRkIiwidGFnIiwicmVwbGFjZVRhZ3MiLCJkZW5pZWRUYWdzIiwiYnV0dG9uc0FkZCIsImFjdGl2ZUJ1dHRvbnNBZGQiLCJwcmUiLCJidXR0b25zQ3VzdG9tIiwiY2FsbGJhY2siLCJmb3JtYXRCbG9ja3MiLCJmaWxlTWFuYWdlckpzb24iLCJmaWxlVXBsb2FkIiwiaW1hZ2VVcGxvYWQiLCJjbGlwYm9hcmRVcGxvYWRVcmwiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBTUEsY0FBYztBQUNoQkMsU0FEZ0IsaUJBQ1RDLEVBRFMsRUFDTEMsRUFESyxFQUNEO0FBQ1gsZUFBT0MsT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILEVBQWxCLEVBQXNCQyxFQUF0QixDQUFQO0FBQ0gsS0FIZTtBQUtoQkcsY0FMZ0Isc0JBS0pDLE9BTEksRUFLSztBQUNqQixlQUFPLEtBQUtOLEtBQUwsQ0FBV00sT0FBWCxFQUFvQjtBQUN2QkMscUJBQVMsQ0FBQyxhQUFELEVBQWdCLHdCQUFoQixDQURjO0FBRXZCQyxxQkFBUyxDQUZjO0FBR3ZCQyx3QkFBWSxDQUhXO0FBSXZCQyx5QkFBYSxJQUpVO0FBS3ZCQywwQkFBYyxJQUxTO0FBTXZCQyxxQkFBUyxRQU5jO0FBT3ZCQyx1QkFBVyxLQVBZO0FBUXZCQyx5QkFBYSxLQVJVO0FBU3ZCQyx1QkFBVyxNQVRZO0FBVXZCQywyQkFBaUIsQ0FWTTtBQVd2QkMsOEJBQWtCO0FBWEssU0FBcEIsQ0FBUDtBQWFILEtBbkJlO0FBcUJoQkMsV0FyQmdCLG1CQXFCUFosT0FyQk8sRUFxQkU7QUFDZCxlQUFPLEtBQUtOLEtBQUwsQ0FBV00sT0FBWCxFQUFvQjtBQUN2QmEsbUJBQU8sUUFEZ0I7QUFFdkJDLGtCQUFNLFdBRmlCOztBQUl2QkMscUJBQVMsSUFKYztBQUt2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TGUsQ0FBcEIiLCJmaWxlIjoiX3NldHRpbmdzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgZ2V0U2V0dGluZ3MgPSB7XG4gICAgbWVyZ2UgKGExLCBhMikge1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgYTEsIGEyKTtcbiAgICB9LFxuXG4gICAgY29kZW1pcnJvciAoY29tYmluZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXJnZShjb21iaW5lLCB7XG4gICAgICAgICAgICBndXR0ZXJzOiBbXCJub3RlLWd1dHRlclwiLCBcIkNvZGVNaXJyb3ItbGluZW51bWJlcnNcIl0sXG4gICAgICAgICAgICB0YWJTaXplOiA0LFxuICAgICAgICAgICAgaW5kZW50VW5pdDogNCxcbiAgICAgICAgICAgIGxpbmVOdW1iZXJzOiB0cnVlLFxuICAgICAgICAgICAgbGluZVdyYXBwaW5nOiB0cnVlLFxuICAgICAgICAgICAgdGFiTW9kZTogXCJpbmRlbnRcIixcbiAgICAgICAgICAgIGF1dG9mb2N1czogZmFsc2UsXG4gICAgICAgICAgICBzbWFydEluZGVudDogZmFsc2UsXG4gICAgICAgICAgICBlbnRlck1vZGU6IFwia2VlcFwiLFxuICAgICAgICAgICAgc21hcnR5VmVyc2lvbiAgOiAzLFxuICAgICAgICAgICAgY29udGludWVDb21tZW50czogXCJFbnRlclwiXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICB0aW55bWNlIChjb21iaW5lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm1lcmdlKGNvbWJpbmUsIHtcbiAgICAgICAgICAgIHRoZW1lOiAnbW9kZXJuJyxcbiAgICAgICAgICAgIHNraW46ICdsaWdodGdyYXknLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBtZW51YmFyOiB0cnVlLFxuICAgICAgICAgICAgZnVsbHBhZ2U6IGZhbHNlLFxuICAgICAgICAgICAgaW1hZ2VfYWR2dGFiOiB0cnVlLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICB2aXN1YWxibG9ja3NfZGVmYXVsdF9zdGF0ZTogZmFsc2UsXG4gICAgICAgICAgICBlbmRfY29udGFpbmVyX29uX2VtcHR5X2Jsb2NrOiB0cnVlLFxuXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgXCJhZHZsaXN0IGF1dG9saW5rIGF1dG9zYXZlIGxpbmsgaW1hZ2UgbGlzdHMgY2hhcm1hcCBwcmludCBwcmV2aWV3IGhyIGFuY2hvciBwYWdlYnJlYWsgc3BlbGxjaGVja2VyXCIsXG4gICAgICAgICAgICAgICAgXCJzZWFyY2hyZXBsYWNlIHdvcmRjb3VudCB2aXN1YWxibG9ja3MgdmlzdWFsY2hhcnMgY29kZSBmdWxsc2NyZWVuIGluc2VydGRhdGV0aW1lIG1lZGlhIG5vbmJyZWFraW5nXCIsXG4gICAgICAgICAgICAgICAgXCJ0YWJsZSBjb250ZXh0bWVudSBkaXJlY3Rpb25hbGl0eSBlbW90aWNvbnMgdGVtcGxhdGUgdGV4dGNvbG9yIHBhc3RlIGZ1bGxwYWdlIGNvbG9ycGlja2VyIHRleHRwYXR0ZXJuXCJcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIHRvb2xiYXI6ICdjb2RlIHwgZm9ybWF0c2VsZWN0IGZvbnRzZWxlY3QgZm9udHNpemVzZWxlY3QgfCBib2xkIGl0YWxpYyB1bmRlcmxpbmUgc3RyaWtldGhyb3VnaCB8IGFsaWdubGVmdCBhbGlnbmNlbnRlciBhbGlnbnJpZ2h0IGFsaWduanVzdGlmeSB8IGJ1bGxpc3QgbnVtbGlzdCB8IG91dGRlbnQgaW5kZW50IGJsb2NrcXVvdGUgfCBsaW5rIHVubGluayBhbmNob3IgfCBpbWFnZSBtZWRpYSB8IGhyIHJlbW92ZWZvcm1hdCB8IGZvcmVjb2xvciBiYWNrY29sb3InLFxuXG4gICAgICAgICAgICB0b29sYmFyX2l0ZW1zX3NpemU6ICdzbWFsbCcsXG5cbiAgICAgICAgICAgIHN0eWxlX2Zvcm1hdHM6IFtcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdoMScsIGlubGluZTogJ2gxJywgY2xhc3NlczogJ2gxJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnaDInLCBpbmxpbmU6ICdoMicsIGNsYXNzZXM6ICdoMid9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ2gzJywgaW5saW5lOiAnaDMnLCBjbGFzc2VzOiAnaDMnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdoNCcsIGlubGluZTogJ2g0JywgY2xhc3NlczogJ2g0J30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnaDUnLCBpbmxpbmU6ICdoNScsIGNsYXNzZXM6ICdoNSd9LFxuICAgICAgICAgICAgICAgIHt0aXRsZTogJ2g2JywgaW5saW5lOiAnaDYnLCBjbGFzc2VzOiAnaDYnfSxcbiAgICAgICAgICAgICAgICB7dGl0bGU6ICdQYXJhZ3JhcGgnLCBpbmxpbmU6ICdwJ30sXG4gICAgICAgICAgICAgICAge3RpdGxlOiAnUmVkIHRleHQnLCBpbmxpbmU6ICdzcGFuJywgc3R5bGVzOiB7IGNvbG9yOiAnI2YwMCcgfX0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgY29udGVudF9jc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICBpbXBlcmF2aSAoY29tYmluZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5tZXJnZShjb21iaW5lLCB7XG4gICAgICAgICAgICBsYW5nOiAncnUnLFxuICAgICAgICAgICAgbWluSGVpZ2h0OiAxMCxcbiAgICAgICAgICAgIG1heEhlaWdodDogODUwLFxuICAgICAgICAgICAgYnV0dG9uU291cmNlOiB0cnVlLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6ICfQodC+0LTQtdGA0LbQuNC80L7QtSDQsdC70L7QutCwLi4uJyxcbiAgICAgICAgICAgIHRhYkFzU3BhY2VzOiA0LFxuXG4gICAgICAgICAgICBjb2RlbWlycm9yOiB0cnVlLFxuXG4gICAgICAgICAgICBmb3JtYXR0aW5nOiBbJ3AnLCAnZGl2JywgJ2Jsb2NrcXVvdGUnLCAncHJlJywgJ2gxJywgJ2gyJywgJ2gzJywgJ2g0JywgJ2g1JywgJ2g2J10sXG5cbiAgICAgICAgICAgIGZpeGVkOiB0cnVlLFxuICAgICAgICAgICAgdmlzdWFsOiB0cnVlLFxuXG4gICAgICAgICAgICB0b29sYmFyRml4ZWQ6IHRydWUsXG5cbiAgICAgICAgICAgIHRvb2xiYXJPdmVyZmxvdzogdHJ1ZSxcblxuICAgICAgICAgICAgZnVsbHBhZ2U6IGZhbHNlLFxuXG4gICAgICAgICAgICBhdXRvcmVzaXplOiB0cnVlLFxuXG4gICAgICAgICAgICBsaW5lYnJlYWtzOiBmYWxzZSxcblxuICAgICAgICAgICAgY2xlYW5TcGFjZXM6IHRydWUsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNsZWFuT25QYXN0ZTogdHJ1ZSxcblxuICAgICAgICAgICAgcGFzdGVQbGFpblRleHQ6IGZhbHNlLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb252ZXJ0RGl2czogZmFsc2UsXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlbW92ZUNvbW1lbnRzOiB0cnVlLFxuXG4gICAgICAgICAgICBjbGVhblN0eWxlT25FbnRlcjogZmFsc2UsXG5cbiAgICAgICAgICAgIHJlbW92ZURhdGFBdHRyOiBmYWxzZSxcblxuICAgICAgICAgICAgb2JzZXJ2ZUxpbmtzOiB0cnVlLFxuXG4gICAgICAgICAgICBhdXRvZm9ybWF0OiBmYWxzZSxcblxuICAgICAgICAgICAgcmVtb3ZlQ2xhc3NlczogZmFsc2UsXG5cbiAgICAgICAgICAgIHJlbW92ZVN0eWxlczogZmFsc2UsXG5cbiAgICAgICAgICAgIGNvbnZlcnRMaW5rczogdHJ1ZSxcblxuICAgICAgICAgICAgY29udmVydFVybExpbmtzOiB0cnVlLFxuXG4gICAgICAgICAgICByZW1vdmVFbXB0eVRhZ3M6IHRydWUsXG5cbiAgICAgICAgICAgIGNvbnZlcnRJbWFnZUxpbmtzOiB0cnVlLFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb252ZXJ0VmlkZW9MaW5rczogdHJ1ZSxcblxuICAgICAgICAgICAgaW1hZ2VGbG9hdE1hcmdpbjogJzE1cHgnLFxuXG4gICAgICAgICAgICBidXR0b25zSGlkZU9uTW9iaWxlOiBbJ2ltYWdlJywgJ3ZpZGVvJ10sXG5cbiAgICAgICAgICAgIHJlcGxhY2VTdHlsZXM6IFtcbiAgICAgICAgICAgICAgICBbJ2ZvbnQtd2VpZ2h0Olxccz9ib2xkJywgXCJzdHJvbmdcIl0sXG4gICAgICAgICAgICAgICAgWydmb250LXdlaWdodDpcXHM/NzAwJywgXCJzdHJvbmdcIl0sXG4gICAgICAgICAgICAgICAgWydmb250LXN0eWxlOlxccz9pdGFsaWMnLCBcImVtXCJdLFxuICAgICAgICAgICAgICAgIFsndGV4dC1kZWNvcmF0aW9uOlxccz91bmRlcmxpbmUnLCBcInVcIl1cbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIHJlbW92ZUVtcHR5OiBbJ3N0cm9uZycsICdlbScsICdzcGFuJywgJ3AnLCAnZGl2JywgJ2knLCAnYiddLFxuXG4gICAgICAgICAgICBwbHVnaW5zOiBbXG4gICAgICAgICAgICAgICAgJ3RhYmxlJyxcbiAgICAgICAgICAgICAgICAndmlkZW8nLFxuICAgICAgICAgICAgICAgICdmaWxlbWFuYWdlcicsXG4gICAgICAgICAgICAgICAgJ2xpbWl0ZXInLFxuICAgICAgICAgICAgICAgICdmb250Y29sb3InLFxuICAgICAgICAgICAgICAgICdmb250c2l6ZScsXG4gICAgICAgICAgICAgICAgJ2ZvbnRmYW1pbHknLFxuICAgICAgICAgICAgICAgICd0ZXh0ZGlyZWN0aW9uJyxcbiAgICAgICAgICAgICAgICAnaW1hZ2VtYW5hZ2VyJyxcbiAgICAgICAgICAgICAgICAnZGVmaW5lZGxpbmtzJyxcbiAgICAgICAgICAgICAgICAnY291bnRlcicsXG4gICAgICAgICAgICAgICAgJ2NsaXBzJyxcbiAgICAgICAgICAgICAgICAnZnVsbHNjcmVlbidcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcm1hdHRpbmdBZGQ6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRhZzogJ2g2JyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfQl9Cw0LPQvtC70L7QstC+0LogNidcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICByZXBsYWNlVGFnczogW1xuICAgICAgICAgICAgICAgIFsnc3RyaWtlJywgJ2RlbCddLFxuICAgICAgICAgICAgICAgIFsnaScsICdlbSddLFxuICAgICAgICAgICAgICAgIFsnYicsICdzdHJvbmcnXSxcbiAgICAgICAgICAgICAgICBbJ2JpZycsICdzdHJvbmcnXSxcbiAgICAgICAgICAgICAgICBbJ3N0cmlrZScsICdkZWwnXVxuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgZGVuaWVkVGFnczogWydodG1sJywgJ2hlYWQnLCAnbGluaycsICdib2R5JywgJ21ldGEnLCAnYXBwbGV0JywgJ3N0eWxlJywgJ3NjcmlwdCcsICdtZXRhJywgJ2xpbmsnXSxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgYnV0dG9uc0FkZDogWydwcmUnLCAnfCddLFxuXG4gICAgICAgICAgICBhY3RpdmVCdXR0b25zQWRkOiB7XG4gICAgICAgICAgICAgICAgcHJlOiAncHJlJ1xuICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgYnV0dG9uc0N1c3RvbToge1xuICAgICAgICAgICAgICAgIHByZToge1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ0NvZGUnLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1hdEJsb2NrcygncHJlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICBmaWxlTWFuYWdlckpzb246ICcvdGVzdHMvZmlsZXMuanNvbicsXG5cbiAgICAgICAgICAgIGZpbGVVcGxvYWQ6ICcvYXBwcy91cGxvYWQvZmlsZV91cGxvYWQucGhwJyxcbiAgICAgICAgICAgIGltYWdlVXBsb2FkOiAnL2FwcHMvdXBsb2FkL2ltYWdlX3VwbG9hZC5waHAnLFxuICAgICAgICAgICAgY2xpcGJvYXJkVXBsb2FkVXJsOiAnL2FwcHMvdXBsb2FkL2NsaXBib2FyZC5waHAnXG4gICAgICAgICAgICAvLyBjc3M6ICcvYXBwcy93eXNpd3lnL2ltcGVyYXZpL3JlZGFjdG9yLWlmcmFtZS5jc3MnXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==

'use strict';

(function ($) {
    'use strict';

    $.browser = {};
    $.browser.mozilla = /mozilla/.test(navigator.userAgent.toLowerCase()) && !/webkit/.test(navigator.userAgent.toLowerCase());
    $.browser.webkit = /webkit/.test(navigator.userAgent.toLowerCase());
    $.browser.opera = /opera/.test(navigator.userAgent.toLowerCase());
    $.browser.msie = /msie/.test(navigator.userAgent.toLowerCase());
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJyb3dzZXIuanMiXSwibmFtZXMiOlsiJCIsImJyb3dzZXIiLCJtb3ppbGxhIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsInRvTG93ZXJDYXNlIiwid2Via2l0Iiwib3BlcmEiLCJtc2llIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiOztBQUFDLFdBQVNBLENBQVQsRUFBWTtBQUNUOztBQUVBQSxNQUFFQyxPQUFGLEdBQVksRUFBWjtBQUNBRCxNQUFFQyxPQUFGLENBQVVDLE9BQVYsR0FBb0IsVUFBVUMsSUFBVixDQUFlQyxVQUFVQyxTQUFWLENBQW9CQyxXQUFwQixFQUFmLEtBQXFELENBQUMsU0FBU0gsSUFBVCxDQUFjQyxVQUFVQyxTQUFWLENBQW9CQyxXQUFwQixFQUFkLENBQTFFO0FBQ0FOLE1BQUVDLE9BQUYsQ0FBVU0sTUFBVixHQUFtQixTQUFTSixJQUFULENBQWNDLFVBQVVDLFNBQVYsQ0FBb0JDLFdBQXBCLEVBQWQsQ0FBbkI7QUFDQU4sTUFBRUMsT0FBRixDQUFVTyxLQUFWLEdBQWtCLFFBQVFMLElBQVIsQ0FBYUMsVUFBVUMsU0FBVixDQUFvQkMsV0FBcEIsRUFBYixDQUFsQjtBQUNBTixNQUFFQyxPQUFGLENBQVVRLElBQVYsR0FBaUIsT0FBT04sSUFBUCxDQUFZQyxVQUFVQyxTQUFWLENBQW9CQyxXQUFwQixFQUFaLENBQWpCO0FBRUgsQ0FUQSxFQVNDSSxNQVRELENBQUQiLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigkKSB7XG4gICAgJ3VzZSBzdHJpY3QnO1xuXG4gICAgJC5icm93c2VyID0ge307XG4gICAgJC5icm93c2VyLm1vemlsbGEgPSAvbW96aWxsYS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkpICYmICEvd2Via2l0Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG4gICAgJC5icm93c2VyLndlYmtpdCA9IC93ZWJraXQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAkLmJyb3dzZXIub3BlcmEgPSAvb3BlcmEvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAkLmJyb3dzZXIubXNpZSA9IC9tc2llLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cbn0oalF1ZXJ5KSk7Il19

'use strict';

function declOfNum(n, titles) {
    var cases = [2, 0, 1, 1, 1, 2];
    n = Math.abs(n);
    return [n, titles[n % 100 > 4 && n % 100 < 20 ? 2 : cases[n % 10 < 5 ? n % 10 : 5]]].join(' ');
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlY2xvZm51bS5qcyJdLCJuYW1lcyI6WyJkZWNsT2ZOdW0iLCJuIiwidGl0bGVzIiwiY2FzZXMiLCJNYXRoIiwiYWJzIiwiam9pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxTQUFTQSxTQUFULENBQW1CQyxDQUFuQixFQUFzQkMsTUFBdEIsRUFBOEI7QUFDMUIsUUFBTUMsUUFBUSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLENBQWQ7QUFDQUYsUUFBSUcsS0FBS0MsR0FBTCxDQUFTSixDQUFULENBQUo7QUFDQSxXQUFPLENBQUNBLENBQUQsRUFBSUMsT0FBUUQsSUFBSSxHQUFKLEdBQVUsQ0FBVixJQUFlQSxJQUFJLEdBQUosR0FBVSxFQUExQixHQUFnQyxDQUFoQyxHQUFvQ0UsTUFBT0YsSUFBSSxFQUFKLEdBQVMsQ0FBVixHQUFlQSxJQUFJLEVBQW5CLEdBQXdCLENBQTlCLENBQTNDLENBQUosRUFBa0ZLLElBQWxGLENBQXVGLEdBQXZGLENBQVA7QUFDSCIsImZpbGUiOiJkZWNsb2ZudW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBkZWNsT2ZOdW0obiwgdGl0bGVzKSB7XG4gICAgY29uc3QgY2FzZXMgPSBbMiwgMCwgMSwgMSwgMSwgMl07XG4gICAgbiA9IE1hdGguYWJzKG4pO1xuICAgIHJldHVybiBbbiwgdGl0bGVzWyhuICUgMTAwID4gNCAmJiBuICUgMTAwIDwgMjApID8gMiA6IGNhc2VzWyhuICUgMTAgPCA1KSA/IG4gJSAxMCA6IDVdXV0uam9pbignICcpO1xufSJdfQ==

'use strict';

function saving(id, content) {
    $.ajax({
        url: '/' + ADMIN_DIR + '/save/',
        type: 'post',
        data: {
            id: id,
            cont: content,
            pathname: location.pathname
        },
        dataType: 'JSON',
        success: function success(response) {
            if (response == 1) {
                alert("Данные удачно сохранены.");
            } else {
                alert("Ошибка, данные небыли сохранены.");
            }
        }
    });
}

function isFullScreen(cm) {
    return (/\bCodeMirror-fullscreen\b/.test(cm.getWrapperElement().className)
    );
}

function winHeight() {
    return window.innerHeight || (document.documentElement || document.body).clientHeight;
}

function setFullScreen(cm, full) {
    var wrap = cm.getWrapperElement(),
        scroll = cm.getScrollerElement();
    if (full) {
        wrap.className += " CodeMirror-fullscreen";
        scroll.style.height = winHeight() + "px";
        document.documentElement.style.overflow = "hidden";
    } else {
        wrap.className = wrap.className.replace(" CodeMirror-fullscreen", "");
        scroll.style.height = "";
        document.documentElement.style.overflow = "";
    }
    cm.refresh();
}

var _editor = {
    codemirror: function codemirror(id, mode) {
        var object = document.getElementById(id);

        if (mode == 'xml') {
            mode = {
                name: "xml",
                alignCDATA: true
            };
        }

        if (mode == 'sql') {
            mode = 'text/x-mariadb';
            if (window.location.href.indexOf('mime=') > -1) {
                mode = window.location.href.substr(window.location.href.indexOf('mime=') + 5);
            }
        }

        CodeMirror.fromTextArea(object, getSettings.codemirror({
            mode: mode,
            extraKeys: {
                "Ctrl-S": function CtrlS(cm) {
                    saving();
                    return false;
                },
                "Cmd-S": function CmdS(cm) {
                    saving();
                    return false;
                },
                "Ctrl-Q": "toggleComment",
                "Cmd-Q": "toggleComment"
            }
        }));
    },
    init: function init(id, type, mode) {
        if (typeof this[type] !== 'undefined') {
            this[type](id, mode);
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci5qcyJdLCJuYW1lcyI6WyJzYXZpbmciLCJpZCIsImNvbnRlbnQiLCIkIiwiYWpheCIsInVybCIsIkFETUlOX0RJUiIsInR5cGUiLCJkYXRhIiwiY29udCIsInBhdGhuYW1lIiwibG9jYXRpb24iLCJkYXRhVHlwZSIsInN1Y2Nlc3MiLCJyZXNwb25zZSIsImFsZXJ0IiwiaXNGdWxsU2NyZWVuIiwiY20iLCJ0ZXN0IiwiZ2V0V3JhcHBlckVsZW1lbnQiLCJjbGFzc05hbWUiLCJ3aW5IZWlnaHQiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiYm9keSIsImNsaWVudEhlaWdodCIsInNldEZ1bGxTY3JlZW4iLCJmdWxsIiwid3JhcCIsInNjcm9sbCIsImdldFNjcm9sbGVyRWxlbWVudCIsInN0eWxlIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJyZXBsYWNlIiwicmVmcmVzaCIsIl9lZGl0b3IiLCJjb2RlbWlycm9yIiwibW9kZSIsIm9iamVjdCIsImdldEVsZW1lbnRCeUlkIiwibmFtZSIsImFsaWduQ0RBVEEiLCJocmVmIiwiaW5kZXhPZiIsInN1YnN0ciIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJnZXRTZXR0aW5ncyIsImV4dHJhS2V5cyIsImluaXQiXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsTUFBVCxDQUFnQkMsRUFBaEIsRUFBb0JDLE9BQXBCLEVBQ0E7QUFDSUMsTUFBRUMsSUFBRixDQUFPO0FBQ0hDLGFBQUssTUFBTUMsU0FBTixHQUFrQixRQURwQjtBQUVIQyxjQUFNLE1BRkg7QUFHSEMsY0FBTTtBQUNGUCxnQkFBSUEsRUFERjtBQUVGUSxrQkFBTVAsT0FGSjtBQUdGUSxzQkFBVUMsU0FBU0Q7QUFIakIsU0FISDtBQVFIRSxrQkFBVSxNQVJQO0FBU0hDLGlCQUFTLGlCQUFTQyxRQUFULEVBQ1Q7QUFDSSxnQkFBSUEsWUFBWSxDQUFoQixFQUFtQjtBQUNmQyxzQkFBTSwwQkFBTjtBQUNILGFBRkQsTUFFTztBQUNIQSxzQkFBTSxrQ0FBTjtBQUNIO0FBQ0o7QUFoQkUsS0FBUDtBQWtCSDs7QUFFRCxTQUFTQyxZQUFULENBQXNCQyxFQUF0QixFQUEwQjtBQUN0QixXQUFPLDZCQUE0QkMsSUFBNUIsQ0FBaUNELEdBQUdFLGlCQUFILEdBQXVCQyxTQUF4RDtBQUFQO0FBQ0g7O0FBRUQsU0FBU0MsU0FBVCxHQUFxQjtBQUNqQixXQUFPQyxPQUFPQyxXQUFQLElBQXNCLENBQUNDLFNBQVNDLGVBQVQsSUFBNEJELFNBQVNFLElBQXRDLEVBQTRDQyxZQUF6RTtBQUNIOztBQUVELFNBQVNDLGFBQVQsQ0FBdUJYLEVBQXZCLEVBQTJCWSxJQUEzQixFQUFpQztBQUM3QixRQUFJQyxPQUFPYixHQUFHRSxpQkFBSCxFQUFYO0FBQUEsUUFBbUNZLFNBQVNkLEdBQUdlLGtCQUFILEVBQTVDO0FBQ0EsUUFBSUgsSUFBSixFQUNBO0FBQ0lDLGFBQUtWLFNBQUwsSUFBa0Isd0JBQWxCO0FBQ0FXLGVBQU9FLEtBQVAsQ0FBYUMsTUFBYixHQUFzQmIsY0FBYyxJQUFwQztBQUNBRyxpQkFBU0MsZUFBVCxDQUF5QlEsS0FBekIsQ0FBK0JFLFFBQS9CLEdBQTBDLFFBQTFDO0FBQ0gsS0FMRCxNQU9BO0FBQ0lMLGFBQUtWLFNBQUwsR0FBaUJVLEtBQUtWLFNBQUwsQ0FBZWdCLE9BQWYsQ0FBdUIsd0JBQXZCLEVBQWlELEVBQWpELENBQWpCO0FBQ0FMLGVBQU9FLEtBQVAsQ0FBYUMsTUFBYixHQUFzQixFQUF0QjtBQUNBVixpQkFBU0MsZUFBVCxDQUF5QlEsS0FBekIsQ0FBK0JFLFFBQS9CLEdBQTBDLEVBQTFDO0FBQ0g7QUFDRGxCLE9BQUdvQixPQUFIO0FBQ0g7O0FBRUQsSUFBSUMsVUFBVTtBQUNWQyxnQkFBWSxvQkFBU3RDLEVBQVQsRUFBYXVDLElBQWIsRUFDWjtBQUNJLFlBQUlDLFNBQVNqQixTQUFTa0IsY0FBVCxDQUF3QnpDLEVBQXhCLENBQWI7O0FBRUEsWUFBSXVDLFFBQVEsS0FBWixFQUNBO0FBQ0lBLG1CQUFPO0FBQ0hHLHNCQUFNLEtBREg7QUFFSEMsNEJBQVk7QUFGVCxhQUFQO0FBSUg7O0FBRUQsWUFBSUosUUFBUSxLQUFaLEVBQ0E7QUFDSUEsbUJBQU8sZ0JBQVA7QUFDQSxnQkFBSWxCLE9BQU9YLFFBQVAsQ0FBZ0JrQyxJQUFoQixDQUFxQkMsT0FBckIsQ0FBNkIsT0FBN0IsSUFBd0MsQ0FBQyxDQUE3QyxFQUNBO0FBQ0lOLHVCQUFPbEIsT0FBT1gsUUFBUCxDQUFnQmtDLElBQWhCLENBQXFCRSxNQUFyQixDQUE0QnpCLE9BQU9YLFFBQVAsQ0FBZ0JrQyxJQUFoQixDQUFxQkMsT0FBckIsQ0FBNkIsT0FBN0IsSUFBd0MsQ0FBcEUsQ0FBUDtBQUNIO0FBQ0o7O0FBRURFLG1CQUFXQyxZQUFYLENBQXdCUixNQUF4QixFQUFnQ1MsWUFBWVgsVUFBWixDQUF1QjtBQUNuREMsa0JBQU1BLElBRDZDO0FBRW5EVyx1QkFBVztBQUNQLDBCQUFVLGVBQVNsQyxFQUFULEVBQWE7QUFDbkJqQjtBQUNBLDJCQUFPLEtBQVA7QUFDSCxpQkFKTTtBQUtQLHlCQUFTLGNBQVNpQixFQUFULEVBQWE7QUFDbEJqQjtBQUNBLDJCQUFPLEtBQVA7QUFDSCxpQkFSTTtBQVNQLDBCQUFVLGVBVEg7QUFVUCx5QkFBUztBQVZGO0FBRndDLFNBQXZCLENBQWhDO0FBZUgsS0FyQ1M7QUFzQ1ZvRCxVQUFNLGNBQVNuRCxFQUFULEVBQWFNLElBQWIsRUFBbUJpQyxJQUFuQixFQUNOO0FBQ0ksWUFBSSxPQUFPLEtBQUtqQyxJQUFMLENBQVAsS0FBdUIsV0FBM0IsRUFDQTtBQUNJLGlCQUFLQSxJQUFMLEVBQVdOLEVBQVgsRUFBZXVDLElBQWY7QUFDSDtBQUNKO0FBNUNTLENBQWQiLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gc2F2aW5nKGlkLCBjb250ZW50KVxue1xuICAgICQuYWpheCh7XG4gICAgICAgIHVybDogJy8nICsgQURNSU5fRElSICsgJy9zYXZlLycsXG4gICAgICAgIHR5cGU6ICdwb3N0JyxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgY29udDogY29udGVudCxcbiAgICAgICAgICAgIHBhdGhuYW1lOiBsb2NhdGlvbi5wYXRobmFtZVxuICAgICAgICB9LFxuICAgICAgICBkYXRhVHlwZTogJ0pTT04nLFxuICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlID09IDEpIHtcbiAgICAgICAgICAgICAgICBhbGVydChcItCU0LDQvdC90YvQtSDRg9C00LDRh9C90L4g0YHQvtGF0YDQsNC90LXQvdGLLlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCLQntGI0LjQsdC60LAsINC00LDQvdC90YvQtSDQvdC10LHRi9C70Lgg0YHQvtGF0YDQsNC90LXQvdGLLlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpc0Z1bGxTY3JlZW4oY20pIHtcbiAgICByZXR1cm4gL1xcYkNvZGVNaXJyb3ItZnVsbHNjcmVlblxcYi8udGVzdChjbS5nZXRXcmFwcGVyRWxlbWVudCgpLmNsYXNzTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHdpbkhlaWdodCgpIHtcbiAgICByZXR1cm4gd2luZG93LmlubmVySGVpZ2h0IHx8IChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keSkuY2xpZW50SGVpZ2h0O1xufVxuXG5mdW5jdGlvbiBzZXRGdWxsU2NyZWVuKGNtLCBmdWxsKSB7XG4gICAgdmFyIHdyYXAgPSBjbS5nZXRXcmFwcGVyRWxlbWVudCgpLCBzY3JvbGwgPSBjbS5nZXRTY3JvbGxlckVsZW1lbnQoKTtcbiAgICBpZiAoZnVsbClcbiAgICB7XG4gICAgICAgIHdyYXAuY2xhc3NOYW1lICs9IFwiIENvZGVNaXJyb3ItZnVsbHNjcmVlblwiO1xuICAgICAgICBzY3JvbGwuc3R5bGUuaGVpZ2h0ID0gd2luSGVpZ2h0KCkgKyBcInB4XCI7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICAgIHdyYXAuY2xhc3NOYW1lID0gd3JhcC5jbGFzc05hbWUucmVwbGFjZShcIiBDb2RlTWlycm9yLWZ1bGxzY3JlZW5cIiwgXCJcIik7XG4gICAgICAgIHNjcm9sbC5zdHlsZS5oZWlnaHQgPSBcIlwiO1xuICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSBcIlwiO1xuICAgIH1cbiAgICBjbS5yZWZyZXNoKCk7XG59XG5cbnZhciBfZWRpdG9yID0ge1xuICAgIGNvZGVtaXJyb3I6IGZ1bmN0aW9uKGlkLCBtb2RlKVxuICAgIHtcbiAgICAgICAgdmFyIG9iamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcblxuICAgICAgICBpZiAobW9kZSA9PSAneG1sJylcbiAgICAgICAge1xuICAgICAgICAgICAgbW9kZSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInhtbFwiLFxuICAgICAgICAgICAgICAgIGFsaWduQ0RBVEE6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobW9kZSA9PSAnc3FsJylcbiAgICAgICAge1xuICAgICAgICAgICAgbW9kZSA9ICd0ZXh0L3gtbWFyaWFkYic7XG4gICAgICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWltZT0nKSA+IC0xKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZGUgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zdWJzdHIod2luZG93LmxvY2F0aW9uLmhyZWYuaW5kZXhPZignbWltZT0nKSArIDUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEob2JqZWN0LCBnZXRTZXR0aW5ncy5jb2RlbWlycm9yKHtcbiAgICAgICAgICAgIG1vZGU6IG1vZGUsXG4gICAgICAgICAgICBleHRyYUtleXM6IHtcbiAgICAgICAgICAgICAgICBcIkN0cmwtU1wiOiBmdW5jdGlvbihjbSkge1xuICAgICAgICAgICAgICAgICAgICBzYXZpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJDbWQtU1wiOiBmdW5jdGlvbihjbSkge1xuICAgICAgICAgICAgICAgICAgICBzYXZpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXCJDdHJsLVFcIjogXCJ0b2dnbGVDb21tZW50XCIsXG4gICAgICAgICAgICAgICAgXCJDbWQtUVwiOiBcInRvZ2dsZUNvbW1lbnRcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgfSxcbiAgICBpbml0OiBmdW5jdGlvbihpZCwgdHlwZSwgbW9kZSlcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YodGhpc1t0eXBlXSkgIT09ICd1bmRlZmluZWQnKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzW3R5cGVdKGlkLCBtb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn07Il19

'use strict';

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var d = document;

var css = function css(element, style) {
    for (var prop in style) {
        element.style[prop] = style[prop];
    }
};

var animate = function animate(opts, callback) {
    var start = new Date();
    var timer = setInterval(function () {
        var progress = (new Date() - start) / opts.duration;
        if (progress > 1) progress = 1;
        opts.step(progress);
        if (progress == 1) {
            if (callback) {
                callback.apply();
            }
            clearInterval(timer);
        }
    }, opts.delay || 20);

    return {
        stop: function stop() {
            clearInterval(timer);
        }
    };
};

var addClass = function addClass(element, classname) {
    var cn = element.className;
    if (cn.indexOf(classname) != -1) {
        return;
    }
    if (cn != '') {
        classname = ' ' + classname;
    }
    element.className = cn + classname;
};

var removeClass = function removeClass(element, classname) {
    var cn = element.className;
    var rxp = new RegExp("\\s?\\b" + classname + "\\b", "g");
    cn = cn.replace(rxp, '');
    element.className = cn;
};

function is_string(mixed_var) {
    return typeof mixed_var == 'string';
}

function is_numeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

var mapConteiner = function mapConteiner(type, mapid) {
    if (type === 'google') {
        googleMaps(mapid);
    } else if (type === 'yandex') {
        yandexMaps(mapid);
    }
};

function checkAll(element) {
    var checked = $(element).prop('checked');
    $('.check-all-spy').prop('checked', checked);
}

function yandexMaps(mapid) {
    var map = {
        link: null,
        mapid: 'map-conteiner-' + mapid,
        place: 'krasnodar',
        type: 'yandex#map', // 'yandex#map' 'yandex#satellite' 'yandex#hybrid' 'yandex#publicMap' 'yandex#publicMapHybrid'
        city: {
            'krasnodar': [45.09471716593029, 39.01589900000001],
            'moscow': [55.76, 37.64]
        },
        getBaloon: function getBaloon(coord) {
            return new ymaps.Placemark(coord, {}, {
                draggable: true
                //,
                //iconImageHref: '/images/myIcon.gif',
                //iconImageSize: [30, 42],
                //iconImageOffset: [-3, -42]
            });
        },
        draw: function draw(ymaps) {
            map.link = new ymaps.Map(this.mapid, {
                center: map.city[this.place],
                zoom: 12,
                type: map.type
            });

            map.link.controls.add('smallZoomControl', { right: 10, top: 15 }).add(new ymaps.control.ScaleLine()).add('searchControl', { left: 20, top: 20 });

            var dragBalloon = this.getBaloon(map.city[this.place]);

            map.link.events.add('click', function (e) {
                map.link.geoObjects.remove(dragBalloon);

                dragBalloon = map.getBaloon(e.get('coordPosition'));
                map.link.geoObjects.add(dragBalloon);

                map.setCoord(e.get('coordPosition'));
            });

            map.link.geoObjects.add(dragBalloon).events.add('dragend', function (e) {
                var object = e.get('target');
                var coords = object.geometry.getCoordinates();
                object.properties.set('balloonContent', coords);

                map.setCoord(coords);
            });
        },
        add: function add() {
            if (arguments.length == 1) {
                map.link.geoObjects.add(new ymaps.GeoObject({
                    geometry: {
                        type: "Point",
                        coordinates: arguments[0]
                    }
                }));
            } else {
                var collection = new ymaps.GeoObjectCollection();
                for (var i = 0; i < arguments.length; i++) {
                    collection.add(new ymaps.Placemark(arguments[i]));
                }
                map.link.geoObjects.add(collection);
            }
        }
    };

    ymaps.ready(function () {
        map.draw(ymaps);
    });
}

function googleMaps(mapid) {
    var map = new google.maps.Map(d.getElementById('map-conteiner-' + mapid), {
        zoom: 14,
        zoomControl: !1,
        panControl: !1,
        scrollwheel: !1,
        navigationControl: !1,
        mapTypeControl: !1,
        scaleControl: !1,
        draggable: !0,
        disableDoubleClickZoom: !0,
        center: new google.maps.LatLng(45.053548, 39.016056)
    });
}

var datepicker = function datepicker() {
    var _this = this;

    var $calendar = $('.calendar');

    $calendar.each(function (id, item) {
        var $closest = $(item).closest('.calendar');
        var $element = $closest.find('.calendar-input');
        var disabled = $element.is(':disabled');
        var timestamp = $element.data('timestamp') || false;
        var d_format = timestamp !== false ? 'DD.MM.YYYY' : $element.data('format') || 'DD.MM.YYYY';

        d_format = d_format.toLowerCase();

        if (!disabled) {
            $element.prop('date', "");
            $element.data('format', d_format);

            var $calendarItem = $element.datepicker({
                format: d_format,
                autoclose: true,
                container: $closest,
                language: ADMIN_LOCALE
            });

            $calendarItem.on('changeDate', function (ev) {
                var result = $(_this).data('date');

                if (timestamp !== false) {
                    result = new Date(result).getTime() / 1000;
                }

                $element.val($calendarItem.datepicker('getFormattedDate'));
            });

            if ($closest.find('.input-group-addon')) {
                $closest.find('.input-group-addon').on('click', function () {
                    $calendarItem.datepicker('show');
                });
            }
        }
    });
};

function selectize(selector) {
    var $selector = null;

    selector = selector || 'select';

    if (is_string(selector)) {
        $selector = $(selector);
    } else if (is_object(selector)) {
        $selector = selector;
    }

    $selector.chosen({
        width: "100%",
        allow_single_deselect: true,
        no_results_text: 'Не найдено!',
        disable_search_threshold: 10
    });
}

function changeRow(element) {
    var checked = $(element).prop('checked');

    if (checked) {
        $(element).closest('tr').find('td').addClass('ch');
    } else {
        $(element).closest('tr').find('td').removeClass('ch');
    }
}

function toggle_small_photo(id) {
    $("#" + id).toggle();
}

function removeSection(element, e, id, _self_) {
    e.preventDefault();
    if (confirm('Вы действительно хотите удалить?')) {
        id = parseInt(id);

        var x,
            section = [],
            tmp = $(element).val().split(',');
        for (x in tmp) {
            if (tmp[x] !== '' && parseInt(tmp[x]) !== id) {
                section.push(parseInt(tmp[x]));
            }
        }

        $(_self_).remove();
        $(element).val(section.length > 1 ? section.join(',') : section);
    }
    return false;
}

function slider(id, type, value, min, max, orientation) {
    var element = '#' + id;

    orientation = !orientation ? 'horizontal' : orientation;

    min = min || 0;
    max = max || 100;

    var values = value,
        connect = 'lower',
        behaviour = 'tap-drag';

    if (type == 'range') {
        behaviour = 'tap-drag';
        connect = true;
        values = [value[0], value[1]];
    }

    $(element).noUiSlider({
        animate: false,
        orientation: orientation,
        start: values,
        connect: connect,
        behaviour: behaviour,
        range: {
            'min': min,
            'max': max
        }
    });

    if (type == 'range') {
        $(element).Link('lower').to($(element + '-min'), null, wNumb({
            decimals: 0
        }));

        $(element).Link('upper').to($(element + '-max'), null, wNumb({
            decimals: 0
        }));
    } else {
        $(element).Link('lower').to($(element + '-value'), null, wNumb({
            decimals: 0
        }));
    }
}

function metaCounter() {
    $('.count-number').on('keyup', function () {
        var $block = $(this).closest('.count-number-block'),
            $counter = $block.find('.count-number-block-count'),
            recomend = parseInt($counter.data('recomend')) || '';

        $counter.html($(this).val().length + (recomend !== '' ? '/' + recomend : ''));

        if (recomend !== '' && $(this).val().length > recomend) {
            $counter.addClass('unlim');
        } else if ($counter.hasClass('unlim')) {
            $counter.removeClass('unlim');
        }
    });
}

function seoCrowl() {
    $("input[name='changefreq']").on('change', function () {
        if ($.trim($(this).val()) == 'fixed') {
            $('#changefreq_fixed').removeClass('hidden');
        } else {
            $('#changefreq_fixed').addClass('hidden');
        }
    });

    $("input[name='priority']").on('change', function () {
        if ($.trim($(this).val()) == 'fixed') {
            $('#priority_fixed').removeClass('hidden');
        } else {
            $('#priority_fixed').addClass('hidden');
        }
    });
}

function toggle_item(e, element, id, elclass) {
    e.preventDefault();
    $("#" + id).toggle();
    var $icon = $(element).find('.icon');

    if ($icon.hasClass(elclass[0])) {
        $icon.removeClass(elclass[0]);
        $icon.addClass(elclass[1]);
    } else {
        $icon.removeClass(elclass[1]);
        $icon.addClass(elclass[0]);
    }
}

function switch_type_fields(obj) {
    if (obj.checked === true) {
        $("#case2").hide();
        $("#case2 input").attr({ "disabled": true });
        $("#case1").show();
        $("#case1 input").attr({ "disabled": false });
    } else {
        $("#case1").hide();
        $("#case1 input").attr({ "disabled": true });
        $("#case2").show();
        $("#case2 input").attr({ "disabled": false });
    }
}

function show_tr(obj) {
    var val = $(obj).val();

    if (val == 10 || val == 11 || val == 12) $("#to_list").show();else $("#to_list").hide();
}

function translate_key(element) {
    $(element).val(PassGenJS.getPassword({
        symbols: 0,
        letters: random(14, 24),
        numbers: 0,
        lettersUpper: 0
    }));
}

function secret(element, length) {
    $(element).val(PassGenJS.getPassword({
        symbols: 0,
        letters: random(2, 4),
        numbers: random(2, 4),
        lettersUpper: random(3, 7)
    }));
}

function random(min, max) {
    min = min || 0;
    max = max || 100;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function token(length) {
    length = length || 8;

    var secret = '',
        chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

    for (i = 1; i < length; i++) {
        var c = Math.floor(Math.random() * chars.length + 1);
        secret += chars.charAt(c);
    }

    return secret;
}

function del_list_fields(id) {
    if (cp.dialog("Вы дейсвительно хотите удалить поле?")) {
        $("#tr" + id).remove();
        /*
        $.post( "/" + ADMIN_DIR + "/ajax/lists/",
             {
                 action: "remove",
                 id: id
             },
             function(data)
             {
                 $("#tr"+id).remove();
             } ,
             "json"
         )
         */
    }
    return false;
}

function add_list_fields() {
    field_counter++;
    str = '<tr id="tr' + field_counter + '">';
    str += '<td><input type="hidden" name="field_id[' + field_counter + ']" value="0" \/>';
    str += '<input type="text" name="field_name[' + field_counter + ']" class="bord padd ness" \/><\/td>';
    str += '<td><input type="text" name="field_sys_name[' + field_counter + ']" class="bord padd ness" \/><\/td>';
    str += '<td><select name="field_type[' + field_counter + ']" class="field_type ness" id="' + field_counter + '" onchange="select_type(this);">';
    $.each(arr_field_type, function (k, v) {
        if (k * 1) str += '<option value="' + k + '">' + v + '<\/option>';
    });
    str += '<\/select><\/td>';
    str += '<td class="addition"><\/td>';
    str += '<td><input type="text" name="f_ord[' + field_counter + ']" value="' + field_counter + '0" class="bord padd w60px r" \/><\/td>';
    str += '<td style="text-align:center"><input type="checkbox" name="in_list[' + field_counter + ']" \/><\/td>';
    str += '<td class="actions c"><a href="#" class="ctr_a ctr_del margin" title="Удалить" onclick="del_list_fields(' + field_counter + ');return false;"><\/a><\/td>';
    str += '<\/tr>';

    $("#add_btn").before(str);
}

function add_list_fields_list() {
    field_counter++;

    var str = ['<tr id="tr' + field_counter + '">', '<td>', '<input type="hidden" name="field_id[' + field_counter + ']" value="0">', '<input name="var[' + field_counter + ']" placeholder="Например: Краснодарский край">', '</td>', '<td><input name="value[' + field_counter + ']" placeholder="Например: 23"></td>', '<td><label class="controll"><input type="checkbox" class="controll__input" value="' + field_counter + '" name="default[' + field_counter + ']"><span class="controll__visible controll__visible_checkbox"></span></label></td>', '<td><input name="ord[' + field_counter + ']" value="' + field_counter + '0" class="ord integer reducing-trigger"></td>', '<td class="tac"><a href="#" class="icon icon-delete remove-trigger" title="Удалить" onclick="del_list_fields(' + field_counter + ');return false;"></a></td>', '</tr>'].join('');

    $("#add_btn").before(str);
}

function del_fields(numb) {
    field_counter--;
    $("#tr" + numb).remove();
}

function add_fields() {
    field_counter++;
    var select = '',
        k = '';

    for (k in arr_field_type) {
        if (typeof arr_field_type[k] == 'string') {
            select += '<option value="' + k + '">' + arr_field_type[k] + '</option>';
        }
    }

    var str = ['<tr id="tr' + field_counter + '">', '<td class="va_t"><input name="f_name[' + field_counter + ']" class="ness"></td>', '<td class="va_t"><input name="f_sys_name[' + field_counter + ']" class="ness"></td>', '<td class="va_t"><select name="f_type[' + field_counter + ']" class="f_type ness" data-placeholder="Тип поля" id="fieldtype_' + field_counter + '" onchange="select_type(this)">', select, '</select></td>', '<td class="addition va_t">' + get_addition('input', field_counter) + '</td>', '<td class="va_t"><input name="f_ord[' + field_counter + ']" value="' + field_counter + '0"></td>', '<td class="va_m tac"><label class="controll controll_single"><input type="checkbox" class="controll__input" value="1" name="f_in_list[' + field_counter + ']"><span class="controll__visible controll__visible_checkbox"></span></label></td>', '<td class="va_m tac"><label class="controll controll_single"><input type="checkbox" class="controll__input" value="1" name="f_index[' + field_counter + ']"><span class="controll__visible controll__visible_checkbox"></span></label></td>', '<td class="va_m tac"><label class="controll controll_single"><input type="checkbox" class="controll__input" value="1" name="f_unique[' + field_counter + ']"><span class="controll__visible controll__visible_checkbox"></span></label></td>', '<td class="tac"><a href="#" class="icon icon-delete remove-trigger" title="Удалить" onclick="del_fields(' + field_counter + ');return false;"></a></td>', '</tr>'].join('');

    $("#add_btn").before(str);

    selectize('#fieldtype_' + field_counter);
}

function add_fields_list() {
    field_counter++;

    str = ['<tr id="tr' + field_counter + '">', '<td><input name="var[' + field_counter + ']"></td>', '<td><input name="value[' + field_counter + ']"></td>', '<td><input type="checkbox" name="default[' + field_counter + ']"></td>', '<td><input name="ord[' + field_counter + ']" value="' + field_counter + '0"></td>', '<td class="tac"><a href="#" class="icon icon-delete remove-trigger" title="Удалить" onclick="del_fields(' + field_counter + ');return false;"></a></td>', '</tr>'].join('\n');

    $("#add_btn").before(str);
}

function select_type(obj) {
    var row_numd = 1 * $(obj).attr("id").split('_')[1],
        append_obj = $("#tr" + row_numd + " .addition"),
        str = get_addition(obj.value.split(':')[0], row_numd);

    $(append_obj).empty().append(str || '');

    selectize();
}

function get_addition(type, index) {
    var tmp = [],
        str = [];

    if (['input', 'cost', 'int', 'hidden', 'document', 'timestamp', 'email', 'list', 'autocomplete', 'select', 'float', 'system', 'multiselect', 'datetime'].indexOf(type) >= 0) {
        str = ['<div class="group">', '<label class="group__item"><input type="radio" class="group__item__rb" name="f_width[' + index + ']" value="25"><span class="group__item__style"></span><span class="group__item__text">25%</span></label>', '<label class="group__item"><input type="radio" class="group__item__rb" name="f_width[' + index + ']" value="50"><span class="group__item__style"></span><span class="group__item__text">50%</span></label>', '<label class="group__item"><input type="radio" class="group__item__rb" name="f_width[' + index + ']" value="75"><span class="group__item__style"></span><span class="group__item__text">75%</span></label>', '<label class="group__item"><input type="radio" class="group__item__rb" name="f_width[' + index + ']" value="100" checked><span class="group__item__style"></span><span class="group__item__text">100%</span></label>', '</div>'];

        if (['list', 'autocomplete', 'select', 'radio', 'multiselect', 'checkbox', 'system'].indexOf(type) >= 0) {
            str.push('<div class="cb mb10"></div>');
        }
    }

    if (type == 'hidden') {
        str.push('<input value="" name="f_hidden_default[' + index + ']" placeholder="Значение по умолчанию">');
    }

    if (type == 'system') {
        str.push('<input value="" name="f_binding[' + index + ']" placeholder="Например поле (title)">');
    }

    if (type == 'date') {
        tmp = ['<div class="help-cover">', '<input name="f_date_format[' + index + ']" value="DD.MM.YYYY" placeholder="Формат даты">', '<div class="tooltip tooltip-down">', 'D — день,<br>', 'M — месяц (без нуля впереди)<br>', 'DD, MM — день и месяц с нулём впереди для значений от 1 до 9<br>', 'YY — 2-символьное обозначение года<br>', 'YYYY — 4-символьное обозначение года (год пишется полностью)', '</div>', '</div>'];

        str.push(tmp.join('\n'));
    }

    if (['file', 'image'].indexOf(type) >= 0) {
        tmp = ['<div class="option-group option-combo">', '<label><input type="radio" name="f_file_count[' + index + ']" value="0"><span class="option">Один файл</span></label>', '<label><input type="radio" name="f_file_count[' + index + ']" value="1" checked><span class="option">Много файлов</span></label>', '</div>'];

        if (type == 'image') {
            tmp.push('<div class="cb mb10"></div>');
        }

        str.push(tmp.join('\n'));
    }

    if (['gallery', 'image'].indexOf(type) >= 0 && typeof CONFIGURE !== 'undefined' && typeof CONFIGURE.image !== 'undefined') {
        var tmp0 = [],
            tmp1 = [],
            tmp2 = [],
            x,
            checked = '';
        tmp0 = ['<div class="js-size-list">', '<table class="table-simple">', '<col><col><col><col width="57"><col width="20">', '<thead>', '<tr>', '<td class="h">Префикс</td>', '<td class="h">Ширина</td>', '<td class="h">Высота</td>', '<td class="h">Метод</td>', '<td class="h"></td>', '</tr>', '</thead>', '<tbody>'];

        tmp1 = template('tpl_image_row', {
            index: 0,
            button: true,
            iteration: index
        });

        tmp2 = ['</tbody>', '</table>', '<a href="#" class="add-size js-add-size" data-iteration="{$smarty.foreach.i.iteration}"><i class="icon icon-plus-square"></i> Добавить размер</a>', '</div>'];

        str.push(tmp0.join('\n'));
        str.push(tmp1);
        str.push(tmp2.join('\n'));
    }

    if (['embedded'].indexOf(type) >= 0) {
        if (!is_undefined(MODULE_LIST)) {
            var select = '',
                m;

            for (m in MODULE_LIST) {
                select += '<option value="' + m + '">' + MODULE_LIST[m].name + '</option>';
            }
        }

        tmp = ['<div class="j-select-wrapper">', '<div class="mb5">', '<select name="f_module[' + index + ']" data-placeholder="Выбрать модуль" class="j-select-choosen">', '<option value="0">---</option>', select, '</select>', '</div>', '<div class="clearfix j-select-container">', '<select name="f_fields[' + index + '][]" multiple data-placeholder="Выбрать" disabled></select>', '</div>', '</div>'];

        str.push(tmp.join('\n'));
    }

    if (['list', 'section', 'autocomplete', 'select', 'radio', 'checkbox', 'multiselect'].indexOf(type) >= 0) {
        tmp = ['<div class="cb clearfix">', '<label class="controll"><input type="checkbox" class="controll__input" value="1" onchange="switch_types(this)" name="f_use_table_list[' + index + ']"><span class="controll__visible controll__visible_checkbox"></span><span class="controll__text">привязать к `#__mdd_lists`</span></label>', '<div class="case case0">', '<input name="f_table_name[' + index + ']" value="" class="mb5" placeholder="Название таблицы (#_news)">', '<input name="f_table_field[' + index + ']" value="" placeholder="Поле (title)">', '</div>', '<div class="case case1 hidden">', '<input name="f_table_list[' + index + ']" disabled placeholder="BIND списка" value="">', '</div>', '</div>'];

        str.push(tmp.join('\n'));
    }

    if (['range', 'slider'].indexOf(type) >= 0) {
        tmp = ['<div class="-col">', '<div class="-left">', '<input name="f_range[' + index + '][min]" value="" placeholder="Min" class="integer">', '</div>', '<div class="-right">', '<input name="f_range[' + index + '][max]" value="" placeholder="Max" class="integer">', '</div>', '</div>'];

        str.push(tmp.join('\n'));
    }

    if (type == 'editor' && typeof CONFIGURE !== 'undefined' && typeof CONFIGURE.editor !== 'undefined') {
        tmp = [];
        tmp.push('<div class="option-group option-combo">');

        var x,
            checked = '';

        for (x in CONFIGURE.editor) {
            checked = '';

            if (typeof CONFIGURE.editor[x]['default'] !== 'undefined' && CONFIGURE.editor[x]['default'] == 1) {
                checked = ' checked';
            }

            tmp.push('<label><input type="radio" name="f_editor[' + index + ']" value="' + CONFIGURE.editor[x]['system'] + '" ' + checked + '><span class="option">' + CONFIGURE.editor[x]['name'] + '</span></label>');
        }

        tmp.push('</div>');

        if (typeof CONFIGURE !== 'undefined' && typeof CONFIGURE.editor_mode !== 'undefined') {
            tmp.push('<div class="cb mb10"></div>');

            tmp.push('<div class="option-group">');
            for (x in CONFIGURE.editor_mode) {
                tmp.push('<label><input type="radio" name="f_editor_mode[' + index + ']" value="' + CONFIGURE.editor_mode[x] + '"><span class="option">' + CONFIGURE.editor_mode[x] + '</span></label>');
            }

            tmp.push('</div>');
        }

        str.push(tmp.join('\n'));
    }

    if (type == 'redactor' && typeof CONFIGURE !== 'undefined' && typeof CONFIGURE.redactor !== 'undefined') {
        tmp = [];
        tmp.push('<div class="group">');

        var x,
            checked = '';

        for (x in CONFIGURE.redactor) {
            if (typeof CONFIGURE.redactor[x]['name'] !== 'undefined' && typeof CONFIGURE.redactor[x]['system'] !== 'undefined') {
                checked = '';

                if (typeof CONFIGURE.redactor[x]['default'] !== 'undefined' && CONFIGURE.redactor[x]['default'] == 1) {
                    checked = ' checked';
                }

                tmp.push('<label class="group__item"><input type="radio" class="group__item__rb" name="f_redactor[' + index + ']" value="' + CONFIGURE.redactor[x]['system'] + '"' + checked + '><span class="group__item__style"></span><span class="group__item__text">' + CONFIGURE.redactor[x]['name'] + '</span></label>');
            }
        }

        tmp.push('</div>');

        str.push(tmp.join('\n'));
    }

    return str.join('\n');
}

function switch_types(obj) {
    p_obj = $(obj).closest('td');
    if (obj.checked) {
        $(".case1", p_obj).show();
        $(".case1 input", p_obj).attr({ "disabled": false });
        $(".case0", p_obj).hide();
        $(".case0 input", p_obj).attr({ "disabled": true });
    } else {
        $(".case0", p_obj).show();
        $(".case0 input", p_obj).attr({ "disabled": false });
        $(".case1", p_obj).hide();
        $(".case1 input", p_obj).attr({ "disabled": true });
    }
}

function humanSize(bytes) {
    if (typeof bytes !== 'number') {
        return '';
    }

    if (bytes >= 1000000000) {
        return (bytes / 1000000000).toFixed(2) + ' Гб';
    }

    if (bytes >= 1000000) {
        return (bytes / 1000000).toFixed(2) + ' Мб';
    }

    if (bytes >= 1024) {
        return (bytes / 1000).toFixed(2) + ' Кб';
    }

    return bytes + ' б';
}

function addExtendet() {
    $.post("/" + ADMIN_DIR + "/ajax/vote/", {
        action: $("#action").attr("value"),
        id: $("#id").attr("value"),
        title: $("#title").attr("value"),
        ord: $("#ord").attr("value"),
        visible: $("#VoteAddQuestions input:radio[name=visible]:checked").val()
    }, onAjaxSuccessAdd);
    function onAjaxSuccessAdd(data) {
        //
        var vis;
        if ($("#VoteAddQuestions input:radio[name=visible]:checked").val() == 1) vis = "Да";else vis = "Нет";

        var inner = '<tr id="tr_' + data + '">';
        inner += '<td>';
        inner += '<input name="parent_id_' + data + '" id="parent_id_' + data + '" value="2" type="hidden">';
        inner += '<input name="id_' + data + '" id="id_' + data + '" value="' + data + '" type="hidden">';
        inner += '<div id="title_' + data + '"><b>' + $("#title").attr("value") + '</b></div>';
        inner += '<div id="title_i_' + data + '" style="display: none;">';
        inner += '<input name="title_' + data + '" value="' + $("#title").attr("value") + '" class="bord padd w100" id="title_input_' + data + '" type="text">';
        inner += '<p align="right">';
        inner += '<a href="javascript:;" onclick="saveExtendet(\'' + data + '\');">Сохранить</a> | ';
        inner += '<a href="javascript:;" onclick="cancelExtendet(\'' + data + '\');">Отмена</a> ';
        inner += '</p>';
        inner += '</div>';
        inner += '</td>';
        inner += '<td>';
        inner += '<div id="ord_' + data + '"><b>' + $("#ord").attr("value") + '</b></div>';
        inner += '<div id="ord_i_' + data + '" style="display: none;">';
        inner += '<input name="ord_' + data + '" value="' + $("#ord").attr("value") + '" style="width: 100%;" class="bord padd w100" id="ord_input_' + data + '" type="text">';
        inner += '</div>';
        inner += '</td>';

        inner += '<td align="center">';
        inner += '<div id="visible_' + data + '"><b>' + vis + '</b></div>';
        inner += '<div id="visible_i_' + data + '" style="display: none;">';
        inner += '<input name="visible_' + data + '" value="1" checked="checked" onclick="$(\'#vis_' + data + '\').val(\'1\');" id="visible_input_' + data + '_1" type="radio">Да &nbsp;&nbsp;';
        inner += '<input name="visible_' + data + '" value="0" onclick="$(\'#vis_' + data + '\').val(\'0\');" id="visible_input_' + data + '_0" type="radio">Нет';
        inner += '<input name="vis_' + data + '" id="vis_' + data + '" value="" type="hidden">';
        inner += '</div>';
        inner += '</td>';
        inner += '<td>';
        inner += '<a href="#" class="icon icon-edit" onclick="editExtendet(\'' + data + '\')"></a>';
        inner += '<a href="#" class="icon icon-delete remove-trigger" onClick="delExtendet(\'' + data + '\')"></a>';
        inner += '</td>';
        inner += '</tr>';

        //  INSERT NEW FIELD
        $(inner).insertBefore("#ajax_add_form");

        //  RESET FORMS ELEMENTS
        $("#title").attr({ value: "" });
        $("#ord").attr({ value: "" });

        //  HIDE FORM
        $("#ajax_add_form").hide();
    }
}
function saveExtendet(id) {
    $.post("/" + ADMIN_DIR + "/ajax/vote/", {
        action: "update",
        id: $("#id_" + id).attr("value"),
        parent_id: $("#parent_id_" + id).attr("value"),
        title: $("#title_input_" + id).attr("value"),
        ord: $("#ord_input_" + id).attr("value"),
        visible: $("#VoteAddQuestions input:radio[name=visible_" + id + "]:checked").val()
    }, onAjaxSuccessSave);
    function onAjaxSuccessSave(data) {
        var vis;
        if ($("#vis_" + id).val() == 1) vis = "Да";else vis = "Нет";
        $("#title_" + id).html("<b>" + $("#title_input_" + id).attr("value") + "</b>");
        $("#ord_" + id).html($("#ord_input_" + id).attr("value"));
        $("#visible_" + id).html(vis);

        $("#title_" + id).show();
        $("#ord_" + id).show();
        $("#visible_" + id).show();
        $("#title_i_" + id).hide();
        $("#ord_i_" + id).hide();
        $("#visible_i_" + id).hide();
    }
}
//
function editExtendet(id) {
    $("#title_" + id).hide();
    $("#ord_" + id).hide();
    $("#visible_" + id).hide();
    $("#title_i_" + id).show();
    $("#ord_i_" + id).show();
    $("#visible_i_" + id).show();
}
//
function delExtendet(id) {
    if (cp.dialog("Вы действительно хотите удалить запись?")) {
        $.post("/" + ADMIN_DIR + "/ajax/vote/", {
            action: "del",
            id: $("#id_" + id).val()
        }, onAjaxSuccessDel);
    }
}
function onAjaxSuccessDel(data) {
    $("#tr_" + data).remove();
}
//
function cancelExtendet(id) {
    $("#title_" + id).show();
    $("#ord_" + id).show();
    $("#visible_" + id).show();
    $("#title_i_" + id).hide();
    $("#ord_i_" + id).hide();
    $("#visible_i_" + id).hide();
}

function onAjaxSuccess(data) {
    alert(data);
}

function editTitle(id, title) {
    if (typeof title == 'undefined') {
        var title = $('#ftitle_' + id).text();
    }

    var name = prompt('Введите новое имя', title);

    if (name != '' && name != title && name !== null) {
        $.ajax({
            url: '/' + ADMIN_DIR + '/meta/filename',
            type: "post",
            data: {
                id: id,
                name: name
            },
            dataType: 'JSON',
            success: function success(response) {
                if (response.status === true) {
                    $('#ftitle_' + id).html(name);
                }
            }
        });
    }

    return false;
}

function editVisible(id, visible) {
    visible = visible == 1 ? 0 : 1;

    $.ajax({
        url: '/' + ADMIN_DIR + '/meta/filevisible',
        type: "post",
        data: {
            id: id,
            visible: visible
        },
        dataType: 'JSON',
        success: function success(response) {
            if (response.status === true) {
                $('#fvisible_' + id).removeClass('icon-eye icon-eye-off');

                if (visible == 1) {
                    $('#fvisible_' + id).addClass('icon-eye');
                } else {
                    $('#fvisible_' + id).addClass('icon-eye-off');
                }
            }
        }
    });

    return false;
}

function editOrd(id, ord) {
    var neword = prompt('Порядок', ord);

    if (!neword) return false;

    if (neword != '' && neword != ord) {
        $.post('/' + ADMIN_DIR + '/ajax/meta/', { action: "newfileord", neword: neword, id: id }, function (data) {
            if (data == 1) {
                $('#ordfile_' + id).html(neword);
            }
        });
    }
    return false;
}

function ajax_vis_toggle(obj, id, mod_id) {
    $(obj).append('<i class="loading"></i>');

    $.post('/' + ADMIN_DIR + '/ajax/structure/', { act: "toggle_visible", mod_id: mod_id, id: id }, function (data) {
        if (data == 1) {
            $(obj).toggleClass("icon-eye").toggleClass("icon-eye-off").html('');
        }
    });

    return !1;
}

function show_tooltips(id) {
    $("#" + id).toggle();
}

function my_uncheck() {
    $(".access").each(function () {
        $(this).attr({ checked: '' });
    });
}

function CheckAndSubmit(id) {
    var flag = true;
    $("#" + id + " .ness").each(function () {
        if ($(this).val() == "") {
            $(this).focus().addClass("error");
            flag = false;
            return false;
        } else {
            $(this).removeClass("error");
        }
    });
    if (flag) $("#" + id).submit();else return false;
}

function setSort(obj, cookie_name) {
    value = $(obj).val();
    setCookie(cookie_name, value);
    location.href = location.href;
}

function form_submit(id, param) {
    if (param == "save") $("#" + id).submit();
    if (param == "apply") $("#" + id).submit();else $("#" + id).submit();
}

function openwin(img, w, h, title) {
    if (hwnd != null) hwnd.close();
    hwnd = window.open(img, "", "toolbar=no , location=no , directories=no , resizable=no , width=" + w + " , height=" + h);
    hwnd.document.open();
    hwnd.document.write("<html>");
    hwnd.document.write("<head>");
    hwnd.document.write("<title>" + title + "</title>");
    hwnd.document.write("</head>");
    hwnd.document.write("<body bgcolor=#ffffff bottommargin=0 leftmargin=0 marginheight=0 marginwidth=0 rightmargin=0 topmargin=0 style='border:0px;'>");
    hwnd.document.write("<table align=center width=100% height=100% cellspacing=0 cellpadding=0 border=0>");
    hwnd.document.write("<tr><td><img src='" + img + "' border=0></td></tr>");
    hwnd.document.write("</table></body></html>");
    hwnd.document.close();
}

function openwin_text(url, w, h) {
    window.open(url, "", "toolbar=no , location=no , directories=no , resizable=no , scrollbars=no , width=" + w + " , height=" + h);
}

function ltrim(str) {
    for (var k = 0; k < str.length && isWhitespace(str.charAt(k)); k++) {}
    return str.substring(k, str.length);
}

function rtrim(str) {
    for (var j = str.length - 1; j >= 0 && isWhitespace(str.charAt(j)); j--) {}
    return str.substring(0, j + 1);
}

function trim(str) {
    str = str.replace(/\s{2,}/g, ' ');
    return ltrim(rtrim(str));
}

function isWhitespace(charToCheck) {
    var whitespaceChars = " \t\n\r\f";
    return whitespaceChars.indexOf(charToCheck) != -1;
}

function transliterate(string, url) {
    string = trim(string.toLowerCase());

    if (string != '') {
        var _char_map;

        var char_map = {},
            test = [],
            result = '',
            x;

        char_map = (_char_map = {
            // Latin
            'à': 'a', 'á': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a', 'å': 'a', 'æ': 'ae', 'ç': 'c',
            'è': 'e', 'é': 'e', 'ê': 'e', 'ë': 'e', 'ì': 'i', 'í': 'i', 'î': 'i', 'ï': 'i',
            'ð': 'd', 'ñ': 'n', 'ò': 'o', 'ó': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o', 'ő': 'o',
            'ø': 'o', 'ù': 'u', 'ú': 'u', 'û': 'u', 'ü': 'u', 'ű': 'u', 'ý': 'y', 'þ': 'th',
            'ÿ': 'y',

            // Greek           
            'α': 'a', 'β': 'b', 'γ': 'g', 'δ': 'd', 'ε': 'e', 'ζ': 'z', 'η': 'h', 'θ': '8',
            'ι': 'i', 'κ': 'k', 'λ': 'l', 'μ': 'm', 'ν': 'n', 'ξ': '3', 'ο': 'o', 'π': 'p',
            'ρ': 'r', 'σ': 's', 'τ': 't', 'υ': 'y', 'φ': 'f', 'χ': 'x', 'ψ': 'ps', 'ω': 'w',
            'ά': 'a', 'έ': 'e', 'ί': 'i', 'ό': 'o', 'ύ': 'y', 'ή': 'h', 'ώ': 'w', 'ς': 's',
            'ϊ': 'i', 'ΰ': 'y', 'ϋ': 'y', 'ΐ': 'i',

            // Turkish
            'ş': 's', 'ı': 'i' }, _defineProperty(_char_map, '\xE7', 'c'), _defineProperty(_char_map, '\xFC', 'u'), _defineProperty(_char_map, '\xF6', 'o'), _defineProperty(_char_map, 'ğ', 'g'), _defineProperty(_char_map, 'а', 'a'), _defineProperty(_char_map, 'б', 'b'), _defineProperty(_char_map, 'в', 'v'), _defineProperty(_char_map, 'г', 'g'), _defineProperty(_char_map, 'д', 'd'), _defineProperty(_char_map, 'е', 'e'), _defineProperty(_char_map, 'ё', 'yo'), _defineProperty(_char_map, 'ж', 'zh'), _defineProperty(_char_map, 'з', 'z'), _defineProperty(_char_map, 'и', 'i'), _defineProperty(_char_map, 'й', 'j'), _defineProperty(_char_map, 'к', 'k'), _defineProperty(_char_map, 'л', 'l'), _defineProperty(_char_map, 'м', 'm'), _defineProperty(_char_map, 'н', 'n'), _defineProperty(_char_map, 'о', 'o'), _defineProperty(_char_map, 'п', 'p'), _defineProperty(_char_map, 'р', 'r'), _defineProperty(_char_map, 'с', 's'), _defineProperty(_char_map, 'т', 't'), _defineProperty(_char_map, 'у', 'u'), _defineProperty(_char_map, 'ф', 'f'), _defineProperty(_char_map, 'х', 'h'), _defineProperty(_char_map, 'ц', 'c'), _defineProperty(_char_map, 'ч', 'ch'), _defineProperty(_char_map, 'ш', 'sh'), _defineProperty(_char_map, 'щ', 'sch'), _defineProperty(_char_map, 'ъ', ''), _defineProperty(_char_map, 'ы', 'y'), _defineProperty(_char_map, 'ь', ''), _defineProperty(_char_map, 'э', 'e'), _defineProperty(_char_map, 'ю', 'yu'), _defineProperty(_char_map, 'я', 'ya'), _defineProperty(_char_map, 'є', 'ye'), _defineProperty(_char_map, 'і', 'i'), _defineProperty(_char_map, 'ї', 'yi'), _defineProperty(_char_map, 'ґ', 'g'), _defineProperty(_char_map, 'č', 'c'), _defineProperty(_char_map, 'ď', 'd'), _defineProperty(_char_map, 'ě', 'e'), _defineProperty(_char_map, 'ň', 'n'), _defineProperty(_char_map, 'ř', 'r'), _defineProperty(_char_map, 'š', 's'), _defineProperty(_char_map, 'ť', 't'), _defineProperty(_char_map, 'ů', 'u'), _defineProperty(_char_map, 'ž', 'z'), _defineProperty(_char_map, 'ą', 'a'), _defineProperty(_char_map, 'ć', 'c'), _defineProperty(_char_map, 'ę', 'e'), _defineProperty(_char_map, 'ł', 'l'), _defineProperty(_char_map, 'ń', 'n'), _defineProperty(_char_map, '\xF3', 'o'), _defineProperty(_char_map, 'ś', 's'), _defineProperty(_char_map, 'ź', 'z'), _defineProperty(_char_map, 'ż', 'z'), _defineProperty(_char_map, 'ā', 'a'), _defineProperty(_char_map, '\u010D', 'c'), _defineProperty(_char_map, 'ē', 'e'), _defineProperty(_char_map, 'ģ', 'g'), _defineProperty(_char_map, 'ī', 'i'), _defineProperty(_char_map, 'ķ', 'k'), _defineProperty(_char_map, 'ļ', 'l'), _defineProperty(_char_map, 'ņ', 'n'), _defineProperty(_char_map, '\u0161', 's'), _defineProperty(_char_map, 'ū', 'u'), _defineProperty(_char_map, '\u017E', 'z'), _char_map);

        // Очищаем от лишних символов

        result = string.replace(/[^a-zа-я0-9]/gi, '-');

        if (url == 'cyrillic') {
            result = decodeURIComponent(result);
        } else if (url == 'translate') {
            for (x in char_map) {
                result = result.replace(RegExp(x, 'g'), char_map[x]);
            }
            // result = result.replace(RegExp(x, 'g'), char_map[x]);
        } else {
            for (x in char_map) {
                result = result.replace(RegExp(x, 'g'), char_map[x]);
            }
        }

        // Очищаем от лишних дефисов

        test = result.split('');

        if (test[0] == '-') {
            result = result.slice(1);
        }

        if (test[test.length - 1] == '-') {
            result = result.slice(0, -1);
        }

        string = result;
    }

    return redouble(string);
}

function binding(name, element) {
    $('body').on('keyup blur keypress', 'input[name="' + name + '"]', function () {
        if (this.value !== '') {
            var $input = $('input[name="' + element + '"]');
            if (!$input.prop('readonly')) {
                $input.val(transliterate(this.value, URL_TRANSLATE));
            }
        }
    });
}

function redouble(string) {
    string = string.replace('__', '_');
    string = string.replace('_-_', '_');
    string = string.replace('--', '-');

    if (string.indexOf('__') > -1) {
        return redouble(string);
    }

    if (string.substr(0, 1) == '_' && string.length > 1) {
        string = string.substr(1, string.length);
    }

    return string;
}

function ajax_toggle_group(obj, id) {
    var visible = 0;

    if ($(obj).hasClass('icon-eye-off')) {
        visible = 1;
    } else {
        visible = 0;
    }

    $(obj).append('<i class="loading"></i>');

    $.post('/' + ADMIN_DIR + '/ajax/modules/', { action: "devisible", id: id, visible: visible }, function (data) {
        if (data == 1) {
            if ($(obj).hasClass('icon-eye-off')) {
                $(obj).removeClass('icon-eye-off').addClass('icon-eye').html('');
            } else {
                $(obj).removeClass('icon-eye').addClass('icon-eye-off').html('');
            }
        }
    });

    return false;
}

function toggle_menu(obj, id) {
    $(obj).toggleClass("minus").toggleClass("plus").parent();
    $("#item" + id).toggle();
}

function toggle_small_photo(id) {
    $("#" + id).toggle();
}

function hideField(id) {
    title = $("#docs_" + id + " .title_in").val();
    ord = $("#docs_" + id + " .ord_in").val();

    $("#docs_" + id + " .title_f").empty().append(title);
    $("#docs_" + id + " .ord_f").empty().append(ord);
    $("#docs_" + id + " .but_save").hide();
    $("#docs_" + id + " .ctr_edit").show();
}

function EditDocs(id) {
    $("#docs_" + id + " .but_save").show();
    $("#docs_" + id + " .ctr_edit").hide();

    curr_value = $("#docs_" + id + " .title_f").text();
    $("#docs_" + id + " .title_f").empty().append("<input type='text' value='" + curr_value + "' name='title' class='bord padd w100 title_in' />");
    curr_value = $("#docs_" + id + " .ord_f").text();
    $("#docs_" + id + " .ord_f").empty().append("<input type='text' value='" + curr_value + "' name='ord' class='bord padd w20 ord_in' />");

    $("#docs_" + id + " .title_in").focus();
    return false;
}

function SaveDocs(id) {
    title = $("#docs_" + id + " .title_in").val();
    ord = $("#docs_" + id + " .ord_in").val();

    if (!title) {
        alert("Пустое имя документа");
        hideField(id);
    }

    $.post('/' + ADMIN_DIR + '/ajax/document/', {
        id: "document_edit",
        docsid: id,
        title: title,
        ord: ord
    }, function (data) {
        alert('Данные обновлены');
        hideField(id);
    });
    return false;
}

function DelDocs(id) {
    if (cp.dialog('Вы действительно хотите удалить?')) {
        $.post('/' + ADMIN_DIR + '/ajax/document/', {
            id: "document_del",
            docsid: id
        }, function (data) {
            if (data > 0) {
                $("#docs_" + id).hide();
            } else alert('ошибка обновления');
        });
    }
    return false;
}

function page_update(item_id) {
    $.post('/' + ADMIN_DIR + '/ajax/document/', {
        id: "update", post_id: item_id
    }, function (data) {
        var json = eval("(" + data + ")");
        parseMsg(json, "file_docs");
    });
    return false;
}

function parseMsg(msg, obj) {
    $("#" + obj + " .uploadfiles").empty();
    $("#" + obj + " input:file").attr({ "value": "" });

    str = '<table style="margin-bottom:10px;width:80%"><tr>\n<td class="h w100">Документ</td>\n<td class="h">Размер</td>\n<td class="h">Удалить</td></tr>\n';
    var i = 0;
    $.each(msg, function (k, v) {
        if (i % 2 != 0) odd = "odd ";else odd = "";
        str += '<tr>\n<td class="' + odd + '"><a href="' + v.sys_name + '" title="" target="_blank">' + v.title + '</a></td>\n';
        str += '<td class="' + odd + 'r"> ' + v.size + '</td>\n';
        str += '<td class="actions"><a href="#" onclick="return Module.ajaxFileDelete(' + v.id + ',\'' + obj + '\');" class="ctr_a ctr_del margin" title="Удалить" onclick="return confirm(\'Вы действительно хотите удалить?\')"></a></td>\n</tr>\n';
        i++;
    });
    str += '</table>';
    $("#" + obj + " .uploadfiles").append(str);
}

function ajaxFileDocsUpload(docs_group_id) {}

function screening(str) {
    var reg = /"/g;
    var result = str.replace(reg, "&quot;");

    return result;
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiXSwibmFtZXMiOlsiZCIsImRvY3VtZW50IiwiY3NzIiwiZWxlbWVudCIsInN0eWxlIiwicHJvcCIsImFuaW1hdGUiLCJvcHRzIiwiY2FsbGJhY2siLCJzdGFydCIsIkRhdGUiLCJ0aW1lciIsInNldEludGVydmFsIiwicHJvZ3Jlc3MiLCJkdXJhdGlvbiIsInN0ZXAiLCJhcHBseSIsImNsZWFySW50ZXJ2YWwiLCJkZWxheSIsInN0b3AiLCJhZGRDbGFzcyIsImNsYXNzbmFtZSIsImNuIiwiY2xhc3NOYW1lIiwiaW5kZXhPZiIsInJlbW92ZUNsYXNzIiwicnhwIiwiUmVnRXhwIiwicmVwbGFjZSIsImlzX3N0cmluZyIsIm1peGVkX3ZhciIsImlzX251bWVyaWMiLCJuIiwiaXNOYU4iLCJwYXJzZUZsb2F0IiwiaXNGaW5pdGUiLCJtYXBDb250ZWluZXIiLCJ0eXBlIiwibWFwaWQiLCJnb29nbGVNYXBzIiwieWFuZGV4TWFwcyIsImNoZWNrQWxsIiwiY2hlY2tlZCIsIiQiLCJtYXAiLCJsaW5rIiwicGxhY2UiLCJjaXR5IiwiZ2V0QmFsb29uIiwiY29vcmQiLCJ5bWFwcyIsIlBsYWNlbWFyayIsImRyYWdnYWJsZSIsImRyYXciLCJNYXAiLCJjZW50ZXIiLCJ6b29tIiwiY29udHJvbHMiLCJhZGQiLCJyaWdodCIsInRvcCIsImNvbnRyb2wiLCJTY2FsZUxpbmUiLCJsZWZ0IiwiZHJhZ0JhbGxvb24iLCJldmVudHMiLCJlIiwiZ2VvT2JqZWN0cyIsInJlbW92ZSIsImdldCIsInNldENvb3JkIiwib2JqZWN0IiwiY29vcmRzIiwiZ2VvbWV0cnkiLCJnZXRDb29yZGluYXRlcyIsInByb3BlcnRpZXMiLCJzZXQiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJHZW9PYmplY3QiLCJjb29yZGluYXRlcyIsImNvbGxlY3Rpb24iLCJHZW9PYmplY3RDb2xsZWN0aW9uIiwiaSIsInJlYWR5IiwiZ29vZ2xlIiwibWFwcyIsImdldEVsZW1lbnRCeUlkIiwiem9vbUNvbnRyb2wiLCJwYW5Db250cm9sIiwic2Nyb2xsd2hlZWwiLCJuYXZpZ2F0aW9uQ29udHJvbCIsIm1hcFR5cGVDb250cm9sIiwic2NhbGVDb250cm9sIiwiZGlzYWJsZURvdWJsZUNsaWNrWm9vbSIsIkxhdExuZyIsImRhdGVwaWNrZXIiLCIkY2FsZW5kYXIiLCJlYWNoIiwiaWQiLCJpdGVtIiwiJGNsb3Nlc3QiLCJjbG9zZXN0IiwiJGVsZW1lbnQiLCJmaW5kIiwiZGlzYWJsZWQiLCJpcyIsInRpbWVzdGFtcCIsImRhdGEiLCJkX2Zvcm1hdCIsInRvTG93ZXJDYXNlIiwiJGNhbGVuZGFySXRlbSIsImZvcm1hdCIsImF1dG9jbG9zZSIsImNvbnRhaW5lciIsImxhbmd1YWdlIiwiQURNSU5fTE9DQUxFIiwib24iLCJldiIsInJlc3VsdCIsImdldFRpbWUiLCJ2YWwiLCJzZWxlY3RpemUiLCJzZWxlY3RvciIsIiRzZWxlY3RvciIsImlzX29iamVjdCIsImNob3NlbiIsIndpZHRoIiwiYWxsb3dfc2luZ2xlX2Rlc2VsZWN0Iiwibm9fcmVzdWx0c190ZXh0IiwiZGlzYWJsZV9zZWFyY2hfdGhyZXNob2xkIiwiY2hhbmdlUm93IiwidG9nZ2xlX3NtYWxsX3Bob3RvIiwidG9nZ2xlIiwicmVtb3ZlU2VjdGlvbiIsIl9zZWxmXyIsInByZXZlbnREZWZhdWx0IiwiY29uZmlybSIsInBhcnNlSW50IiwieCIsInNlY3Rpb24iLCJ0bXAiLCJzcGxpdCIsInB1c2giLCJqb2luIiwic2xpZGVyIiwidmFsdWUiLCJtaW4iLCJtYXgiLCJvcmllbnRhdGlvbiIsInZhbHVlcyIsImNvbm5lY3QiLCJiZWhhdmlvdXIiLCJub1VpU2xpZGVyIiwicmFuZ2UiLCJMaW5rIiwidG8iLCJ3TnVtYiIsImRlY2ltYWxzIiwibWV0YUNvdW50ZXIiLCIkYmxvY2siLCIkY291bnRlciIsInJlY29tZW5kIiwiaHRtbCIsImhhc0NsYXNzIiwic2VvQ3Jvd2wiLCJ0cmltIiwidG9nZ2xlX2l0ZW0iLCJlbGNsYXNzIiwiJGljb24iLCJzd2l0Y2hfdHlwZV9maWVsZHMiLCJvYmoiLCJoaWRlIiwiYXR0ciIsInNob3ciLCJzaG93X3RyIiwidHJhbnNsYXRlX2tleSIsIlBhc3NHZW5KUyIsImdldFBhc3N3b3JkIiwic3ltYm9scyIsImxldHRlcnMiLCJyYW5kb20iLCJudW1iZXJzIiwibGV0dGVyc1VwcGVyIiwic2VjcmV0IiwiTWF0aCIsImZsb29yIiwidG9rZW4iLCJjaGFycyIsImMiLCJjaGFyQXQiLCJkZWxfbGlzdF9maWVsZHMiLCJjcCIsImRpYWxvZyIsImFkZF9saXN0X2ZpZWxkcyIsImZpZWxkX2NvdW50ZXIiLCJzdHIiLCJhcnJfZmllbGRfdHlwZSIsImsiLCJ2IiwiYmVmb3JlIiwiYWRkX2xpc3RfZmllbGRzX2xpc3QiLCJkZWxfZmllbGRzIiwibnVtYiIsImFkZF9maWVsZHMiLCJzZWxlY3QiLCJnZXRfYWRkaXRpb24iLCJhZGRfZmllbGRzX2xpc3QiLCJzZWxlY3RfdHlwZSIsInJvd19udW1kIiwiYXBwZW5kX29iaiIsImVtcHR5IiwiYXBwZW5kIiwiaW5kZXgiLCJDT05GSUdVUkUiLCJpbWFnZSIsInRtcDAiLCJ0bXAxIiwidG1wMiIsInRlbXBsYXRlIiwiYnV0dG9uIiwiaXRlcmF0aW9uIiwiaXNfdW5kZWZpbmVkIiwiTU9EVUxFX0xJU1QiLCJtIiwibmFtZSIsImVkaXRvciIsImVkaXRvcl9tb2RlIiwicmVkYWN0b3IiLCJzd2l0Y2hfdHlwZXMiLCJwX29iaiIsImh1bWFuU2l6ZSIsImJ5dGVzIiwidG9GaXhlZCIsImFkZEV4dGVuZGV0IiwicG9zdCIsIkFETUlOX0RJUiIsImFjdGlvbiIsInRpdGxlIiwib3JkIiwidmlzaWJsZSIsIm9uQWpheFN1Y2Nlc3NBZGQiLCJ2aXMiLCJpbm5lciIsImluc2VydEJlZm9yZSIsInNhdmVFeHRlbmRldCIsInBhcmVudF9pZCIsIm9uQWpheFN1Y2Nlc3NTYXZlIiwiZWRpdEV4dGVuZGV0IiwiZGVsRXh0ZW5kZXQiLCJvbkFqYXhTdWNjZXNzRGVsIiwiY2FuY2VsRXh0ZW5kZXQiLCJvbkFqYXhTdWNjZXNzIiwiYWxlcnQiLCJlZGl0VGl0bGUiLCJ0ZXh0IiwicHJvbXB0IiwiYWpheCIsInVybCIsImRhdGFUeXBlIiwic3VjY2VzcyIsInJlc3BvbnNlIiwic3RhdHVzIiwiZWRpdFZpc2libGUiLCJlZGl0T3JkIiwibmV3b3JkIiwiYWpheF92aXNfdG9nZ2xlIiwibW9kX2lkIiwiYWN0IiwidG9nZ2xlQ2xhc3MiLCJzaG93X3Rvb2x0aXBzIiwibXlfdW5jaGVjayIsIkNoZWNrQW5kU3VibWl0IiwiZmxhZyIsImZvY3VzIiwic3VibWl0Iiwic2V0U29ydCIsImNvb2tpZV9uYW1lIiwic2V0Q29va2llIiwibG9jYXRpb24iLCJocmVmIiwiZm9ybV9zdWJtaXQiLCJwYXJhbSIsIm9wZW53aW4iLCJpbWciLCJ3IiwiaCIsImh3bmQiLCJjbG9zZSIsIndpbmRvdyIsIm9wZW4iLCJ3cml0ZSIsIm9wZW53aW5fdGV4dCIsImx0cmltIiwiaXNXaGl0ZXNwYWNlIiwic3Vic3RyaW5nIiwicnRyaW0iLCJqIiwiY2hhclRvQ2hlY2siLCJ3aGl0ZXNwYWNlQ2hhcnMiLCJ0cmFuc2xpdGVyYXRlIiwic3RyaW5nIiwiY2hhcl9tYXAiLCJ0ZXN0IiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2xpY2UiLCJyZWRvdWJsZSIsImJpbmRpbmciLCIkaW5wdXQiLCJVUkxfVFJBTlNMQVRFIiwic3Vic3RyIiwiYWpheF90b2dnbGVfZ3JvdXAiLCJ0b2dnbGVfbWVudSIsInBhcmVudCIsImhpZGVGaWVsZCIsIkVkaXREb2NzIiwiY3Vycl92YWx1ZSIsIlNhdmVEb2NzIiwiZG9jc2lkIiwiRGVsRG9jcyIsInBhZ2VfdXBkYXRlIiwiaXRlbV9pZCIsInBvc3RfaWQiLCJqc29uIiwiZXZhbCIsInBhcnNlTXNnIiwibXNnIiwib2RkIiwic3lzX25hbWUiLCJzaXplIiwiYWpheEZpbGVEb2NzVXBsb2FkIiwiZG9jc19ncm91cF9pZCIsInNjcmVlbmluZyIsInJlZyJdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLElBQUlBLElBQUlDLFFB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LGFBQTFHO0FBQ0ExQyxlQUFPLGdCQUFnQm1JLEdBQWhCLEdBQXNCLE1BQXRCLEdBQStCaEksRUFBRWtJLElBQWpDLEdBQXdDLFNBQS9DO0FBQ0FySSxlQUFPLDJFQUEyRUcsRUFBRXBHLEVBQTdFLEdBQWtGLEtBQWxGLEdBQTBGd0UsR0FBMUYsR0FBZ0csc0lBQXZHO0FBQ0F4RjtBQUNILEtBUEQ7QUFRQWlILFdBQU8sVUFBUDtBQUNBekosTUFBRSxNQUFJZ0ksR0FBSixHQUFRLGVBQVYsRUFBMkJ5QyxNQUEzQixDQUFrQ2hCLEdBQWxDO0FBQ0g7O0FBRUQsU0FBU3NJLGtCQUFULENBQTRCQyxhQUE1QixFQUEwQyxDQUV6Qzs7QUFFRCxTQUFTQyxTQUFULENBQW9CeEksR0FBcEIsRUFBMEI7QUFDdEIsUUFBSXlJLE1BQUksSUFBUjtBQUNBLFFBQUl0TixTQUFPNkUsSUFBSXhLLE9BQUosQ0FBWWlULEdBQVosRUFBaUIsUUFBakIsQ0FBWDs7QUFFQSxXQUFPdE4sTUFBUDtBQUNIIiwiZmlsZSI6ImhlbHBlcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZCA9IGRvY3VtZW50O1xuXG52YXIgY3NzID0gZnVuY3Rpb24oZWxlbWVudCwgc3R5bGUpIHtcbiAgICBmb3IgKHZhciBwcm9wIGluIHN0eWxlKSB7XG4gICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZVtwcm9wXTtcbiAgICB9XG59XG5cbnZhciBhbmltYXRlID0gZnVuY3Rpb24ob3B0cywgY2FsbGJhY2spIHtcbiAgICB2YXIgc3RhcnQgPSBuZXcgRGF0ZTtcbiAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzID0gKG5ldyBEYXRlIC0gc3RhcnQpIC8gb3B0cy5kdXJhdGlvbjtcbiAgICAgICAgaWYgKHByb2dyZXNzID4gMSkgcHJvZ3Jlc3MgPSAxO1xuICAgICAgICBvcHRzLnN0ZXAocHJvZ3Jlc3MpO1xuICAgICAgICBpZiAocHJvZ3Jlc3MgPT0gMSkge1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2suYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICB9XG4gICAgfSwgb3B0cy5kZWxheSB8fCAyMCk7XG4gICAgXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbnZhciBhZGRDbGFzcyA9IGZ1bmN0aW9uKGVsZW1lbnQsIGNsYXNzbmFtZSkge1xuICAgIHZhciBjbiA9IGVsZW1lbnQuY2xhc3NOYW1lO1xuICAgIGlmKGNuLmluZGV4T2YoY2xhc3NuYW1lKSAhPSAtMSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmKGNuICE9ICcnKSB7XG4gICAgICAgIGNsYXNzbmFtZSA9ICcgJytjbGFzc25hbWU7XG4gICAgfVxuICAgIGVsZW1lbnQuY2xhc3NOYW1lID0gY24rY2xhc3NuYW1lO1xufVxuXG52YXIgcmVtb3ZlQ2xhc3MgPSBmdW5jdGlvbihlbGVtZW50LCBjbGFzc25hbWUpIHtcbiAgICB2YXIgY24gPSBlbGVtZW50LmNsYXNzTmFtZTtcbiAgICB2YXIgcnhwID0gbmV3IFJlZ0V4cChcIlxcXFxzP1xcXFxiXCIrY2xhc3NuYW1lK1wiXFxcXGJcIiwgXCJnXCIpO1xuICAgIGNuID0gY24ucmVwbGFjZShyeHAsICcnKTtcbiAgICBlbGVtZW50LmNsYXNzTmFtZSA9IGNuO1xufVxuXG5mdW5jdGlvbiBpc19zdHJpbmcoIG1peGVkX3ZhciApe1xuICAgIHJldHVybiAodHlwZW9mKCBtaXhlZF92YXIgKSA9PSAnc3RyaW5nJyk7XG59XG5cblxuZnVuY3Rpb24gaXNfbnVtZXJpYyhuKSB7XG4gICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcbn1cbiAgICAgICAgICAgIFxudmFyIG1hcENvbnRlaW5lciA9IGZ1bmN0aW9uKCB0eXBlLCBtYXBpZCApXG57XG4gICAgaWYgKCB0eXBlID09PSAnZ29vZ2xlJyApXG4gICAge1xuICAgICAgICBnb29nbGVNYXBzKCBtYXBpZCApO1xuICAgIH1cbiAgICBlbHNlIGlmICggdHlwZSA9PT0gJ3lhbmRleCcgKVxuICAgIHtcbiAgICAgICAgeWFuZGV4TWFwcyggbWFwaWQgKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrQWxsKGVsZW1lbnQpXG57XG4gICAgdmFyIGNoZWNrZWQgPSAkKGVsZW1lbnQpLnByb3AoJ2NoZWNrZWQnKTtcbiAgICAkKCcuY2hlY2stYWxsLXNweScpLnByb3AoICdjaGVja2VkJywgY2hlY2tlZCApO1xufVxuXG5mdW5jdGlvbiB5YW5kZXhNYXBzKCBtYXBpZCApXG57XG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICAgbGluazogbnVsbCxcbiAgICAgICAgbWFwaWQ6ICdtYXAtY29udGVpbmVyLScgKyBtYXBpZCxcbiAgICAgICAgcGxhY2U6ICdrcmFzbm9kYXInLFxuICAgICAgICB0eXBlOiAneWFuZGV4I21hcCcsIC8vICd5YW5kZXgjbWFwJyAneWFuZGV4I3NhdGVsbGl0ZScgJ3lhbmRleCNoeWJyaWQnICd5YW5kZXgjcHVibGljTWFwJyAneWFuZGV4I3B1YmxpY01hcEh5YnJpZCdcbiAgICAgICAgY2l0eToge1xuICAgICAgICAgICAgJ2tyYXNub2Rhcic6IFs0NS4wOTQ3MTcxNjU5MzAyOSwgMzkuMDE1ODk5MDAwMDAwMDFdLFxuICAgICAgICAgICAgJ21vc2Nvdyc6IFs1NS43NiwgMzcuNjRdLFxuICAgICAgICB9LFxuICAgICAgICBnZXRCYWxvb246IGZ1bmN0aW9uKCBjb29yZCApXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgeW1hcHMuUGxhY2VtYXJrKCBjb29yZCwge30sIHtcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWVcbiAgICAgICAgICAgICAgICAvLyxcbiAgICAgICAgICAgICAgICAvL2ljb25JbWFnZUhyZWY6ICcvaW1hZ2VzL215SWNvbi5naWYnLFxuICAgICAgICAgICAgICAgIC8vaWNvbkltYWdlU2l6ZTogWzMwLCA0Ml0sXG4gICAgICAgICAgICAgICAgLy9pY29uSW1hZ2VPZmZzZXQ6IFstMywgLTQyXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRyYXc6IGZ1bmN0aW9uKCB5bWFwcyApXG4gICAgICAgIHtcbiAgICAgICAgICAgIG1hcC5saW5rID0gbmV3IHltYXBzLk1hcCh0aGlzLm1hcGlkLCB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBtYXAuY2l0eVsgdGhpcy5wbGFjZSBdLFxuICAgICAgICAgICAgICAgIHpvb206IDEyLFxuICAgICAgICAgICAgICAgIHR5cGU6IG1hcC50eXBlXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbWFwLmxpbmsuY29udHJvbHNcbiAgICAgICAgICAgICAgICAuYWRkKCdzbWFsbFpvb21Db250cm9sJywgeyByaWdodDogMTAsIHRvcDogMTUgfSlcbiAgICAgICAgICAgICAgICAuYWRkKG5ldyB5bWFwcy5jb250cm9sLlNjYWxlTGluZSgpKVxuICAgICAgICAgICAgICAgIC5hZGQoJ3NlYXJjaENvbnRyb2wnLCB7IGxlZnQ6IDIwLCB0b3A6IDIwIH0pO1xuXG4gICAgICAgICAgICB2YXIgZHJhZ0JhbGxvb24gPSB0aGlzLmdldEJhbG9vbiggbWFwLmNpdHlbIHRoaXMucGxhY2UgXSApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBtYXAubGluay5ldmVudHMuYWRkKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgbWFwLmxpbmsuZ2VvT2JqZWN0cy5yZW1vdmUoIGRyYWdCYWxsb29uICk7IFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRyYWdCYWxsb29uID0gbWFwLmdldEJhbG9vbiggZS5nZXQoJ2Nvb3JkUG9zaXRpb24nKSApO1xuICAgICAgICAgICAgICAgIG1hcC5saW5rLmdlb09iamVjdHMuYWRkKCBkcmFnQmFsbG9vbiApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIG1hcC5zZXRDb29yZCggZS5nZXQoJ2Nvb3JkUG9zaXRpb24nKSApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1hcC5saW5rLmdlb09iamVjdHMuYWRkKCBkcmFnQmFsbG9vbiApLmV2ZW50cy5hZGQoJ2RyYWdlbmQnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IGUuZ2V0KCd0YXJnZXQnKTtcbiAgICAgICAgICAgICAgICB2YXIgY29vcmRzID0gb2JqZWN0Lmdlb21ldHJ5LmdldENvb3JkaW5hdGVzKCk7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnByb3BlcnRpZXMuc2V0KCdiYWxsb29uQ29udGVudCcsIGNvb3Jkcyk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbWFwLnNldENvb3JkKCBjb29yZHMgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhZGQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCBhcmd1bWVudHMubGVuZ3RoID09IDEgKSB7XG4gICAgICAgICAgICAgICAgbWFwLmxpbmsuZ2VvT2JqZWN0cy5hZGQoXG4gICAgICAgICAgICAgICAgICAgIG5ldyB5bWFwcy5HZW9PYmplY3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2VvbWV0cnk6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiBcIlBvaW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29vcmRpbmF0ZXM6IGFyZ3VtZW50c1swXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgY29sbGVjdGlvbiA9IG5ldyB5bWFwcy5HZW9PYmplY3RDb2xsZWN0aW9uKCk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGk8YXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rpb24uYWRkKG5ldyB5bWFwcy5QbGFjZW1hcmsoYXJndW1lbnRzW2ldKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hcC5saW5rLmdlb09iamVjdHMuYWRkKGNvbGxlY3Rpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBcbiAgICB5bWFwcy5yZWFkeShmdW5jdGlvbigpe1xuICAgICAgICBtYXAuZHJhdyggeW1hcHMgKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ29vZ2xlTWFwcyggbWFwaWQgKVxue1xuICAgIHZhciBtYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGQuZ2V0RWxlbWVudEJ5SWQoICdtYXAtY29udGVpbmVyLScgKyBtYXBpZCApLCB7XG4gICAgICAgIHpvb206IDE0LFxuICAgICAgICB6b29tQ29udHJvbDogITEsXG4gICAgICAgIHBhbkNvbnRyb2w6ICExLFxuICAgICAgICBzY3JvbGx3aGVlbDogITEsXG4gICAgICAgIG5hdmlnYXRpb25Db250cm9sOiAhMSxcbiAgICAgICAgbWFwVHlwZUNvbnRyb2w6ICExLFxuICAgICAgICBzY2FsZUNvbnRyb2w6ICExLFxuICAgICAgICBkcmFnZ2FibGU6ICEwLFxuICAgICAgICBkaXNhYmxlRG91YmxlQ2xpY2tab29tOiAhMCxcbiAgICAgICAgY2VudGVyOiBuZXcgZ29vZ2xlLm1hcHMuTGF0TG5nKDQ1LjA1MzU0OCwzOS4wMTYwNTYpXG4gICAgfSk7XG59XG5cbnZhciBkYXRlcGlja2VyID0gZnVuY3Rpb24oKVxue1xuICAgIGNvbnN0ICRjYWxlbmRhciA9ICQoJy5jYWxlbmRhcicpO1xuXG4gICAgJGNhbGVuZGFyLmVhY2goKGlkLCBpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjbG9zZXN0ID0gJChpdGVtKS5jbG9zZXN0KCcuY2FsZW5kYXInKTtcbiAgICAgICAgY29uc3QgJGVsZW1lbnQgPSAkY2xvc2VzdC5maW5kKCcuY2FsZW5kYXItaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZGlzYWJsZWQgPSAkZWxlbWVudC5pcygnOmRpc2FibGVkJyk7XG4gICAgICAgIGNvbnN0IHRpbWVzdGFtcCA9ICRlbGVtZW50LmRhdGEoJ3RpbWVzdGFtcCcpIHx8IGZhbHNlO1xuICAgICAgICBsZXQgZF9mb3JtYXQgPSAodGltZXN0YW1wICE9PSBmYWxzZSkgPyAnREQuTU0uWVlZWScgOiAkZWxlbWVudC5kYXRhKCdmb3JtYXQnKSB8fCAnREQuTU0uWVlZWSc7XG5cbiAgICAgICAgZF9mb3JtYXQgPSBkX2Zvcm1hdC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgICAgIGlmICghZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICRlbGVtZW50LnByb3AoJ2RhdGUnLCBcIlwiKTtcbiAgICAgICAgICAgICRlbGVtZW50LmRhdGEoJ2Zvcm1hdCcsIGRfZm9ybWF0KTtcblxuICAgICAgICAgICAgY29uc3QgJGNhbGVuZGFySXRlbSA9ICRlbGVtZW50LmRhdGVwaWNrZXIoe1xuICAgICAgICAgICAgICAgIGZvcm1hdDogZF9mb3JtYXQsXG4gICAgICAgICAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lcjogJGNsb3Nlc3QsXG4gICAgICAgICAgICAgICAgbGFuZ3VhZ2U6IEFETUlOX0xPQ0FMRVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICRjYWxlbmRhckl0ZW0ub24oJ2NoYW5nZURhdGUnLCAoZXYpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gJCh0aGlzKS5kYXRhKCdkYXRlJyk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGltZXN0YW1wICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAobmV3IERhdGUocmVzdWx0KSkuZ2V0VGltZSgpIC8gMTAwMDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkZWxlbWVudC52YWwoXG4gICAgICAgICAgICAgICAgICAgICRjYWxlbmRhckl0ZW0uZGF0ZXBpY2tlcignZ2V0Rm9ybWF0dGVkRGF0ZScpXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJGNsb3Nlc3QuZmluZCgnLmlucHV0LWdyb3VwLWFkZG9uJykpIHtcbiAgICAgICAgICAgICAgICAkY2xvc2VzdC5maW5kKCcuaW5wdXQtZ3JvdXAtYWRkb24nKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICRjYWxlbmRhckl0ZW0uZGF0ZXBpY2tlcignc2hvdycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59O1xuXG5mdW5jdGlvbiBzZWxlY3RpemUoc2VsZWN0b3IpXG57XG4gICAgdmFyICRzZWxlY3RvciA9IG51bGw7XG5cbiAgICBzZWxlY3RvciA9IHNlbGVjdG9yIHx8ICdzZWxlY3QnO1xuXG4gICAgaWYgKGlzX3N0cmluZyhzZWxlY3RvcikpXG4gICAge1xuICAgICAgICAkc2VsZWN0b3IgPSAkKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgZWxzZSBpZihpc19vYmplY3Qoc2VsZWN0b3IpKVxuICAgIHtcbiAgICAgICAgJHNlbGVjdG9yID0gc2VsZWN0b3I7XG4gICAgfVxuXG4gICAgJHNlbGVjdG9yLmNob3Nlbih7XG4gICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgYWxsb3dfc2luZ2xlX2Rlc2VsZWN0OiB0cnVlLFxuICAgICAgICBub19yZXN1bHRzX3RleHQ6ICfQndC1INC90LDQudC00LXQvdC+IScsXG4gICAgICAgIGRpc2FibGVfc2VhcmNoX3RocmVzaG9sZDogMTBcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlUm93KGVsZW1lbnQpXG57XG4gICAgdmFyIGNoZWNrZWQgPSAkKGVsZW1lbnQpLnByb3AoJ2NoZWNrZWQnKTtcblxuICAgIGlmKGNoZWNrZWQpXG4gICAge1xuICAgICAgICAkKGVsZW1lbnQpLmNsb3Nlc3QoJ3RyJykuZmluZCgndGQnKS5hZGRDbGFzcygnY2gnKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgJChlbGVtZW50KS5jbG9zZXN0KCd0cicpLmZpbmQoJ3RkJykucmVtb3ZlQ2xhc3MoJ2NoJyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b2dnbGVfc21hbGxfcGhvdG8oaWQpXG57XG4gICAgJChcIiNcIitpZCkudG9nZ2xlKCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVNlY3Rpb24oZWxlbWVudCwgZSwgaWQsIF9zZWxmXylcbntcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKGNvbmZpcm0oJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMPycpKVxuICAgIHtcbiAgICAgICAgaWQgPSBwYXJzZUludChpZCk7XG4gICAgICAgIFxuICAgICAgICB2YXIgeCwgc2VjdGlvbiA9IFtdLCB0bXAgPSAkKGVsZW1lbnQpLnZhbCgpLnNwbGl0KCcsJyk7XG4gICAgICAgIGZvcih4IGluIHRtcClcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRtcFt4XSAhPT0gJycgJiYgcGFyc2VJbnQodG1wW3hdKSAhPT0gaWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VjdGlvbi5wdXNoKHBhcnNlSW50KHRtcFt4XSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAkKF9zZWxmXykucmVtb3ZlKCk7XG4gICAgICAgICQoZWxlbWVudCkudmFsKCAoc2VjdGlvbi5sZW5ndGggPiAxID8gc2VjdGlvbi5qb2luKCcsJykgOiBzZWN0aW9uKSApO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHNsaWRlcihpZCwgdHlwZSwgdmFsdWUsIG1pbiwgbWF4LCBvcmllbnRhdGlvbilcbntcbiAgICB2YXIgZWxlbWVudCA9ICcjJyArIGlkO1xuXG4gICAgb3JpZW50YXRpb24gPSAhb3JpZW50YXRpb24gPyAnaG9yaXpvbnRhbCcgOiBvcmllbnRhdGlvbjtcblxuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG5cbiAgICB2YXIgdmFsdWVzID0gdmFsdWUsIGNvbm5lY3QgPSAnbG93ZXInLCBiZWhhdmlvdXIgPSAndGFwLWRyYWcnO1xuXG4gICAgaWYgKHR5cGUgPT0gJ3JhbmdlJylcbiAgICB7XG4gICAgICAgIGJlaGF2aW91ciA9ICd0YXAtZHJhZyc7XG4gICAgICAgIGNvbm5lY3QgPSB0cnVlO1xuICAgICAgICB2YWx1ZXMgPSBbIHZhbHVlWzBdICwgdmFsdWVbMV0gXTtcbiAgICB9XG5cbiAgICAkKGVsZW1lbnQpLm5vVWlTbGlkZXIoe1xuICAgICAgICBhbmltYXRlOiBmYWxzZSxcbiAgICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uLFxuICAgICAgICBzdGFydDogdmFsdWVzLFxuICAgICAgICBjb25uZWN0OiBjb25uZWN0LFxuICAgICAgICBiZWhhdmlvdXI6IGJlaGF2aW91cixcbiAgICAgICAgcmFuZ2U6IHtcbiAgICAgICAgICAgICdtaW4nOiBtaW4sXG4gICAgICAgICAgICAnbWF4JzogbWF4XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0eXBlID09ICdyYW5nZScpXG4gICAge1xuICAgICAgICAkKGVsZW1lbnQpLkxpbmsoJ2xvd2VyJykudG8oICQoZWxlbWVudCArICctbWluJyksIG51bGwsIHdOdW1iKHtcbiAgICAgICAgICAgIGRlY2ltYWxzOiAwXG4gICAgICAgIH0pKTtcblxuICAgICAgICAkKGVsZW1lbnQpLkxpbmsoJ3VwcGVyJykudG8oICQoZWxlbWVudCArICctbWF4JyksIG51bGwsIHdOdW1iKHtcbiAgICAgICAgICAgIGRlY2ltYWxzOiAwXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgJChlbGVtZW50KS5MaW5rKCdsb3dlcicpLnRvKCAkKGVsZW1lbnQgKyAnLXZhbHVlJyksIG51bGwsIHdOdW1iKHtcbiAgICAgICAgICAgIGRlY2ltYWxzOiAwXG4gICAgICAgIH0pKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ldGFDb3VudGVyKClcbntcbiAgICAkKCcuY291bnQtbnVtYmVyJykub24oJ2tleXVwJywgZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyICRibG9jayA9ICQodGhpcykuY2xvc2VzdCgnLmNvdW50LW51bWJlci1ibG9jaycpLFxuICAgICAgICAgICAgJGNvdW50ZXIgPSAkYmxvY2suZmluZCgnLmNvdW50LW51bWJlci1ibG9jay1jb3VudCcpLFxuICAgICAgICAgICAgcmVjb21lbmQgPSBwYXJzZUludCgkY291bnRlci5kYXRhKCdyZWNvbWVuZCcpKSB8fCAnJztcblxuICAgICAgICAkY291bnRlci5odG1sKCQodGhpcykudmFsKCkubGVuZ3RoICsgKHJlY29tZW5kICE9PSAnJyA/ICcvJyArIHJlY29tZW5kIDogJycpKTtcblxuICAgICAgICBpZiAocmVjb21lbmQgIT09ICcnICYmICQodGhpcykudmFsKCkubGVuZ3RoID4gcmVjb21lbmQpXG4gICAgICAgIHtcbiAgICAgICAgICAgJGNvdW50ZXIuYWRkQ2xhc3MoJ3VubGltJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoJGNvdW50ZXIuaGFzQ2xhc3MoJ3VubGltJykpXG4gICAgICAgIHtcbiAgICAgICAgICAgICRjb3VudGVyLnJlbW92ZUNsYXNzKCd1bmxpbScpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNlb0Nyb3dsKClcbntcbiAgICAkKFwiaW5wdXRbbmFtZT0nY2hhbmdlZnJlcSddXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkLnRyaW0oJCh0aGlzKS52YWwoKSkgPT0gJ2ZpeGVkJylcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnI2NoYW5nZWZyZXFfZml4ZWQnKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICB7XG4gICAgICAgICAgICAkKCcjY2hhbmdlZnJlcV9maXhlZCcpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIFxuICAgICQoXCJpbnB1dFtuYW1lPSdwcmlvcml0eSddXCIpLm9uKCdjaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkLnRyaW0oJCh0aGlzKS52YWwoKSkgPT0gJ2ZpeGVkJylcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnI3ByaW9yaXR5X2ZpeGVkJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgJCgnI3ByaW9yaXR5X2ZpeGVkJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZV9pdGVtKGUsIGVsZW1lbnQsIGlkLCBlbGNsYXNzKVxue1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAkKFwiI1wiK2lkKS50b2dnbGUoKTtcbiAgICB2YXIgJGljb24gPSAkKGVsZW1lbnQpLmZpbmQoJy5pY29uJyk7XG4gICAgXG4gICAgaWYgKCRpY29uLmhhc0NsYXNzKGVsY2xhc3NbMF0pKVxuICAgIHtcbiAgICAgICAgJGljb24ucmVtb3ZlQ2xhc3MoZWxjbGFzc1swXSk7XG4gICAgICAgICRpY29uLmFkZENsYXNzKGVsY2xhc3NbMV0pO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgICAkaWNvbi5yZW1vdmVDbGFzcyhlbGNsYXNzWzFdKTtcbiAgICAgICAgJGljb24uYWRkQ2xhc3MoZWxjbGFzc1swXSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzd2l0Y2hfdHlwZV9maWVsZHMob2JqKVxue1xuICAgIGlmICggb2JqLmNoZWNrZWQgPT09IHRydWUgKVxuICAgIHtcbiAgICAgICAgJChcIiNjYXNlMlwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjY2FzZTIgaW5wdXRcIikuYXR0cih7XCJkaXNhYmxlZFwiOiB0cnVlfSk7XG4gICAgICAgICQoXCIjY2FzZTFcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2Nhc2UxIGlucHV0XCIpLmF0dHIoe1wiZGlzYWJsZWRcIjogZmFsc2V9KTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgJChcIiNjYXNlMVwiKS5oaWRlKCk7XG4gICAgICAgICQoXCIjY2FzZTEgaW5wdXRcIikuYXR0cih7XCJkaXNhYmxlZFwiOiB0cnVlfSk7XG4gICAgICAgICQoXCIjY2FzZTJcIikuc2hvdygpO1xuICAgICAgICAkKFwiI2Nhc2UyIGlucHV0XCIpLmF0dHIoe1wiZGlzYWJsZWRcIjogZmFsc2V9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNob3dfdHIob2JqKVxue1xuICAgIHZhciB2YWwgPSAkKG9iaikudmFsKCk7XG4gICAgXG4gICAgaWYgKHZhbCA9PSAxMCB8fCB2YWwgPT0gMTEgfHwgdmFsID09IDEyKVxuICAgICAgICAkKFwiI3RvX2xpc3RcIikuc2hvdygpO1xuICAgIGVsc2VcbiAgICAgICAgJChcIiN0b19saXN0XCIpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gdHJhbnNsYXRlX2tleSggZWxlbWVudCApXG57XG4gICAgJChlbGVtZW50KS52YWwoUGFzc0dlbkpTLmdldFBhc3N3b3JkKHtcbiAgICAgICAgc3ltYm9sczogMCxcbiAgICAgICAgbGV0dGVyczogcmFuZG9tKDE0LCAyNCksXG4gICAgICAgIG51bWJlcnM6IDAsXG4gICAgICAgIGxldHRlcnNVcHBlcjogMFxuICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gc2VjcmV0KCBlbGVtZW50LCBsZW5ndGggKVxue1xuICAgICQoZWxlbWVudCkudmFsKFBhc3NHZW5KUy5nZXRQYXNzd29yZCh7XG4gICAgICAgIHN5bWJvbHM6IDAsXG4gICAgICAgIGxldHRlcnM6IHJhbmRvbSgyLCA0KSxcbiAgICAgICAgbnVtYmVyczogcmFuZG9tKDIsIDQpLFxuICAgICAgICBsZXR0ZXJzVXBwZXI6IHJhbmRvbSgzLCA3KVxuICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tKG1pbiwgbWF4KVxue1xuICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgIG1heCA9IG1heCB8fCAxMDA7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICggbWF4IC0gbWluICsgMSApKSArIG1pbjtcbn1cblxuXG5mdW5jdGlvbiB0b2tlbiggbGVuZ3RoIClcbntcbiAgICBsZW5ndGggPSBsZW5ndGggfHwgODtcbiAgICBcbiAgICB2YXIgc2VjcmV0ID0gJycsIGNoYXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6QUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVowMTIzNDU2Nzg5JztcbiAgICBcbiAgICBmb3IoIGk9MTsgaTxsZW5ndGg7IGkrKyApXG4gICAge1xuICAgICAgICB2YXIgYyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSpjaGFycy5sZW5ndGggKyAxKTtcbiAgICAgICAgc2VjcmV0ICs9IGNoYXJzLmNoYXJBdChjKVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gc2VjcmV0O1xufVxuXG5mdW5jdGlvbiBkZWxfbGlzdF9maWVsZHMoaWQpXG57XG4gICAgaWYgKGNwLmRpYWxvZyhcItCS0Ysg0LTQtdC50YHQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjCDQv9C+0LvQtT9cIikpe1xuICAgICAgICQoXCIjdHJcIitpZCkucmVtb3ZlKCk7XG4gICAgICAgLypcbiAgICAgICAkLnBvc3QoIFwiL1wiICsgQURNSU5fRElSICsgXCIvYWpheC9saXN0cy9cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhY3Rpb246IFwicmVtb3ZlXCIsXG4gICAgICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oZGF0YSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAkKFwiI3RyXCIraWQpLnJlbW92ZSgpO1xuICAgICAgICAgICAgfSAsXG4gICAgICAgICAgICBcImpzb25cIlxuICAgICAgICApXG4gICAgICAgICovXG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gYWRkX2xpc3RfZmllbGRzKClcbntcbiAgICBmaWVsZF9jb3VudGVyKys7XG4gICAgc3RyID0gJzx0ciBpZD1cInRyJyArIGZpZWxkX2NvdW50ZXIgKyAnXCI+JztcbiAgICBzdHIgKz0gJzx0ZD48aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmaWVsZF9pZFsnICsgZmllbGRfY291bnRlciArICddXCIgdmFsdWU9XCIwXCIgXFwvPic7XG4gICAgc3RyICs9ICc8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmllbGRfbmFtZVsnICsgZmllbGRfY291bnRlciArICddXCIgY2xhc3M9XCJib3JkIHBhZGQgbmVzc1wiIFxcLz48XFwvdGQ+JztcbiAgICBzdHIgKz0gJzx0ZD48aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwiZmllbGRfc3lzX25hbWVbJyArIGZpZWxkX2NvdW50ZXIgKyAnXVwiIGNsYXNzPVwiYm9yZCBwYWRkIG5lc3NcIiBcXC8+PFxcL3RkPic7XG4gICAgc3RyICs9ICc8dGQ+PHNlbGVjdCBuYW1lPVwiZmllbGRfdHlwZVsnICsgZmllbGRfY291bnRlciArICddXCIgY2xhc3M9XCJmaWVsZF90eXBlIG5lc3NcIiBpZD1cIicgKyBmaWVsZF9jb3VudGVyICsgJ1wiIG9uY2hhbmdlPVwic2VsZWN0X3R5cGUodGhpcyk7XCI+JztcbiAgICAkLmVhY2goYXJyX2ZpZWxkX3R5cGUsZnVuY3Rpb24oayx2KXtcbiAgICAgICAgaWYgKGsqMSkgc3RyICs9ICc8b3B0aW9uIHZhbHVlPVwiJyArIGsgKyAnXCI+JyArIHYgKyAnPFxcL29wdGlvbj4nXG4gICAgfSk7ICAgICBcbiAgICBzdHIgKz0gJzxcXC9zZWxlY3Q+PFxcL3RkPic7XG4gICAgc3RyICs9ICc8dGQgY2xhc3M9XCJhZGRpdGlvblwiPjxcXC90ZD4nO1xuICAgIHN0ciArPSAnPHRkPjxpbnB1dCB0eXBlPVwidGV4dFwiIG5hbWU9XCJmX29yZFsnICsgZmllbGRfY291bnRlciArICddXCIgdmFsdWU9XCInICsgZmllbGRfY291bnRlciArICcwXCIgY2xhc3M9XCJib3JkIHBhZGQgdzYwcHggclwiIFxcLz48XFwvdGQ+JztcbiAgICBzdHIgKz0gJzx0ZCBzdHlsZT1cInRleHQtYWxpZ246Y2VudGVyXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJpbl9saXN0WycgKyBmaWVsZF9jb3VudGVyICsgJ11cIiBcXC8+PFxcL3RkPic7XG4gICAgc3RyICs9ICc8dGQgY2xhc3M9XCJhY3Rpb25zIGNcIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiY3RyX2EgY3RyX2RlbCBtYXJnaW5cIiB0aXRsZT1cItCj0LTQsNC70LjRgtGMXCIgb25jbGljaz1cImRlbF9saXN0X2ZpZWxkcygnICsgZmllbGRfY291bnRlciArICcpO3JldHVybiBmYWxzZTtcIj48XFwvYT48XFwvdGQ+JztcbiAgICBzdHIgKz0gJzxcXC90cj4nO1xuICAgIFxuICAgICQoXCIjYWRkX2J0blwiKS5iZWZvcmUoc3RyKTtcbn1cblxuZnVuY3Rpb24gYWRkX2xpc3RfZmllbGRzX2xpc3QoKVxue1xuICAgIGZpZWxkX2NvdW50ZXIrKztcbiAgICBcbiAgICB2YXIgc3RyID0gW1xuICAgICAgICAnPHRyIGlkPVwidHInICsgZmllbGRfY291bnRlciArICdcIj4nLFxuICAgICAgICAnPHRkPicsXG4gICAgICAgICc8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJmaWVsZF9pZFsnICsgZmllbGRfY291bnRlciArICddXCIgdmFsdWU9XCIwXCI+JyxcbiAgICAgICAgJzxpbnB1dCBuYW1lPVwidmFyWycgKyBmaWVsZF9jb3VudGVyICsgJ11cIiBwbGFjZWhvbGRlcj1cItCd0LDQv9GA0LjQvNC10YA6INCa0YDQsNGB0L3QvtC00LDRgNGB0LrQuNC5INC60YDQsNC5XCI+JyxcbiAgICAgICAgJzwvdGQ+JyxcbiAgICAgICAgJzx0ZD48aW5wdXQgbmFtZT1cInZhbHVlWycgKyBmaWVsZF9jb3VudGVyICsgJ11cIiBwbGFjZWhvbGRlcj1cItCd0LDQv9GA0LjQvNC10YA6IDIzXCI+PC90ZD4nLFxuICAgICAgICAnPHRkPjxsYWJlbCBjbGFzcz1cImNvbnRyb2xsXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29udHJvbGxfX2lucHV0XCIgdmFsdWU9XCInICsgZmllbGRfY291bnRlciArICdcIiBuYW1lPVwiZGVmYXVsdFsnICsgZmllbGRfY291bnRlciArICddXCI+PHNwYW4gY2xhc3M9XCJjb250cm9sbF9fdmlzaWJsZSBjb250cm9sbF9fdmlzaWJsZV9jaGVja2JveFwiPjwvc3Bhbj48L2xhYmVsPjwvdGQ+JyxcbiAgICAgICAgJzx0ZD48aW5wdXQgbmFtZT1cIm9yZFsnICsgZmllbGRfY291bnRlciArICddXCIgdmFsdWU9XCInICsgZmllbGRfY291bnRlciArICcwXCIgY2xhc3M9XCJvcmQgaW50ZWdlciByZWR1Y2luZy10cmlnZ2VyXCI+PC90ZD4nLFxuICAgICAgICAnPHRkIGNsYXNzPVwidGFjXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImljb24gaWNvbi1kZWxldGUgcmVtb3ZlLXRyaWdnZXJcIiB0aXRsZT1cItCj0LTQsNC70LjRgtGMXCIgb25jbGljaz1cImRlbF9saXN0X2ZpZWxkcygnICsgZmllbGRfY291bnRlciArICcpO3JldHVybiBmYWxzZTtcIj48L2E+PC90ZD4nLFxuICAgICAgICAnPC90cj4nXG4gICAgXS5qb2luKCAnJyApO1xuICAgIFxuICAgICQoXCIjYWRkX2J0blwiKS5iZWZvcmUoc3RyKTtcbn1cblxuZnVuY3Rpb24gZGVsX2ZpZWxkcyhudW1iKVxue1xuICAgIGZpZWxkX2NvdW50ZXItLTtcbiAgICAkKFwiI3RyXCIrbnVtYikucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIGFkZF9maWVsZHMoKVxue1xuICAgIGZpZWxkX2NvdW50ZXIrKztcbiAgICB2YXIgc2VsZWN0ID0gJycsIGsgPSAnJztcbiAgICBcbiAgICBmb3IgKCBrIGluIGFycl9maWVsZF90eXBlIClcbiAgICB7XG4gICAgICAgIGlmICh0eXBlb2YgYXJyX2ZpZWxkX3R5cGVba10gPT0gJ3N0cmluZycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHNlbGVjdCArPSAnPG9wdGlvbiB2YWx1ZT1cIicgKyBrICsgJ1wiPicgKyBhcnJfZmllbGRfdHlwZVtrXSArICc8L29wdGlvbj4nO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHN0ciA9IFtcbiAgICAgICAgJzx0ciBpZD1cInRyJyArIGZpZWxkX2NvdW50ZXIgKyAnXCI+JyxcbiAgICAgICAgJzx0ZCBjbGFzcz1cInZhX3RcIj48aW5wdXQgbmFtZT1cImZfbmFtZVsnICsgZmllbGRfY291bnRlciArICddXCIgY2xhc3M9XCJuZXNzXCI+PC90ZD4nLFxuICAgICAgICAnPHRkIGNsYXNzPVwidmFfdFwiPjxpbnB1dCBuYW1lPVwiZl9zeXNfbmFtZVsnICsgZmllbGRfY291bnRlciArICddXCIgY2xhc3M9XCJuZXNzXCI+PC90ZD4nLFxuICAgICAgICAnPHRkIGNsYXNzPVwidmFfdFwiPjxzZWxlY3QgbmFtZT1cImZfdHlwZVsnICsgZmllbGRfY291bnRlciArICddXCIgY2xhc3M9XCJmX3R5cGUgbmVzc1wiIGRhdGEtcGxhY2Vob2xkZXI9XCLQotC40L8g0L/QvtC70Y9cIiBpZD1cImZpZWxkdHlwZV8nICsgZmllbGRfY291bnRlciArICdcIiBvbmNoYW5nZT1cInNlbGVjdF90eXBlKHRoaXMpXCI+JyxcbiAgICAgICAgc2VsZWN0LFxuICAgICAgICAnPC9zZWxlY3Q+PC90ZD4nLFxuICAgICAgICAnPHRkIGNsYXNzPVwiYWRkaXRpb24gdmFfdFwiPicgKyBnZXRfYWRkaXRpb24oJ2lucHV0JywgZmllbGRfY291bnRlcikgKyAnPC90ZD4nLFxuICAgICAgICAnPHRkIGNsYXNzPVwidmFfdFwiPjxpbnB1dCBuYW1lPVwiZl9vcmRbJyArIGZpZWxkX2NvdW50ZXIgKyAnXVwiIHZhbHVlPVwiJyArIGZpZWxkX2NvdW50ZXIgKyAnMFwiPjwvdGQ+JyxcbiAgICAgICAgJzx0ZCBjbGFzcz1cInZhX20gdGFjXCI+PGxhYmVsIGNsYXNzPVwiY29udHJvbGwgY29udHJvbGxfc2luZ2xlXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29udHJvbGxfX2lucHV0XCIgdmFsdWU9XCIxXCIgbmFtZT1cImZfaW5fbGlzdFsnICsgZmllbGRfY291bnRlciArICddXCI+PHNwYW4gY2xhc3M9XCJjb250cm9sbF9fdmlzaWJsZSBjb250cm9sbF9fdmlzaWJsZV9jaGVja2JveFwiPjwvc3Bhbj48L2xhYmVsPjwvdGQ+JyxcbiAgICAgICAgJzx0ZCBjbGFzcz1cInZhX20gdGFjXCI+PGxhYmVsIGNsYXNzPVwiY29udHJvbGwgY29udHJvbGxfc2luZ2xlXCI+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzPVwiY29udHJvbGxfX2lucHV0XCIgdmFsdWU9XCIxXCIgbmFtZT1cImZfaW5kZXhbJyArIGZpZWxkX2NvdW50ZXIgKyAnXVwiPjxzcGFuIGNsYXNzPVwiY29udHJvbGxfX3Zpc2libGUgY29udHJvbGxfX3Zpc2libGVfY2hlY2tib3hcIj48L3NwYW4+PC9sYWJlbD48L3RkPicsXG4gICAgICAgICc8dGQgY2xhc3M9XCJ2YV9tIHRhY1wiPjxsYWJlbCBjbGFzcz1cImNvbnRyb2xsIGNvbnRyb2xsX3NpbmdsZVwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNvbnRyb2xsX19pbnB1dFwiIHZhbHVlPVwiMVwiIG5hbWU9XCJmX3VuaXF1ZVsnICsgZmllbGRfY291bnRlciArICddXCI+PHNwYW4gY2xhc3M9XCJjb250cm9sbF9fdmlzaWJsZSBjb250cm9sbF9fdmlzaWJsZV9jaGVja2JveFwiPjwvc3Bhbj48L2xhYmVsPjwvdGQ+JyxcbiAgICAgICAgJzx0ZCBjbGFzcz1cInRhY1wiPjxhIGhyZWY9XCIjXCIgY2xhc3M9XCJpY29uIGljb24tZGVsZXRlIHJlbW92ZS10cmlnZ2VyXCIgdGl0bGU9XCLQo9C00LDQu9C40YLRjFwiIG9uY2xpY2s9XCJkZWxfZmllbGRzKCcgKyBmaWVsZF9jb3VudGVyICsgJyk7cmV0dXJuIGZhbHNlO1wiPjwvYT48L3RkPicsXG4gICAgICAgICc8L3RyPidcbiAgICBdLmpvaW4oJycpO1xuICAgIFxuICAgICQoXCIjYWRkX2J0blwiKS5iZWZvcmUoc3RyKTtcbiAgICBcbiAgICBzZWxlY3RpemUoICcjZmllbGR0eXBlXycgKyBmaWVsZF9jb3VudGVyICk7XG59XG5cbmZ1bmN0aW9uIGFkZF9maWVsZHNfbGlzdCgpXG57XG4gICAgZmllbGRfY291bnRlcisrO1xuICAgIFxuICAgIHN0ciA9IFtcbiAgICAgICAgJzx0ciBpZD1cInRyJyArIGZpZWxkX2NvdW50ZXIgKyAnXCI+JyxcbiAgICAgICAgJzx0ZD48aW5wdXQgbmFtZT1cInZhclsnICsgZmllbGRfY291bnRlciArICddXCI+PC90ZD4nLFxuICAgICAgICAnPHRkPjxpbnB1dCBuYW1lPVwidmFsdWVbJyArIGZpZWxkX2NvdW50ZXIgKyAnXVwiPjwvdGQ+JyxcbiAgICAgICAgJzx0ZD48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgbmFtZT1cImRlZmF1bHRbJyArIGZpZWxkX2NvdW50ZXIgKyAnXVwiPjwvdGQ+JyxcbiAgICAgICAgJzx0ZD48aW5wdXQgbmFtZT1cIm9yZFsnICsgZmllbGRfY291bnRlciArICddXCIgdmFsdWU9XCInICsgZmllbGRfY291bnRlciArICcwXCI+PC90ZD4nLFxuICAgICAgICAnPHRkIGNsYXNzPVwidGFjXCI+PGEgaHJlZj1cIiNcIiBjbGFzcz1cImljb24gaWNvbi1kZWxldGUgcmVtb3ZlLXRyaWdnZXJcIiB0aXRsZT1cItCj0LTQsNC70LjRgtGMXCIgb25jbGljaz1cImRlbF9maWVsZHMoJyArIGZpZWxkX2NvdW50ZXIgKyAnKTtyZXR1cm4gZmFsc2U7XCI+PC9hPjwvdGQ+JyxcbiAgICAgICAgJzwvdHI+J1xuICAgIF0uam9pbignXFxuJyk7XG4gICAgXG4gICAgJChcIiNhZGRfYnRuXCIpLmJlZm9yZShzdHIpO1xufVxuXG5mdW5jdGlvbiBzZWxlY3RfdHlwZSggb2JqIClcbntcbiAgICB2YXIgcm93X251bWQgPSAxICogKCAkKG9iaikuYXR0cihcImlkXCIpLnNwbGl0KCdfJylbMV0gKSxcbiAgICAgICAgYXBwZW5kX29iaiA9ICQoXCIjdHJcIityb3dfbnVtZCtcIiAuYWRkaXRpb25cIiksXG4gICAgICAgIHN0ciA9IGdldF9hZGRpdGlvbiggb2JqLnZhbHVlLnNwbGl0KCc6JylbMF0sIHJvd19udW1kICk7XG4gICAgXG4gICAgJCggYXBwZW5kX29iaiApLmVtcHR5KCkuYXBwZW5kKCBzdHIgfHwgJycgKTtcblxuICAgIHNlbGVjdGl6ZSgpO1xufVxuXG5mdW5jdGlvbiBnZXRfYWRkaXRpb24oIHR5cGUsIGluZGV4IClcbntcbiAgICB2YXIgdG1wID0gW10sIHN0ciA9IFtdO1xuXG4gICAgaWYgKCBbICdpbnB1dCcsICdjb3N0JywgJ2ludCcsICdoaWRkZW4nLCAnZG9jdW1lbnQnLCAndGltZXN0YW1wJywgJ2VtYWlsJywgJ2xpc3QnLCAnYXV0b2NvbXBsZXRlJywgJ3NlbGVjdCcsICdmbG9hdCcsICdzeXN0ZW0nLCAnbXVsdGlzZWxlY3QnLCAnZGF0ZXRpbWUnIF0uaW5kZXhPZiggdHlwZSApID49IDAgKVxuICAgIHtcbiAgICAgICAgc3RyID0gW1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJncm91cFwiPicsXG4gICAgICAgICAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdyb3VwX19pdGVtXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZ3JvdXBfX2l0ZW1fX3JiXCIgbmFtZT1cImZfd2lkdGhbJyArIGluZGV4ICsgJ11cIiB2YWx1ZT1cIjI1XCI+PHNwYW4gY2xhc3M9XCJncm91cF9faXRlbV9fc3R5bGVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJncm91cF9faXRlbV9fdGV4dFwiPjI1JTwvc3Bhbj48L2xhYmVsPicsXG4gICAgICAgICAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdyb3VwX19pdGVtXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZ3JvdXBfX2l0ZW1fX3JiXCIgbmFtZT1cImZfd2lkdGhbJyArIGluZGV4ICsgJ11cIiB2YWx1ZT1cIjUwXCI+PHNwYW4gY2xhc3M9XCJncm91cF9faXRlbV9fc3R5bGVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJncm91cF9faXRlbV9fdGV4dFwiPjUwJTwvc3Bhbj48L2xhYmVsPicsXG4gICAgICAgICAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdyb3VwX19pdGVtXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZ3JvdXBfX2l0ZW1fX3JiXCIgbmFtZT1cImZfd2lkdGhbJyArIGluZGV4ICsgJ11cIiB2YWx1ZT1cIjc1XCI+PHNwYW4gY2xhc3M9XCJncm91cF9faXRlbV9fc3R5bGVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJncm91cF9faXRlbV9fdGV4dFwiPjc1JTwvc3Bhbj48L2xhYmVsPicsXG4gICAgICAgICAgICAgICAgJzxsYWJlbCBjbGFzcz1cImdyb3VwX19pdGVtXCI+PGlucHV0IHR5cGU9XCJyYWRpb1wiIGNsYXNzPVwiZ3JvdXBfX2l0ZW1fX3JiXCIgbmFtZT1cImZfd2lkdGhbJyArIGluZGV4ICsgJ11cIiB2YWx1ZT1cIjEwMFwiIGNoZWNrZWQ+PHNwYW4gY2xhc3M9XCJncm91cF9faXRlbV9fc3R5bGVcIj48L3NwYW4+PHNwYW4gY2xhc3M9XCJncm91cF9faXRlbV9fdGV4dFwiPjEwMCU8L3NwYW4+PC9sYWJlbD4nLFxuICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggWyAnbGlzdCcsICdhdXRvY29tcGxldGUnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ211bHRpc2VsZWN0JywgJ2NoZWNrYm94JywgJ3N5c3RlbScgXS5pbmRleE9mKCB0eXBlICkgPj0gMCApXG4gICAgICAgIHtcbiAgICAgICAgICAgc3RyLnB1c2goICc8ZGl2IGNsYXNzPVwiY2IgbWIxMFwiPjwvZGl2PicgKTsgXG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYgKCB0eXBlID09ICdoaWRkZW4nIClcbiAgICB7XG4gICAgICAgIHN0ci5wdXNoKCAnPGlucHV0IHZhbHVlPVwiXCIgbmFtZT1cImZfaGlkZGVuX2RlZmF1bHRbJyArIGluZGV4ICsgJ11cIiBwbGFjZWhvbGRlcj1cItCX0L3QsNGH0LXQvdC40LUg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cIj4nICk7XG4gICAgfVxuICAgIFxuICAgIGlmICggdHlwZSA9PSAnc3lzdGVtJyApXG4gICAge1xuICAgICAgICBzdHIucHVzaCggJzxpbnB1dCB2YWx1ZT1cIlwiIG5hbWU9XCJmX2JpbmRpbmdbJyArIGluZGV4ICsgJ11cIiBwbGFjZWhvbGRlcj1cItCd0LDQv9GA0LjQvNC10YAg0L/QvtC70LUgKHRpdGxlKVwiPicgKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKCB0eXBlID09ICdkYXRlJyApXG4gICAge1xuICAgICAgICB0bXAgPSBbXG4gICAgICAgICAgICAnPGRpdiBjbGFzcz1cImhlbHAtY292ZXJcIj4nLFxuICAgICAgICAgICAgICAgICc8aW5wdXQgbmFtZT1cImZfZGF0ZV9mb3JtYXRbJyArIGluZGV4ICsgJ11cIiB2YWx1ZT1cIkRELk1NLllZWVlcIiBwbGFjZWhvbGRlcj1cItCk0L7RgNC80LDRgiDQtNCw0YLRi1wiPicsXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJ0b29sdGlwIHRvb2x0aXAtZG93blwiPicsXG4gICAgICAgICAgICAgICAgICAgICdEIOKAlCDQtNC10L3RjCw8YnI+JyxcbiAgICAgICAgICAgICAgICAgICAgJ00g4oCUINC80LXRgdGP0YYgKNCx0LXQtyDQvdGD0LvRjyDQstC/0LXRgNC10LTQuCk8YnI+JyxcbiAgICAgICAgICAgICAgICAgICAgJ0RELCBNTSDigJQg0LTQtdC90Ywg0Lgg0LzQtdGB0Y/RhiDRgSDQvdGD0LvRkdC8INCy0L/QtdGA0LXQtNC4INC00LvRjyDQt9C90LDRh9C10L3QuNC5INC+0YIgMSDQtNC+IDk8YnI+JyxcbiAgICAgICAgICAgICAgICAgICAgJ1lZIOKAlCAyLdGB0LjQvNCy0L7Qu9GM0L3QvtC1INC+0LHQvtC30L3QsNGH0LXQvdC40LUg0LPQvtC00LA8YnI+JyxcbiAgICAgICAgICAgICAgICAgICAgJ1lZWVkg4oCUIDQt0YHQuNC80LLQvtC70YzQvdC+0LUg0L7QsdC+0LfQvdCw0YfQtdC90LjQtSDQs9C+0LTQsCAo0LPQvtC0INC/0LjRiNC10YLRgdGPINC/0L7Qu9C90L7RgdGC0YzRjiknLFxuICAgICAgICAgICAgICAgICc8L2Rpdj4nLFxuICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIHN0ci5wdXNoKCB0bXAuam9pbignXFxuJykgKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKCBbICdmaWxlJywgJ2ltYWdlJyBdLmluZGV4T2YoIHR5cGUgKSA+PSAwIClcbiAgICB7XG4gICAgICAgIHRtcCA9IFtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwib3B0aW9uLWdyb3VwIG9wdGlvbi1jb21ib1wiPicsXG4gICAgICAgICAgICAgICAgJzxsYWJlbD48aW5wdXQgdHlwZT1cInJhZGlvXCIgbmFtZT1cImZfZmlsZV9jb3VudFsnICsgaW5kZXggKyAnXVwiIHZhbHVlPVwiMFwiPjxzcGFuIGNsYXNzPVwib3B0aW9uXCI+0J7QtNC40L0g0YTQsNC50Ls8L3NwYW4+PC9sYWJlbD4nLFxuICAgICAgICAgICAgICAgICc8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmX2ZpbGVfY291bnRbJyArIGluZGV4ICsgJ11cIiB2YWx1ZT1cIjFcIiBjaGVja2VkPjxzcGFuIGNsYXNzPVwib3B0aW9uXCI+0JzQvdC+0LPQviDRhNCw0LnQu9C+0LI8L3NwYW4+PC9sYWJlbD4nLFxuICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgXTtcbiAgICAgICAgXG4gICAgICAgIGlmICggdHlwZSA9PSAnaW1hZ2UnIClcbiAgICAgICAge1xuICAgICAgICAgICAgdG1wLnB1c2goICc8ZGl2IGNsYXNzPVwiY2IgbWIxMFwiPjwvZGl2PicgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3RyLnB1c2goIHRtcC5qb2luKCdcXG4nKSApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIFsgJ2dhbGxlcnknLCAnaW1hZ2UnIF0uaW5kZXhPZiggdHlwZSApID49IDAgJiYgdHlwZW9mIENPTkZJR1VSRSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIENPTkZJR1VSRS5pbWFnZSAhPT0gJ3VuZGVmaW5lZCcgKVxuICAgIHtcbiAgICAgICAgdmFyIHRtcDAgPSBbXSwgdG1wMSA9IFtdLCB0bXAyID0gW10sIHgsIGNoZWNrZWQgPSAnJztcbiAgICAgICAgdG1wMCA9IFtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwianMtc2l6ZS1saXN0XCI+JyxcbiAgICAgICAgICAgICc8dGFibGUgY2xhc3M9XCJ0YWJsZS1zaW1wbGVcIj4nLFxuICAgICAgICAgICAgICAgICc8Y29sPjxjb2w+PGNvbD48Y29sIHdpZHRoPVwiNTdcIj48Y29sIHdpZHRoPVwiMjBcIj4nLFxuICAgICAgICAgICAgICAgICc8dGhlYWQ+JyxcbiAgICAgICAgICAgICAgICAgICAgJzx0cj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cImhcIj7Qn9GA0LXRhNC40LrRgTwvdGQ+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICc8dGQgY2xhc3M9XCJoXCI+0KjQuNGA0LjQvdCwPC90ZD4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzx0ZCBjbGFzcz1cImhcIj7QktGL0YHQvtGC0LA8L3RkPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwiaFwiPtCc0LXRgtC+0LQ8L3RkPicsXG4gICAgICAgICAgICAgICAgICAgICAgICAnPHRkIGNsYXNzPVwiaFwiPjwvdGQ+JyxcbiAgICAgICAgICAgICAgICAgICAgJzwvdHI+JyxcbiAgICAgICAgICAgICAgICAnPC90aGVhZD4nLFxuICAgICAgICAgICAgICAgICc8dGJvZHk+J1xuICAgICAgICBdO1xuXG4gICAgICAgIHRtcDEgPSB0ZW1wbGF0ZSgndHBsX2ltYWdlX3JvdycsIHtcbiAgICAgICAgICAgIGluZGV4OiAwLFxuICAgICAgICAgICAgYnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgaXRlcmF0aW9uOiBpbmRleFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHRtcDIgPSBbXG4gICAgICAgICAgICAnPC90Ym9keT4nLFxuICAgICAgICAgICAgJzwvdGFibGU+JyxcbiAgICAgICAgICAgICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiYWRkLXNpemUganMtYWRkLXNpemVcIiBkYXRhLWl0ZXJhdGlvbj1cInskc21hcnR5LmZvcmVhY2guaS5pdGVyYXRpb259XCI+PGkgY2xhc3M9XCJpY29uIGljb24tcGx1cy1zcXVhcmVcIj48L2k+INCU0L7QsdCw0LLQuNGC0Ywg0YDQsNC30LzQtdGAPC9hPicsXG4gICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICBdO1xuXG4gICAgICAgIHN0ci5wdXNoKCB0bXAwLmpvaW4oJ1xcbicpICk7XG4gICAgICAgIHN0ci5wdXNoKCB0bXAxICk7XG4gICAgICAgIHN0ci5wdXNoKCB0bXAyLmpvaW4oJ1xcbicpICk7XG4gICAgfVxuICAgIFxuICAgIGlmICggWyAnZW1iZWRkZWQnIF0uaW5kZXhPZiggdHlwZSApID49IDAgKVxuICAgIHtcbiAgICAgICAgaWYgKCFpc191bmRlZmluZWQoTU9EVUxFX0xJU1QpKVxuICAgICAgICB7XG4gICAgICAgICAgICB2YXIgc2VsZWN0ID0gJycsIG07XG5cbiAgICAgICAgICAgIGZvciAobSBpbiBNT0RVTEVfTElTVClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3QgKz0gJzxvcHRpb24gdmFsdWU9XCInICsgbSArICdcIj4nICsgTU9EVUxFX0xJU1RbbV0ubmFtZSArICc8L29wdGlvbj4nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdG1wID0gW1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJqLXNlbGVjdC13cmFwcGVyXCI+JyxcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIm1iNVwiPicsXG4gICAgICAgICAgICAgICAgICAgICc8c2VsZWN0IG5hbWU9XCJmX21vZHVsZVsnICsgaW5kZXggKyAnXVwiIGRhdGEtcGxhY2Vob2xkZXI9XCLQktGL0LHRgNCw0YLRjCDQvNC+0LTRg9C70YxcIiBjbGFzcz1cImotc2VsZWN0LWNob29zZW5cIj4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgJzxvcHRpb24gdmFsdWU9XCIwXCI+LS0tPC9vcHRpb24+Jywgc2VsZWN0LFxuICAgICAgICAgICAgICAgICAgICAnPC9zZWxlY3Q+JyxcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImNsZWFyZml4IGotc2VsZWN0LWNvbnRhaW5lclwiPicsXG4gICAgICAgICAgICAgICAgICAgICc8c2VsZWN0IG5hbWU9XCJmX2ZpZWxkc1snICsgaW5kZXggKyAnXVtdXCIgbXVsdGlwbGUgZGF0YS1wbGFjZWhvbGRlcj1cItCS0YvQsdGA0LDRgtGMXCIgZGlzYWJsZWQ+PC9zZWxlY3Q+JyxcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgIF07XG5cbiAgICAgICAgc3RyLnB1c2goIHRtcC5qb2luKCdcXG4nKSApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIFsgJ2xpc3QnLCAnc2VjdGlvbicsICdhdXRvY29tcGxldGUnLCAnc2VsZWN0JywgJ3JhZGlvJywgJ2NoZWNrYm94JywgJ211bHRpc2VsZWN0JyBdLmluZGV4T2YoIHR5cGUgKSA+PSAwIClcbiAgICB7XG4gICAgICAgIHRtcCA9IFtcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiY2IgY2xlYXJmaXhcIj4nLFxuICAgICAgICAgICAgICAgICc8bGFiZWwgY2xhc3M9XCJjb250cm9sbFwiPjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cImNvbnRyb2xsX19pbnB1dFwiIHZhbHVlPVwiMVwiIG9uY2hhbmdlPVwic3dpdGNoX3R5cGVzKHRoaXMpXCIgbmFtZT1cImZfdXNlX3RhYmxlX2xpc3RbJyArIGluZGV4ICsgJ11cIj48c3BhbiBjbGFzcz1cImNvbnRyb2xsX192aXNpYmxlIGNvbnRyb2xsX192aXNpYmxlX2NoZWNrYm94XCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwiY29udHJvbGxfX3RleHRcIj7Qv9GA0LjQstGP0LfQsNGC0Ywg0LogYCNfX21kZF9saXN0c2A8L3NwYW4+PC9sYWJlbD4nLFxuXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYXNlIGNhc2UwXCI+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCBuYW1lPVwiZl90YWJsZV9uYW1lWycgKyBpbmRleCArICddXCIgdmFsdWU9XCJcIiBjbGFzcz1cIm1iNVwiIHBsYWNlaG9sZGVyPVwi0J3QsNC30LLQsNC90LjQtSDRgtCw0LHQu9C40YbRiyAoI19uZXdzKVwiPicsXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgbmFtZT1cImZfdGFibGVfZmllbGRbJyArIGluZGV4ICsgJ11cIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwi0J/QvtC70LUgKHRpdGxlKVwiPicsXG4gICAgICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJjYXNlIGNhc2UxIGhpZGRlblwiPicsXG4gICAgICAgICAgICAgICAgICAgICc8aW5wdXQgbmFtZT1cImZfdGFibGVfbGlzdFsnICsgaW5kZXggKyAnXVwiIGRpc2FibGVkIHBsYWNlaG9sZGVyPVwiQklORCDRgdC/0LjRgdC60LBcIiB2YWx1ZT1cIlwiPicsXG4gICAgICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICAgICAnPC9kaXY+J1xuICAgICAgICBdO1xuXG4gICAgICAgIHN0ci5wdXNoKCB0bXAuam9pbignXFxuJykgKTtcbiAgICB9XG4gICAgXG4gICAgaWYgKCBbICdyYW5nZScsICdzbGlkZXInIF0uaW5kZXhPZiggdHlwZSApID49IDAgKVxuICAgIHtcbiAgICAgICAgdG1wID0gW1xuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCItY29sXCI+JyxcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cIi1sZWZ0XCI+JyxcbiAgICAgICAgICAgICAgICAgICAgJzxpbnB1dCBuYW1lPVwiZl9yYW5nZVsnICsgaW5kZXggKyAnXVttaW5dXCIgdmFsdWU9XCJcIiBwbGFjZWhvbGRlcj1cIk1pblwiIGNsYXNzPVwiaW50ZWdlclwiPicsXG4gICAgICAgICAgICAgICAgJzwvZGl2PicsXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCItcmlnaHRcIj4nLFxuICAgICAgICAgICAgICAgICAgICAnPGlucHV0IG5hbWU9XCJmX3JhbmdlWycgKyBpbmRleCArICddW21heF1cIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiTWF4XCIgY2xhc3M9XCJpbnRlZ2VyXCI+JyxcbiAgICAgICAgICAgICAgICAnPC9kaXY+JyxcbiAgICAgICAgICAgICc8L2Rpdj4nXG4gICAgICAgIF07XG5cbiAgICAgICAgc3RyLnB1c2goIHRtcC5qb2luKCdcXG4nKSApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIHR5cGUgPT0gJ2VkaXRvcicgJiYgdHlwZW9mIENPTkZJR1VSRSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIENPTkZJR1VSRS5lZGl0b3IgIT09ICd1bmRlZmluZWQnIClcbiAgICB7XG4gICAgICAgIHRtcCA9IFtdO1xuICAgICAgICB0bXAucHVzaCggJzxkaXYgY2xhc3M9XCJvcHRpb24tZ3JvdXAgb3B0aW9uLWNvbWJvXCI+JyApO1xuICAgICAgICBcbiAgICAgICAgdmFyIHgsIGNoZWNrZWQgPSAnJztcbiAgICAgICAgXG4gICAgICAgIGZvciggeCBpbiBDT05GSUdVUkUuZWRpdG9yIClcbiAgICAgICAge1xuICAgICAgICAgICAgY2hlY2tlZCA9ICcnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIHR5cGVvZiBDT05GSUdVUkUuZWRpdG9yW3hdWydkZWZhdWx0J10gIT09ICd1bmRlZmluZWQnICYmIENPTkZJR1VSRS5lZGl0b3JbeF1bJ2RlZmF1bHQnXSA9PSAxIClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkID0gJyBjaGVja2VkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG1wLnB1c2goICc8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmX2VkaXRvclsnICsgaW5kZXggKyAnXVwiIHZhbHVlPVwiJyArIENPTkZJR1VSRS5lZGl0b3JbeF1bJ3N5c3RlbSddICsgJ1wiICcgKyBjaGVja2VkICsgJz48c3BhbiBjbGFzcz1cIm9wdGlvblwiPicgKyBDT05GSUdVUkUuZWRpdG9yW3hdWyduYW1lJ10gKyAnPC9zcGFuPjwvbGFiZWw+JyApO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0bXAucHVzaCggJzwvZGl2PicgKTtcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBpZiAoIHR5cGVvZiBDT05GSUdVUkUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBDT05GSUdVUkUuZWRpdG9yX21vZGUgIT09ICd1bmRlZmluZWQnIClcbiAgICAgICAge1xuICAgICAgICAgICAgdG1wLnB1c2goICc8ZGl2IGNsYXNzPVwiY2IgbWIxMFwiPjwvZGl2PicgKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdG1wLnB1c2goICc8ZGl2IGNsYXNzPVwib3B0aW9uLWdyb3VwXCI+JyApO1xuICAgICAgICAgICAgICAgIGZvciggeCBpbiBDT05GSUdVUkUuZWRpdG9yX21vZGUgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdG1wLnB1c2goICc8bGFiZWw+PGlucHV0IHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJmX2VkaXRvcl9tb2RlWycgKyBpbmRleCArICddXCIgdmFsdWU9XCInICsgQ09ORklHVVJFLmVkaXRvcl9tb2RlWyB4IF0gKyAnXCI+PHNwYW4gY2xhc3M9XCJvcHRpb25cIj4nICsgQ09ORklHVVJFLmVkaXRvcl9tb2RlWyB4IF0gKyAnPC9zcGFuPjwvbGFiZWw+JyApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB0bXAucHVzaCggJzwvZGl2PicgKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgc3RyLnB1c2goIHRtcC5qb2luKCdcXG4nKSApO1xuICAgIH1cbiAgICBcbiAgICBpZiAoIHR5cGUgPT0gJ3JlZGFjdG9yJyAmJiB0eXBlb2YgQ09ORklHVVJFICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgQ09ORklHVVJFLnJlZGFjdG9yICE9PSAndW5kZWZpbmVkJyApXG4gICAge1xuICAgICAgICB0bXAgPSBbXTtcbiAgICAgICAgdG1wLnB1c2goICc8ZGl2IGNsYXNzPVwiZ3JvdXBcIj4nICk7XG4gICAgICAgIFxuICAgICAgICB2YXIgeCwgY2hlY2tlZCA9ICcnO1xuXG4gICAgICAgIGZvciggeCBpbiBDT05GSUdVUkUucmVkYWN0b3IgKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKENPTkZJR1VSRS5yZWRhY3Rvclt4XVsnbmFtZSddKSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mKENPTkZJR1VSRS5yZWRhY3Rvclt4XVsnc3lzdGVtJ10pICE9PSAndW5kZWZpbmVkJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjaGVja2VkID0gJyc7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYgKCB0eXBlb2YgQ09ORklHVVJFLnJlZGFjdG9yW3hdWydkZWZhdWx0J10gIT09ICd1bmRlZmluZWQnICYmIENPTkZJR1VSRS5yZWRhY3Rvclt4XVsnZGVmYXVsdCddID09IDEgKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZCA9ICcgY2hlY2tlZCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdG1wLnB1c2goICc8bGFiZWwgY2xhc3M9XCJncm91cF9faXRlbVwiPjxpbnB1dCB0eXBlPVwicmFkaW9cIiBjbGFzcz1cImdyb3VwX19pdGVtX19yYlwiIG5hbWU9XCJmX3JlZGFjdG9yWycgKyBpbmRleCArICddXCIgdmFsdWU9XCInICsgQ09ORklHVVJFLnJlZGFjdG9yW3hdWydzeXN0ZW0nXSArICdcIicgKyBjaGVja2VkICsgJz48c3BhbiBjbGFzcz1cImdyb3VwX19pdGVtX19zdHlsZVwiPjwvc3Bhbj48c3BhbiBjbGFzcz1cImdyb3VwX19pdGVtX190ZXh0XCI+JyArIENPTkZJR1VSRS5yZWRhY3Rvclt4XVsnbmFtZSddICsgJzwvc3Bhbj48L2xhYmVsPicgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgdG1wLnB1c2goICc8L2Rpdj4nICk7XG4gICAgICAgIFxuICAgICAgICBzdHIucHVzaCggdG1wLmpvaW4oJ1xcbicpICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHN0ci5qb2luKCdcXG4nKTtcbn1cblxuZnVuY3Rpb24gc3dpdGNoX3R5cGVzKG9iailcbntcbiAgICBwX29iaiA9ICQob2JqKS5jbG9zZXN0KCd0ZCcpO1xuICAgIGlmICggb2JqLmNoZWNrZWQgKVxuICAgIHtcbiAgICAgICAgJChcIi5jYXNlMVwiLHBfb2JqKS5zaG93KCk7XG4gICAgICAgICQoXCIuY2FzZTEgaW5wdXRcIixwX29iaikuYXR0cih7XCJkaXNhYmxlZFwiOiBmYWxzZX0pO1xuICAgICAgICAkKFwiLmNhc2UwXCIscF9vYmopLmhpZGUoKTtcbiAgICAgICAgJChcIi5jYXNlMCBpbnB1dFwiLHBfb2JqKS5hdHRyKHtcImRpc2FibGVkXCI6IHRydWV9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgICQoXCIuY2FzZTBcIixwX29iaikuc2hvdygpO1xuICAgICAgICAkKFwiLmNhc2UwIGlucHV0XCIscF9vYmopLmF0dHIoe1wiZGlzYWJsZWRcIjogZmFsc2V9KTtcbiAgICAgICAgJChcIi5jYXNlMVwiLHBfb2JqKS5oaWRlKCk7XG4gICAgICAgICQoXCIuY2FzZTEgaW5wdXRcIixwX29iaikuYXR0cih7XCJkaXNhYmxlZFwiOiB0cnVlfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBodW1hblNpemUoYnl0ZXMpIHtcbiAgICBpZiAodHlwZW9mIGJ5dGVzICE9PSAnbnVtYmVyJykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIFxuICAgIGlmIChieXRlcyA+PSAxMDAwMDAwMDAwKSB7XG4gICAgICAgIHJldHVybiAoYnl0ZXMgLyAxMDAwMDAwMDAwKS50b0ZpeGVkKDIpICsgJyDQk9CxJztcbiAgICB9XG5cbiAgICBpZiAoYnl0ZXMgPj0gMTAwMDAwMCkge1xuICAgICAgICByZXR1cm4gKGJ5dGVzIC8gMTAwMDAwMCkudG9GaXhlZCgyKSArICcg0JzQsSc7XG4gICAgfVxuXG4gICAgaWYgKGJ5dGVzID49IDEwMjQpXG4gICAge1xuICAgICAgICByZXR1cm4gKGJ5dGVzIC8gMTAwMCkudG9GaXhlZCgyKSArICcg0JrQsSc7XG4gICAgfVxuXG4gICAgcmV0dXJuIGJ5dGVzICsgJyDQsSc7XG59XG5cbmZ1bmN0aW9uIGFkZEV4dGVuZGV0KCkge1xuICAgICQucG9zdChcbiAgICAgICAgXCIvXCIgKyBBRE1JTl9ESVIgKyBcIi9hamF4L3ZvdGUvXCIsXG4gICAgICAgIHsgXG4gICAgICAgICAgICBhY3Rpb246ICQoXCIjYWN0aW9uXCIpLmF0dHIoXCJ2YWx1ZVwiKSAgLFxuICAgICAgICAgICAgaWQ6ICQoXCIjaWRcIikuYXR0cihcInZhbHVlXCIpICxcbiAgICAgICAgICAgIHRpdGxlOiAkKFwiI3RpdGxlXCIpLmF0dHIoXCJ2YWx1ZVwiKSAsXG4gICAgICAgICAgICBvcmQ6ICQoXCIjb3JkXCIpLmF0dHIoXCJ2YWx1ZVwiKSAsXG4gICAgICAgICAgICB2aXNpYmxlOiAkKFwiI1ZvdGVBZGRRdWVzdGlvbnMgaW5wdXQ6cmFkaW9bbmFtZT12aXNpYmxlXTpjaGVja2VkXCIpLnZhbCgpXG4gICAgICAgIH0sXG4gICAgICAgIG9uQWpheFN1Y2Nlc3NBZGRcbiAgICApO1xuICAgIGZ1bmN0aW9uIG9uQWpheFN1Y2Nlc3NBZGQoZGF0YSkgeyAvL1xuICAgICAgICB2YXIgdmlzO1xuICAgICAgICBpZiAoICQoXCIjVm90ZUFkZFF1ZXN0aW9ucyBpbnB1dDpyYWRpb1tuYW1lPXZpc2libGVdOmNoZWNrZWRcIikudmFsKCkgPT0gMSApIHZpcyA9IFwi0JTQsFwiO1xuICAgICAgICBlbHNlICB2aXMgPSBcItCd0LXRglwiO1xuXG4gICAgICAgIHZhciBpbm5lciA9ICc8dHIgaWQ9XCJ0cl8nICsgZGF0YSArICdcIj4nO1xuICAgICAgICBpbm5lciArPSAnPHRkPic7XG4gICAgICAgIGlubmVyICs9ICc8aW5wdXQgbmFtZT1cInBhcmVudF9pZF8nICsgZGF0YSArICdcIiBpZD1cInBhcmVudF9pZF8nICsgZGF0YSArICdcIiB2YWx1ZT1cIjJcIiB0eXBlPVwiaGlkZGVuXCI+JztcbiAgICAgICAgaW5uZXIgKz0gJzxpbnB1dCBuYW1lPVwiaWRfJyArIGRhdGEgKyAnXCIgaWQ9XCJpZF8nICsgZGF0YSArICdcIiB2YWx1ZT1cIicgKyBkYXRhICsgJ1wiIHR5cGU9XCJoaWRkZW5cIj4nO1xuICAgICAgICBpbm5lciArPSAnPGRpdiBpZD1cInRpdGxlXycgKyBkYXRhICsgJ1wiPjxiPicgKyAkKFwiI3RpdGxlXCIpLmF0dHIoXCJ2YWx1ZVwiKSArICc8L2I+PC9kaXY+JztcbiAgICAgICAgaW5uZXIgKz0gJzxkaXYgaWQ9XCJ0aXRsZV9pXycgKyBkYXRhICsgJ1wiIHN0eWxlPVwiZGlzcGxheTogbm9uZTtcIj4nO1xuICAgICAgICBpbm5lciArPSAnPGlucHV0IG5hbWU9XCJ0aXRsZV8nICsgZGF0YSArICdcIiB2YWx1ZT1cIicgKyAkKFwiI3RpdGxlXCIpLmF0dHIoXCJ2YWx1ZVwiKSArICdcIiBjbGFzcz1cImJvcmQgcGFkZCB3MTAwXCIgaWQ9XCJ0aXRsZV9pbnB1dF8nICsgZGF0YSArICdcIiB0eXBlPVwidGV4dFwiPic7XG4gICAgICAgIGlubmVyICs9ICc8cCBhbGlnbj1cInJpZ2h0XCI+JztcbiAgICAgICAgaW5uZXIgKz0gJzxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiBvbmNsaWNrPVwic2F2ZUV4dGVuZGV0KFxcJycgKyBkYXRhICsgJ1xcJyk7XCI+0KHQvtGF0YDQsNC90LjRgtGMPC9hPiB8ICc7XG4gICAgICAgIGlubmVyICs9ICc8YSBocmVmPVwiamF2YXNjcmlwdDo7XCIgb25jbGljaz1cImNhbmNlbEV4dGVuZGV0KFxcJycgKyBkYXRhICsgJ1xcJyk7XCI+0J7RgtC80LXQvdCwPC9hPiAnO1xuICAgICAgICBpbm5lciArPSAnPC9wPic7XG4gICAgICAgIGlubmVyICs9ICc8L2Rpdj4nO1xuICAgICAgICBpbm5lciArPSAnPC90ZD4nO1xuICAgICAgICBpbm5lciArPSAnPHRkPic7XG4gICAgICAgIGlubmVyICs9ICc8ZGl2IGlkPVwib3JkXycgKyBkYXRhICsgJ1wiPjxiPicgKyAkKFwiI29yZFwiKS5hdHRyKFwidmFsdWVcIikgKyAnPC9iPjwvZGl2Pic7XG4gICAgICAgIGlubmVyICs9ICc8ZGl2IGlkPVwib3JkX2lfJyArIGRhdGEgKyAnXCIgc3R5bGU9XCJkaXNwbGF5OiBub25lO1wiPic7XG4gICAgICAgIGlubmVyICs9ICc8aW5wdXQgbmFtZT1cIm9yZF8nICsgZGF0YSArICdcIiB2YWx1ZT1cIicgKyAkKFwiI29yZFwiKS5hdHRyKFwidmFsdWVcIikgKyAnXCIgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiBjbGFzcz1cImJvcmQgcGFkZCB3MTAwXCIgaWQ9XCJvcmRfaW5wdXRfJyArIGRhdGEgKyAnXCIgdHlwZT1cInRleHRcIj4nOyAgICAgICAgICAgICBcbiAgICAgICAgaW5uZXIgKz0gJzwvZGl2Pic7XG4gICAgICAgIGlubmVyICs9ICc8L3RkPic7XG5cbiAgICAgICAgaW5uZXIgKz0gJzx0ZCBhbGlnbj1cImNlbnRlclwiPic7XG4gICAgICAgIGlubmVyICs9ICc8ZGl2IGlkPVwidmlzaWJsZV8nICsgZGF0YSArICdcIj48Yj4nICsgdmlzICsgJzwvYj48L2Rpdj4nO1xuICAgICAgICBpbm5lciArPSAnPGRpdiBpZD1cInZpc2libGVfaV8nICsgZGF0YSArICdcIiBzdHlsZT1cImRpc3BsYXk6IG5vbmU7XCI+JztcbiAgICAgICAgaW5uZXIgKz0gJzxpbnB1dCBuYW1lPVwidmlzaWJsZV8nICsgZGF0YSArICdcIiB2YWx1ZT1cIjFcIiBjaGVja2VkPVwiY2hlY2tlZFwiIG9uY2xpY2s9XCIkKFxcJyN2aXNfJyArIGRhdGEgKyAnXFwnKS52YWwoXFwnMVxcJyk7XCIgaWQ9XCJ2aXNpYmxlX2lucHV0XycgKyBkYXRhICsgJ18xXCIgdHlwZT1cInJhZGlvXCI+0JTQsCAmbmJzcDsmbmJzcDsnO1xuICAgICAgICBpbm5lciArPSAnPGlucHV0IG5hbWU9XCJ2aXNpYmxlXycgKyBkYXRhICsgJ1wiIHZhbHVlPVwiMFwiIG9uY2xpY2s9XCIkKFxcJyN2aXNfJyArIGRhdGEgKyAnXFwnKS52YWwoXFwnMFxcJyk7XCIgaWQ9XCJ2aXNpYmxlX2lucHV0XycgKyBkYXRhICsgJ18wXCIgdHlwZT1cInJhZGlvXCI+0J3QtdGCJztcbiAgICAgICAgaW5uZXIgKz0gJzxpbnB1dCBuYW1lPVwidmlzXycgKyBkYXRhICsgJ1wiIGlkPVwidmlzXycgKyBkYXRhICsgJ1wiIHZhbHVlPVwiXCIgdHlwZT1cImhpZGRlblwiPic7XG4gICAgICAgIGlubmVyICs9ICc8L2Rpdj4nO1xuICAgICAgICBpbm5lciArPSAnPC90ZD4nO1xuICAgICAgICBpbm5lciArPSAnPHRkPic7XG4gICAgICAgIGlubmVyICs9ICc8YSBocmVmPVwiI1wiIGNsYXNzPVwiaWNvbiBpY29uLWVkaXRcIiBvbmNsaWNrPVwiZWRpdEV4dGVuZGV0KFxcJycgKyBkYXRhICsgJ1xcJylcIj48L2E+JztcbiAgICAgICAgaW5uZXIgKz0gJzxhIGhyZWY9XCIjXCIgY2xhc3M9XCJpY29uIGljb24tZGVsZXRlIHJlbW92ZS10cmlnZ2VyXCIgb25DbGljaz1cImRlbEV4dGVuZGV0KFxcJycgKyBkYXRhICsgJ1xcJylcIj48L2E+JztcbiAgICAgICAgaW5uZXIgKz0gJzwvdGQ+JztcbiAgICAgICAgaW5uZXIgKz0gJzwvdHI+JztcblxuICAgICAgICAvLyAgSU5TRVJUIE5FVyBGSUVMRFxuICAgICAgICAkKGlubmVyKS5pbnNlcnRCZWZvcmUoXCIjYWpheF9hZGRfZm9ybVwiKTtcbiAgICAgICAgXG4gICAgICAgIC8vICBSRVNFVCBGT1JNUyBFTEVNRU5UU1xuICAgICAgICAkKFwiI3RpdGxlXCIpLmF0dHIoe3ZhbHVlOlwiXCJ9KTtcbiAgICAgICAgJChcIiNvcmRcIikuYXR0cih7dmFsdWU6XCJcIn0pO1xuICAgICAgICBcbiAgICAgICAgLy8gIEhJREUgRk9STVxuICAgICAgICAkKFwiI2FqYXhfYWRkX2Zvcm1cIikuaGlkZSgpO1xuICAgIH1cbn1cbiAgICBmdW5jdGlvbiBzYXZlRXh0ZW5kZXQoaWQpIHtcbiAgICAkLnBvc3QoXG4gICAgICAgIFwiL1wiICsgQURNSU5fRElSICsgXCIvYWpheC92b3RlL1wiLFxuICAgICAgICB7XG4gICAgICAgICAgICBhY3Rpb246IFwidXBkYXRlXCIgLFxuICAgICAgICAgICAgaWQ6ICQoXCIjaWRfXCIraWQpLmF0dHIoXCJ2YWx1ZVwiKSAsXG4gICAgICAgICAgICBwYXJlbnRfaWQ6ICQoXCIjcGFyZW50X2lkX1wiK2lkKS5hdHRyKFwidmFsdWVcIikgLFxuICAgICAgICAgICAgdGl0bGU6ICQoXCIjdGl0bGVfaW5wdXRfXCIraWQpLmF0dHIoXCJ2YWx1ZVwiKSAsXG4gICAgICAgICAgICBvcmQ6ICQoXCIjb3JkX2lucHV0X1wiK2lkKS5hdHRyKFwidmFsdWVcIikgLFxuICAgICAgICAgICAgdmlzaWJsZTogJChcIiNWb3RlQWRkUXVlc3Rpb25zIGlucHV0OnJhZGlvW25hbWU9dmlzaWJsZV9cIitpZCtcIl06Y2hlY2tlZFwiKS52YWwoKVxuICAgICAgICB9LCBcbiAgICAgICAgb25BamF4U3VjY2Vzc1NhdmVcbiAgICApO1xuICAgIGZ1bmN0aW9uIG9uQWpheFN1Y2Nlc3NTYXZlKGRhdGEpIHtcbiAgICAgICAgdmFyIHZpcztcbiAgICAgICAgaWYgKCAkKFwiI3Zpc19cIitpZCkudmFsKCkgPT0gMSApIHZpcyA9IFwi0JTQsFwiO1xuICAgICAgICBlbHNlICB2aXMgPSBcItCd0LXRglwiO1xuICAgICAgICAkKFwiI3RpdGxlX1wiK2lkKS5odG1sKCBcIjxiPlwiKyQoXCIjdGl0bGVfaW5wdXRfXCIraWQpLmF0dHIoXCJ2YWx1ZVwiKStcIjwvYj5cIiApO1xuICAgICAgICAkKFwiI29yZF9cIitpZCkuaHRtbCggJChcIiNvcmRfaW5wdXRfXCIraWQpLmF0dHIoXCJ2YWx1ZVwiKSApO1xuICAgICAgICAkKFwiI3Zpc2libGVfXCIraWQpLmh0bWwoIHZpcyApO1xuICAgICAgICBcbiAgICAgICAgJChcIiN0aXRsZV9cIitpZCkuc2hvdygpO1xuICAgICAgICAkKFwiI29yZF9cIitpZCkuc2hvdygpO1xuICAgICAgICAkKFwiI3Zpc2libGVfXCIraWQpLnNob3coKTtcbiAgICAgICAgJChcIiN0aXRsZV9pX1wiK2lkKS5oaWRlKCk7XG4gICAgICAgICQoXCIjb3JkX2lfXCIraWQpLmhpZGUoKTtcbiAgICAgICAgJChcIiN2aXNpYmxlX2lfXCIraWQpLmhpZGUoKTtcbiAgICB9XG4gICAgXG59XG4vL1xuZnVuY3Rpb24gZWRpdEV4dGVuZGV0KGlkKSB7XG4gICAgJChcIiN0aXRsZV9cIitpZCkuaGlkZSgpO1xuICAgICQoXCIjb3JkX1wiK2lkKS5oaWRlKCk7XG4gICAgJChcIiN2aXNpYmxlX1wiK2lkKS5oaWRlKCk7XG4gICAgJChcIiN0aXRsZV9pX1wiK2lkKS5zaG93KCk7XG4gICAgJChcIiNvcmRfaV9cIitpZCkuc2hvdygpO1xuICAgICQoXCIjdmlzaWJsZV9pX1wiK2lkKS5zaG93KCk7XG59XG4vL1xuZnVuY3Rpb24gZGVsRXh0ZW5kZXQoaWQpIHtcbiAgICBpZiAoY3AuZGlhbG9nKFwi0JLRiyDQtNC10LnRgdGC0LLQuNGC0LXQu9GM0L3QviDRhdC+0YLQuNGC0LUg0YPQtNCw0LvQuNGC0Ywg0LfQsNC/0LjRgdGMP1wiKSkge1xuICAgICAgICAkLnBvc3QoXG4gICAgICAgICAgICBcIi9cIiArIEFETUlOX0RJUiArIFwiL2FqYXgvdm90ZS9cIixcbiAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgYWN0aW9uOiBcImRlbFwiICxcbiAgICAgICAgICAgICAgICBpZDogJChcIiNpZF9cIitpZCkudmFsKClcbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgb25BamF4U3VjY2Vzc0RlbFxuICAgICAgICApO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uQWpheFN1Y2Nlc3NEZWwoZGF0YSl7XG4gICAgJChcIiN0cl9cIitkYXRhKS5yZW1vdmUoKTtcbn1cbi8vXG5mdW5jdGlvbiBjYW5jZWxFeHRlbmRldChpZCkgeyAgICAgICBcbiAgICAkKFwiI3RpdGxlX1wiK2lkKS5zaG93KCk7XG4gICAgJChcIiNvcmRfXCIraWQpLnNob3coKTtcbiAgICAkKFwiI3Zpc2libGVfXCIraWQpLnNob3coKTtcbiAgICAkKFwiI3RpdGxlX2lfXCIraWQpLmhpZGUoKTtcbiAgICAkKFwiI29yZF9pX1wiK2lkKS5oaWRlKCk7XG4gICAgJChcIiN2aXNpYmxlX2lfXCIraWQpLmhpZGUoKTtcbn1cblxuZnVuY3Rpb24gb25BamF4U3VjY2VzcyhkYXRhKSB7XG4gICAgYWxlcnQoZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGVkaXRUaXRsZSggaWQsIHRpdGxlIClcbntcbiAgICBpZiAodHlwZW9mKHRpdGxlKSA9PSAndW5kZWZpbmVkJylcbiAgICB7XG4gICAgICAgIHZhciB0aXRsZSA9ICQoJyNmdGl0bGVfJyArIGlkKS50ZXh0KCk7XG4gICAgfVxuXG4gICAgdmFyIG5hbWUgPSBwcm9tcHQoJ9CS0LLQtdC00LjRgtC1INC90L7QstC+0LUg0LjQvNGPJywgdGl0bGUpO1xuICAgIFxuICAgIGlmIChuYW1lICE9ICcnICYmIG5hbWUgIT0gdGl0bGUgJiYgbmFtZSAhPT0gbnVsbClcbiAgICB7XG4gICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICB1cmw6ICcvJyArIEFETUlOX0RJUiArICcvbWV0YS9maWxlbmFtZScsXG4gICAgICAgICAgICB0eXBlOiBcInBvc3RcIixcbiAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXNwb25zZSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnI2Z0aXRsZV8nICsgaWQpLmh0bWwoIG5hbWUgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZWRpdFZpc2libGUoaWQsIHZpc2libGUpXG57XG4gICAgdmlzaWJsZSA9ICh2aXNpYmxlID09IDEgPyAwIDogMSk7XG5cbiAgICAkLmFqYXgoe1xuICAgICAgICB1cmw6ICcvJyArIEFETUlOX0RJUiArICcvbWV0YS9maWxldmlzaWJsZScsXG4gICAgICAgIHR5cGU6IFwicG9zdFwiLFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICB2aXNpYmxlOiB2aXNpYmxlXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGFUeXBlOiAnSlNPTicsXG4gICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3BvbnNlKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSB0cnVlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQoJyNmdmlzaWJsZV8nICsgaWQpLnJlbW92ZUNsYXNzKCdpY29uLWV5ZSBpY29uLWV5ZS1vZmYnKTtcblxuICAgICAgICAgICAgICAgIGlmICh2aXNpYmxlID09IDEpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAkKCcjZnZpc2libGVfJyArIGlkKS5hZGRDbGFzcygnaWNvbi1leWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoJyNmdmlzaWJsZV8nICsgaWQpLmFkZENsYXNzKCdpY29uLWV5ZS1vZmYnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGVkaXRPcmQoIGlkLCBvcmQgKVxue1xuXHRjb25zdCBuZXdvcmQgPSBwcm9tcHQoJ9Cf0L7RgNGP0LTQvtC6Jywgb3JkKTtcblxuXHRpZiAoIW5ld29yZCkgcmV0dXJuIGZhbHNlO1xuXG5cdGlmIChuZXdvcmQgIT0gJycgJiYgbmV3b3JkICE9IG9yZCkge1xuXHRcdCQucG9zdCgnLycgKyBBRE1JTl9ESVIgKyAnL2FqYXgvbWV0YS8nLCB7IGFjdGlvbjogXCJuZXdmaWxlb3JkXCIsIG5ld29yZDogbmV3b3JkLCBpZDogaWQgfSwgZnVuY3Rpb24oZGF0YSkge1xuXHRcdFx0aWYgKGRhdGEgPT0gMSkge1xuXHRcdFx0XHQkKCcjb3JkZmlsZV8nICsgaWQpLmh0bWwobmV3b3JkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIGFqYXhfdmlzX3RvZ2dsZShvYmosIGlkLCBtb2RfaWQpXG57XG4gICAgJChvYmopLmFwcGVuZCgnPGkgY2xhc3M9XCJsb2FkaW5nXCI+PC9pPicpO1xuICAgIFxuXHQkLnBvc3QoICcvJyArIEFETUlOX0RJUiArICcvYWpheC9zdHJ1Y3R1cmUvJywgeyBhY3Q6IFwidG9nZ2xlX3Zpc2libGVcIiwgbW9kX2lkOiBtb2RfaWQsIGlkOiBpZCB9LCBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgIGlmICggZGF0YSA9PSAxIClcbiAgICAgICAge1xuICAgICAgICAgICAgJChvYmopLnRvZ2dsZUNsYXNzKFwiaWNvbi1leWVcIikudG9nZ2xlQ2xhc3MoXCJpY29uLWV5ZS1vZmZcIikuaHRtbCgnJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBcblx0cmV0dXJuICExO1xufVxuXG5mdW5jdGlvbiBzaG93X3Rvb2x0aXBzKGlkKVxue1xuXHQkKFwiI1wiK2lkKS50b2dnbGUoKTtcbn1cblxuZnVuY3Rpb24gbXlfdW5jaGVjaygpe1xuXHQkKFwiLmFjY2Vzc1wiKS5lYWNoKGZ1bmN0aW9uKCl7XG5cdFx0JCh0aGlzKS5hdHRyKHtjaGVja2VkOicnfSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBDaGVja0FuZFN1Ym1pdChpZCl7XG4gICAgdmFyIGZsYWcgPSB0cnVlO1xuXHQkKFwiI1wiK2lkK1wiIC5uZXNzXCIpLmVhY2goZnVuY3Rpb24oKXtcblx0XHRpZiAoICQodGhpcykudmFsKCkgPT0gXCJcIiApIHtcblx0XHRcdCQodGhpcykuZm9jdXMoKS5hZGRDbGFzcyhcImVycm9yXCIpO1xuXHRcdFx0ZmxhZyA9IGZhbHNlO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKFwiZXJyb3JcIik7XG5cdFx0fVxuXHR9KTtcblx0aWYgKGZsYWcpXG5cdFx0JChcIiNcIitpZCkuc3VibWl0KCk7XG5cdGVsc2UgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzZXRTb3J0KG9iaixjb29raWVfbmFtZSl7XG5cdHZhbHVlID0gJChvYmopLnZhbCgpO1xuXHRzZXRDb29raWUoY29va2llX25hbWUsdmFsdWUpO1xuXHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZjtcbn1cblxuZnVuY3Rpb24gZm9ybV9zdWJtaXQoaWQscGFyYW0pXG57XG5cdGlmIChwYXJhbSA9PSBcInNhdmVcIilcblx0XHQkKFwiI1wiK2lkKS5zdWJtaXQoKTtcblx0aWYgKHBhcmFtID09IFwiYXBwbHlcIilcblx0XHQkKFwiI1wiK2lkKS5zdWJtaXQoKTtcblx0ZWxzZVxuXHRcdCQoXCIjXCIraWQpLnN1Ym1pdCgpO1xufVxuXG5mdW5jdGlvbiBvcGVud2luKCBpbWcgLCB3ICwgaCAsIHRpdGxlIClcbntcblx0aWYgKCBod25kICE9IG51bGwgKVxuXHRod25kLmNsb3NlKCk7XG5cdGh3bmQgPSB3aW5kb3cub3BlbiggaW1nICwgXCJcIiAsIFwidG9vbGJhcj1ubyAsIGxvY2F0aW9uPW5vICwgZGlyZWN0b3JpZXM9bm8gLCByZXNpemFibGU9bm8gLCB3aWR0aD1cIiArIHcgKyBcIiAsIGhlaWdodD1cIiArIGggKTtcblx0aHduZC5kb2N1bWVudC5vcGVuKCk7XG5cdGh3bmQuZG9jdW1lbnQud3JpdGUoXCI8aHRtbD5cIik7XG5cdGh3bmQuZG9jdW1lbnQud3JpdGUoXCI8aGVhZD5cIik7XG5cdGh3bmQuZG9jdW1lbnQud3JpdGUoXCI8dGl0bGU+XCIgKyB0aXRsZSArIFwiPC90aXRsZT5cIik7XG5cdGh3bmQuZG9jdW1lbnQud3JpdGUoXCI8L2hlYWQ+XCIpO1xuXHRod25kLmRvY3VtZW50LndyaXRlKFwiPGJvZHkgYmdjb2xvcj0jZmZmZmZmIGJvdHRvbW1hcmdpbj0wIGxlZnRtYXJnaW49MCBtYXJnaW5oZWlnaHQ9MCBtYXJnaW53aWR0aD0wIHJpZ2h0bWFyZ2luPTAgdG9wbWFyZ2luPTAgc3R5bGU9J2JvcmRlcjowcHg7Jz5cIik7XG5cdGh3bmQuZG9jdW1lbnQud3JpdGUoXCI8dGFibGUgYWxpZ249Y2VudGVyIHdpZHRoPTEwMCUgaGVpZ2h0PTEwMCUgY2VsbHNwYWNpbmc9MCBjZWxscGFkZGluZz0wIGJvcmRlcj0wPlwiKTtcblx0aHduZC5kb2N1bWVudC53cml0ZShcIjx0cj48dGQ+PGltZyBzcmM9J1wiICsgaW1nICsgXCInIGJvcmRlcj0wPjwvdGQ+PC90cj5cIik7XG5cdGh3bmQuZG9jdW1lbnQud3JpdGUoXCI8L3RhYmxlPjwvYm9keT48L2h0bWw+XCIpO1xuXHRod25kLmRvY3VtZW50LmNsb3NlKCk7XG59XG5cbmZ1bmN0aW9uIG9wZW53aW5fdGV4dCggdXJsICwgdyAsIGggKVxue1xuXHR3aW5kb3cub3BlbiggdXJsICwgXCJcIiAsIFwidG9vbGJhcj1ubyAsIGxvY2F0aW9uPW5vICwgZGlyZWN0b3JpZXM9bm8gLCByZXNpemFibGU9bm8gLCBzY3JvbGxiYXJzPW5vICwgd2lkdGg9XCIgKyB3ICsgXCIgLCBoZWlnaHQ9XCIgKyBoICk7XG59XG5cbmZ1bmN0aW9uIGx0cmltKHN0cilcbnsgXG5cdGZvcih2YXIgayA9IDA7IGsgPCBzdHIubGVuZ3RoICYmIGlzV2hpdGVzcGFjZShzdHIuY2hhckF0KGspKTsgaysrKTtcblx0cmV0dXJuIHN0ci5zdWJzdHJpbmcoaywgc3RyLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIHJ0cmltKHN0cilcbntcblx0Zm9yKHZhciBqPXN0ci5sZW5ndGgtMTsgaj49MCAmJiBpc1doaXRlc3BhY2Uoc3RyLmNoYXJBdChqKSk7IGotLSk7XG5cdHJldHVybiBzdHIuc3Vic3RyaW5nKDAsaisxKTtcbn1cblxuZnVuY3Rpb24gdHJpbShzdHIpXG57XG5cdHN0ciA9IHN0ci5yZXBsYWNlKC9cXHN7Mix9L2csJyAnKTtcblx0cmV0dXJuIGx0cmltKHJ0cmltKHN0cikpO1xufVxuXG5mdW5jdGlvbiBpc1doaXRlc3BhY2UoY2hhclRvQ2hlY2spXG57XG5cdHZhciB3aGl0ZXNwYWNlQ2hhcnMgPSBcIiBcXHRcXG5cXHJcXGZcIjtcblx0cmV0dXJuICh3aGl0ZXNwYWNlQ2hhcnMuaW5kZXhPZihjaGFyVG9DaGVjaykgIT0gLTEpO1xufVxuXG5mdW5jdGlvbiB0cmFuc2xpdGVyYXRlKHN0cmluZywgdXJsKVxue1xuICAgIHN0cmluZyA9IHRyaW0oc3RyaW5nLnRvTG93ZXJDYXNlKCkpO1xuXG4gICAgaWYgKHN0cmluZyAhPSAnJylcbiAgICB7XG4gICAgICAgIHZhciBjaGFyX21hcCA9IHt9LCB0ZXN0ID0gW10sIHJlc3VsdCA9ICcnLCB4O1xuXG4gICAgICAgIGNoYXJfbWFwID0ge1xuICAgICAgICAgICAgLy8gTGF0aW5cbiAgICAgICAgICAgICfDoCc6ICdhJywgJ8OhJzogJ2EnLCAnw6InOiAnYScsICfDoyc6ICdhJywgJ8OkJzogJ2EnLCAnw6UnOiAnYScsICfDpic6ICdhZScsICfDpyc6ICdjJywgXG4gICAgICAgICAgICAnw6gnOiAnZScsICfDqSc6ICdlJywgJ8OqJzogJ2UnLCAnw6snOiAnZScsICfDrCc6ICdpJywgJ8OtJzogJ2knLCAnw64nOiAnaScsICfDryc6ICdpJywgXG4gICAgICAgICAgICAnw7AnOiAnZCcsICfDsSc6ICduJywgJ8OyJzogJ28nLCAnw7MnOiAnbycsICfDtCc6ICdvJywgJ8O1JzogJ28nLCAnw7YnOiAnbycsICfFkSc6ICdvJywgXG4gICAgICAgICAgICAnw7gnOiAnbycsICfDuSc6ICd1JywgJ8O6JzogJ3UnLCAnw7snOiAndScsICfDvCc6ICd1JywgJ8WxJzogJ3UnLCAnw70nOiAneScsICfDvic6ICd0aCcsIFxuICAgICAgICAgICAgJ8O/JzogJ3knLFxuXG4gICAgICAgICAgICAvLyBHcmVlayAgICAgICAgICAgXG4gICAgICAgICAgICAnzrEnOiAnYScsICfOsic6ICdiJywgJ86zJzogJ2cnLCAnzrQnOiAnZCcsICfOtSc6ICdlJywgJ862JzogJ3onLCAnzrcnOiAnaCcsICfOuCc6ICc4JyxcbiAgICAgICAgICAgICfOuSc6ICdpJywgJ866JzogJ2snLCAnzrsnOiAnbCcsICfOvCc6ICdtJywgJ869JzogJ24nLCAnzr4nOiAnMycsICfOvyc6ICdvJywgJ8+AJzogJ3AnLFxuICAgICAgICAgICAgJ8+BJzogJ3InLCAnz4MnOiAncycsICfPhCc6ICd0JywgJ8+FJzogJ3knLCAnz4YnOiAnZicsICfPhyc6ICd4JywgJ8+IJzogJ3BzJywgJ8+JJzogJ3cnLFxuICAgICAgICAgICAgJ86sJzogJ2EnLCAnzq0nOiAnZScsICfOryc6ICdpJywgJ8+MJzogJ28nLCAnz40nOiAneScsICfOric6ICdoJywgJ8+OJzogJ3cnLCAnz4InOiAncycsXG4gICAgICAgICAgICAnz4onOiAnaScsICfOsCc6ICd5JywgJ8+LJzogJ3knLCAnzpAnOiAnaScsXG5cbiAgICAgICAgICAgIC8vIFR1cmtpc2hcbiAgICAgICAgICAgICfFnyc6ICdzJywgJ8SxJzogJ2knLCAnw6cnOiAnYycsICfDvCc6ICd1JywgJ8O2JzogJ28nLCAnxJ8nOiAnZycsIFxuXG4gICAgICAgICAgICAvLyBSdXNzaWFuXG4gICAgICAgICAgICAn0LAnOiAnYScsICfQsSc6ICdiJywgJ9CyJzogJ3YnLCAn0LMnOiAnZycsICfQtCc6ICdkJywgJ9C1JzogJ2UnLCAn0ZEnOiAneW8nLCAn0LYnOiAnemgnLFxuICAgICAgICAgICAgJ9C3JzogJ3onLCAn0LgnOiAnaScsICfQuSc6ICdqJywgJ9C6JzogJ2snLCAn0LsnOiAnbCcsICfQvCc6ICdtJywgJ9C9JzogJ24nLCAn0L4nOiAnbycsXG4gICAgICAgICAgICAn0L8nOiAncCcsICfRgCc6ICdyJywgJ9GBJzogJ3MnLCAn0YInOiAndCcsICfRgyc6ICd1JywgJ9GEJzogJ2YnLCAn0YUnOiAnaCcsICfRhic6ICdjJyxcbiAgICAgICAgICAgICfRhyc6ICdjaCcsICfRiCc6ICdzaCcsICfRiSc6ICdzY2gnLCAn0YonOiAnJywgJ9GLJzogJ3knLCAn0YwnOiAnJywgJ9GNJzogJ2UnLCAn0Y4nOiAneXUnLFxuICAgICAgICAgICAgJ9GPJzogJ3lhJyxcblxuICAgICAgICAgICAgLy8gVWtyYWluaWFuXG4gICAgICAgICAgICAn0ZQnOiAneWUnLCAn0ZYnOiAnaScsICfRlyc6ICd5aScsICfSkSc6ICdnJyxcblxuICAgICAgICAgICAgLy8gQ3plY2hcbiAgICAgICAgICAgICfEjSc6ICdjJywgJ8SPJzogJ2QnLCAnxJsnOiAnZScsICfFiCc6ICduJywgJ8WZJzogJ3InLCAnxaEnOiAncycsICfFpSc6ICd0JywgJ8WvJzogJ3UnLCAnxb4nOiAneicsIFxuXG4gICAgICAgICAgICAvLyBQb2xpc2hcbiAgICAgICAgICAgICfEhSc6ICdhJywgJ8SHJzogJ2MnLCAnxJknOiAnZScsICfFgic6ICdsJywgJ8WEJzogJ24nLCAnw7MnOiAnbycsICfFmyc6ICdzJywgJ8W6JzogJ3onLCAnxbwnOiAneicsXG5cbiAgICAgICAgICAgIC8vIExhdHZpYW5cbiAgICAgICAgICAgICfEgSc6ICdhJywgJ8SNJzogJ2MnLCAnxJMnOiAnZScsICfEoyc6ICdnJywgJ8SrJzogJ2knLCAnxLcnOiAnaycsICfEvCc6ICdsJywgJ8WGJzogJ24nLCAnxaEnOiAncycsICfFqyc6ICd1JywgJ8W+JzogJ3onXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8g0J7Rh9C40YnQsNC10Lwg0L7RgiDQu9C40YjQvdC40YUg0YHQuNC80LLQvtC70L7QslxuXG4gICAgICAgIHJlc3VsdCA9IHN0cmluZy5yZXBsYWNlKC9bXmEtetCwLdGPMC05XS9naSwgJy0nKTtcblxuICAgICAgICBpZiAodXJsID09ICdjeXJpbGxpYycpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IGRlY29kZVVSSUNvbXBvbmVudChyZXN1bHQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVybCA9PSAndHJhbnNsYXRlJylcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh4IGluIGNoYXJfbWFwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFJlZ0V4cCh4LCAnZycpLCBjaGFyX21hcFt4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyByZXN1bHQgPSByZXN1bHQucmVwbGFjZShSZWdFeHAoeCwgJ2cnKSwgY2hhcl9tYXBbeF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yICh4IGluIGNoYXJfbWFwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFJlZ0V4cCh4LCAnZycpLCBjaGFyX21hcFt4XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyDQntGH0LjRidCw0LXQvCDQvtGCINC70LjRiNC90LjRhSDQtNC10YTQuNGB0L7QslxuXG4gICAgICAgIHRlc3QgPSByZXN1bHQuc3BsaXQoJycpO1xuXG4gICAgICAgIGlmICh0ZXN0WzBdID09ICctJylcbiAgICAgICAge1xuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNsaWNlKDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlc3RbdGVzdC5sZW5ndGggLSAxXSA9PSAnLScpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgwLCAtMSk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHJpbmcgPSByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlZG91YmxlKHN0cmluZyk7XG59XG5cbmZ1bmN0aW9uIGJpbmRpbmcobmFtZSwgZWxlbWVudClcbntcbiAgICAkKCdib2R5Jykub24oJ2tleXVwIGJsdXIga2V5cHJlc3MnLCAnaW5wdXRbbmFtZT1cIicgKyBuYW1lICsgJ1wiXScsIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAodGhpcy52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoJ2lucHV0W25hbWU9XCInICsgZWxlbWVudCArICdcIl0nKTtcbiAgICAgICAgICAgIGlmICghJGlucHV0LnByb3AoJ3JlYWRvbmx5JykpIHtcbiAgICAgICAgICAgICAgICAkaW5wdXQudmFsKHRyYW5zbGl0ZXJhdGUodGhpcy52YWx1ZSwgVVJMX1RSQU5TTEFURSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlZG91YmxlKCBzdHJpbmcgKVxue1xuXHRzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSggJ19fJywgJ18nICk7XG4gICAgc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoICdfLV8nLCAnXycgKTtcblx0c3RyaW5nID0gc3RyaW5nLnJlcGxhY2UoICctLScsICctJyApO1xuXHRcblx0aWYgKCBzdHJpbmcuaW5kZXhPZignX18nKSA+IC0xIClcblx0e1xuXHRcdHJldHVybiByZWRvdWJsZSggc3RyaW5nICk7XG5cdH1cblx0XG5cdGlmICggc3RyaW5nLnN1YnN0cigwLDEpID09ICdfJyAmJiBzdHJpbmcubGVuZ3RoID4gMSApXG5cdHtcblx0XHRzdHJpbmcgPSBzdHJpbmcuc3Vic3RyKDEsIHN0cmluZy5sZW5ndGggKVxuXHR9XG5cdFxuXHRyZXR1cm4gc3RyaW5nO1xufVxuXG5mdW5jdGlvbiBhamF4X3RvZ2dsZV9ncm91cChvYmosaWQpXG57XG4gICAgdmFyIHZpc2libGUgPSAwO1xuICAgIFxuICAgIGlmICggJChvYmopLmhhc0NsYXNzKCdpY29uLWV5ZS1vZmYnKSApXG4gICAge1xuICAgICAgICB2aXNpYmxlID0gMTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgICAgdmlzaWJsZSA9IDA7XG4gICAgfVxuICAgIFxuICAgICQob2JqKS5hcHBlbmQoJzxpIGNsYXNzPVwibG9hZGluZ1wiPjwvaT4nKTtcbiAgICBcbiAgICAkLnBvc3QoJy8nICsgQURNSU5fRElSICsgJy9hamF4L21vZHVsZXMvJywgeyBhY3Rpb246IFwiZGV2aXNpYmxlXCIsIGlkOiBpZCwgdmlzaWJsZTogdmlzaWJsZSB9LCBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgaWYgKCBkYXRhID09IDEgKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoICQob2JqKS5oYXNDbGFzcygnaWNvbi1leWUtb2ZmJykgKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICQob2JqKS5yZW1vdmVDbGFzcygnaWNvbi1leWUtb2ZmJykuYWRkQ2xhc3MoJ2ljb24tZXllJykuaHRtbCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKG9iaikucmVtb3ZlQ2xhc3MoJ2ljb24tZXllJykuYWRkQ2xhc3MoJ2ljb24tZXllLW9mZicpLmh0bWwoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZV9tZW51KG9iaixpZClcbntcblx0JChvYmopLnRvZ2dsZUNsYXNzKFwibWludXNcIikudG9nZ2xlQ2xhc3MoXCJwbHVzXCIpLnBhcmVudCgpO1xuXHQkKFwiI2l0ZW1cIitpZCkudG9nZ2xlKCk7XG59XG5cbmZ1bmN0aW9uIHRvZ2dsZV9zbWFsbF9waG90byhpZCl7XG4gICAgJChcIiNcIitpZCkudG9nZ2xlKCk7XG59XG5cbmZ1bmN0aW9uIGhpZGVGaWVsZChpZCl7XG4gICAgdGl0bGUgPSAkKFwiI2RvY3NfXCIraWQrXCIgLnRpdGxlX2luXCIpLnZhbCgpOyAgICAgIFxuICAgIG9yZCA9ICQoXCIjZG9jc19cIitpZCtcIiAub3JkX2luXCIpLnZhbCgpO1xuICAgIFxuICAgICQoXCIjZG9jc19cIitpZCtcIiAudGl0bGVfZlwiKS5lbXB0eSgpLmFwcGVuZCh0aXRsZSk7XG4gICAgJChcIiNkb2NzX1wiK2lkK1wiIC5vcmRfZlwiKS5lbXB0eSgpLmFwcGVuZChvcmQpO1xuICAgICQoXCIjZG9jc19cIitpZCtcIiAuYnV0X3NhdmVcIikuaGlkZSgpO1xuICAgICQoXCIjZG9jc19cIitpZCtcIiAuY3RyX2VkaXRcIikuc2hvdygpO1xufVxuXG5mdW5jdGlvbiBFZGl0RG9jcyhpZCl7XG4gICAgJChcIiNkb2NzX1wiK2lkK1wiIC5idXRfc2F2ZVwiKS5zaG93KCk7XG4gICAgJChcIiNkb2NzX1wiK2lkK1wiIC5jdHJfZWRpdFwiKS5oaWRlKCk7XG4gICAgXG4gICAgY3Vycl92YWx1ZSA9ICQoXCIjZG9jc19cIitpZCtcIiAudGl0bGVfZlwiKS50ZXh0KCk7XG4gICAgJChcIiNkb2NzX1wiK2lkK1wiIC50aXRsZV9mXCIpLmVtcHR5KCkuYXBwZW5kKFwiPGlucHV0IHR5cGU9J3RleHQnIHZhbHVlPSdcIitjdXJyX3ZhbHVlK1wiJyBuYW1lPSd0aXRsZScgY2xhc3M9J2JvcmQgcGFkZCB3MTAwIHRpdGxlX2luJyAvPlwiKTtcbiAgICBjdXJyX3ZhbHVlID0gJChcIiNkb2NzX1wiK2lkK1wiIC5vcmRfZlwiKS50ZXh0KCk7XG4gICAgJChcIiNkb2NzX1wiK2lkK1wiIC5vcmRfZlwiKS5lbXB0eSgpLmFwcGVuZChcIjxpbnB1dCB0eXBlPSd0ZXh0JyB2YWx1ZT0nXCIrY3Vycl92YWx1ZStcIicgbmFtZT0nb3JkJyBjbGFzcz0nYm9yZCBwYWRkIHcyMCBvcmRfaW4nIC8+XCIpO1xuICAgIFxuICAgICQoXCIjZG9jc19cIitpZCtcIiAudGl0bGVfaW5cIikuZm9jdXMoKTtcbiAgICByZXR1cm4gZmFsc2U7XG59ICAgXG5cbmZ1bmN0aW9uIFNhdmVEb2NzKGlkKXtcbiAgICB0aXRsZSA9ICQoXCIjZG9jc19cIitpZCtcIiAudGl0bGVfaW5cIikudmFsKCk7XG4gICAgb3JkID0gJChcIiNkb2NzX1wiK2lkK1wiIC5vcmRfaW5cIikudmFsKCk7XG4gICAgXG4gICAgaWYgKCF0aXRsZSkge1xuICAgICAgICBhbGVydChcItCf0YPRgdGC0L7QtSDQuNC80Y8g0LTQvtC60YPQvNC10L3RgtCwXCIpO1xuICAgICAgICBoaWRlRmllbGQoaWQpO1xuICAgIH1cbiAgICBcbiAgICAkLnBvc3QoXG4gICAgICAgICcvJyArIEFETUlOX0RJUiArICcvYWpheC9kb2N1bWVudC8nLFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDpcImRvY3VtZW50X2VkaXRcIiwgICAgICAgICAgICAgXG4gICAgICAgICAgICBkb2NzaWQ6aWQsXG4gICAgICAgICAgICB0aXRsZTp0aXRsZSxcbiAgICAgICAgICAgIG9yZDpvcmRcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBhbGVydCgn0JTQsNC90L3Ri9C1INC+0LHQvdC+0LLQu9C10L3RiycpO1xuICAgICAgICAgICAgaGlkZUZpZWxkKGlkKTtcbiAgICAgICAgfVxuICAgICk7ICAgICAgXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBEZWxEb2NzKGlkKXtcbiAgICBpZiAoY3AuZGlhbG9nKCfQktGLINC00LXQudGB0YLQstC40YLQtdC70YzQvdC+INGF0L7RgtC40YLQtSDRg9C00LDQu9C40YLRjD8nKSl7XG4gICAgICAgICQucG9zdChcbiAgICAgICAgICAgICcvJyArIEFETUlOX0RJUiArICcvYWpheC9kb2N1bWVudC8nLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlkOlwiZG9jdW1lbnRfZGVsXCIsICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb2NzaWQ6aWRcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YT4wKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIjZG9jc19cIitpZCkuaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGFsZXJ0KCfQvtGI0LjQsdC60LAg0L7QsdC90L7QstC70LXQvdC40Y8nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwYWdlX3VwZGF0ZSggaXRlbV9pZCApXG57XG4gICAgJC5wb3N0KCcvJyArIEFETUlOX0RJUiArICcvYWpheC9kb2N1bWVudC8nLFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDpcInVwZGF0ZVwiLCBwb3N0X2lkOml0ZW1faWRcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICB2YXIganNvbiA9IGV2YWwoIFwiKFwiICsgZGF0YSArIFwiKVwiICk7XG4gICAgICAgICAgICBwYXJzZU1zZygganNvbiAsIFwiZmlsZV9kb2NzXCIgKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwYXJzZU1zZyhtc2csb2JqKXtcbiAgICAkKFwiI1wiK29iaitcIiAudXBsb2FkZmlsZXNcIikuZW1wdHkoKTtcbiAgICAkKFwiI1wiK29iaitcIiBpbnB1dDpmaWxlXCIpLmF0dHIoe1widmFsdWVcIjpcIlwifSk7XG4gICAgXG4gICAgc3RyID0gJzx0YWJsZSBzdHlsZT1cIm1hcmdpbi1ib3R0b206MTBweDt3aWR0aDo4MCVcIj48dHI+XFxuPHRkIGNsYXNzPVwiaCB3MTAwXCI+0JTQvtC60YPQvNC10L3RgjwvdGQ+XFxuPHRkIGNsYXNzPVwiaFwiPtCg0LDQt9C80LXRgDwvdGQ+XFxuPHRkIGNsYXNzPVwiaFwiPtCj0LTQsNC70LjRgtGMPC90ZD48L3RyPlxcbic7XG4gICAgdmFyIGkgPSAwO1xuICAgICQuZWFjaCggbXNnLCBmdW5jdGlvbihrLHYpIHtcbiAgICAgICAgaWYgKCBpICUgMiAhPSAwICkgb2RkID0gXCJvZGQgXCI7XG4gICAgICAgIGVsc2Ugb2RkID0gXCJcIjtcbiAgICAgICAgc3RyICs9ICc8dHI+XFxuPHRkIGNsYXNzPVwiJyArIG9kZCArICdcIj48YSBocmVmPVwiJyArIHYuc3lzX25hbWUgKyAnXCIgdGl0bGU9XCJcIiB0YXJnZXQ9XCJfYmxhbmtcIj4nICsgdi50aXRsZSArICc8L2E+PC90ZD5cXG4nO1xuICAgICAgICBzdHIgKz0gJzx0ZCBjbGFzcz1cIicgKyBvZGQgKyAnclwiPiAnICsgdi5zaXplICsgJzwvdGQ+XFxuJztcbiAgICAgICAgc3RyICs9ICc8dGQgY2xhc3M9XCJhY3Rpb25zXCI+PGEgaHJlZj1cIiNcIiBvbmNsaWNrPVwicmV0dXJuIE1vZHVsZS5hamF4RmlsZURlbGV0ZSgnICsgdi5pZCArICcsXFwnJyArIG9iaiArICdcXCcpO1wiIGNsYXNzPVwiY3RyX2EgY3RyX2RlbCBtYXJnaW5cIiB0aXRsZT1cItCj0LTQsNC70LjRgtGMXCIgb25jbGljaz1cInJldHVybiBjb25maXJtKFxcJ9CS0Ysg0LTQtdC50YHRgtCy0LjRgtC10LvRjNC90L4g0YXQvtGC0LjRgtC1INGD0LTQsNC70LjRgtGMP1xcJylcIj48L2E+PC90ZD5cXG48L3RyPlxcbic7XG4gICAgICAgIGkrKztcbiAgICB9KTtcbiAgICBzdHIgKz0gJzwvdGFibGU+J1xuICAgICQoXCIjXCIrb2JqK1wiIC51cGxvYWRmaWxlc1wiKS5hcHBlbmQoc3RyKTtcbn1cblxuZnVuY3Rpb24gYWpheEZpbGVEb2NzVXBsb2FkKGRvY3NfZ3JvdXBfaWQpe1xuICAgIFxufVxuXG5mdW5jdGlvbiBzY3JlZW5pbmcoIHN0ciApIHtcbiAgICB2YXIgcmVnPS9cIi9nO1xuICAgIHZhciByZXN1bHQ9c3RyLnJlcGxhY2UocmVnLCBcIiZxdW90O1wiICk7XG4gICAgXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbiJdfQ==

'use strict';

/*!
 * Nestable jQuery Plugin - Copyright (c) 2012 David Bushell - http://dbushell.com/
 * Dual-licensed under the BSD or MIT licenses
 */
;(function ($, window, document, undefined) {
    var hasTouch = 'ontouchstart' in document;

    /**
     * Detect CSS pointer-events property
     * events are normally disabled on the dragging element to avoid conflicts
     * https://github.com/ausi/Feature-detection-technique-for-pointer-events/blob/master/modernizr-pointerevents.js
     */
    var hasPointerEvents = function () {
        var el = document.createElement('div'),
            docEl = document.documentElement;
        if (!('pointerEvents' in el.style)) {
            return false;
        }
        el.style.pointerEvents = 'auto';
        el.style.pointerEvents = 'x';
        docEl.appendChild(el);
        var supports = window.getComputedStyle && window.getComputedStyle(el, '').pointerEvents === 'auto';
        docEl.removeChild(el);
        return !!supports;
    }();

    var defaults = {
        listNodeName: 'ol',
        itemNodeName: 'li',
        rootClass: 'dd',
        listClass: 'dd-list',
        itemClass: 'dd-item',
        dragClass: 'dd-dragel',
        handleClass: 'dd-handle',
        collapsedClass: 'dd-collapsed',
        placeClass: 'dd-placeholder',
        noDragClass: 'dd-nodrag',
        emptyClass: 'dd-empty',
        expandBtnHTML: '<button data-action="expand" type="button" class="dd-button dd-button__expand"></button>',
        collapseBtnHTML: '<button data-action="collapse" type="button" class="dd-button dd-button__collapse"></button>',
        group: 0,
        maxDepth: 5,
        threshold: 20,
        dragStop: null,
        afterExpand: null,
        afterCollapse: null
    };

    function Plugin(element, options) {
        this.w = $(document);
        this.el = $(element);
        this.options = $.extend({}, defaults, options);
        this.init();
    }

    Plugin.prototype = {

        init: function init() {
            var list = this;

            list.reset();

            list.el.data('nestable-group', this.options.group);

            list.placeEl = $('<div class="' + list.options.placeClass + '"/>');

            $.each(this.el.find(list.options.itemNodeName), function (k, el) {
                list.setParent($(el));
            });

            list.el.on('click', 'button', function (e) {
                if (list.dragEl) {
                    return;
                }
                var target = $(e.currentTarget),
                    action = target.data('action'),
                    item = target.parent(list.options.itemNodeName);
                if (action === 'collapse') {
                    list.collapseItem(item);
                }
                if (action === 'expand') {
                    list.expandItem(item);
                }
            });

            var onStartEvent = function onStartEvent(e) {
                var handle = $(e.target);
                if (!handle.hasClass(list.options.handleClass)) {
                    if (handle.closest('.' + list.options.noDragClass).length) {
                        return;
                    }
                    handle = handle.closest('.' + list.options.handleClass);
                }

                if (!handle.length || list.dragEl) {
                    return;
                }

                list.isTouch = /^touch/.test(e.type);
                if (list.isTouch && e.touches.length !== 1) {
                    return;
                }

                e.preventDefault();
                list.dragStart(e.touches ? e.touches[0] : e);
            };

            var onMoveEvent = function onMoveEvent(e) {
                if (list.dragEl) {
                    e.preventDefault();
                    list.dragMove(e.touches ? e.touches[0] : e);
                }
            };

            var onEndEvent = function onEndEvent(e) {
                if (list.dragEl) {
                    e.preventDefault();
                    list.dragStop(e.touches ? e.touches[0] : e);
                }
            };

            if (hasTouch) {
                list.el[0].addEventListener('touchstart', onStartEvent, false);
                window.addEventListener('touchmove', onMoveEvent, false);
                window.addEventListener('touchend', onEndEvent, false);
                window.addEventListener('touchcancel', onEndEvent, false);
            }

            list.el.on('mousedown', onStartEvent);
            list.w.on('mousemove', onMoveEvent);
            list.w.on('mouseup', onEndEvent);
        },

        serialize: function serialize() {
            var data,
                depth = 0,
                list = this;
            step = function (_step) {
                function step(_x, _x2) {
                    return _step.apply(this, arguments);
                }

                step.toString = function () {
                    return _step.toString();
                };

                return step;
            }(function (level, depth) {
                var array = [],
                    items = level.children(list.options.itemNodeName);
                items.each(function () {
                    var li = $(this),
                        item = $.extend({}, li.data()),
                        sub = li.children(list.options.listNodeName);
                    if (sub.length) {
                        item.children = step(sub, depth + 1);
                    }
                    array.push(item);
                });
                return array;
            });
            data = step(list.el.find(list.options.listNodeName).first(), depth);
            return data;
        },

        serialise: function serialise() {
            return this.serialize();
        },

        reset: function reset() {
            this.mouse = {
                offsetX: 0,
                offsetY: 0,
                startX: 0,
                startY: 0,
                lastX: 0,
                lastY: 0,
                nowX: 0,
                nowY: 0,
                distX: 0,
                distY: 0,
                dirAx: 0,
                dirX: 0,
                dirY: 0,
                lastDirX: 0,
                lastDirY: 0,
                distAxX: 0,
                distAxY: 0
            };
            this.isTouch = false;
            this.moving = false;
            this.dragEl = null;
            this.dragRootEl = null;
            this.dragDepth = 0;
            this.hasNewRoot = false;
            this.pointEl = null;
        },

        expandItem: function expandItem(li) {
            li.removeClass(this.options.collapsedClass);
            li.children('[data-action="expand"]').hide();
            li.children('[data-action="collapse"]').show();
            li.children(this.options.listNodeName).show();

            if (typeof this.options.afterExpand == 'function') {
                this.options.afterExpand(li);
            }
        },

        collapseItem: function collapseItem(li) {
            var lists = li.children(this.options.listNodeName);

            if (lists.length) {
                li.addClass(this.options.collapsedClass);
                li.children('[data-action="collapse"]').hide();
                li.children('[data-action="expand"]').show();
                li.children(this.options.listNodeName).hide();
            }

            if (typeof this.options.afterCollapse == 'function') {
                this.options.afterCollapse(li);
            }
        },

        expandAll: function expandAll() {
            var list = this;
            list.el.find(list.options.itemNodeName).each(function () {
                list.expandItem($(this));
            });
        },

        collapseAll: function collapseAll() {
            var list = this;
            list.el.find(list.options.itemNodeName).each(function () {
                list.collapseItem($(this));
            });
        },

        setParent: function setParent(li) {
            if (li.children(this.options.listNodeName).length) {
                if (!li.find('.dd-button__expand').length) {
                    li.prepend($(this.options.expandBtnHTML));
                }

                if (!li.find('.dd-button__collapse').length) {
                    li.prepend($(this.options.collapseBtnHTML));
                }
            }

            if ($(li[0]).hasClass('dd-collapsed')) {
                li.children('[data-action="collapse"]').hide();
            } else {
                li.children('[data-action="expand"]').hide();
            }
        },

        unsetParent: function unsetParent(li) {
            li.removeClass(this.options.collapsedClass);
            li.children('[data-action]').remove();
            li.children(this.options.listNodeName).remove();
        },

        dragStart: function dragStart(e) {
            var mouse = this.mouse,
                target = $(e.target),
                dragItem = target.closest(this.options.itemNodeName);

            this.placeEl.css('height', dragItem.height());

            mouse.offsetX = e.offsetX !== undefined ? e.offsetX : e.pageX - target.offset().left;
            mouse.offsetY = e.offsetY !== undefined ? e.offsetY : e.pageY - target.offset().top;
            mouse.startX = mouse.lastX = e.pageX;
            mouse.startY = mouse.lastY = e.pageY;

            this.dragRootEl = this.el;

            this.dragEl = $(document.createElement(this.options.listNodeName)).addClass(this.options.listClass + ' ' + this.options.dragClass);
            this.dragEl.css('width', dragItem.width());

            dragItem.after(this.placeEl);
            dragItem[0].parentNode.removeChild(dragItem[0]);
            dragItem.appendTo(this.dragEl);

            $(document.body).append(this.dragEl);
            this.dragEl.css({
                'left': e.pageX - mouse.offsetX,
                'top': e.pageY - mouse.offsetY
            });
            // total depth of dragging item
            var i,
                depth,
                items = this.dragEl.find(this.options.itemNodeName);
            for (i = 0; i < items.length; i++) {
                depth = $(items[i]).parents(this.options.listNodeName).length;
                if (depth > this.dragDepth) {
                    this.dragDepth = depth;
                }
            }
        },

        dragStop: function dragStop(e) {
            var el = this.dragEl.children(this.options.itemNodeName).first();
            el[0].parentNode.removeChild(el[0]);
            this.placeEl.replaceWith(el);

            this.dragEl.remove();
            this.el.trigger('change');
            if (this.hasNewRoot) {
                this.dragRootEl.trigger('change');
            }
            this.reset();

            if (typeof this.options.dragStop == 'function') {
                this.options.dragStop(el);
            }
        },

        dragMove: function dragMove(e) {
            var list,
                parent,
                prev,
                next,
                depth,
                opt = this.options,
                mouse = this.mouse;

            this.dragEl.css({
                'left': e.pageX - mouse.offsetX,
                'top': e.pageY - mouse.offsetY
            });

            // mouse position last events
            mouse.lastX = mouse.nowX;
            mouse.lastY = mouse.nowY;
            // mouse position this events
            mouse.nowX = e.pageX;
            mouse.nowY = e.pageY;
            // distance mouse moved between events
            mouse.distX = mouse.nowX - mouse.lastX;
            mouse.distY = mouse.nowY - mouse.lastY;
            // direction mouse was moving
            mouse.lastDirX = mouse.dirX;
            mouse.lastDirY = mouse.dirY;
            // direction mouse is now moving (on both axis)
            mouse.dirX = mouse.distX === 0 ? 0 : mouse.distX > 0 ? 1 : -1;
            mouse.dirY = mouse.distY === 0 ? 0 : mouse.distY > 0 ? 1 : -1;
            // axis mouse is now moving on
            var newAx = Math.abs(mouse.distX) > Math.abs(mouse.distY) ? 1 : 0;

            // do nothing on first move
            if (!mouse.moving) {
                mouse.dirAx = newAx;
                mouse.moving = true;
                return;
            }

            // calc distance moved on this axis (and direction)
            if (mouse.dirAx !== newAx) {
                mouse.distAxX = 0;
                mouse.distAxY = 0;
            } else {
                mouse.distAxX += Math.abs(mouse.distX);
                if (mouse.dirX !== 0 && mouse.dirX !== mouse.lastDirX) {
                    mouse.distAxX = 0;
                }
                mouse.distAxY += Math.abs(mouse.distY);
                if (mouse.dirY !== 0 && mouse.dirY !== mouse.lastDirY) {
                    mouse.distAxY = 0;
                }
            }
            mouse.dirAx = newAx;

            /**
             * move horizontal
             */
            if (mouse.dirAx && mouse.distAxX >= opt.threshold) {
                // reset move distance on x-axis for new phase
                mouse.distAxX = 0;
                prev = this.placeEl.prev(opt.itemNodeName);
                // increase horizontal level if previous sibling exists and is not collapsed
                if (mouse.distX > 0 && prev.length && !prev.hasClass(opt.collapsedClass)) {
                    // cannot increase level when item above is collapsed
                    list = prev.find(opt.listNodeName).last();
                    // check if depth limit has reached
                    depth = this.placeEl.parents(opt.listNodeName).length;
                    if (depth + this.dragDepth <= opt.maxDepth) {
                        // create new sub-level if one doesn't exist
                        if (!list.length) {
                            list = $('<' + opt.listNodeName + '/>').addClass(opt.listClass);
                            list.append(this.placeEl);
                            prev.append(list);
                            this.setParent(prev);
                        } else {
                            // else append to next level up
                            list = prev.children(opt.listNodeName).last();
                            list.append(this.placeEl);
                        }
                    }
                }
                // decrease horizontal level
                if (mouse.distX < 0) {
                    // we can't decrease a level if an item preceeds the current one
                    next = this.placeEl.next(opt.itemNodeName);
                    if (!next.length) {
                        parent = this.placeEl.parent();
                        this.placeEl.closest(opt.itemNodeName).after(this.placeEl);
                        if (!parent.children().length) {
                            this.unsetParent(parent.parent());
                        }
                    }
                }
            }

            var isEmpty = false;

            // find list item under cursor
            if (!hasPointerEvents) {
                this.dragEl[0].style.visibility = 'hidden';
            }
            this.pointEl = $(document.elementFromPoint(e.pageX - document.body.scrollLeft, e.pageY - (window.pageYOffset || document.documentElement.scrollTop)));
            if (!hasPointerEvents) {
                this.dragEl[0].style.visibility = 'visible';
            }
            if (this.pointEl.hasClass(opt.handleClass)) {
                this.pointEl = this.pointEl.parent(opt.itemNodeName);
            }
            if (this.pointEl.hasClass(opt.emptyClass)) {
                isEmpty = true;
            } else if (!this.pointEl.length || !this.pointEl.hasClass(opt.itemClass)) {
                return;
            }

            // find parent list of item under cursor
            var pointElRoot = this.pointEl.closest('.' + opt.rootClass),
                isNewRoot = this.dragRootEl.data('nestable-id') !== pointElRoot.data('nestable-id');

            /**
             * move vertical
             */
            if (!mouse.dirAx || isNewRoot || isEmpty) {
                // check if groups match if dragging over new root
                if (isNewRoot && opt.group !== pointElRoot.data('nestable-group')) {
                    return;
                }
                // check depth limit
                depth = this.dragDepth - 1 + this.pointEl.parents(opt.listNodeName).length;
                if (depth > opt.maxDepth) {
                    return;
                }
                var before = e.pageY < this.pointEl.offset().top + this.pointEl.height() / 2;
                parent = this.placeEl.parent();
                // if empty create new list to replace empty placeholder
                if (isEmpty) {
                    list = $(document.createElement(opt.listNodeName)).addClass(opt.listClass);
                    list.append(this.placeEl);
                    this.pointEl.replaceWith(list);
                } else if (before) {
                    this.pointEl.before(this.placeEl);
                } else {
                    this.pointEl.after(this.placeEl);
                }
                if (!parent.children().length) {
                    this.unsetParent(parent.parent());
                }
                if (!this.dragRootEl.find(opt.itemNodeName).length) {
                    this.dragRootEl.append('<div class="' + opt.emptyClass + '"/>');
                }
                // parent root list has changed
                if (isNewRoot) {
                    this.dragRootEl = pointElRoot;
                    this.hasNewRoot = this.el[0] !== this.dragRootEl[0];
                }
            }
        }

    };

    $.fn.nestable = function (params) {
        var lists = this,
            retval = this;

        lists.each(function () {
            var plugin = $(this).data("nestable");

            if (!plugin) {
                $(this).data("nestable", new Plugin(this, params));
                $(this).data("nestable-id", new Date().getTime());
            } else {
                if (typeof params === 'string' && typeof plugin[params] === 'function') {
                    retval = plugin[params]();
                }
            }
        });

        return retval || lists;
    };
})(window.jQuery || window.Zepto, window, document);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5lc3RhYmxlLmpzIl0sIm5hbWVzIjpbIiQiLCJ3aW5kb3ciLCJkb2N1bWVudCIsInVuZGVmaW5lZCIsImhhc1RvdWNoIiwiaGFzUG9pbnRlckV2ZW50cyIsImVsIiwiY3JlYXRlRWxlbWVudCIsImRvY0VsIiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJwb2ludGVyRXZlbnRzIiwiYXBwZW5kQ2hpbGQiLCJzdXBwb3J0cyIsImdldENvbXB1dGVkU3R5bGUiLCJyZW1vdmVDaGlsZCIsImRlZmF1bHRzIiwibGlzdE5vZGVOYW1lIiwiaXRlbU5vZGVOYW1lIiwicm9vdENsYXNzIiwibGlzdENsYXNzIiwiaXRlbUNsYXNzIiwiZHJhZ0NsYXNzIiwiaGFuZGxlQ2xhc3MiLCJjb2xsYXBzZWRDbGFzcyIsInBsYWNlQ2xhc3MiLCJub0RyYWdDbGFzcyIsImVtcHR5Q2xhc3MiLCJleHBhbmRCdG5IVE1MIiwiY29sbGFwc2VCdG5IVE1MIiwiZ3JvdXAiLCJtYXhEZXB0aCIsInRocmVzaG9sZCIsImRyYWdTdG9wIiwiYWZ0ZXJFeHBhbmQiLCJhZnRlckNvbGxhcHNlIiwiUGx1Z2luIiwiZWxlbWVudCIsIm9wdGlvbnMiLCJ3IiwiZXh0ZW5kIiwiaW5pdCIsInByb3RvdHlwZSIsImxpc3QiLCJyZXNldCIsImRhdGEiLCJwbGFjZUVsIiwiZWFjaCIsImZpbmQiLCJrIiwic2V0UGFyZW50Iiwib24iLCJlIiwiZHJhZ0VsIiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsImFjdGlvbiIsIml0ZW0iLCJwYXJlbnQiLCJjb2xsYXBzZUl0ZW0iLCJleHBhbmRJdGVtIiwib25TdGFydEV2ZW50IiwiaGFuZGxlIiwiaGFzQ2xhc3MiLCJjbG9zZXN0IiwibGVuZ3RoIiwiaXNUb3VjaCIsInRlc3QiLCJ0eXBlIiwidG91Y2hlcyIsInByZXZlbnREZWZhdWx0IiwiZHJhZ1N0YXJ0Iiwib25Nb3ZlRXZlbnQiLCJkcmFnTW92ZSIsIm9uRW5kRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwic2VyaWFsaXplIiwiZGVwdGgiLCJzdGVwIiwibGV2ZWwiLCJhcnJheSIsIml0ZW1zIiwiY2hpbGRyZW4iLCJsaSIsInN1YiIsInB1c2giLCJmaXJzdCIsInNlcmlhbGlzZSIsIm1vdXNlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzdGFydFgiLCJzdGFydFkiLCJsYXN0WCIsImxhc3RZIiwibm93WCIsIm5vd1kiLCJkaXN0WCIsImRpc3RZIiwiZGlyQXgiLCJkaXJYIiwiZGlyWSIsImxhc3REaXJYIiwibGFzdERpclkiLCJkaXN0QXhYIiwiZGlzdEF4WSIsIm1vdmluZyIsImRyYWdSb290RWwiLCJkcmFnRGVwdGgiLCJoYXNOZXdSb290IiwicG9pbnRFbCIsInJlbW92ZUNsYXNzIiwiaGlkZSIsInNob3ciLCJsaXN0cyIsImFkZENsYXNzIiwiZXhwYW5kQWxsIiwiY29sbGFwc2VBbGwiLCJwcmVwZW5kIiwidW5zZXRQYXJlbnQiLCJyZW1vdmUiLCJkcmFnSXRlbSIsImNzcyIsImhlaWdodCIsInBhZ2VYIiwib2Zmc2V0IiwibGVmdCIsInBhZ2VZIiwidG9wIiwid2lkdGgiLCJhZnRlciIsInBhcmVudE5vZGUiLCJhcHBlbmRUbyIsImJvZHkiLCJhcHBlbmQiLCJpIiwicGFyZW50cyIsInJlcGxhY2VXaXRoIiwidHJpZ2dlciIsInByZXYiLCJuZXh0Iiwib3B0IiwibmV3QXgiLCJNYXRoIiwiYWJzIiwibGFzdCIsImlzRW1wdHkiLCJ2aXNpYmlsaXR5IiwiZWxlbWVudEZyb21Qb2ludCIsInNjcm9sbExlZnQiLCJwYWdlWU9mZnNldCIsInNjcm9sbFRvcCIsInBvaW50RWxSb290IiwiaXNOZXdSb290IiwiYmVmb3JlIiwiZm4iLCJuZXN0YWJsZSIsInBhcmFtcyIsInJldHZhbCIsInBsdWdpbiIsIkRhdGUiLCJnZXRUaW1lIiwialF1ZXJ5IiwiWmVwdG8iXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFJQSxDQUFDLENBQUMsVUFBU0EsQ0FBVCxFQUFZQyxNQUFaLEVBQW9CQyxRQUFwQixFQUE4QkMs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O0FBQ3BFQyw2QkFBU0MsT0FBT0YsTUFBUCxHQUFUO0FBQ0g7QUFDSjtBQUNKLFNBWkQ7O0FBY0EsZUFBT0MsVUFBVTVDLEtBQWpCO0FBQ0gsS0FwQkQ7QUFzQkgsQ0FsZ0JBLEVBa2dCRWpILE9BQU9pSyxNQUFQLElBQWlCakssT0FBT2tLLEtBbGdCMUIsRUFrZ0JpQ2xLLE1BbGdCakMsRUFrZ0J5Q0MsUUFsZ0J6QyIsImZpbGUiOiJuZXN0YWJsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogTmVzdGFibGUgalF1ZXJ5IFBsdWdpbiAtIENvcHlyaWdodCAoYykgMjAxMiBEYXZpZCBCdXNoZWxsIC0gaHR0cDovL2RidXNoZWxsLmNvbS9cbiAqIER1YWwtbGljZW5zZWQgdW5kZXIgdGhlIEJTRCBvciBNSVQgbGljZW5zZXNcbiAqL1xuOyhmdW5jdGlvbigkLCB3aW5kb3csIGRvY3VtZW50LCB1bmRlZmluZWQpXG57XG4gICAgdmFyIGhhc1RvdWNoID0gJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQ7XG5cbiAgICAvKipcbiAgICAgKiBEZXRlY3QgQ1NTIHBvaW50ZXItZXZlbnRzIHByb3BlcnR5XG4gICAgICogZXZlbnRzIGFyZSBub3JtYWxseSBkaXNhYmxlZCBvbiB0aGUgZHJhZ2dpbmcgZWxlbWVudCB0byBhdm9pZCBjb25mbGljdHNcbiAgICAgKiBodHRwczovL2dpdGh1Yi5jb20vYXVzaS9GZWF0dXJlLWRldGVjdGlvbi10ZWNobmlxdWUtZm9yLXBvaW50ZXItZXZlbnRzL2Jsb2IvbWFzdGVyL21vZGVybml6ci1wb2ludGVyZXZlbnRzLmpzXG4gICAgICovXG4gICAgdmFyIGhhc1BvaW50ZXJFdmVudHMgPSAoZnVuY3Rpb24oKVxuICAgIHtcbiAgICAgICAgdmFyIGVsICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXG4gICAgICAgICAgICBkb2NFbCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiAgICAgICAgaWYgKCEoJ3BvaW50ZXJFdmVudHMnIGluIGVsLnN0eWxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnYXV0byc7XG4gICAgICAgIGVsLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAneCc7XG4gICAgICAgIGRvY0VsLmFwcGVuZENoaWxkKGVsKTtcbiAgICAgICAgdmFyIHN1cHBvcnRzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUgJiYgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwsICcnKS5wb2ludGVyRXZlbnRzID09PSAnYXV0byc7XG4gICAgICAgIGRvY0VsLnJlbW92ZUNoaWxkKGVsKTtcbiAgICAgICAgcmV0dXJuICEhc3VwcG9ydHM7XG4gICAgfSkoKTtcblxuICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGxpc3ROb2RlTmFtZSAgICA6ICdvbCcsXG4gICAgICAgICAgICBpdGVtTm9kZU5hbWUgICAgOiAnbGknLFxuICAgICAgICAgICAgcm9vdENsYXNzICAgICAgIDogJ2RkJyxcbiAgICAgICAgICAgIGxpc3RDbGFzcyAgICAgICA6ICdkZC1saXN0JyxcbiAgICAgICAgICAgIGl0ZW1DbGFzcyAgICAgICA6ICdkZC1pdGVtJyxcbiAgICAgICAgICAgIGRyYWdDbGFzcyAgICAgICA6ICdkZC1kcmFnZWwnLFxuICAgICAgICAgICAgaGFuZGxlQ2xhc3MgICAgIDogJ2RkLWhhbmRsZScsXG4gICAgICAgICAgICBjb2xsYXBzZWRDbGFzcyAgOiAnZGQtY29sbGFwc2VkJyxcbiAgICAgICAgICAgIHBsYWNlQ2xhc3MgICAgICA6ICdkZC1wbGFjZWhvbGRlcicsXG4gICAgICAgICAgICBub0RyYWdDbGFzcyAgICAgOiAnZGQtbm9kcmFnJyxcbiAgICAgICAgICAgIGVtcHR5Q2xhc3MgICAgICA6ICdkZC1lbXB0eScsXG4gICAgICAgICAgICBleHBhbmRCdG5IVE1MICAgOiAnPGJ1dHRvbiBkYXRhLWFjdGlvbj1cImV4cGFuZFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRkLWJ1dHRvbiBkZC1idXR0b25fX2V4cGFuZFwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBjb2xsYXBzZUJ0bkhUTUwgOiAnPGJ1dHRvbiBkYXRhLWFjdGlvbj1cImNvbGxhcHNlXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGQtYnV0dG9uIGRkLWJ1dHRvbl9fY29sbGFwc2VcIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgZ3JvdXAgICAgICAgICAgIDogMCxcbiAgICAgICAgICAgIG1heERlcHRoICAgICAgICA6IDUsXG4gICAgICAgICAgICB0aHJlc2hvbGQgICAgICAgOiAyMCxcbiAgICAgICAgICAgIGRyYWdTdG9wICAgICAgICA6IG51bGwsXG4gICAgICAgICAgICBhZnRlckV4cGFuZCAgICAgOiBudWxsLFxuICAgICAgICAgICAgYWZ0ZXJDb2xsYXBzZSAgIDogbnVsbFxuICAgICAgICB9O1xuXG4gICAgZnVuY3Rpb24gUGx1Z2luKGVsZW1lbnQsIG9wdGlvbnMpXG4gICAge1xuICAgICAgICB0aGlzLncgID0gJChkb2N1bWVudCk7XG4gICAgICAgIHRoaXMuZWwgPSAkKGVsZW1lbnQpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgZGVmYXVsdHMsIG9wdGlvbnMpO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBQbHVnaW4ucHJvdG90eXBlID0ge1xuXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzO1xuXG4gICAgICAgICAgICBsaXN0LnJlc2V0KCk7XG5cbiAgICAgICAgICAgIGxpc3QuZWwuZGF0YSgnbmVzdGFibGUtZ3JvdXAnLCB0aGlzLm9wdGlvbnMuZ3JvdXApO1xuXG4gICAgICAgICAgICBsaXN0LnBsYWNlRWwgPSAkKCc8ZGl2IGNsYXNzPVwiJyArIGxpc3Qub3B0aW9ucy5wbGFjZUNsYXNzICsgJ1wiLz4nKTtcblxuICAgICAgICAgICAgJC5lYWNoKHRoaXMuZWwuZmluZChsaXN0Lm9wdGlvbnMuaXRlbU5vZGVOYW1lKSwgZnVuY3Rpb24oaywgZWwpIHtcbiAgICAgICAgICAgICAgICBsaXN0LnNldFBhcmVudCgkKGVsKSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlzdC5lbC5vbignY2xpY2snLCAnYnV0dG9uJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0LmRyYWdFbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCksXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbiA9IHRhcmdldC5kYXRhKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbSAgID0gdGFyZ2V0LnBhcmVudChsaXN0Lm9wdGlvbnMuaXRlbU5vZGVOYW1lKTtcbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY29sbGFwc2UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuY29sbGFwc2VJdGVtKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnZXhwYW5kJykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0LmV4cGFuZEl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBvblN0YXJ0RXZlbnQgPSBmdW5jdGlvbihlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHZhciBoYW5kbGUgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICBpZiAoIWhhbmRsZS5oYXNDbGFzcyhsaXN0Lm9wdGlvbnMuaGFuZGxlQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGUuY2xvc2VzdCgnLicgKyBsaXN0Lm9wdGlvbnMubm9EcmFnQ2xhc3MpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZSA9IGhhbmRsZS5jbG9zZXN0KCcuJyArIGxpc3Qub3B0aW9ucy5oYW5kbGVDbGFzcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFoYW5kbGUubGVuZ3RoIHx8IGxpc3QuZHJhZ0VsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsaXN0LmlzVG91Y2ggPSAvXnRvdWNoLy50ZXN0KGUudHlwZSk7XG4gICAgICAgICAgICAgICAgaWYgKGxpc3QuaXNUb3VjaCAmJiBlLnRvdWNoZXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGlzdC5kcmFnU3RhcnQoZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgb25Nb3ZlRXZlbnQgPSBmdW5jdGlvbihlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0LmRyYWdFbCkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuZHJhZ01vdmUoZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIG9uRW5kRXZlbnQgPSBmdW5jdGlvbihlKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChsaXN0LmRyYWdFbCkge1xuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuZHJhZ1N0b3AoZS50b3VjaGVzID8gZS50b3VjaGVzWzBdIDogZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGhhc1RvdWNoKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5lbFswXS5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0Jywgb25TdGFydEV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIG9uTW92ZUV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgb25FbmRFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGNhbmNlbCcsIG9uRW5kRXZlbnQsIGZhbHNlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGlzdC5lbC5vbignbW91c2Vkb3duJywgb25TdGFydEV2ZW50KTtcbiAgICAgICAgICAgIGxpc3Qudy5vbignbW91c2Vtb3ZlJywgb25Nb3ZlRXZlbnQpO1xuICAgICAgICAgICAgbGlzdC53Lm9uKCdtb3VzZXVwJywgb25FbmRFdmVudCk7XG5cbiAgICAgICAgfSxcblxuICAgICAgICBzZXJpYWxpemU6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGRhdGEsXG4gICAgICAgICAgICAgICAgZGVwdGggPSAwLFxuICAgICAgICAgICAgICAgIGxpc3QgID0gdGhpcztcbiAgICAgICAgICAgICAgICBzdGVwICA9IGZ1bmN0aW9uKGxldmVsLCBkZXB0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBhcnJheSA9IFsgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zID0gbGV2ZWwuY2hpbGRyZW4obGlzdC5vcHRpb25zLml0ZW1Ob2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zLmVhY2goZnVuY3Rpb24oKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbGkgICA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9ICQuZXh0ZW5kKHt9LCBsaS5kYXRhKCkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YiAgPSBsaS5jaGlsZHJlbihsaXN0Lm9wdGlvbnMubGlzdE5vZGVOYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jaGlsZHJlbiA9IHN0ZXAoc3ViLCBkZXB0aCArIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhcnJheTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGF0YSA9IHN0ZXAobGlzdC5lbC5maW5kKGxpc3Qub3B0aW9ucy5saXN0Tm9kZU5hbWUpLmZpcnN0KCksIGRlcHRoKTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9LFxuXG4gICAgICAgIHNlcmlhbGlzZTogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXJpYWxpemUoKTtcbiAgICAgICAgfSxcblxuICAgICAgICByZXNldDogZnVuY3Rpb24oKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLm1vdXNlID0ge1xuICAgICAgICAgICAgICAgIG9mZnNldFggICA6IDAsXG4gICAgICAgICAgICAgICAgb2Zmc2V0WSAgIDogMCxcbiAgICAgICAgICAgICAgICBzdGFydFggICAgOiAwLFxuICAgICAgICAgICAgICAgIHN0YXJ0WSAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGFzdFggICAgIDogMCxcbiAgICAgICAgICAgICAgICBsYXN0WSAgICAgOiAwLFxuICAgICAgICAgICAgICAgIG5vd1ggICAgICA6IDAsXG4gICAgICAgICAgICAgICAgbm93WSAgICAgIDogMCxcbiAgICAgICAgICAgICAgICBkaXN0WCAgICAgOiAwLFxuICAgICAgICAgICAgICAgIGRpc3RZICAgICA6IDAsXG4gICAgICAgICAgICAgICAgZGlyQXggICAgIDogMCxcbiAgICAgICAgICAgICAgICBkaXJYICAgICAgOiAwLFxuICAgICAgICAgICAgICAgIGRpclkgICAgICA6IDAsXG4gICAgICAgICAgICAgICAgbGFzdERpclggIDogMCxcbiAgICAgICAgICAgICAgICBsYXN0RGlyWSAgOiAwLFxuICAgICAgICAgICAgICAgIGRpc3RBeFggICA6IDAsXG4gICAgICAgICAgICAgICAgZGlzdEF4WSAgIDogMFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRoaXMuaXNUb3VjaCAgICA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5tb3ZpbmcgICAgID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmRyYWdFbCAgICAgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5kcmFnUm9vdEVsID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuZHJhZ0RlcHRoICA9IDA7XG4gICAgICAgICAgICB0aGlzLmhhc05ld1Jvb3QgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucG9pbnRFbCAgICA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgZXhwYW5kSXRlbTogZnVuY3Rpb24obGkpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxpLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5jb2xsYXBzZWRDbGFzcyk7XG4gICAgICAgICAgICBsaS5jaGlsZHJlbignW2RhdGEtYWN0aW9uPVwiZXhwYW5kXCJdJykuaGlkZSgpO1xuICAgICAgICAgICAgbGkuY2hpbGRyZW4oJ1tkYXRhLWFjdGlvbj1cImNvbGxhcHNlXCJdJykuc2hvdygpO1xuICAgICAgICAgICAgbGkuY2hpbGRyZW4odGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSkuc2hvdygpO1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMub3B0aW9ucy5hZnRlckV4cGFuZCA9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hZnRlckV4cGFuZChsaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29sbGFwc2VJdGVtOiBmdW5jdGlvbihsaSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGxpc3RzID0gbGkuY2hpbGRyZW4odGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSk7XG5cbiAgICAgICAgICAgIGlmIChsaXN0cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsaS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuY29sbGFwc2VkQ2xhc3MpO1xuICAgICAgICAgICAgICAgIGxpLmNoaWxkcmVuKCdbZGF0YS1hY3Rpb249XCJjb2xsYXBzZVwiXScpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICBsaS5jaGlsZHJlbignW2RhdGEtYWN0aW9uPVwiZXhwYW5kXCJdJykuc2hvdygpO1xuICAgICAgICAgICAgICAgIGxpLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuYWZ0ZXJDb2xsYXBzZSA9PSAnZnVuY3Rpb24nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5hZnRlckNvbGxhcHNlKGxpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBleHBhbmRBbGw6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzO1xuICAgICAgICAgICAgbGlzdC5lbC5maW5kKGxpc3Qub3B0aW9ucy5pdGVtTm9kZU5hbWUpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5leHBhbmRJdGVtKCQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgY29sbGFwc2VBbGw6IGZ1bmN0aW9uKClcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzO1xuICAgICAgICAgICAgbGlzdC5lbC5maW5kKGxpc3Qub3B0aW9ucy5pdGVtTm9kZU5hbWUpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgbGlzdC5jb2xsYXBzZUl0ZW0oJCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcblxuICAgICAgICBzZXRQYXJlbnQ6IGZ1bmN0aW9uKGxpKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAobGkuY2hpbGRyZW4odGhpcy5vcHRpb25zLmxpc3ROb2RlTmFtZSkubGVuZ3RoKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICghbGkuZmluZCgnLmRkLWJ1dHRvbl9fZXhwYW5kJykubGVuZ3RoKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbGkucHJlcGVuZCgkKHRoaXMub3B0aW9ucy5leHBhbmRCdG5IVE1MKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFsaS5maW5kKCcuZGQtYnV0dG9uX19jb2xsYXBzZScpLmxlbmd0aClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGxpLnByZXBlbmQoJCh0aGlzLm9wdGlvbnMuY29sbGFwc2VCdG5IVE1MKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJChsaVswXSkuaGFzQ2xhc3MoJ2RkLWNvbGxhcHNlZCcpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxpLmNoaWxkcmVuKCdbZGF0YS1hY3Rpb249XCJjb2xsYXBzZVwiXScpLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxpLmNoaWxkcmVuKCdbZGF0YS1hY3Rpb249XCJleHBhbmRcIl0nKS5oaWRlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgdW5zZXRQYXJlbnQ6IGZ1bmN0aW9uKGxpKVxuICAgICAgICB7XG4gICAgICAgICAgICBsaS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuY29sbGFwc2VkQ2xhc3MpO1xuICAgICAgICAgICAgbGkuY2hpbGRyZW4oJ1tkYXRhLWFjdGlvbl0nKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIGxpLmNoaWxkcmVuKHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpLnJlbW92ZSgpO1xuICAgICAgICB9LFxuXG4gICAgICAgIGRyYWdTdGFydDogZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIG1vdXNlICAgID0gdGhpcy5tb3VzZSxcbiAgICAgICAgICAgICAgICB0YXJnZXQgICA9ICQoZS50YXJnZXQpLFxuICAgICAgICAgICAgICAgIGRyYWdJdGVtID0gdGFyZ2V0LmNsb3Nlc3QodGhpcy5vcHRpb25zLml0ZW1Ob2RlTmFtZSk7XG5cbiAgICAgICAgICAgIHRoaXMucGxhY2VFbC5jc3MoJ2hlaWdodCcsIGRyYWdJdGVtLmhlaWdodCgpKTtcblxuICAgICAgICAgICAgbW91c2Uub2Zmc2V0WCA9IGUub2Zmc2V0WCAhPT0gdW5kZWZpbmVkID8gZS5vZmZzZXRYIDogZS5wYWdlWCAtIHRhcmdldC5vZmZzZXQoKS5sZWZ0O1xuICAgICAgICAgICAgbW91c2Uub2Zmc2V0WSA9IGUub2Zmc2V0WSAhPT0gdW5kZWZpbmVkID8gZS5vZmZzZXRZIDogZS5wYWdlWSAtIHRhcmdldC5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICBtb3VzZS5zdGFydFggPSBtb3VzZS5sYXN0WCA9IGUucGFnZVg7XG4gICAgICAgICAgICBtb3VzZS5zdGFydFkgPSBtb3VzZS5sYXN0WSA9IGUucGFnZVk7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ1Jvb3RFbCA9IHRoaXMuZWw7XG5cbiAgICAgICAgICAgIHRoaXMuZHJhZ0VsID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMubGlzdENsYXNzICsgJyAnICsgdGhpcy5vcHRpb25zLmRyYWdDbGFzcyk7XG4gICAgICAgICAgICB0aGlzLmRyYWdFbC5jc3MoJ3dpZHRoJywgZHJhZ0l0ZW0ud2lkdGgoKSk7XG5cbiAgICAgICAgICAgIGRyYWdJdGVtLmFmdGVyKHRoaXMucGxhY2VFbCk7XG4gICAgICAgICAgICBkcmFnSXRlbVswXS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRyYWdJdGVtWzBdKTtcbiAgICAgICAgICAgIGRyYWdJdGVtLmFwcGVuZFRvKHRoaXMuZHJhZ0VsKTtcblxuICAgICAgICAgICAgJChkb2N1bWVudC5ib2R5KS5hcHBlbmQodGhpcy5kcmFnRWwpO1xuICAgICAgICAgICAgdGhpcy5kcmFnRWwuY3NzKHtcbiAgICAgICAgICAgICAgICAnbGVmdCcgOiBlLnBhZ2VYIC0gbW91c2Uub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAndG9wJyAgOiBlLnBhZ2VZIC0gbW91c2Uub2Zmc2V0WVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAvLyB0b3RhbCBkZXB0aCBvZiBkcmFnZ2luZyBpdGVtXG4gICAgICAgICAgICB2YXIgaSwgZGVwdGgsXG4gICAgICAgICAgICAgICAgaXRlbXMgPSB0aGlzLmRyYWdFbC5maW5kKHRoaXMub3B0aW9ucy5pdGVtTm9kZU5hbWUpO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZGVwdGggPSAkKGl0ZW1zW2ldKS5wYXJlbnRzKHRoaXMub3B0aW9ucy5saXN0Tm9kZU5hbWUpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAoZGVwdGggPiB0aGlzLmRyYWdEZXB0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdEZXB0aCA9IGRlcHRoO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkcmFnU3RvcDogZnVuY3Rpb24oZSlcbiAgICAgICAge1xuICAgICAgICAgICAgdmFyIGVsID0gdGhpcy5kcmFnRWwuY2hpbGRyZW4odGhpcy5vcHRpb25zLml0ZW1Ob2RlTmFtZSkuZmlyc3QoKTtcbiAgICAgICAgICAgIGVsWzBdLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxbMF0pO1xuICAgICAgICAgICAgdGhpcy5wbGFjZUVsLnJlcGxhY2VXaXRoKGVsKTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnRWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLmVsLnRyaWdnZXIoJ2NoYW5nZScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaGFzTmV3Um9vdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1Jvb3RFbC50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLm9wdGlvbnMuZHJhZ1N0b3AgPT0gJ2Z1bmN0aW9uJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZHJhZ1N0b3AoZWwpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0sXG5cbiAgICAgICAgZHJhZ01vdmU6IGZ1bmN0aW9uKGUpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBsaXN0LCBwYXJlbnQsIHByZXYsIG5leHQsIGRlcHRoLFxuICAgICAgICAgICAgICAgIG9wdCAgID0gdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgICAgIG1vdXNlID0gdGhpcy5tb3VzZTtcblxuICAgICAgICAgICAgdGhpcy5kcmFnRWwuY3NzKHtcbiAgICAgICAgICAgICAgICAnbGVmdCcgOiBlLnBhZ2VYIC0gbW91c2Uub2Zmc2V0WCxcbiAgICAgICAgICAgICAgICAndG9wJyAgOiBlLnBhZ2VZIC0gbW91c2Uub2Zmc2V0WVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIG1vdXNlIHBvc2l0aW9uIGxhc3QgZXZlbnRzXG4gICAgICAgICAgICBtb3VzZS5sYXN0WCA9IG1vdXNlLm5vd1g7XG4gICAgICAgICAgICBtb3VzZS5sYXN0WSA9IG1vdXNlLm5vd1k7XG4gICAgICAgICAgICAvLyBtb3VzZSBwb3NpdGlvbiB0aGlzIGV2ZW50c1xuICAgICAgICAgICAgbW91c2Uubm93WCAgPSBlLnBhZ2VYO1xuICAgICAgICAgICAgbW91c2Uubm93WSAgPSBlLnBhZ2VZO1xuICAgICAgICAgICAgLy8gZGlzdGFuY2UgbW91c2UgbW92ZWQgYmV0d2VlbiBldmVudHNcbiAgICAgICAgICAgIG1vdXNlLmRpc3RYID0gbW91c2Uubm93WCAtIG1vdXNlLmxhc3RYO1xuICAgICAgICAgICAgbW91c2UuZGlzdFkgPSBtb3VzZS5ub3dZIC0gbW91c2UubGFzdFk7XG4gICAgICAgICAgICAvLyBkaXJlY3Rpb24gbW91c2Ugd2FzIG1vdmluZ1xuICAgICAgICAgICAgbW91c2UubGFzdERpclggPSBtb3VzZS5kaXJYO1xuICAgICAgICAgICAgbW91c2UubGFzdERpclkgPSBtb3VzZS5kaXJZO1xuICAgICAgICAgICAgLy8gZGlyZWN0aW9uIG1vdXNlIGlzIG5vdyBtb3ZpbmcgKG9uIGJvdGggYXhpcylcbiAgICAgICAgICAgIG1vdXNlLmRpclggPSBtb3VzZS5kaXN0WCA9PT0gMCA/IDAgOiBtb3VzZS5kaXN0WCA+IDAgPyAxIDogLTE7XG4gICAgICAgICAgICBtb3VzZS5kaXJZID0gbW91c2UuZGlzdFkgPT09IDAgPyAwIDogbW91c2UuZGlzdFkgPiAwID8gMSA6IC0xO1xuICAgICAgICAgICAgLy8gYXhpcyBtb3VzZSBpcyBub3cgbW92aW5nIG9uXG4gICAgICAgICAgICB2YXIgbmV3QXggICA9IE1hdGguYWJzKG1vdXNlLmRpc3RYKSA+IE1hdGguYWJzKG1vdXNlLmRpc3RZKSA/IDEgOiAwO1xuXG4gICAgICAgICAgICAvLyBkbyBub3RoaW5nIG9uIGZpcnN0IG1vdmVcbiAgICAgICAgICAgIGlmICghbW91c2UubW92aW5nKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuZGlyQXggID0gbmV3QXg7XG4gICAgICAgICAgICAgICAgbW91c2UubW92aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNhbGMgZGlzdGFuY2UgbW92ZWQgb24gdGhpcyBheGlzIChhbmQgZGlyZWN0aW9uKVxuICAgICAgICAgICAgaWYgKG1vdXNlLmRpckF4ICE9PSBuZXdBeCkge1xuICAgICAgICAgICAgICAgIG1vdXNlLmRpc3RBeFggPSAwO1xuICAgICAgICAgICAgICAgIG1vdXNlLmRpc3RBeFkgPSAwO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5kaXN0QXhYICs9IE1hdGguYWJzKG1vdXNlLmRpc3RYKTtcbiAgICAgICAgICAgICAgICBpZiAobW91c2UuZGlyWCAhPT0gMCAmJiBtb3VzZS5kaXJYICE9PSBtb3VzZS5sYXN0RGlyWCkge1xuICAgICAgICAgICAgICAgICAgICBtb3VzZS5kaXN0QXhYID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW91c2UuZGlzdEF4WSArPSBNYXRoLmFicyhtb3VzZS5kaXN0WSk7XG4gICAgICAgICAgICAgICAgaWYgKG1vdXNlLmRpclkgIT09IDAgJiYgbW91c2UuZGlyWSAhPT0gbW91c2UubGFzdERpclkpIHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2UuZGlzdEF4WSA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW91c2UuZGlyQXggPSBuZXdBeDtcblxuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiBtb3ZlIGhvcml6b250YWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKG1vdXNlLmRpckF4ICYmIG1vdXNlLmRpc3RBeFggPj0gb3B0LnRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgIC8vIHJlc2V0IG1vdmUgZGlzdGFuY2Ugb24geC1heGlzIGZvciBuZXcgcGhhc2VcbiAgICAgICAgICAgICAgICBtb3VzZS5kaXN0QXhYID0gMDtcbiAgICAgICAgICAgICAgICBwcmV2ID0gdGhpcy5wbGFjZUVsLnByZXYob3B0Lml0ZW1Ob2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgLy8gaW5jcmVhc2UgaG9yaXpvbnRhbCBsZXZlbCBpZiBwcmV2aW91cyBzaWJsaW5nIGV4aXN0cyBhbmQgaXMgbm90IGNvbGxhcHNlZFxuICAgICAgICAgICAgICAgIGlmIChtb3VzZS5kaXN0WCA+IDAgJiYgcHJldi5sZW5ndGggJiYgIXByZXYuaGFzQ2xhc3Mob3B0LmNvbGxhcHNlZENsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYW5ub3QgaW5jcmVhc2UgbGV2ZWwgd2hlbiBpdGVtIGFib3ZlIGlzIGNvbGxhcHNlZFxuICAgICAgICAgICAgICAgICAgICBsaXN0ID0gcHJldi5maW5kKG9wdC5saXN0Tm9kZU5hbWUpLmxhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVwdGggbGltaXQgaGFzIHJlYWNoZWRcbiAgICAgICAgICAgICAgICAgICAgZGVwdGggPSB0aGlzLnBsYWNlRWwucGFyZW50cyhvcHQubGlzdE5vZGVOYW1lKS5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkZXB0aCArIHRoaXMuZHJhZ0RlcHRoIDw9IG9wdC5tYXhEZXB0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIG5ldyBzdWItbGV2ZWwgaWYgb25lIGRvZXNuJ3QgZXhpc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghbGlzdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0ID0gJCgnPCcgKyBvcHQubGlzdE5vZGVOYW1lICsgJy8+JykuYWRkQ2xhc3Mob3B0Lmxpc3RDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5hcHBlbmQodGhpcy5wbGFjZUVsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmV2LmFwcGVuZChsaXN0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFBhcmVudChwcmV2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZWxzZSBhcHBlbmQgdG8gbmV4dCBsZXZlbCB1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpc3QgPSBwcmV2LmNoaWxkcmVuKG9wdC5saXN0Tm9kZU5hbWUpLmxhc3QoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaXN0LmFwcGVuZCh0aGlzLnBsYWNlRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGRlY3JlYXNlIGhvcml6b250YWwgbGV2ZWxcbiAgICAgICAgICAgICAgICBpZiAobW91c2UuZGlzdFggPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdlIGNhbid0IGRlY3JlYXNlIGEgbGV2ZWwgaWYgYW4gaXRlbSBwcmVjZWVkcyB0aGUgY3VycmVudCBvbmVcbiAgICAgICAgICAgICAgICAgICAgbmV4dCA9IHRoaXMucGxhY2VFbC5uZXh0KG9wdC5pdGVtTm9kZU5hbWUpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIW5leHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQgPSB0aGlzLnBsYWNlRWwucGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYWNlRWwuY2xvc2VzdChvcHQuaXRlbU5vZGVOYW1lKS5hZnRlcih0aGlzLnBsYWNlRWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwYXJlbnQuY2hpbGRyZW4oKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2V0UGFyZW50KHBhcmVudC5wYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpc0VtcHR5ID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIGZpbmQgbGlzdCBpdGVtIHVuZGVyIGN1cnNvclxuICAgICAgICAgICAgaWYgKCFoYXNQb2ludGVyRXZlbnRzKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kcmFnRWxbMF0uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wb2ludEVsID0gJChkb2N1bWVudC5lbGVtZW50RnJvbVBvaW50KGUucGFnZVggLSBkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQsIGUucGFnZVkgLSAod2luZG93LnBhZ2VZT2Zmc2V0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKSk7XG4gICAgICAgICAgICBpZiAoIWhhc1BvaW50ZXJFdmVudHMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRyYWdFbFswXS5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRFbC5oYXNDbGFzcyhvcHQuaGFuZGxlQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludEVsID0gdGhpcy5wb2ludEVsLnBhcmVudChvcHQuaXRlbU5vZGVOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50RWwuaGFzQ2xhc3Mob3B0LmVtcHR5Q2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgaXNFbXB0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICghdGhpcy5wb2ludEVsLmxlbmd0aCB8fCAhdGhpcy5wb2ludEVsLmhhc0NsYXNzKG9wdC5pdGVtQ2xhc3MpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBmaW5kIHBhcmVudCBsaXN0IG9mIGl0ZW0gdW5kZXIgY3Vyc29yXG4gICAgICAgICAgICB2YXIgcG9pbnRFbFJvb3QgPSB0aGlzLnBvaW50RWwuY2xvc2VzdCgnLicgKyBvcHQucm9vdENsYXNzKSxcbiAgICAgICAgICAgICAgICBpc05ld1Jvb3QgICA9IHRoaXMuZHJhZ1Jvb3RFbC5kYXRhKCduZXN0YWJsZS1pZCcpICE9PSBwb2ludEVsUm9vdC5kYXRhKCduZXN0YWJsZS1pZCcpO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIG1vdmUgdmVydGljYWxcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgaWYgKCFtb3VzZS5kaXJBeCB8fCBpc05ld1Jvb3QgfHwgaXNFbXB0eSkge1xuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGdyb3VwcyBtYXRjaCBpZiBkcmFnZ2luZyBvdmVyIG5ldyByb290XG4gICAgICAgICAgICAgICAgaWYgKGlzTmV3Um9vdCAmJiBvcHQuZ3JvdXAgIT09IHBvaW50RWxSb290LmRhdGEoJ25lc3RhYmxlLWdyb3VwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjaGVjayBkZXB0aCBsaW1pdFxuICAgICAgICAgICAgICAgIGRlcHRoID0gdGhpcy5kcmFnRGVwdGggLSAxICsgdGhpcy5wb2ludEVsLnBhcmVudHMob3B0Lmxpc3ROb2RlTmFtZSkubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChkZXB0aCA+IG9wdC5tYXhEZXB0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBiZWZvcmUgPSBlLnBhZ2VZIDwgKHRoaXMucG9pbnRFbC5vZmZzZXQoKS50b3AgKyB0aGlzLnBvaW50RWwuaGVpZ2h0KCkgLyAyKTtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50ID0gdGhpcy5wbGFjZUVsLnBhcmVudCgpO1xuICAgICAgICAgICAgICAgIC8vIGlmIGVtcHR5IGNyZWF0ZSBuZXcgbGlzdCB0byByZXBsYWNlIGVtcHR5IHBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgaWYgKGlzRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdCA9ICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChvcHQubGlzdE5vZGVOYW1lKSkuYWRkQ2xhc3Mob3B0Lmxpc3RDbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIGxpc3QuYXBwZW5kKHRoaXMucGxhY2VFbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRFbC5yZXBsYWNlV2l0aChsaXN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoYmVmb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRFbC5iZWZvcmUodGhpcy5wbGFjZUVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9pbnRFbC5hZnRlcih0aGlzLnBsYWNlRWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXBhcmVudC5jaGlsZHJlbigpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVuc2V0UGFyZW50KHBhcmVudC5wYXJlbnQoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5kcmFnUm9vdEVsLmZpbmQob3B0Lml0ZW1Ob2RlTmFtZSkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHJhZ1Jvb3RFbC5hcHBlbmQoJzxkaXYgY2xhc3M9XCInICsgb3B0LmVtcHR5Q2xhc3MgKyAnXCIvPicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBwYXJlbnQgcm9vdCBsaXN0IGhhcyBjaGFuZ2VkXG4gICAgICAgICAgICAgICAgaWYgKGlzTmV3Um9vdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdSb290RWwgPSBwb2ludEVsUm9vdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNOZXdSb290ID0gdGhpcy5lbFswXSAhPT0gdGhpcy5kcmFnUm9vdEVsWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfTtcblxuICAgICQuZm4ubmVzdGFibGUgPSBmdW5jdGlvbihwYXJhbXMpXG4gICAge1xuICAgICAgICB2YXIgbGlzdHMgID0gdGhpcyxcbiAgICAgICAgICAgIHJldHZhbCA9IHRoaXM7XG5cbiAgICAgICAgbGlzdHMuZWFjaChmdW5jdGlvbigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHZhciBwbHVnaW4gPSAkKHRoaXMpLmRhdGEoXCJuZXN0YWJsZVwiKTtcblxuICAgICAgICAgICAgaWYgKCFwbHVnaW4pIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmRhdGEoXCJuZXN0YWJsZVwiLCBuZXcgUGx1Z2luKHRoaXMsIHBhcmFtcykpO1xuICAgICAgICAgICAgICAgICQodGhpcykuZGF0YShcIm5lc3RhYmxlLWlkXCIsIG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBwbHVnaW5bcGFyYW1zXSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICByZXR2YWwgPSBwbHVnaW5bcGFyYW1zXSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHJldHZhbCB8fCBsaXN0cztcbiAgICB9O1xuXG59KSh3aW5kb3cualF1ZXJ5IHx8IHdpbmRvdy5aZXB0bywgd2luZG93LCBkb2N1bWVudCk7XG4iXX0=

"use strict";

Array.prototype.max = function () {
  return Math.max.apply(null, this);
};
Array.prototype.min = function () {
  return Math.min.apply(null, this);
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3RvdHlwZS5qcyJdLCJuYW1lcyI6WyJBcnJheSIsInByb3RvdHlwZSIsIm1heCIsIk1hdGgiLCJhcHBseSIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQUEsTUFBTUMsU0FBTixDQUFnQkMsR0FBaEIsR0FBc0IsWUFBVztBQUFFLFNBQU9DLEtBQUtELEdBQUwsQ0FBU0UsS0FBVCxDQUFlLElBQWYsRUFBcUIsSUFBckIsQ0FBUDtBQUFvQyxDQUF2RTtBQUNBSixNQUFNQyxTQUFOLENBQWdCSSxHQUFoQixHQUFzQixZQUFXO0FBQUUsU0FBT0YsS0FBS0UsR0FBTCxDQUFTRCxLQUFULENBQWUsSUFBZixFQUFxQixJQUFyQixDQUFQO0FBQW9DLENBQXZFIiwiZmlsZSI6InByb3RvdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIkFycmF5LnByb3RvdHlwZS5tYXggPSBmdW5jdGlvbigpIHsgcmV0dXJuIE1hdGgubWF4LmFwcGx5KG51bGwsIHRoaXMpOyB9O1xuQXJyYXkucHJvdG90eXBlLm1pbiA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gTWF0aC5taW4uYXBwbHkobnVsbCwgdGhpcyk7IH07XG4iXX0=

'use strict';

var _redactor = {

    imperavi: function imperavi(id) {
        var element = $(['#', id].join(''))[0];

        $(element).redactor(getSettings.imperavi({
            mode: 'htmlmixed'
        }));

        CodeMirror.fromTextArea(element, getSettings.codemirror({
            mode: 'htmlmixed'
        }));
    },

    tinymce: function (_tinymce) {
        function tinymce(_x) {
            return _tinymce.apply(this, arguments);
        }

        tinymce.toString = function () {
            return _tinymce.toString();
        };

        return tinymce;
    }(function (id) {
        tinymce.init(getSettings.tinymce({
            selector: ['#', id].join('')
        }));
    }),

    cleditor: function cleditor(id) {
        $(['#', id].join('')).cleditor();
    },

    froala: function froala(id) {
        $(['#', id].join('')).froalaEditor({
            language: 'ru',
            toolbarButtons: ['fullscreen', 'bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', '|', 'fontFamily', 'fontSize', 'color', 'inlineStyle', 'paragraphStyle', '|', 'paragraphFormat', 'align', 'formatOL', 'formatUL', 'outdent', 'indent', 'quote', '-', 'insertLink', 'insertImage', 'insertVideo', 'insertFile', 'insertTable', '|', 'emoticons', 'specialCharacters', 'insertHR', 'selectAll', 'clearFormatting', '|', 'print', 'spellChecker', 'help', 'html', '|', 'undo', 'redo'],
            pluginsEnabled: null
        });
    },

    summernote: function summernote(id) {
        $(['#', id].join('')).summernote({
            height: 200,
            tabsize: 2,
            toolbar: true,
            codemirror: {
                theme: 'monokai'
            }
        });
    },

    ckeditor: function ckeditor(id) {
        CKEDITOR.config.width = 'auto';
        CKEDITOR.config.height = 600;
        CKEDITOR.disableAutoInline = true;

        // CKEDITOR.replace(id, {
        //     toolbar: [
        //         { name: 'document', items: [ 'Print' ] },
        //         { name: 'clipboard', items: [ 'Undo', 'Redo' ] },
        //         { name: 'styles', items: [ 'Format', 'Font', 'FontSize' ] },
        //         { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', 'RemoveFormat', 'CopyFormatting' ] },
        //         { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
        //         { name: 'align', items: [ 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
        //         { name: 'links', items: [ 'Link', 'Unlink' ] },
        //         { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote' ] },
        //         { name: 'insert', items: [ 'Image', 'Table' ] },
        //         { name: 'tools', items: [ 'Maximize' ] },
        //         { name: 'editing', items: [ 'Scayt' ] }
        //     ],
        //     customConfig: '',
        //     disallowedContent: 'img{width,height,float}',
        //     extraAllowedContent: 'img[width,height,align]',
        //     // extraPlugins: 'tableresize,uploadimage,uploadfile',
        //     extraPlugins: 'tableresize',
        //     height: 800,
        //     contentsCss: [ 'https://cdn.ckeditor.com/4.6.1/full-all/contents.css' ],
        //     bodyClass: 'document-editor',
        //     format_tags: 'p;h1;h2;h3;pre',
        //     removeDialogTabs: 'image:advanced;link:advanced',
        //     stylesSet: [
        //         /* Inline Styles */
        //         { name: 'Marker', element: 'span', attributes: { 'class': 'marker' } },
        //         { name: 'Cited Work', element: 'cite' },
        //         { name: 'Inline Quotation', element: 'q' },
        //         /* Object Styles */
        //         {
        //             name: 'Special Container',
        //             element: 'div',
        //             styles: {
        //                 padding: '5px 10px',
        //                 background: '#eee',
        //                 border: '1px solid #ccc'
        //             }
        //         },
        //         {
        //             name: 'Compact table',
        //             element: 'table',
        //             attributes: {
        //                 cellpadding: '5',
        //                 cellspacing: '0',
        //                 border: '1',
        //                 bordercolor: '#ccc'
        //             },
        //             styles: {
        //                 'border-collapse': 'collapse'
        //             }
        //         },
        //         { name: 'Borderless Table', element: 'table', styles: { 'border-style': 'hidden', 'background-color': '#E6E6FA' } },
        //         { name: 'Square Bulleted List', element: 'ul', styles: { 'list-style-type': 'square' } }
        //     ]
        // } );

        CKEDITOR.replace(id, {
            customConfig: '/apps/wysiwyg/ckeditor/config.js'
        });
    },

    wysiwyg: function wysiwyg(id) {
        $(['#', id].join('')).wysiwyg({
            toolbar: 'top', // 'selection'|'top'|'top-selection'|'bottom'|'bottom-selection'
            hotKeys: {
                'ctrl+b meta+b': 'bold',
                'ctrl+i meta+i': 'italic',
                'ctrl+u meta+u': 'underline',
                'ctrl+z meta+z': 'undo',
                'ctrl+y meta+y meta+shift+z': 'redo'
            }
        });
    },

    init: function init(id, type) {
        if (typeof this[type] !== 'undefined') {
            this[type](id);
        }
    }
};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZGFjdG9yLmpzIl0sIm5hbWVzIjpbIl9yZWRhY3RvciIsImltcGVyYXZpIiwiaWQiLCJlbGVtZW50IiwiJCIsImpvaW4iLCJyZWRhY3RvciIsImdldFNldHRpbmdzIiwibW9kZSIsIkNvZGVNaXJyb3IiLCJmcm9tVGV4dEFyZWEiLCJjb2RlbWlycm9yIiwidGlueW1jZSIsImluaXQiLCJzZWxlY3RvciIsImNsZWRpdG9yIiwiZnJvYWxhIiwiZnJvYWxhRWRpdG9yIiwibGFuZ3VhZ2UiLCJ0b29sYmFyQnV0dG9ucyIsInBsdWdpbnNFbmFibGVkIiwic3VtbWVybm90ZSIsImhlaWdodCIsInRhYnNpemUiLCJ0b29sYmFyIiwidGhlbWUiLCJja2VkaXRvciIsIkNLRURJVE9SIiwiY29uZmlnIiwid2lkdGgiLCJkaXNhYmxlQXV0b0lubGluZSIsInJlcGxhY2UiLCJjdXN0b21Db25maWciLCJ3eXNpd3lnIiwiaG90S2V5cyIsInR5cGUiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsWUFBWTs7QUFFWkMsY0FBVSxrQkFBU0MsRUFBVCxFQUNiO0FBQ08sWUFBTUMsVUFBVUMsRUFBRSxDQUFDLEdBQUQsRUFBTUYsRUFBTixFQUFVRyxJQUFWLENBQWUsRUFBZixDQUFGLEVBQXNCLENBQXRCLENBQWhCOztBQUVBRCxVQUFFRCxPQUFGLEVBQVdHLFFBQVgsQ0FBb0JDLFlBQVlOLFFBQVosQ0FBcUI7QUFDckNPLGtCQUFNO0FBRCtCLFNBQXJCLENBQXBCOztBQUlBQyxtQkFBV0MsWUFBWCxDQUF3QlAsT0FBeEIsRUFBaUNJLFlBQVlJLFVBQVosQ0FBdUI7QUFDcERILGtCQUFNO0FBRDhDLFNBQXZCLENBQWpDO0FBR04sS0FiYzs7QUFlWkk7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUEsTUFBUyxVQUFTVixFQUFULEVBQ1Q7QUFDSVUsZ0JBQVFDLElBQVIsQ0FBYU4sWUFBWUssT0FBWixDQUFvQjtBQUM3QkUsc0JBQVUsQ0FBQyxHQUFE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QUFMekI7QUFGVyxTQUE5QjtBQVVBLEtBaEljOztBQWtJZnJCLFVBQU0sY0FBU1gsRUFBVCxFQUFhaUMsSUFBYixFQUNOO0FBQ0MsWUFBSSxPQUFPLEtBQUtBLElBQUwsQ0FBUCxLQUF1QixXQUEzQixFQUNBO0FBQ0MsaUJBQUtBLElBQUwsRUFBV2pDLEVBQVg7QUFDQTtBQUNEO0FBeEljLENBQWhCIiwiZmlsZSI6InJlZGFjdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIF9yZWRhY3RvciA9IHtcblxuICAgIGltcGVyYXZpOiBmdW5jdGlvbihpZClcblx0e1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gJChbJyMnLCBpZF0uam9pbignJykpWzBdO1xuXG4gICAgICAgICQoZWxlbWVudCkucmVkYWN0b3IoZ2V0U2V0dGluZ3MuaW1wZXJhdmkoe1xuICAgICAgICAgICAgbW9kZTogJ2h0bWxtaXhlZCdcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIENvZGVNaXJyb3IuZnJvbVRleHRBcmVhKGVsZW1lbnQsIGdldFNldHRpbmdzLmNvZGVtaXJyb3Ioe1xuICAgICAgICAgICAgbW9kZTogJ2h0bWxtaXhlZCdcbiAgICAgICAgfSkpO1xuXHR9LFxuXG4gICAgdGlueW1jZTogZnVuY3Rpb24oaWQpXG4gICAge1xuICAgICAgICB0aW55bWNlLmluaXQoZ2V0U2V0dGluZ3MudGlueW1jZSh7XG4gICAgICAgICAgICBzZWxlY3RvcjogWycjJywgaWRdLmpvaW4oJycpXG4gICAgICAgIH0pKTtcbiAgICB9LFxuXG4gICAgY2xlZGl0b3I6IGZ1bmN0aW9uKGlkKVxuICAgIHtcbiAgICAgICAgJChbJyMnLCBpZF0uam9pbignJykpLmNsZWRpdG9yKCk7XG4gICAgfSxcblxuICAgIGZyb2FsYTogZnVuY3Rpb24oaWQpXG4gICAge1xuICAgICAgICAkKFsnIycsIGlkXS5qb2luKCcnKSkuZnJvYWxhRWRpdG9yKHtcbiAgICAgICAgICAgIGxhbmd1YWdlOiAncnUnLFxuICAgICAgICAgICAgdG9vbGJhckJ1dHRvbnM6IFsnZnVsbHNjcmVlbicsICdib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnLCAnc3RyaWtlVGhyb3VnaCcsICdzdWJzY3JpcHQnLCAnc3VwZXJzY3JpcHQnLCAnfCcsICdmb250RmFtaWx5JywgJ2ZvbnRTaXplJywgJ2NvbG9yJywgJ2lubGluZVN0eWxlJywgJ3BhcmFncmFwaFN0eWxlJywgJ3wnLCAncGFyYWdyYXBoRm9ybWF0JywgJ2FsaWduJywgJ2Zvcm1hdE9MJywgJ2Zvcm1hdFVMJywgJ291dGRlbnQnLCAnaW5kZW50JywgJ3F1b3RlJywgJy0nLCAnaW5zZXJ0TGluaycsICdpbnNlcnRJbWFnZScsICdpbnNlcnRWaWRlbycsICdpbnNlcnRGaWxlJywgJ2luc2VydFRhYmxlJywgJ3wnLCAnZW1vdGljb25zJywgJ3NwZWNpYWxDaGFyYWN0ZXJzJywgJ2luc2VydEhSJywgJ3NlbGVjdEFsbCcsICdjbGVhckZvcm1hdHRpbmcnLCAnfCcsICdwcmludCcsICdzcGVsbENoZWNrZXInLCAnaGVscCcsICdodG1sJywgJ3wnLCAndW5kbycsICdyZWRvJ10sXG4gICAgICAgICAgICBwbHVnaW5zRW5hYmxlZDogbnVsbFxuICAgICAgICB9KVxuICAgIH0sXG5cbiAgICBzdW1tZXJub3RlOiBmdW5jdGlvbihpZClcbiAgICB7XG4gICAgICAgICQoWycjJywgaWRdLmpvaW4oJycpKS5zdW1tZXJub3RlKHtcbiAgICAgICAgICAgIGhlaWdodDogMjAwLFxuICAgICAgICAgICAgdGFic2l6ZTogMixcbiAgICAgICAgICAgIHRvb2xiYXI6IHRydWUsXG4gICAgICAgICAgICBjb2RlbWlycm9yOiB7XG4gICAgICAgICAgICAgICAgdGhlbWU6ICdtb25va2FpJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuXHRcbiAgICBja2VkaXRvcjogZnVuY3Rpb24oaWQpXG5cdHtcbiAgICAgICAgQ0tFRElUT1IuY29uZmlnLndpZHRoID0gJ2F1dG8nO1xuICAgICAgICBDS0VESVRPUi5jb25maWcuaGVpZ2h0ID0gNjAwO1xuICAgICAgICBDS0VESVRPUi5kaXNhYmxlQXV0b0lubGluZSA9IHRydWU7XG5cbiAgICAgICAgLy8gQ0tFRElUT1IucmVwbGFjZShpZCwge1xuICAgICAgICAvLyAgICAgdG9vbGJhcjogW1xuICAgICAgICAvLyAgICAgICAgIHsgbmFtZTogJ2RvY3VtZW50JywgaXRlbXM6IFsgJ1ByaW50JyBdIH0sXG4gICAgICAgIC8vICAgICAgICAgeyBuYW1lOiAnY2xpcGJvYXJkJywgaXRlbXM6IFsgJ1VuZG8nLCAnUmVkbycgXSB9LFxuICAgICAgICAvLyAgICAgICAgIHsgbmFtZTogJ3N0eWxlcycsIGl0ZW1zOiBbICdGb3JtYXQnLCAnRm9udCcsICdGb250U2l6ZScgXSB9LFxuICAgICAgICAvLyAgICAgICAgIHsgbmFtZTogJ2Jhc2ljc3R5bGVzJywgaXRlbXM6IFsgJ0JvbGQnLCAnSXRhbGljJywgJ1VuZGVybGluZScsICdTdHJpa2UnLCAnUmVtb3ZlRm9ybWF0JywgJ0NvcHlGb3JtYXR0aW5nJyBdIH0sXG4gICAgICAgIC8vICAgICAgICAgeyBuYW1lOiAnY29sb3JzJywgaXRlbXM6IFsgJ1RleHRDb2xvcicsICdCR0NvbG9yJyBdIH0sXG4gICAgICAgIC8vICAgICAgICAgeyBuYW1lOiAnYWxpZ24nLCBpdGVtczogWyAnSnVzdGlmeUxlZnQnLCAnSnVzdGlmeUNlbnRlcicsICdKdXN0aWZ5UmlnaHQnLCAnSnVzdGlmeUJsb2NrJyBdIH0sXG4gICAgICAgIC8vICAgICAgICAgeyBuYW1lOiAnbGlua3MnLCBpdGVtczogWyAnTGluaycsICdVbmxpbmsnIF0gfSxcbiAgICAgICAgLy8gICAgICAgICB7IG5hbWU6ICdwYXJhZ3JhcGgnLCBpdGVtczogWyAnTnVtYmVyZWRMaXN0JywgJ0J1bGxldGVkTGlzdCcsICctJywgJ091dGRlbnQnLCAnSW5kZW50JywgJy0nLCAnQmxvY2txdW90ZScgXSB9LFxuICAgICAgICAvLyAgICAgICAgIHsgbmFtZTogJ2luc2VydCcsIGl0ZW1zOiBbICdJbWFnZScsICdUYWJsZScgXSB9LFxuICAgICAgICAvLyAgICAgICAgIHsgbmFtZTogJ3Rvb2xzJywgaXRlbXM6IFsgJ01heGltaXplJyBdIH0sXG4gICAgICAgIC8vICAgICAgICAgeyBuYW1lOiAnZWRpdGluZycsIGl0ZW1zOiBbICdTY2F5dCcgXSB9XG4gICAgICAgIC8vICAgICBdLFxuICAgICAgICAvLyAgICAgY3VzdG9tQ29uZmlnOiAnJyxcbiAgICAgICAgLy8gICAgIGRpc2FsbG93ZWRDb250ZW50OiAnaW1ne3dpZHRoLGhlaWdodCxmbG9hdH0nLFxuICAgICAgICAvLyAgICAgZXh0cmFBbGxvd2VkQ29udGVudDogJ2ltZ1t3aWR0aCxoZWlnaHQsYWxpZ25dJyxcbiAgICAgICAgLy8gICAgIC8vIGV4dHJhUGx1Z2luczogJ3RhYmxlcmVzaXplLHVwbG9hZGltYWdlLHVwbG9hZGZpbGUnLFxuICAgICAgICAvLyAgICAgZXh0cmFQbHVnaW5zOiAndGFibGVyZXNpemUnLFxuICAgICAgICAvLyAgICAgaGVpZ2h0OiA4MDAsXG4gICAgICAgIC8vICAgICBjb250ZW50c0NzczogWyAnaHR0cHM6Ly9jZG4uY2tlZGl0b3IuY29tLzQuNi4xL2Z1bGwtYWxsL2NvbnRlbnRzLmNzcycgXSxcbiAgICAgICAgLy8gICAgIGJvZHlDbGFzczogJ2RvY3VtZW50LWVkaXRvcicsXG4gICAgICAgIC8vICAgICBmb3JtYXRfdGFnczogJ3A7aDE7aDI7aDM7cHJlJyxcbiAgICAgICAgLy8gICAgIHJlbW92ZURpYWxvZ1RhYnM6ICdpbWFnZTphZHZhbmNlZDtsaW5rOmFkdmFuY2VkJyxcbiAgICAgICAgLy8gICAgIHN0eWxlc1NldDogW1xuICAgICAgICAvLyAgICAgICAgIC8qIElubGluZSBTdHlsZXMgKi9cbiAgICAgICAgLy8gICAgICAgICB7IG5hbWU6ICdNYXJrZXInLCBlbGVtZW50OiAnc3BhbicsIGF0dHJpYnV0ZXM6IHsgJ2NsYXNzJzogJ21hcmtlcicgfSB9LFxuICAgICAgICAvLyAgICAgICAgIHsgbmFtZTogJ0NpdGVkIFdvcmsnLCBlbGVtZW50OiAnY2l0ZScgfSxcbiAgICAgICAgLy8gICAgICAgICB7IG5hbWU6ICdJbmxpbmUgUXVvdGF0aW9uJywgZWxlbWVudDogJ3EnIH0sXG4gICAgICAgIC8vICAgICAgICAgLyogT2JqZWN0IFN0eWxlcyAqL1xuICAgICAgICAvLyAgICAgICAgIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbmFtZTogJ1NwZWNpYWwgQ29udGFpbmVyJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxlbWVudDogJ2RpdicsXG4gICAgICAgIC8vICAgICAgICAgICAgIHN0eWxlczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgcGFkZGluZzogJzVweCAxMHB4JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICcjZWVlJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjY2NjJ1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7XG4gICAgICAgIC8vICAgICAgICAgICAgIG5hbWU6ICdDb21wYWN0IHRhYmxlJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgZWxlbWVudDogJ3RhYmxlJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgYXR0cmlidXRlczoge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgY2VsbHBhZGRpbmc6ICc1JyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNlbGxzcGFjaW5nOiAnMCcsXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICBib3JkZXI6ICcxJyxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGJvcmRlcmNvbG9yOiAnI2NjYydcbiAgICAgICAgLy8gICAgICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICAgICAgc3R5bGVzOiB7XG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbGxhcHNlJzogJ2NvbGxhcHNlJ1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfSxcbiAgICAgICAgLy8gICAgICAgICB7IG5hbWU6ICdCb3JkZXJsZXNzIFRhYmxlJywgZWxlbWVudDogJ3RhYmxlJywgc3R5bGVzOiB7ICdib3JkZXItc3R5bGUnOiAnaGlkZGVuJywgJ2JhY2tncm91bmQtY29sb3InOiAnI0U2RTZGQScgfSB9LFxuICAgICAgICAvLyAgICAgICAgIHsgbmFtZTogJ1NxdWFyZSBCdWxsZXRlZCBMaXN0JywgZWxlbWVudDogJ3VsJywgc3R5bGVzOiB7ICdsaXN0LXN0eWxlLXR5cGUnOiAnc3F1YXJlJyB9IH1cbiAgICAgICAgLy8gICAgIF1cbiAgICAgICAgLy8gfSApO1xuXG4gICAgICAgIENLRURJVE9SLnJlcGxhY2UoaWQsIHtcbiAgICAgICAgICAgIGN1c3RvbUNvbmZpZzogJy9hcHBzL3d5c2l3eWcvY2tlZGl0b3IvY29uZmlnLmpzJ1xuICAgICAgICB9KTtcblx0fSxcblx0XG4gICAgd3lzaXd5ZzogZnVuY3Rpb24oaWQpXG5cdHtcblx0XHQkKFsnIycsIGlkXS5qb2luKCcnKSkud3lzaXd5Zyh7XG5cdFx0XHR0b29sYmFyOiAndG9wJywgLy8gJ3NlbGVjdGlvbid8J3RvcCd8J3RvcC1zZWxlY3Rpb24nfCdib3R0b20nfCdib3R0b20tc2VsZWN0aW9uJ1xuICAgICAgICAgICAgaG90S2V5czoge1xuICAgICAgICAgICAgICAgICdjdHJsK2IgbWV0YStiJzogJ2JvbGQnLFxuICAgICAgICAgICAgICAgICdjdHJsK2kgbWV0YStpJzogJ2l0YWxpYycsXG4gICAgICAgICAgICAgICAgJ2N0cmwrdSBtZXRhK3UnOiAndW5kZXJsaW5lJyxcbiAgICAgICAgICAgICAgICAnY3RybCt6IG1ldGEreic6ICd1bmRvJyxcbiAgICAgICAgICAgICAgICAnY3RybCt5IG1ldGEreSBtZXRhK3NoaWZ0K3onOiAncmVkbydcbiAgICAgICAgICAgIH1cblx0XHR9KTtcblx0fSxcblxuXHRpbml0OiBmdW5jdGlvbihpZCwgdHlwZSlcblx0e1xuXHRcdGlmICh0eXBlb2YodGhpc1t0eXBlXSkgIT09ICd1bmRlZmluZWQnKVxuXHRcdHtcblx0XHRcdHRoaXNbdHlwZV0oaWQpO1xuXHRcdH1cblx0fVxufTsiXX0=

"use strict";

;(function ($) {
    $.fn.timeoutClass = function (classname, timeout) {
        timeout = timeout || 10;
        var that = this;
        setTimeout(function () {
            $(that).toggleClass(classname);
        }, timeout);
    };
})(jQuery);
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpbWVvdXQuY2xhc3MuanMiXSwibmFtZXMiOlsiJCIsImZuIiwidGltZW91dENsYXNzIiwiY2xhc3NuYW1lIiwidGltZW91dCIsInRoYXQiLCJzZXRUaW1lb3V0IiwidG9nZ2xlQ2xhc3MiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7O0FBQUEsQ0FBQyxDQUFDLFVBQVNBLENBQVQsRUFBVztBQUNUQSxNQUFFQyxFQUFGLENBQUtDLFlBQUwsR0FBb0IsVUFBU0MsU0FBVCxFQUFvQkMsT0FBcEIsRUFBNkI7QUFDN0NBLGtCQUFVQSxXQUFXLEVBQXJCO0FBQ0EsWUFBSUMsT0FBTyxJQUFYO0FBQ0FDLG1CQUFXLFlBQVU7QUFDakJOLGNBQUVLLElBQUYsRUFBUUUsV0FBUixDQUFvQkosU0FBcEI7QUFDSCxTQUZELEVBRUdDLE9BRkg7QUFHSCxLQU5EO0FBT0gsQ0FSQSxFQVFFSSxNQVJGIiwiZmlsZSI6InRpbWVvdXQuY2xhc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyI7KGZ1bmN0aW9uKCQpe1xuICAgICQuZm4udGltZW91dENsYXNzID0gZnVuY3Rpb24oY2xhc3NuYW1lLCB0aW1lb3V0KSB7XG4gICAgICAgIHRpbWVvdXQgPSB0aW1lb3V0IHx8IDEwO1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhhdCkudG9nZ2xlQ2xhc3MoY2xhc3NuYW1lKTtcbiAgICAgICAgfSwgdGltZW91dCk7XG4gICAgfTtcbn0pKGpRdWVyeSk7XG4iXX0=

'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _addslashes(str) {
  return str.replace('/(["\'\])/g', "\\$1").replace('/\0/g', "\\0");
}
function _stripslashes(str) {
  return str.replace('/\0/g', '0').replace('/\(.)/g', '$1');
}
function clearCookie() {
  var now = new Date();var yesterday = new Date(now.getTime() - 1000 * 60 * 60 * 24);this.setCookie('co' + this.obj, 'cookieValue', yesterday);this.setCookie('cs' + this.obj, 'cookieValue', yesterday);
};
function setCookie(cookieName, cookieValue, expires, path, domain, secure) {
  document.cookie = escape(cookieName) + '=' + escape(cookieValue) + (expires ? '; expires=' + expires.toGMTString() : '') + (path ? '; path=' + path : '') + (domain ? '; domain=' + domain : '') + (secure ? '; secure' : '');
};
function getCookie(cookieName) {
  var cookieValue = '';var posName = document.cookie.indexOf(escape(cookieName) + '=');if (posName != -1) {
    var posValue = posName + (escape(cookieName) + '=').length;var endPos = document.cookie.indexOf(';', posValue);if (endPos != -1) cookieValue = unescape(document.cookie.substring(posValue, endPos));else cookieValue = unescape(document.cookie.substring(posValue));
  }return cookieValue;
};
function __debug(arr, level) {
  var dumped_text = "";if (!level) level = 0;var level_padding = "";for (var j = 0; j < level + 1; j++) {
    level_padding += "    ";
  }if ((typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) == 'object') {
    for (var item in arr) {
      var value = arr[item];if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object') {
        dumped_text += level_padding + "'" + item + "' ...\n";dumped_text += dump(value, level + 1);
      } else {
        dumped_text += level_padding + "'" + item + "' => \"" + value + "\"\n";
      }
    }
  } else {
    dumped_text = "===>" + arr + "<===(" + (typeof arr === 'undefined' ? 'undefined' : _typeof(arr)) + ")";
  }return dumped_text;
}

function serialize(r) {
  var e,
      a,
      n = "",
      t = 0,
      o = function o(r) {
    var e,
        a,
        n,
        t,
        o = typeof r === 'undefined' ? 'undefined' : _typeof(r);if ("object" === o && !r) return "null";if ("object" === o) {
      if (!r.constructor) return "object";(e = (n = r.constructor.toString()).match(/(\w+)\(/)) && (n = e[1].toLowerCase()), t = ["boolean", "number", "string", "array"];for (a in t) {
        if (n === t[a]) {
          o = t[a];break;
        }
      }
    }return o;
  },
      c = o(r);switch (c) {case "function":
      e = "";break;case "boolean":
      e = "b:" + (r ? "1" : "0");break;case "number":
      e = (Math.round(r) === r ? "i" : "d") + ":" + r;break;case "string":
      e = "s:" + function (r) {
        var e = 0,
            a = 0,
            n = r.length,
            t = "";for (a = 0; a < n; a++) {
          e += (t = r.charCodeAt(a)) < 128 ? 1 : t < 2048 ? 2 : 3;
        }return e;
      }(r) + ':"' + r + '"';break;case "array":case "object":
      e = "a";for (a in r) {
        if (r.hasOwnProperty(a)) {
          if ("function" === o(r[a])) continue;n += serialize(a.match(/^[0-9]+$/) ? parseInt(a, 10) : a) + serialize(r[a]), t++;
        }
      }e += ":" + t + ":{" + n + "}";break;case "undefined":default:
      e = "N";}return "object" !== c && "array" !== c && (e += ";"), e;
}
function unserialize(n) {
  function r(n, e) {
    var t,
        u,
        s,
        c,
        l,
        f,
        h,
        d,
        p,
        w,
        g,
        b,
        k,
        v,
        I,
        y,
        E,
        S,
        j = 0,
        m = function m(n) {
      return n;
    };switch (e || (e = 0), t = n.slice(e, e + 1).toLowerCase(), u = e + 2, t) {case "i":
        m = function m(n) {
          return parseInt(n, 10);
        }, j = (p = o(n, u, ";"))[0], d = p[1], u += j + 1;break;case "b":
        m = function m(n) {
          return 0 !== parseInt(n, 10);
        }, j = (p = o(n, u, ";"))[0], d = p[1], u += j + 1;break;case "d":
        m = function m(n) {
          return parseFloat(n);
        }, j = (p = o(n, u, ";"))[0], d = p[1], u += j + 1;break;case "n":
        d = null;break;case "s":
        j = (w = o(n, u, ":"))[0], g = w[1], j = (p = i(n, (u += j + 2) + 1, parseInt(g, 10)))[0], d = p[1], u += j + 2, j !== parseInt(g, 10) && j !== d.length && a("SyntaxError", "String length mismatch");break;case "a":
        for (d = {}, j = (s = o(n, u, ":"))[0], c = s[1], u += j + 2, f = parseInt(c, 10), l = !0, b = 0; b < f; b++) {
          I = (v = r(n, u))[1], k = v[2], E = (y = r(n, u += I))[1], S = y[2], u += E, k !== b && (l = !1), d[k] = S;
        }if (l) {
          for (h = new Array(f), b = 0; b < f; b++) {
            h[b] = d[b];
          }d = h;
        }u += 1;break;default:
        a("SyntaxError", "Unknown / Unhandled data type(s): " + t);}return [t, u - e, m(d)];
  }var e = "undefined" != typeof window ? window : global,
      t = function t(n) {
    for (var r = n.length, e = n.length - 1; e >= 0; e--) {
      var t = n.charCodeAt(e);t > 127 && t <= 2047 ? r++ : t > 2047 && t <= 65535 && (r += 2), t >= 56320 && t <= 57343 && e--;
    }return r - 1;
  },
      a = function a(n, r, t, _a) {
    throw new e[n](r, t, _a);
  },
      o = function o(n, r, e) {
    for (var t = 2, o = [], i = n.slice(r, r + 1); i !== e;) {
      t + r > n.length && a("Error", "Invalid"), o.push(i), i = n.slice(r + (t - 1), r + t), t += 1;
    }return [o.length, o.join("")];
  },
      i = function i(n, r, e) {
    var a, o, i;for (i = [], a = 0; a < e; a++) {
      o = n.slice(r + (a - 1), r + a), i.push(o), e -= t(o);
    }return [i.length, i.join("")];
  };return r(n + "", 0)[2];
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlbmRvcnMuanMiXSwibmFtZXMiOlsiX2FkZHNsYXNoZXMiLCJzdHIiLCJyZXBsYWNlIiwiX3N0cmlwc2xhc2hlcyIsImNsZWFyQ29va2llIiwibm93IiwiRGF0ZSIsInllc3RlcmRheSIsImdldFRpbWUiLCJzZXRDb29raWUiLCJvYmoiLCJjb29raWVOYW1lIiwiY29va2llVmFsdWUiLCJleHBpcmVzIiwicGF0aCIsImRvbWFpbiIsInNlY3VyZSIsImRvY3VtZW50IiwiY29va2llIiwiZXNjYXBlIiwidG9HTVRTdHJpbmciLCJnZXRDb29raWUiLCJwb3NOYW1lIiwiaW5kZXhPZiIsInBvc1ZhbHVlIiwibGVuZ3RoIiwiZW5kUG9zIiwidW5lc2NhcGUiLCJzdWJzdHJpbmciLCJfX2RlYnVnIiwiYXJyIiwibGV2ZWwiLCJkdW1wZWRfdGV4dCIsImxldmVsX3BhZGRpbmciLCJqIiwiaXRlbSIsInZhbHVlIiwiZHVtcCIsInNlcmlhbGl6ZSIsInIiLCJlIiwiYSIsIm4iLCJ0IiwibyIsImNvbnN0cnVjdG9yIiwidG9TdHJpbmciLCJtYXRjaCIsInRvTG93ZXJDYXNlIiwiYyIsIk1hdGgiLCJyb3VuZCIsImNoYXJDb2RlQXQiLCJoYXNPd25Qcm9wZXJ0eSIsInBhcnNlSW50IiwidW5zZXJpYWxpemUiLCJ1IiwicyIsImwiLCJmIiwiaCIsImQiLCJwIiwidyIsImciLCJiIiwiayIsInYiLCJJIiwieSIsIkUiLCJTIiwibSIsInNsaWNlIiwicGFyc2VGbG9hdCIsImkiLCJBcnJheSIsIndpbmRvdyIsImdsb2JhbCIsInB1c2giLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7O0FBQUEsU0FBU0EsV0FBVCxDQUFzQkMsR0FBdEIsRUFBMkI7QUFBQyxTQUFPQSxJQUFJQyxPQUFKLENBQVksYUFBWixFQUEyQixNQUEzQixFQUFtQ0EsT0FBbkMsQ0FBMkMsT0FBM0MsRUFBb0QsS0FBcEQsQ0FBUDtBQUFtRTtBQUMvRixTQUFTQyxhQUFULENBQXdCRixHQUF4QixFQUE2QjtB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QztBQUF5Q0csVUFBRUosQ0FBRixHQUFJRyxFQUFFakIsTUFBTixJQUFjZ0IsRUFBRSxPQUFGLEVBQVUsU0FBVixDQUFkLEVBQW1DRyxFQUFFbUMsSUFBRixDQUFPSixDQUFQLENBQW5DLEVBQTZDQSxJQUFFakMsRUFBRStCLEtBQUYsQ0FBUWxDLEtBQUdJLElBQUUsQ0FBTCxDQUFSLEVBQWdCSixJQUFFSSxDQUFsQixDQUEvQyxFQUFvRUEsS0FBRyxDQUF2RTtBQUF6QyxLQUFrSCxPQUFNLENBQUNDLEVBQUVuQixNQUFILEVBQVVtQixFQUFFb0MsSUFBRixDQUFPLEVBQVAsQ0FBVixDQUFOO0FBQTRCLEdBQXhaO0FBQUEsTUFBeVpMLElBQUUsV0FBU2pDLENBQVQsRUFBV0gsQ0FBWCxFQUFhQyxDQUFiLEVBQWU7QUFBQyxRQUFJQyxDQUFKLEVBQU1HLENBQU4sRUFBUStCLENBQVIsQ0FBVSxLQUFJQSxJQUFFLEVBQUYsRUFBS2xDLElBQUUsQ0FBWCxFQUFhQSxJQUFFRCxDQUFmLEVBQWlCQyxHQUFqQjtBQUFxQkcsVUFBRUYsRUFBRStCLEtBQUYsQ0FBUWxDLEtBQUdFLElBQUUsQ0FBTCxDQUFSLEVBQWdCRixJQUFFRSxDQUFsQixDQUFGLEVBQXVCa0MsRUFBRUksSUFBRixDQUFPbkMsQ0FBUCxDQUF2QixFQUFpQ0osS0FBR0csRUFBRUMsQ0FBRixDQUFwQztBQUFyQixLQUE4RCxPQUFNLENBQUMrQixFQUFFbEQsTUFBSCxFQUFVa0QsRUFBRUssSUFBRixDQUFPLEVBQVAsQ0FBVixDQUFOO0FBQTRCLEdBQS9nQixDQUFnaEIsT0FBT3pDLEVBQUVHLElBQUUsRUFBSixFQUFPLENBQVAsRUFBVSxDQUFWLENBQVA7QUFBb0IiLCJmaWxlIjoidmVuZG9ycy5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hZGRzbGFzaGVzKCBzdHIgKXtyZXR1cm4gc3RyLnJlcGxhY2UoJy8oW1wiXFwnXFxdKS9nJywgXCJcXFxcJDFcIikucmVwbGFjZSgnL1xcMC9nJywgXCJcXFxcMFwiKTt9XG5mdW5jdGlvbiBfc3RyaXBzbGFzaGVzKCBzdHIgKXtyZXR1cm4gc3RyLnJlcGxhY2UoJy9cXDAvZycsICcwJykucmVwbGFjZSgnL1xcKC4pL2cnLCAnJDEnKTt9XG5mdW5jdGlvbiBjbGVhckNvb2tpZSgpe3ZhciBub3cgPSBuZXcgRGF0ZSgpO3ZhciB5ZXN0ZXJkYXkgPSBuZXcgRGF0ZShub3cuZ2V0VGltZSgpIC0gMTAwMCAqIDYwICogNjAgKiAyNCk7dGhpcy5zZXRDb29raWUoJ2NvJyArIHRoaXMub2JqLCAnY29va2llVmFsdWUnLCB5ZXN0ZXJkYXkpO3RoaXMuc2V0Q29va2llKCdjcycgKyB0aGlzLm9iaiwgJ2Nvb2tpZVZhbHVlJywgeWVzdGVyZGF5KTt9O1xuZnVuY3Rpb24gc2V0Q29va2llKGNvb2tpZU5hbWUsIGNvb2tpZVZhbHVlLCBleHBpcmVzLCBwYXRoLCBkb21haW4sIHNlY3VyZSl7ZG9jdW1lbnQuY29va2llPWVzY2FwZShjb29raWVOYW1lKSArICc9JyArIGVzY2FwZShjb29raWVWYWx1ZSkrKGV4cGlyZXMgPyAnOyBleHBpcmVzPScgKyBleHBpcmVzLnRvR01UU3RyaW5nKCkgOiAnJykrKHBhdGggPyAnOyBwYXRoPScgKyBwYXRoIDogJycpKyhkb21haW4gPyAnOyBkb21haW49JyArIGRvbWFpbiA6ICcnKSsoc2VjdXJlID8gJzsgc2VjdXJlJyA6ICcnKTt9O1xuZnVuY3Rpb24gZ2V0Q29va2llIChjb29raWVOYW1lKXt2YXIgY29va2llVmFsdWUgPSAnJzt2YXIgcG9zTmFtZSA9IGRvY3VtZW50LmNvb2tpZS5pbmRleE9mKGVzY2FwZShjb29raWVOYW1lKSArICc9Jyk7aWYgKHBvc05hbWUgIT0gLTEpIHt2YXIgcG9zVmFsdWUgPSBwb3NOYW1lICsgKGVzY2FwZShjb29raWVOYW1lKSArICc9JykubGVuZ3RoO3ZhciBlbmRQb3MgPSBkb2N1bWVudC5jb29raWUuaW5kZXhPZignOycsIHBvc1ZhbHVlKTtpZiAoZW5kUG9zICE9IC0xKSBjb29raWVWYWx1ZSA9IHVuZXNjYXBlKGRvY3VtZW50LmNvb2tpZS5zdWJzdHJpbmcocG9zVmFsdWUsIGVuZFBvcykpO2Vsc2UgY29va2llVmFsdWUgPSB1bmVzY2FwZShkb2N1bWVudC5jb29raWUuc3Vic3RyaW5nKHBvc1ZhbHVlKSk7fXJldHVybiAoY29va2llVmFsdWUpO307XG5mdW5jdGlvbiBfX2RlYnVnKGFycixsZXZlbCkge3ZhciBkdW1wZWRfdGV4dCA9IFwiXCI7aWYgKCFsZXZlbCkgbGV2ZWwgPSAwO3ZhciBsZXZlbF9wYWRkaW5nID0gXCJcIjtmb3IodmFyIGo9MDtqPGxldmVsKzE7aisrKSBsZXZlbF9wYWRkaW5nICs9IFwiICAgIFwiO2lmICh0eXBlb2YoYXJyKSA9PSAnb2JqZWN0JykgeyBmb3IodmFyIGl0ZW0gaW4gYXJyKSB7dmFyIHZhbHVlID0gYXJyW2l0ZW1dO2lmICh0eXBlb2YodmFsdWUpID09ICdvYmplY3QnKSB7IGR1bXBlZF90ZXh0ICs9IGxldmVsX3BhZGRpbmcgKyBcIidcIiArIGl0ZW0gKyBcIicgLi4uXFxuXCI7ZHVtcGVkX3RleHQgKz0gZHVtcCh2YWx1ZSxsZXZlbCsxKTt9IGVsc2Uge2R1bXBlZF90ZXh0ICs9IGxldmVsX3BhZGRpbmcgKyBcIidcIiArIGl0ZW0gKyBcIicgPT4gXFxcIlwiICsgdmFsdWUgKyBcIlxcXCJcXG5cIjt9fX0gZWxzZSB7IGR1bXBlZF90ZXh0ID0gXCI9PT0+XCIrYXJyK1wiPD09PShcIit0eXBlb2YoYXJyKStcIilcIjt9cmV0dXJuIGR1bXBlZF90ZXh0O31cblxuZnVuY3Rpb24gc2VyaWFsaXplKHIpe3ZhciBlLGEsbj1cIlwiLHQ9MCxvPWZ1bmN0aW9uKHIpe3ZhciBlLGEsbix0LG89dHlwZW9mIHI7aWYoXCJvYmplY3RcIj09PW8mJiFyKXJldHVyblwibnVsbFwiO2lmKFwib2JqZWN0XCI9PT1vKXtpZighci5jb25zdHJ1Y3RvcilyZXR1cm5cIm9iamVjdFwiOyhlPShuPXIuY29uc3RydWN0b3IudG9TdHJpbmcoKSkubWF0Y2goLyhcXHcrKVxcKC8pKSYmKG49ZVsxXS50b0xvd2VyQ2FzZSgpKSx0PVtcImJvb2xlYW5cIixcIm51bWJlclwiLFwic3RyaW5nXCIsXCJhcnJheVwiXTtmb3IoYSBpbiB0KWlmKG49PT10W2FdKXtvPXRbYV07YnJlYWt9fXJldHVybiBvfSxjPW8ocik7c3dpdGNoKGMpe2Nhc2VcImZ1bmN0aW9uXCI6ZT1cIlwiO2JyZWFrO2Nhc2VcImJvb2xlYW5cIjplPVwiYjpcIisocj9cIjFcIjpcIjBcIik7YnJlYWs7Y2FzZVwibnVtYmVyXCI6ZT0oTWF0aC5yb3VuZChyKT09PXI/XCJpXCI6XCJkXCIpK1wiOlwiK3I7YnJlYWs7Y2FzZVwic3RyaW5nXCI6ZT1cInM6XCIrZnVuY3Rpb24ocil7dmFyIGU9MCxhPTAsbj1yLmxlbmd0aCx0PVwiXCI7Zm9yKGE9MDthPG47YSsrKWUrPSh0PXIuY2hhckNvZGVBdChhKSk8MTI4PzE6dDwyMDQ4PzI6MztyZXR1cm4gZX0ocikrJzpcIicrcisnXCInO2JyZWFrO2Nhc2VcImFycmF5XCI6Y2FzZVwib2JqZWN0XCI6ZT1cImFcIjtmb3IoYSBpbiByKWlmKHIuaGFzT3duUHJvcGVydHkoYSkpe2lmKFwiZnVuY3Rpb25cIj09PW8oclthXSkpY29udGludWU7bis9c2VyaWFsaXplKGEubWF0Y2goL15bMC05XSskLyk/cGFyc2VJbnQoYSwxMCk6YSkrc2VyaWFsaXplKHJbYV0pLHQrK31lKz1cIjpcIit0K1wiOntcIituK1wifVwiO2JyZWFrO2Nhc2VcInVuZGVmaW5lZFwiOmRlZmF1bHQ6ZT1cIk5cIn1yZXR1cm5cIm9iamVjdFwiIT09YyYmXCJhcnJheVwiIT09YyYmKGUrPVwiO1wiKSxlfVxuZnVuY3Rpb24gdW5zZXJpYWxpemUobil7ZnVuY3Rpb24gcihuLGUpe3ZhciB0LHUscyxjLGwsZixoLGQscCx3LGcsYixrLHYsSSx5LEUsUyxqPTAsbT1mdW5jdGlvbihuKXtyZXR1cm4gbn07c3dpdGNoKGV8fChlPTApLHQ9bi5zbGljZShlLGUrMSkudG9Mb3dlckNhc2UoKSx1PWUrMix0KXtjYXNlXCJpXCI6bT1mdW5jdGlvbihuKXtyZXR1cm4gcGFyc2VJbnQobiwxMCl9LGo9KHA9byhuLHUsXCI7XCIpKVswXSxkPXBbMV0sdSs9aisxO2JyZWFrO2Nhc2VcImJcIjptPWZ1bmN0aW9uKG4pe3JldHVybiAwIT09cGFyc2VJbnQobiwxMCl9LGo9KHA9byhuLHUsXCI7XCIpKVswXSxkPXBbMV0sdSs9aisxO2JyZWFrO2Nhc2VcImRcIjptPWZ1bmN0aW9uKG4pe3JldHVybiBwYXJzZUZsb2F0KG4pfSxqPShwPW8obix1LFwiO1wiKSlbMF0sZD1wWzFdLHUrPWorMTticmVhaztjYXNlXCJuXCI6ZD1udWxsO2JyZWFrO2Nhc2VcInNcIjpqPSh3PW8obix1LFwiOlwiKSlbMF0sZz13WzFdLGo9KHA9aShuLCh1Kz1qKzIpKzEscGFyc2VJbnQoZywxMCkpKVswXSxkPXBbMV0sdSs9aisyLGohPT1wYXJzZUludChnLDEwKSYmaiE9PWQubGVuZ3RoJiZhKFwiU3ludGF4RXJyb3JcIixcIlN0cmluZyBsZW5ndGggbWlzbWF0Y2hcIik7YnJlYWs7Y2FzZVwiYVwiOmZvcihkPXt9LGo9KHM9byhuLHUsXCI6XCIpKVswXSxjPXNbMV0sdSs9aisyLGY9cGFyc2VJbnQoYywxMCksbD0hMCxiPTA7YjxmO2IrKylJPSh2PXIobix1KSlbMV0saz12WzJdLEU9KHk9cihuLHUrPUkpKVsxXSxTPXlbMl0sdSs9RSxrIT09YiYmKGw9ITEpLGRba109UztpZihsKXtmb3IoaD1uZXcgQXJyYXkoZiksYj0wO2I8ZjtiKyspaFtiXT1kW2JdO2Q9aH11Kz0xO2JyZWFrO2RlZmF1bHQ6YShcIlN5bnRheEVycm9yXCIsXCJVbmtub3duIC8gVW5oYW5kbGVkIGRhdGEgdHlwZShzKTogXCIrdCl9cmV0dXJuW3QsdS1lLG0oZCldfXZhciBlPVwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3c/d2luZG93Omdsb2JhbCx0PWZ1bmN0aW9uKG4pe2Zvcih2YXIgcj1uLmxlbmd0aCxlPW4ubGVuZ3RoLTE7ZT49MDtlLS0pe3ZhciB0PW4uY2hhckNvZGVBdChlKTt0PjEyNyYmdDw9MjA0Nz9yKys6dD4yMDQ3JiZ0PD02NTUzNSYmKHIrPTIpLHQ+PTU2MzIwJiZ0PD01NzM0MyYmZS0tfXJldHVybiByLTF9LGE9ZnVuY3Rpb24obixyLHQsYSl7dGhyb3cgbmV3IGVbbl0ocix0LGEpfSxvPWZ1bmN0aW9uKG4scixlKXtmb3IodmFyIHQ9MixvPVtdLGk9bi5zbGljZShyLHIrMSk7aSE9PWU7KXQrcj5uLmxlbmd0aCYmYShcIkVycm9yXCIsXCJJbnZhbGlkXCIpLG8ucHVzaChpKSxpPW4uc2xpY2UocisodC0xKSxyK3QpLHQrPTE7cmV0dXJuW28ubGVuZ3RoLG8uam9pbihcIlwiKV19LGk9ZnVuY3Rpb24obixyLGUpe3ZhciBhLG8saTtmb3IoaT1bXSxhPTA7YTxlO2ErKylvPW4uc2xpY2UocisoYS0xKSxyK2EpLGkucHVzaChvKSxlLT10KG8pO3JldHVybltpLmxlbmd0aCxpLmpvaW4oXCJcIildfTtyZXR1cm4gcihuK1wiXCIsMClbMl19Il19
