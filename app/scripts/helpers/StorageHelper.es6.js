'use strict';

class StorageHelper {
    constructor() {
        this.storage = localStorage;
    }

    set(key, value) {
        this.storage.setItem(key, JSON.stringify(value));
    }

    get(key) {
        var value = this.storage.getItem(key);

        if (value) {
            value = JSON.parse(value);
        }

        return value;
    }

    remove(key) {
        this.storage.removeItem(key);
    }
}

export default StorageHelper;
