export const isTokenExpiring = (timeInMinutes = 5, tokenType = 'access') => {
  const storageKey = `${tokenType}TokenExpiresAt`;
  const expiresAt = localStorage.getItem(storageKey);

  if (!expiresAt) return true;

  const expirationTime = new Date(expiresAt).getTime();
  const currentTime = Date.now();
  const timeBuffer = timeInMinutes * 60 * 1000; // Convert minutes to milliseconds

  return expirationTime - currentTime < timeBuffer;
};

export const isAuthenticated = () => {
  return !isTokenExpiring(0, 'refresh');
};
