import { useState } from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { FaPlaneDeparture } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";
import { HiOutlineMap, HiOutlineHome, HiOutlineSparkles } from "react-icons/hi";

export const Brand = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="brand-dropdown">
      {/* Header */}
      <div className="brand-header" onClick={() => setOpen(!open)}>
        <h2 className="brand accent-color">Voyara</h2>
        <span className={`arrow ${open ? "rotate" : ""}`}>⌄</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="dropdown-menu">
          <ul className="navbar">
            <li
              className={`nav-item ${
                location.pathname === "/" ? "active-nav" : ""
              }`}
            >
              <Link to="/" className="nav-link flex">
                <HiOutlineHome size={18} /> Home
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/planner" ? "active-nav" : ""
              }`}
            >
              <Link to="/planner" className="nav-link flex">
                <HiOutlineSparkles size={18} /> Planner
              </Link>
            </li>

            <li
              className={`nav-item ${
                location.pathname === "/tokyo-planner" ? "active-nav" : ""
              }`}
            >
              <Link to="/tokyo-planner" className="nav-link flex">
                <HiOutlineMap size={18} /> Tokyo Guide
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};
