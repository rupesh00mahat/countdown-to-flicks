import React from "react";

function Navbar() {
  return (
    <div id="navbar">
       <h3> Countdown-to-flicks</h3>
      <ul className="navbar-items">
      <li><a href="#">Upcoming</a></li>
      <li><a href="#">Now Showing</a></li>
      <li><a href="#">What to watch</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
