import { Link } from "react-router-dom";
import PropTypes from "prop-types";

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

export default function NavBar() {
  return (
    <>
      <nav id="navContainer">
        <Link to="/">cadenchan.design</Link>
        <ul>
          <li>
            <CustomLink to="/about">About</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact">Contact</CustomLink>
          </li>
        </ul>
      </nav>
    </>
  );
}
