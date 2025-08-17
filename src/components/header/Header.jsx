import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import menus from "../../pages/menu";
import logo from "/images2/new/newlogo.webp";
import "./styles.scss";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [exploreSubMenuActive, setExploreSubMenuActive] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuActive = () => setMenuActive(!menuActive);

  const handleDropdown = (index) =>
    setActiveIndex(activeIndex === index ? null : index);

  const toggleExploreSubMenu = () =>
    setExploreSubMenuActive(!exploreSubMenuActive);

  const handleCloseMenu = () => {
    setMenuActive(false);
    setActiveIndex(null);
  };

  const renderLink = (item, closeMenuCallback) => {
    if (item.external) {
      return (
        <a
          href={item.external}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenuCallback}
        >
          {item.name || item.sub}
          {item.isNew && <span className="new-text">NEW</span>}
        </a>
      );
    }
    const Component = item.links ? Link : NavLink;
    return (
      <Component to={item.links} onClick={closeMenuCallback}>
        {item.name || item.sub}
        {item.isNew && <span className="new-text">NEW</span>}
      </Component>
    );
  };

  return (
    <header id="header_main" className={`header ${scroll ? "is-fixed" : ""}`}>
      <div className="container big">
        <div className="row">
          <div className="col-12">
            <div className="header__body">
              {/* Logo */}
              <div className="header__logo">
                <Link to="/">
                  <img id="site-logo" className="custom-logo" src={logo} alt="logo" />
                </Link>
                <p className="logo-text">SAMARTH</p>
              </div>

              {/* Navigation */}
              <div className="header__right">
                <nav id="main-nav" className={`main-nav ${menuActive ? "active" : ""}`}>
                  <ul id="menu-primary-menu" className="menu">
                    {menus.map((menuItem, idx) => (
                      <li
                        key={idx}
                        onClick={() => handleDropdown(idx)}
                        className={`menu-item ${
                          menuItem.namesub ? "menu-item-has-children" : ""
                        } ${activeIndex === idx ? "active" : ""}`}
                        id={menuItem.name === "Study Material" ? "study-relative" : ""}
                      >
                        <div
                          className={`explore ${
                            menuItem.name === "Explore" ? "flex-column" : ""
                          }`}
                        >
                          {menuItem.name === "Explore" && menuItem.namesub ? (
                            <div className="d-flex flex-row">
                              <a onClick={toggleExploreSubMenu}>{menuItem.name}</a>
                              {menuItem.namesub.some((sub) => sub.isNew) && (
                                <span className="new-text">NEW</span>
                              )}
                            </div>
                          ) : (
                            renderLink(menuItem, handleCloseMenu)
                          )}

                          {/* Submenu */}
                          {menuItem.namesub && (
                            <ul
                              className={`sub-menu ${
                                activeIndex === idx && exploreSubMenuActive ? "active" : ""
                              }`}
                            >
                              {menuItem.namesub.map((submenu) => (
                                <li key={submenu.id} className="menu-item">
                                  {renderLink(submenu, handleCloseMenu)}
                                </li>
                              ))}
                            </ul>
                          )}

                          {/* Main menu NEW badge */}
                          {!menuItem.namesub && menuItem.isNew && (
                            <span className="new-text">NEW</span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </nav>

                {/* Mobile menu button */}
                <div
                  className={`mobile-button ${menuActive ? "active" : ""}`}
                  onClick={handleMenuActive}
                >
                  <span></span>
                </div>
              </div>

              {/* Header action buttons */}
              <div className="header__action">
                <Link to="#" className="search-btn">
                  {/* Search icon SVG */}
                </Link>
                <Link to="/contact" className="action-btn">
                  <span>Join Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
