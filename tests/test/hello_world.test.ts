import HelloWorld from "../src/components/hello_world";
import { app } from "../src/index";
import { expect } from "chai";
import sinon from "sinon";
import { mount } from "@mahaljs/test-utils";
import { nextTick } from "mahal";

describe('HelloWorld', function () {

    let component: HelloWorld;

    before(async () => {
        component = await mount<HelloWorld>(HelloWorld);
    });

    it('inner html should equal ujjwal gupta', function () {
        expect(component.element.innerHTML).equal("ujjwal gupta");
    });

    it('click', async function () {
        let sandboxInstance = sinon.createSandbox();
        sandboxInstance.stub(window, "alert");
        component.element.click();
        await nextTick();
        sandboxInstance.assert.calledOnceWithExactly(window.alert as any, "Hello World");
        sandboxInstance.restore();
    });
});

