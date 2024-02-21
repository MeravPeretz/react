import { workers } from '../data/workers'
import {customers}from '../data/customers'
import { ShowList } from './showList.component'
import { useState } from 'react'

export const Home=(props)=>{

    //workers=true,customers=false
    const [show,setShow]=useState(true);
    const [workerstoShow,setWorkersToShow]=useState(workers)
    const [customersToShow,setustomersToShow]=useState(customers)
    const updateList = (item, type) => {
      let itemToUpdate = (type==="worker"? workerstoShow.find(w => w.id === item.id):
                                           customersToShow.find(c => c.id === item.id))
      itemToUpdate = item;
      type==="worker"? setWorkersToShow([...workerstoShow]):setustomersToShow([...customersToShow]);

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

