
export const  Customer = (props) => {
    const cust=props.cust;
    return <div class="customer">
        <p>id:{cust.id}</p>
        <p>name:{cust.name} {cust.lastName}</p>
        <p>telephon:{cust.telephon}</p>
        <p>adress:{cust.adress}</p>
    </div>
}
export default Customer;