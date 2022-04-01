import React from "react";
import FixedHeaderMenu from "../components/fixedheadermenu";
import FixedHeaderLink from "../components/fixedheaderlink";
import SummaryArtice from "../components/summaryarticle";
import YoutubeAdvertisementArticle from "../components/adarticle";

function Ssamtalk() {
  return (
    <div>
      <FixedHeaderMenu />
      <FixedHeaderLink />
      <SummaryArtice />
      <YoutubeAdvertisementArticle />

      <h1>Hello</h1>
    </div>
  );
}

export default Ssamtalk;
