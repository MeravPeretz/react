import { createContext, useContext } from "react";
import { Product } from "../interfaces/product.interface";

export type productContext={
    prods:Product[],
}
export const ProductContext=createContext<productContext>({});