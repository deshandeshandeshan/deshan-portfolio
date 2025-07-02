import Link from "next/link";

import "./nav.css";

const Nav = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li>
          <Link href={"/about"} className="work-link type-heading">
            WORK
          </Link>
        </li>
        <li className="contact type-heading">CONTACT</li>
      </ul>
    </nav>
  );
};

export default Nav;
