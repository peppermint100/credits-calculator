export const dragData = data => {
  return {
    type: "DRAG_DATA",
    data
  };
};

export const dropData = () => {
  return {
    type: "DROP_DATA"
  };
};
