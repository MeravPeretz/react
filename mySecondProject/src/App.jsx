import { useEffect, useState } from 'react'
import {Home }from './components/home.component'
import {getUser}from './data/user'
import './App.css'
import { Route,useNavigate } from 'react-router-dom'
function App() {

  const navigate = useNavigate();
  useEffect(() => {
    const user = getUser();
    if (!user) {
      navigate('/login')
    }
  }, [])
  
  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
