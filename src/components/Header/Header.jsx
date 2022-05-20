import React from "react";
import "./Header.css";
import { FaSistrix, FaSith } from "react-icons/fa";
export const Header = () => {
  return (
    <div className="main">
      <div className="logo">
        News<span className="span">Website</span>
        <span>
          <FaSith />
        </span>
      </div>
      <div className="menu">
       <input type="text" className="input"/>
        <FaSistrix className="font" />
        
        <div className="btngroup">
          <button className="btn1">login</button>
          <button className="btn2">Sign up</button>
        </div>
      </div>
    </div>
  );
};
