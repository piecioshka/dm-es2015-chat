'use strict';

var SHA256 = require('crypto-js/sha256');

class Person {
    constructor(params) {
        this.nickname = params.nickname;
        this.name = params.name;
        this.surname = params.surname;
    }

    get id() {
        return String(SHA256(this.nickname + this.name + this.surname));
    }

    toString() {
        return `Person ${this.name} ${this.surname} aka ${this.nickname}`
    }
}

export default Person;
