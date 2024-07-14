import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="drawer z-10 mb-10">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                {/* Navbar */}
                <div className="navbar bg-transparent lg:w-3/4 mx-auto">
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2">
                        <div className='text-2xl lg:text-4xl font-bold'>Yeasin <span className='text-accent'>.</span></div>
                        <div className='flex flex-1 md:hidden justify-end'>
                            <a href="#contact"><button className='btn btn-sm m-3 bg-accent border-none hover:bg-accent-hover'>Contact</button></a>
                        </div>
                    </div>
                    <div className="hidden flex-none lg:block">
                        <ul className="menu menu-horizontal">
                            {/* Navbar menu content here */}
                            <li className='justify-center'><a href='#home' className="m-3 hover:text-accent">Home</a></li>
                            <li className='justify-center'><a href='#services' className="m-3 hover:text-accent">Services</a></li>
                            <li className='justify-center'><a href='#works' className="m-3 hover:text-accent">Works</a></li>
                            <li className='justify-center'><a href='#about' className="m-3 hover:text-accent">About</a></li>
                            <li className='justify-center'><a href="#contact"><button className='btn btn-sm m-3 bg-accent border-none hover:bg-accent-hover'>Contact</button></a></li>
                        </ul>
                    </div>
                </div>
                {/* Page content here */}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-primary min-h-full w-80 p-4">
                    {/* Sidebar content here */}
                    <li><a href='#home' className="m-3 hover:text-accent">Home</a></li>
                    <li><a href='#services' className="m-3 hover:text-accent">Services</a></li>
                    <li><a href='#works' className="m-3 hover:text-accent">Works</a></li>
                    <li><a href='#about' className="m-3 hover:text-accent">About</a></li>
                </ul>
            </div>
        </div>
        // <div className="navbar w-3/4 mx-auto mb-20">
        //     <div className="navbar bg-transparent">
        //         <div className="navbar-start">
        //             <div className="dropdown">
        //                 <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //                     <svg
        //                         xmlns="http://www.w3.org/2000/svg"
        //                         className="h-5 w-5"
        //                         fill="none"
        //                         viewBox="0 0 24 24"
        //                         stroke="currentColor">
        //                         <path
        //                             strokeLinecap="round"
        //                             strokeLinejoin="round"
        //                             strokeWidth="2"
        //                             d="M4 6h16M4 12h8m-8 6h16" />
        //                     </svg>
        //                 </div>
        //                 <ul
        //                     tabIndex={0}
        //                     className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        //                     <li><a>Item 1</a></li>
        //                     <li>
        //                         <a>Parent</a>
        //                         <ul className="p-2">
        //                             <li><a>Submenu 1</a></li>
        //                             <li><a>Submenu 2</a></li>
        //                         </ul>
        //                     </li>
        //                     <li><a>Item 3</a></li>
        //                 </ul>
        //             </div>
        //             <a className="btn btn-ghost text-4xl font-bold">Yeasin <span className='text-accent'>.</span></a>
        //         </div>
        //         <div className="navbar-end">
        // <a href='#home' className="m-3 hover:text-accent">Home</a>
        // <a href='#services' className="m-3 hover:text-accent">Services</a>
        // <a href='#works' className="m-3 hover:text-accent">Works</a>
        // <a href='#about' className="m-3 hover:text-accent">About</a>
        // <a href="#contact"><button className='btn btn-sm m-3 bg-accent border-none hover:bg-accent-hover'>Contact</button>
        // </a>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Navbar;