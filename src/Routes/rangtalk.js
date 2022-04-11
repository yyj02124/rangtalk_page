import React from "react";
import YoutubeAdvertisementArticle from "../commoncomponents/AdArticle.js";
import SummaryArtice from "../commoncomponents/SummaryArticle.js";
import SsamtalkFixedHeaderMenu from "../commoncomponents/FixedHeaderMenu.js";

function Rangtalk() {
  return (
    <div>
      <SsamtalkFixedHeaderMenu
        refresh="/rangtalk"
        FulllogoImg="img/img_fulllogo1_big@2x.png"
        LoginColor="rangtalk"
        IrangLinkBtnColor="irangtalk"
        SsamLinkBtnColor="ssamtalk"
        RangLinkBtnColor="rangtalk"
      />
      <SummaryArtice ImgBack="./img/img_back1@2x.png" />
      <YoutubeAdvertisementArticle bgcolor="rangtalk.main" />
      <h1>Hello</h1>
    </div>
  );
}

export default Rangtalk;
