'use strict';

var SHA256 = require('crypto-js/sha256');
var EventEmitter = require('../vendor/EventEmitter.es6');
var Message = require('./Message.es6');
var template = require('../../templates/person.handlebars');

class Person extends EventEmitter {
    constructor(params) {
        super();

        this.nickname = params.nickname;
        this.type = params.type;
        this.messages = [];
    }

    newMessage(text) {
        this.messages.push(text);
        var msg = new Message(this, text);
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
