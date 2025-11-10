import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css'
import { IoIosNotifications } from "react-icons/io";


const Navbar = () => {
    const navlinks = <>
        <li>
            <NavLink to="/">হোম</NavLink>
        </li>
        <li>
            <NavLink to="/blog">আর্টিকেল</NavLink>
        </li>
        <li>
            <NavLink to="/courses">কোর্স</NavLink>
        </li>
        <li>
            <NavLink to="/shop">শপ</NavLink>
        </li>
        <li>
            <NavLink to="/review-feed">রিভিউ ফিড </NavLink>
        </li>
        <li>
            <NavLink to="/">লেখা জমাদিন </NavLink>
        </li>
        <li>
            <NavLink to="/">পাঠকের মতামত</NavLink>
        </li>





    </>
    return (
        <div className="navbar bg-base-100 custom-navbar">
            <div className="navbar-start ">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                {/* <a className="btn btn-ghost text-xl">পড়তে ভালবাসি </a> */}
                <div className="flex items-center justify-center md:justify-start">
                    <img
                        src="https://i.ibb.co/4wtwHFmK/Porte-Valobashi-Bookstore-Logo-with-Slogan.png"
                        alt="Porte Valobashi Bookstore Logo"
                        className="w-32 sm:w-40 md:w-48 lg:w-56 h-[70px] object-contain"
                    />
                </div>


            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link> <IoIosNotifications className='text-2xl mr-4' color='red'></IoIosNotifications>
                </Link>
                <Link to="/login" className="btn">লগিন</Link>
            </div>
        </div>
    );
};

export default Navbar;