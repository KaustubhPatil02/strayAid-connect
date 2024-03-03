import React, { useState } from 'react'
import { Star, ChevronDown } from 'lucide-react'
import { List1 } from './AdoptList/List1';
import { List2 } from './AdoptList/List2';

export const Adopt = () => {
  const [showList1, setShowList1] = useState(false);
  const [showList2, setShowList2] = useState(false);

  if (showList1) {
    return <List1 />;
  }
  if (showList2) {
    return <List2 />;
  }
  return (
    <section className="overflow-hidden">
      {/* <header className="sticky top-0 z-50 w-full border-b bg-white pb-4 ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-1 py-4">
          <div className="inline-flex items-center space-x-2 ">
            <span className="font-bold">StrayAidConnect</span>
          </div>
        </div>
      </header> */}

<header className="sticky top-0 z-30 w-full border-b bg-white pb-2 ">
        <div className="mx-auto flex max--7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2 ">
           <a href="/">
           <span className="font-bold">Go Back </span>
           </a>
           
          </div>
          

        </div>
      </header>

      <div>
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            🐾 #AdoptAStray
            {/* "Uniting hearts and paws through  */}
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600 lg:mx-auto">
            {/* 🐾 #RescueLove #StrayAidConnect */}
            From abandoned and alone, to loved and cherished.

          </p>
        </div>

      </div>
      

      {/* cardcomponent */}
      <div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-4 md:gap-6 md:space-y-0 lg:grid-cols-4">
        <div className="relative h-[400px] w-[300px] rounded-md" onClick={() => setShowList1(true)}>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTS_-YMp19Fuo5QlMiOdPk0Mvl3SXGdswssb5WOJAZ2GqSNXPmcSqNFg8ACFgU2wDtaw&usqp=CAU"
            alt="Dolly"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Dolly</h1>
            <p className="mt-2 text-sm text-gray-300">
            Full of energy and love. Maybe you're the one she's looking for.
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Want to adopt them? &rarr;
            </button>
          </div>
        </div>
        
        <div className="relative h-[400px] w-[300px] rounded-md" onClick={() =>setShowList2(true)}>
          <img
            src="https://dogwithblog.in/wp-content/uploads/2019/09/mumbai-dog-helpline.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Aryan</h1>
            <p className="mt-2 text-sm text-gray-300">
             Domesticated and well trained. But was abussed by his previous owner.
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Want to adopt them? &rarr;
            </button>
          </div>
        </div>
        <div className="relative h-[400px] w-[300px] rounded-md">
          <img
            src="https://res.cloudinary.com/petrescue/image/upload/v1673009110/conkegtl4wubgbqbtsnf.jpg"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Kp</h1>
            <p className="mt-2 text-sm text-gray-300">
              Was found abandoned in a park. He is looking for a loving home.
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Want to adopt them? &rarr;
            </button>
          </div>
        </div>
        <div className="relative h-[400px] w-[300px] rounded-md">
          <img
            src="https://dogexpress.in/wp-content/uploads/2018/06/Stray-Dog-Adoption--660x330.png"
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">Bittu & Chittu</h1>
            <p className="mt-2 text-sm text-gray-300">
              Insepratable sibiling bond. They are looking for a loving home.
            </p>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              Want to adopt them? &rarr;
            </button>
          </div>
        </div>
      </div>
      <section className='flex flex-col gap-5'>

      <div className="flex items-center justify-center">
          <span className='px-4 py-10'>NOTE: If you want to add any stray please go to home page and fill the 'report form' or fill the 'contact form'. We will definitly reach you out ASAP </span>
        <button className="flex items-center space-x-1 text-gray-600">
          {/* <ChevronDown className="h-4 w-4" /> */}
        </button>
      </div>
      <div className="flex items-center justify-center">
        <button className="flex items-center space-x-1 text-gray-700 bg-gray-100 rounded-sm rounded-full">
          <span>Load More</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
      </section>
      <footer className='px-4 py-10 sticky'>
        <p className="text-xs font-semibold text-gray-900 md:text-base text-center ">© 2023-StrayAidConnect </p>

      </footer>
    </section>
  )
}
