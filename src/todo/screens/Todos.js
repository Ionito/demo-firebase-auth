import React from "react";

import { useTodos } from "../hooks";

function Todos() {
  const [todos, addTodo] = useTodos();
  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(e.target.text.value);
    e.target.text.value = "";
  };

  return (
    <div>
      <form onSubmit={handleAdd}>
        <input type="text" name="text" />
        <button type="submit">Agregar</button>
      </form>
      <ul>
        {todos.map(({ id, text, status, remove, resolve }) => (
          <li key={id}>
            <span
              style={{
                textDecoration: status === "resolved" ? "line-through" : "none",
              }}
            >
              {text}
            </span>
            {status === "pending" && (
              <button onClick={resolve}>resuelto</button>
            )}
            {status === "resolved" && (
              <button onClick={resolve}>deshacer</button>
            )}
            <button onClick={remove}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todos;
