import { Mahal } from "mahal";
import Main from "./components/main";
import MahalTest from "@mahaljs/test-utils";

export const app = new Mahal(Main, document.querySelector('#app') as HTMLElement);
app.extend.formatter('upper', (value) => {
    return value.toUpperCase();
})
if (process.env.NODE_ENV !== "test") {
    app.create();
}
else {
    app.extend.plugin(MahalTest);
}