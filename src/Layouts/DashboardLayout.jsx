import React from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Outlet/>
        </div>
    );
};

export default DashboardLayout;