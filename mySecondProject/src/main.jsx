import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import './index.css'
import { ShowList } from './components/showList.component.jsx';
import {Home }from './components/home.component'
import {Login}from './components/login.component.jsx'
import DetailsById from './components/DetailsById.jsx';

const WorkersRoute = <ShowList type="worker" />

const CustomersRoute = <ShowList type="customer" />
const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[{
        path: 'worker',
        element: WorkersRoute,
    },{
        path: 'worker/:id',
        element: <DetailsById type="worker"></DetailsById>  
    },{
      path: 'customer',
      element:CustomersRoute,
    },{
      path: 'customer/:id',
      element: <DetailsById type="customer"></DetailsById>
    }]}
, {   
    path: "/login",
    Component: Login,
}]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // קומפוננטה שמנהלת את כל הניווט, מקבלת את אובייקט ההגדרות כפרמטר
  <RouterProvider router={router} />
  // </React.StrictMode>,
)

