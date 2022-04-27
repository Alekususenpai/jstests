import { useState, useEffect } from "react"
import ContentContainer from "./components/ContentContainer";
import Dropdown from "./components/Dropdown";
import SearchBar from "./components/SearchBar";
import User from "./components/User";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setfilteredTodos] = useState([]);
  const [value, setvalue] = useState('')
  const [show, setShow] = useState(false);
  const [userId, setuserId] = useState();
  const [searchField, setsearchField] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
      .then(result => setTodos(result))
    return () => {
      return
    }
  }, [])


  const onSearchChange = (e) => {
    setsearchField(e.target.value);
  };

  const handleValue = e => {
    setvalue(e.target.value);
    let value = e.target.value;
    if (value === 'done') {
      setfilteredTodos(todos.filter(todo => todo.completed))
    } else if (value === 'undone') {
      setfilteredTodos(todos.filter(todo => todo.completed === false))
    } else if (value === 'all') {
      setfilteredTodos(todos.filter(todo => todo)
      )
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    setfilteredTodos(todos.filter(todo => todo.id !== id))
    console.log('deleted', id)
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setfilteredTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    console.log('toggled', id)
  }

  const viewDetails = (id) => {
    setuserId(id);
    setShow(true);
    console.log('viewed', id)
  }

  const hide = () => {
    setShow(false);
  }

  const searchFilteredTodos = filteredTodos.filter(todo =>
    todo.title.includes(searchField.toLowerCase()));


  return (

    <main>

      {(!show) ?

        <div>
          <SearchBar onSearchChange={(e) => onSearchChange(e)} />
          <Dropdown handleValue={handleValue} />

          <ContentContainer value={value} searchFilteredTodos={searchFilteredTodos}
            todos={todos}
            searchField={searchField}
            viewDetails={viewDetails}
            deleteTodo={deleteTodo}
            toggleTodo={toggleTodo} />

        </div> : <User userId={userId} hide={() => hide()} />}

    </main >
  )
}

export default App