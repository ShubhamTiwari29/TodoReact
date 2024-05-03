import { useState } from 'react'

// import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <div className='container bg-violet-300 my-4 p-5 rounded-xl mx-auto min-h-screen'>
      <div>
        <div className="addtodo">
          <h1 className='text-xl my-4 font-bold '>Add a todo</h1>
          <input type="text" className='p-2 w-1/4 '  />
          <button className='mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold'>Add</button>
         
        </div>
        <h1 className='text-xl font-bold my-4'>Your Todos</h1>
        <div className="todos bg-violet-400  ">
          <div className="todo flex justify-between p-2">
            <div className="text p-2">Buy Milk</div>

<div className='Buttons'>
<button className='mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold'>Comp</button>
<button className='mx-2 bg-blue-400 hover:bg-blue-600 p-2 text-white rounded-md font-semibold'>Del</button>
</div>
          </div>
        </div>
      </div>
    </div>
     
    </>
  )
}

export default App
