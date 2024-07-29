// Function to store data in localStorage
export const storeData = (key, value) => {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.log("Error storing value: ", error);
  }
};

// Function to retrieve data from localStorage
export const getData = (key) => {
  try {
    const value = localStorage.getItem(key);
    return value;
  } catch (error) {
    console.log("Error retrieving value: ", error);
  }
};
