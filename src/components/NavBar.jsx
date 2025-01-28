import { useRef } from "react";
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

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("popOut");
	};

  return (
    <header id="navContainer">

      <Link to="/">cadenchan.design</Link>

      <nav ref={navRef}>

        <ul className="navCenter">
          <img className="navStarGroup" src="/Icons/star_group_left.svg" />
          <img className="navSigil" src="/Icons/sigil.svg" />
          <img className="navStarGroup" src="/Icons/star_group_right.svg" />
        </ul>

        <ul className="navRight">
          <li>
            <CustomLink to="/work" onClick={showNavbar}>WORK</CustomLink>
          </li>
          <li>
            <CustomLink to="/about" onClick={showNavbar}>ABOUT</CustomLink>
          </li>
          <li>
            <CustomLink to="/contact" onClick={showNavbar}>CONTACT</CustomLink>
          </li>
        </ul>

        <button
            className="navButton navButtonClose"
            onClick={showNavbar}>
              Close
				</button>
      </nav>

      <button className="navButton" onClick={showNavbar}>Open</button>

    </header>
  );
}
