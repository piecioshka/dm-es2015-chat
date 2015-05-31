'use strict';

import $ from 'jquery';
import Storage from '../helpers/Storage.es6';

class UIButtonClear {
    constructor(cb) {
        this.$dom = $('<a>').addClass('button-clear btn btn-danger').text('Clear');
        this.$dom.on('click', cb);
    }

    render() {
        $('body').append(this.$dom);
    }
}

export default UIButtonClear;
