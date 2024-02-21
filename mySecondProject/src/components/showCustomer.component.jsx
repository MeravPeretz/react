import { useState } from "react";

export const  Customer = (props) => {
    const cust=props.cust;
    const update=props.update;

    const [firstName,setFirstName]=useState(cust.firstName)
    const [lastName,setLastName]=useState(cust.lastName)
    const [enableSetname,setEnableSetName]=useState(false)
    const handleNameClick = () => {
        setEnableSetName(true);
    };

    const [telephon,setTelephon]=useState(cust.telephon)
    const [enableSetTelephon,setEnableSetTelephon]=useState(false)
    const handleTelephonClick=()=>{
        setEnableSetTelephon(true);
    };
    
    const [adress,setAdress]=useState(cust.adress)
    const [enableSetAdress,setEnableSetAdress]=useState(false)
    const handleAdressClick=()=>{
        setEnableSetAdress(true);
    };

    const divStyle = {
        backgroundColor: 'aquamarine',
        padding: '10px',
        margin:'10px',
        borderRadius: '5px',
        height: '200px',
        width: '200px'
      };
    return <div class="customer" style={divStyle}>
        <p>id:{cust.id}</p>
       <div onClick={handleNameClick}>name:
          {enableSetname? 
            <><input type="text" value={firstName}  
                onBlur={() =>{ setEnableSetName(false), cust.firstName=firstName,update(cust,"customer")}}
                onChange={(e) => setFirstName(e.target.value)}></input>
              <input type="text" value={lastName}  
                onBlur={() => {setEnableSetName(false),cust.lastName=lastName,update(cust,"customer")}}
                onChange={(e) => {setLastName(e.target.value)}}></input>
            </>:
            <span>{cust.firstName}  {cust.lastName}</span>}
        </div>

        <div onClick={handleTelephonClick}>telephon:
            {enableSetTelephon?
                <input type="text" value={telephon}  
                onBlur={() => {setEnableSetTelephon(false),cust.telephon=telephon,update(cust,"customer")}}
                onChange={(e) => {setTelephon(e.target.value)}}></input>
                :<span> {cust.telephon}</span>}</div>

        <div onClick={handleAdressClick}>adress:
            {enableSetAdress?
                <input type="text" value={adress}  
                onBlur={() => {setEnableSetAdress(false),cust.adress=adress,update(cust,"customer")}}
                onChange={(e) => {setAdress(e.target.value)}}></input>
                :<span> {adress}</span>}</div>
    </div>
}
export default Customer;