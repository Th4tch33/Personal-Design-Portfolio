import { Link } from "react-router-dom";

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
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
