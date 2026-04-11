import { useState } from "react";
import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { FaPlaneDeparture } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";

export const Brand = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="brand-dropdown">
      {/* Header */}
      <div className="brand-header" onClick={() => setOpen(!open)}>
        <h2 className="brand accent-color">matargashti</h2>
        <span className={`arrow ${open ? "rotate" : ""}`}>⌄</span>
      </div>

      {/* Dropdown */}
      {open && (
        <div className="dropdown-menu">
          <Link to="/" className="dropdown-item flex">
            <FaPlaneDeparture size={18} /> travel planner
          </Link>
          <Link to="/tokyo-planner" className="dropdown-item flex">
            <HiLocationMarker size={18} /> tokyo city
          </Link>
          <Link className="dropdown-item flex" to={"/about"}>
            <HiOutlineDocumentText size={18} /> about
          </Link>
        </div>
      )}
    </div>
  );
};
