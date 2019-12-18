import Day1 from "./components/Day1";
import Day2 from "./components/Day2";
import React from "react";

const Components = dayNumber => {
  switch (dayNumber) {
    case 1:
      return React.createElement(Day1, {});
    case 2:
      return React.createElement(Day2, {});
    default:
      return null;
  }
};

export default Components;
