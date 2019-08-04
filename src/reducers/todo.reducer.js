import uuid from "uuid/v4";

const reducer = (state, action) => {
  switch (action.type) {
    // {type: "ADD", task: "Walk the Dog"}
    case "ADD":
      return [...state, { id: uuid(), task: action.task, completed: false }];
    // {type: "REMOVE", id: 1234}
    case "REMOVE":
      return state.filter(todo => todo.id !== action.id);
    // {type: "TOGGLE", id: 1234}
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );
    // {type: "EDIT", id: 1234, newTask: "Walk the Dog"}
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, task: action.newTask } : todo
      );
    default:
      return state;
  }
};

export default reducer;
