import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';



const Navbar = () => {

  const links = <>

    <NavLink to="/"><li className='m-2 btn'>Home</li></NavLink>
    <NavLink to="profile"><li className='m-2 btn'>Profile</li></NavLink>
    <NavLink to="my-bookings"><li className='m-2 btn'>My Bookings</li></NavLink>
    <NavLink to="qNa"><li className='m-2 btn'>Q n A </li></NavLink>

  </>

  const {user, logOut}= use(AuthContext);
    // const [name , setName] = useState("");


//  useEffect(() => {
//         if (user) {
//             setName(user.displayName);
            
//         }


//     }, [user]);



     const handleLogout = () => {
        // console.log("logout");
        logOut().then(() => {
            alert("logout successfully")
        })
            .catch((error) => {
                console.log(error);

            });

    }





  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm m-5 p-2">
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
        <div>{user && user.email}</div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {links}
          </ul>
        </div>
        <div className="navbar-end flex gap-1">
          


<div className="tooltip">
                        <div className="tooltip-content">
                            <div className="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">mouri</div>
                        </div>

                        <button> <img className='w-8 rounded-full' src={user ? user.photoURL : userIcon} alt="user" /></button>

                    </div>


          {/* <button> <img className='w-8 rounded-full' src={user ? user.photoURL : userIcon} alt="user" /></button> */}

           {user ? (<button onClick={handleLogout} className='btn btn-primary px-9' >logout</button>) :
                        (<Link to="/auth/login" className='btn btn-primary px-9' >LogIn</Link>)}
        </div>
      </div>
    </div>
  );
};

export default Navbar;