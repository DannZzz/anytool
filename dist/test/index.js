"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const __1 = __importDefault(require(".."));
// console.log(UseMy.randomItem([1, 2, 3, 5]));
// console.log(UseMy.randomItem([1, 2, 3, 5, 6], 3, true));
// console.log(UseMy.randomItem({name1: "Vardan", name2: "Meri"}))
// console.log(UseMy.randomItem({name1: "Vardan", name2: "Meri", name3: "Gago"}, 2, true))
// console.log(UseMy.unique([1, 2, 2, 3]));
// console.log(UseMy.equal([1, 2, 3], [1, 2, 3], [1, 2, 3]));
// console.log(UseMy.equal([1, 2, 3], [1, 2, 3], [1, 3, 3]));
// console.log(UseMy.equal({name: "Vardan"}, {name: "Vardan"}, {name: "Vardan"}));
// console.log(UseMy.equal({name: "Vardan"}, {name: "Vardan"}, {name: "Vardana"}));
// console.log(UseMy.randomNumber(1, 10));
// console.log(UseMy.randomNumber(5, 20, true));
// console.log(UseMy.shortenText("Hello Everyone", 9))
// console.log(UseMy.removeFromArray(["lol", "aahgaga", "ok"], "ok"));
// console.log(UseMy.removeFromArray(["lol", "aahgaga", "ok"], `#${0}`));
// console.log(UseMy.removeFromArrayMany(["lol", "aahgaga", "ok"], { elements: ['ok', 2] }));
// console.log(UseMy.removeFromArrayMany(["lol", "aahgaga", "ok"], { indexes: [0, 2] }));
// console.log(UseMy.removeFromArrayMany(["lol", "aahgaga", "ok"], { indexes: [0], elements: ["ok"] }));
// console.log(UseMy.uuid(8));
// console.log(UseMy.uuid(8, { numbers: "only" }));
// console.log(UseMy.uuid(8, { letters: "only", letterType: "uppercase" }));
// console.log(UseMy.uuid(8, { letters: "only", aditional: "%$^*()" }));
// console.log(UseMy.uuid(8, { only: "<>?" }));
console.log(__1.default.resultOf([1, 2, 3, 4, 5]));
console.log(__1.default.resultOf([1, 2, 3, 4, 5], "*"));
console.log(__1.default.resultOf([1, 2, 3, 4, 5], "-"));
console.log(__1.default.resultOf([1, 2, 3, 4, 5], "/"));
