import React from "react";

function Navbar() {
  return (
    <div id="navbar">
       <h3> Countdown-to-flicks</h3>
      <ul className="navbar-items">
      <li><Link to="/upcoming">Upcoming</Link></li>
      <li><Link to="#">Now Showing</Link></li>
      <li><Link to="/">What to watch</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
