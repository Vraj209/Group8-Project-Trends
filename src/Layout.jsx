import React from "react";
import { Navbar, Footer } from "./assets/components";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
