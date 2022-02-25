import { Plugin, Mahal } from "mahal";
import { initiate, mount } from "./utils";
export default class extends Plugin {
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