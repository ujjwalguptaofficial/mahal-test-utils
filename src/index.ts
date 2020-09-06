// export * from "./plugin";

import { JSDOM } from "jsdom";

interface ComponentInitiateOption {
    props: {

    }
}
export default class {
    setup(Taj) {
        Taj.Component.prototype.$initiate = (option: ComponentInitiateOption, cb?) => {
            const dom = new JSDOM("");
            global.window = dom.window as any;
            global.document = dom.window.document as any;
            if (cb) {
                cb();
            }
        }

        Object.defineProperty(Taj.Component, "$html", {
            get: function () {
                return this._$element.innerHTML
            }
        });


        Object.defineProperty(Taj.Component, "$text", {
            get: function () {
                return this._$element.innerText
            }
        });
    }
}