import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-12 max-886:grid-cols-6 max-563:grid-cols-3 gap-8 px-10 py-8 bg-Secondary-clr shadow-customFooter">
        <div className="p-3 col-span-3">
          <p className="font-bold text-3xl">EduQuest</p>
          <p className="my-3 text-sm font-medium text-Font-gray-clr">
            Lorem ipsum dolor amet consecto adi pisicing elit sed eiusm tempor
            incidid unt labore dolore.
          </p>
          <p className="text-sm font-medium">Add: lorem ipsum</p>
          <p className="text-sm font-medium">Call: +X XXXXXXXXXXX</p>
          <p className="text-sm font-medium">Email: XXXX@XXXX.XXX</p>
        </div>
        <div className="p-3 col-span-3">
          <p className="font-bold text-xl">Online Platform</p>
          <ul className="mt-4">
            <p className="mb-2 text-sm font-medium cursor-pointer hover:text-Font-accent-clr">
              About
            </p>
            <p className="mb-2 text-sm font-medium cursor-pointer hover:text-Font-accent-clr">
              Courses
            </p>
            <p className="mb-2 text-sm font-medium cursor-pointer hover:text-Font-accent-clr">
              Instructor
            </p>
            <p className="mb-2 text-sm font-medium cursor-pointer hover:text-Font-accent-clr">
              Guide
            </p>
          </ul>
        </div>
        <div className="p-3 col-span-2">
          <p className="font-bold text-xl">Links</p>
          <ul className="mt-4">
            <li className="font-medium text-sm mb-2 hover:text-Font-accent-clr cursor-pointer">
              Contact Us
            </li>
            <li className="font-medium text-sm mb-2 hover:text-Font-accent-clr cursor-pointer">
              Gallery
            </li>
            <li className="font-medium text-sm mb-2 hover:text-Font-accent-clr cursor-pointer">
              News
            </li>
          </ul>
        </div>
        <div className="p-3 col-span-4">
          <p className="font-bold text-lg">Contact</p>
          <p className="font-medium text-sm my-4 text-Font-gray-clr">
            Enter your email address to register to our newsletter subscription.
          </p>
          <div className="grid grid-cols-6 gap-x-3 items-center">
            <input
              className="px-2 col-span-4 rounded-md border-3 py-2"
              type="text"
              placeholder="Your email"
            />
            <div className="bg-Accent-clr col-span-2 flex py-2 items-center justify-center rounded-md border-3 border-custom-border shadow-custom">
              <p className="font-medium text-sm mr-1">Send</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-Dark-clr flex py-3 justify-center">
        <p className="text-Font-white-clr text-sm max-563:text-center max-563:px-5">
          Copyright 2024 All Rights Reserved by{" "}
          <span className="text-Font-accent-clr font-bold cursor-pointer">
            zidan haryanto
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
