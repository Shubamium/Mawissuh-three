import React from "react";
import { FaTwitter } from "react-icons/fa";
import "./management.scss";
import Information from "./information/Information";
import Services from "./services/Services";
import { CgMenuOreos, CgMenuRound } from "react-icons/cg";
import { CiMenuBurger } from "react-icons/ci";
import { GrMenu } from "react-icons/gr";
import NavOpener from "./navOpener/NavOpener";
import SectionJump from "./sectionJump/SectionJump";
type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_management">
      <NavOpener />
      <SectionJump />
      <section className="management" id="general">
        <article>
          <div className="profile-head">
            <h2>MARISSA</h2>
            <div className="highlight">
              <p>talent manager</p>
            </div>
            <div className="contacts">
              <a href="#" className="c-btn btn">
                <FaTwitter />
              </a>
              <a href="#" className="c-btn btn">
                <FaTwitter />
              </a>
            </div>
          </div>
          <p className="bio">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </article>
      </section>

      <section className="milestones">
        <div className="confine">
          <div className="milestone-container">
            <div className="milestone-head mile-panel">
              <h2>milestones</h2>
              <hr />
              <div className="corner-box"></div>
            </div>
            <div className="milestone-list">
              <div className="milestone mile-panel">
                <h2>High Work Record</h2>
                <p>
                  Have completed over 100 months worth of service in 2 years!
                  This includes both long term and single months!
                </p>
              </div>
              <div className="milestone mile-panel">
                <h2>High Work Record</h2>
                <p>
                  Have completed over 100 months worth of service in 2 years!
                  This includes both long term and single months!
                </p>
              </div>
              <div className="milestone mile-panel">
                <h2>High Work Record</h2>
                <p>
                  Have completed over 100 months worth of service in 2 years!
                  This includes both long term and single months!
                </p>
              </div>
              <div className="milestone mile-panel">
                <h2>High Work Record</h2>
                <p>
                  Have completed over 100 months worth of service in 2 years!
                  This includes both long term and single months!
                </p>
              </div>
              <div className="milestone mile-panel">
                <h2>High Work Record</h2>
                <p>
                  Have completed over 100 months worth of service in 2 years!
                  This includes both long term and single months!
                </p>
              </div>
            </div>
          </div>
          <figure className="graphics">
            <img src="/graphics/milestone-art.png" alt="" className="ms-art" />
          </figure>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="confine">
          <div className="skills-head">
            <div className="text-part">
              <h2>skills & specialty</h2>
              <hr />
            </div>
          </div>
          <div className="skill-list">
            <div className="skill-card">
              <div className="card-head">
                <h2>high quality support</h2>
                <hr />
                <p>
                  I will offer continuous support and guidance throughout your
                  professional journey, assisting you in navigating the
                  ever-changing landscape of your industry.
                </p>
              </div>
              <div className="note-list">
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
              </div>
            </div>
            <div className="skill-card">
              <div className="card-head">
                <h2>high quality support</h2>
                <hr />
                <p>
                  I will offer continuous support and guidance throughout your
                  professional journey, assisting you in navigating the
                  ever-changing landscape of your industry.
                </p>
              </div>
              <div className="note-list">
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
              </div>
            </div>
            <div className="skill-card">
              <div className="card-head">
                <h2>high quality support</h2>
                <hr />
                <p>
                  I will offer continuous support and guidance throughout your
                  professional journey, assisting you in navigating the
                  ever-changing landscape of your industry.
                </p>
              </div>
              <div className="note-list">
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
                <div className="note">
                  <h2>Brand Development/Revamp</h2>
                  <p>
                    Help you fix up your branding image and make sure everything
                    is consistent and clear.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Information />
      <Services />
    </main>
  );
}
