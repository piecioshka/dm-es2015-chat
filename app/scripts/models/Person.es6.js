'use strict';

var SHA256 = require('crypto-js/sha256');
var EventEmitter = require('../vendor/EventEmitter');
var Message = require('./Message.es6');

class Person extends EventEmitter {
    constructor(params) {
        super();

        this.nickname = params.nickname;
        this.name = params.name;
        this.surname = params.surname;
        this.messages = [];
    }

    newMessage(text) {
        var msg = new Message(text);
        this.emit('new:message', msg);
        this.messages.push(msg);
    }

    get id() {
        return String(SHA256(this.nickname + this.name + this.surname));
    }

    toString() {
        return `Person ${this.name} ${this.surname} aka ${this.nickname}`
    }
}

export default Person;
