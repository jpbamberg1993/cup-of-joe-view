export default (state = {}, action) => {
  switch (action.type) {
    case "GET_COFFEE":
      return {
        result: [],
      };
    default:
      return state;
  }
};
