import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-8xl mx-auto px-6 py-5 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
            alt="Logo"
            className="w-20 h-15"
          />
          <h1 className="text-3xl font-bold text-blue-600">MyWebsite</h1>
        </div>

        <ul className="flex space-x-8 text-gray-700 font-medium text-xl">
          <li className="hover:text-blue-600 transition-colors">
            <Link href="/">Home</Link>
          </li>

          <li className="hover:text-blue-600 transition-colors">
            <Link href="/about">About</Link>
          </li>

          <li className="hover:text-blue-600 transition-colors cursor-pointer">
            <Link href="/employee">Employee</Link>
          </li>

          <li className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition text-lg cursor-pointer">
            Sign Up
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
