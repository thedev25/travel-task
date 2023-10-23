import React from "react";
import Header from "./Header/Header";
import With from "../pages/With/With";
import About from "../pages/About/About";
import Travels from "../pages/Travels/Travels";

function Layout() {
  return (
    <div className="container">
      <Header />
      <With />
      <About />
      <Travels />
    </div>
  );
}

export default Layout;
