import Chest from "./Chest";
export declare class Cooldown {
    readonly time: number;
    readonly cooldowns: Chest<string, Date>;
    constructor(time: number);
    /**
     * Check cooldown for key
     *
     * @param {string} key unique key
     * @returns {false | number} milliseconds if limited or false
     */
    isLimited(key: string): boolean | number;
}
