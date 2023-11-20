import React from "react";
import "../CSS/Navitem.css";

const Navitem = ({ navItem, isActive, handleClick, id }) => {
  return (
    <div>
      <li
        className="nav_item"
        onClick={() => {
          handleClick(navItem.title);
        }}
      >
        <a
          href={`#${id}`}
          className={`nav_link ${isActive ? "activeLink" : ""}`}
        >
          <span className="nav_icon">{navItem.icon}</span>
          {navItem.title}
        </a>
      </li>
    </div>
  );
};

export default Navitem;
