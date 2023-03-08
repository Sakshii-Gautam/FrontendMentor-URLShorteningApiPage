import React, { useState } from 'react';
import { images } from '../constants/index';
import { FaBars } from 'react-icons/fa';
import NavMobile from './NavMobile';

const Header = ({ toggleDropdownMobile, showDropdown }) => {
  return (
    <>
      <header className='  mx-auto p-10 container md:px-32 '>
        <nav className='flex justify-between items-center'>
          <div className='flex gap-28 w-40 md:gap-20 cursor-pointer'>
            <img src={images.logo} alt='logo' />

            <ul className='hidden lg:flex gap-16 items-center'>
              <li>
                <a className='text-gray hover:text-veryDarkViolet' href='#'>
                  Features
                </a>
              </li>
              <li>
                <a className='text-gray hover:text-veryDarkViolet' href='#'>
                  Pricing
                </a>
              </li>
              <li>
                <a className='text-gray hover:text-veryDarkViolet' href='#'>
                  Resources
                </a>
              </li>
            </ul>
          </div>

          <div className='flex gap-16 items-center'>
            <FaBars onClick={toggleDropdownMobile} className='lg:hidden' />

            <a href='#' className='hidden lg:block hover:text-cyan'>
              Login
            </a>
            <button
              href='#'
              className='hidden lg:block px-8 py-4 text-white rounded-full bg-cyan'
            >
              Sign Up
            </button>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
