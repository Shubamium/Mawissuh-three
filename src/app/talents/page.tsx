import React from "react";
import TalentList from "./talentList/TalentList";
import "./talents.scss";
import { fetchData } from "@/db/db";
type Props = {};

export type TalentData = {
  _id: string;
  name: string;
  title: string;
  pfp: any;
  status: "inactive" | "active";
  contacts: Contact[];
};
export type Contact = {
  type: SiteList;
  url: string;
};
export type SiteList =
  | "twitter"
  | "twitch"
  | "youtube"
  | "instagram"
  | "website"
  | "tiktok";
export default async function page({}: Props) {
  const talents = await fetchData<TalentData[]>(`
		*[_type == "talents" ]{
			_id,
			name,
			title,
			pfp,
			status,
			contacts
		}
	`);

  const activeTalent: TalentData[] = [];
  const inactiveTalent: TalentData[] = [];

  talents.forEach((talent) => {
    if (talent.status === "active") {
      activeTalent.push(talent);
    } else {
      inactiveTalent.push(talent);
    }
  });
  return (
    <main id="page_talent">
      <TalentList activeTalent={activeTalent} inactiveTalent={inactiveTalent} />
    </main>
  );
}
