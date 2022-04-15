import React from "react";
import YoutubeAdvertisementArticle from "../commoncomponents/AdArticle";
import ContactUs from "../commoncomponents/ContactUs";
import DetailArticle from "../commoncomponents/DetailArticle";
import FixedHeaderMenu from "../commoncomponents/FixedHeaderMenu";
import FooterCopyright from "../commoncomponents/FooterCopyright";
import RangFAQ from "../commoncomponents/RangFaq";
import SummaryArtice from "../commoncomponents/SummaryArticle";
import DownloadArticle from "../commoncomponents/DownloadArticle";
import { API_DOWNLOAD_COMPONENT } from "../exportonly/ApiDownloadComponent";
import { RANG_DETAIL_ARTICLE } from "../exportonly/Article";
import BtnTop from "../commoncomponents/BtnTop";

function Rangtalk() {
  return (
    <div>
      <BtnTop />
      <FixedHeaderMenu
        refresh="/rangtalk"
        fullLogoImg="img/img_fulllogo1_big@2x.png"
        loginColor="rangtalk"
        irangLinkBtnColor="irangtalk"
        ssamLinkBtnColor="ssamtalk"
        rangLinkBtnColor="rangtalk"
      />
      <SummaryArtice
        imgBack="url('/img/img_back1@2x.png')"
        imgBackMobile="url('./img/img-m@2x.png')"
      />
      <YoutubeAdvertisementArticle bgColor="rangtalk.light" />
      <DetailArticle {...RANG_DETAIL_ARTICLE} />
      <RangFAQ faqBgColor="#e8f2f1" />
      <ContactUs btnColor="rangtalk" checkOn="./img/com_check_on2@2x.png" />

      <DownloadArticle {...API_DOWNLOAD_COMPONENT} />

      <FooterCopyright footerBgColor="black.main" />
    </div>
  );
}

export default Rangtalk;
