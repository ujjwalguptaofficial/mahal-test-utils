import HelloWorld from "../src/components/hello_world";
import { app } from "../src/index";
import { expect } from "chai";

describe('HelloWorld', function () {

    let component;

    before(function () {
        component = (app as any).$initiate(HelloWorld);
    });

    it('inner html should equal ujjwal gupta', function () {
        expect(component.$html).equal("ujjwal gupta");
    });

    // it('click', function () {
    //     component.click();
    //     expect(component.$html).equal("ujjwal gupta");
    // });
});

