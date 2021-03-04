import TajModule from "mahal";
import { Plugin, App, Component, Reactive } from "mahal";
interface ComponentInitiateOption {
    props: {

    }
}
export default class implements Plugin {
    setup(Taj: typeof TajModule, app: App) {

        (Taj.App.prototype as any).initiate = (component, option: ComponentInitiateOption) => {
            if (app) {
                app.component = component;
            }
            else {
                app = new Taj.App(component, "#app");
            }
            const componentInstance: Component = new component();
            const componentInitOption = {};
            if (option) {
                if (option.props) {
                    componentInitOption["attr"] = {};
                    for (const key in option.props) {
                        // Reactive(componentInstance, key);
                        componentInitOption["attr"][key] = {
                            k: key,
                            v: option.props[key]
                        }
                    }
                }
            }
            (componentInstance as any).initComponent_(componentInstance, componentInitOption);
            
            // (componentInstance.element as any).setValue = function (value) {
            //     this.value = value;
            //     this.dispatchEvent(new Event("input"))
            // }.bind(componentInstance.element);

            app.element.appendChild(
                (componentInstance as any).executeRender_()
            );
            componentInstance.find = function (qry) {
                const el = componentInstance.element.querySelector(qry);
                if (el == null) {
                    return el;
                }
                (el as any).setValue = function (value) {
                    this.value = value;
                    this.dispatchEvent(new window.Event("input"))
                }
                return el;
            }
            return componentInstance;
        }

        return {
            click: function () {
                this.element.click();
            }
        }
    }
}