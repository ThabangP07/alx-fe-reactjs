import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    if (username.trim() === "") return;

    // Call parent handler (or API) with username
    onSearch(username); //
    setUsername(""); // Clear input field
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username..."     
        />
      <button
        type="submit"
      >
        Search
      </button>
    </form>
  );
}

export default Search;