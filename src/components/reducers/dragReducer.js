export const dragReducer = (state = 0, action) => {
  switch (action.type) {
    case "DRAG_DATA":
      return action.data;
    case "DROP_DATA":
      return 0;
    default:
      return 0;
  }
};
