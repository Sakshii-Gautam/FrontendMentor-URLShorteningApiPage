import React from 'react';

const Cta = () => {
  return (
    <div className='cta-container flex flex-col  items-center justify-center gap-16 bg-darkViolet py-20'>
      <h4 className='text-4xl md:text-6xl text-white md:font-semibold lg:8xl'>
        Boost your links today
      </h4>
      <button className='px-16 py-6 text-white rounded-full bg-cyan'>
        Get Started
      </button>
    </div>
  );
};

export default Cta;
