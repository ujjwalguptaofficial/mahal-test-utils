import { IComponentInitiateOption } from "../interfaces";
import { Component } from "mahal";
import { initiate } from "./initiate";

export async function mount<T extends Component>(component, option?: IComponentInitiateOption) {
    return new Promise<T>((res) => {
        initiate.call(this, component, option, (componentInstance: Component) => {
            componentInstance.waitFor("mount").then(_ => {
                res(componentInstance as any)
            })
        })
    });
}