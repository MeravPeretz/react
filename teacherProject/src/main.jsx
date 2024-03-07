import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import { BlogDetails } from './components/blog-details.component.jsx';
import { Blogs } from './components/blogs.components.jsx';
import { Home } from './components/home.component.jsx';
import { SignIn } from './components/signin.component.jsx';
import './index.css'

// אובייקט עם הגדרות ניווט
const router = createBrowserRouter([
  {
    path: "/",
    // element: <div>Hello world!</div>,
    Component: App,
    children: [{
      path: '',
      Component: Home,
    }, {
      path: 'blogs',
      Component: Blogs,
      children: [{
        path: ':{id}',
        Component: BlogDetails
      }]
    }]
  }, {
    path: '/signin',
    Component: SignIn,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // קומפוננטה שמנהלת את כל הניווט, מקבלת את אובייקט ההגדרות כפרמטר
  <RouterProvider router={router} />
  // </React.StrictMode>,
)



 https://reactrouter.com/en/main/start/tutorial
