// export * from "./plugin";

import { JSDOM } from "jsdom";
import TajModule from "taj";
import { Component } from "taj";

interface ComponentInitiateOption {
    props: {

    }
}


export default class {
    setup(Taj: typeof TajModule) {
        (Taj as any).prototype.$initiate = (component, taj?: TajModule) => {
            if (taj) {
                taj.component = component;
                taj.element = document.querySelector('#app');
            }
            else {
                taj = new Taj(component, "#app");
            }
            return taj.create();
        }

        Object.defineProperty(Taj.Component.prototype, "$html", {
            get: function () {
                return this.element.innerHTML
            }
        });


        Object.defineProperty(Taj.Component.prototype, "$text", {
            get: function () {
                return this.element.innerText
            }
        });

        (Taj.Component.prototype as any).click = function () {
            this.element.click();
        }

        // Object.defineProperty(Component.prototype, "$text", {
        //     get: function () {
        //         console.log("text hitted");
        //         return this.element.innerText
        //     }
        // });
    }
}