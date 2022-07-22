import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UsersList from "./UsersList";

import { addUser, removeUser } from "../../store/actions/users";

function UsersComponent() {
  const dispatch = useDispatch();
  const availableUsers = useSelector((state) => state.users.availableUsers);
  const assignUsers = useSelector((state) => state.users.assignUsers);
  const [selectedAvailableUsers, setSelectAvailableUsers] = useState([]);
  const [selectedAssignUsers, setSelectAssignUsers] = useState([]);

  const assignHandler = () => {
    dispatch(addUser(selectedAvailableUsers));
    setSelectAvailableUsers([]);
    setSelectAssignUsers([]);
  };

  const removeHandler = () => {
    dispatch(removeUser(selectedAssignUsers));
    setSelectAvailableUsers([]);
    setSelectAssignUsers([]);
  };

  return (
    <div className="block md:flex justify-around items-center mt-8 h-full">
      <div className="flex-1 text-center h-96">
        <UsersList
          title={`Available Users (${availableUsers.length})`}
          searchPlaceholder="Search available users"
          users={availableUsers}
          noUsersMsg="No Available users"
          selectedUsers={selectedAvailableUsers}
          selectedUserHandler={setSelectAvailableUsers}
        />
      </div>
      <div className="my-9 text-center h-full flex flex-col justify-center items-center space-y-3">
        <div>
          <button
            onClick={assignHandler}
            disabled={selectedAvailableUsers.length === 0}
            className={
              selectedAvailableUsers.length === 0
                ? "w-36 bg-transparent text-sm text-gray-500 font-semibold py-2 px-4 border rounded cursor-not-allowed"
                : "w-36 bg-transparent text-sm hover:bg-green-500 text-[#191919] font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            }
          >
            {"Assign ->"}
          </button>
        </div>
        <div>
          <button
            onClick={removeHandler}
            disabled={selectedAssignUsers.length === 0}
            className={
              selectedAssignUsers.length === 0
                ? "w-36 bg-transparent text-sm text-gray-500 font-semibold py-2 px-4 border rounded cursor-not-allowed"
                : "w-36 bg-transparent text-sm hover:bg-green-500 text-[#191919] font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            }
          >
            {"<- Remove"}
          </button>
        </div>
      </div>
      <div className="flex-1 text-center h-96">
        <UsersList
          title={`Assigned Users (${assignUsers.length})`}
          searchPlaceholder="Search assigned users"
          users={assignUsers}
          noUsersMsg="No Assigned users"
          selectedUsers={selectedAssignUsers}
          selectedUserHandler={setSelectAssignUsers}
        />
      </div>
    </div>
  );
}

export default UsersComponent;
