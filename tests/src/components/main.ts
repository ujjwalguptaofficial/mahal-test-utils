import { children, reactive, Component } from "mahal";
import Student from "./student";
import Counter from "./counter";
import { template } from "@mahaljs/util";


@template(`<Student/>`)
@children({
    Counter, Student
})
export default class Main extends Component {

    @reactive
    flag = true

    onClick() {
        this.flag = false
    }

}