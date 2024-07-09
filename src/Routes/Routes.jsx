import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardLayout from "../Layouts/DashboardLayout";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/services",
                element: <Services />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]
    },
    {
        path: "/dashboard",
        element: <DashboardLayout/>,
        children: [
            {
                path: "",
                element: <Dashboard />
            }
        ]
    }
])