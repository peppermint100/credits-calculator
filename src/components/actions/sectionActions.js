export const addSection = data => {
  return {
    type: "ADD_SECTION",
    data
  };
};

export const removeSection = () => {
  return {
    type: "REMOVE_SECTION"
  };
};
