import React, { useState } from 'react';

const Output = ({ resultData }) => {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(resultData?.full_short_link);
    alert('Link Copied!');
    setCopy(true);

    document.querySelector('.copy-btn').classList.add('bg-gray');
  };

  return (
    <div className='flex flex-col gap-10 bg-white w-[85vw] mx-auto rounded-2xl py-6 px-6 md:flex-row md:justify-between md:items-center'>
      <h3 className='output-link whitespace-nowrap overflow-hidden'>
        {resultData?.original_link}
      </h3>

      <h4 className='text-cyan'>{resultData?.full_short_link}</h4>
      <button
        href='#'
        className='copy-btn px-16 py-4 text-white text-center rounded-2xl bg-cyan'
        onClick={handleCopy}
      >
        {copy ? 'Copied!' : 'Copy'}
      </button>
    </div>
  );
};

export default Output;
