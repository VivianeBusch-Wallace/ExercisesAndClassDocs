//import React, { useState, Fragment } from "react";
// we add Fragment here if we wanna 
import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDos from "./components/ToDos";

function App() {
  const [list, setList] = useState([]);
  // << this is here because we will need to pass this information to several children, doing it from child to parent is impossible
  // initialize your hook state with an empty array, the state called list and the function setList, which updates the state
  return (
    <React.Fragment className="App">
      <Header />
      <List />
      <ToDos />
      <Footer />
    </React.Fragment>
  );
}

export default App;
