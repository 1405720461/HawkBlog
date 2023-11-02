export const getLocal = (token: string) => {
  return localStorage.getItem(token);
};

export const setLocal = (token: string, value: string) => {
  localStorage.setItem(token, value);
};
