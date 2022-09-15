import { Footer } from 'antd/lib/layout/layout';
import React from 'react'
import { Link, Outlet } from 'react-router-dom';
import { Menu } from 'antd';

function BasicLayout() {
  return (
    <div>
      {/* <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link ></li>
          <li><Link to="/help">Help</Link ></li>
          <li><Link to="/404">404</Link ></li>
        </ul>
      </nav> */}
      <Menu mode="horizontal" defaultSelectedKeys={["home"]}>
        <Menu.Item key="home">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="about">
          <Link to="/about">About</Link>
          </Menu.Item>
        <Menu.Item key="help">
          <Link to="/help">Help</Link>
        </Menu.Item>
      </Menu>
      <div className='content'>
        <Outlet />
      </div>
      <Footer>Created By Christian</Footer>
    </div>
  )
}

export default BasicLayout
