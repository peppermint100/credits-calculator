export const addToLocalStorage = (key, value) => {
  // loadLS by LS key
  let loadedData = JSON.parse(localStorage.getItem(key));
  // create new Storage with new item
  loadedData.push(value);
  // save in LS
  localStorage.setItem(key, JSON.stringify(loadedData));
  //refresh
};

export const setLocalStorage = (key, callback) => {
  let currentData = JSON.parse(localStorage.getItem(key));
  callback(currentData);
};

export const deleteFromLocalStorage = (key, id, callback) => {
  let currentData = JSON.parse(localStorage.getItem(key));
  const clearedData = currentData.filter(data => data.id !== id);
  localStorage.setItem(key, JSON.stringify(clearedData));
  callback();
};
