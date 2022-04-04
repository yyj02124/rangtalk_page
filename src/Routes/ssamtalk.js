import React from "react";
import SsamtalkFixedHeaderMenu from "../ssamtalkcomponents/Ssamtalkfixedheadermenu";
import SummaryArtice from "../commoncomponents/Summaryarticle";
import YoutubeAdvertisementArticle from "../commoncomponents/AdArticle";
import DetailArticle from "../commoncomponents/Detailarticle";
import FAQ from "../commoncomponents/Faq";

function Ssamtalk() {
  return (
    <div>
      <SsamtalkFixedHeaderMenu />
      <SummaryArtice />
      <YoutubeAdvertisementArticle />
      <DetailArticle />
      <FAQ />

      <h1>Hello</h1>
    </div>
  );
}

export default Ssamtalk;
