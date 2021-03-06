// import React from "react"; // when you don't import Component, then you need React.Component in the class component
import React, { Component } from "react";

import List from "./components/List";
//import Data from "./data.json";
// how to use data.json >>
// const fileData = Data.map((obj) => {
//   let { id, name, address } = obj;
//   address = address || "Not there"; // if address is not empty it will show address, if it is empty it will show "not there"
//   return (
//     <h4 key={id}>
//       Hey I'm {name} and I live in {address}
//     </h4>
//   );
// });

// putting inline styling into an object >>
const headerStyle = {
  backgroundColor: "gray",
  color: "white",
};

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1 style={{ backgroundColor: "orange" }}>Hi I am React</h1>
        {
          //fileData
        }
        <h2 style={headerStyle}>My ToDo List</h2>
        <List />
      </React.Fragment>
    );
  }
}

// Notes
// source: https://djoech.medium.com/functional-vs-class-components-in-react-231e3fbd7108
// the source is old, but it still gives interesting information >>
// there are some benefits you get by using functional components in React:
// Functional component are much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks
// You end up with less code
// They help you to use best practices. It will get easier to separate container and presentational components because you need to think more about your component’s state if you don’t have access to setState() in your component
// The React team mentioned that there may be a performance boost for functional component in future React versions
