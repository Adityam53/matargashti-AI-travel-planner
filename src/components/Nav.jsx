import { Link } from "react-router-dom";
import { HiLocationMarker } from "react-icons/hi";
import { FaPlaneDeparture } from "react-icons/fa";
export const Nav = () => {
  return (
    <>
      <div>
        <nav className="nav">
          <ul className="navbar">
            <li className="nav-item">
              <Link to={"/"} className="nav-link flex">
                <FaPlaneDeparture size={18} /> travel planner
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tokyo-planner"} className="nav-link flex">
                <HiLocationMarker size={18} /> tokyo city
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
