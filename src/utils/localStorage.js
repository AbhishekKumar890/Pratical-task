export const getLocalStorageItem = (key, fallbackValue) => {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallbackValue;
  } catch {
    return fallbackValue;
  }
};

export const setLocalStorageItem = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Ignore storage write failures to avoid breaking UI updates.
  }
};
