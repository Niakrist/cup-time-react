import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get(
      "category"
    );

    return currentCategory === category ? "active" : "";
  };

  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="header__logo-link">
          <img
            className="header__logo"
            src="./img/logo.svg"
            alt="Логотип Cup Time"
          />
        </Link>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("tea")}`}
                to="/products?category=tea"
              >
                Чай
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("coffee")}`}
                to="/products?category=coffee"
              >
                Кофе
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("teapots")}`}
                to="/products?category=teapots"
              >
                Чайники
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("cezves")}`}
                to="/products?category=cezves"
              >
                Турки
              </Link>
            </li>
            <li className="header__menu-item">
              <Link
                className={`header__menu-link ${getActiveClass("other")}`}
                to="/products?category=other"
              >
                Прочее
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header__btn-group">
          <Link to="/cart" className="header__cart-link">
            6
          </Link>
          <button className="burger">
            <svg
              width="28"
              height="29"
              viewBox="0 0 28 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="9.5" width="20" height="1" fill="#D9D9D9" />
              <rect x="4" y="14.5" width="20" height="1" fill="#D9D9D9" />
              <rect x="4" y="19.5" width="20" height="1" fill="#D9D9D9" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
