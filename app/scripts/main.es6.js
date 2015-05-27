'use strict';

// 4. Jednoosobowy chat z możliwością wyszukiwania w historii
// ----------------------------------------------------------

var Chat = require('./models/Chat.es6');

// Bootstrap
var chat = new Chat();
chat.setup();

setTimeout(() => {
    var members = chat.list.getMembers();
    members[0].newMessage('to jest testowy message');
}, 2000);
