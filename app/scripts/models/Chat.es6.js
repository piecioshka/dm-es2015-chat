'use strict';

var $ = require('jquery');
var Person = require('./Person.es6');
var ChatList = require('./ChatList.es6');
var Storage = require('../helpers/Storage.es6');
var UIInput = require('../ui/UIInput.es6');

class Chat {
    constructor() {
        this.input = new UIInput();
        this.input.render();
        this.list = new ChatList();

        this.list.on('new:message', () => {
            this.save();
        });
    }

    setup() {
        this.loadPeople();

        var admin = this.list.at(0);
        var user = this.list.at(1);

        if (Chat.isEmptyStorage()) {
            // Put hello message by admin.
            admin.newMessage('Witaj!');
        }

        this.input.onEnter(() => {
            user.newMessage(this.input.value());
        });

        // After append all message enable smooth animation.
        requestAnimationFrame(() => {
            this.list.$dom.enableAnimation();
        });
    }

    loadPeople() {
        if (!Chat.isEmptyStorage()) {
            let storageList = Storage.get('people');

            storageList.forEach((person) => {
                // Get reference to person from local list by storage data.
                let personModel = this.list.byId(Person.buildID(person.nickname + person.type));

                if (person.messages) {
                    person.messages.forEach((message) => {
                        personModel.newMessage(message);
                    });
                }
            });
        }
    }

    addPerson(person) {
        if (this.list.isExist(person)) {
            console.error('Chat#addPerson: you try add person who is already on the list');
            return;
        }

        this.list.add(person);
    }

    save() {
        Storage.set('people', this.list.simpleList());
    }

    static isEmptyStorage() {
        return !Storage.get('people');
    }
}

export default Chat;
