import axios from "axios";

const BASE_URL = "https://api.github.com/users";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUserData(username) {
  try {
    const response = await axios.get(`${BASE_URL}/${username}`, {
      headers: GITHUB_API_KEY
        ? { Authorization: `Bearer ${GITHUB_API_KEY}` }
        : {},
    });

    return response.data;
  } catch (error) {
    // Handle errors
    if (error.response) {
      // GitHub API returned an error
      throw new Error(
        `Error ${error.response.status}: ${error.response.data.message}`
      );
    } else {
      throw new Error("Network error: Could not fetch data");
    }
  }
}