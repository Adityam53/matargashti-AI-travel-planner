import { Brand } from "./Brand";
import { Nav } from "./Nav";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <Brand />
        <Nav />
      </div>
    </>
  );
};
