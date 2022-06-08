import React from 'react';
import logo from '../../../images/logo.png';

const Navbar = () => {
    return (
        <div className='bg-accent'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabindex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Our Portfolio</a></li>
                            <li><a>Our Team</a></li>
                            <li><a>Contact Us</a></li>
                            <a className="btn btn-primary text-secondary">Login</a>
                        </ul>
                    </div>
                    <a className="btn btn-ghost"><img className="w-[127.45px] h-[48px]" src={logo} alt="logo" /></a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li><a>Home</a></li>
                        <li><a>Our Portfolio</a></li>
                        <li><a>Our Team</a></li>
                        <li><a>Contact Us</a></li>
                        <a className="btn btn-primary text-secondary">Login</a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;