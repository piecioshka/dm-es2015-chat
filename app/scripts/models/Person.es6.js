'use strict';

import SHA256 from 'crypto-js/sha256';
import EventEmitter from '../vendor/EventEmitter.es6';
import Message from './Message.es6';
import template from '../../templates/person.handlebars';

class Person extends EventEmitter {
    constructor(params) {
        super();

        this.nickname = params.nickname;
        this.type = params.type;
        this.messages = [];
    }

    newMessage(text) {
        this.messages.push(text);
        let msg = new Message(this, text);
        this.emit('new:message', msg);
    }

    toString() {
        return template(this);
    }

    get id() {
        return Person.buildID(this.nickname + this.type);
    }

    static buildID(msg) {
        return String(SHA256(msg));
    }
}

export default Person;
