import React from "react";
import "./NightThemeButton.css";

const NightThemeButton = ({ defaultChecked, onClick }) => {
  return (
    <label className="switch">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        onClick={onClick}
      ></input>
      <span className="slider round"></span>
    </label>
  );
};

export default NightThemeButton;
