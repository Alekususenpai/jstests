import React from "react";
import { useState, useEffect } from "react";
import ContentContainer from "../components/ContentContainer";
import Dropdown from "../components/Dropdown";
import SearchBar from "../components/SearchBar";

export default function Homepage() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setfilteredTodos] = useState(todos);
  const [value, setvalue] = useState("all");
  const [searchField, setsearchField] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((result) => setTodos(result));
    console.log("rerendered");
    return () => {
      return;
    };
  }, []);

  const handleValue = (e) => {
    setvalue(e.target.value);
  };

  const onSearchChange = (e) => {
    setsearchField(e.target.value);
  };

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

  const deleteAll = () => {
    setTodos([]);
  };

  useEffect(() => {
    console.log("inside use effect");
    if (value === "done") {
      setfilteredTodos(todos.filter((todo) => todo.completed));
    } else if (value === "undone") {
      setfilteredTodos(todos.filter((todo) => todo.completed === false));
    } else if (value === "all") {
      setfilteredTodos(todos.filter((todo) => todo));
    }
    return () => {
      return;
    };
  }, [value, todos]);

  return (
    <div className="main-container">
      <div>
        <SearchBar
          onSearchChange={(e) => onSearchChange(e)}
          placeholder={"Search a ToDo"}
        />
        <Dropdown handleValue={handleValue} selectedValue={value} />
        <button
          onClick={deleteAll}
          style={{
            padding: "0.3em 1.5em",
            margin: "2em",
            float: "right",
            borderRadius: "0.5em",
          }}
        >
          Delete all
        </button>
        <ContentContainer
          filteredTodos={filteredTodos}
          todos={todos}
          searchField={searchField}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </div>
    </div>
  );
}
