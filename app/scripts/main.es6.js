'use strict';

// 4. Jednoosobowy chat z możliwością wyszukiwania w historii
// ----------------------------------------------------------

var Chat = require('./models/Chat.es6');
var Person = require('./models/Person.es6');

// Bootstrap
var chat = new Chat();

chat.loadPeople(function failHandler() {
    // Create list of users.
    chat.addPerson(new Person({
        nickname: 'Admin'
    }));

    chat.addPerson(new Person({
        nickname: 'piecioshka',
        name: 'Piotr',
        surname: 'Kowalski'
    }));

    // Put hello message.
    chat.list.at(0).newMessage('Witaj!');
});

chat.setup();
