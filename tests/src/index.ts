import { Mahal } from "mahal";
import Main from "./components/main";
import MahalTest from "@mahaljs/test-utils";
import { createRenderer } from "@mahaljs/html-compiler";

export const app = new Mahal(Main as any, document.querySelector('#app') as HTMLElement);
app.extend.formatter('upper', (value) => {
    return value.toUpperCase();
})
app.extend.setRenderer(createRenderer);
if (process.env.NODE_ENV !== "test") {
    app.create();
}
else {
    app.extend.plugin(MahalTest);
}