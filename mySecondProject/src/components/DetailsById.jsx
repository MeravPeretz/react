import { useParams } from 'react-router-dom';
export const DetailsById = (props) => {
    const type=props.type
    const params = useParams();
    return (
    <div>details {params.id}</div>);
}
export default DetailsById;
