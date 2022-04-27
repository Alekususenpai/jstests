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
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {value === ""
            ? todos
                .filter((todo) =>
                  todo.title.includes(searchField.toLowerCase())
                )
                .map((todo) => {
                  return (
                    <div
                      className="todo-div"
                      key={todo.id}
                      onClick={() => viewDetails(todo.id)}
                    >
                      <div
                        className="todo-div-btn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaTimes
                          className="todo-btn"
                          onClick={() => deleteTodo(todo.id)}
                        />
                        <FaRegCircle
                          style={
                            !todo.completed
                              ? { color: "red" }
                              : { color: "green" }
                          }
                          className="todo-btn"
                          onClick={() => toggleTodo(todo.id)}
                        />
                      </div>
                      <p>ToDo title: {todo.title}</p>
                      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                    </div>
                  );
                })
            : searchFilteredTodos.map((todo) => {
                return (
                  <div
                    className="todo-div"
                    key={todo.id}
                    onClick={() => viewDetails(todo.id)}
                  >
                    <div
                      className="todo-div-btn"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaTimes
                        className="todo-btn"
                        onClick={() => deleteTodo(todo.id)}
                      />
                      <FaRegCircle
                        style={
                          !todo.completed
                            ? { color: "red" }
                            : { color: "green" }
                        }
                        className="todo-btn"
                        onClick={() => toggleTodo(todo.id)}
                      />
                    </div>
                    <p>ToDo title: {todo.title}</p>
                    <p>Completed: {todo.completed ? "Yes" : "No"}</p>
                  </div>
                );
              })}
        </div>
      ) : (
        <p style={{ fontWeight: "bold" }}>
          No todos left, please reload the page to fetch new todos!
        </p>
      )}
    </div>
  );
}
