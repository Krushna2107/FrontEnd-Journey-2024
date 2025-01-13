export default (state, action) => {
    switch (action.type) {
      case "ADD_POLL":
        return {
          ...state,
          polls: [action.payload, ...state.polls],
        };
      default:
        return state;
    }
  };
  