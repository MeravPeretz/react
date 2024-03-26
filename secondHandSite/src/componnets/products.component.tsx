import { useContext, useEffect } from "react"
import { ProductContext } from "../context/product.context"
import { Product } from "./product.component";
import { UserContext } from "../context/user.context";
import { useNavigate } from 'react-router-dom';

export const Products=()=>{
    const productContext=useContext(ProductContext);
    const userContext=useContext(UserContext);
    const navigate = useNavigate()
    useEffect(() => {
        if (!userContext.currentUser) {
          navigate('/sign-in')
        }
      }, []);
    return (
        <div>
            <h1>our products</h1>
            <ul>
                {productContext.prods.map(prod=>
                <li key={prod.id}>
                    <Product data={prod}/>
                </li>)}
            </ul>
        </div>
    )
}