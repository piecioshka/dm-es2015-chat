'use strict';

var Person = require('./Person.es6');
var ChatList = require('./ChatList.es6');
var StorageHelper = require('../helpers/StorageHelper.es6');

class Chat {
    constructor() {
        console.log('new Chat');
        this.list = new ChatList();
        this.storage = new StorageHelper();
    }

    setup() {
        this.loadPeople();

        this.addPerson(new Person({
            nickname: 'piecioshka',
            name: 'Piotr',
            surname: 'Kowalski'
        }));
    }

    loadPeople() {
        var storageList = this.storage.get('people');

        if (storageList) {
            storageList.forEach((person) => {
                this.list.add(new Person(person));
                console.log('Chat#loadPeople ', person);
            });
        }
    }

    addPerson(person) {
        if (this.list.isExist(person)) {
            console.warn('Chat#addPerson: you try add person who is already on the list');
            return;
        }

        this.list.add(person);
        this.storage.put('people', this.list.getMembers());

        console.log('Chat#addPerson ', person);
    }
}

export default Chat;
