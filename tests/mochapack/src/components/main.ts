import { Children, Template, Reactive, Component } from "mahal";
import { Getter } from "taj-store";
import Student from "./student";
import Counter from "./counter";

@Template(`<Counter></Counter>`)
@Children({
    Counter
})
export default class Main extends Component {

    @Reactive
    flag = true

    onClick() {
        this.flag = false
        console.log("store", (this as any).$store);
    }

    @Getter("name")
    name;
}