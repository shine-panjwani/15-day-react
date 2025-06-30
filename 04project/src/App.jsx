import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [username, setUsername] = useState("");
  const [debouncedUser, setDebouncedUser] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    async function printData() {
      const data = await fetch(`https://api.github.com/users/${debouncedUser}`);
      const response = await data.json();
      setData(response);
    }
    if(debouncedUser){
      printData();
    }
  }, [debouncedUser]);
  useEffect(() => {

    const time = setTimeout(() => {
      setDebouncedUser(username);
    }, 500);
    return () => clearTimeout(time);
  }, [username]);
  return (
    <>
      <label>Enter Your github username : </label>
      <br />
      <input
        type="text"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <h2>Debounced Value : {debouncedUser}</h2>
      {debouncedUser && data && <ul>
        <p>login : {data.login}</p>
        <p>Id : {data.id}</p>
        <p>Total repos : {data.public_repos}</p>
        </ul>}
    </>
  );
}

export default App;
