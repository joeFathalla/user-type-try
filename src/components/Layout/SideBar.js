import React, { useState, useRef } from "react";
import { Transition } from "@headlessui/react";
import Checkbox from "@mui/material/Checkbox";
import { SearchIcon } from "@heroicons/react/outline";
import SideBarItem from "./SideBarItem";

const Sidebar = ({
  isOpen,
  items,
  selectProfileHandler,
  selectedProfileId
}) => {
  const navRef = useRef();
  const [searchText, setSearchText] = useState("");
  const [allItems, setAllItems] = useState(items);
  const [allItemsSelected, setAllItemsSelected] = useState(false);
  const [sortedAsc, setSortedAsc] = useState(false);

  const handleChangeText = (e) => {
    let newValue = e.target.value;
    setSearchText(newValue);
    if (searchText.length <= 2) {
      setAllItems(items);
    } else {
      let newItem = items.filter((item) => item.name.includes(searchText));
      setAllItems(newItem);
    }
  };

  return (
    <Transition
      show={isOpen}
      enter="transition ease-out duration-100 transform"
      enterFrom="opacity-0 -translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="transition ease duration-100 transform"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 -translate-x-full"
      className="md:h-full w-full md:w-[25vw]"
    >
      {() => (
        <div className="bg-gray-50 h-full w-full ">
          <div ref={navRef} className="w-full pt-4 pb-3 space-y-1 ">
            <div className="flex justify-between items-center mb-5 px-2">
              <h5 className="text-xl font-bold">Profiles</h5>
              <button className="bg-transparent text-sm hover:bg-green-500 text-[#191919] font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
                + New Profile
              </button>
            </div>
            <div className="text-center">
              <div className="flex justify-around items-center m-4 border rounded bg-white px-2 shadow focus:shadow-outline">
                <SearchIcon className="w-4 h-4" />
                <input
                  className=" appearance-none   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none "
                  id="search"
                  type="text"
                  autoComplete="off"
                  placeholder="Search..."
                  value={searchText}
                  onChange={handleChangeText}
                />
              </div>
            </div>
            <div className="flex justify-around items-center px-3 ">
              <Checkbox
                checked={allItemsSelected}
                onChange={(e) => setAllItemsSelected(e.target.checked)}
                inputProps={{ "aria-label": "controlled" }}
              />
              <div className="flex-1 text-gray-500">
                <span>items</span>
              </div>
              <div>
                <button
                  onClick={() => setSortedAsc((prev) => !prev)}
                  className="bg-gray-200 text-sm hover:bg-gray-100 text-[#191919] font-semibold hover:text-white p-2 rounded"
                >
                  {sortedAsc ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 21l6-8h-4v-10h-4v10h-4l6 8zm16-12h-8v-2h8v2zm2-6h-10v2h10v-2zm-4 8h-6v2h6v-2zm-2 4h-4v2h4v-2zm-2 4h-2v2h2v-2z"
                        fill="#2F4F4F"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6 3l-6 8h4v10h4v-10h4l-6-8zm16 6h-8v-2h8v2zm2-6h-10v2h10v-2zm-4 8h-6v2h6v-2zm-2 4h-4v2h4v-2zm-2 4h-2v2h2v-2z"
                        fill="#2F4F4F"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            {allItems.length !== 0 ? (
              <div>
                {allItems.map((item) => (
                  <SideBarItem
                    item={item}
                    key={item.id}
                    selectItem={selectProfileHandler}
                    selectedId={selectedProfileId}
                  />
                ))}
              </div>
            ) : (
              <div className="pt-8 text-center font-bold">
                <span>No Profile found </span>
              </div>
            )}
          </div>
        </div>
      )}
    </Transition>
  );
};

export default Sidebar;
