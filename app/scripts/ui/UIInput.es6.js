'use strict';

import $ from 'jquery';
import template from '../../templates/input.handlebars';

class UIInput {
    constructor(params) {
        let compiled = template(params);
        this.$dom = $('<footer>').addClass('navbar navbar-fixed-bottom').html(compiled);
        this.$input = this.$dom.find('input');
    }

    onEnter(callback) {
        this.$input.on('keypress', e => {
            if (UIInput.isEnter(e) && !UIInput.isEmpty(this.$input.val())) {
                (callback || $.noop)();
                this.$input.val('');
            }
        });
    }

    value() {
        return this.$input.val();
    }

    render() {
        $('body').append(this.$dom);
        this.$input.focus();
    }

    static isEnter(e) {
        return e.keyCode === 13;
    }

    static isEmpty(message) {
        return String(message).trim().length === 0;
    }
}

export default UIInput;
