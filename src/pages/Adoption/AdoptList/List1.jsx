'use client';
export const List1 = () => {
  return (
    <section className="overflow-hidden">
      <header className="sticky top-0 z-30 w-full border-b bg-white pb-2 ">
        <div className="mx-auto flex max--7xl items-center justify-between px-4 py-2">
          <div className="inline-flex items-center space-x-2 ">
            <a href="/Adopt">
              <span className="font-bold">Go Back </span>
            </a>

          </div>
        </div>
      </header>
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="stray1"
            className="h-70 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgTS_-YMp19Fuo5QlMiOdPk0Mvl3SXGdswssb5WOJAZ2GqSNXPmcSqNFg8ACFgU2wDtaw&usqp=CAU"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500"></h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Dolly</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                Traits:
                <span className="ml-3 inline-block text-xs font-semibold">Trained, well behaved</span>
              </span>
            </div>
            <p className="leading-relaxed">
              Full of energy and love. Maybe you're the one she's looking for.

            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">


            </div>
            <div className="flex items-center justify-between">
              {/* <span className="title-font text-xl font-bold text-gray-900">₹47,199</span> */}
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact for more <details>
                  If you are interested in adopting Dolly, please contact us at +91 9834388053. or <a href="https://www.google.com/maps/dir/19.3946612,72.7885573/S+No.+18,+Hissa+No.03+Suncity+Road,+Vasai-Gass+Rd,+Vasai+West,+Vasai-Virar,+Maharashtra+401202/@19.3964788,72.790282,16.49z/data=!4m8!4m7!1m0!1m5!1m1!1s0x3be7ad2eff500605:0x4320b2cbe374e09f!2m2!1d72.787206!2d19.3947541?entry=ttup" target="_blank" rel="noopener noreferrer">visit us at our shelter.</a>
                </details>
              </button>

            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      <footer className='px-4 py-10 sticky'>
        <p className="text-xs font-semibold text-gray-900 md:text-base text-center ">© 2024-StrayAidConnect </p>

      </footer>
    </section>
  )
}
