import {useState} from 'react'
// import { ArrowRight } from 'lucide-react'
import '../firebase'
import './LandingPageOne'
const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin h-6 w-6 border-t-2 border-black border-r-2 border-b-2 border-blue-200 rounded-full"></div>
    </div>
  );
};


export function VolunteeringForm() {
  const [popupMessage, setPopupMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);


  const [volunteersData , setvolunteersData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNum: "",
    loc: "",
  });
  let name, value;

  const postVolunteersData = (event)  => {
    name = event.target.name;
    value = event.target.value;
    setvolunteersData({...volunteersData,[name]: value});
  }

  const submitData = async (event) => {
    setIsLoading(true);
    setTimeout(() => {
      // Reset isLoading to false after a 2-second delay.
      setIsLoading(false);
    }, 1500);
  
    event.preventDefault();
    const { firstName, lastName, email, phoneNum, loc } = volunteersData;
    let popupMessage = '';
    if (!firstName || !lastName || !email || !phoneNum || !loc) {
      popupMessage = 'Please fill out all fields before submitting.';
    } else {
      try {
        const res = await fetch(
          'https://strayaid-connect-default-rtdb.firebaseio.com/landingPage-VolunteersData.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName,
              lastName,
              email,
              phoneNum,
              loc,
            }),
          }
        );
  
        if (res.ok) {
          setvolunteersData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNum: '',
            loc: '',
          });
          popupMessage = 'Data submitted successfully';
        } else {
          popupMessage = 'Data not submitted. Please try again.';
        }
      } catch (error) {
        // console.error('Error:', error);
        popupMessage = 'Data not submitted due to an error.';
      }
    }
    setPopupMessage(popupMessage);
  };
  

  return (
  <div className='bg-black min-h-screen'>
  <section className=''>
      {/* <header className="sticky top-0 z-30 w-full border-b bg-white pb-2 ">
        <div className="mx-auto flex max--7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2  ">
           <a href="/">
           <span className="font-bold">Go Back </span>
           </a>
           
          </div>

        </div>
      </header> */}
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
     
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <div className="mb-2 flex justify-center">
          </div>
          <div className="flex items-center justify-center">
              <div className="px-2 md:px-12">
                <p className="mt-4 text-lg text-gray-600">
                    
            <p className="text-2xl font-bold text-gray-900 md:text-4xl justify-center flex"> Volunteers Info. </p>
                </p>
                <form className="mt-8 space-y-4">
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="first_name"
                    >
                      First Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="first_name"
                      placeholder="First Name"
                      name='firstName'
                      value= {volunteersData.firstName}
                      onChange={postVolunteersData}
                      style={{ color: 'black' }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="last_name"
                    >
                      Last Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="last_name"
                      placeholder="Last Name"
                      name='lastName'
                      value={volunteersData.lastName}
                      onChange={postVolunteersData}
                      style={{ color: 'black' }}
                      
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="email"
                      placeholder="Email"
                      name='email'
                      value={volunteersData.email}
                      onChange={postVolunteersData}
                      style={{ color: 'black' }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="phone_number"
                    >
                      Phone number
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="tel"
                      id="phone_number"
                      placeholder="Phone number"
                      name='phoneNum'
                      value={volunteersData.phoneNum}
                      onChange={postVolunteersData}
                      style={{ color: 'black' }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-700"
                      htmlFor="use_loc"
                    >
                      Location
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="location"
                      placeholder="Your City"
                      name='loc'
                      value={volunteersData.loc}
                      onChange={postVolunteersData}
                      style={{ color: 'black' }}
                    />
                  </div>
                  <div>
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <button
                        type="button"
                        className="w-full rounded-md bg-sky-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black items-center justify-center"
                        onClick={submitData}
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
          </div>
        </div>
    </section>
  </div>
  )
  
}
export default VolunteeringForm;
