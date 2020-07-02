import React from "react";
import Todos from "./todo/screens/Todos";
import { useUser, useLogout } from "./session/hooks";

function App() {
  const user = useUser();
  const logout = useLogout();

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={logout}>logOut</button>
        <span
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bienvienido {user.displayName} - {user.email}
        </span>
      </header>
      <main>
        <Todos />
      </main>
    </div>
  );
}

export default App;
