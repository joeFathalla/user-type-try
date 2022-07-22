import React from "react";
import { useSelector } from "react-redux";
import UsersList from "./UsersList";

function UsersComponent({ assignedUsers }) {
  const availableUsers = useSelector((state) => state.users.users);
  return (
    <div className="block md:flex justify-around items-center mt-8 h-full">
      <div className="flex-1 text-center h-96">
        <UsersList
          title={`Available Users (${availableUsers.length})`}
          searchPlaceholder="Search available users"
          users={availableUsers}
          noUsersMsg="No Available users"
        />
      </div>
      <div className="my-9 text-center h-full flex flex-col justify-center items-center space-y-3">
        <div>
          <button className="w-36 bg-transparent text-sm hover:bg-green-500 text-[#191919] font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            {"Assign ->"}
          </button>
        </div>
        <div>
          <button className="w-36 bg-transparent text-sm hover:bg-green-500 text-[#191919] font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded">
            {"<- Remove"}
          </button>
        </div>
      </div>
      <div className="flex-1 text-center h-96">
        <UsersList
          title={`Assigned Users (${assignedUsers.length})`}
          searchPlaceholder="Search assigned users"
          users={assignedUsers}
          noUsersMsg="No Assigned users"
        />
      </div>
    </div>
  );
}

export default UsersComponent;
