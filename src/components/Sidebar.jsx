import { Brand } from "./Brand";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* Mobile dropdown */}
      <Brand />

      {/* Desktop nav */}
      <div className="nav-desktop">
        <Nav />
      </div>
      <Footer />
    </div>
  );
};
