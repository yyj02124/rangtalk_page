import React from "react";
import FixedHeaderMenu from "../commoncomponents/FixedHeaderMenu";

function Rangtalk() {
  return (
    <div>
      <FixedHeaderMenu
        refresh="/rangtalk"
        fullLogoImg="img/img_fulllogo1_big@2x.png"
        loginColor="rangtalk"
        irangLinkBtnColor="irangtalk"
        ssamLinkBtnColor="ssamtalk"
        rangLinkBtnColor="rangtalk"
      />
      <h1>Hello</h1>
    </div>
  );
}

export default Rangtalk;
