import React, { useEffect, useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import { SearchIcon } from "@heroicons/react/outline";
import SingleUser from "./SingleUser";

function UsersList({
  title,
  searchPlaceholder,
  users,
  noUsersMsg,
  selectedUsers,
  selectedUserHandler
}) {
  const [usersList, setUsersList] = useState([]);
  const [searchText, setSearchText] = useState("");

  const handleChangeText = (e) => {
    let newValue = e.target.value;
    setSearchText(newValue);
    if (searchText.length <= 2) {
      setUsersList(users);
    } else {
      let newUsersList = users.filter((user) => user.name.includes(searchText));
      setUsersList(newUsersList);
    }
  };

  useEffect(() => {
    if (usersList !== users) {
      setUsersList(users);
    }
  }, [users]);

  const isSelectedAll = () => {
    if (users.length === 0) {
      return false;
    }
    let usersArray = [...users];
    let selectedAll = true;
    usersArray.map((u) => {
      let userIndex = selectedUsers.findIndex((us) => us.id === u.id);
      if (userIndex === -1) {
        selectedAll = false;
      }
    });
    return selectedAll;
  };

  const setSelectedAll = (e) => {
    if (!e.target.checked) {
      selectedUserHandler([]);
    } else {
      selectedUserHandler([...users]);
    }
  };

  return (
    <div className="border border-gray-100 rounded mx-auto h-full w-full md:w-[80%] md:max-w-[350px]">
      {/* header */}
      <div className="flex items-center h-10 bg-gray-100 py-5">
        <Checkbox
          checked={isSelectedAll()}
          indeterminate={
            !isSelectedAll() && users.length !== 0 && selectedUsers.length !== 0
          }
          onChange={setSelectedAll}
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
          value={searchText}
          onChange={handleChangeText}
        />
        <SearchIcon className="w-4 h-4" />
      </div>
      {/* users List */}
      <div className="h-72 overflow-y-auto">
        {usersList.length !== 0 ? (
          <div>
            {usersList.map((user) => (
              <SingleUser
                key={user.id}
                user={user}
                selectedUsers={selectedUsers}
                selectedUserHandler={selectedUserHandler}
              />
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
