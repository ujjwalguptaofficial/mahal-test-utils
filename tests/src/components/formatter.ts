import { Component, reactive } from "mahal";
import { template } from "@mahaljs/util";


@template(`<div>
    <div id="counter">{{name | upper}}</div>
</div>`)
export default class extends Component {
    @reactive
    name = 'ujjwal';

}