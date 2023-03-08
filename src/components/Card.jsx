import React from 'react';

const Card = ({ image, title, caption }) => {
  return (
    <div className='flex flex-col items-center text-center sm:text-start sm:items-start  bg-white w-50 p-8 rounded-2xl '>
      <img
        className='w-[70px] p-6 bg-darkViolet rounded-full translate-y-[-75%] sm:translate-x-10 '
        src={image}
        alt='feature-card-images'
      />
      <div className='flex flex-col -mt-6'>
        <h3 className='text-4xl font-bold mb-8'>{title}</h3>
        <p className='text-gray'>{caption}</p>
      </div>
    </div>
  );
};

export default Card;
