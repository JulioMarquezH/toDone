import React from "react";
import search from "../../img/search.png";
import notifications from "../../img/notifications.png";
import user1 from "../../img/user1.png";
import "./styles-navBar.css";

function NavBar() {
  return (
    <nav className="navbar">
      <main>
        <button className="navbar-icon-search">
          <img src={search} alt="" />
        </button>
        <input
          type="text"
          className="navbar-search"
          placeholder="Search for any training you want "
        />
      </main>
      <span>
        <button className="navbar-alert">
          <img src={notifications} alt="" />
        </button>
        <button className="navbar-user">
          <img src={user1} alt="" />
        </button>
      </span>
    </nav>
  );
}

export default NavBar;
