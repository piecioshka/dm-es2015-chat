'use strict';

class Message {
    constructor(person, text) {
        this.person = person;
        this.text = text;
    }

    toString() {
        return `${this.person}: ${this.text}`
    }
}

export default Message;
