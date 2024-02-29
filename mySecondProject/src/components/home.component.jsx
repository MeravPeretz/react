import { workers } from '../data/workers'
import {customers}from '../data/customers'
import { ShowList } from './showList.component'
import { useState, useEffect } from 'react'

export const Home=(props)=>{

    //workers=true,customers=false
    const [show,setShow]=useState(true);
    const [workerstoShow,setWorkersToShow]=useState(workers)
    const [customersToShow,setCustomersToShow]=useState(customers)

  //   useEffect(() => {
  //     if (show) {
  //         setWorkersToShow([...workers]);
  //     } else {
  //         setCustomersToShow([...customers]);
  //     }
  // }, [show]);

    const updateList = (value,field, type,id) => {
      debugger;
      let itemToUpdate = (type==="worker"? workerstoShow.find(w => w.id === id):
                                           customersToShow.find(c => c.id === id))
      itemToUpdate[field]=value;
      type==="worker"? setWorkersToShow([...workerstoShow]):setCustomersToShow([...customersToShow]);

  }
  return (
    <>
      <h1>our shop</h1>
      <button onClick={()=>setShow(!show)}>show {show? "customers":"workers"}</button>
      {show? <ShowList list={workerstoShow} type="worker" updateList={updateList}/> :
             <ShowList list={customersToShow} type="customer"  updateList={updateList}/>}
    </>
  )
}
export default Home;

