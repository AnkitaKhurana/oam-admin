const key = 'admin_token';

export const getToken = () => {
  const storedToken = localStorage.getItem(key);
  return storedToken;
};

export const setToken = (token) => {
  localStorage.setItem(key, token);
};

export const clearToken = () => {
  localStorage.removeItem(key);
};
