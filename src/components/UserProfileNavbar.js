import React from "react";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import { Avatar } from "@material-tailwind/react";
import CustomAvatar from "./CustomAvatar";

function UserProfileNavbar() {
  return (
    <div className="flex justify-between items-center space-x-2 px-2 w-full">
      <span className="font-semibold text-xs md:text-sm ">Nader Amer</span>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button>
            {/* <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"> */}
            <div className="flex justify-around items-center ">
              <CustomAvatar text="NA" hexaColor="#6531AC" />
              <ChevronDownIcon className="h-3 w-3" />
            </div>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-grey-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {() => (
                <div className="mx-3 my-2">
                  <span>Profile</span>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <div className="mx-3 my-2">
                  <span>Settings</span>
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <div className="mx-3 my-2">
                  <span>Logout</span>
                </div>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default UserProfileNavbar;
