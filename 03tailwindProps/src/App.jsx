import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username : "BIjay",
    age : 21
  }
  let myArray = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 test-black p-4 rounded-xl mb-4'>Hello Devs!!</h1>  

      <Card channel="Code With Bijay" someObj = {myObj} someArray = {myArray}/>
      <Card />
    </>
  )
}

export default App
