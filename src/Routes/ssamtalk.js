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

      <Test2
        apiDownBgColor="apidownbgcolor.main"
        bgImg1="url('/img/img_bottom_phone_00@2x.png')"
        bgImg2="url('/img/img_bottom_phone_01@2x.png')"
        bgImg3="url('/img/img_bottom_phone_02@2x.png')"
        ssamtakManualColor1="irangtalk"
        ssamtakManualColor2="ssamtalk"
        ssamtakManualColor3="rangtalk"
        apiDownloadTitleColor1="irangtalk.main"
        apiDownloadTitleColor2="ssamtalk.main"
        apiDownloadTitleColor3="rangtalk.main"
        apiDownloadTitle1=""
        apiDownloadTitle2="쌤이랑톡"
        apiDownloadTitle3="학교랑톡"
        ssamtakManual1="아이랑톡메뉴얼다운로드"
        ssamtakManual2="쌤톡메뉴얼다운로드"
        ssamtakManual3="랑톡메뉴얼다운로드"
        imgBottomLogo1="./img/아이랑톡2@2x.png"
        imgBottomLogo2="./img/img_bottom_logo_2@2x.png"
        imgBottomLogo3="./img/img_bottom_logo_3@2x.png"
        ssamtakManualColor="ssamtalk"
      />

      <FooterCopyright footerBgColor="black.main" />
    </div>
  );
}

export default Ssamtalk;
