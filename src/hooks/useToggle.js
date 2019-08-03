import { useState } from "react";

function useToggle(initialValue = false) {
  // Reserves piece of state
  const [state, setState] = useState(initialValue);
  // Toggles the state
  const toggle = () => {
    setState(!state);
  };
  return [state, toggle];
}

export default useToggle;
