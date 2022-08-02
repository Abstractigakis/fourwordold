import { FC, ReactNode, useState } from "react";
import Navbar from "@components/Navbar";
export interface ILayoutProps {
  children: ReactNode;
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="my-4">{children}</div>
    </div>
  );
};

export default Layout;
