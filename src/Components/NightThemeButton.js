import React, { useState } from "react";
import "./NightThemeButton.css";

const NightThemeButton = ({ onClick }) => {
  return (
    <label className="switch">
      <input type="checkbox" defaultChecked={true} onClick={onClick}></input>
      <span className="slider round"></span>
    </label>
  );
};

export default NightThemeButton;
