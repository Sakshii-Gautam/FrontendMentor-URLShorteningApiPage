import React, { useState } from 'react';
import Output from './Output';

const Input = ({ getOutputResult }) => {
  const [inputLink, setInputLink] = useState('');

  const handleSubmit = async () => {
    if (!inputLink) {
      return alert('Please add a link');
    } else {
      try {
        const response = await fetch(
          `https://api.shrtco.de/v2/shorten?url=${inputLink}`
        );
        const { result } = await response.json();
        getOutputResult(result);
        setInputLink('');
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <>
      <div className='flex flex-col justify-center gap-8 w-[85vw] sm:flex-row sm:gap-0 input-container rounded-2xl container mx-auto px-16 py-8 sm:px-20 sm:py-12 2xl:px-32 lg:py-20 bg-slate-500 sm:space-x-16   translate-y-[50%] sm:w-[70%]'>
        <div className='sm:flex-1'>
          <input
            value={inputLink}
            type='text '
            placeholder='Shorten a link here...'
            className='p-4 w-full rounded-xl'
            onChange={(e) => setInputLink(e.target.value)}
          />
        </div>

        <div className='text-center '>
          <button
            className='w-full sm:w-auto text-white rounded-xl px-12 py-4 bg-cyan'
            onClick={handleSubmit}
          >
            Shorten it!
          </button>
        </div>
      </div>
    </>
  );
};

export default Input;
