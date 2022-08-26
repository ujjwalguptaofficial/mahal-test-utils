import { Children, Reactive, Component } from "mahal";
import Student from "./student";
import Counter from "./counter";
import { Template } from "@mahaljs/util";


@Template(`<Student/>`)
@Children({
    Counter, Student
})
export default class Main extends Component {

    @Reactive
    flag = true

    onClick() {
        this.flag = false
    }

}