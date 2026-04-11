import { Link } from "react-router-dom";
import { HiOutlineDocumentText } from "react-icons/hi";

export const Footer = () => {
  return (
    <div className="footer-lg">
      <div className="nav-item ">
        <Link className="nav-link flex" to={"/about"}>
          <HiOutlineDocumentText size={18} /> about
        </Link>
      </div>
    </div>
  );
};
