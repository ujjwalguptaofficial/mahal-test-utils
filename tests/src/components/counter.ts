import { Component, reactive } from "mahal";
import { template } from "@mahaljs/util";

@template(`<div>
    <div id="counter">{{counter}}</div>
    <button id="btnIncrement" on:click='increment'>Increment</button>
    <button id="btnDecrement" on:click='decrement'>Decrement</button>
</div>`)
export default class extends Component {
    @reactive
    counter = 0;

    increment() {
        console.log("triggered increment");
        ++this.counter;
    }

    decrement() {
        --this.counter;
    }
}