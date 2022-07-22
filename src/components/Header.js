import React from "react";
import logo from "../logo/logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <section className="headerContainer">
      <div className="logo">
        <img src={logo} alt="logo" width={157} height={33} />
      </div>
    </section>
  );
};

export default Header;
