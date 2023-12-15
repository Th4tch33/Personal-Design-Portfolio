import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import { activePageCheck, buildIcons, deleteActiveIcons } from "../ts/Home.ts";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

export default function NavBar() {
  const [activePage, setActivePage] = useState(0);

  useEffect(() => {
    activePageCheck(activePage);
    deleteActiveIcons();
    buildIcons();
  }, [activePage]);

  return (
    <>
      <nav id="navContainer">
        <Link to="/" onClick={() => setActivePage(0)}>
          cadenchan.design
        </Link>
        <ul>
          <li>
            <CustomLink to="/about" onClick={() => setActivePage(1)}>
              About
            </CustomLink>
          </li>
          <li>
            <CustomLink to="/contact" onClick={() => setActivePage(2)}>
              Contact
            </CustomLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const path = window.location.pathname;

  return (
    <li className={path === to ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
