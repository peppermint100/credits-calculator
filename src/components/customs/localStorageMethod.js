export const addToLocalStorage = (key, value) => {
  // loadLS by LS key
  let loadedData = JSON.parse(localStorage.getItem(key));
  console.log(loadedData);
  // create new Storage with new item
  loadedData.push(value);
  // save in LS
  localStorage.setItem(key, JSON.stringify(loadedData));
};

export const setLocalStorage = (key, callback) => {
  let currentData = JSON.parse(localStorage.getItem(key));
  callback(currentData);
};
