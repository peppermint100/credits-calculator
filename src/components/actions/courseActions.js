export const addCourse = data => {
  return {
    type: "ADD_COURSE",
    data
  };
};

export const removeCourse = id => {
  return {
    type: "REMOVE_COURSE",
    id
  };
};
