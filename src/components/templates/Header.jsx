import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h1>- NCNews -</h1>
      <Link to="/">Home</Link> | <Link to="/articles">View All Articles</Link>
      <div className="spacer"></div>
    </div>
  );
};

export default Header;
