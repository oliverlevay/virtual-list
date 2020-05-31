const color = (colorCode, dark = true) => {
  if (dark) {
    switch (colorCode) {
      case "primary":
        return "#2196f3";
      case "primary2":
        return "#0b7dda";
      case "background":
        return "#1A1A1B";
      case "background2":
        return "#596273";
      case "error":
        return "#ea0027";
      case "text":
        return "white";
      default:
        break;
    }
  } else {
    switch (colorCode) {
      case "primary":
        return "#2196f3";
      case "primary2":
        return "#0b7dda";
      case "background":
        return "#ffffff";
      case "background2":
        return "#ffffff";
      case "error":
        return "#ea0027";
      case "text":
        return "black";
      default:
        break;
    }
  }
};

export default color;
