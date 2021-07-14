import { useEffect, useState } from "react";
import "./App.css";

// https://api.github.com/users/manubell

function App({ login }) {
  const [data, setData] = useState(null); // null to start with no state
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!login) return;
    setLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((Response) => Response.json())
      .then(setData)
      .then(() => setLoading(false))
      .catch(() => setError);
  }, [login]); // rerender when login changes

  if (loading) return <h1>Loading...</h1>;
  if (error) return <pre>{JSON.stringify(error, null, 2)})</pre>;
  if (!data) return null;

  return (
    <div>
      <h1>{data.login}</h1>
      <p>{data.id}</p>
      <img alt={data.login} src={data.avatar_url} />
    </div>
  );
}

export default App;
