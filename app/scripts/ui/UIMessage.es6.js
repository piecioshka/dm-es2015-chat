'use strict';

var $ = require('jquery');

class UIMessage {
    constructor(message, $list) {
        this.$dom = $('<li>').addClass('list-group-item').html(message.toString());
        this.$list = $list;
    }

    render() {
        this.$list.add(this.$dom);
    }
}

export default UIMessage;
