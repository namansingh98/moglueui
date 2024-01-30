const Facilities = () => {
  return (
    <>
      <div className="flex mt-10  justify-center items-center ">
        <h2 className="md:text-4xl mt-5 font-semibold sm:text-xl">
          What we offer you
        </h2>
      </div>
          <div className="w-10 h-1 dark:bg-white mx-auto mt-5 mb-10" />
      <div className="  flex  gap-4 items-center justify-center">
        <div className="">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img
              className="w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
            <p className="my-4 pl-4 text-xl  font-bold text-gray-500">Better Performance</p>
            <p className="mb-4 ml-4  font-semibold text-gray-800">
              We Provide you the best Performance then the other apps. You can feel it.
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img
              className="w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
            <p className="my-4 pl-4 text-xl font-bold text-gray-500">Better UI</p>
            <p className="mb-4 ml-4  font-semibold text-gray-800">
              We Build a Brand New Layout with simplest and with new look and feel 
            </p>
          </div>
        </div>
        <div className=" ">
          <div className="max-w-xs cursor-pointer rounded-lg bg-white p-2 shadow duration-150 hover:scale-105 hover:shadow-md">
            <img
              className="w-full rounded-lg object-cover object-center"
              src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="product"
            />
            <p className="my-4 pl-4 text-xl font-bold text-gray-800">Less Time Opening</p>
            <p className="mb-4 ml-4  font-semibold text-gray-500">
            Enhanced and Optimized Load Time for better experience and save your precious time
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Facilities;
