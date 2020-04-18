import React from "react";
import { Link } from "react-router-dom";



const Header: React.FC = () => {
    return (
      <header className="workspace-header">
        <div className="container header-container">
          <div></div>
          <nav className="header-nav">
            <ul className="header-nav__list">
              <li className="header-nav__item">
                <Link to="/profile" className="header-nav__link">Профиль</Link>
              </li>
              <li className="header-nav__item">
                <Link to="/workspace" className="header-nav__link">Workspace</Link>
              </li>
              <li className="header-nav__item">
                <Link to="/" className="header-nav__link">Выйти</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
};

export default Header;