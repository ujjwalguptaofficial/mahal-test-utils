import TajModule from "mahal";
import { Plugin, App } from "mahal";
export default class implements Plugin {
    setup(Taj: typeof TajModule, app: App): {
        click: () => void;
    };
}
