"use client";

import { useState, useEffect } from "react";
import "./footer.css";

const Footer = () => {
  const [isClient, setIsClient] = useState(false);
  const [routerPath, setRouterPath] = useState<string>("");

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // for smooth scrolling
    });
  };

  useEffect(() => {
    setIsClient(true);
    setRouterPath(window.location.pathname);
  }, []);

  if (!isClient || routerPath.includes("/admin")) return null;

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
