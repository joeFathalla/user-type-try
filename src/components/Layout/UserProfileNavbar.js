import React from "react";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/outline";
import CustomAvatar from "../Shared/CustomAvatar";
import CustomDropdownMenu from "../Shared/CustomDropdownMenu";

function UserProfileNavbar() {
  return (
    <div className="flex justify-between items-center space-x-2 px-2 w-full">
      <span className="font-semibold text-xs md:text-sm ">Joseph Ashraf</span>
      <CustomDropdownMenu
        button={
          <div className="flex justify-around items-center ">
            <div className="w-6 h-6">
              <CustomAvatar text="Joseph Ashraf" />
            </div>
            <ChevronDownIcon className="h-3 w-3" />
          </div>
        }
      >
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
      </CustomDropdownMenu>
    </div>
  );
}

export default UserProfileNavbar;
