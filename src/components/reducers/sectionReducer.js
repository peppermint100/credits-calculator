export const sectionReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_SECTION":
      return [...state, action.data];
    case "REMOVE_SECTION":
      let newSections = state.filter(section => section.id !== action.id);
      return newSections;
    default:
      return [...state];
  }
};
