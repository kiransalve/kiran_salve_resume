import React, { useState } from "react";
import Navitem from "./Navitem";
import "../CSS/Header.css";
import {
  FiHome,
  FiUser,
  FiBriefcase,
  FiLayers,
  FiCode,
  FiBook,
  FiGrid,
} from "react-icons/fi";

import { FaFlag, FaBook } from "react-icons/fa";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");

  const navItems = [
    { icon: <FiHome />, title: "Home", id: "home" },
    { icon: <FiUser />, title: "Profile", id: "profile" },
    { icon: <FiCode />, title: "Projects", id: "projects" },
    { icon: <FiBook />, title: "Education", id: "education" },
    { icon: <FiLayers />, title: "Skills", id: "skills" },
    { icon: <FiBriefcase />, title: "Experience", id: "experience" },
    { icon: <FaBook />, title: "Interest", id: "interest" },
    { icon: <FaFlag />, title: "Language", id: "language" },
  ];
  const handleToggle = () => {
    setShowMenu(!showMenu);
  };
  const handleNavItemClick = (title) => {
    setShowMenu(false);
    setActiveLink(title);
  };
  return (
    <div className="l-header">
      <nav className="nav bd-container">
        <a href="#" className="nav_logo">
          Kiran Salve
        </a>
        <div className={showMenu ? "nav_menu show_menu" : "nav_menu"}>
          <ul className="nav_list">
            {navItems.map((navItem) => (
              <Navitem
                key={navItem.title}
                navItem={navItem}
                isActive={navItem.title === activeLink}
                handleClick={handleNavItemClick}
                id={navItem.id}
              />
            ))}
          </ul>
        </div>
        <div className="nav_toggle" onClick={handleToggle}>
          <FiGrid />
        </div>
      </nav>
    </div>
  );
};

export default Header;
