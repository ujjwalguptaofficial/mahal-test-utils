import Counter from "../src/components/counter";
import { app } from "../src/index";
import { expect } from "chai";
import { initiate } from "@mahaljs/test-utils";

describe('Counter', function () {

    let component: Counter;

    before(async function () {
        component = await initiate(Counter);
    });

    it('check initial value of counter', function () {
        expect(component.counter).equal(0);
        console.log("counter", component.find('#counter'))
        expect(component.find('#counter').innerHTML).equal('0');
    });

    it('increment 5 times', async function () {
        console.log("element", component.element);
        const btn = component.find("#btnIncrement");
        for (let i = 0; i < 5; i++) {
            btn.click();
        }
        await component.waitFor('update');
        expect(component.counter).equal(5);
    });
});

