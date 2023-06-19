import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="Navbar_Common">
        <ul>
          <li>
            <Link className="nodecoration" to="">
              Pomodoro
            </Link>
          </li>
          <li>Placeholder 1</li>
          <li>Placeholder 2</li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
