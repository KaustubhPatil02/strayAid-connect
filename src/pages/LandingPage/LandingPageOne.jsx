'use client'
// import { Route } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {
  ChevronDown, ChevronUp,
  // Link, 
  Menu, X, ArrowRight,
} from 'lucide-react'
import '../firebase'
import { Link } from "react-router-dom";
import { GoAlertFill } from "react-icons/go";
import { SosModal } from './SOS/SosModal';

const menuItems = [
  // {
  //   name: 'Home',
  //   href: '#',
  // },
  {
    name: 'Become an Volunteer',
    href: './VolunteeringForm',
    to: './VolunteeringForm',
    component: Link,

  },
  {
    name: 'Contact',
    href: '#getintouch',
  },
  {
    name: 'FAQs',
    href: '#faq',
  },
  {
    name: 'Report',
    href: './Reports',
    to: './Reports',
    component: Link,
  },
  {
    name: 'Adoptation',
    href: './Adopt',
    to: './Adopt',
    component: Link,

  },
  {
    name: 'Donation',
    href: '/MainDonation',
    to: '/MainDonation',
    component: Link,
  },
  // {
  //   name: 'SOS',
  //   href: '/sos',
  //   to: '/sos',
  //   component: Link,
  //   className: 'md:hidden lg:hidden', // Hide on medium and larger screens
  // },

]


const faqs = [
  {
    question: 'What is StrayAid-Connect?',
    answer: 'It is a webApp that helps the strays to get help form volunteers form the respective region.',
  },
  {
    question: 'How do I help stray animals?',
    answer: 'One of the most basic ways to help stray animals is to provide them with food and water.',
  },
  {
    question: 'How do I get started?',
    answer: 'Click on Join the community. Get signup with the free Account. And contribute to the community.',
  },
];


const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin h-6 w-6 border-t-2 border-black border-r-2 border-b-2 border-blue-200 rounded-full"></div>
    </div>
  );
};

export function LandingPageOne() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  const [isFaq, setIsFaq] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };


  const [contactData, setContact] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    msg: "",
  });
  const [shelterData, setshelterData] = useState({
    email: " "
  })


  let name, value;

  const postContactForm = (event) => {
    name = event.target.name;
    value = event.target.value;
    setContact({ ...contactData, [name]: value });
  };
  const postShelterData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setshelterData({ ...shelterData, [name]: value });
  };

  // Firebase connection
  const submitContact = async (event) => {
    setIsLoading(true);
    setTimeout(() => {
      // Reset isLoading to false after a 2-second delay.
      setIsLoading(false);
    }, 1500);

    event.preventDefault();
    const { firstName, lastName, email, phoneNum, msg } = contactData;

    if (!firstName || !lastName || !email || !phoneNum || !msg) {
      setPopupMessage('Please fill out all fields before submitting.');
      return;
    } else {
      setPopupMessage('We got it, Thanks for sharing us!'); // Clear the pop-up message if all fields are filled.
    }
    try {
      const res = await fetch(
        'https://strayaid-connect-default-rtdb.firebaseio.com/landingPage-Contact.json',
        {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            email,
            phoneNum,
            msg
          }),
        }
      )

      if (res.ok) {
        setContact({
          firstName: "",
          lastName: "",
          email: "",
          phoneNum: "",
          msg: "",
        })
        setPopupMessage('Data submitted successfully');
      } else {
        setPopupMessage('Data not submitted. Please try again.');
      }
    } catch (error) {
      // console.error('Error:', error);
      setPopupMessage('Data not submitted due to an error.');
    }
  };



  const submitShelterMail = async (event) => {
    setIsLoading(true);
    setTimeout(() => {
      // Reset isLoading to false after a 2-second delay.
      setIsLoading(false);
    }, 1500);
    event.preventDefault();
    const { email } = shelterData;

    if (!email) {
      setPopupMessage('Please Enter proper email Address.');
      return; // Return early if the email field is empty.
    }
    try {
      if (email.trim() === '') {
        setPopupMessage('Please Enter proper email Address.');
        return; // Return early if the email field is empty after trimming whitespace.
      }
      const res = await fetch(
        'https://strayaid-connect-default-rtdb.firebaseio.com/landingPage-AnimalShelterHome-Emails.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email
          }),
        }
      );

      if (res.ok) {
        setContact({
          email: '',
        });
        setPopupMessage('Email submitted successfully');
      } else {
        setPopupMessage('Email not submitted. Please try again.');
      }
    } catch (error) {
      // console.error('Error:', error);
      setPopupMessage('Data not submitted due to an error.');
    }
  };



  // const submitShelterMail = async (event) => {
  //   setIsLoading(true);
  //   setTimeout(() => {
  //     // Reset isLoading to false after a 2-second delay.
  //     setIsLoading(false);
  //   }, 1500);
  //   event.preventDefault();
  //   const { email} = shelterData;

  //   if (!email) {
  //     setPopupMessage('Please Enter proper email Address.');
  //     return;
  //   } else {
  //     setPopupMessage('We got it, Thanks for sharing us!'); // Clear the pop-up message if all fields are filled.
  //   }
  //   try {
  //     const res = await fetch(
  //       'https://strayaid-connect-default-rtdb.firebaseio.com/landingPage-AnimalShelterHome-Emails.json',
  //       {
  //         method: 'POST',
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           email

  //         }),
  //       }
  //     )

  //     if (res.ok) {
  //       setContact({
  //         email: "",          
  //       })
  //       setPopupMessage('Email submitted successfully');
  //     } else {
  //       setPopupMessage('Email not submitted. Please try again.');
  //     }
  //   } 
  //   catch (error) {
  //     // console.error('Error:', error);
  //     setPopupMessage('Data not submitted due to an error.');
  //   }
  // };
  const headings = ['Regional Chatrooms ', 'Accident Reports', 'Volunteers', 'Notification System(Sms)'];
  const descriptions = [
    'When user is signed-in they are provided Regional Chatrooms ',
    'Users can file an report in case of an accident with the stray animals. The volunteers can help the strays in the region. or the users can report to the chatroom Admin.',
    'Users and volunteers can join the community and help the strays in their region. Users just have to submit their details in the volunteeringForm and they will be added as Volunteers',
    'Users and Volunteers will be able to get notification via an sms channel. Even if they are offline or, if they are unable to access the application via the Internet, '
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='bg-black'>
          <div className="w-full no-scrollbar">
      <header className="sticky top-0 z-50 w-full border-b bg-black text-white pb-0 ">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-1 py-4">
          <div className="inline-flex items-center space-x-2 ">
            <span className="font-bold">StrayAidConnect</span>
          </div>
          <div className="hidden lg:block">
            <ul className="inline-flex space-x-16  ">
            {menuItems.map((item) => (
                <li key={item.name}>
                  {item.component ? (
                    <item.component
                      to={item.to}
                      // to="./VolunteeringForm"
                      className="text-sm font-semibold text-white hover:text-gray-900"
                    >
                      {item.name}
                    </item.component>
                  ) : (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-white hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  )}
                </li>

              ))}

              <div>
                <GoAlertFill
                  onClick={handleOpenModal}
                  className='hover:opacity-30 text-yellow-500 w-[2rem] h-[2rem]'
                />

                {isModalOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50">
                    <div className="bg-black bg-opacity-50 absolute inset-0 z-10"></div>
                    <div className="bg-white p-6 rounded-lg w-80 lg:w-1/2 z-20">
                      <SosModal />
                      <button onClick={handleCloseModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Close</button>
                    </div>
                  </div>
                )}
              </div>



            </ul>
          </div>
          <div className="hidden lg:block">
          </div>
          <div className="lg:hidden">
            <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
          </div>

          {isMenuOpen && (
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
              <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pb-6 pt-5">
                  <div className="flex items-center justify-between">

                    <div className="-mr-2">
                      <button
                        type="button"
                        onClick={toggleMenu}
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                      >
                        <span className="sr-only">Close menu</span>
                        <X className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                  <div className="mt-6">
                    <nav className="grid gap-y-4">
                      {menuItems.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                        >
                          <span className="ml-3 text-base font-medium text-gray-900">
                            {item.name}
                          </span>
                        </a>
                      ))}
                      <Link
              to="/sos"
              className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
            >
              <span className="ml-3 text-base font-medium text-gray-900">
                SOS
              </span>
            </Link>
                    </nav>
                  </div>


                </div>
              </div>
            </div>
          )}
        </div>
      </header>
      {/* Hero Section */}
      <div className="relative w-full bg-black">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
          {/* <p className='text-white'>Lets make a difference  Join the community </p> */}

            <div className="mt-8 flex max-w-max items-center space-x-2 rounded-full  p-1 bg-gray-200">
              {/* bg-gray-100 */}
              <div className="rounded-full bg-white p-1 px-4 ">
                <p className="text-sm font-medium ">Let&apos; make a difference</p>
              </div>


              <a href="http://localhost:3000" target='blank'>
                <p className="text-sm font-medium cursor-pointer"
                >Join the community &rarr;
                </p>
              </a>
            </div>
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-6xl">
              For People who care about strays
            </h1>
            <p className="mt-8 text-lg text-gray-300"
            // style={{backgroundImage: 'linear-gradient(to bottom, #9089FC)'}}
            >
              {/* A stray is a domestic animal, fowl, etc, that has wandered away and is lost. The dog was a stray which had been adopted. A stray dog or cat has wandered away from its owner&apos;s home. A stray dog came up to him. */}
              Join us by making a community to help strays, and help them!
              <p>
                <b>StrayAidConnect</b> is a self sustainable web, that let you join the chatroom for your specific city
                and help the strays in your city.
              </p>
            </p>
            <form action="POST" className="mt-8 flex items-start space-x-2">
              <div>
                <input
                  className="flex w-full rounded-md border border-white/90 bg-transparent px-3 py-2 text-sm placeholder:text-gray-350 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  placeholder="Enter your email"
                  id="email"
                  name='email'
                  value={shelterData.email}
                  onChange={postShelterData}
                  style={{ color: 'black' }}
                ></input>
                <p className="mt-2 text-sm text-gray-300">Register your Animal Shelter Home, we will reach you out!</p>
                <p className="mt-2 text-sm text-gray-300">We care about your privacy</p>
              </div>

              <div>
                {isLoading ? (
                  <LoadingSpinner />
                ) : (
                  <button
                    type="button"
                    className="rounded-md bg-white px-3 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    onClick={submitShelterMail}
                  >
                    Register with Us
                  </button>
                )}
                {popupMessage && (
                  <div className="popup-message">
                    {popupMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="relative lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="aspect-[6/10] bg-gray-50 object-cover lg:aspect-[4/3] lg:h-[700px] xl:aspect-[16/9]"
              src="https://www.amtmindia.org/wp-content/uploads/2022/06/Stray-animals-are-a-social-responsibility_Web.jpg"
              alt=""
            />
          </div>
        </div>
      </div>


      <div className="px-2 py-2 md:px-6 md:py-10 bg-black">
        <h1 className="text-4xl font-bold capitalize text-white lg:text-4xl items-center justify-center ">
          Features
        </h1>
        {/* <p className="my-2 text-gray-600">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
            </p> */}
        <hr />
        <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-2 xl:gap-16">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-3">

              <h1 className="text-xl font-semibold capitalize text-white">{headings[i]}</h1>
              <p className="text-sm text-gray-500">
                {descriptions[i]}
                {headings[i] === 'Chatroom Fetching' ? 'Once the users are SignedIn in the system they can join the chatroom of their respective city by searching the chatroom of it.' : ''}
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm font-semibold capitalize text-black transition-colors duration-300 hover:underline"
              >
                {/* <span className="mx-1 text-white">read more</span> */}
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* FAQs */}
    <div className='bg-black text-white'>
    <section className="mx-auto max-w-7xl bg-black px-2 py-10 md:px-0" id='faq'>
        {/* ... */}
        <div className="mx-auto mt-8 max-w-3xl space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div key={index} className="cursor-pointer rounded-md border text-white border-gray-400 shadow-lg transition-all duration-200">
              <button
                type="button"
                className="flex w-full items-center justify-between px-4 py-5 sm:p-6"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="flex text-lg font-semibold text-white">{faq.question}</span>
                {openIndex === index ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ... */}
      </section>
    </div>
      <SosModal />

     <div className='bg-black'>
     <div className="mx-auto max-w-7xl px-4 ">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="mx-auto max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-center text-xs font-semibold leading-normal md:text-sm cursor-pointer" id='contact-us' href="#form">
              Share your thoughts
            </p>
          </div>
          <p className="text-center text-3xl font-bold text-gray-400 md:text-5xl md:leading-10">
            Love to hear from you
          </p>
          {/* <p className="mx-auto max-w-4xl text-center text-base text-gray-600 md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore veritatis voluptates
            neque itaque repudiandae sint, explicabo assumenda quam ratione placeat?
          </p> */}
        </div>
        <div className="mx-auto max-w-7xl py-12 md:py-24">
          <div className="grid items-center justify-items-center gap-x-4 gap-y-10 lg:grid-cols-2">
            {/* contact from */}
            <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="text-2xl font-bold text-gray-300 md:text-4xl" id='getintouch'>Get in touch</p>
                <p className="mt-4 text-lg text-gray-400" >
                  Our friendly team would love to hear from you.
                </p>
                <form id='form' method=" POST" action="" className="mt-8 space-y-4">
                  <div className="grid w-full gap-y-4 md:gap-x-4 lg:grid-cols-2">
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="first_name"
                      >
                        First Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                        type="text"
                        id="first_name"
                        placeholder="First Name"
                        name='firstName'
                        value={contactData.firstName}
                        onChange={postContactForm}
                        style={{ color: 'black' }}

                      />
                    </div>
                    <div className="grid w-full  items-center gap-1.5">
                      <label
                        className="text-sm font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        htmlFor="last_name"
                      >
                        Last Name
                      </label>
                      <input
                        className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900 "
                        type="text"
                        id="last_name"
                        placeholder="Last Name"
                        name='lastName'
                        value={contactData.lastName}
                        onChange={postContactForm}
                        style={{ color: 'black' }}
                      />
                    </div>
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                      name='email'
                      value={contactData.email}
                      onChange={postContactForm}
                      style={{ color: 'black' }}

                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                      name='phoneNum'
                      value={contactData.phoneNum}
                      onChange={postContactForm}
                      style={{ color: 'black' }}

                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Message
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Leave us a message"
                      cols={3}
                      name='msg'
                      value={contactData.msg}
                      onChange={postContactForm}
                      style={{ color: 'black' }}

                    />
                  </div>
                  <div>
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <button
                        type="button"
                        className="w-full rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black items-center justify-center"
                        onClick={submitContact}
                      >
                        Send Message
                      </button>
                    )}
                    {popupMessage && (
                      <div className="popup-message">
                        {popupMessage}
                      </div>
                    )}
                  </div>
                </form>
              </div>
            </div>
            <img
              alt="Contact us"
              className="hidden max-h-full w-full rounded-lg object-cover lg:block"
              src="https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&h=800&q=80"
            />
          </div>
        </div>
      </div>
     </div>
      <hr className="mt-6" />
      <div className="w-auto p-8">
        {/* <div className="-m-1.5 flex flex-wrap">
          <div className="w-auto p-1.5">
            <a href="#">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                <svg
                  width="8"
                  height="14"
                  viewBox="0 0 8 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.55736 5.2L5.55736 3.88C5.55736 3.308 5.69631 3 6.66894 3H7.87315V0.800003L6.02052 0.800003C3.70473 0.800003 2.77841 2.252 2.77841 3.88V5.2H0.925781L0.925781 7.4H2.77841L2.77841 14H5.55736L5.55736 7.4H7.59526L7.87315 5.2H5.55736Z"
                    fill="#27272A"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="w-auto p-1.5">
            <a href="#">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 14 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.6655 1.39641C13.1901 1.60149 12.6728 1.74907 12.1399 1.80656C12.6931 1.47788 13.1074 0.958619 13.3051 0.346204C12.7859 0.655036 12.2172 0.871595 11.6241 0.986274C11.3762 0.721276 11.0764 0.510168 10.7434 0.366102C10.4104 0.222036 10.0512 0.1481 9.68836 0.148902C8.22024 0.148902 7.03953 1.33893 7.03953 2.79928C7.03953 3.00436 7.06439 3.20943 7.10478 3.40673C4.90649 3.29177 2.94589 2.24155 1.64246 0.633614C1.40495 1.03927 1.2805 1.50117 1.28203 1.97123C1.28203 2.89094 1.74965 3.70191 2.46274 4.17885C2.0425 4.1623 1.63211 4.0468 1.26494 3.84173V3.87435C1.26494 5.16226 2.17533 6.22956 3.38866 6.47502C3.16084 6.5342 2.92649 6.56447 2.69111 6.56513C2.51866 6.56513 2.35554 6.54804 2.19086 6.52474C2.52643 7.57495 3.50362 8.33775 4.66724 8.3626C3.75685 9.07569 2.61654 9.49515 1.37835 9.49515C1.15619 9.49515 0.951119 9.48738 0.738281 9.46253C1.91278 10.216 3.30632 10.651 4.80706 10.651C9.67904 10.651 12.345 6.61484 12.345 3.11155C12.345 2.99659 12.345 2.88162 12.3372 2.76666C12.853 2.38914 13.3051 1.92152 13.6655 1.39641Z"
                    fill="#27272A"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
          <div className="w-auto p-1.5">
            <a href="#">
              <div className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-300 hover:border-gray-400">
                <svg
                  width="16"
                  height="15"
                  viewBox="0 0 16 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.00094 0.360001C6.09046 0.360001 5.85022 0.368801 5.09958 0.402241C4.34894 0.437441 3.83766 0.555361 3.38974 0.729601C2.9199 0.906321 2.49433 1.18353 2.14278 1.54184C1.78468 1.89357 1.50751 2.31909 1.33054 2.7888C1.1563 3.23584 1.0375 3.748 1.00318 4.496C0.969738 5.2484 0.960937 5.48776 0.960937 7.40088C0.960937 9.31224 0.969738 9.5516 1.00318 10.3022C1.03838 11.052 1.1563 11.5633 1.33054 12.0112C1.51094 12.4741 1.75118 12.8666 2.14278 13.2582C2.5335 13.6498 2.92598 13.8909 3.38886 14.0704C3.83766 14.2446 4.34806 14.3634 5.09782 14.3978C5.84934 14.4312 6.0887 14.44 8.00094 14.44C9.91318 14.44 10.1517 14.4312 10.9032 14.3978C11.6521 14.3626 12.1651 14.2446 12.613 14.0704C13.0826 13.8936 13.5078 13.6164 13.8591 13.2582C14.2507 12.8666 14.4909 12.4741 14.6713 12.0112C14.8447 11.5633 14.9635 11.052 14.9987 10.3022C15.0321 9.5516 15.0409 9.31224 15.0409 7.4C15.0409 5.48776 15.0321 5.2484 14.9987 4.49688C14.9635 3.748 14.8447 3.23584 14.6713 2.7888C14.4944 2.31908 14.2172 1.89356 13.8591 1.54184C13.5077 1.1834 13.0821 0.906169 12.6121 0.729601C12.1633 0.555361 11.6512 0.436561 10.9023 0.402241C10.1508 0.368801 9.9123 0.360001 7.99918 0.360001H8.00182H8.00094ZM7.36998 1.62896H8.00182C9.8815 1.62896 10.1041 1.63512 10.846 1.66944C11.5324 1.70024 11.9055 1.81552 12.1537 1.91144C12.4819 2.03904 12.7169 2.19216 12.9633 2.43856C13.2097 2.68496 13.3619 2.91904 13.4895 3.24816C13.5863 3.49544 13.7007 3.86856 13.7315 4.55496C13.7658 5.2968 13.7729 5.51944 13.7729 7.39824C13.7729 9.27704 13.7658 9.50056 13.7315 10.2424C13.7007 10.9288 13.5854 11.301 13.4895 11.5492C13.3766 11.8549 13.1965 12.1313 12.9624 12.3579C12.716 12.6043 12.4819 12.7566 12.1528 12.8842C11.9064 12.981 11.5333 13.0954 10.846 13.127C10.1041 13.1605 9.8815 13.1684 8.00182 13.1684C6.12214 13.1684 5.89862 13.1605 5.15678 13.127C4.47038 13.0954 4.09814 12.981 3.84998 12.8842C3.54418 12.7715 3.26753 12.5916 3.04038 12.3579C2.80608 12.1309 2.62565 11.8543 2.51238 11.5483C2.41646 11.301 2.30118 10.9279 2.27038 10.2415C2.23694 9.49968 2.2299 9.27704 2.2299 7.39648C2.2299 5.5168 2.23694 5.29504 2.27038 4.5532C2.30206 3.8668 2.41646 3.49368 2.51326 3.24552C2.64086 2.91728 2.79398 2.68232 3.04038 2.43592C3.28678 2.18952 3.52086 2.03728 3.84998 1.90968C4.09814 1.81288 4.47038 1.69848 5.15678 1.6668C5.80622 1.63688 6.0579 1.62808 7.36998 1.6272V1.62896ZM11.7594 2.7976C11.6485 2.7976 11.5386 2.81945 11.4361 2.86191C11.3336 2.90436 11.2405 2.96659 11.1621 3.04504C11.0836 3.12348 11.0214 3.21661 10.9789 3.31911C10.9365 3.42161 10.9146 3.53146 10.9146 3.6424C10.9146 3.75334 10.9365 3.8632 10.9789 3.96569C11.0214 4.06819 11.0836 4.16132 11.1621 4.23976C11.2405 4.31821 11.3336 4.38044 11.4361 4.42289C11.5386 4.46535 11.6485 4.4872 11.7594 4.4872C11.9835 4.4872 12.1984 4.3982 12.3568 4.23976C12.5152 4.08133 12.6042 3.86646 12.6042 3.6424C12.6042 3.41835 12.5152 3.20347 12.3568 3.04504C12.1984 2.88661 11.9835 2.7976 11.7594 2.7976ZM8.00182 3.78496C7.52228 3.77748 7.04604 3.86547 6.60084 4.0438C6.15563 4.22214 5.75035 4.48726 5.40859 4.82373C5.06683 5.1602 4.79542 5.5613 4.61016 6.00367C4.4249 6.44604 4.32949 6.92084 4.32949 7.40044C4.32949 7.88004 4.4249 8.35484 4.61016 8.79721C4.79542 9.23958 5.06683 9.64068 5.40859 9.97715C5.75035 10.3136 6.15563 10.5787 6.60084 10.7571C7.04604 10.9354 7.52228 11.0234 8.00182 11.0159C8.95093 11.0011 9.85616 10.6137 10.5221 9.93726C11.1881 9.26084 11.5613 8.34967 11.5613 7.40044C11.5613 6.45121 11.1881 5.54004 10.5221 4.86362C9.85616 4.1872 8.95093 3.79977 8.00182 3.78496ZM8.00182 5.05304C8.62427 5.05304 9.22123 5.30031 9.66137 5.74045C10.1015 6.18059 10.3488 6.77755 10.3488 7.4C10.3488 8.02245 10.1015 8.61941 9.66137 9.05955C9.22123 9.49969 8.62427 9.74696 8.00182 9.74696C7.37937 9.74696 6.78241 9.49969 6.34227 9.05955C5.90213 8.61941 5.65486 8.02245 5.65486 7.4C5.65486 6.77755 5.90213 6.18059 6.34227 5.74045C6.78241 5.30031 7.37937 5.05304 8.00182 5.05304Z"
                    fill="#27272A"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div> */}
      </div>
      <p className="text-xs  text-gray-200 md:text-base text-center">© 2023-StrayAidConnect </p>
    </div>
    </div>




  )
}

export default LandingPageOne;
