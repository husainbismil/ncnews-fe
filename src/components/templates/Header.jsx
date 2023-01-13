import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div id="header-wrap">
      <div id="header">
        <div id="header-inner" className="container-wrap">
          <div id="header-logo-wrap">
            <span>- NCNews -</span>
          </div>

          <div id="header-desktop-navmenu-wrap">
            <Link to="/">Home</Link> |{" "}
            <Link to="/articles">View All Articles</Link>
          </div>
        </div>
      </div>
      <div id="header-shadow"></div>
    </div>
  );
};

export default Header;
