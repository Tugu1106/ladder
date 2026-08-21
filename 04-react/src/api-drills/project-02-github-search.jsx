// PROJECT 2 — GitHub Profile Search  (the fun one)
// Type a GitHub username, hit search, and show that person's real profile.
// No API key needed — GitHub's user API is public.
//
// API:  https://api.github.com/users/USERNAME
//       returns: { login, name, avatar_url, bio, public_repos, followers, ... }
//       try it in your browser:  https://api.github.com/users/torvalds
//
// BUILD IT:
//   State:   username (input text),  user (result, null),  loading, error
//   Search:  a form or button → fetch `https://api.github.com/users/${username}`
//            - if res.ok is false (user not found = 404) → set an error
//            - else setUser(data)
//   Render:  loading spinner, error message, or the profile:
//            an <img src={user.avatar_url} width={100} />, user.name, user.bio,
//            user.public_repos, user.followers
//
// TWO ways to trigger the fetch (pick one):
//   A) a Search button that fetches on click, OR
//   B) useEffect with [username] that re-fetches as you type (add a debounce later)
//   Start with A (button) — it's simpler.
//
// This is a REAL app: type "torvalds", see Linus Torvalds' actual GitHub profile,
// avatar and all — pulled live from GitHub. The thing you dreamed about. 🚀

import { useState } from "react";

function ShowUserCard({ user }) {
  return (
    <div className="project2UserCard">
      <img src={user.avatar_url} width={100} alt={user.name} />
      <ul>
        <li>Repos: {user.public_repos}</li>
        <li>Followers: {user.followers}</li>
        <li>{user.name}</li>
        <li>{user.bio}</li>
      </ul>
    </div>
  );
}

function Drill() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");

  async function searchHandler() {
    setLoading(true); // setup: start loading
    setError(null); // setup: clear any old error
    try {
      const res = await fetch(`https://api.github.com/users/${username}`); // ← the fetch
      if (!res.ok) throw new Error("User not found");
      const data = await res.json();
      setUser(data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false); // cleanup: stop loading, success OR fail
    }
  }

  return (
    <div className="project2Container">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={searchHandler}>Search</button>
      {user && <ShowUserCard user={user} />}
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
    </div>
  );

  // username input state; user/loading/error states
  // a search button (or form) that fetches the GitHub user
  // show the avatar + name + bio + repo/follower counts
}

export default Drill;
