const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

export async function fetchGitHubData(username) {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    headers: {
      Authorization: `Bearer ${GITHUB_API_KEY}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return await response.json();
}
