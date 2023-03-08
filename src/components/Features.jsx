import React from 'react';
import Card from './Card';
import { images } from '../constants';
import Output from './Output';

const Features = ({ resultData }) => {
  return (
    <>
      <section className='flex gap-9 flex-col bg-lightgray pt-48 md:px-20'>
        {Object.keys(resultData).length > 0 && (
          <Output resultData={resultData} />
        )}

        <div className='flex flex-col text-center items-center justify-center gap-8 '>
          <h2 className='text-5xl font-semibold md:text-6xl md:font-bold'>
            Advanced Statistics
          </h2>

          <p className='text-gray w-[90vw] lg:w-1/3'>
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>
        <div className='features-card mx-auto flex flex-col space-y-2 px-12 lg:grid grid-cols-3 gap-20 py-12 md:py-20 md:px-8 lg:px-12 xl:px-32 container '>
          <Card
            image={images.icon_brand_recognition}
            title='Brand Recognition'
            caption='Boost your brand recognition with each click. Generic links don’t 
          mean a thing. Branded links help instil confidence in your content.'
          />
          <Card
            image={images.icon_detailed_records}
            title='Detailed Records'
            caption='Gain insights into who is clicking your links. Knowing when and where 
				people engage with your content helps inform better decisions.'
          />
          <Card
            image={images.icon_fully_customizable}
            title='Fully Customizable'
            caption='Improve brand awareness and content discoverability through customizable 
				links, supercharging audience engagement.'
          />
        </div>
      </section>
    </>
  );
};

export default Features;
