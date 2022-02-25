import { Component, Template, Reactive } from "mahal";

class BaseComponent extends Component {
}

@Template(`
<div>
    {{name}}
    <button on:click="changeName">ChangeName</button>
    <button on:click="()=>{flag=false}">Hide Name</button>
    <table>
      <tr :for(student in students)>
       <td>{{student.name}}</td>
       <td on:click="addStudent"><button>Add Student</button></td>
      </tr>
    </table>
 
</div>
`)
export default class extends BaseComponent {

    @Reactive
    name = 'ujjwal';

    constructor() {
        super();
    }

    @Reactive
    students = [{
        name: 'ujjwa'
    }]

    @Reactive
    flag = true;

    addStudent() {
        this.students.push({
            name: 'ujjwal1'
        });
    }

    changeName() {
        this.name = "ujjwal kr gupta";
    }
}

