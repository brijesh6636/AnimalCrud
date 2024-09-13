import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <div className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-600 flex flex-wrap justify-between items-center py-2 h-24 md:h-32 px-4 md:px-8 lg:px-12 shadow-lg border-b border-gray-300 mb-1">
            <img className="h-12 w-auto md:h-24 rounded-xl transition-transform transform hover:scale-105" id="logo" src="https://res.cloudinary.com/bsingh6636/image/upload/v1724301824/projects/others/dataVisualization.png" alt="Logo" />

            <ul className="flex flex-wrap items-center space-x-2 md:space-x-4">
                <li>
                    <Link to="/" className="text-sm md:text-lg lg:text-xl font-bold text-white hover:text-yellow-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-lg px-3 py-1 transition duration-300">Home</Link>
                </li>
                <li>
                    <Link to="/aboutme" className="text-sm md:text-lg lg:text-xl font-bold text-white hover:text-yellow-300 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-yellow-300 rounded-lg px-3 py-1 transition duration-300">My GitHub Profile</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;