import React from "react";
import Link from "next/link";

const Navbar = (props: any) => {
  return (
    <div className="fixed z-50 top-0 left-0 right-0 bottom-0 overflow-hidden bg-bg-blur">
      <div className="w-1/2 h-screen p-5 bg-Primary-clr max-563:w-3/4">
        <div className="flex justify-between items-center">
          <Link href="/" className="">
            <p className="font-bold text-2xl">EduQuest</p>
          </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 cursor-pointer hover:stroke-Accent-clr"
            onClick={props.requestCloseNavbar}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex mt-8 w-full" data-navbar>
          <ul className="flex flex-col w-full">
            <li className="cursor-pointer mb-6 border-b w-full pb-1">
              <p className="hover:text-Accent-clr font-medium">Home</p>
            </li>

            <li className="cursor-pointer mb-6 border-b w-full pb-1">
              <p className="hover:text-Accent-clr font-medium">About</p>
            </li>

            <li className="cursor-pointer mb-6 border-b w-full pb-1">
              <p className="hover:text-Accent-clr font-medium">Courses</p>
            </li>

            <li className="cursor-pointer mb-6 border-b w-full pb-1">
              <p className="hover:text-Accent-clr font-medium">Blog</p>
            </li>

            <li className="cursor-pointer mb-6 border-b w-full pb-1">
              <p className="hover:text-Accent-clr font-medium">Contact</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
