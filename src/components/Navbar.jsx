import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userimg from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';



const Navbar = () => {
  const {user}= use(AuthContext);

  const links = <>

    <NavLink to="/"><li className='m-2 btn'>Home</li></NavLink>
    <NavLink to="profile"><li className='m-2 btn'>Profile</li></NavLink>
    <NavLink to="my-bookings"><li className='m-2 btn'>My Bookings</li></NavLink>
    <NavLink to="qNa"><li className='m-2 btn'>Q n A </li></NavLink>

  </>

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-blue-400 font-serif">Event Explorer</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-1">
          <div>{user && user.email}</div>

          <img src={userimg} alt="userImg" />

          <Link to="/auth/login"><button className="btn btn-primary">Login</button></Link> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;