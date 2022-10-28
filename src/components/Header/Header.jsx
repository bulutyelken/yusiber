import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">ana sayfa</Link>
      <Link to="/hakkimizda">hakkımızda</Link>
      <a href="http://dev.to/yusiber" target="_blank" rel="noreferrer">
        blog
      </a>
    </div>
  );
}
export default Header;
