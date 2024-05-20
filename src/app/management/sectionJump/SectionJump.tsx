"use client";
import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import "./sectionJump.scss";
import { RiArrowLeftUpFill } from "react-icons/ri";
import { TbArrowRightToArc } from "react-icons/tb";
import { MdVerticalAlignTop } from "react-icons/md";
type Props = {};

export default function SectionJump({}: Props) {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    document.body.addEventListener("nav-toggle", () => {
      setIsOpen((is) => true);
    });
  }, []);

  return (
    <div
      id="jump-section"
      className={`jump-section ${isOpen ? "open" : "closed"}`}
    >
      <div
        className="close-container"
        onClick={() => {
          setIsOpen(false);
        }}
      >
        <button
          className="btn btn-close"
          onClick={() => {
            setIsOpen(false);
          }}
        >
          {" "}
          <CgClose />{" "}
        </button>
      </div>
      <div className="navigation-list">
        <a href="#general" className="btn btn-section">
          <div className="circ"></div>
          <span>GENERAL</span>
        </a>
        <a href="#skills" className="btn btn-section">
          <div className="circ"></div>
          <span>SKILLS</span>
        </a>
        <a href="#information" className="btn btn-section">
          <div className="circ"></div>
          <span>INFORMATION</span>
        </a>
        <a href="#services" className="btn btn-section">
          <div className="circ"></div>
          <span>SERVICES</span>
        </a>
        <a href="#header" className="btn btn-section end">
          <div className="circ"></div>
          <span>
            to the top
            <MdVerticalAlignTop />
          </span>
        </a>
      </div>
    </div>
  );
}
