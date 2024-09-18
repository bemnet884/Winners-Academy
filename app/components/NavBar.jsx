'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/ethio.png'
const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      {/* Logo */}
      <Image
        src={logo}
        alt="Ethio-Academy"
        width={50}
        height={50}
        className="mr-4"
      />

      {/* Hamburger Menu Icon for Mobile */}
      <button
        className="md:hidden text-white text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
      </button>

      {/* Full Menu for Desktop and Conditionally Rendered for Mobile */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } md:flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 absolute md:static left-0 top-16 md:top-auto w-full md:w-auto bg-gray-800 md:bg-transparent p-4 md:p-0`}
      >
        <Link href="/Home" className="hover:text-gray-300">
          Home
        </Link>
        <Link href="/Courses" className="hover:text-gray-300">
          Courses
        </Link>

        {/* Dropdown for Pages */}
        <div className="relative">
          <button
            className="flex items-center hover:text-gray-300 focus:outline-none"
            onClick={toggleDropdown}
          >
            Pages <i className="fas fa-caret-down ml-1"></i>
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 top-8 bg-gray-800 shadow-lg rounded-lg py-2 w-48 z-10">
              <div className="px-4 py-2">
                <h3 className="text-sm text-gray-400">Learning</h3>
                <div className="mt-1">
                  <Link href="/MyLearning" className="block px-4 py-1 hover:bg-gray-700 rounded">
                    My Learning
                  </Link>
                  <Link href="/Mentors" className="block px-4 py-1 hover:bg-gray-700 rounded">
                    Mentors
                  </Link>
                  <Link href="/BecomeMentor" className="block px-4 py-1 hover:bg-gray-700 rounded">
                    Become Mentor
                  </Link>
                  <Link href="/Testimonials" className="block px-4 py-1 hover:bg-gray-700 rounded">
                    Testimonials
                  </Link>
                </div>
              </div>
              <div className="px-4 py-2 mt-2">
                <h3 className="text-sm text-gray-400">Resources</h3>
                <div className="mt-1">
                  <Link href="/ResourceLibrary" className="block px-4 py-1 hover:bg-gray-700 rounded">
                    Library
                  </Link>
                  <Link href="/BlogAndArticles" className="block px-4 py-1 hover:bg-gray-700 rounded">
                    Blog and Articles
                  </Link>
                  <Link href="/CareerService" className="block px-4 py-1 hover:bg-gray-700 rounded">
                    Career Service
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>

        <Link href="/About" className="hover:text-gray-300">
          About
        </Link>
        <Link href="/SignUp" className="hover:text-gray-300">
          Sign Up
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
