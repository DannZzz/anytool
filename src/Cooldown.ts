import Chest from "./Chest";

// Basic cooldown system
export class Cooldown {
    readonly cooldowns: Chest<string, Date>;
    constructor(readonly time: number) {
        this.cooldowns = new Chest();
    }

    /**
     * Check cooldown for key
     * 
     * @param {string} key unique key
     * @returns {false | number} milliseconds if limited or false
     */
    isLimited(key: string): boolean | number {
        const value = this.cooldowns.get(key);
        if (!value || new Date() > value) {
            this.cooldowns.set(key, new Date(Date.now() + this.time));
            return false;
        } else {
            return value.getTime() - Date.now();
        }
    }
}