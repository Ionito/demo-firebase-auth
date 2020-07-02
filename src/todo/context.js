import React from "react";
import { useUser } from "../session/hooks";

import api from "./api";
import Loading from "./screens/Loading";

const TodoContext = React.createContext({});

const TodoProvider = ({ children }) => {
  const user = useUser();
  const [todos, setTodos] = React.useState([]);
  const [status, setStatus] = React.useState("pending");

  function add(text) {
    api.add(user.uid, { text, status: "pending" });
  }

  function remove(id) {
    api.remove(user.uid, id);
  }

  function resolve(id, status) {
    api.update(user.uid, id, status);
  }

  React.useEffect(() => {
    api.onChange(user.uid, (todos) => {
      setTodos(todos);
      setStatus("resolved");
    });
    return () => setStatus("pending");
  }, [user.uid]);

  if (status === "pending") return <Loading />;

  const state = { todos };
  const actions = { add, remove, resolve };
  return (
    <TodoContext.Provider value={{ state, actions }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoProvider as Provider, TodoContext as default };
