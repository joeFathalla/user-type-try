import React, { useRef } from "react";
import { Transition } from "@headlessui/react";

const Sidebar = ({ isOpen }) => {
  const navRef = useRef();
  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 -translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="transition ease duration-100 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 -translate-x-full"
      className="h-full"
    >
      {/* {(ref) => ( */}
      {() => (
        <div className="bg-gray-50 h-full w-full md:w-[25vw]">
          <div ref={navRef} className="w-full px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <span>Profiles</span>
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Sidebar;
