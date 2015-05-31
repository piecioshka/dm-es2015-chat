'use strict';

// 4. Jednoosobowy chat z możliwością wyszukiwania w historii
// ----------------------------------------------------------
require('style!css!sass!../style/main.scss');

import Chat from './models/Chat.es6';
import Person from './models/Person.es6';

// Bootstrap
new Chat().setup();
