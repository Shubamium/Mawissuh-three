"use client";
import React from "react";
import "./header.scss";
import { FaTwitter } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header id="header">
      <h1 hidden={true}>Marimanagement</h1>
      <nav className="panel">
        <div className="box"></div>
        <Link className="nav-btn active" href={"/"}>
          home
        </Link>
        <Link className="nav-btn" href={"/management"}>
          management
        </Link>
        <Link className="nav-btn" href={"/talents"}>
          talents
        </Link>
      </nav>
      <div className="credits panel">
        <a href="https://x.com/Shubamium2" className="credit">
          <h2>web design</h2>
          <p>@shubamium</p>
        </a>
        <div className="contacts">
          <a
            href="https://x.com/SheepishMari"
            className={"c-btn btn"}
            target="_blank"
          >
            <FaTwitter />
          </a>
          <a
            href="https://twitter.com/mawissuh"
            className={"c-btn btn"}
            target="_blank"
          >
            <FaTwitter />
          </a>
        </div>
        <button
          className="taskbar-btn btn"
          onClick={() => {
            const event = new Event("nav-toggle");
            document.body.dispatchEvent(event);
          }}
        >
          <BiMenu />
        </button>
      </div>
    </header>
  );
}
