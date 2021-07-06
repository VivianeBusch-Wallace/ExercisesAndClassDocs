import React from "react";
import { add, display } from "./helpers";

// you can also export the element directly >>
// export default class App extends React.Component {}
class App extends React.Component {
  constructor(props) {
    // super makes it functional, without nothing in browser
    super(props);
    this.state = {
      arr: [],
      isLoggedIn: false,
      data: { name: "Hadi", age: 31 },
    };
    this.sum = function () {
      console.log("Hi, I am a function built in const");
    };
    // this.sum=()=>{}
    this.handleSub = this.handleSub.bind(this);
  }
  // Es6 Function, does not need to be bound, is already bound under the hood
  print = () =>
    console.log("Hi I am Es6 function and I don't need to be bound");
  // old Function needs to be bound (line 18)
  handleSub() {
    console.log("Hi I need to be bound");
  }

  render() {
    // console.log cannot be outside a method
    this.newUser = () => console.log("Hi I am inside render ");

    this.newUser(); //calling the function

    return (
      <div>
        {this.print()}
        {this.sum()}
        {this.handleSub()}
        {display("Hi, I like React")}
        <h1>
          Hi I am a class co {this.state.data.name}, {add(3, 4)}
        </h1>
      </div>
    );
  }
}

export default App;
