import Mahal from "mahal";
// import { TajStorePlugin } from "taj-store";
// import { AppStore } from "./stores/index";
import Main from "./components/main";
import MahalTest from "mahal-test-utils";

export const app = new Mahal.App(Main, document.querySelector('#app') as HTMLElement);
// app.addPlugin(TajStorePlugin, AppStore);

if (process.env.NODE_ENV !== "test") {
    app.create();
}
else {
    Mahal.App.extend.plugin(MahalTest, null);
}