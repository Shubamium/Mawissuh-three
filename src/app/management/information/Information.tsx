"use client";
import React, { useState } from "react";
import { BsCircle, BsCircleFill } from "react-icons/bs";
import { CiCircleList } from "react-icons/ci";
import "./information.scss";
type Props = {};

export default function Information({}: Props) {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <section id="information">
      <div className="confine">
        <div className="information-head">
          <div className="head-text">
            <h2>information ~</h2>
            <hr />
          </div>
        </div>

        <div className="information-part">
          <div className="informations-list">
            <div className="info-card">
              <h2>Agreed Service - Non Refundable</h2>
              <p>
                You agree that the monthly rate is sufficient for you for my
                services. You acknowledge that the agreed-upon payment for the
                services is also non-refundable!
              </p>
            </div>
            <div className="info-card">
              <h2>Agreed Service - Non Refundable</h2>
              <p>
                You agree that the monthly rate is sufficient for you for my
                services. You acknowledge that the agreed-upon payment for the
                services is also non-refundable!
              </p>
            </div>
          </div>
          <div className="information-controls">
            <button
              onClick={() => {
                setActiveCategory(0);
              }}
              className={`btn btn-info ${activeCategory === 0 ? "active" : ""}`}
            >
              {" "}
              <BsCircleFill /> payment
            </button>
            <button
              onClick={() => {
                setActiveCategory(1);
              }}
              className={`btn btn-info ${activeCategory === 1 ? "active" : ""}`}
            >
              {" "}
              <BsCircleFill /> payment
            </button>
            <button
              onClick={() => {
                setActiveCategory(2);
              }}
              className={`btn btn-info ${activeCategory === 2 ? "active" : ""}`}
            >
              {" "}
              <BsCircleFill /> payment
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
