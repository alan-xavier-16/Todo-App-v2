import React, { useContext } from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";
import { DispatchContext } from "./context/todos.context";

function EditTodoForm({ id, task, toggleIsEditting }) {
  const dispatch = useContext(DispatchContext);
  const [value, handleChange, reset] = useInputState(task);
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        dispatch({ type: "EDIT", newTask: value, id: id });
        reset();
        toggleIsEditting();
      }}
      style={{ marginLeft: "1rem", width: "50%" }}
    >
      <TextField
        margin="normal"
        value={value}
        onChange={handleChange}
        style={{ width: "100%" }}
        autoFocus
      />
    </form>
  );
}

export default EditTodoForm;
