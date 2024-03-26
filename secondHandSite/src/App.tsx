import { useContext, useState } from 'react'
import './App.css'
import { UserContext } from './context/user.context'
import { Link, Outlet } from 'react-router-dom'

function App() {

  const { currentUser } = useContext(UserContext)

  return (
    <>
    <span>{currentUser?.name}</span>
     <Link to={'/sign-in'}> sign-in </Link> |
     <Link to={'/sign-up'}> sign-up </Link> |
     <Link to={'/products'}> products </Link> 
     <Outlet/>
    </>
  )
}

export default App
