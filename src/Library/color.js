import React, { useState, useEffect } from "react";

const color = (colorCode, dark = true) => {
  if (dark) {
    switch (colorCode) {
      case "primary":
        return "#79C0F2";
      case "background":
        return "#282c34";
      case "background2":
        return "#596273";
      default:
        break;
    }
  } else {
    switch (colorCode) {
      case "primary":
        return "#2196f3";
      case "background":
        return "#f1f2f4";
      case "background2":
        return "#ffffff";
      default:
        break;
    }
  }
};

export default color;
