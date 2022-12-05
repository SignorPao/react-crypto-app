import React from "react";
import { Link } from "react-router-dom";

// import logo
import logoSvg from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link
      to="/"
      className="text-decoration:none text-lg text-cyan flex items-center"
    >
      <img src={logoSvg} alt="logo" />
      <span>Crypto</span>
    </Link>
  );
};

export default Logo;
