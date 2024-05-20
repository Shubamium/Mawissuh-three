import React from "react";
import "./services.scss";
import { BiBriefcaseAlt } from "react-icons/bi";
import { BsTriangle } from "react-icons/bs";
import { GoTriangleRight } from "react-icons/go";
type Props = {};

export default function Services({}: Props) {
  return (
    <section id="services">
      <div className="service-head">
        <div className="confine">
          <div className="service-navigation">
            <button className="btn btn-service active">Main Service</button>
            <button className="btn btn-service">Other Service</button>
            <button className="btn btn-service">Other Service</button>
          </div>
        </div>
      </div>
      {/* <div className="main-service">
        <div className="confine">
          <article className="service-detail">
            <div className="title">
              <h2>Main Service</h2>
              <p>
                I will offer a comprehensive suite of services tailored for
                VTubers to elevate their online presence. For continued
                partnership, I will provide a $25 discount for every month of
                service afterward.
              </p>
            </div>
            <div className="price-detail">
              <div className="price col">
                <p>$150</p>
              </div>
              <div className="rate col">
                <h2>Fixed Rate</h2>
                <p>usd/month</p>
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
                <li>project management</li>
                <li>social media</li>
                <li>communication expertise</li>
                <li>career guidance</li>
                <li>professional branding</li>
                <li>and more!</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <div className="other-service">
        <div className="confine">
          <div className="service-card">
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
          </div>
          <div className="service-card">
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
          </div>
        </div>
      </div>

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
