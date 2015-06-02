'use strict';

import $ from 'jquery';

class Message {
    constructor(person, text) {
        this.person = person;
        this.text = text;
    }

    toString() {
        return `${this.person} ${Message.stripTags(this.text)}`
    }

    static stripTags(message) {
        return $('<div>').html(message).text();
    }
}

export default Message;
