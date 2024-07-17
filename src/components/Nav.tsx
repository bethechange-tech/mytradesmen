'use client';
import React, { useState } from 'react';
import Link from "next/link";
import { FaBars, FaUser } from 'react-icons/fa';

const mockUser = {
    isLoggedIn: true,
    name: "John Doe",
    email: "john@example.com"
};

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="container mx-auto p-4 bg-blue-600 text-white rounded-b-lg relative">
            <div className="flex justify-between items-center w-full">
                <div className="text-center md:text-left">
                    <h1 className="text-2xl font-bold">Handyman Services</h1>
                    <p className="text-sm">All your home services in one place</p>
                </div>
                <button
                    className="md:hidden text-white focus:outline-none"
                    onClick={toggleMenu}
                >
                    <FaBars className="w-6 h-6" />
                </button>
            </div>
            <nav
                className={`absolute top-full right-0 bg-blue-600 md:relative md:top-0 md:flex md:items-center md:w-auto transition-transform duration-300 ease-in-out ${menuOpen ? 'flex flex-col' : 'hidden'} md:flex gap-4 rounded-lg md:rounded-none shadow-lg md:shadow-none mt-2 md:mt-0 w-48 md:w-auto`}
            >
                {mockUser.isLoggedIn ? (
                    <>
                        <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-6 space-y-2 md:space-y-0 p-4 md:p-0">
                            <Link href="/profile" passHref>
                                <div className="flex items-center space-x-2 cursor-pointer hover:underline">
                                    <FaUser className="w-5 h-5" />
                                    <span>{mockUser.name}</span>
                                </div>
                            </Link>
                            <Link href="/jobs" passHref>
                                <div className="cursor-pointer hover:underline">Jobs</div>
                            </Link>
                            <Link href="/requests" passHref>
                                <div className="cursor-pointer hover:underline">Requests</div>
                            </Link>
                            <Link href="/settings" passHref>
                                <div className="cursor-pointer hover:underline">Settings</div>
                            </Link>
                        </div>
                        <Link href="/logout" passHref>
                            <div className="bg-red-500 text-white font-bold py-2 px-4 rounded-lg shadow-lg cursor-pointer hover:bg-red-700 transition duration-200 m-4 md:m-0">
                                Logout
                            </div>
                        </Link>
                    </>
                ) : (
                    <Link href="/signup" passHref>
                        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-lg shadow-lg justify-end m-4 md:m-0">
                            Login / Signup
                        </button>
                    </Link>
                )}
            </nav>
        </header>
    );
}

export default Nav;
