import axios from "axios";

// your API base URL
const BASE_URL = "https://jsonplaceholder.typicode.com"; 

// Fetch Data from API 
export const fetchTasks = () => {
  return axios.get(`${BASE_URL}/todos?_limit=20`);
};