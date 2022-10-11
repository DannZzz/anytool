"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Anytool = __importStar(require(".."));
// console.log(Anytool.randomItem([1, 2, 3, 5]));
// console.log(Anytool.randomItem([1, 2, 3, 5, 6], 3, true));
// console.log(Anytool.randomItem({name1: "Vardan", name2: "Meri"}))
// console.log(Anytool.randomItem({name1: "Vardan", name2: "Meri", name3: "Gago"}, 2, true))
// console.log(Anytool.unique([1, 2, 2, 3]));
// console.log(Anytool.equal([1, 2, 3], [1, 2, 3], [1, 2, 3]));
// console.log(Anytool.equal([1, 2, 3], [1, 2, 3], [1, 3, 3]));
// console.log(Anytool.equal({name: "Vardan"}, {name: "Vardan"}, {name: "Vardan"}));
// console.log(Anytool.equal({name: "Vardan"}, {name: "Vardan"}, {name: "Vardana"}));
// console.log(Anytool.randomNumber(1, 10));
// console.log(Anytool.randomNumber(5, 20, true));
// console.log(Anytool.shortenText("Hello Everyone", 9))
// console.log(Anytool.removeFromArray(["lol", "aahgaga", "ok"], "ok"));
// console.log(Anytool.removeFromArray(["lol", "aahgaga", "ok"], `#${0}`));
// console.log(Anytool.removeFromArrayExtended(["lol", "aahgaga", "ok"], { elements: ['ok', 2] }));
// console.log(Anytool.removeFromArrayExtended(["lol", "aahgaga", "ok"], { indexes: [0, 2] }));
// console.log(Anytool.removeFromArrayExtended(["lol", "aahgaga", "ok"], { indexes: [0], elements: ["ok"] }));
console.log(Anytool.uuid(8));
// console.log(Anytool.uuid(8, { numbers: "only" }));
// console.log(Anytool.uuid(8, { letters: "only", letterType: "uppercase" }));
// console.log(Anytool.uuid(8, { letters: "only", aditional: "%$^*()" }));
// console.log(Anytool.uuid(8, { only: "<>?" }));
// console.log(Anytool.resultOf([1, 2, 3, 4, 5]));
// console.log(Anytool.resultOf([1, 2, 3, 4, 5], "*"));
// console.log(Anytool.resultOf([1, 2, 3, 4, 5], "-"));
// console.log(Anytool.resultOf([1, 2, 3, 4, 5], "/"));
// const fib = Anytool.memoize((n: number): number => {
//     if (n < 2) return n;
//     return fib(n - 1) + fib(n - 2);
// });
// console.log(fib(1000))
