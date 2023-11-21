import React from "react";
import "./header.css";

const Header = () => {
  return (
    <div className="">
      <header className="header">
        <div className="logo">React Meetups</div>
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>{" "}
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Reservation</a>
            </li>{" "}
            <li>
              <a href="/">Order Online</a>
            </li>{" "}
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
