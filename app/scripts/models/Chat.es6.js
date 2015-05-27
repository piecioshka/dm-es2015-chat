'use strict';

var $ = require('jquery');
var Person = require('./Person.es6');
var ChatList = require('./ChatList.es6');
var StorageHelper = require('../helpers/StorageHelper.es6');
var UIInput = require('../ui/UIInput.es6');

class Chat {
    constructor() {
        this.list = new ChatList();
        this.storage = new StorageHelper();
        this.input = new UIInput();
    }

    setup() {
        var member = this.list.getByIndex(1);

        member.on('new:message', () => {
            this.save();
        });

        this.input.onEnter(() => {
            member.newMessage(this.input.value());
        });

        this.input.render(member);
    }

    loadPeople(failHandler) {
        var storageList = this.storage.get('people');

        if (storageList) {
            storageList.forEach((person) => {
                let personModel = this.list.add(new Person(person));
                console.log('Chat#loadPeople ', person);
                if (person.messages) {
                    person.messages.forEach((message) => {
                        personModel.newMessage(message);
                    });
                }
            });
        } else {
            (failHandler || $.noop)();
        }
    }

    addPerson(person) {
        if (this.list.isExist(person)) {
            console.warn('Chat#addPerson: you try add person who is already on the list');
            return;
        }

        this.list.add(person);
        this.storage.put('people', this.list.getSimple());

        console.log('Chat#addPerson ', person);
    }

    save() {
        this.storage.put('people', this.list.getSimple());
    }
}

export default Chat;
