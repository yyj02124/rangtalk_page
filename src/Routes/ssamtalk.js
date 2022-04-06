import React from "react";
import theme from "../Colorcss";
import SsamtalkFixedHeaderMenu from "../commoncomponents/Fixedheadermenu";
import SummaryArtice from "../commoncomponents/Summaryarticle";
import YoutubeAdvertisementArticle from "../commoncomponents/AdArticle";
import DetailArticle from "../commoncomponents/Detailarticle";
import FAQ from "../commoncomponents/Faq";
import { SSAM_DETAIL_ARTICLE } from "../exportonly/Article";

function Ssamtalk() {
  return (
    <div>
      <SsamtalkFixedHeaderMenu
        FulllogoImg="img/img_fulllogo_big@2x.png"
        LoginColor="ssamtalk"
        IrangLinkBtnColor="irangtalk"
        SsamLinkBtnColor="ssamtalk"
        RangLinkBtnColor="rangtalk"
      />
      <SummaryArtice ImgBack="./img/img_back@2x.png" />
      <YoutubeAdvertisementArticle bgcolor="ssamtalklite.light" />
      <DetailArticle {...SSAM_DETAIL_ARTICLE} />
      <FAQ FAQbgcolor="FAQbgcolor.main" FAQnumber="01." />
      <h1>Hello</h1>
    </div>
  );
}

export default Ssamtalk;
