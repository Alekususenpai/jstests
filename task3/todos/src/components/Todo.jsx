import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Todo({ todo, toggleTodo, deleteTodo }) {
  return (
    <Link
      to={`/user/${todo.id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div className="todo-div" key={todo.id}>
        <div className="todo-div-btn" onClick={(e) => e.preventDefault()}>
          <FaTimes className="todo-btn" onClick={() => deleteTodo(todo.id)} />
          <FaRegCircle
            style={!todo.completed ? { color: "red" } : { color: "green" }}
            className="todo-btn"
            onClick={() => toggleTodo(todo.id)}
          />
        </div>
        <p>ToDo title: {todo.title}</p>
        <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      </div>
    </Link>
  );
}
