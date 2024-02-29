import { useState } from "react";
import{Input} from "./Input.component"
export const Worker = (props) => {
    const worker=props.worker;
    const update=props.update;

    const divStyle = {
        backgroundColor: 'rgb(231, 158, 187)',
        padding: '10px',
        margin:'10px',
        borderRadius: '5px',
        width: '200px'
      };
    return <div className="worker" style={divStyle}>
        <p>id: {worker.id}</p>
        <div >name:
            <Input inputType="text" value={worker.firstName} id={worker.id} update={update} field="firstName" type="worker"></Input>
            <Input inputType="text" value={worker.lastName} id={worker.id} update={update} field="lastName" type="worker"></Input>
        </div>
        <div>telephon:
            <Input inputType="text" value={worker.telephon} id={worker.id} update={update} field="telephon" type="worker"></Input>
        </div>
        <div>hours:
            <Input inputType="number" value={worker.hours} id={worker.id} update={update} field="hours" type="worker"></Input>
        </div>     
        <div>salary
            <Input inputType="number" value={worker.salary} id={worker.id} update={update} field="salary" type="worker"></Input>
        </div>
    </div>
}
export default Worker;

