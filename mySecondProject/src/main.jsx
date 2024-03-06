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
import DetailsById from './components/DetailsById.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[{
      path: '',
      Component: Home,
      children:[{
        path: 'worker',
        Component: ShowList,
        children: [{
          path: ':id',
          Component: DetailsById
        }]
      },{
        path: 'customer',
        Component: ShowList,
        children: [{
          path: ':id',
          Component: DetailsById
        }]
      }]
    }]
}
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // קומפוננטה שמנהלת את כל הניווט, מקבלת את אובייקט ההגדרות כפרמטר
  <RouterProvider router={router} />
  // </React.StrictMode>,
)

