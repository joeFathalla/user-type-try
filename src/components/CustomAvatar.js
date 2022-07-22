import React from "react";

function CustomAvatar({ text, hexaColor }) {
  return (
    <div
      className="m-1 w-8 h-8 relative flex justify-center items-center rounded-full text-md text-white uppercase "
      style={{ backgroundColor: hexaColor }}
    >
      {text}
    </div>
  );
}

export default CustomAvatar;
