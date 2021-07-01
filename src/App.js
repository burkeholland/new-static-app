import { useEffect, useState } from "react";
import Message from "./components/Message";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    getUser();
  }, []);

  async function getUser() {
    const response = await fetch(".auth/me");
    const responseJson = await response.json();
    setUser(responseJson.clientPrincipal);
  }

  return (
    <div className="App">
      <div className="container main">
        <nav>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                {user ? (
                  <a href="/.auth/logout" className="button is-light">
                    Logout
                  </a>
                ) : (
                  <a href="/.auth/login/github" className="button is-light">
                    Login
                  </a>
                )}
              </div>
            </div>
          </div>
        </nav>
        <div>
          <img
            src="https://i.imgur.com/xf6bG3Z.png"
            className="App-logo"
            alt="logo"
          />
          <Message user={user}></Message>
        </div>
      </div>
    </div>
  );
}

export default App;
