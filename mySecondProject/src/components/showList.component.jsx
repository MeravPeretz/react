import  Customer  from "./showCustomer.component";
import  Worker  from "./showWorker.component";

export const ShowList = (props) => {
    const list=props.list;
    const type=props.type;
    return <div>
        <h3>the {type==="customer"? 'customers':'workers'}:</h3>
        <ul>{
        type==="customer"? list.map(item=> <li key={item.id}><Customer cust={item}/></li>):
                         list.map(item=> <li key={item.id}><Worker worker={item}/></li>)}
        </ul>
    </div>
}