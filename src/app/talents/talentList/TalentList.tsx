"use client";
import React, { useEffect, useState } from "react";
import { GoTriangleLeft } from "react-icons/go";
import { createPortal } from "react-dom";
import { FaTwitter } from "react-icons/fa";
type Props = {};

export default function TalentList({}: Props) {
  const [show, setShow] = useState(false);
  return (
    <section className="talent-list">
      <div className="title-part">
        <div className="stick-title">
          <h2>talents</h2>
          <hr />
        </div>
      </div>
      <div className="talent-part ">
        <div className="talent-group cur">
          <div className="talent-group-head">
            <GoTriangleLeft />
            <GoTriangleLeft />
            <GoTriangleLeft />
            <h2>current</h2>
          </div>
          <div className="talents">
            <div
              onClick={() => {
                setShow(true);
              }}
              className="talent"
            >
              <div className="head">
                <h2>kira hishotori</h2>
                <hr />
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
            </div>
            <div className="talent">
              <div className="head">
                <h2>kira hishotori</h2>
                <hr />
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
            </div>
            <div className="talent">
              <div className="head">
                <h2>kira hishotori</h2>
                <hr />
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
            </div>
            <div className="talent">
              <div className="head">
                <h2>kira hishotori</h2>
                <hr />
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
            </div>
          </div>
        </div>
        <div className="talent-group past">
          <div className="talent-group-head">
            <GoTriangleLeft />
            <GoTriangleLeft />
            <GoTriangleLeft />
            <h2>past</h2>
          </div>
          <div className="talents">
            <div className="talent">
              <div className="head">
                <h2>kira hishotori</h2>
                <hr />
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
            </div>
            <div className="talent">
              <div className="head">
                <h2>kira hishotori</h2>
                <hr />
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
            </div>
            <div className="talent">
              <div className="head">
                <h2>kira hishotori</h2>
                <hr />
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
            </div>
            <div className="talent">
              <div className="head">
                <h2>kira hishotori</h2>
                <hr />
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {createPortal(
        <div
          onClick={() => {
            setShow(false);
          }}
          className={`talent-modal ${show ? "show" : "closed"}`}
        >
          <div className="talent-card">
            <div className="card">
              <div className="head-text">
                <p>title-or-role</p>
                <h2>kira hishotori</h2>
              </div>
              <div className="display">
                <img src="/graphics/pfp-sample.png" alt="" className="pfp" />
              </div>
              <div className="t-contacts">
                <a href="#" target="_blank" className="t-contact btn">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" className="t-contact btn">
                  <FaTwitter />
                </a>
                <a href="#" target="_blank" className="t-contact btn">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
          <div className="exit-text">
            <h2>click anywhere to close</h2>
            <hr />
          </div>
        </div>,
        document.body
      )}
    </section>
  );
}
