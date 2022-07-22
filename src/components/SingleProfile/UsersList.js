import React, { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { SearchIcon } from "@heroicons/react/outline";
import SingleUser from "./SingleUser";

function UsersList({ title, searchPlaceholder, users, noUsersMsg }) {
  const [selectedAll, setSelectedAll] = useState(false);
  return (
    <div className="border border-gray-100 rounded mx-auto h-full w-full md:w-[80%] md:max-w-[350px]">
      {/* header */}
      <div className="flex items-center h-10 bg-gray-100 py-5">
        <Checkbox
          checked={selectedAll}
          onChange={(e) => setSelectedAll(e.target.checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
        <div>
          <span>{title}</span>
        </div>
      </div>

      {/* search input */}
      <div className="flex justify-around items-center p-2  bg-white">
        <input
          className=" appearance-none   w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
          id="search"
          type="text"
          autoComplete="off"
          placeholder={searchPlaceholder}
        />
        <SearchIcon className="w-4 h-4" />
      </div>
      {/* users List */}
      <div className="h-72 overflow-y-auto">
        {users.length !== 0 ? (
          <div>
            {users.map((user) => (
              <SingleUser key={user.id} name={user.name} />
            ))}
          </div>
        ) : (
          <div>
            <span>{noUsersMsg}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default UsersList;
