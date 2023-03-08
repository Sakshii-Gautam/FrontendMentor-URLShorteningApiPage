import React from 'react';
import { images } from '../constants';

const Footer = () => {
  return (
    <div className=' bg-veryDarkBlue py-10 md:py-0'>
      <div className='mx-auto flex flex-col md:flex-row gap-y-16 md:gap-y-0 items-center md:items-start justify-around px-10 py-10 container  lg:px-32'>
        <div className='cursor-pointer'>
          <img src={images.logoWhite} alt='logo' />
        </div>

        <div className=' footer-links items-center md:items-start flex flex-1 flex-col gap-y-10 md:flex-row justify-evenly text-white'>
          <ul className='flex gap-y-3 flex-col items-center md:items-start '>
            <li className='mb-5'>
              <a href='#'>Features</a>
            </li>
            <li>
              <a href='#'>Link Shortening</a>
            </li>
            <li>
              <a href='#'>Branded Links</a>
            </li>
            <li>
              <a href='#'>Analytics</a>
            </li>
          </ul>

          <ul className='flex gap-y-3 flex-col items-center md:items-start'>
            <li className='mb-5'>
              <a href='#'>Resources</a>
            </li>
            <li>
              <a href='#'>Blog</a>
            </li>
            <li>
              <a href='#'>Developers</a>
            </li>
            <li>
              <a href='#'>Support</a>
            </li>
          </ul>

          <ul className='flex gap-y-3 flex-col items-center md:items-start'>
            <li className='mb-5'>
              <a href='#'>Company</a>
            </li>
            <li>
              <a href='#'>About</a>
            </li>
            <li>
              <a href='#'> Our Team</a>
            </li>
            <li>
              <a href='#'>Careers</a>
            </li>
            <li>
              <a href='#'>Contact</a>
            </li>
          </ul>
        </div>

        <div className='flex items-start gap-x-12 cursor-pointer footer-socials'>
          <img src={images.icon_facebook} alt='icon_facebook' />
          <img src={images.icon_twitter} alt='icon_twitter' />
          <img src={images.icon_pinterest} alt='icon_pinterest' />
          <img src={images.icon_instagram} alt='icon_instagram' />
        </div>
      </div>
    </div>
  );
};

export default Footer;
