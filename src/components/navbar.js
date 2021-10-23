import React from "react";
import { Link } from "react-router-dom";
import "../css/navbar.css";
export default function Navbar() {
  return (
    <div>
      <nav className="nav-bar">
        <p>
          <b>RateMyFaculty </b>| Presidency University
        </p>
        <ul>
          <Link style={{ textDecoration: "none ", color: "inherit" }} to="/">
            <li>Home</li>
          </Link>
          <Link
            style={{ textDecoration: "none ", color: "inherit" }}
            to="/explore"
          >
            <li>Explore</li>
          </Link>
          <Link
            style={{ textDecoration: "none ", color: "inherit" }}
            to="profile"
          >
            <li>Profile</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
