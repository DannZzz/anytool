"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cooldown = void 0;
const Chest_1 = __importDefault(require("./Chest"));
// Basic cooldown system
class Cooldown {
    time;
    cooldowns;
    constructor(time) {
        this.time = time;
        this.cooldowns = new Chest_1.default();
    }
    /**
     * Check cooldown for key
     *
     * @param {string} key unique key
     * @returns {false | number} milliseconds if limited or false
     */
    isLimited(key) {
        const value = this.cooldowns.get(key);
        if (!value || new Date() > value) {
            this.cooldowns.set(key, new Date(Date.now() + this.time));
            return false;
        }
        else {
            return value.getTime() - Date.now();
        }
    }
}
exports.Cooldown = Cooldown;
