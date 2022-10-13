import { IComponentInitiateOption } from "../interfaces";
import { Component } from "mahal";
import { initiate } from "./initiate";

export async function mount<T extends Component>(component, option?: IComponentInitiateOption) {
    // return new Promise<T>((res, rej) => {
    return initiate.call(this, component, option);
    // });
}