import { useState } from "react";
import { fetchUserData } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [repositories, setRepositories ] = useState("");
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // prevent page reload
    if (
      username.trim() === "" &&
      location.trim() === "" &&
      repositories.trim() === ""
    ) {
      setError("Please provide at least one search criteria");
      return;
    }

    setLoading(true);
    setError(null);
    setResults([]);

    try {
      const data = await fetchUserData({ username, location, repositories });
      if (data.length === 0) {
        setError("No users found with these criteria");
      } else {
        setResults(data);
      }
    } catch (err) {
      setError(`Looks like we can’t find the user - ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username..."
        />
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="Enter a location"
        />
        <input
          type="text"
          value={repositories}
          onChange={(e) => setRepositories(e.target.value)}
          placeholder="Enter number of Repos"
        />
        <button type="submit">Search</button>
      </form>

      {/* Conditional Rendering */}
      <div>
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        {results.length > 0 && (
          <ul>
            {results.map((user) => (
              <li
                key={user.id}
              >
                <img
                  src={user.avatar_url}
                  alt={user.login}
                />
                <div>
                  <h2>{user.login}</h2>
                  <a
                    href={user.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Search;