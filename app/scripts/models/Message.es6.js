'use strict';

class Message {
    constructor(text) {
        console.log('new Message("%s")', text);
        this.text = text;
    }
}

export default Message;
