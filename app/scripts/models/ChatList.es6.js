'use strict';

class ChatList {
    constructor() {
        this._list = [];
    }

    add(person) {
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
}

export default ChatList;
