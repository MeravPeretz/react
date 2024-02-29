import { useState } from "react";
import { Input } from "./Input.component";

export const  Customer = (props) => {
    const cust=props.cust;
    const update=props.update;

    const divStyle = {
        backgroundColor: 'aquamarine',
        padding: '10px',
        margin:'10px',
        borderRadius: '5px',
        height: '200px',
        width: '200px'
      };
    return <div className="customer" style={divStyle}>
        <p>id:{cust.id}</p>
       <div >name:
            <Input inputType="text" value={cust.firstName} id={cust.id} update={update} field="firstName" type="customer"></Input>
            <Input inputType="text" value={cust.lastName} id={cust.id} update={update} field="lastName" type="customer"></Input>
        </div>
        <div>telephon:
            <Input inputType="text" value={cust.telephon} id={cust.id} update={update} field="telephon" type="customer"></Input>
        </div>
        <div>adress:
            <Input inputType="text" value={cust.adress} id={cust.id} update={update} field="adress" type="customer"></Input>
        </div>
    </div>
}
export default Customer;