export const sectionReducer = (
  state = [{ id: 1505050, title: "software" }],
  action
) => {
  switch (action.type) {
    case "ADD_SECTION":
      return [...state, action.data];
    case "REMOVE_SECTION":
      let newSections = state.slice(1);
      return newSections;
    default:
      return [...state];
  }
};
