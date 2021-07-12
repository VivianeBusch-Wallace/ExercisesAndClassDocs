import React, { Fragment } from "react";
// step 6
import { connect } from "react-redux";
import { changeName } from "../actions";
import ChildComponent from "./ChildComponent";

const ParentComponent = (props) => {
  const { store, changeName } = props;
  return (
    <Fragment>
      <h1>ParentComponent</h1>
      <button
        onClick={() => {
          changeName("Zain");
        }}
      >
        Change Name
      </button>
      <ChildComponent />
    </Fragment>
  );
};

const mapStateProps = (store) => {
  return {
    store,
  };
};

const mapDispatchToProps = { changeName };

// export default ParentComponent;
export default connect(mapStateProps, mapDispatchToProps)(ParentComponent);
