import  Customer  from "./showCustomer.component";
import  Worker  from "./showWorker.component";

export const ShowList = (props) => {
    const list=props.list;
    const type=props.type;
    const updateList=props.updateList;
    const ulDisplay={
        display:'flex',
    }
    return <div>
        <h3>the {type==="customer"? 'customers':'workers'}:</h3>
        <ul style={ulDisplay}>{
        type==="customer"? list.map(item=> <li key={item.id}><Customer cust={item} update={updateList}/></li>):
                         list.map(item=> <li key={item.id}><Worker worker={item} update={updateList}/></li>)}
        </ul>
    </div>
}