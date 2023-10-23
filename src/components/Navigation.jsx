import React from "react";

import { FcHome, FcCheckmark, FcPanorama, FcAssistant } from "react-icons/fc";

export default function Navigation() {
  return (
    <nav className="nav">
      <a href="#">
        <FcHome />
      </a>
      <a href="#features">
        <FcCheckmark />
      </a>
      <a href="#properties">
        <FcPanorama />
      </a>
      <a href="#gallery">
        <FcAssistant />
      </a>
    </nav>
  );
}
