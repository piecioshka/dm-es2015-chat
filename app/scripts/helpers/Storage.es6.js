'use strict';

class Storage {
    static set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    static get(key) {
        let value = localStorage.getItem(key);

        if (value) {
            value = JSON.parse(value);
        }

        return value;
    }

    static remove(key) {
        localStorage.removeItem(key);
    }
}

export default Storage;
