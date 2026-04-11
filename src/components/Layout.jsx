import { useState } from "react";
import { Sidebar } from "./Sidebar";

export const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Sidebar open={open} setOpen={setOpen} />
      {children}
    </>
  );
};
