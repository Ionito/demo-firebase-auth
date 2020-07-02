import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Provider as SessionProvider } from "./session/context";
import { Provider as TodoProvider } from "./todo/context";
import * as serviceWorker from "./serviceWorker";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <SessionProvider>
      <TodoProvider>
        <App />
      </TodoProvider>
    </SessionProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
