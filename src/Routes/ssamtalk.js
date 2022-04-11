import React from "react";
import SsamtalkFixedHeaderMenu from "../commoncomponents/FixedHeaderMenu";
import SummaryArtice from "../commoncomponents/SummaryArticle";
import YoutubeAdvertisementArticle from "../commoncomponents/AdArticle";
import DetailArticle from "../commoncomponents/DetailArticle";
import FAQ from "../commoncomponents/Faq";
import { SSAM_DETAIL_ARTICLE } from "../exportonly/Article";
import ApiDownload from "../commoncomponents/ApiDownload";
import ContactUs from "../commoncomponents/ContactUs";
import FooterCopyright from "../commoncomponents/FooterCopyright";

function Ssamtalk() {
  return (
    <div>
      <SsamtalkFixedHeaderMenu
        refresh="/"
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
      <ContactUs />
      <ApiDownload
        apiDownBgColor="apidownbgcolor.main"
        imgBottomPhone="./img/img_bottom_phone_02@2x.png"
        apiDownTitle="쌤이랑톡"
        manualDownloadColor="ssamtalk"
      />
      <FooterCopyright footerbgcolor="black.main" />
    </div>
  );
}

export default Ssamtalk;
