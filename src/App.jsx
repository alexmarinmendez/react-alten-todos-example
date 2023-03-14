import { employee } from './utils/mock';
import './App.css'
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([
    {text: "Aprender ReactJs", status: false},
    {text: "Aprender ReactJs 2", status: false},
    {text: "Aprender ReactJs 3", status: false},
  ])
  const [todo, setTodo] = useState("")

  const addTodo = () => {
    // todos.push({text: todo, status: false})
    setTodos([
      {text: todo, status: false},
      ...todos
    ])
  }

  const changeHandler = (e) => {
    setTodo(e.target.value)
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Alten Employees</h5>
        <input type="text" value={todo} onChange={changeHandler} /><button onClick={addTodo}>Add</button>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {
              todos.map((item, index) => (
                <tr key={index}>
                  <td>{item.text}</td>
                  <td>{item.status.toString()}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    </div>
  )
}

export default App
