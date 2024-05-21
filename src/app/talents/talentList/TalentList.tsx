"use client";
import React, { useState } from "react";
import { GoBrowser, GoTriangleLeft } from "react-icons/go";
import { createPortal } from "react-dom";
import { FaTwitch, FaTwitter } from "react-icons/fa";
import { TalentData, SiteList } from "../page";
import { urlFor } from "@/db/db";
import { FaTiktok } from "react-icons/fa6";
import { CgInstagram } from "react-icons/cg";
import { BsYoutube } from "react-icons/bs";
type Props = {
  activeTalent: TalentData[];
  inactiveTalent: TalentData[];
};

export default function TalentList({ activeTalent, inactiveTalent }: Props) {
  const [show, setShow] = useState(false);
  const [selectedT, setSelectedT] = useState<TalentData | null>(null);

  const contactIcon: { [key in SiteList]: JSX.Element } = {
    twitter: <FaTwitter />,
    twitch: <FaTwitch />,
    website: <GoBrowser />,
    tiktok: <FaTiktok />,
    instagram: <CgInstagram />,
    youtube: <BsYoutube />,
  };
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
            {activeTalent.map((talent) => {
              return (
                <div
                  onClick={() => {
                    setShow(true);
                    setSelectedT(talent);
                  }}
                  className="talent"
                  key={talent._id}
                >
                  <div className="head">
                    <h2>{talent.name}</h2>
                    <hr />
                  </div>
                  <div className="display">
                    <img
                      src={
                        urlFor(talent.pfp).url() ?? "/graphics/pfp-sample.png"
                      }
                      alt=""
                      className="pfp"
                    />
                  </div>
                </div>
              );
            })}
            {/* <div className="talent">
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
            </div> */}
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
            {inactiveTalent.map((talent) => {
              return (
                <div
                  onClick={() => {
                    setShow(true);
                    setSelectedT(talent);
                  }}
                  className="talent"
                  key={talent._id}
                >
                  <div className="head">
                    <h2>{talent.name}</h2>
                    <hr />
                  </div>
                  <div className="display">
                    <img
                      src={
                        urlFor(talent.pfp).url() ?? "/graphics/pfp-sample.png"
                      }
                      alt=""
                      className="pfp"
                    />
                  </div>
                </div>
              );
            })}
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
                <p>{selectedT?.title}</p>
                <h2>{selectedT?.name}</h2>
              </div>
              <div className="display">
                <img
                  src={selectedT?.pfp ? urlFor(selectedT?.pfp).url() : ""}
                  alt=""
                  className="pfp"
                />
              </div>
              <div className="t-contacts">
                {selectedT?.contacts?.map((contact, index) => {
                  return (
                    <a
                      href={contact.url}
                      target="_blank"
                      className="t-contact btn"
                      key={"modal-contact" + index}
                    >
                      {contactIcon[contact.type]}
                    </a>
                  );
                })}
                {/* <a href="#" target="_blank" className="t-contact btn">
                  <FaTwitter />
                </a> */}
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
