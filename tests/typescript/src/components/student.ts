import { Component, Template, Prop, Taj, Filter, Reactive } from "taj";
import { IStore, Getter, Mutation } from "taj-store";

class BaseComponent extends Component {
    $store;
}

@Template(`
<div>
    {{name}}
    <button on:click="changeName">ChangeName</button>
    <button on:click="()=>{flag=false}">Hide Name</button>
    <table>
      <tr #for(student in students)>
       <td>{{student.name}}</td>
       <td on:click="addStudent"><button>AddStudent</button></td>
      </tr>
    </table>
 
</div>
`)
export default class extends BaseComponent {

    constructor() {
        super();
        this.onRendered(() => {
            console.log("store", this.$store);
        })
    }

    // @Getter("students")
    // students

    @Reactive
    students = [{
        name: 'ujjwa'
    }]

    @Reactive
    flag = true;

    addStudent() {
        this.students.push({
            name: 'ujjwal1'
        })
        this.students.splice(1,1,{name:'ujjwalsss'});
        console.log("students", this.students)
    }

    // addStudent() {
    //     this.$store.commit("addStudent", {
    //         name: 'ujjwal1'
    //     })
    // }

    changeName() {
        this.changeNameInStore("ujjwal kr gupta");
    }

    @Mutation("changeName")
    changeNameInStore;

    @Getter("name")
    name;
}

