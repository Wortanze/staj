import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import scss from "./Header.module.scss";
import { headerLinks } from "../../constants/Header";
import { Link } from "react-router-dom";
import logo from "../../assets/Header/resident.svg";
import search from "../../assets/Header/search.svg";
import burgerIcon from "../../assets/Header/burger_menu.svg"; 

function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isLuxuryDropdownOpen, setIsLuxuryDropdownOpen] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  useEffect(() => {
    const handleClickOutsideSearch = (e) => {
      if (
        !e.target.closest(`.${scss.searchWrapper}`) &&
        !e.target.closest(`.${scss.searchBar}`)
      ) {
        setIsSearchActive(false);
        setSearchQuery("");
      }
    };

    if (isSearchActive) {
      document.addEventListener("click", handleClickOutsideSearch);
    }

    return () => {
      document.removeEventListener("click", handleClickOutsideSearch);
    };
  }, [isSearchActive]);

  useEffect(() => {
    const handleClickOutsideBurger = (e) => {
      if (
        !e.target.closest(`.${scss.burgerWrapper}`) &&
        !e.target.closest(`.${scss.burgerMenu} nav`)
      ) {
        setIsBurgerMenuOpen(false);
      }
    };

    if (isBurgerMenuOpen) {
      document.addEventListener("click", handleClickOutsideBurger);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.removeEventListener("click", handleClickOutsideBurger);
      document.body.style.overflow = "auto";
    };
  }, [isBurgerMenuOpen]);

  const toggleLuxuryDropdown = () => {
    setIsLuxuryDropdownOpen(!isLuxuryDropdownOpen);
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    setSearchQuery("");
    setIsLuxuryDropdownOpen(false);
    setIsBurgerMenuOpen(false);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
    setIsLuxuryDropdownOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
      setIsSearchActive(false);
      setSearchQuery("");
      setIsBurgerMenuOpen(false);
    }
  };

  const handleBackgroundClick = (e) => {
    if (e.target.classList.contains(scss.burgerMenu)) {
      setIsBurgerMenuOpen(false);
    }
  };

  const navs = headerLinks.map(({ title, link, arrow }, index) => {
    const isLuxury = title === "Роскошный отдых";

    return (
      <div key={index} className={scss.navItem}>
        <div className={scss.navLinkWrapper}>
          <Link
            className={link === location.pathname ? scss.active : scss.nonActive}
            to={link}
            onClick={() => setIsBurgerMenuOpen(false)}
          >
            {title}
          </Link>
          {arrow && (
            <img
              src={arrow}
              alt="стрелка"
              onClick={isLuxury ? toggleLuxuryDropdown : undefined}
              className={`${scss.arrow} ${
                isLuxury && isLuxuryDropdownOpen ? scss.arrowOpen : ""
              }`}
            />
          )}
        </div>
        {isLuxury && isLuxuryDropdownOpen && (
          <div className={scss.dropdownMenu}>
            <Link to={"/rest"} onClick={() => setIsBurgerMenuOpen(false)}>
              ОТЕЛИ
            </Link>
            <Link
              to={`${link}/restaurants`}
              onClick={() => setIsBurgerMenuOpen(false)}
            >
              РЕСТОРАНЫ
            </Link>
            <Link
              to={`${link}/sta-saloni`}
              onClick={() => setIsBurgerMenuOpen(false)}
            >
              СПА-САЛОНЫ
            </Link>
          </div>
        )}
      </div>
    );
  });

  return (
    <div className="container">
      <section className={scss.header}>
        <div className={`${scss.burgerWrapper} ${isSearchActive ? scss.searchActive : ''}`}>
          <img
            src={burgerIcon}
            alt="меню"
            className={scss.burgerIcon}
            onClick={toggleBurgerMenu}
          />
          {isBurgerMenuOpen && (
            <div className={scss.burgerMenu} onClick={handleBackgroundClick}>
              <button
                onClick={toggleBurgerMenu}
                className={scss.burgerCloseButton}
              >
                ×
              </button>
              <nav>{navs}</nav>
            </div>
          )}
        </div>

        <Link to="/" className={`${scss.logoLink} ${isSearchActive ? scss.searchActive : ''}`}>
          <img src={logo} alt="логотип" />
        </Link>

        {!isSearchActive ? (
          <nav className={scss.navDesktop}>{navs}</nav>
        ) : (
          <div className={`${scss.searchBar} ${isSearchActive ? scss.active : ''}`}>
            <img src={search} alt="поиск" className={scss.searchIcon} />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              onKeyDown={handleSearchSubmit}
              placeholder="Поиск"
              className={scss.searchInput}
              autoFocus
            />
            <button onClick={toggleSearch} className={scss.closeButton}>
              ×
            </button>
          </div>
        )}

        <div className={`${scss.searchWrapper} ${isSearchActive ? scss.searchActive : ''}`}>
          <img
            src={search}
            alt="поиск"
            onClick={toggleSearch}
            className={scss.searchIcon}
          />
        </div>
      </section>
    </div>
  );
}

export default Header;