import { useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoList() {

    const { state, dispatch } = useContext(TodoContext);

    return (
        <ul className="todo-list">
            {state.map((todo) => (
                <li key={todo.id} className={`todo-item ${todo.done ? "done" : ""}`}>
                    <span
                        onClick={() =>
                            dispatch({
                                type: "TOGGLE_TODO",
                                payload: todo.id
                            })
                        }
                    >
                        {todo.text}
                    </span>

                    <button
                        onClick={() =>
                            dispatch({
                                type: "DELETE_TODO",
                                payload: todo.id
                            })
                        }
                    >
                        ✕
                    </button>
                </li>
            ))}
        </ul>
    );

}