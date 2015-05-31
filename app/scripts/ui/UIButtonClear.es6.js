'use strict';

import $ from 'jquery';

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
