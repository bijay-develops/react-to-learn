import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
    <h1>Hi! What's up? </h1>
    </div>
  )
}


const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)

const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me --> GOOGLE'
)


ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactElement
  
)
