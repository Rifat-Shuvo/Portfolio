import React from 'react';
import Sidebar from './Sidebar.Jsx';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  const links =  <>
  <NavLink to={'/'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><li className='px-5'>Home</li></NavLink>
  <NavLink to={'/about'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')} ><li className='px-5'>About</li></NavLink>
  <NavLink to={'/project'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><li className='px-5'>Project</li></NavLink>
  <NavLink to={'/contact'} className={({ isActive }) => (isActive ? 'text-blue-500' : '')}><li className='px-5'>Contact</li></NavLink>
</>
  return (
    <div>
      <div className="navbar bg-blue-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-2xl text-blue-500 font-bold">RIFAT SHUVO</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl">
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          {/* <Sidebar></Sidebar> */}
        </div>
      </div>
    </div>
  );
};

export default Nav;