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

export const addSection = data => {
  return {
    type: "ADD_SECTION",
    data
  };
};

export const removeSection = id => {
  return {
    type: "REMOVE_SECTION",
    id
  };
};
