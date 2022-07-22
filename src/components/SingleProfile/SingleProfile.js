import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomTabs from "./CustomTabs";
import { Menu } from "@headlessui/react";
import { DotsHorizontalIcon } from "@heroicons/react/outline";
import CustomDropdownMenu from "../Shared/CustomDropdownMenu";
import { saveProfile } from "../../store/actions/users";

function SingleProfile({ profile }) {
  const dispatch = useDispatch();
  const saveHandler = () => {
    dispatch(saveProfile());
  };

  return (
    <div>
      {/* details and save button part */}
      <div className="block w-full md:flex justify-between items-start py-8 px-5">
        <div className="flex-1">
          <div className=" flex justify-between md:justify-start items-center space-x-4 mb-5">
            <h3 className="text-2xl font-bold">{profile.name}</h3>
            <CustomDropdownMenu
              button={
                <div className="flex justify-center items-center">
                  <DotsHorizontalIcon className="h-6 w-6 text-gray-500" />
                </div>
              }
            >
              <Menu.Item>
                {() => (
                  <a
                    className="block mx-3 my-2 cursor-pointer"
                    onClick={() => {}}
                  >
                    <span>Delete</span>
                  </a>
                )}
              </Menu.Item>
            </CustomDropdownMenu>
          </div>
          <div className="w-full md:w-[60%]">
            <p className="text-gray-400">
              Bingo is a well integrated data reconciliation platform that
              performs end-to-end reconciliation of electronic transactions
              between host, switch and electronic journal logs
            </p>
          </div>
        </div>
        <div className="my-5 md:my-0 w-full md:w-auto text-center">
          <button
            onClick={saveHandler}
            className="bg-transparent text-sm bg-green-500 hover:bg-gray-50 text-white font-semibold hover:text-[#191919] py-2 px-4 border hover:border-green-500 border-transparent rounded"
          >
            Save Changes
          </button>
        </div>
      </div>
      {/* tabs and user tables  */}
      <div className="mt-8">
        <CustomTabs />
      </div>
    </div>
  );
}

export default SingleProfile;
