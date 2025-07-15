"use client";

import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";

import "./nav.css";
import "@/app/grid.css";

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
          duration: 1.2,
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
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
        <div className="nav-overlay-content grid">
          <div className="contact-description type-sub">
            <div className="contact-description-holder">
              {contactInfo?.description}
            </div>
          </div>
          <div className="contact-image">
            {contactInfo?.contactImage ? (
              <Image
                src={urlFor(contactInfo?.contactImage)
                  .auto("format")
                  .quality(90)
                  .url()}
                alt={contactInfo?.contactImage?.alt ?? "Contact image"}
                width={2160}
                height={3840}
                className="contact-img"
              />
            ) : null}
          </div>
          <div>
            <ul>
              <h3 className="">Contact</h3>
              <li>
                <a
                  href={`mailto:${contactInfo.contacts?.email}`}
                  target="_blank"
                >
                  DESHAN.MCLACHLAN@GMAIL.COM{" "}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${contactInfo.contacts?.phoneNumber}`}
                  target="_blank"
                >
                  {contactInfo.contacts?.phoneNumber}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul>
              <h3>Socials</h3>
              {contactInfo.socialLinks?.map((socialLink, index) => (
                <li key={index}>
                  <a href={socialLink.link} target="_blank">
                    {socialLink.linkName}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
