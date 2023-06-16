/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import useAdmin from '../../../hook/useAdmin';
import useInstructor from '../../../hook/useInstructor';

const Navbar = () => {
    const { logOut, user } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogOut = () => {
        logOut();
        navigate('/login')
    }
    const navItems = <>
        <li className='bg-white bg-opacity-70 rounded-lg mr-2'> <NavLink className={({ isActive }) => (isActive ? 'text-green-600 font-extrabold text-base' : ' font-extrabold')} to='/'>Home</NavLink> </li>
        <li className='bg-white bg-opacity-70 rounded-lg mr-2'> <NavLink className={({ isActive }) => (isActive ? 'text-green-600 font-extrabold text-base' : ' font-extrabold')} to='/instructors'>Instructors</NavLink> </li >
        <li className='bg-white bg-opacity-70 rounded-lg mr-2'> <NavLink className={({ isActive }) => (isActive ? 'text-green-600 font-extrabold text-base' : 'font-extrabold')} to='/classes'>Classes</NavLink> </li>
        {
            user && <li className='bg-white bg-opacity-70 rounded-lg'> <NavLink className={({ isActive }) => (isActive ? 'text-green-600 font-extrabold text-base' : 'font-extrabold')} to='/dashboard'>Dashboard</NavLink> </li>
        }
    </>
    return (
        <div className="navbar h-28 mb-2 fixed z-10 bg-opacity-30 rounded-lg max-w-screen-xl md:p-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <h2 className="normal-case text-3xl font-bold text-white mr-0">SPORT&apos;s<span className=' text-green-600'>Camp</span></h2>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    !user && <Link to='/login'>
                        <button className="btn bg-green-600 border-0 mr-5 text-white font-bold">Sign In</button>
                    </Link>
                }
                {
                    user && <>
                        <img className='w-12 border-2 rounded-full p-2' src={user?.photoURL} alt="" />
                        <button onClick={handleLogOut} className="btn ml-1 bg-green-600 border-0 mr-5 text-white font-bold">Sign Out</button>
                    </>
                }
            </div>
        </div>
    );
};

export default Navbar;