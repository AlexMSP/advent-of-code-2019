import React from "react";
import { Link } from "react-router-dom";
import _ from "lodash";

function Nav() {
  const dayNumbers = _.range(1, 32);
  return (
    <>
      <h1>
        <a href="https://adventofcode.com/2019" target="blank">
          Advent of code 2019
        </a>
      </h1>

      {dayNumbers.map(dayNumber => (
        <span key={dayNumber}>
          <Link to={"/day" + dayNumber}>{dayNumber} </Link>
        </span>
      ))}
    </>
  );
}

export default Nav;
