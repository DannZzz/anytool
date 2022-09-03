"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const Chest_1 = __importDefault(require("./Chest"));
const Cooldown_1 = require("./Cooldown");
class Anytool {
    static MONEY = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
    static Cooldown = Cooldown_1.Cooldown;
    static Chest = Chest_1.default;
    static randomItem(items, limit, unique) {
        let array = Array.isArray(items) ? items : Object.entries(items);
        if (limit && limit > 1) {
            let toSend = [];
            if (unique)
                array = this.unique(array);
            if (limit >= array.length)
                return array;
            while (limit > toSend.length) {
                let item = array[Math.floor(Math.random() * array.length)];
                while (unique && toSend.includes(item))
                    item = array[Math.floor(Math.random() * array.length)];
                toSend.push(item);
            }
            return toSend;
        }
        else {
            return array[Math.floor(Math.random() * array.length)];
        }
    }
    /**
     * Remove duplicates from array
     *
     * @param {any[]} items any array
     * @returns {any[]} new array
     *
     * @example
     * unique([1, 2, 2, 3, 4]); // [1, 2, 3, 4]
     */
    static unique(items) {
        return [...new Set(items)];
    }
    static equal(primary, ...secondaries) {
        if (Array.isArray(primary)) {
            return secondaries.every(array => array.every((item, index) => primary[index] === item));
        }
        else if (typeof primary === "object") {
            let boolean = true;
            for (let key in primary) {
                if (!secondaries.every(obj => obj[key] === primary[key])) {
                    boolean = false;
                    break;
                }
            }
            return boolean;
        }
        else {
            return secondaries.every(any => any === primary);
        }
    }
    static randomNumber(min, max, dontRound) {
        return dontRound ? Math.random() * (max - min) + min : Math.round(Math.random() * (max - min) + min);
    }
    /**
     * Slices the text and adds "..." at the end of the text
     * @param {string} text Any string
     * @param {number} length maximum (total) length you need
     * @returns {string}
     *
     * @example
     * shortenText("Give me your love and I'll give you my sunshine", 10); // "Give me .."
     */
    static shortenText(text, length) {
        return length >= text.length ? text : text.slice(0, length - 2) + "..";
    }
    /**
     * Converts the number to currency format, like 1400 --> 1.4k
     * @param number Any number
     * @returns a new string-number
     *
     * @example
     * currencyFormat(1437); // 1.4k
     * currencyFormat(3133917); // 3.1M
     */
    static currencyFormat(number) {
        const ranking = Math.log10(number) / 3 | 0;
        if (!ranking)
            return number.toString();
        const last = this.MONEY[ranking];
        const scale = Math.pow(10, ranking * 3);
        const scaled = number / scale;
        return `${scaled.toFixed(2)}${last}`;
    }
    static formatNumber(number, locale = "en-us") {
        return Number.parseFloat("" + number).toLocaleString(locale);
    }
    static removeFromArray(array, element) {
        if (typeof element === "string" && element.startsWith("#")) {
            return array.filter((a, i) => i !== +element.slice(1));
        }
        else {
            return array.filter((a, i) => !this.equal(element, a));
        }
    }
    ;
    static removeFromArrayMany(array, filter) {
        const { indexes, elements } = filter;
        let toSend = [];
        if (indexes && indexes.length > 0) {
            toSend = array.filter((a, i) => !indexes.includes(i));
        }
        if (elements && elements.length > 0) {
            toSend = (toSend.length === 0 ? array : toSend).filter(a => !elements.some(el => this.equal(el, a)));
        }
        ;
        return toSend;
    }
    static uuid(length, options = {}) {
        if (!length || length < 1)
            return "";
        if (!options)
            options = {};
        if (!options.letterType)
            options.letterType = "both";
        let symbols = "";
        if (!options.only) {
            if (options.numbers !== false && options.letters !== "only")
                symbols += "0123456789";
            if (options.letters !== false && options.numbers !== "only")
                symbols += "abcdefghijklmnopqrstuvwxyz";
            if (options.aditional)
                symbols += options.aditional;
        }
        else
            symbols = options.only;
        if (!symbols)
            return "";
        let id = "";
        for (let i = 0; i < length; i++) {
            const symb = this.randomItem(symbols.split(""));
            switch (options.letterType) {
                case "lowercase":
                    id += symb.toLowerCase();
                    break;
                case "uppercase":
                    id += symb.toUpperCase();
                    break;
                default:
                    id += this.randomNumber(0, 100) <= 50 ? symb.toLowerCase() : symb.toUpperCase();
                    break;
            }
        }
        return id;
    }
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
    static resultOf(numbers, operation = "+") {
        if (!Array.isArray(numbers) || numbers.length === 0)
            return 0;
        let sum;
        switch (operation) {
            case "*":
                sum = 1;
                return numbers.reduce((s, number) => s * number, sum);
            case "-":
                sum = numbers[0];
                return numbers.reduce((s, number, i) => s - (i === 0 ? 0 : number), sum);
            case "/":
                sum = numbers[0];
                return numbers.reduce((s, number, i) => s / (i === 0 ? 1 : number), sum);
            default:
                sum = 0;
                return numbers.reduce((s, number) => s + number, sum);
        }
    }
    /**
     * Reverse string
     *
     * @param {string} text any string
     * @returns {string} reversed text
     *
     * @example
     * reverseString("Hello everyone!"); // "!enoyreve olleH"
     */
    reverseString(text) {
        return (text || "").split("").reverse().join("");
    }
}
module.exports = Anytool;
