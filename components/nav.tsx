"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

import "./nav.css";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { getContact } from "@/sanity/sanity-utils";
import { Contact } from "@/sanity/types";

const Nav = () => {
  const container = useRef();
  const [isClient, setIsClient] = useState(false);
  const [routerPath, setRouterPath] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);
  const [contactInfo, setContactInfo] = useState<Contact | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getContact();
      setContactInfo(data);
    };

    fetchData();
  }, []);

  const tl = useRef();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({
          paused: true,
        })
        .to(".nav-overlay", {
          duration: 2,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "power4.inOut",
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

  useEffect(() => {
    setIsClient(true);
    setRouterPath(window.location.pathname);
  }, []);

  if (!isClient || routerPath.includes("/admin")) return null;

  return (
    <nav className="nav-container" ref={container}>
      <div className="nav-bar">
        <ul className="nav-list">
          <li>
            <Link href={"/"} className="work-link type-heading">
              WORK
            </Link>
          </li>
          <li className="contact type-heading contact-open" onClick={toggleNav}>
            CONTACT
          </li>
        </ul>
      </div>
      <div className="nav-overlay">
        <div className="nav-overlay-bar">
          <ul className="nav-overlay-list">
            <li className="work-link type-heading">DESHAN MCLACHLAN</li>
            <li
              className="close type-heading contact-close"
              onClick={toggleNav}
            >
              CLOSE
            </li>
          </ul>
        </div>
        <div className="nav-overlay-content">
          <div>{contactInfo}</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
