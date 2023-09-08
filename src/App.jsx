import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'




function App() {

  function handleClick() {
    alert("1st Button Clicked!")
  }

  const handleClick2 = () => {
    alert("2nd Button Clicked!")
  }

  const addFive = (num) => {
    alert(num + 5)
  }

  return (
    <>
      <h3>React Core Concepts Part-2</h3>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <Team></Team>

      <button onClick={handleClick}>Click Button 1</button>

      <button onClick={handleClick2}>Click Button 2</button>

      <button onClick={() => { alert("3rd Button Clicked!") }}>Click Button 3</button>

      <button onClick={() => { addFive(5) }}>Click Button 4</button>
    </>
  )
}

export default App
