import React from "react";
import Header from "./Header/Header";
import With from "../pages/With/With";
import About from "../pages/About/About";
import Travels from "../pages/Travels/Travels";
import Contact from "../pages/Contact/Contact";
import Footer from "./Footer/Footer";

function Layout() {
  return (
    <div className="container">
      <Header />
      <With />
      <About />
      <Travels />
      <Contact />
      <Footer />
    </div>
  );
}

export default Layout;
