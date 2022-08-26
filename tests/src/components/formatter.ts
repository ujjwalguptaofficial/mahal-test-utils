import { Component, Reactive } from "mahal";
import { Template } from "@mahaljs/util";


@Template(`<div>
    <div id="counter">{{name | upper}}</div>
</div>`)
export default class extends Component {
    @Reactive
    name = 'ujjwal';

}