import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import "./BasicLayout.css"

function BasicLayout() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link ></li>
          <li><Link to="/help">Help</Link ></li>
          <li><Link to="/404">404</Link ></li>
        </ul>
      </nav>
      <div className='content'>
        <Outlet />
      </div>
    </div>
  )
}

export default BasicLayout
