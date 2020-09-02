import { Children, Template, Reactive, Component } from "taj";
import { Getter } from "taj-store";
import Student from "./student";

@Template(`<div><button on:click="onClick">top {{name}}</button><Student #if(flag)/></div>`)
@Children({
    Student
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