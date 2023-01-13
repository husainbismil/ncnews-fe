import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div id="header-wrap">
      <div id="header">
        <div id="header-inner" className="container-wrap">
          <div id="header-logo-wrap">
            <a href="/">
              <img src="/img/logo/ncfe-logo-h.png" />
            </a>
          </div>

          <div id="header-desktop-navmenu-wrap">
            <div id="header-desktop-navmenu-inner-wrap">
              <div id="navmenu">
                <Link to="/">Home</Link>
                <Link to="/articles">View All Articles</Link>
              </div>
            </div>
            <div id="header-mobile-burger-icon-wrap">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
          </div>
        </div>
      </div>
      <div id="header-shadow"></div>
    </div>
  );
};

export default Header;
