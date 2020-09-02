import { IStore } from "../interfaces";
import { Store } from "../store";
export function createStore(store: IStore) {
    return new Store(typeof store == "function" ? new (store as any)() : store);
}