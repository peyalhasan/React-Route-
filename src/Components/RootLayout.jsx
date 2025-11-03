import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className=' min-h-screen '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;