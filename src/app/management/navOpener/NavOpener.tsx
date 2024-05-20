"use client";
import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";

type Props = {};

export default function NavOpener({}: Props) {
  const [visible, setVisible] = useState(false);
  // const []
  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      if (window.scrollY > 50) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    });

    return () => {
      setVisible(false);
    };
  }, []);
  return (
    <div className={`nav-opener ${visible ? "visible" : ""}`}>
      <button
        className="nav-btn btn"
        onClick={() => {
          const event = new Event("nav-toggle");
          document.body.dispatchEvent(event);
        }}
      >
        <BiMenu />
      </button>
    </div>
  );
}
