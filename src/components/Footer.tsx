import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center ">
        <div className="md:w-2/3 w-full px-4 dark:text-white flex flex-col">
          <div className="flex flex-col">
            <div className="flex mt-24 mb-12 flex-row justify-evenly">
           
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                About
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Services
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Why us
              </a>
              <a className="hidden md:block cursor-pointer text-gray-600 hover:text-white uppercase">
                Contact
              </a>
        
            </div>
            <hr className="border-gray-600" />
            <p className="w-full text-center my-12 text-gray-600">
              Copyright © By Group of Upcoming Web devs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
