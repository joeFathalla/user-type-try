import React from "react";
import CustomAvatar from "../Shared/CustomAvatar";
import Checkbox from "@mui/material/Checkbox";

function SingleUser({ user, selectedUsers, selectedUserHandler }) {
  const onChangeHandler = (e) => {
    let newUsers = [...selectedUsers];
    if (e.target.checked) {
      newUsers.push(user);
    } else {
      let userIndex = newUsers.findIndex((u) => u.id === user.id);
      newUsers.splice(userIndex, 1);
    }
    selectedUserHandler(newUsers);
  };

  return (
    <div
      className={
        selectedUsers.findIndex((u) => u.id === user.id) !== -1
          ? "flex justify-around items-center border border-green-300 space-x-1 bg-green-100"
          : "flex justify-around items-center border border-gray-50 space-x-1"
      }
    >
      <div>
        <Checkbox
          checked={selectedUsers.findIndex((u) => u.id === user.id) !== -1}
          onChange={onChangeHandler}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div className="w-6 h-6">
        <CustomAvatar text={user.name} />
      </div>
      <div className="flex-1 text-left">
        <span className="font-semibold">{user.name}</span>
      </div>
    </div>
  );
}

export default SingleUser;
