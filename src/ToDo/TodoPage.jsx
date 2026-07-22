import { TodoProvider } from "./TodoContext";
import TodoInput from "./TodoInput";
import TodoList from "./TodoList";
import "./TodoStyle.css";

export default function TodoPage() {
  return (
    <TodoProvider>
      <div className="todo-page">
        <div className="todo-card">
          <div className="todo-header">
            <p className="todo-eyebrow">Daily Planner</p>
            <h2>Todo List</h2>
          </div>
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </TodoProvider>
  );
}