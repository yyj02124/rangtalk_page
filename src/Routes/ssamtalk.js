import React from "react";
import FixedHeaderMenu from "../components/fixedheadermenu";
import FixedHeaderLink from "../components/fixedheaderlink";
import SummaryArtice from "../components/summaryarticle";
import YoutubeAdvertisementArticle from "../components/adarticle";
import DetailArticle from "../components/detailarticle";
import FAQ from "../components/faq";

function Ssamtalk() {
  return (
    <div>
      <FixedHeaderMenu />
      <FixedHeaderLink />
      <SummaryArtice />
      <YoutubeAdvertisementArticle />
      <DetailArticle />
      <FAQ />

      <h1>Hello</h1>
    </div>
  );
}

export default Ssamtalk;
