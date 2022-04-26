import { useState, useEffect } from "react"
import { FaTimes } from 'react-icons/fa'
import { FaRegCircle } from 'react-icons/fa'
import User from "./User";

function App() {
  const [todos, setTodos] = useState([]);
  const [filteredTodos, setfilteredTodos] = useState(todos);
  const [value, setvalue] = useState('')
  const [show, setShow] = useState(false);
  const [userId, setuserId] = useState();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos').then(response => response.json())
      .then(result => setTodos(result))
    return () => {
      return
    }
  }, [])


  const handleValue = e => {
    setvalue(e.target.value);
    let value = e.target.value;
    if (value === 'done') {
      setfilteredTodos(todos.filter(todo => todo.completed));
    } else if (value === 'undone') {
      setfilteredTodos(todos.filter(todo => todo.completed === false));
    } else if (value === 'all') {
      setfilteredTodos(todos)
    }
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id))
    setfilteredTodos(todos.filter(todo => todo.id !== id))
    console.log(id)
  }

  const toggleTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    setfilteredTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    console.log(id)
  }

  const viewDetails = (id) => {
    setuserId(id);
    setShow(true);
    console.log(id)
  }

  const hide = () => {
    setShow(false);
  }


  return (

    <main style={{ marginLeft: '', width: '50%' }}>

      {(!show) ?

        <div>
          <select onChange={handleValue}>
            <option value="all">Filter by status</option>
            <option value="done">Done</option>
            <option value="undone">Undone</option>
          </select>
          <h1>ToDos</h1>
          {(todos.length > 0) ?
            <div>
              {(value === '') ?
                todos.map(todo => {
                  return (
                    <div key={todo.id} onClick={() => viewDetails(todo.id)}>
                      <div onClick={(e) => e.stopPropagation()}>
                        <FaTimes onClick={() => deleteTodo(todo.id)} />
                        <FaRegCircle onClick={() => toggleTodo(todo.id)} />
                      </div>
                      <p>ToDo title: {todo.title}</p>
                      <p>Completed: {(todo.completed) ? 'Yes' : 'No'}</p>
                    </div>
                  )
                })
                :
                filteredTodos.map(todo => {
                  return (
                    <div key={todo.id} onClick={() => viewDetails(todo.id)}>
                      <div onClick={(e) => e.stopPropagation()}>
                        <FaTimes onClick={() => deleteTodo(todo.id)} />
                        <FaRegCircle onClick={() => toggleTodo(todo.id)} />
                      </div>
                      <p>ToDo title: {todo.title}</p>
                      <p>Completed: {(todo.completed) ? 'Yes' : 'No'}</p>
                    </div>
                  )
                })
              }
            </div>
            : 'No todos, please reload the page to fetch new todos'}

        </div> : <User userId={userId} hide={() => hide()} />}

    </main >
  )
}

export default App