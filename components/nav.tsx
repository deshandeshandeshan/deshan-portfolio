import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/about"} className="about-link type-body">
            WORK
          </Link>
        </li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Nav;
