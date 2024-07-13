import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Components/Home/Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import DashboardLayout from "../Layouts/DashboardLayout";
import Services from "../Components/Services/Services";
import Contact from "../Components/Contact/Contact";
import Works from "../Components/Works/Works";
import AboutMe from "../Components/About me/AboutMe";

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
                path: "/works",
                element: <Works />
            },
            {
                path: "/me",
                element: <AboutMe />
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