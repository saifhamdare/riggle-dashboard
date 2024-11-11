import axios from 'axios';
const BASE_URL='https://mocki.io/v1/'
// Example GET request function using Axios
// https://mocki.io/v1/d79a0398-90e3-49d4-ad45-c688ef5187ee
const fetchData = async (url) => {
  try {
    // Perform GET request
    const response = await axios.get(BASE_URL+url);
    // Return response data
    return response.data;
  } catch (error) {
    // Handle error
    console.error('Error fetching data:', error);
    throw error;  // Optional: you can throw an error to be caught elsewhere
  }
};

export default fetchData;
