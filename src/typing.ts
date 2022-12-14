export type AnyObject<K extends keyof any = string, V extends any = unknown, D extends boolean = false> = D extends true ? { [k in K]: V } : { [k in K]: V }

export interface UuidOptions {
    /**
     * Use only these characteres ex. "dj*24_cx@"
     */
    only?: string;
    /**
     * Use only numbers 0-9 or false for disabling
     */
    numbers?: "only" | false
    /**
     * Use only letters a-z or A-Z or false for disabling
     */
    letters?: "only" | false
    /**
     * Aditional symbols ex. "_-"
     */
    aditional?: string
    /**
     * Letter type
     * default: `both`
     */
    letterType?: "uppercase" | "lowercase" | "both"
}