'use strict';

// 4. Jednoosobowy chat z możliwością wyszukiwania w historii
// ----------------------------------------------------------

var Chat = require('./models/Chat.es6');

// Bootstrap
var chat = new Chat();
chat.setup();
