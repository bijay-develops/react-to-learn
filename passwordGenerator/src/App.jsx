import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {  
  // Assuming you have state variables like length, numberAllowed, charAllowed, and setPassword
  // State variables and their setters
  const [length, setLength] = useState(8) // Set your default length value
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")


  // Password generator function
  const passwordGenerator = useCallback(() => {  // useCallback memorizes the function and stores as cache
          let pass = '';
          let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

          // Include numbers and special characters if allowed
          if (numberAllowed) str += '0123456789';
          if (charAllowed) str += '!@#$%^&*()+-={}[]:<>.?/';

          for (let i = 1; i <= length; i++) {
            // Generate a random index within the string length
            let char = Math.floor(Math.random() * str.length);
            // Append the selected character to the password
            pass += str.charAt(char);
          }

          // Set the generated password to state
          setPassword(pass);
        }, [length, numberAllowed, charAllowed, setPassword]);

  // Call the password generator when the component mounts or when dependencies change
  useEffect(() => {
            passwordGenerator();
          }, [length, numberAllowed, charAllowed, passwordGenerator]);

  //For copy button 
  const passwordRef = useRef(null) //For the selection of selection and range selection method
          const copyPasswordToClipboard = useCallback(() => {
            passwordRef.current?.select();   //For selecting light color 
            passwordRef.current?.setSelectionRange(0,8); //For Range of Selection 
            window.navigator.clipboard.writeText(password)
          },[password]);


  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-black-400 bg-gray-300 text-center'>Password Generator
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-0 my-8 text-black-400 bg-white'>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input  // Password generation box 
          type="text" 
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={passwordRef}
          />
          <button //For copy button only 
          onClick = {copyPasswordToClipboard}
          className='text-black bg-blue-400 shrink-0 outline-none px-3 py-0.5'>Copy</button> 
        </div>  
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            ,<input  // for range of the password length 
            type="range" 
            min={4}
            max={30}
            value={length}
            className='cursor-pointer'
            onChange={(e) =>{setLength(e.target.value)}}
            /> 
            <label //Viewing thw client, the length of the password
            >Length:{length}</label> 
          </div>
          <div className='flex items-center gap-x-1'>
            ,<input  //For the numbers input and the checkbox
            type="checkbox" 
            defaultChecked={numberAllowed}
            id='numberInput'
            value={length}
            className='cursor-pointer'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            />
            <label>Numbers: {setNumberAllowed}</label> 
          </div>
          <div className='flex items-center gap-x-1'>
            ,<input  //For the characters input and Checkbox 
            type="checkbox" 
            defaultChecked={charAllowed}
            id='characterInput'
            className='cursor-pointer'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
            />
            <label>Characters: {setCharAllowed}</label> 
          </div>
        </div>
    </div>

    </>
  )
}

export default App
