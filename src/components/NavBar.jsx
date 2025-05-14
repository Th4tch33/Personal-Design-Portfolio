import { useRef } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import WorkCardClose from "../components/WorkCard.jsx";

CustomLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

function CustomLink({ to, children, ...props }) {
  const path = window.location.pathname;

  return (
    <span className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </span>
  );
}

export default function NavBar() {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("popOut");

    closeMediaPlayer();
	};

  const closeMediaPlayer = () => {
    if(document.getElementById("mediaPlayer")) {
      WorkCardClose();
    }
  }

  return (
    <header id="navContainer">

      <Link to="/" onClick={closeMediaPlayer}>cadenchan.design</Link>

      <nav ref={navRef}>

        <ul className="navCenter">
          <img className="navStarGroup" src="/Icons/star_group_left.svg" />
          <img className="navSigil" src="/Icons/sigil.svg" />
          <img className="navStarGroup" src="/Icons/star_group_right.svg" />
        </ul>

        <ul className="navRight">
          <li>
            <CustomLink id="mobileHomeButton" to="/" onClick={showNavbar}>HOME</CustomLink>
          </li>
          
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
              <img src="/assets/x-icon.svg"></img>
				</button>
      </nav>

      <button className="navButton" onClick={showNavbar}><img src="/assets/menu-icon.svg"></img></button>

    </header>
  );
}
