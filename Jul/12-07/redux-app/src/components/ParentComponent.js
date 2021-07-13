import React, { Fragment } from "react";
// step 6.1
import { connect } from "react-redux";
import { changeName } from "../actions";
import ChildComponent from "./ChildComponent";

// the following functions are a must and the order is important

const ParentComponent = (props) => {
  const { store, changeName } = props;
  return (
    <Fragment>
      <h2>ParentComponent</h2>
      {store.userName}
      <button
        onClick={() => {
          changeName("Zain");
        }}
      >
        Change Name
      </button>
      <ChildComponent store={store} />
      {/* << here we pass store the old way just for demonstration purposes */}
    </Fragment>
  );
};

// mapStateProps will 99% of the time look like this >>
// the following will always look the same in each component except for the different actions
// in mapDispatchToProps and the component in the export >>
const mapStateProps = (store) => {
  return {
    store,
  };
};

const mapDispatchToProps = { changeName }; // << any actions I want here

// export default ParentComponent;
export default connect(mapStateProps, mapDispatchToProps)(ParentComponent);
// << instead of default ParentComponent we have connect, which connects
