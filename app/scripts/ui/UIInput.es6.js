'use strict';

import $ from 'jquery';

class UIInput {
    constructor() {
        this.$dom = $('<footer>').addClass('navbar navbar-fixed-bottom').html(UIInput.compile());
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

    static compile() {
        return `
            <div class="input-group">
                <span class="input-group-addon">
                    <span class="label label-warning">you</span>
                </span>
                <input type="text" class="form-control" placeholder="Message">
            </div>
        `;
    }

    static isEnter(e) {
        return e.keyCode === 13;
    }

    static isEmpty(message) {
        return String(message).trim().length === 0;
    }
}

export default UIInput;
