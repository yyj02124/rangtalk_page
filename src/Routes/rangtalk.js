import React from "react";
import YoutubeAdvertisementArticle from "../commoncomponents/AdArticle.js";
import RangtalkFixedHeaderLink from "../rangtalkcomonents/Rangtalkfixedheaderlink.js";

function Rangtalk() {
  return (
    <div>
      <RangtalkFixedHeaderLink />
      <YoutubeAdvertisementArticle bgcolor="rangtalk.main" />
      <h1>Hello</h1>
    </div>
  );
}

export default Rangtalk;
