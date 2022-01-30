import { ComponentInitiateOption } from "../interfaces";
import { Component } from "mahal";
import { initiate } from "./initiate";

export async function mount(component, option?: ComponentInitiateOption) {
    return new Promise<Component>((res) => {
        initiate.call(this, component, option, (componentInstance: Component) => {
            componentInstance.waitFor("mount").then(_ => {
                res(componentInstance)
            })
        })
    });
}