import React from 'react'
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx'
import { SignUp } from './componnets/signup.component';
import { userContext, UserContext } from './context/user.context'
import './index.css'
import { User } from './interfaces/user.interface';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
  }, {
    path: '/sign-up',
    Component: SignUp,
  }
]);


const user: userContext = { 
  user: undefined,
  setUser(user: User) {
    this.user = user;
  }
 }

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UserContext.Provider value={user}>
      <RouterProvider router={router} />
    </UserContext.Provider>
    
  </React.StrictMode>,
)
