import React from "react";
import Todo from "./Todo";

export default function ContentContainer({
  todos,
  filteredTodos,
  searchField,
  deleteTodo,
  toggleTodo,
  viewDetails,
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
          {filteredTodos
            .filter((todo) => todo.title.includes(searchField.toLowerCase()))
            .map((todo) => {
              return (
                <Todo
                  todo={todo}
                  deleteTodo={deleteTodo}
                  toggleTodo={toggleTodo}
                  viewDetails={viewDetails}
                />
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
