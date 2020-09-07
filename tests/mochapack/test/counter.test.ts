import Counter from "../src/components/counter";
import { app } from "../src/index";
import { expect } from "chai";

describe('Counter', function () {

    let component;

    before(function () {
        component = (app as any).$initiate(Counter);
    });

    it('check initial value of counter', function () {
        expect(component.counter).equal(0);
        console.log("counter", component.find('#counter'))
        expect(component.find('#counter').innerHTML).equal('0');
    });

    it('increment 5 times', function () {
        console.log("element", component.element);
        const btn = component.find("#btnIncrement");
        for (let i = 0; i < 5; i++) {
            btn.click();
        }
        expect(component.counter).equal(5);
    });
});

