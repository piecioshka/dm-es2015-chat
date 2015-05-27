'use strict';

var SHA256 = require('crypto-js/sha256');
var EventEmitter = require('../vendor/EventEmitter.es6');
var Message = require('./Message.es6');
var template = require('../../templates/person.handlebars');

class Person extends EventEmitter {
    constructor(params) {
        super();

        this.nickname = params.nickname;
        this.name = params.name;
        this.surname = params.surname;
        this.messages = [];
    }

    newMessage(text) {
        this.messages.push(text);
        var msg = new Message(this, text);
        this.emit('new:message', msg);
    }

    get id() {
        return String(SHA256(this.nickname + this.name + this.surname));
    }

    toString() {
        return template(this);
    }
}

export default Person;
