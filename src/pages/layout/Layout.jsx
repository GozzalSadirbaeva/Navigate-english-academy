import React, { memo } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="container ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default memo(Layout);
