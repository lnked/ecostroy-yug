let app = app || {};

((body => {
    "use strict";

    function CountdownTimer(elm,tl){
        this.initialize.apply(this, arguments);
    }

    CountdownTimer.prototype={ 
        initialize: function(elm,tl) {
            var elem = document.getElementById(elm);

            if(elem) {
                this.elem = elem;
                this.tl = tl;
                this.countDown();
            }
        },

        countDown: function() {
            var today=new Date(),
                day=Math.floor((this.tl-today)/(24*60*60*1000)),
                hour=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*60*1000)),
                min=Math.floor(((this.tl-today)%(24*60*60*1000))/(60*1000))%60,
                sec=Math.floor(((this.tl-today)%(24*60*60*1000))/1000)%60%60,
                me=this;

            if (( this.tl - today ) > 0) {

                const timer = [
                    '<div class="timer__parts__column"><div class="timer__parts__digit">', this.addZero(day) ,'</div><div class="timer__parts__caption">', declOfNum(day, ['День', 'Дня', 'Дней']) ,'</div></div>',
                    '<div class="timer__parts__column"><div class="timer__parts__digit">', this.addZero(hour) ,'</div><div class="timer__parts__caption">', declOfNum(hour, ['Час', 'Часа', 'Часов']) ,'</div></div>',
                    '<div class="timer__parts__column"><div class="timer__parts__digit">', this.addZero(min) ,'</div><div class="timer__parts__caption">', declOfNum(min, ['Минута', 'Минуты', 'Минут']) ,'</div></div>',
                    '<div class="timer__parts__column"><div class="timer__parts__digit">', this.addZero(sec) ,'</div><div class="timer__parts__caption">', declOfNum(sec, ['Секунда', 'Секунды', 'Секунд']) ,'</div></div>',
                ];

                if (this.elem) {
                    this.elem.innerHTML = timer.join('');
                    setTimeout(() => {
                        me.countDown();
                    }, 1000);
                } else {
                    return;
                }

            } else {
                return false;
            }
        },

        addZero:function(num){ 
            return ('0'+num).slice(-2);
        }
    };

    app.countdown = {
        init: function()
        {
            const $countdown = $('#countdown');

            if ($countdown.data('timestamp')) {
                $('#countdown-holder').addClass('is-inited');

                const timestamp = parseInt($countdown.data('timestamp')) * 1000;

                const dateEnd = new Date(timestamp);

                new CountdownTimer('countdown', new Date(
                    dateEnd.getFullYear(), // year
                    dateEnd.getMonth(), // month
                    dateEnd.getDate(), // date
                    0, // hours
                    0, // minutes
                    0 // seconds
                ));
            }
        }
    };

}))(document.body);