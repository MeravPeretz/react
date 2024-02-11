
export const Worker = (props) => {
    const worker=props.worker;

    return <div class="worker" >
        <p>id: {worker.id}</p>
        <p>name: {worker.name} {worker.lastName}</p>
        <p>telephon: {worker.telephon}</p>
        <p>adress: {worker.adress}</p>
        <p>hours: {worker.hours}</p>
        <p>salary: {worker.salary}</p>
    </div>
}
export default Worker;