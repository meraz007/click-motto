"use client";

import NavLink from "./nav-link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const togglePopup = () => {
    setIsOpenPopup(!isOpenPopup);
  };
    return(
        <>
        <nav className="dark:bg-white">
          <div className="">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 justify-between mx-2">
                  <img className="h-8 w-auto" src="img/logo.png" alt="Your Company" />
                  <button onClick={toggleDropdown} className="md:hidden block text-black">|||</button>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4 items-center">
                    <NavLink href="#" buttonText="Explore" />
                    <NavLink href="#" buttonText="Discover" />
                    <NavLink href="#" buttonText="For Professionals" />
                    <button className="text-black"  onClick={togglePopup}>...</button>
                    <button className="rounded-lg border px-6 py-3 text-[15px] font-medium text-[#818181]">Submit Photo</button>
                    <span className="text-[#818181]">|</span>
                    <NavLink href="#" buttonText="Login" />
                    <a className="text-white px-4 py-2 text-[15px] font-medium bg-[#e17800] rounded-lg" href="">Join Free</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </nav>
      {isOpen && (
              <div className="z-[99999] origin-top-right absolute right-0 w-full h-screen rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <div className="flex flex-col gap-6 space-x-4">
                    <NavLink href="#" buttonText="Explore" />
                    <NavLink href="#" buttonText="Discover" />
                    <NavLink href="#" buttonText="For Professionals" />
                    <button className="text-black">...</button>
                    <button className="rounded-lg border px-6 py-3 text-[15px] font-medium text-[#818181]">Submit Photo</button>
                    <span className="text-[#818181]">|</span>
                    <NavLink href="#" buttonText="Login" />
                    <a className="text-white px-4 py-2 text-[15px] font-medium bg-[#e17800] rounded-lg" href="">Join Free</a>
                  </div>
                </div>
              </div>
            )}
          {isOpenPopup && (
            <div className="z-[99999] origin-top-right absolute right-[200px] w-[200px] bg-black rounded-md shadow-lg  ring-1 ring-black ring-opacity-5">
              <ul className="text-white flex flex-col">
                <li className="hover:bg-[#1c1c1c] px-4 py-2 cursor-pointer">About Click Moto</li>
                <li className="hover:bg-[#1c1c1c] px-4 py-2 cursor-pointer">Pricing</li>
                <li className="hover:bg-[#1c1c1c] px-4 py-2 cursor-pointer">License</li>
                <li className="hover:bg-[#1c1c1c] px-4 py-4">Partnerships</li>
                <li className="hover:bg-[#1c1c1c] px-4 py-2 cursor-pointer">Blog</li>
                <li className="hover:bg-[#1c1c1c] px-4 py-2 cursor-pointer">Help</li>
                <li className="hover:bg-[#1c1c1c] px-4 py-2 cursor-pointer">Join The Team</li>
                <div className="border-t border-[#1c1c1c]"></div>

                <div className="flex gap-2">
                  <img src="img/icon-1.png" alt="icon" />
                  <img src="img/icon-2.png" alt="icon" />
                  <img src="img/icon-3.png" alt="icon" />
                  <img src="img/icon-4.png" alt="icon" />
                  <img src="img/icon-5.png" alt="icon" />
                  <img src="img/icon-6.png" alt="icon" />
                </div>
              </ul>
          </div>
          )}
        </>
    )
}