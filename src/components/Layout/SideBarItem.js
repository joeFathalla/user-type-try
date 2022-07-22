import React from "react";
import Checkbox from "@mui/material/Checkbox";
import LockIcon from "@mui/icons-material/Lock";
import { Menu } from "@headlessui/react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import CustomDropdownMenu from "../Shared/CustomDropdownMenu";

function SideBarItem({ item, selectItem, selectedId }) {
  return (
    <div
      className={
        item.id === selectedId
          ? "py-2 border-y-[1px] border-green-300 w-full m-0 bg-green-100"
          : "py-2 border-y-[1px] border-gray-300 w-full m-0 hover:bg-green-100 hover:border-green-300"
      }
    >
      <div className="flex justify-around items-center px-3 py-2 w-full m-0">
        <Checkbox
          checked={item.id === selectedId}
          disabled={item.isLocked}
          onChange={(e) => selectItem(item)}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div className="flex-1">
          <span className="block font-bold text-md">{item.name}</span>
          <span className="block text-sm italic">
            {item.users.length} users
          </span>
        </div>
        <div>
          {item.isLocked ? (
            <LockIcon />
          ) : (
            <CustomDropdownMenu
              button={
                <div className="flex justify-around items-center ">
                  <DotsHorizontalIcon className="h-6 w-6" />
                </div>
              }
            >
              <Menu.Item>
                {() => (
                  <button
                    className="block mx-3 my-2 cursor-pointer w-full text-left"
                    onClick={() => selectItem(item)}
                  >
                    <span>Edit</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button
                    className="block mx-3 my-2 cursor-pointer w-full text-left"
                    onClick={() => selectItem(item)}
                  >
                    <span>Assign User</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button
                    className="block mx-3 my-2 cursor-pointer w-full text-left"
                    onClick={() => {
                      console.log("assign group item " + item.id);
                    }}
                  >
                    <span>Assign Group</span>
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <button
                    className="block mx-3 my-2 cursor-pointer w-full text-left"
                    onClick={() => {
                      console.log("deleting item " + item.id);
                    }}
                  >
                    <span>Delete</span>
                  </button>
                )}
              </Menu.Item>
            </CustomDropdownMenu>
          )}
        </div>
      </div>
    </div>
  );
}

export default SideBarItem;
