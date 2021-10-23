import React from "react";
import Navbar from "./navbar";
import { Search as _Search } from "react-feather";
import "../css/explore.css";

export default function explore() {
  return (
    <div>
      <Navbar />
      <div className="search-box-div">
        <div className="search-box">
          <_Search size={30} />
          <input type="text" placeholder="Find faculty.." />
        </div>
      </div>
    </div>
  );
}
