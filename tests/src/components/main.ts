import { Children, Reactive, Component } from "mahal";
import Student from "./student";
import Counter from "./counter";
import { template } from "@mahaljs/util";


@template(`<Student/>`)
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