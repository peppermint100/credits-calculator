export const courseReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_COURSE":
      return [action.data, ...state];
    case "REMOVE_COURSE":
      let newCourses = state.filter(course => course.id !== action.id);
      return newCourses;
    default:
      return [...state];
  }
};
