import Student from "../src/components/student";
import { expect } from "chai";
import { mount, setInputValue } from "mahal-test-utils";

describe('Student', function () {

    let component: Student;

    before(async () => {
        component = await mount<Student>(Student);
    });

    it('check rows', function () {
        const table = component.find('table');
        const rows = table.querySelectorAll('tr');
        expect(rows).length(1);
        const cols = rows[0].querySelectorAll('td');
        expect(cols).length(2);
        expect(cols[0].innerHTML).equal(component.students[0].name);
    });

    it('click on cells add student', async function () {
        const table = component.find('table');
        let rows = table.querySelectorAll('tr');
        const button = rows[0].querySelector('td button') as HTMLElement;
        button.click();

        await component.waitFor('update');

        rows = table.querySelectorAll('tr');
        expect(rows).length(2);

        const cols = rows[1].querySelectorAll('td');
        expect(cols).length(2);
        expect(cols[0].innerHTML).equal(component.students[1].name);
    });

    it('click on input add student', async function () {
        const input = component.find('.input-container input');
        setInputValue(input, 'hello world');
        const button = component.find('.input-container button') as HTMLElement;
        button.click();

        await component.waitFor('update');

        const rows = component.find('table').querySelectorAll('tr');
        expect(rows).length(3);

        const cols = rows[2].querySelectorAll('td');
        expect(cols).length(2);
        expect(cols[0].innerHTML).equal(component.students[2].name);
    });
});

