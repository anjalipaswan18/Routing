import React from "react";
import { Link } from "react-router-dom";

import "./main.css";
function Home() {
  return (
    <div className="Main-page-list">
      <Link className="Link" to="/home">
        Home
      </Link>
      <Link className="Link" to="/about">
        About
      </Link>
      <Link className="Link" to="/contact">
        Contact
      </Link>
      <Link className="Link" to="/message">
        Message
      </Link>
    </div>
  );
}

export default Home;
