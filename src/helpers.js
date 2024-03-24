//local storage
export const fetchData = (key) => {
  return localStorage.getItem(key);
};

export const deleteItem = (key) => {
  localStorage.removeItem(key);
};
