import {useState} from 'react'
import '../firebase'
import './LandingPageOne'


const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin h-6 w-6 border-t-2
    //    border-black
        border-r-4 border-b-7 border-blue-200 rounded-full"></div>
    </div>
  );
};


export function Reports() {
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
    }, 1800);
  
    event.preventDefault();
    const { firstName, msg, email, phoneNum, loc } = volunteersData;
    let popupMessage = '';
    if (!firstName || !msg || !email || !phoneNum || !loc) {
      popupMessage = 'Please fill out all fields before submitting report.';
    } else {
      try {
        const res = await fetch(
          'https://strayaid-connect-default-rtdb.firebaseio.com/landingPage-Reporting.json',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              firstName,
              msg,
              email,
              phoneNum,
              loc,
            }),
          }
        );
  
        if (res.ok) {
          setvolunteersData({
            firstName: '',
            msg: '',
            email: '',
            phoneNum: '',
            loc: '',
          });
          popupMessage = 'Report submitted successfully';
        } else {
          popupMessage = 'Report not submitted. Please try again.';
        }
      } catch (error) {
        // console.error('Error:', error);
        popupMessage = 'Report not submitted due to an internal error.';
      }
    }
    setPopupMessage(popupMessage);
  };
  

  return (
    <div className='min-h-screen bg-black' style={{ 
      width: '100vw',
      height: '80%',
      // backgroundImage: `url(${bg})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center'  }}> 
      <section>
      {/* <header className="sticky top-0 z-30 w-full border-b bg-white pb-2 ">
        <div className="mx-auto flex max--7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2 ">
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
                    
            <p className="text-2xl font-bold text-gray-200 md:text-4xl justify-center flex"> Incident Reporting </p>
                </p>
                <form className="mt-8 space-y-4">
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-400"
                      htmlFor="first_name"
                    >
                      Your Name
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="first_name"
                      placeholder="First Name"
                      name='firstName'
                      value= {volunteersData.firstName}
                      onChange={postVolunteersData}
                      style={{ color: 'white' }}
                    />
                  </div>
                  
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-400"
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
                      style={{ color: 'white' }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-400"
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
                      style={{ color: 'white' }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-400"
                      htmlFor="use_loc"
                    >
                      Location
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      type="text"
                      id="location"
                      placeholder="Where it happened?"
                      name='loc'
                      value={volunteersData.loc}
                      onChange={postVolunteersData}
                      style={{ color: 'white' }}
                    />
                  </div>
                  <div className="grid w-full  items-center gap-1.5">
                    <label
                      className="text-sm font-medium leading-none text-gray-400 peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="message"
                    >
                      Reporting
                    </label>
                    <textarea
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:text-gray-50 dark:focus:ring-gray-400 dark:focus:ring-offset-gray-900"
                      id="message"
                      placeholder="Description about incident"
                      cols={3}
                      name='msg'
                      value={volunteersData.msg}
                      onChange={postVolunteersData}
                      style={{ color: 'white' }}

                    />
                  </div>
                  <div>
                    {isLoading ? (
                      <LoadingSpinner />
                    ) : (
                      <button
                        type="button"
                        className="w-full rounded-md bg-white px-3 py-2 text-sm font-extrabold text-black font-semi shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black items-center justify-center"
                        onClick={submitData}
                      >
                        Report
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

    </div>  )
  
}
export default Reports;
