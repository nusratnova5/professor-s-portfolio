import React from 'react';
import Navbar from '../Components/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Shared/Footer';
const MainLayout = () => {
    return (
        <div className='bg-primary text-white font-primary '>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;