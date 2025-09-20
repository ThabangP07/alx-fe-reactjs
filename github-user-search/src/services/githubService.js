import axios from "axios";

const BASE_URL = "https://api.github.com/search/users";
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUserData({ username, location, repositories }) {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (repositories) query += `repos:>=${repositories} `;

    const response = await axios.get(
      `${BASE_URL}?q=${encodeURIComponent(query.trim())}`,
      {
        headers: GITHUB_API_KEY
          ? { Authorization: `Bearer ${GITHUB_API_KEY}` }
          : {},
      }
    );

    // GitHub returns { items: [...] } for search
    return response.data.items;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error("Network error: Could not fetch data");
    }
  }
}
