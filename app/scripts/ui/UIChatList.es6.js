'use strict';

var $ = require('jquery');

class UIChatList {
    constructor() {
        this.$dom = $('<ul>').addClass('list-group');
    }

    add($message) {
        this.$dom.append($message);
        this.scroll();
    }

    scroll() {
        var height = this.$dom.height();
        var top = 0;

        // If we have so much message that can't see all on chat place holder.
        if (height > UIChatList.holderHeight) {
            top = -1 * (height - UIChatList.holderHeight);
        }

        this.$dom.css({
            top: top
        });
    }

    enableAnimation() {
        this.$dom.addClass('animate');
    }

    render() {
        var $wrapper = $('<div>').css({
            height: UIChatList.holderHeight
        });
        $wrapper.append(this.$dom);
        $('body').prepend($wrapper);
    }

    clear() {
        this.$dom.empty();
    }

    static get holderHeight() {
        var windowHeight = $(window).height();
        var footerHeight = $('footer').height();
        return windowHeight - footerHeight;
    }
}

export default UIChatList;
