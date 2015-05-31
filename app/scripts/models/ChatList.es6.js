'use strict';

import Person from './Person.es6';
import UIChatList from '../ui/UIChatList.es6';
import UIMessage from '../ui/UIMessage.es6';
import EventEmitter from '../vendor/EventEmitter.es6';

class ChatList extends EventEmitter {
    constructor() {
        super();

        this._list = [];

        this.$dom = new UIChatList();
        this.$dom.render();
    }

    add(person) {
        if (!(person instanceof Person)) {
            throw new TypeError('ChatList#add: person is not instance of Person');
        }

        person.on('new:message', message => {
            let $msg = new UIMessage(message, this.$dom);
            $msg.render();
            this.emit('new:message', person, message);
        });

        this._list.push(person);

        return person;
    }

    remove(personId) {
        let removeIndex = null;

        this.each((member, index) => {
            if (member.id === personId) {
                removeIndex = index;
            }
        });
    }

    isExist(person) {
        let duplicates = this._list.filter(member => {
            return (person.id === member.id);
        });

        return duplicates.length > 0;
    }

    each(handler) {
        this._list.forEach(handler);
    }

    simpleList() {
        return this._list.map(member => {
            return {
                nickname: member.nickname,
                type: member.type,
                messages: member.messages
            }
        });
    }

    at(index) {
        return this._list[index];
    }

    byId(id) {
        return this._list.filter(person => {
            return person.id === id;
        })[0];
    }

    clearMessage() {
        this.each(person => {
            person.messages = [];
        });
    }
}

export default ChatList;
