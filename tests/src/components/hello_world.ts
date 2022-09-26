import { Component} from "mahal";
import { template } from "@mahaljs/util";

@template("<div on:click='say'>{{name}}</div>")
export default class HelloWorld extends Component {
    name = "ujjwal gupta";

    say() {
        window.alert("Hello World");
    }
}