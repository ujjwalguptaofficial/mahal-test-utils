import { Component, Template } from "taj";

@Template("<div on:click='say'>{{name}}</div>")
export default class extends Component {
    name = "ujjwal gupta";

    say() {
        window.alert("Hello World");
    }
}