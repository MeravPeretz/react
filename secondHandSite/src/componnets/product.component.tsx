import { Product as p} from "../interfaces/product.interface";

export const Product=(props: { data: p; })=>{
    const prod=props.data;

    const divStyle = {
        backgroundColor: 'aquamarine',
        padding: '10px',
        margin:'10px',
        borderRadius: '5px',
        // height: '200px',
        // width: '200px'
      };
    return(
        <div style={divStyle}>
            <div>category: {prod.category}</div>
            <h3>{prod.name}</h3>
            <div>description: {prod.description}</div>
            <div>owner: {prod.ownerId}</div>
        </div>
    ) 
}