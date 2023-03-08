import React from "react";
import logo from "../memeLogo.png";
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="nav">
          <img className="logo" src={logo} alt="meme" />
          <h3>Meme Generator</h3>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
