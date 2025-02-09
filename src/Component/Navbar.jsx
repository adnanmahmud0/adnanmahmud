import React from 'react';
import { Link } from 'react-router-dom';
import CV from '../assets/adnanCV.pdf';
import adnanLogo from '../assets/adnanLogo.png';

const Navbar = () => {

    const link =
        <>
            <li><Link to='/' className='ml-5 text-white text-lg'>Home</Link></li>
            <li><a href='#about' className='ml-5 text-white text-lg'>About</a></li>
            <li><a href='#skilledu' className='ml-5 text-white text-lg'>Skill & Education</a></li>
            <li><a href='#project' className='ml-5 text-white text-lg'>Projects</a></li>
            <li><a href='#contuct' className='ml-5 text-white text-lg'>Contact</a></li>
        </>

    return (
        <div className=''>
            <div className="navbar max-w-7xl mx-auto">
                <div className="navbar-start my-10">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-gray-800 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {link}
                        </ul>
                    </div>
                    <div className='size-10 flex items-center space-x-5'>
                        <img src={adnanLogo} alt="" srcset="" />
                        <p className='text-white text-3xl md:flex hidden'>Adnan</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {link}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href={CV} className="text-white md:py-5 md:px-10 py-2 px-4 border border-solid rounded-full border-gray-600 animate-borderEffect">Download CV</a>
                </div>
            </div>

            <style jsx>{`
                @keyframes borderEffect {
                    0% {
                        border-color: rgba(255, 255, 255, 0.6);
                        box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
                    }
                    50% {
                        border-color: rgba(255, 255, 255, 1);
                        box-shadow: 0 0 16px rgba(255, 255, 255, 1);
                    }
                    100% {
                        border-color: rgba(255, 255, 255, 0.6);
                        box-shadow: 0 0 8px rgba(255, 255, 255, 0.6);
                    }
                }

                .animate-borderEffect {
                    animation: borderEffect 2s infinite;
                }
            `}</style>
        </div>
    );
};

export default Navbar;
