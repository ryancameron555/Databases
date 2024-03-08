/** @format */

// Function to fetch dog breed names
function fetchDogBreeds() {
  return fetch('https://dog.ceo/api//breeds/:breed_id/list/random/10')
    .then((response) => response.json())
    .then((data) => {
      // Extract and return the array of breed names
      return data.message;
    })
    .catch((error) => {
      console.error('Error fetching dog breed names:', error);
      throw error; // Rethrow the error to be handled by the caller
    });
}

// checked, completion receipt for exercise 4 

module.exports = {
  fetchDogBreeds, // Export the function to be used in other modules
};
