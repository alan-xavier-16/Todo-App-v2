import useLocalStorageState from "./useLocalStorageState";
import uuid from "uuid/v4";

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

  const addTodo = newTodoText => {
    setTodos([...todos, { id: uuid(), task: newTodoText, completed: false }]);
  };
  const removeTodo = todoID => {
    const updatedTodos = todos.filter(todo => todo.id !== todoID);
    setTodos(updatedTodos);
  };
  const toggleTodo = todoID => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoID ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };
  const editTodo = (todoID, newTask) => {
    const updatedTodos = todos.map(todo =>
      todo.id === todoID ? { ...todo, task: newTask } : todo
    );
    setTodos(updatedTodos);
  };

  return {
    todos,
    addTodo: addTodo,
    removeTodo: removeTodo,
    toggleTodo: toggleTodo,
    editTodo: editTodo
  };
};
