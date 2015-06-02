'use strict';

import $ from 'jquery';

class UIChatList {
    constructor() {
        this.$dom = $('<ul>').addClass('list-group');
        this.$wrapper = $('<div>').append(this.$dom).css({
            height: UIChatList.holderHeight
        });
    }

    add($message) {
        this.$dom.append($message);
        this.scroll();
    }

    scroll() {
        this.$wrapper.scrollTop(this.$dom.height());
    }

    enableAnimation() {
        this.$dom.addClass('animate');
    }

    render() {
        $('body').prepend(this.$wrapper);
    }

    clear() {
        this.$dom.empty();
    }

    static get holderHeight() {
        let windowHeight = $(window).height();
        let footerHeight = $('footer').height();
        return windowHeight - footerHeight;
    }
}

export default UIChatList;
