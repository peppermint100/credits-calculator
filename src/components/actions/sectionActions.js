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
