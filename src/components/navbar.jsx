import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav id="navbar">
      <div className="container flex align-center justify-between">
      <h1 className="title light-text"> <Link className="title" to={'/'}>Countdown-to-flicks</Link></h1>
      <ul className="navbar-items flex justify-between align-center">
      <li className="light-text"><Link to="/upcoming">Upcoming</Link></li>
      <li><Link to="#">Now Showing</Link></li>
      <li><Link to="/">What to watch</Link></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
