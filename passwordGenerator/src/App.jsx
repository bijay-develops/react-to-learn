import { useState } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")



  return (
    <>
      <h1 className='text-4xl text-center text-black font-mono font-bold'>Password Generator</h1>
    </>
  )
}

export default App
