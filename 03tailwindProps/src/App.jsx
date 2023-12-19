import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {

  let myObj = {
    username : "BIjay",
    age : 21
  }
  let myArray = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 test-black p-4 rounded-xl mb-4'>Hello Devs!!</h1>  

      {/* <Card channel="Code With Bijay" someObj = {myObj} someArray = {myArray}/> */}
      <Card username = "Bijay B.K." btnText="Visit ME!" />
      <Card username = "Ashish B.K." btnText="Click Me!"/>
    </>
  )
}

export default App
