import React from "react";
import styles from "./summaryarticle.css";

const SummaryArtice = () => {
  return (
    <div className="summaryArticleBackgroundImg">
      <p>
        쌤이<strong>랑</strong>, 학부모<strong>랑</strong>,아이
        <strong>랑</strong>
      </p>
      <p>랑톡</p>
      <p>
        랑톡(Rangtalk)은 학교 유선 전화를 개인 스마트폰에서 사용할 수 있는
        교원안심번호 소통서비스 앱입니다 시간과 장소의 제약이 없어 업무 효율성을
        높여주고, 선생님과 학부모, 아이간의 양방향 소통을 가능하게 해줍니다.
      </p>
      <button>다운로드</button>
    </div>
  );
};

export default SummaryArtice;
