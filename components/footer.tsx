"use client";

import "./footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="footer-name type-heading">DESHAN MCLACHLAN</li>
        <li className="back-to-top type-heading" onClick={scrollToTop}>
          TOP ↑
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
