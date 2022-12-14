"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.numberArray = exports.memoize = exports.reverseString = exports.resultOf = exports.uuid = exports.removeFromArrayExtended = exports.removeFromArray = exports.formatNumber = exports.currencyFormat = exports.shortenText = exports.randomNumber = exports.equal = exports.unique = exports.randomItem = exports.Chest = exports.Cooldown = exports.MONEY = void 0;
const Chest_1 = __importDefault(require("./Chest"));
const Cooldown_1 = require("./Cooldown");
exports.MONEY = ['', 'k', 'M', 'G', 'T', 'P', 'E'];
exports.Cooldown = Cooldown_1.Cooldown;
exports.Chest = Chest_1.default;
function randomItem(items, limit, _unique) {
    let array = Array.isArray(items) ? items : Object.entries(items);
    if (limit && limit > 1) {
        let toSend = [];
        if (_unique)
            array = unique(array);
        if (limit >= array.length)
            return array;
        while (limit > toSend.length) {
            let item = array[Math.floor(Math.random() * array.length)];
            while (_unique && toSend.includes(item))
                item = array[Math.floor(Math.random() * array.length)];
            toSend.push(item);
        }
        return toSend;
    }
    else {
        return array[Math.floor(Math.random() * array.length)];
    }
}
exports.randomItem = randomItem;
/**
 * Remove duplicates from array
 *
 * @param {any[]} items any array
 * @returns {any[]} new array
 *
 * @example
 * unique([1, 2, 2, 3, 4]); // [1, 2, 3, 4]
 */
function unique(items) {
    return [...new Set(items)];
}
exports.unique = unique;
function equal(primary, ...secondaries) {
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
exports.equal = equal;
function randomNumber(min, max, dontRound) {
    return dontRound ? Math.random() * (max - min) + min : Math.round(Math.random() * (max - min) + min);
}
exports.randomNumber = randomNumber;
/**
 * Slices the text and adds "..." at the end of the text
 * @param {string} text Any string
 * @param {number} length maximum (total) length you need
 * @returns {string}
 *
 * @example
 * shortenText("Give me your love and I'll give you my sunshine", 10); // "Give me .."
 */
function shortenText(text, length) {
    return length >= text.length ? text : text.slice(0, length - 2) + "..";
}
exports.shortenText = shortenText;
/**
 * Converts the number to currency format, like 1400 --> 1.4k
 * @param number Any number
 * @returns a new string-number
 *
 * @example
 * currencyFormat(1437); // 1.4k
 * currencyFormat(3133917); // 3.1M
 */
function currencyFormat(number) {
    const ranking = Math.log10(number) / 3 | 0;
    if (!ranking)
        return number.toString();
    const last = exports.MONEY[ranking];
    const scale = Math.pow(10, ranking * 3);
    const scaled = number / scale;
    return `${scaled.toFixed(2)}${last}`;
}
exports.currencyFormat = currencyFormat;
function formatNumber(number, locale = "en-us") {
    return Number.parseFloat("" + number).toLocaleString(locale);
}
exports.formatNumber = formatNumber;
function removeFromArray(array, element) {
    if (typeof element === "string" && element.startsWith("#")) {
        return array.filter((a, i) => i !== +element.slice(1));
    }
    else {
        return array.filter((a, i) => !equal(element, a));
    }
}
exports.removeFromArray = removeFromArray;
;
function removeFromArrayExtended(array, filter) {
    const { indexes, elements } = filter;
    let toSend = [];
    if (indexes && indexes.length > 0) {
        toSend = array.filter((a, i) => !indexes.includes(i));
    }
    if (elements && elements.length > 0) {
        toSend = (toSend.length === 0 ? array : toSend).filter(a => !elements.some(el => equal(el, a)));
    }
    ;
    return toSend;
}
exports.removeFromArrayExtended = removeFromArrayExtended;
function uuid(length, options = {}) {
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
        const symb = randomItem(symbols.split(""));
        switch (options.letterType) {
            case "lowercase":
                id += symb.toLowerCase();
                break;
            case "uppercase":
                id += symb.toUpperCase();
                break;
            default:
                id += randomNumber(0, 100) <= 50 ? symb.toLowerCase() : symb.toUpperCase();
                break;
        }
    }
    return id;
}
exports.uuid = uuid;
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
function resultOf(numbers, operation = "+") {
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
exports.resultOf = resultOf;
/**
 * Reverse string
 *
 * @param {string} text any string
 * @returns {string} reversed text
 *
 * @example
 * reverseString("Hello everyone!"); // "!enoyreve olleH"
 */
function reverseString(text) {
    return (text || "").split("").reverse().join("");
}
exports.reverseString = reverseString;
function memoize(fn, doIf) {
    const cache = {};
    return function (...args) {
        const key = args.toString();
        const cached = cache[key];
        if (cached) {
            if (doIf) {
                if (doIf(cached.args, args)) {
                    return cached.return;
                }
            }
            else {
                return cached.return;
            }
        }
        cache[key] = {
            args: args,
            return: fn(...args)
        };
        return cache[key].return;
    };
}
exports.memoize = memoize;
function numberArray(arg1, arg2) {
    let start = arg1, end = arg2;
    if (arg2 === undefined) {
        start = 0;
        end = arg1;
    }
    return Array.from({ length: end - start }, (_, i) => i + 1 + start);
}
exports.numberArray = numberArray;
