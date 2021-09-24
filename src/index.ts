import TajModule from "mahal";
import { Plugin, App, Component, initComponent, executeRender } from "mahal";
interface ComponentInitiateOption {
    props: {

    }
}
export default class implements Plugin {
    setup(Taj: typeof TajModule, app: App) {

        Taj.App.prototype['initiate'] = async (component, option: ComponentInitiateOption, onComponentCreated?: Function) => {
            if (app) {
                app.component = component;
            }
            else {
                app = new Taj.App(component, "#app");
            }
            const componentInstance: Component = new component();
            if (onComponentCreated) {
                onComponentCreated(componentInstance);
            }
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
            initComponent.call(componentInstance, componentInstance, componentInitOption);

            // (componentInstance.element as any).setValue = function (value) {
            //     this.value = value;
            //     this.dispatchEvent(new Event("input"))
            // }.bind(componentInstance.element);
            const el = await executeRender(componentInstance);
            app.element.appendChild(
                el
            );
            const find = componentInstance.find.bind(componentInstance);
            componentInstance.find = function (qry) {
                const el = find(qry);
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

        Taj.App.prototype['mount'] = async function (component, option: ComponentInitiateOption) {
            return new Promise((res) => {
                this.initiate(component, option, (componentInstance: Component) => {
                    componentInstance.waitFor("mount").then(_ => {
                        res(componentInstance)
                    })
                })
            });
        }
        return {
            click: function () {
                this.element.click();
            },
            async updated() {
                await this.waitFor("update");
            }
        }
    }
}