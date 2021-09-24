const initialState = {
  users: [],
  // positions: []
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [action.payload, ...state.users], //is this right? why need to spread?
      };
  }
};

// skipped types
