import { useParams } from 'react-router-dom';
import React, { useContext } from 'react';
import DataContext from './DataContext';
export const DetailsById = (props) => {
    const type=props.type
    const params = useParams();
    debugger;
    const { data } = useContext(DataContext);
    return (
    <div>details {params.id}data{data}</div>);
}
export default DetailsById;
