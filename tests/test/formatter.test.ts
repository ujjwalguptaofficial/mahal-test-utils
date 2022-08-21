import Formatter from "../src/components/formatter";
import { app } from "../src/index";
import { expect } from "chai";
import { initiate,getMount } from "@mahaljs/test-utils";

describe('Formatter', function () {

    let component: Formatter;

    before(async function () {
        const mount = getMount(app);
        component = await mount(Formatter);
    });

    it('check formatted value', function () {
        expect(component.name).equal('ujjwal');
        expect(component.find('#counter').innerHTML).equal('UJJWAL');
    });
});

