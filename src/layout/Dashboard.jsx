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
                    <ul className="menu p-4 w-56 h-full bg-base-200 text-base-content  sm:mt-20">

                        <li><NavLink to="/dashboard/"><FaHome></FaHome> Home</NavLink></li>

                        <li><NavLink to="/dashboard/addclass">Add Class</NavLink></li>
                        <li><NavLink to="/dashboard/myclass">My Class</NavLink></li>

                        <li><NavLink to="/dashboard/manageclass">Manage Class</NavLink></li>
                        <li><NavLink to="/dashboard/manageusers">Manage Users</NavLink></li>

                        <li><NavLink to="/dashboard/selectclass">Selected Class</NavLink></li>
                        <li><NavLink to="/dashboard/enrollclass">Enrolled Class</NavLink></li>
                        <li><NavLink to="/dashboard/paymenthistory">Payment History</NavLink></li>

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;