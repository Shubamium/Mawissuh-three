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
import { fetchData } from "@/db/db";
type Props = {};

export type GeneralData = {
  main_description: string;
  main_service: MainService;
  milestones: NoteItem[];
};
export type MainService = {
  description: string;
  includes: string[];
  price: string;
  rate: string;
  span: string;
  title: string;
};

export type NoteItem = {
  _key: string;
  title: string;
  description: string;
};

export type Skill = {
  title: string;
  _id: string;
  description: string;
  notes: NoteItem[];
};

export type Information = {
  _id: string;
  title: string;
  information: NoteItem[];
};
export type Services = {
  _id: string;
  title: string;
  servuce: Service[];
};

export type Service = NoteItem & {
  price: string;
  rate: string;
  span: string;
};
export default async function Management({}: Props) {
  const generalData = await fetchData<GeneralData>(`
			*[_type == "general" && preset == "main"][0]{
				main_description,
				main_service,
				milestones
			}
	`);

  const skillsData = await fetchData<Skill[]>(`
		*[_type == 'skills']{
			_id,
			title,
			description,
			notes
		}
	`);
  // document.addEventListener("scroll", (e) => {
  //   // document.body.height
  // });
  const information = await fetchData<Information[]>(`
		*[_type == "informations"]{
			_id,
			title,
			information
		}
	`);

  const services = await fetchData<Services[]>(`
	*[_type == "services"]{
		_id,
		title,
		servuce
	}
`);
  return (
    <main id="page_management">
      <NavOpener />
      <SectionJump />
      <section className="management" id="general">
        <article>
          <div className="profile-head">
            <h2>
              <img
                src="/decors/heading-decor.svg"
                alt=""
                className="decor_head"
              />
              MARISSA
            </h2>
            <div className="highlight">
              <p>talent manager</p>
            </div>
            <div className="contacts">
              <a href="https://x.com/SheepishMari" className="c-btn btn">
                <FaTwitter />
              </a>
              {/* <a href="#" className="c-btn btn">
                <FaTwitter />
              </a> */}
            </div>
          </div>
          <img
            src="/decors/decor_triangle.png"
            alt=""
            className="decor_triangle"
          />
          <p className="bio">{generalData.main_description}</p>
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
              {generalData.milestones?.map((milestone) => {
                return (
                  <div className="milestone mile-panel" key={milestone._key}>
                    <h2>{milestone.title}</h2>
                    <p>{milestone.description}</p>
                  </div>
                );
              })}
              {/* <div className="milestone mile-panel">
                <h2>High Work Record</h2>
                <p>
                  Have completed over 100 months worth of service in 2 years!
                  This includes both long term and single months!
                </p>
              </div> */}
            </div>
          </div>
          <figure className="graphics">
            <img
              src="/graphics/milestone-artnew.png"
              alt=""
              className="ms-art"
            />
          </figure>
        </div>
      </section>

      <section className="skills" id="skills">
        <div className="confine">
          <div className="skills-head">
            <div className="text-part">
              <h2>
                <img src="/decors/skill-star.svg" alt="" className="stars" />
                <span> skills & specialty</span>
              </h2>

              <hr />
            </div>
          </div>
          <div className="skill-list">
            {skillsData?.map((skill) => {
              return (
                <div className="skill-card" key={skill._id}>
                  <div className="card-head">
                    <h2>{skill.title}</h2>
                    <hr />
                    <p>{skill.description}</p>
                  </div>
                  <div className="note-list">
                    {skill.notes?.map((note) => {
                      return (
                        <div className="note" key={note._key}>
                          <h2>{note.title}</h2>
                          <p>{note.description}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            {/* <div className="skill-card">
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
            </div> */}
          </div>
        </div>
      </section>

      <Information infoList={information} />
      <Services main={generalData.main_service} other={services} />
    </main>
  );
}
