import { useState } from 'react'

// import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <div className='container bg-violet-300 my-4 p-5 rounded-xl mx-auto'>
      <div>
        <div className="addtodo">
          <h1 className='text-lg'>Add a todo</h1>
          <input type="text"  />
          <button>Add</button>
         
        </div>
        <h1 className='text-xl font-bold'>Your Todos</h1>
        <div className="todos">
          <div className="todo">

          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
