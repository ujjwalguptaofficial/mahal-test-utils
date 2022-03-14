import { Mahal } from "mahal";
import { mount } from "./mount";
export const getMount = (app: Mahal) => {
    return mount.bind(app) as typeof mount;
}