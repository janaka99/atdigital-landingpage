import React, { useState } from "react";
import Button from "../../../../components/UI/Button/Button";
import "./service-style.css";

const Service = ({ service, index }) => {
  const isReverse = (index + 1) % 2 === 0;
  console.log(isReverse);
  return (
    <div
      className={`homepage-service ${
        isReverse ? "homepage-service-reverse" : "homepage-service-default"
      }`}
    >
      <img src={service.img_link} alt="" />
      <div className="homepage-service-details">
        <h2 className="homepage-service-title">{service.title}</h2>
        <div className="homepage-service-desc">{service.desc}</div>
        <Button link={service.btn_link} text={service.btn_text} />
      </div>
    </div>
  );
};

export default Service;
