'use strict';

var Person = require('./Person.es6');

var UIChatList = require('../ui/UIChatList.es6');
var UIMessage = require('../ui/UIMessage.es6');

class ChatList {
    constructor() {
        this._list = [];

        this.$dom = new UIChatList();
        this.$dom.render();
    }

    add(person) {
        if (!(person instanceof Person)) {
            throw new TypeError('ChatList#add: person is not instance of Person');
        }

        person.on('new:message', (message) => {
            var $msg = new UIMessage(message, this.$dom);
            $msg.render();
        });

        this._list.push(person);
    }

    remove(personId) {
        var removeIndex = null;

        this.each(function (member, index) {
            if (member.id === personId) {
                removeIndex = index;
            }
        });
    }

    isExist(person) {
        var duplicates = this._list.filter((member) => {
            return (person.id === member.id);
        });

        return duplicates.length > 0;
    }

    each(handler) {
        this._list.forEach(handler);
    }

    getMembers() {
        return this._list;
    }

    getByIndex(index) {
        return this._list[index];
    }
}

export default ChatList;
