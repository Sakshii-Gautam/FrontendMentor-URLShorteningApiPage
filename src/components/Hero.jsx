import React from 'react';
import { images } from '../constants';
import NavMobile from './NavMobile';

const Hero = ({ showDropdown }) => {
  return (
    <section className='container mx-auto flex flex-col-reverse sm:flex-row items-center  px-12 md:py-20 lg:px-32'>
      <div className=' flex flex-col gap-8 mt-24  sm:mt-0 justify-center items-center sm:items-start sm:w-1/2'>
        <h1 className='text-6xl text-center sm:text-start font-semibold lg:text-7xl lg:font-bold xl:text-8xl'>
          More than just shorter links
        </h1>
        <p className='text-gray text-center sm:text-start'>
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <button className='px-8 py-4 text-white rounded-full bg-cyan'>
          Get Started
        </button>
      </div>
      {/* TODO: */}
      {showDropdown ? (
        <NavMobile />
      ) : (
        <div className='flex-1'>
          <img
            src={images.illustration_working}
            alt='hero_image'
            // className='object-cover translate-x-28 md:translate-x-0 md:scale-125 '
          />
        </div>
      )}
    </section>
  );
};

export default Hero;
