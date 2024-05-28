"use client";
import React from "react";
import "./header.scss";
import { FaTwitter } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";
type Props = {};

export default function Header({}: Props) {
  const path = usePathname();

  const include = (paths: string) => {
    return path.includes(paths);
  };
  return (
    <header id="header">
      <h1 hidden={true}>Marimanagement</h1>
      <nav className="panel">
        <div className="box"></div>
        <Link className={`nav-btn ${path === "/" ? "active" : ""}`} href={"/"}>
          home
        </Link>
        <Link
          className={`nav-btn ${include("management") ? "active" : ""}`}
          href={"/management"}
        >
          management
        </Link>
        <Link
          className={`nav-btn ${include("talents") ? "active" : ""}`}
          href={"/talents"}
        >
          talents
        </Link>
      </nav>
      <div className="credits panel">
        <a href="https://x.com/Shubamium2" className="credit">
          <h2>web design</h2>
          <p>@shubamium</p>
        </a>
      </div>
      <div className="credits panel">
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
    </header>
  );
}
