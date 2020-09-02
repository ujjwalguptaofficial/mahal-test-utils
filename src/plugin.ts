import { Test } from "./test";

export class TajStorePlugin {
    setup(component, store) {
        component.prototype.$store = new Test(typeof store == "function" ? new (store as any)() : store);
    }
}