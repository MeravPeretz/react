import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import  Customer  from "./showCustomer.component";
import  Worker  from "./showWorker.component";

import { workers } from '../data/workers'
import {customers}from '../data/customers'

export const ShowList = (props) => {
    const type=props.type;
  //  const[workerstoShow,setWorkersToShow]=useState(workers)
   // const [customersToShow,setCustomersToShow]=useState(customers)
   const [list,setList]=
   type==="customer"?
     useState(customers):
     useState(workers)

    const updateListFunc = (value,field,id) => {
        let itemToUpdate = list.find(i => i.id === id)                                
        itemToUpdate[field]=value;
         setList([...list])
    }
    const ulDisplay={
        display:'flex',
    }
    return (<div>
        <h3>the {type==="customer"? 'customers':'workers'}:</h3>
        <ul style={ulDisplay}>{
        type==="customer"? list.map(item=> <li key={item.id}><Link to={":"+item.id}><Customer cust={item} update={updateListFunc}/></Link></li>):
                         list.map(item=> <li key={item.id}><Link to={":"+item.id}><Worker worker={item} update={updateListFunc}/></Link></li>)}
        </ul>
        <Outlet/>
    </div>)
}