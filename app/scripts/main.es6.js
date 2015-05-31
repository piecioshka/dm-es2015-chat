'use strict';

// 4. Jednoosobowy chat z możliwością wyszukiwania w historii
// ----------------------------------------------------------
require('style!css!sass!../style/main.scss');

var Chat = require('./models/Chat.es6');
var Person = require('./models/Person.es6');

// Bootstrap
var chat = new Chat();

// Create list of users.
chat.addPerson(new Person({
    nickname: 'DevMeetings',
    type: 'info'
}));

chat.addPerson(new Person({
    nickname: 'you',
    type: 'warning'
}));

chat.setup();
