let app = app || {};

((body => {
    'use strict';

    app = {

        _extend(source, config) {
            if (typeof config !== 'undefined')
            {
                for (const x in config)
                {
                    source[x] = config[x];
                }
            }

            return source;
        },

        bind: function() {
            for(const _ in this)
            {
                if (typeof (this[_]) == 'object' && typeof (this[_].init) !== 'undefined')
                {
                    if (typeof (this[_].init) == 'function')
                    {
                        this[_].init();
                    }
                }
            }
        },

        init: function() {
            this.bind();
        }
    };

}))(document.body);