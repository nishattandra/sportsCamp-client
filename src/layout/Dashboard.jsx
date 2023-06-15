/* eslint-disable no-unused-vars */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
import Navbar from '../pages/Shared/Navbar/Navbar';
import Footer from '../pages/Shared/Footer/Footer';

const Dashboard = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side mt-20  sm:mt-20">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content  sm:mt-20">
                        {/* Sidebar content here */}
                        <li><a>Sidebar Item 1</a></li>
                        <li><a>Sidebar Item 2</a></li>
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
        // <div>
        //     <Navbar></Navbar>
        //     <div>

        //         <button className="btn btn-outline">Default</button>
        //         <button className="btn btn-outline btn-primary">Primary</button>
        //         <button className="btn btn-outline btn-secondary">Secondary</button>
        //         <button className="btn btn-outline btn-accent">Accent</button>
        //     </div>
        //     <div className="drawer-content">

        //         <Outlet></Outlet>
        //     </div>
        //     <Footer></Footer>
        // </div>

        // <div className="drawer drawer-mobile bg-red-600">
        //     <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        //     <div className="drawer-content">
        //         <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        //         <Outlet></Outlet>

        //     </div>
        //     <div className="drawer-side bg-[#D1A054]">
        //         <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        //         <ul className="menu p-4 w-80">
        //             <li><NavLink to="/dashboard/adminhome"><FaHome></FaHome> Admin Home</NavLink></li>
        //             <li><NavLink to="/dashboard/addItem"> <FaUtensils></FaUtensils> Add an Item</NavLink></li>
        //             <li><NavLink to="/dashboard/manageitems"><FaWallet></FaWallet> Manage Items</NavLink></li>
        //             <li><NavLink to="/"><FaBook></FaBook> Manage Bookings(not implemented)</NavLink></li>
        //             <li><NavLink to="/dashboard/allusers"><FaUsers></FaUsers> All Users</NavLink></li>
        //             <li><NavLink to="/dashboard/userhome"><FaHome></FaHome> User Home</NavLink></li>
        //             <li><NavLink to="/"><FaCalendarAlt></FaCalendarAlt> Reservations</NavLink></li>
        //             <li><NavLink to="/"><FaWallet></FaWallet> Payment History</NavLink></li>
        //             <li>
        //                 <NavLink to="/dashboard/mycart"><FaShoppingCart></FaShoppingCart> My Cart
        //                 </NavLink>

        //             </li>
        //             <div className="divider"></div>
        //             <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
        //             <li><NavLink to="/menu"> Our Menu</NavLink></li>
        //             <li><NavLink to="/order/salad">Order Food</NavLink></li>
        //         </ul>

        //     </div>
        // </div>
    );
};

export default Dashboard;