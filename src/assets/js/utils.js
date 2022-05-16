export const imagePathPrefix = "http://image.tmdb.org/t/p/w500/";

export const addToStorage = (label, data) => {
  console.log(data);
  const stringfiedData = JSON.stringify(data);

  localStorage.setItem(label, stringfiedData);
};

export const getFromStorage = (label) => {
  const data = localStorage.getItem(label);

  return JSON.parse(data);
};
