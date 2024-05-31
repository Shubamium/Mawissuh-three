"use client";
import React, { useEffect } from "react";
import "./header.scss";
import { FaTwitter } from "react-icons/fa";
import { BiBriefcase, BiHome, BiHomeAlt2, BiMenu } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BsArrowLeftShort,
  BsHouse,
  BsHouseDown,
  BsHouseFill,
  BsStars,
} from "react-icons/bs";
import { FcHome } from "react-icons/fc";
import { GrHome, GrHomeRounded } from "react-icons/gr";
import { createPortal } from "react-dom";
import { RiCloseCircleFill } from "react-icons/ri";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbArrowBarToUp } from "react-icons/tb";
import { FaComputer } from "react-icons/fa6";
import { CgCode } from "react-icons/cg";
import { GiPenguin } from "react-icons/gi";

type Props = {};

export default function Header({}: Props) {
  const path = usePathname();
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [init, setInit] = React.useState(false);

  const include = (paths: string) => {
    return path.includes(paths);
  };

  useEffect(() => {
    setInit(true);
  }, []);
  return (
    <header id="header">
      <h1 hidden={true}>Marimanagement</h1>
      <nav className="panel desktop">
        <div className="box"></div>
        <Link className={`nav-btn ${path === "/" ? "active" : ""}`} href={"/"}>
          <BsHouseFill /> home
        </Link>
        <Link
          className={`nav-btn ${include("management") ? "active" : ""}`}
          href={"/management"}
        >
          <BiBriefcase /> management
        </Link>
        <Link
          className={`nav-btn ${include("talents") ? "active" : ""}`}
          href={"/talents"}
        >
          <BsStars /> talents
        </Link>
      </nav>
      <div className="credits panel credit desktop">
        <a href="https://x.com/Shubamium2" target="_blank" className="credit">
          <h2>web design</h2>
          <GiPenguin />
        </a>
      </div>
      <div className="credits panel contact desktop">
        {/* <a href="https://x.com/Shubamium2" className="credit">
          <h2>web design</h2>
          <p>@shubamium</p>
        </a> */}

        <div className="contacts">
          <a
            href="https://x.com/SheepishMari"
            className={"c-btn btn"}
            target="_blank"
          >
            <FaTwitter />
          </a>
          {/* <a href="mailto" className={"c-btn btn"} target="_blank">
            <FaTwitter />
          </a> */}
        </div>
        {include("/management") && (
          <button
            className="taskbar-btn btn"
            onClick={() => {
              const event = new Event("nav-toggle");
              document.body.dispatchEvent(event);
            }}
          >
            <BiMenu />
          </button>
        )}
      </div>

      <div className="credits panel hidden-nav">
        <button
          className="taskbar-btn btn"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <BiMenu />
        </button>
      </div>

      {init &&
        createPortal(
          <div id="fs-menu" className={`${menuOpen ? "open" : "closed"}`}>
            <nav>
              <Link
                className={`nav-btn ${path === "/" ? "active" : ""}`}
                href={"/"}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <BsHouseFill /> home
              </Link>
              <Link
                className={`nav-btn ${include("management") ? "active" : ""}`}
                href={"/management"}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <BiBriefcase /> management
              </Link>
              <Link
                className={`nav-btn ${include("talents") ? "active" : ""}`}
                href={"/talents"}
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <BsStars /> talents
              </Link>
              <a
                className="nav-btn"
                onClick={() => {
                  setMenuOpen(false);
                }}
              >
                <TbArrowBarToUp /> close
              </a>
            </nav>

            <a href="https://x.com/Shubamium2" className="credit">
              <span className="title">
                <CgCode /> web design
              </span>
              <span className="name">
                shubamium
                <GiPenguin />
              </span>
            </a>
          </div>,
          document.body
        )}
    </header>
  );
}
