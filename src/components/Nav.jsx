import { Link, useLocation } from "react-router-dom";
import { HiOutlineMap, HiOutlineHome, HiOutlineSparkles } from "react-icons/hi";

export const Nav = () => {
  const location = useLocation();

  return (
    <>
      <div>
        <Link to="/">
          <h2 className="brand brand-logo border-bottom">Voyara</h2>
        </Link>

        <nav className="nav">
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
        </nav>
      </div>
    </>
  );
};
