import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import logo from "../src/Img/logo.png";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // State to manage menu toggle
    const navigate = useNavigate();

    const data = JSON.parse(localStorage.getItem('user'));

    const logout = () => {
        localStorage.clear();
        navigate("/");
        window.location.reload(); // This will refresh the page after navigating
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full top-0 bg-white shadow-md">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-12 w-24" />
                </div>
                <div className="hidden items-center gap-6 md:flex space-x-4">
                    <Link to="/" className="text-lg text-gray-800 hover:text-gray-600">Home</Link>
                    {data ? (
                        <>
                            <Link to="/create" className="text-lg text-gray-800 hover:text-gray-600">Create Post</Link>
                            <Link to="/profile" className="text-lg text-gray-800 hover:text-gray-600">Profile</Link>
                            {/* <Link to="/profile" className="text-lg text-gray-800 hover:text-gray-600">{data.name}</Link> */}
                            <button onClick={logout} className="bg-red-500 text-white px-3 py-2 rounded-md">Logout</button>
                        </>
                    ) : (
                        <>
                            <Link to="/register" className="text-lg text-gray-800 hover:text-gray-600">Sign Up</Link>
                            <Link to="/login" className="text-lg bg-red-500 text-white px-3 py-2 rounded-md">Login</Link>
                        </>
                    )}
                </div>
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                        </svg>
                    </button>
                </div>
            </div>
            <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} px-4 pb-4`}>
                <Link to="/" className="block py-2 text-gray-800 hover:text-gray-600">Home</Link>
                {data ? (
                    <>
                        <Link to="/create" className="block py-2 text-gray-800 hover:text-gray-600">Create Post</Link>
                        <Link to="/profile" className="block py-2 text-gray-800 hover:text-gray-600">Profile</Link>
                        <Link to="/profile" className="block py-2 text-gray-800 hover:text-gray-600">{data.name}</Link>
                        <button onClick={logout} className="w-full bg-red-500 text-white py-2 rounded-md mt-2">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/register" className="block py-2 text-gray-800 hover:text-gray-600">Sign Up</Link>
                        <Link to="/login" className="block w-full bg-blue-500 text-white py-2 rounded-md mt-2">Login</Link>
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
