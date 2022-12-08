import logo from './logo.svg';
import './App.css';

import React,{useState} from 'react'
import Child from './child.jsx'

function App() {
  const[input,setInput] = useState("")
  return (
    <div className="App">
      <h1>App Component</h1>
      <h3>User Input: {input}</h3>
      <input
      type="text" placeholder='This is cool' onChange={(e)=>setInput(e.target.value)}/>
      <Child userInput={input}/>
    </div>
  );
}

export default App;
