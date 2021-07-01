import { useEffect, useState } from "react";

const Home = ({ user }) => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getMessage();
  }, []);

  async function getMessage() {
    const response = await fetch("api/message");
    const responseJson = await response.json();
    setMessage(responseJson.message);
  }

  return (
    <div>
      <span>
        {user ? (
          <div>
            <p>{user.userDetails}</p>
            <a className="App-link" href="/.auth/logout">
              Logout
            </a>
          </div>
        ) : (
          <a className="App-link" href="/.auth/login/twitter">
            Login
          </a>
        )}
      </span>
      <img
        src="https://i.imgur.com/xf6bG3Z.png"
        className="App-logo"
        alt="logo"
      />
      <h2>{message}</h2>
    </div>
  );
};

export default Home;
