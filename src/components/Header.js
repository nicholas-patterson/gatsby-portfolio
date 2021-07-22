import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";

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
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.google.com/document/d/e/2PACX-1vRVU1DMq79PKDZcsjFuip8BEtTspi3DKZtsaecgft80NRBs80Ex_gzq-F-K81i4-stEUY3bLpiON7fB/pub"
          className="header__btn"
        >
          <FontAwesomeIcon
            style={{ marginRight: "10px", fontWeight: "400" }}
            icon={faPaperPlane}
          />
          Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
