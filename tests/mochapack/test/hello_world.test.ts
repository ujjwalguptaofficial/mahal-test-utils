import HelloWorld from "../src/components/hello_world";
import { app } from "../src/index";
import { expect } from "chai";
import sinon from "sinon";

describe('HelloWorld', function () {

    let component;

    before(function () {
        component = (app as any).$initiate(HelloWorld);
    });

    it('inner html should equal ujjwal gupta', function () {
        expect(component.$html).equal("ujjwal gupta");
    });

    it('click', function () {
        let sandboxInstance = sinon.createSandbox();
        sandboxInstance.stub(window, "alert");
        component.click();
        sandboxInstance.assert.calledOnceWithExactly(window.alert as any, "Hello World");
        sandboxInstance.restore();
    });
});

