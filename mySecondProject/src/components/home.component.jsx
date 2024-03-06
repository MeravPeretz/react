import { workers } from '../data/workers'
import {customers}from '../data/customers'
import { ShowList } from './showList.component'
import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
//import { useParams } from 'react-router-dom'

export const Home=()=>{

    //workers=true,customers=false
    const [show,setShow]=useState("");
    const [workerstoShow,setWorkersToShow]=useState(workers)
    const [customersToShow,setCustomersToShow]=useState(customers)
    const [listToOut,setList]=useState(workers);
  //   useEffect(() => {
  //     if (show) {
  //         setWorkersToShow([...workers]);
  //     } else {
  //         setCustomersToShow([...customers]);
  //     }
  // }, [show]);

    const updateListFunc = (value,field, type,id) => {
      debugger;
      let itemToUpdate = (type==="worker"? workerstoShow.find(w => w.id === id):
                                           customersToShow.find(c => c.id === id))
      itemToUpdate[field]=value;
      type==="worker"? setWorkersToShow([...workerstoShow]):setCustomersToShow([...customersToShow]);

  }
  return (
    <>
      <h1>our shop</h1>
      <button onClick={()=>{setShow("worker");setList(workerstoShow) }}><link to="worker">show workers</link> </button>
      <button onClick={()=>{setShow("customer");setList(customersToShow) }}><link to="customer">show customers</link> </button>
      <Outlet list={listToOut} type={show} updateList={updateListFunc}/>
     </>        
  )
}
export default Home;

