import React from "react";

function Navbar({ setIsOpen, isOpen }) {
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  const now = new Date(Date.now()).toLocaleString();
  return (
    <div>
      <nav className="border-[1px]">
        <div className="mx-auto px-2">
          <div className="flex items-center justify-between h-8 w-full">
            <div className="flex justify-start items-center flex-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-black focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
              <div>
                <span>Good Morning!,</span>
                <span>{now}</span>
              </div>
            </div>
            <div className="flex justify-between items-center divide-x ">
              <div className="px-2">
                <span>?</span>
                <span>notification</span>
              </div>
              <div className="px-2">
                <span>Nader Amer</span>
                <span>avatar dropdown</span>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
