import React from "react";
import Img from "gatsby-image";
import scrollTo from "gatsby-plugin-smoothscroll";

const Navbar = ({ imageData }) => {
  return (
    <div className="nav-container">
      <div className="navbar">
        <div className="navbar__image">
          <Img fixed={imageData} />
        </div>
        <div className="navbar__links">
          <nav>
            <ul>
              <li onClick={() => scrollTo(".about")}>About</li>
              <li onClick={() => scrollTo(".portfolio")}>Portfolio</li>
              <li onClick={() => scrollTo(".contact")}>Contact</li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
