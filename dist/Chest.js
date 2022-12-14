"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chest = void 0;
class Chest extends Map {
    static default = Chest;
    /**
     * Checks if all of the elements exist in the chest.
     *
     * @param keys - The keys of the elements to check for
     *
     * @returns `true` if all of the elements exist, `false` if at least one does not exist.
     */
    hasAll(...keys) {
        return keys.every((k) => super.has(k));
    }
    /**
     * Checks if any of the elements exist in the chest.
     *
     * @param keys - The keys of the elements to check for
     *
     * @returns `true` if any of the elements exist, `false` if none exist.
     */
    hasAny(...keys) {
        return keys.some((k) => super.has(k));
    }
    first(amount) {
        if (typeof amount === 'undefined')
            return this.values().next().value;
        if (amount < 0)
            return this.last(amount * -1);
        amount = Math.min(this.size, amount);
        const iter = this.values();
        return Array.from({ length: amount }, () => iter.next().value);
    }
    firstKey(amount) {
        if (typeof amount === 'undefined')
            return this.keys().next().value;
        if (amount < 0)
            return this.lastKey(amount * -1);
        amount = Math.min(this.size, amount);
        const iter = this.keys();
        return Array.from({ length: amount }, () => iter.next().value);
    }
    last(amount) {
        const arr = [...this.values()];
        if (typeof amount === 'undefined')
            return arr[arr.length - 1];
        if (amount < 0)
            return this.first(amount * -1);
        if (!amount)
            return [];
        return arr.slice(-amount);
    }
    lastKey(amount) {
        const arr = [...this.keys()];
        if (typeof amount === 'undefined')
            return arr[arr.length - 1];
        if (amount < 0)
            return this.firstKey(amount * -1);
        if (!amount)
            return [];
        return arr.slice(-amount);
    }
    /**
     * Identical to [Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
     * Returns the item at a given index, allowing for positive and negative integers.
     * Negative integers count back from the last item in the chest.
     *
     * @param index The index of the element to obtain
     */
    at(index) {
        index = Math.floor(index);
        const arr = [...this.values()];
        return arr.at(index);
    }
    /**
     * Identical to [Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
     * Returns the key at a given index, allowing for positive and negative integers.
     * Negative integers count back from the last item in the chest.
     *
     * @param index The index of the key to obtain
     */
    keyAt(index) {
        index = Math.floor(index);
        const arr = [...this.keys()];
        return arr.at(index);
    }
    random(amount) {
        const arr = [...this.values()];
        if (typeof amount === 'undefined')
            return arr[Math.floor(Math.random() * arr.length)];
        if (!arr.length || !amount)
            return [];
        return Array.from({ length: Math.min(amount, arr.length) }, () => arr.splice(Math.floor(Math.random() * arr.length), 1)[0]);
    }
    /**
     * Identical to [Array.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
     * but returns a Chest instead of an Array.
     */
    reverse() {
        const entries = [...this.entries()].reverse();
        this.clear();
        for (const [key, value] of entries)
            this.set(key, value);
        return this;
    }
    find(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return val;
        }
        return undefined;
    }
    /**
     * Get the value of element, or create a new element if it doesn't exist.
     *
     * @param key The key of the element to check for
     * @param newValue An additional value if you need to create a new element
     * @returns The value of element (created) or `undefined`
     *
     * @example
     * chest.getOrCreate("14484418947");
     * chest.getOrCreate("14484418947", {name: "Nick", lastName: "Smith"});
     */
    getOrCreate(key, newValue) {
        if (this.has(key))
            return this.get(key);
        if (newValue === undefined) {
            return undefined;
        }
        this.set(key, newValue);
        return this.get(key);
    }
    deleteMany(fn, thisArg) {
        if (typeof thisArg !== "undefined")
            fn = fn.bind(thisArg);
        for (const [key, value] of this) {
            if (fn(value, key, this))
                this.delete(key);
        }
    }
    setMany(fn, newValue, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, value] of this) {
            if (fn(value, key, this))
                this.set(key, newValue);
        }
    }
    findKey(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return key;
        }
        return undefined;
    }
    /**
     * Removes all the specified elements if they are exist.
     *
     * @param keys The keys of the elements to check for
     *
     * @example
     * chest.removeAll(user1.id, user4.id)
     */
    removeAll(...keys) {
        this.deleteMany((v, key) => keys.includes(key));
    }
    filter(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const results = new this.constructor[Symbol.species]();
        for (const [key, val] of this) {
            if (fn(val, key, this))
                results.set(key, val);
        }
        return results;
    }
    map(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const iter = this.entries();
        return Array.from({ length: this.size }, () => {
            const [key, value] = iter.next().value;
            return fn(value, key, this);
        });
    }
    /**
     * Combines this chest with others into a new chest. None of the source chests are modified.
     *
     * @param chests chests to merge
     *
     * @example
     * const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
     */
    concat(...chests) {
        const newColl = this.clone();
        for (const coll of chests) {
            for (const [key, val] of coll)
                newColl.set(key, val);
        }
        return newColl;
    }
    mapValues(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        const coll = new this.constructor[Symbol.species]();
        for (const [key, val] of this)
            coll.set(key, fn(val, key, this));
        return coll;
    }
    some(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (fn(val, key, this))
                return true;
        }
        return false;
    }
    every(fn, thisArg) {
        if (typeof thisArg !== 'undefined')
            fn = fn.bind(thisArg);
        for (const [key, val] of this) {
            if (!fn(val, key, this))
                return false;
        }
        return true;
    }
    /**
     * Creates an identical shallow copy of this chest.
     *
     * @example
     * const newColl = someColl.clone();
     */
    clone() {
        return new this.constructor[Symbol.species](this);
    }
    /**
     * The sort method sorts the items of a chest in place and returns it.
     * The sort is not necessarily stable in Node 10 or older.
     * The default sort order is according to string Unicode code points.
     *
     * @param compareFunction Specifies a function that defines the sort order.
     * If omitted, the chest is sorted according to each character's Unicode code point value, according to the string conversion of each element.
     *
     * @example
     * chest.sort((userA, userB) => userA.createdTimestamp - userB.createdTimestamp);
     */
    sort(compareFunction = Chest.defaultSort) {
        const entries = [...this.entries()];
        entries.sort((a, b) => compareFunction(a[1], b[1], a[0], b[0]));
        super.clear();
        for (const [k, v] of entries) {
            super.set(k, v);
        }
        return this;
    }
    toJSON() {
        return [...this.values()];
    }
    static defaultSort(firstValue, secondValue) {
        return Number(firstValue > secondValue) || Number(firstValue === secondValue) - 1;
    }
}
exports.Chest = Chest;
exports.default = Chest;
