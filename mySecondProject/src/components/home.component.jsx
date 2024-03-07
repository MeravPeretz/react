
import { ShowList } from './showList.component'
import { useState, useEffect } from 'react'
import { Outlet ,Link} from 'react-router-dom'
//import { useParams } from 'react-router-dom'

export const Home=()=>{

    //workers=true,customers=false
    const [show,setShow]=useState("");

  //   useEffect(() => {
  //     if (show) {
  //         setWorkersToShow([...workers]);
  //     } else {
  //         setCustomersToShow([...customers]);
  //     }
  // }, [show]);

  return (
    <>
      <h1>our shop</h1>
      <button onClick={()=>setShow("worker")}><Link to="worker">show workers</Link> </button>
      <button onClick={()=>setShow("customer")}><Link to="customer">show customers</Link> </button>
      {show === "worker" ? <Outlet type="worker" /> : <Outlet type="customer" />}
     </>        
  )
}
export default Home;

