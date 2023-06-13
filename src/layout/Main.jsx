/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../pages/Shared/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <hr className="h-px mx-auto bg-green-600 border-0"></hr>
            <Footer></Footer>
        </div>
    );
};

export default Main;