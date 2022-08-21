import { IComponentInitiateOption } from "../interfaces";
import { setInputValue } from "./set_input_value";
import { Mahal, createComponent, Component, initComponent, executeRender } from "mahal";
import { createRenderer } from "@mahaljs/html-compiler";

export async function initiate<T extends Component>(component: any, option?: IComponentInitiateOption, onComponentCreated?: Function) {
    let app: Mahal = this || (() => {
        const newApp = new Mahal(component as any, '#app');
        newApp.extend.renderer = (Mahal as any).createRenderer || createRenderer;
        return newApp;
    })();
    app.component = component as any;
    const componentInstance: Component = createComponent(component, app);
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
    const el = executeRender(componentInstance);
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
            setInputValue(this, value);
        }
        return el;
    }
    return componentInstance as any as T;
}