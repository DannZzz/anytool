export interface constructor {
    new (): Chest<unknown, unknown>;
    new <K, V>(entries?: ReadonlyArray<readonly [K, V]> | null): Chest<K, V>;
    new <K, V>(iterable: Iterable<readonly [K, V]>): Chest<K, V>;
    readonly prototype: Chest<unknown, unknown>;
    readonly [Symbol.species]: constructor;
}
export interface Chest<K, V> extends Map<K, V> {
    constructor: constructor;
}
export declare type ReadOnlyChest<K, V> = ReadonlyMap<K, V> & Omit<Chest<K, V>, 'forEach' | 'ensure' | 'reverse' | 'sweep' | 'sort' | 'get' | 'set' | 'delete'>;
export declare class Chest<K, V> extends Map<K, V> {
    static readonly default: typeof Chest;
    /**
     * Checks if all of the elements exist in the chest.
     *
     * @param keys - The keys of the elements to check for
     *
     * @returns `true` if all of the elements exist, `false` if at least one does not exist.
     */
    hasAll(...keys: K[]): boolean;
    /**
     * Checks if any of the elements exist in the chest.
     *
     * @param keys - The keys of the elements to check for
     *
     * @returns `true` if any of the elements exist, `false` if none exist.
     */
    hasAny(...keys: K[]): boolean;
    /**
     * Obtains the first value(s) in this chest.
     *
     * @param amount Amount of values to obtain from the beginning
     *
     * @returns A single value if no amount is provided or an array of values, starting from the end if amount is negative
     */
    first(): V | undefined;
    first(amount: number): V[];
    /**
     * Obtains the first key(s) in this chest.
     *
     * @param amount Amount of keys to obtain from the beginning
     *
     * @returns A single key if no amount is provided or an array of keys, starting from the end if
     * amount is negative
     */
    firstKey(): K | undefined;
    firstKey(amount: number): K[];
    /**
     * Obtains the last value(s) in this chest.
     *
     * @param amount Amount of values to obtain from the end
     *
     * @returns A single value if no amount is provided or an array of values, starting from the start if
     * amount is negative
     */
    last(): V | undefined;
    last(amount: number): V[];
    /**
     * Obtains the last key(s) in this chest.
     *
     * @param amount Amount of keys to obtain from the end
     *
     * @returns A single key if no amount is provided or an array of keys, starting from the start if
     * amount is negative
     */
    lastKey(): K | undefined;
    lastKey(amount: number): K[];
    /**
     * Identical to [Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
     * Returns the item at a given index, allowing for positive and negative integers.
     * Negative integers count back from the last item in the chest.
     *
     * @param index The index of the element to obtain
     */
    at(index: number): V;
    /**
     * Identical to [Array.at()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/at).
     * Returns the key at a given index, allowing for positive and negative integers.
     * Negative integers count back from the last item in the chest.
     *
     * @param index The index of the key to obtain
     */
    keyAt(index: number): K;
    /**
     * Obtains unique random value(s) from this chest.
     *
     * @param amount Amount of values to obtain randomly
     *
     * @returns A single value if no amount is provided or an array of values
     */
    random(): V | undefined;
    random(amount: number): V[];
    /**
     * Identical to [Array.reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)
     * but returns a Chest instead of an Array.
     */
    reverse(): this;
    /**
     * Searches for a single item where the given function returns a truthy value. This behaves like
     * [Array.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find).
     *
     * @param fn The function to test with (should return boolean)
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.find(user => user.username === 'Bob');
     */
    find<V2 extends V>(fn: (value: V, key: K, chest: this) => value is V2): V2 | undefined;
    find(fn: (value: V, key: K, chest: this) => boolean): V | undefined;
    find<This, V2 extends V>(fn: (this: This, value: V, key: K, chest: this) => value is V2, thisArg: This): V2 | undefined;
    find<This>(fn: (this: This, value: V, key: K, chest: this) => boolean, thisArg: This): V | undefined;
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
    getOrCreate(key: K, newValue?: V): V | undefined;
    /**
     * Delets all right elements after executing the function
     *
     * @param fn The function to test (should return boolean)
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.deleteMany(user => user.items.length > 5);
     */
    deleteMany<V2 extends V>(fn: (value: V, key: K, chest: this) => value is V2): void;
    deleteMany(fn: (value: V, key: K, chest: this) => boolean): void;
    deleteMany<This, V2 extends V>(fn: (value: V, key: K, chest: this) => value is V2, thisArg?: This): void;
    deleteMany<This>(fn: (value: V, key: K, chest: this) => boolean, thisArg?: This): void;
    /**
     * Searches all the right elements and gives them a new value.
     *
     * @param fn The function to test (should return boolean)
     * @param newValue New value for the elements
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.setMany(balance => balance < 0, 100)
     */
    setMany<V2 extends V>(fn: (value: V, key: K, chest: this) => value is V2, newValue: V2): void;
    setMany(fn: (value: V, key: K, chest: this) => boolean, newValue: V): void;
    setMany<This, V2 extends V>(fn: (this: This, value: V, key: K, chest: this) => value is V2, newValue: V2, thisArg: This): void;
    setMany<This>(fn: (this: This, value: V, key: K, chest: this) => boolean, newValue: V, thisArg: This): void;
    /**
     * Searches for the key of a single item where the given function returns a truthy value. This behaves like
     * [Array.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex),
     * but returns the key rather than the positional index.
     *
     * @param fn The function to test with (should return boolean)
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.findKey(user => user.username === 'Nick');
     */
    findKey<K2 extends K>(fn: (value: V, key: K, chest: this) => key is K2): K2 | undefined;
    findKey(fn: (value: V, key: K, chest: this) => boolean): K | undefined;
    findKey<This, K2 extends K>(fn: (this: This, value: V, key: K, chest: this) => key is K2, thisArg: This): K2 | undefined;
    findKey<This>(fn: (this: This, value: V, key: K, chest: this) => boolean, thisArg: This): K | undefined;
    /**
     * Removes all the specified elements if they are exist.
     *
     * @param keys The keys of the elements to check for
     *
     * @example
     * chest.removeAll(user1.id, user4.id)
     */
    removeAll(...keys: K[]): void;
    /**
     * Identical to
     * [Array.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter),
     * but returns a Chest instead of an Array.
     *
     * @param fn The function to test with (should return boolean)
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.filter(user => user.username === 'Bob');
     */
    filter<K2 extends K>(fn: (value: V, key: K, chest: this) => key is K2): Chest<K2, V>;
    filter<V2 extends V>(fn: (value: V, key: K, chest: this) => value is V2): Chest<K, V2>;
    filter(fn: (value: V, key: K, chest: this) => boolean): Chest<K, V>;
    filter<This, K2 extends K>(fn: (this: This, value: V, key: K, chest: this) => key is K2, thisArg: This): Chest<K2, V>;
    filter<This, V2 extends V>(fn: (this: This, value: V, key: K, chest: this) => value is V2, thisArg: This): Chest<K, V2>;
    filter<This>(fn: (this: This, value: V, key: K, chest: this) => boolean, thisArg: This): Chest<K, V>;
    /**
     * Maps each item to another value into an array. Identical in behavior to
     * [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
     *
     * @param fn Function that produces an element of the new array, taking three arguments
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.map(user => user.tag);
     */
    map<T>(fn: (value: V, key: K, chest: this) => T): T[];
    map<This, T>(fn: (this: This, value: V, key: K, chest: this) => T, thisArg: This): T[];
    /**
     * Combines this chest with others into a new chest. None of the source chests are modified.
     *
     * @param chests chests to merge
     *
     * @example
     * const newColl = someColl.concat(someOtherColl, anotherColl, ohBoyAColl);
     */
    concat(...chests: ReadOnlyChest<K, V>[]): Chest<K, V>;
    /**
     * Maps each item to another value into a chest. Identical in behavior to
     * [Array.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).
     *
     * @param fn Function that produces an element of the new chest, taking three arguments
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.mapValues(user => user.tag);
     */
    mapValues<T>(fn: (value: V, key: K, chest: this) => T): Chest<K, T>;
    mapValues<This, T>(fn: (this: This, value: V, key: K, chest: this) => T, thisArg: This): Chest<K, T>;
    /**
     * Checks if there exists an item that passes a test. Identical in behavior to
     * [Array.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some).
     *
     * @param fn Function used to test (should return a boolean)
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.some(user => user.discriminator === '0000');
     */
    some(fn: (value: V, key: K, chest: this) => boolean): boolean;
    some<T>(fn: (this: T, value: V, key: K, chest: this) => boolean, thisArg: T): boolean;
    /**
     * Checks if all items passes a test. Identical in behavior to
     * [Array.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every).
     *
     * @param fn Function used to test (should return a boolean)
     * @param thisArg Value to use as `this` when executing function
     *
     * @example
     * chest.every(user => !user.bot);
     */
    every<K2 extends K>(fn: (value: V, key: K, chest: this) => key is K2): this is Chest<K2, V>;
    every<V2 extends V>(fn: (value: V, key: K, chest: this) => value is V2): this is Chest<K, V2>;
    every(fn: (value: V, key: K, chest: this) => boolean): boolean;
    every<This, K2 extends K>(fn: (this: This, value: V, key: K, chest: this) => key is K2, thisArg: This): this is Chest<K2, V>;
    every<This, V2 extends V>(fn: (this: This, value: V, key: K, chest: this) => value is V2, thisArg: This): this is Chest<K, V2>;
    every<This>(fn: (this: This, value: V, key: K, chest: this) => boolean, thisArg: This): boolean;
    /**
     * Creates an identical shallow copy of this chest.
     *
     * @example
     * const newColl = someColl.clone();
     */
    clone(): Chest<K, V>;
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
    sort(compareFunction?: Comparator<K, V>): this;
    toJSON(): V[];
    private static defaultSort;
}
export declare type Comparator<K, V> = (firstValue: V, secondValue: V, firstKey: K, secondKey: K) => number;
export default Chest;
