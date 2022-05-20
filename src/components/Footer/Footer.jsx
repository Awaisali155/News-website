import React from "react";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import "./Footer.css";
export const Footer = () => {
  return (
    <div className="footer">
      <div className="iconGroup">
        <FaFacebookMessenger className="icons" />
        <FaFacebookSquare className="icons" />
        <FaTwitterSquare className="icons" />
      </div>
    </div>
  );
};
