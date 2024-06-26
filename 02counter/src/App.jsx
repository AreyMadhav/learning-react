import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(15)

  //let counter = 15

  const addValue = () => {
    setCounter(counter + 1)
  }

  const remValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>React {counter}</h1>
      <h2>Counter Value: {counter} </h2>
      <button onClick={addValue}>Add Value</button> {}
      <button onClick={remValue}>Remove Value</button>
      <p>footer: {counter} </p>
    </>
  )
}

export default App
