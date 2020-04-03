import React from "react";
import "../styles/index.scss";

const Layout = props => {
  return <div className="container">{props.children}</div>;
};

export default Layout;
