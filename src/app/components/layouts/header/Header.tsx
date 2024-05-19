import React from "react";
import "./header.scss";
import { FaTwitter } from "react-icons/fa";
import { BiMenu } from "react-icons/bi";
import Link from "next/link";
type Props = {};

export default function Header({}: Props) {
  return (
    <header>
      <h1 hidden={true}>Marimanagement</h1>
      <nav>
        <div className="box"></div>
        <Link href={"/"}>home</Link>
        <Link href={"/management"}>managemetn</Link>
        <Link href={"/talents"}>talents</Link>
      </nav>
      <div className="credits">
        <div className="credit">
          <p>web design</p>
          <p>@shubamium</p>
        </div>
        <div className="contacts">
          <a href="https://x.com/SheepishMage" target="_blank">
            <FaTwitter />
          </a>
          <a href="https://twitter.com/mawissuh" target="_blank">
            <FaTwitter />
          </a>
        </div>
        <div className="taskbar">
          <BiMenu />
        </div>
      </div>
    </header>
  );
}
