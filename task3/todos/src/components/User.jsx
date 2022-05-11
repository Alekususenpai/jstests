import { useState, useEffect } from "react";
import { FaRunning } from "react-icons/fa";
import { useParams, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";

export default function User() {
  const [userDetails, setuserDetails] = useState([]);
  const [todos, setTodos] = useState([]);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      .then((response) => response.json())
      .then((result) => setuserDetails(result));
    return () => {
      return;
    };
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setTodos(result));
    return () => {
      return;
    };
  }, []);

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    console.log("deleted", id);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log("toggled", id);
  };
  const data = Object.values(userDetails);
  const id = parseInt(params.id);

  return (
    <div style={{ padding: "1.5em", width: "70%", margin: "0 auto" }}>
      {Object.keys(data).length === 0 ? (
        <p style={{ fontWeight: "bolder" }}>
          User was in a hurry and forgot to leave personal info!{" "}
          <FaRunning style={{ fontSize: "2em" }} />
        </p>
      ) : (
        <div>
          <h2>User details:</h2>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: "solid 2px black",
              margin: "1em 0",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
            }}
          >
            <p style={{ fontSize: "1.7em" }}>
              {userDetails.name.replace(/[^A-Z]/g, "")}
            </p>
          </div>
          <p>Username: {userDetails.username}</p>
          <span>Address: </span>
          {data.map((info) => {
            return (
              <p style={{ display: "inline" }}>
                {info.street} {info.city}
              </p>
            );
          })}
          <p>
            Email: <a href={"https://www.google.com"}>{userDetails.email}</a>
          </p>
        </div>
      )}

      <button
        onClick={() => {
          navigate(-1);
        }}
        style={{
          padding: "0.3em 1.7em",
          margin: "2em 0",
          borderRadius: "0.5em",
          backgroundColor: "black",
          color: "wheat",
          cursor: "pointer",
        }}
      >
        Back
      </button>

      <h3
        style={{
          margin: "2em 0",
        }}
      >
        User related todos:
      </h3>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {todos
          .filter((todo) => todo.userId === id)
          .map((todo) => {
            return (
              <div className="todo-div" key={todo.id}>
                <div className="todo-div-btn">
                  <FaTimes
                    className="todo-btn"
                    onClick={() => deleteTodo(todo.id)}
                  />
                  <FaRegCircle
                    style={
                      !todo.completed ? { color: "red" } : { color: "green" }
                    }
                    className="todo-btn"
                    onClick={() => toggleTodo(todo.id)}
                  />
                </div>
                <p>UserId: {todo.userId}</p>
                <p>ToDo n. {todo.id}</p>
                <p>ToDo title: {todo.title}</p>
                <p>Completed: {todo.completed ? "Yes" : "No"}</p>
              </div>
            );
          })}
      </div>
    </div>
  );
}
