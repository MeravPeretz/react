import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { UserContext } from './context/user.context'

function App() {

  const { user } = useContext(UserContext)

  return (
    <>
     <h1>Hello { user?.firstName } { user?.lastName } </h1>
    </>
  )
}

export default App
