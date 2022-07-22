import React from "react";
import CustomAvatar from "../Shared/CustomAvatar";
import Checkbox from "@mui/material/Checkbox";

function SingleUser({ name }) {
  return (
    <div className="flex justify-around items-center border border-gray-50 space-x-1">
      <div>
        <Checkbox
          checked={true}
          // onChange={(e) => setSelectedAll(e.target.checked)}
          inputProps={{ "aria-label": "controlled" }}
        />
      </div>
      <div className="w-6 h-6">
        <CustomAvatar text={name} />
      </div>
      <div className="flex-1 text-left">
        <span className="font-semibold">{name}</span>
      </div>
    </div>
  );
}

export default SingleUser;
