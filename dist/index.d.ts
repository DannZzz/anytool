import Chest from "./Chest";
import { Cooldown } from "./Cooldown";
import { AnyObject, UuidOptions } from "./typing";
declare class UseMy {
    static readonly MONEY: string[];
    static Cooldown: typeof Cooldown;
    static Chest: typeof Chest;
    /**
     * Get random element from array;
     *
     * @param {any[]} array any array
     * @returns {any}
     *
     * @example
     * randomItem(["name1", "name2", 2]); // "name1"
     */
    static randomItem<T extends any>(array: T[]): T;
    /**
     * Get random elements from array;
     *
     * @param {any[]} array any array
     * @param {number} limit limit of elements, get 2 or more elements
     * @returns {any[]}
     *
     * @example
     * randomItem(["name1", "name2", 2, 3, "name3"], 3); // ["name2", 2, "name2"]
     */
    static randomItem<T extends any>(array: T[], limit: number): T[];
    /**
     * Get random elements from array;
     *
     * @param {any[]} array any array
     * @param {number} limit limit of elements, get 2 or more elements
     * @param {true} unique only unique elements
     * @returns {any[]}
     *
     * @example
     * randomItem(["name1", "name2", 2, 3, "name3"], 3, true); // ["name2", 2, "name1"]
     */
    static randomItem<T extends any>(array: T[], limit: number, unique: true): T[];
    /**
     * Get random [key, value] from object
     *
     * @param {AnyObject} object any object
     * @returns {[string, any]} random key with value
     *
     * @example
     * randomItem({name1: "Dann", name2: "Gago", name3: "Amazon"}); // ["name3", "Amazon"]
     */
    static randomItem<K extends keyof any, V extends any, T extends AnyObject<K, V>>(object: T): [K, V];
    /**
     * Get random [key, value] from object
     *
     * @param {AnyObject} object any object
     * @param {number} limit limit of properties, get 2 or more properties
     * @returns {[string, any]} random key with value
     *
     * @example
     * randomItem({name1: "Dann", name2: "Gago", name3: "Amazon"}, 2); // [["name3", "Amazon"], ["name1", "Dann"]]
     */
    static randomItem<K extends keyof any, V extends any, T extends AnyObject<K, V>>(object: T, limit: number): [K, V][];
    /**
     * Remove duplicates from array
     *
     * @param {any[]} items any array
     * @returns {any[]} new array
     *
     * @example
     * unique([1, 2, 2, 3, 4]); // [1, 2, 3, 4]
     */
    static unique<T extends any[]>(items: T): T;
    /**
     * Wheter the values are equal to main value
     *
     * @param {any} primary main value
     * @param {any} secondaries other values
     * @returns {boolean} true if equals
     *
     * @example
     * equal(1, 1); // true
     * equal(1, "1"); // false
     * equal(1, 1, 2, 1); // false
     */
    static equal<T extends any>(primary: T, ...secondaries: T[]): boolean;
    /**
     * Wheter the arrays are the same
     *
     * @param {any[]} primary main array to check with
     * @param {any[]} secondaries other arrays
     * @returns {boolean} true if equals
     *
     * @example
     * equal([1, 2], [1, 2], [1, 2]); // true
     * equal([1, 2], [2, 1]); // false
     */
    static equal<T extends any[]>(primary: T, ...secondaries: T[]): boolean;
    /**
     * Wheter the object are equal to main object
     *
     * @param {AnyObject} primary main object
     * @param {AnyObject} secondaries other objects
     *
     * @example
     * equal({name: "Vardan"}, {"name": "Vardan"}); // true
     * equal({name: "Vardan", age: 18}, {age: 18, "name": "Vardan"}); // true
     * equal({name: "Vardan", age: 18}, {age: 18, "name": "Vardan"}, {name: "Diana", age: 18}); // false
     */
    static equal<K extends keyof any, V extends any, T extends AnyObject<K, V>>(primary: T, ...secondaries: T[]): boolean;
    /**
     * Get random number between min and max value
     *
     * @param {number} min min number
     * @param {number} max max number
     * @returns {number}
     *
     * @example
     * randomNumber(1, 20); // 13
     */
    static randomNumber(min: number, max: number): number;
    /**
     * Get random number between min and max value
     *
     * @param {number} min min number
     * @param {number} max max number
     * @param {true} dontRound wheter you need float number
     * @returns {number}
     *
     * @example
     * randomNumber(1, 10, true); // 3.2317609836...
     */
    static randomNumber(min: number, max: number, dontRound: true): number;
    /**
     * Slices the text and adds "..." at the end of the text
     * @param {string} text Any string
     * @param {number} length maximum (total) length you need
     * @returns {string}
     *
     * @example
     * shortenText("Give me your love and I'll give you my sunshine", 10); // "Give me .."
     */
    static shortenText(text: string, length: number): string;
    /**
     * Converts the number to currency format, like 1400 --> 1.4k
     * @param number Any number
     * @returns a new string-number
     *
     * @example
     * currencyFormat(1437); // 1.4k
     * currencyFormat(3133917); // 3.1M
     */
    static currencyFormat(number: number): string;
    /**
     * Formats the number style, like 411611 --> 411,611 or 411 611
     * @param {number} number Any number, may be "100"
     * @returns a new string-number
     *
     * @example
     * formatNumber(12345679); // 123,456,789
     */
    static formatNumber(number: number | string): string;
    /**
     * Formats the number style, like 411611 --> 411,611 or 411 611
     * @param {number} number Any number, may be "100"
     * @param {string} locale A locale string, en-us, ru-ru, etc
     * @returns a new string-number
     *
     * @example
     * formatNumber(123456789, "en-us"); // 123,456,789
     * formatNumber(123456789, "ru-ru"); // 123 456,789
     * formatNumber(123456789, "ar-EG"); // ١٢٣٤٥٦٫٧٨٩
     */
    static formatNumber(number: number | string, locale: string): string;
    /**
     * Remove element with spec. index
     *
     * @param {any[]} array Any array
     * @param {`#${number}`} index string-index of element ex. "#4"
     * @returns {any[]}
     *
     * @example
     * removeFromArray([1, 2, 3, 4], "#2"); // [1, 2, 4];
     */
    static removeFromArray<T>(array: T[], index: `#${number}`): T[];
    /**
     * Remove element with spec. value
     *
     * @param {any[]} array Any array
     * @param {any} element all elements with this value will be removed
     * @returns {any[]}
     *
     * @example
     * removeFromArray(["Dann", "Gago", "Meri", "Gago"], "Gago"); // ["Dann", "Meri"]
     */
    static removeFromArray<T>(array: T[], element: T): T[];
    /**
     * Remove multiple elements from array
     *
     * @param {any[]} array
     * @param {{indexes: number[]}} filter remove all elements with these indexes
     *
     * @example
     * removeFromArrayMany(["Dann", "Gago", "Meri", "Gago"], {indexes: [1, 3]}); // ["Dann", "Meri"]
     */
    static removeFromArrayMany<T>(array: T[], filter: {
        indexes: number[];
    }): T[];
    /**
     * Remove multiple elements from array
     *
     * @param {any[]} array
     * @param {{elements: any[]}} filter remove all elements with these values
     *
     * @example
     * removeFromArrayMany(["Dann", "Gago", "Meri", "Gago"], {elements: ["Dann", "Meri"]}); // ["Gago", "Gago"]
     */
    static removeFromArrayMany<T>(array: T[], filter: {
        elements: T[];
    }): T[];
    /**
     * Remove multiple elements from array
     *
     * @param {any[]} array
     * @param {{elements: any[], indexes: number[]}} filter remove all elements with these values and spec. indexes
     *
     * @example
     * removeFromArrayMany(["Dann", "Gago", "Meri", "Gago"], {elements: ["Dann"], indexes: [3]}); // ["Gago", "Meri"]
     */
    static removeFromArrayMany<T>(array: T[], filter: {
        elements: T[];
        indexes: number[];
    }): T[];
    /**
     * Create unique id
     *
     * @param {number} length length of unique string
     * @returns {string}
     *
     * @example
     * uuid(10); // "d12Lc01dsL"
     */
    static uuid(length: number): string;
    /**
     * Create unique id
     *
     * @param {number} length length of unique string
     * @param {UuidOptions} options options
     * @returns {string}
     *
     * @example
     * uuid(10, {only: "<>?"}); // "<<>?><<>?>"
     * uuid(10, {letters: "only"}); // "skFqlcPOcH"
     * uuid(10, {letters: "only", letterType: "lowercase"}); // "skdxchqkpo", default "both"
     * uuid(10, {numbers: "only"}); // "3789123752"
     * uuid(10, {letters: "only", aditional: "@#$"}); // "FDj$dx@A#x"
     */
    static uuid(length: number, options: UuidOptions): string;
    /**
     * Calculate sum. of numbers in array with math operations
     *
     * @param {number[]} numbers any array of numbers
     * @param {"*" | "/" | "+" | "-"} operation
     * @returns {number} number
     *
     * @example
     * resultOf([1, 2, 3]); // 6, default "+"
     * resultOf([1, 2, 3], "+"); // 6
     * resultOf([1, 2, 3], "*"); // 6
     * resultOf([1, 2, 3], "-"); // -4
     * resultOf([1, 2, 3], "/"); // 0.1666666666666667
     */
    static resultOf(numbers: number[], operation?: "*" | "/" | "+" | "-"): number;
    /**
     * Reverse string
     *
     * @param {string} text any string
     * @returns {string} reversed text
     *
     * @example
     * reverseString("Hello everyone!"); // "!enoyreve olleH"
     */
    reverseString(text: string): string;
}
export = UseMy;
