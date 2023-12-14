import React from "react";
import "./button-style.css";

const Button = ({ link, text }) => {
  return (
    <a href={link} className="global-btn-1">
      {text}
    </a>
  );
};

export default Button;
