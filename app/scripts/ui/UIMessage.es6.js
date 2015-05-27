'use strict';

var $ = require('jquery');

class UIMessage {
    constructor(message, $list) {
        this.$dom = $('<li>').addClass('list-group-item').text(message.text);
        this.$list = $list;
    }

    render() {
        this.$list.add(this.$dom);
    }
}

export default UIMessage;
