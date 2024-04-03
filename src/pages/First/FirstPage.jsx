import React, { useState, useEffect } from 'react';
import TypewriterEffect from './TypewriterEffect';
import TypewriterEffect2 from './TypewriterEffect2';

const FirstPage = () => {
  return (
    <div className='flex flex-col'>
      <div className='relative h-screen sm:h-auto sm:flex sm:items-center'>
        <img
          className='object-cover w-full h-full'
          src="/First.jpg" alt="" />
        <div className='absolute top-0 right-0 text-gray-400 text-6xl lg:text-4xl sm:text-2xl pr-10 mt-60 gap-[2rem]'>
          <h1 className='mb-4 text-6xl font-semibold'>
            <TypewriterEffect text="They Need Your Help!" />
          </h1>
          <div>
          <p className='text-5xl lg:text-2xl sm:text-xl'>
            <TypewriterEffect2 text="You have the power to save them." />
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
