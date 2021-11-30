import React from "react";
import Luffy from "./Luffy.png";
export default function header() {
  return (
    <header id="header">
      <img id="my-photo" src={Luffy} alt="" />
    </header>
  );
}
