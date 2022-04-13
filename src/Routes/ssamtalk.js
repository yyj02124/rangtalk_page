import React from "react";
import FixedHeaderMenu from "../commoncomponents/FixedHeaderMenu";
import SummaryArtice from "../commoncomponents/SummaryArticle";
import YoutubeAdvertisementArticle from "../commoncomponents/AdArticle";
import DetailArticle from "../commoncomponents/DetailArticle";
import FAQ from "../commoncomponents/Faq";
import { SSAM_DETAIL_ARTICLE } from "../exportonly/Article";
import ContactUs from "../commoncomponents/ContactUs";
import FooterCopyright from "../commoncomponents/FooterCopyright";
import Test2 from "../commoncomponents/Test2";
import { ApiDownloadComponent } from "../exportonly/ApiDownloadComponent";

function Ssamtalk() {
  return (
    <div>
      <FixedHeaderMenu
        refresh="/"
        fullLogoImg="img/img_fulllogo_big@2x.png"
        loginColor="ssamtalk"
        irangLinkBtnColor="irangtalk"
        ssamLinkBtnColor="ssamtalk"
        rangLinkBtnColor="rangtalk"
      />
      <SummaryArtice
        imgBack="url('/img/img_back@2x.png')"
        imgBackMobile="url('./img/bg@2x.png')"
      />
      <YoutubeAdvertisementArticle bgColor="ssamtalklite.light" />
      <DetailArticle {...SSAM_DETAIL_ARTICLE} />
      <FAQ faqBgColor="FAQbgcolor.main" />
      <ContactUs btnColor="ssamtalk" />

      <Test2 {...ApiDownloadComponent} />

      <FooterCopyright footerBgColor="black.main" />
    </div>
  );
}

export default Ssamtalk;
