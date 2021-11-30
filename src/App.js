import React from "react";
import Header from "./comp/Header.js";
import Contact from "./comp/Contact.js";
import Main from "./comp/MainContent.js";
import Footer from "./comp/Footer.js";

export default function app() {
  return (
    <div id="con">
      <Header />
      <Contact />
      <Main />
      <Footer />
    </div>
  );
}
