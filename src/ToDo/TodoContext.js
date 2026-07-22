import { createContext, useReducer } from "react";

export const TodoContext = createContext();

const initialState = [];

function todoReducer(state, action) {
  switch (action.type) {

    case "ADD_TODO":

        return [
            ...state,
            {
                id: Date.now(),
                text: action.payload,
                done: false
            }
        ];

        case "TOGGLE_TODO":

    return state.map((todo) =>

        todo.id === action.payload
            ? { ...todo, done: !todo.done }
            : todo

    );

    case "DELETE_TODO":

            return state.filter((todo) => todo.id !== action.payload);

    default:
        return state;
    }
}

export function TodoProvider({ children }) {

  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}