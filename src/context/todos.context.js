//todos
//all methods to interact with todos

import React, { createContext } from "react";
import useTodoState from "../hooks/useTodoState";

const defaultTodos = [
  { id: 1, task: "Mow the lawn", completed: false },
  { id: 2, task: "Play with dog", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todosStuff = useTodoState(defaultTodos);
  return (
    <TodosContext.Provider value={todosStuff}>
      {props.children}
    </TodosContext.Provider>
  );
}
