"use client";

import Link from "next/link";
import { useState } from "react";
import Navbar from "./Navbar";

const Header = () => {
  const [navbar, setnavbar] = useState(false);

  const toggleNavbar = () => {
    setnavbar(!navbar);
  };

  return (
    <header className="w-full bg-Secondary-clr p-5 shadow-customHeader">
      <div className="flex justify-between items-center gap-3">
        <Link href="/" className="">
          <p className="font-bold text-2xl">EduQuest</p>
        </Link>

        <div className="flex max-886:hidden" data-navbar>
          <ul className="flex">
            <li className="cursor-pointer mr-6">
              <p className="hover:text-Accent-clr font-medium">Home</p>
            </li>

            <li className="cursor-pointer mr-6">
              <p className="hover:text-Accent-clr font-medium">About</p>
            </li>

            <li className="cursor-pointer mr-6">
              <p className="hover:text-Accent-clr font-medium">Courses</p>
            </li>

            <li className="cursor-pointer mr-6">
              <p className="hover:text-Accent-clr font-medium">Blog</p>
            </li>

            <li className="cursor-pointer mr-6">
              <p className="hover:text-Accent-clr font-medium">Contact</p>
            </li>
          </ul>
        </div>

        <div className="flex items-center">
          <div className="mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer hover:stroke-Accent-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </div>
          <div className="mr-8 relative">
            <p className="cursor-pointer text-sm absolute -top-2 -right-2 bg-Accent-clr px-1 rounded-full text-Font-white-clr">
              0
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 cursor-pointer hover:stroke-Accent-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
          </div>
          <div className="max-563:hidden group hover:text-Font-white-clr flex bg-Accent-clr px-5 py-3 rounded-md shadow-custom cursor-pointer">
            <p className="font-bold mr-2 group-hover:text-Font-white-clr">
              Try for free
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 group-hover:stroke-Font-white-clr"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
          <div className="min-886:hidden max-886:block max-563:ml-0 ml-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              onClick={toggleNavbar}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {navbar && <Navbar requestCloseNavbar={toggleNavbar} />}
    </header>
  );
};

export default Header;
