import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';



const Navbar = () => {

  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  // const [checked, setChecked] = useState(false)

  const handleEdit = () => {

  };

  useEffect(() => {
    let todos = JSON.parse(localStorage.getItem("todos"))
    setTodos(todos)
  }, [])

  // this function is use to store data in local storage
  const saveToLs = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  // Handle change function is work if user input some value in input area
  const handleChange = (e) => {
    setTodo(e.target.value)
    console.log(todos);
  }

  // this function is workin if user click on the checkbox
  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos)

    saveToLs()

  };

  const handleDelete = (e, id) => {
    if (confirm("Are you want to delete your task")) {
      let newTodos = todos.filter(item => {
        return item.id !== id
      });

      setTodos(newTodos);
      saveToLs()
    }
  };

  const handleAdd = () => {
    if (todo == "") {
      alert("Insert Some task ")
    }
    else {
      setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);

      setTodo("");
      saveToLs();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div>
      <div className='container bg-violet-300 my-4 p-5 rounded-xl mx-auto min-h-screen'>
        <div>
          <div className="addtodo">
            <h1 className='text-xl my-4 font-bold '>Add a todo</h1>
            <input onChange={handleChange} onKeyDown={handleKeyPress} value={todo} type="text" className='p-2 w-1/4 ' />
            <button onClick={handleAdd} className='mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold'>Add</button>

          </div>
          <h1 className='text-xl font-bold my-4'>Your Todos</h1>

          <div className="todos bg-violet-400  ">
            {todos.length === 0 && <div>No todos Here</div>}
            {todos.map(item => {
              return <div key={item.id} className="todo flex justify-between p-2 my-1 bg-blue-500">
                <div className='flex'>
                  <input name={item.id} onChange={handleCheckbox} type="checkbox" value={item.isCompleted} id="" />
                  <div className={`text p-2 ${item.isCompleted ? "line-through " : ""}`}>{item.todo}</div>
                </div>
                <div className='Buttons'>
                  <button onClick={handleEdit} className="mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold ">Edit </button>
                  <button onClick={(e) => { handleDelete(e, item.id) }} className='mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold'>Delete</button>
                </div>

              </div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
