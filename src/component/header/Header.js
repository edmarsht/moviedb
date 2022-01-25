import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header__button">
        <Link to="/">
          <button>
            <span>Home</span>
          </button>
        </Link>
        <Link to="/coup-de-coeur">
          <button>
            <span>Coup de coeur</span>
          </button>
        </Link>
      </div>
      <div className="header__title">
        <h1>Movie DB</h1>
      </div>
    </div>
  );
}

export default Header;
