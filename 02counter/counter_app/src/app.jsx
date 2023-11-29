import { useState } from 'preact/hooks'
import './app.css'

export function App() {
  //let counter = 1

  let [counter, setCounter] = useState(1)

  //The counter ranges from 0 to 20 

  const addValue = () => {
    if (20>counter){
  counter = counter +1
  setCounter(counter)
}
  }

const removeValue = () => {
  if (0<counter){
  setCounter(counter -1)
}
  }

  return (
    <>
      <h1>React to Act...! </h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}
      >Increase Value {counter}</button>

      <br/>

      <button
      onClick={removeValue}
      >Decrease Value {counter}</button>
    </>
  )
}
