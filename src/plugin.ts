import { Plugin, Mahal, Component, initComponent, createComponent, executeRender } from "mahal";
import { initiate, mount } from "./utils";
export class TestPlugin extends Plugin {
    setup(app: Mahal) {

        (app as any)['initiate'] = initiate.bind(app);
        (app as any)['mount'] = mount.bind(app);

        return {
            click: function () {
                this.element.click();
            },
            async updated() {
                await this.waitFor("update");
            }
        }
    }
}