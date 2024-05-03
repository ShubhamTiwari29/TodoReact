import React, { useState } from 'react'


const Navbar = () => {

const [todo, setTodo] = useState("")
const [todos, setTodos] = useState([])

const handleChange = (e)=>{
  setTodo(e.target.value)
  console.log(todos);
}

  const handleComplete = ()=>{

  };

  const handleDelete = ()=>{

  };

   const handleAdd = ()=>{
setTodos([...todos, {todo, isCompleted: false}]);
setTodo("");
  };

  return (
    <div>
     <div className='container bg-violet-300 my-4 p-5 rounded-xl mx-auto min-h-screen'>
      <div>
        <div className="addtodo">
          <h1 className='text-xl my-4 font-bold '>Add a todo</h1>
          <input onChange={handleChange} value={todo} type="text" className='p-2 w-1/4 '  />
          <button onClick={handleAdd} className='mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold'>Add</button>
         
        </div>
        <h1 className='text-xl font-bold my-4'>Your Todos</h1>

        <div className="todos bg-violet-400  ">
         { todos.map((item , index)=>{
          return<div key={index}  className="todo flex justify-between p-2 my-1 bg-blue-500">
            <div  className="text p-2 ">{item.todo}</div>

<div className='Buttons'>
<button onClick={handleComplete} className='mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold'>Complete</button>
<button onClick={handleDelete}  className='mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold'>Delete</button>
</div>

          </div>
          }) }
        </div>
      </div>
    </div>
    </div>
  )
}

export default Navbar
