import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar w-3/4 mx-auto mb-20">
            <div className="flex-1 ">
                <Link className="btn btn-ghost text-4xl font-semibold">Yeasin<span className='text-accent'>.</span></Link>
            </div>
            <div className="flex-none inline-block">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className='hover:border-b-4 hover:border-accent hover:text-accent rounded-none '>Services</Link></li>
                    <li><Link className='hover:border-b-4 hover:border-accent hover:text-accent rounded-none '>Resume</Link></li>
                    <li><Link className='hover:border-b-4 hover:border-accent hover:text-accent rounded-none '>Work</Link></li>
                    <li><Link className='bg-accent text-primary rounded-full hover:bg-accent-hover'>Contact</Link></li>
                    
                </ul>
            </div>
        </div>
    );
};

export default Navbar;