import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/header.comonent';
import './App.css'
import { Counter } from './components/counter.component';
import { Link, Outlet } from 'react-router-dom';

function App() {

  // return React.createElement('div', {
  //   id: 'main',
  //   className: 'container',
  // }, [
  //   React.createElement('h1', {}, 'Main Header'),
  //   React.createElement('h2', {}, 'Second Header'),
  //   React.createElement('ul', {}, [
  //     React.createElement('li', {}, 'apple'),
  //     React.createElement('li', {}, 'grapes'),
  //     React.createElement('li', {}, 'bannana'),
  //   ]),
  // ])
  return (
    // חייב לחזור מקומפוננטה אלמנט אחד. אם יש צורך בכמה, ניתן לעטוף אותם בסימן פותח וסוגר
    <>
    {/* שילוב של קומפוננטה של ריאקט */}
      <Header />
      <ul className="menu">
        {/* יצירת קישור */}
        <li> <Link>Home</Link>  </li>
        {/* <li><a href="/blogs">Blogs</a></li> */}
        <li> <Link to="blogs">Blogs</Link> </li>
      </ul>
      {/* התוכן של הניווט יכנס לכאן */}
      <Outlet />
      {/* <Counter /> */}
    </>
  )
}

export default App
