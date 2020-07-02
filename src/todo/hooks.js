import React from "react";

import TodoContext from "./context";

export function useTodos() {
  const {
    state: { todos },
    actions: { add, remove, resolve },
  } = React.useContext(TodoContext);

  return [
    todos.map((todo) => ({
      ...todo,
      remove: () => remove(todo.id),
      resolve: () =>
        resolve(todo.id, {
          status: todo.status === "pending" ? "resolved" : "pending",
          text: todo.text,
        }),
    })),
    add,
  ];
}
