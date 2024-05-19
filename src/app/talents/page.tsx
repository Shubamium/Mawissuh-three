import React from "react";
import TalentList from "./talentList/TalentList";
import "./talents.scss";
type Props = {};

export default function page({}: Props) {
  return (
    <main id="page_talent">
      <TalentList />
    </main>
  );
}
