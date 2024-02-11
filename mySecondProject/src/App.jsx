import { useState } from 'react'
import './App.css'
import { workers } from './data/workers'
import {customers}from './data/customers'
import { ShowList } from './components/showList.component'
function App() {

  return (
    <>
      <h1>our shop</h1>
      <ShowList list={workers} type="worker"/>
      <ShowList list={customers} type="customer"/>
    </>
  )
}

export default App
