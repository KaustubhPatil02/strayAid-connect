import React from 'react'

const FirstPage = () => {
    return (
        <div className='flex flex-col'>
            <div className='relative h-screen sm:h-auto sm:flex sm:items-center'>
                <img
                    className='object-cover w-full h-full'
                    src="/First.jpg" alt="" />
                <div className='absolute top-0 right-0 text-white text-6xl lg:text-4xl sm:text-2xl pr-10 mt-60 gap-[2rem]'>
                    <h1 className='mb-4 text-6xl'>They Need Your Help!</h1>
                    <p className='text-5xl lg:text-2xl sm:text-xl'>You have the power to save them.</p>
                </div>
            </div>
        </div>
    )
}

export default FirstPage