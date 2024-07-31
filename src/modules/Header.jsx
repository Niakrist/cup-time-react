import React, { useState } from "react";

const Header = () => {
  const [isBurger, setIsBurger] = useState(false);

  const handleClick = () => {
    setIsBurger((previsBurger) => !previsBurger);
  };

  return (
    <header className="header">
      <div className="container header__container">
        <a className="header__logo-link">
          <img
            className="header__logo"
            src="./img/logo.svg"
            alt="Логотип Cup Time"
          />
        </a>

        <nav className="header__nav">
          <ul className="header__menu">
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Чай
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Кофе
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Чайники
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Турки
              </a>
            </li>
            <li className="header__menu-item">
              <a className="header__menu-link" href="#">
                Прочее
              </a>
            </li>
          </ul>
        </nav>
        <div className="header__btn-group">
          <a href="cart.html" className="header__cart-link">
            6
          </a>
          <button onClick={handleClick} className="burger">
            {isBurger ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                  x="7.28174"
                  y="7.07532"
                  width="20"
                  height="1"
                  transform="rotate(45 7.28174 7.07532)"
                  fill="#D9D9D9"
                />
                <rect
                  x="6.5752"
                  y="21.2173"
                  width="20"
                  height="1"
                  transform="rotate(-45 6.5752 21.2173)"
                  fill="#D9D9D9"
                />
              </svg>
            ) : (
              <svg
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <rect x="4" y="9.5" width="20" height="1" fill="#D9D9D9" />
                <rect x="4" y="14.5" width="20" height="1" fill="#D9D9D9" />
                <rect x="4" y="19.5" width="20" height="1" fill="#D9D9D9" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
