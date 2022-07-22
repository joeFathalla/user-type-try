import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import LockIcon from "@mui/icons-material/Lock";
import { Menu } from "@headlessui/react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import CustomDropdownMenu from "../Shared/CustomDropdownMenu";

function SideBarItem({ item, selectItem }) {
  const [itemSelected, setItemSelected] = useState(false);
  const [menuIsOpened, setMenuIsOpened] = useState(false);
  return (
    <div className="py-2 border-y-[1px] border-gray-300 w-full m-0">
      <div className="flex justify-around items-center px-3 py-2 w-full m-0">
        <Checkbox
          checked={itemSelected}
          onChange={(e) => setItemSelected(e.target.checked)}
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
                  <a
                    className="block mx-3 my-2 cursor-pointer"
                    onClick={() => selectItem(item)}
                  >
                    <span>Edit</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <a
                    className="block mx-3 my-2 cursor-pointer"
                    onClick={() => selectItem(item)}
                  >
                    <span>Assign User</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <a
                    className="block mx-3 my-2 cursor-pointer"
                    onClick={() => {
                      console.log("assign group item " + item.id);
                    }}
                  >
                    <span>Assign Group</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {() => (
                  <a
                    className="block mx-3 my-2 cursor-pointer"
                    onClick={() => {
                      console.log("deleting item " + item.id);
                    }}
                  >
                    <span>Delete</span>
                  </a>
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
