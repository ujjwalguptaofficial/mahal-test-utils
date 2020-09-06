import { Taj, Component, Template, Children, Reactive } from "taj";
import { TajStorePlugin } from "taj-store";
import { AppStore } from "./stores/index";
import Main from "./components/main";

const app = new Taj(Main, document.querySelector('#app'));
app.addPlugin(TajStorePlugin, AppStore);
app.create();