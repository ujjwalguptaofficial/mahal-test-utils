import Taj from "taj";
import { TajStorePlugin } from "taj-store";
import { AppStore } from "./stores/index";
import Main from "./components/main";
import TajTest from "taj-test";

export const app = new Taj(Main, document.querySelector('#app') as HTMLElement);
app.addPlugin(TajStorePlugin, AppStore);

if (process.env.NODE_ENV !== "test") {
    console.log("env", process.env.NODE_ENV)
    throw "fuk off"
    app.create();
}
else {
    app.addPlugin(TajTest, null);
}