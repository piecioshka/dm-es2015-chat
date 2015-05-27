'use strict';

var $ = require('jquery');
var template = require('../../templates/input.handlebars');

class UIInput {
    constructor(params) {
        var compiled = template(params);
        this.$dom = $('<footer>').addClass('navbar navbar-fixed-bottom').html(compiled).css({
            'min-height': '35px'
        });

        this.$input = this.$dom.find('input');
    }

    onEnter(callback) {
        callback = callback || $.noop;

        this.$input.on('keypress', (e) => {
            if (UIInput.isEnter(e)) {
                callback();
                this.$input.val('');
            }
        });
    }

    value() {
        return this.$input.val();
    }

    render() {
        $('body').append(this.$dom);
    }
}

UIInput.isEnter = (e) => {
    return e.keyCode === 13;
};

export default UIInput;
