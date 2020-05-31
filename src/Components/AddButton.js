import React from "react";
import color from "../Library/color";

const AddButton = ({ width, height, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
    >
      <title>add</title>
      <path d="M16 9h-5V4H9v5H4v2h5v5h2v-5h5V9z" fill={color} />
    </svg>
  );
};
export default AddButton;
