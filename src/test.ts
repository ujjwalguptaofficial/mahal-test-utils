import { IStore } from "./interfaces";

export class Test implements IStore {
    getter;
    mutation;
    task;
    state;

    constructor(store) {
        this.getter = store.getter || {};
        this.mutation = store.mutation || {};
        this.state = store.state || {};
        this.task = store.task || {};
        if (this.state) {
            this.proxy_ = new Proxy(this.state, {
                get: (obj, prop) => {
                    if (['[object Object]', '[object Array]'].indexOf(Object.prototype.toString.call(obj[prop])) > -1) {
                        return new Proxy(obj[prop], {
                            get(obj, prop) {
                                debugger;

                                return obj[prop]
                            },
                            set(obj, prop, value) {
                                debugger;
                                return true;
                            }
                        });
                    }
                    return obj[prop];
                },
                set: (obj, prop, value) => {
                    const oldValue = obj[prop];
                    obj[prop] = value;
                    (this.watchList_[prop as any] || []).forEach(cb => {
                        cb(value, oldValue);
                    })
                    return true;
                }
            });
        }
    }

    execute(taskName: string, payload) {
        return this.task[taskName]({
            getter: this.getter,
            commit: this.commit,
            execute: this.execute,
            state: this.state
        }, payload)
    }

    commit(mutationName: string, payload) {
        if (this.mutation[mutationName]) {
            this.mutation[mutationName](this.proxy_, payload)
        }
        else {
            throw `mutation ${mutationName} does not exist`;
        }
    }

    watch(name: string, cb: (newValue, oldValue) => void) {
        if (this.watchList_[name] == null) {
            this.watchList_[name] = [];
        }
        this.watchList_[name].push(cb);
    }

    unwatch(name: string, cb) {
        if (this.watchList_[name] != null) {
            const index = this.watchList_[name].findIndex(q => q === cb);
            this.watchList_[name].splice(index, 1);
        }
    }

    private watchList_: {
        [key: string]: Array<(newValue, oldValue) => void>
    } = {};

    private proxy_;

}