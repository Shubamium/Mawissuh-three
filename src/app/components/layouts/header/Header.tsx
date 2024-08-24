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
        {/* <Link
          className={`nav-btn ${include("management") ? "active" : ""}`}
          href={"/management"}
        >
          <BiBriefcase /> management
        </Link> */}
        <Link
          className={`nav-btn ${include("talents") ? "active" : ""}`}
          href={"/talents"}
        >
          <BsStars /> talents
        </Link>
      </nav>
      <div className="credits panel credit desktop">
        <a href="https://x.com/Shubamium2" target="_blank" className="credit">
          <h2>design by</h2>
          <svg
            width="139"
            height="193"
            viewBox="0 0 139 193"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M40 12L93 9C114.023 88.537 112.946 107.699 107 161C107 161 81.5 166.5 66 167C50.5 167.5 29 161 29 161C19 84 18.5 75.5 40 12Z"
              fill="#FFFDFD"
            />
            <path
              d="M63 93.5C50 89.1667 27.9 78.5 43.5 70.5C63 60.5 101 59.5 91 72.5C81 85.5 80 105.5 85.5 102"
              stroke="white"
              stroke-width="2"
            />
            <path
              d="M34 61.0256L20.5 51L11.5 65.5L0 133.5L16.5 141L30.5 165.5L34 61.0256Z"
              fill="#282828"
            />
            <path
              d="M97.5574 61.956L110.876 51.1732L120.932 65.1357L136.533 132.372L119.99 140.805L101.5 169L97.5574 61.956Z"
              fill="#282828"
            />
            <path
              d="M37.5 148L56.1195 181.75H18.8805L37.5 148Z"
              fill="#FF9900"
            />
            <path
              d="M93.5 148L112.12 181.75H74.8805L93.5 148Z"
              fill="#FF9900"
            />
            <path
              d="M39.5 0L66 6.56311V26.8255L51 16.6602L34.7684 52H23V26.8255L39.5 0Z"
              fill="#282828"
            />
            <path
              d="M91.2674 0L66 6.56311V26.8255L80.3023 16.6602L95.7789 52H107V26.8255L91.2674 0Z"
              fill="#282828"
            />
            <path
              d="M65.6482 60.0706L44.4428 26.0977L86.6291 25.9586L65.6482 60.0706Z"
              fill="#FF9900"
            />
            <path
              d="M79.5 15.0477L66 26.2977L86.9256 26.3718L79.5 15.0477Z"
              fill="#FF9900"
            />
            <path d="M51 14.5L44.5 26.3921H65.6796L51 14.5Z" fill="#FF9900" />
          </svg>
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
        {!include("/talents") && (
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
                <svg
                  width="139"
                  height="193"
                  viewBox="0 0 139 193"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M40 12L93 9C114.023 88.537 112.946 107.699 107 161C107 161 81.5 166.5 66 167C50.5 167.5 29 161 29 161C19 84 18.5 75.5 40 12Z"
                    fill="#FFFDFD"
                  />
                  <path
                    d="M63 93.5C50 89.1667 27.9 78.5 43.5 70.5C63 60.5 101 59.5 91 72.5C81 85.5 80 105.5 85.5 102"
                    stroke="white"
                    stroke-width="2"
                  />
                  <path
                    d="M34 61.0256L20.5 51L11.5 65.5L0 133.5L16.5 141L30.5 165.5L34 61.0256Z"
                    fill="#282828"
                  />
                  <path
                    d="M97.5574 61.956L110.876 51.1732L120.932 65.1357L136.533 132.372L119.99 140.805L101.5 169L97.5574 61.956Z"
                    fill="#282828"
                  />
                  <path
                    d="M37.5 148L56.1195 181.75H18.8805L37.5 148Z"
                    fill="#FF9900"
                  />
                  <path
                    d="M93.5 148L112.12 181.75H74.8805L93.5 148Z"
                    fill="#FF9900"
                  />
                  <path
                    d="M39.5 0L66 6.56311V26.8255L51 16.6602L34.7684 52H23V26.8255L39.5 0Z"
                    fill="#282828"
                  />
                  <path
                    d="M91.2674 0L66 6.56311V26.8255L80.3023 16.6602L95.7789 52H107V26.8255L91.2674 0Z"
                    fill="#282828"
                  />
                  <path
                    d="M65.6482 60.0706L44.4428 26.0977L86.6291 25.9586L65.6482 60.0706Z"
                    fill="#FF9900"
                  />
                  <path
                    d="M79.5 15.0477L66 26.2977L86.9256 26.3718L79.5 15.0477Z"
                    fill="#FF9900"
                  />
                  <path
                    d="M51 14.5L44.5 26.3921H65.6796L51 14.5Z"
                    fill="#FF9900"
                  />
                </svg>
              </span>
            </a>
          </div>,
          document.body
        )}
    </header>
  );
}
