// you can have multiple reducers or just one, but just one is recommended

// step 2 - this is an all in one reducer function
const allReducers = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "CHANGE_NAME":
      return {
        ...state,
        userName: action.payload,
      };
    default:
      return state;
  }
};

export default allReducers;
