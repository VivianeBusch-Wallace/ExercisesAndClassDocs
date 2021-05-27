import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import ToDos from "./components/ToDos";

function App() {
  const [list, setList] = useState([]);
  // this is here because we will need to pass this information to several children, doing it from child to parent is impossible
  return (
    <React.Fragment className="App">
      <Header />

      <Footer />
    </React.Fragment>
  );
}

export default App;
