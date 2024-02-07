import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Comp1} from './components/first.component'
import{Comp2 }from './components/second.component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Comp1/>
      <Comp2/>
    </>
  )
}

export default App
