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
        (Taj.App.prototype as any).$initiate = (component, app?) => {
            if (app) {
                app.component = component;
            }
            else {
                app = new Taj.App(component, "#app");
            }
            return app.create();
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