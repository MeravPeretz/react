import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import { SignUp } from './componnets/sign-up.component.tsx';
import { UserContext, userContext } from './context/user.context'
import { ProductContext, productContext } from './context/product.context.tsx'
import './index.css'
import { User } from './interfaces/user.interface';
import { SignIn } from './componnets/sign-in.component.tsx';
import { Products } from './componnets/products.component.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children:[{
      path: 'sign-up',
      Component: SignUp,
    }, {
      path: 'sign-in',
      Component: SignIn,
    }, {
      path: 'products',
      Component: Products,
    }]
  }
]);


const user_context: userContext = {
  currentUser: undefined,
  setCurrentUser(user: User) {
    this.currentUser = user;
  },
  users: [],
  addUser(user:User){
    debugger;
    this.users.push(user);
  }
}

const product_context:productContext={
  prods:[
    {
      id:0,
      name:"guitar",
      description:"very good guitar",
      ownerId:0,
      category:"music"
    },{
      id:1,
      name:"shirt",
      description:"blue shirt",
      ownerId:1,
      category:"clothes"
    },
  ]
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContext.Provider value={user_context}>
      <ProductContext.Provider value={product_context}>
        <RouterProvider router={router} />
      </ProductContext.Provider>
    </UserContext.Provider> 
  </React.StrictMode>,
)
