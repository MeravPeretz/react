import { useState } from "react";

export const Worker = (props) => {
    const worker=props.worker;
    const update=props.update;

    const [firstName,setFirstName]=useState(worker.firstName)
    const [lastName,setLastName]=useState(worker.lastName)
    const [enableSetname,setEnableSetName]=useState(false)
    const handleNameClick = () => {
        setEnableSetName(true);
    };
    const [telephon,setTelephon]=useState(worker.telephon)
    const [enableSetTelephon,setEnableSetTelephon]=useState(false)
    const handleTelephonClick=()=>{
        setEnableSetTelephon(true);
    };

    const [hours,setHours]=useState(worker.hours)
    const [enableSetHours,setEnableSetHours]=useState(false)
    const handleHoursClick=()=>{
        setEnableSetHours(true);
    };

    const [salary,setSalary]=useState(worker.salary)
    const [enableSetSalary,setEnableSetSalary]=useState(false)
    const handleSalaryClick=()=>{
        setEnableSetSalary(true);
    };
    const divStyle = {
        backgroundColor: 'rgb(231, 158, 187)',
        padding: '10px',
        margin:'10px',
        borderRadius: '5px',
        width: '200px'
      };
    return <div class="worker" style={divStyle}>
        <p>id: {worker.id}</p>

        { <div onClick={handleNameClick}>name:
          {enableSetname? 
            <><input type="text" value={firstName}  
                onBlur={() =>{ setEnableSetName(false), worker.firstName=firstName,update(worker,"worker")}}
                onChange={(e) => setFirstName(e.target.value)}></input>
              <input type="text" value={lastName}  
                onBlur={() => {setEnableSetName(false),worker.lastName=lastName,update(worker,"worker")}}
                onChange={(e) => {setLastName(e.target.value)}}></input>
            </>:
            <span>{worker.firstName}  {worker.lastName}</span>}
        </div>}

        <div onClick={handleTelephonClick}>telephon:
            {enableSetTelephon?
                <input type="text" value={telephon}  
                onBlur={() => {setEnableSetTelephon(false),worker.telephon=telephon,update(worker,"worker")}}
                onChange={(e) => {setTelephon(e.target.value)}}></input>
                :<span> {worker.telephon}</span>}</div>

        <div onClick={handleHoursClick}>hours:
            {enableSetHours?
                <input type="text" value={hours}  
                onBlur={() => {setEnableSetHours(false),worker.hours=hours,update(worker,"worker")}}
                onChange={(e) => {setHours(e.target.value)}}></input>
                :<span> {worker.hours}</span>}</div>
                
        <div onClick={handleSalaryClick}>salary:
            {enableSetSalary?
                <input type="text" value={salary}  
                onBlur={() => {setEnableSetSalary(false),worker.salary=salary,update(worker,"worker")}}
                onChange={(e) => {setSalary(e.target.value)}}></input>
                :<span> {worker.salary}</span>}</div>
    </div>
}
export default Worker;

