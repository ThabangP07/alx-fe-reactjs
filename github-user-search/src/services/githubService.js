import axios from "axios";

const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchUserData({ username, location, minRepos }) {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(
      `https://api.github.com/search/users?q=${encodeURIComponent(
        query.trim()
      )}`,
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
