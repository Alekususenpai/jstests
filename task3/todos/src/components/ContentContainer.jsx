import React from "react";
import { FaTimes } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

export default function ContentContainer({
  value,
  todos,
  searchFilteredTodos,
  searchField,
  viewDetails,
  deleteTodo,
  toggleTodo,
}) {
  return (
    <div>
      <h1>ToDos</h1>
      {todos.length > 0 ? (
        <div>
          {value === ""
            ? todos
                .filter((todo) =>
                  todo.title.includes(searchField.toLowerCase())
                )
                .map((todo) => {
                  return (
                    <div key={todo.id} onClick={() => viewDetails(todo.id)}>
                      <div onClick={(e) => e.stopPropagation()}>
                        <FaTimes onClick={() => deleteTodo(todo.id)} />
                        <FaRegCircle onClick={() => toggleTodo(todo.id)} />
                      </div>
                      <p>ToDo title: {todo.title}</p>
                      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                    </div>
                  );
                })
            : searchFilteredTodos.map((todo) => {
                return (
                  <div key={todo.id} onClick={() => viewDetails(todo.id)}>
                    <div onClick={(e) => e.stopPropagation()}>
                      <FaTimes onClick={() => deleteTodo(todo.id)} />
                      <FaRegCircle onClick={() => toggleTodo(todo.id)} />
                    </div>
                    <p>ToDo title: {todo.title}</p>
                    <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                  </div>
                );
              })}
        </div>
      ) : (
        "No todos, please reload the page to fetch new todos"
      )}
    </div>
  );
}
