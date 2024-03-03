'use client';

export const List2 = () => {
  return (
    <section className="overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 py-24">
        <div className="mx-auto flex flex-wrap items-center lg:w-4/5">
          <img
            alt="stray2"
            className="h-70 w-full rounded object-cover lg:h-96 lg:w-1/2"
            src="https://dogwithblog.in/wp-content/uploads/2019/09/mumbai-dog-helpline.jpg"
          />
          <div className="mt-6 w-full lg:mt-0 lg:w-1/2 lg:pl-10">
            <h2 className="text-sm font-semibold tracking-widest text-gray-500"></h2>
            <h1 className="my-4 text-3xl font-semibold text-black">Aryan</h1>
            <div className="my-4 flex items-center">
              <span className="flex items-center space-x-1">
                Traits:
                
                <span className="ml-3 inline-block text-xs font-semibold">Mischeivous, potty trained, furry baby</span>
              </span>
            </div>
            <p className="leading-relaxed">
            Domesticated and well trained. But was abussed by his previous owner.
            </p>
            <div className="mb-5 mt-6 flex items-center border-b-2 border-gray-100 pb-5">
              
              
            </div>
            <div className="flex items-center justify-between">
              {/* <span className="title-font text-xl font-bold text-gray-900">₹47,199</span> */}
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Contact for more <details></details>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
