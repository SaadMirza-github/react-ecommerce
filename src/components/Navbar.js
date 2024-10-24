import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-white shadow-md sticky top-0 z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link to="/" className="text-2xl font-bold text-purple-600">
                    ShopEase
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8">
                    <Link to="/" className="text-gray-700 hover:text-purple-600">
                        Home
                    </Link>

                    {/* Categories Dropdown */}
                    <div className="relative inline-block">
                        <button
                            className="text-gray-700 hover:text-purple-600"
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                        >
                            Categories
                        </button>
                        {dropdownOpen && (
                            <div className="absolute bg-white shadow-lg mt-2 w-48">
                                <Link to="/products?category=electronics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Electronics
                                </Link>
                                <Link to="/products?category=fashion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                    Fashion
                                </Link>
                                <div className="relative group">
                                    <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Home & Kitchen
                                    </button>
                                    <div className="absolute hidden group-hover:block bg-white shadow-lg left-full top-0 w-48">
                                        <Link to="/products?subcategory=appliances" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Appliances
                                        </Link>
                                        <Link to="/products?subcategory=furniture" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Furniture
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <Link to="/cart" className="text-gray-700 hover:text-purple-600">
                        Cart
                    </Link>
                </nav>

                {/* Search Bar */}
                <div className="hidden md:flex items-center space-x-2">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="border rounded-md p-2 text-gray-700 focus:ring focus:ring-purple-500"
                    />
                    <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
                        Search
                    </button>
                </div>

                {/* Login Button */}
                <div>
                    <Link to="/login" className="hidden md:inline-block text-gray-700 hover:text-purple-600">
                        Login
                    </Link>
                    <Link to="/register" className="hidden md:inline-block text-gray-700 hover:text-purple-600 ml-4">
                        Register
                    </Link>
                </div>
                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700 hover:text-purple-600 focus:outline-none"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <nav className="flex flex-col space-y-4 p-4">
                        <Link to="/" className="text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                            Home
                        </Link>

                        <div className="relative">
                            <button
                                className="text-gray-700 hover:text-purple-600"
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                            >
                                Categories
                            </button>
                            {dropdownOpen && (
                                <div className="absolute bg-white shadow-lg mt-2 w-48">
                                    <Link to="/products?category=electronics" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Electronics
                                    </Link>
                                    <Link to="/products?category=fashion" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                        Fashion
                                    </Link>
                                    <div className="relative group">
                                        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100">
                                            Home & Kitchen
                                        </button>
                                        <div className="absolute bg-white shadow-lg left-full top-0 w-48">
                                            <Link to="/products?subcategory=appliances" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                Appliances
                                            </Link>
                                            <Link to="/products?subcategory=furniture" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                                Furniture
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <Link to="/cart" className="text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                            Cart
                        </Link>

                        {/* Search Bar in Mobile */}
                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="border rounded-md p-2 text-gray-700 focus:ring focus:ring-purple-500 w-full"
                            />
                            <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-500">
                                Search
                            </button>
                        </div>

                        <Link to="/login" className="text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                            Login
                        </Link>
                        <Link to="/register" className="text-gray-700 hover:text-purple-600" onClick={() => setMobileMenuOpen(false)}>
                            Register
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Navbar;
