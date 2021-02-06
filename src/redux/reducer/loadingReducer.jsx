const initialState = {
  isLoading: false,
};

const Loading = (state = initialState, action) => {
  switch (action.type) {
    case "Hien":
        console.log("hien");
      state.isLoading = true;
      break;
    case "An":
        console.log("an");
      state.isLoading = false;
      break;

      break;
    default:
      break;
  }
  return { ...state };
};
export default Loading;
