import React from "react";
import "./container-style.css";

const Container = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Container;
