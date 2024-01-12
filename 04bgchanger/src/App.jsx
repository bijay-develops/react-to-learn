import { useState } from 'react'
import './App.css'

function App() {
  const [color,setcolor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200'
    style= {{backgroundColor: color}}
    >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>

          <button
          onClick={() =>setcolor("red")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl' 
          style={{backgroundColor: "red"}}
          >Red
          </button>
          <button 
          onClick={() =>setcolor("orange")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl' 
          style={{backgroundColor: "orange"}}
          >orange
          </button>
          <button
          onClick={() =>setcolor("yellow")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl' 
          style={{backgroundColor: "yellow"}}
          >yellow
          </button>
          <button 
          onClick={() =>setcolor("green")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl' 
          style={{backgroundColor: "green"}}
          >green
          </button>
          <button 
          onClick={() =>setcolor("blue")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl' 
          style={{backgroundColor: "blue"}}
          >blue
          </button>
          <button 
          onClick={() =>setcolor("indigo")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl' 
          style={{backgroundColor: "indigo"}}
          >indigo
          </button>
          <button 
          onClick={() =>setcolor("violet")} 
          className='outline-none px-4 py-1 rounded-full text-white shadow-xl' 
          style={{backgroundColor: "violet"}}
          >violet
          </button>

        </div>
      </div>
    </div>
    
  
  )
}

export default App
