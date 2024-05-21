"use client";
import React, { useState } from "react";
import "./services.scss";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { GoTriangleLeft, GoTriangleRight } from "react-icons/go";
import { MainService, Services as ServicesData } from "../page";
import { LuFlagTriangleRight } from "react-icons/lu";
import { VscTriangleRight } from "react-icons/vsc";
import { ImCheckmark2 } from "react-icons/im";
type Props = {
  main: MainService;
  other: ServicesData[];
};

export default function Services({ main, other }: Props) {
  const [activeCategory, setActiveCategory] = useState(0);
  return (
    <section id="services">
      <div className="service-head">
        <div className="confine">
          <div className="service-navigation">
            <button
              className={`btn btn-service ${activeCategory === 0 ? "active" : ""}`}
              onClick={() => {
                setActiveCategory(0);
              }}
            >
              Main Service
            </button>
            {other?.map((service, index) => {
              return (
                <button
                  className={`btn btn-service ${activeCategory === index + 1 ? "active" : ""}`}
                  onClick={() => {
                    setActiveCategory(index + 1);
                  }}
                  key={service._id}
                >
                  {service.title}
                </button>
              );
            })}
          </div>
        </div>
      </div>
      {activeCategory <= 0 ? (
        <div className="main-service">
          <div className="confine">
            <article className="service-detail">
              <div className="title">
                <h2>{main.title}</h2>
                <p>{main.description}</p>
              </div>
              <div className="price-detail">
                <div className="price col">
                  <p>{main.price}</p>
                </div>
                <div className="rate col">
                  <h2>{main.rate}</h2>
                  <p>{main.span}</p>
                </div>
              </div>

              <div className="action">
                <button className="btn btn-apply">
                  {" "}
                  Apply <BiBriefcaseAlt />
                </button>
              </div>
            </article>
            <div className="service-includes">
              <div className="include-panel">
                <h2>inlcuded + + + </h2>
                <ul>
                  {main.includes?.map((include, index) => {
                    return (
                      <li key={"main-include" + index}>
                        {include} <ImCheckmark2 />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="other-service">
          <div className="confine">
            {other[activeCategory - 1].servuce?.map((service) => {
              return (
                <div className="service-card" key={service._key}>
                  <div className="text">
                    <h2>{service.title}</h2>
                    <p>{service.description}</p>
                  </div>
                  <div className="price-detail">
                    <h2 className="rate">{service.rate}</h2>
                    <p className="time">{service.span}</p>
                    <div className="price">
                      <p>{service.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="service-card">
              <div className="text">
                <h2>Agreed Service - Non Refundable</h2>
                <p>
                  You agree that the monthly rate is sufficient for you for my
                  services. You acknowledge that the agreed-upon payment for the
                  services is also non-refundable!
                </p>
              </div>
              <div className="price-detail">
                <h2 className="rate">Fixed Rate</h2>
                <p className="time">USD - 1 Week</p>
                <div className="price">
                  <p>$150</p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      )}

      <div className="end-part">
        <div className="text">
          <p>Looking for more service?</p>
          <hr />
          <button className="btn btn-request">
            REQUEST SERVICE <GoTriangleRight />
          </button>
        </div>
      </div>
    </section>
  );
}
