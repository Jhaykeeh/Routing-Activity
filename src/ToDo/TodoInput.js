import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoInput() {

  const [text, setText] = useState("");
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim() === "") {
        return;
    }

    dispatch({
        type: "ADD_TODO",
        payload: text
    });

    setText("");
  };

  return (
    <div className="todo-input-row">
      <input
        type="text"
        placeholder="Enter a todo..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}