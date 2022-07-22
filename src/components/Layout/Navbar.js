import React from "react";
import Moment from "react-moment";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  QuestionMarkCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from "@heroicons/react/outline";
import { MenuIcon, BellIcon } from "@heroicons/react/solid";
import UserProfileNavbar from "./UserProfileNavbar";

function Navbar({ setIsOpen, isOpen }) {
  const now = new Date(Date.now());
  const hr = now.getHours();
  let greetings = "";
  if (hr >= 0 && hr < 12) {
    greetings = "Good Morning! ";
  } else if (hr == 12) {
    greetings = "Good Noon! ";
  } else if (hr >= 12 && hr <= 17) {
    greetings = "Good Afternoon!";
  } else {
    greetings = "Good Evening!";
  }

  return (
    <div className="w-full">
      <nav className="border-b-[1px] border-gray-300 w-full">
        <div className="mx-auto px-2">
          <div className="flex items-center justify-between h-10 w-full">
            <div className="flex justify-start items-center flex-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-black focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <div className="flex justify-around items-center">
                    <MenuIcon className="h-6 w-6" />
                    <ChevronRightIcon className="h-3 w-3" />
                  </div>
                ) : (
                  <div className="flex justify-around items-center">
                    <ChevronLeftIcon className="h-3 w-3" />
                    <MenuIcon className="h-6 w-6" />
                  </div>
                )}
              </button>
              <div className="hidden md:block flex-1">
                <span className="text-sm font-bold px-2 text-gray-600">
                  {greetings}
                </span>
                <span className=" text-sm">
                  <Moment format="ddd MMM DD, YYYY  hh:mm a">{now}</Moment>
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center divide-x divide-gray-300">
              <div className="flex justify-between items-center">
                <QuestionMarkCircleIcon className="h-3 w-3 md:h-6 md:w-6" />
                <div className="relative m-3 md:m-5">
                  <BellIcon className="h-4 w-4 md:h-8 md:w-8" />
                  <span className="absolute -top-1 md:top-0 left-1 md:left-3 bg-red-400 rounded-sm text-[8px] md:text-[10px] px-[3px] text-white font-bold items-center">
                    9+
                  </span>
                </div>
              </div>
              <UserProfileNavbar />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
