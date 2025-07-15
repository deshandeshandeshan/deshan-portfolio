"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

import "./nav.css";

type Props = {
  contactInfo: Contact;
};

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Contact } from "@/sanity/types";

const Nav = ({ contactInfo }: Props) => {
  const container = useRef<HTMLDivElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

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
    if (!tl.current) return;

    if (isOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isOpen]);

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
          <div className="contact-description">{contactInfo?.description}</div>
          <div className="contact-image">
            {contactInfo?.contactImage ? (
              <Image
                src={urlFor(contactInfo?.contactImage)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={""}
                width={2160}
                height={3840}
                className="contact-imag"
              />
            ) : null}
          </div>
          <div></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
