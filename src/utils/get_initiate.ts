import { Mahal } from "mahal";
import { initiate } from "./initiate";
export const getInitiate = (app: Mahal) => {
    return initiate.bind(app) as typeof initiate;
}