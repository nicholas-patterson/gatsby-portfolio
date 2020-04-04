import React from "react";
import scrollTo from "gatsby-plugin-smoothscroll";

const Header = () => {
  return (
    <div className="header">
      <div className="header__center">
        <h3 className="header__greeting">
          Hello
          <span role="img" aria-label="Peace Sign">
            ✌️
          </span>
          , <br />
          I'm <span className="header__greeting--name">Nicholas</span>
        </h3>
        <p className="header__para">
          A <span className="header__para--italic">fullstack</span> web
          developer
        </p>
        <button
          onClick={() => scrollTo("#about")}
          className="header__btn"
          type="button"
        >
          About Me
        </button>
      </div>
    </div>
  );
};

export default Header;
