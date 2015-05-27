'use strict';

var $ = require('jquery');

class UIChatList {
    constructor() {
        this.$dom = $('<ul>').addClass('list-group');
    }

    add($message) {
        this.$dom.append($message);
    }

    render() {
        $('body').append(this.$dom);
    }
}

export default UIChatList;