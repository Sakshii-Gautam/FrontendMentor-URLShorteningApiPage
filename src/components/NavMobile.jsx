import React from 'react';

const NavMobile = () => {
  return (
    <nav className='flex flex-col gap-8 w-full items-center rounded-2xl py-12 mt-10 text-center bg-darkViolet'>
      <ul className='w-full nav-mobile-links text-white flex flex-col gap-y-6 '>
        <li>
          <a href='#'>Features</a>
        </li>
        <li>
          <a href='#'>Pricing</a>
        </li>
        <li>
          <a href='#'>Resources</a>
        </li>
      </ul>

      <ul className='text-white flex flex-col gap-y-10'>
        <li>
          <a href='#'>Login</a>
        </li>
        <li>
          <a
            href='#'
            className=' lg:block px-10 py-3 text-white rounded-full bg-cyan'
          >
            Sign Up
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavMobile;
