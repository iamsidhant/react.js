import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "Sidhant",
    age: 24
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-3 rounded-xl mb-3'>Testing Tailwind</h1>
      <Card username="chaiaurreact" btnText="Click me"/>
      <Card username="sidhant"/>
    </>
  )
}

export default App
