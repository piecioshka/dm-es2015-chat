'use strict';

import Person from './Person.es6';
import ChatList from './ChatList.es6';
import Storage from '../helpers/Storage.es6';
import UIInput from '../ui/UIInput.es6';
import UIButtonClear from '../ui/UIButtonClear.es6';

class Chat {
    constructor() {
        this.input = new UIInput();
        this.input.render();
        this.list = new ChatList();

        let clearButton = new UIButtonClear(() => {
            Storage.remove('people');

            this.list.clearMessage();
            this.list.$dom.clear();
        });
        clearButton.render();

        this.list.on('new:message', () => {
            this.save();
        });
    }

    setup() {
        // Create list of users.
        this.list.add(new Person({
            nickname: 'DevMeetings',
            type: 'info'
        }));

        this.list.add(new Person({
            nickname: 'you',
            type: 'warning'
        }));

        this.loadPeople();

        let admin = this.list.at(0);
        let user = this.list.at(1);

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

            storageList.forEach(person => {
                // Get reference to person from local list by storage data.
                let personModel = this.list.byId(Person.buildID(person.nickname + person.type));

                if (person.messages) {
                    person.messages.forEach(message => {
                        personModel.newMessage(message);
                    });
                }
            });
        }
    }

    save() {
        Storage.set('people', this.list.simpleList());
    }

    static isEmptyStorage() {
        return !Storage.get('people');
    }
}

export default Chat;
