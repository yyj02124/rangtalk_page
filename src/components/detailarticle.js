import React from "react";
import styles from "./summaryarticle.css";

const DetailArticle = () => {
  return (
    <div className=" detailArticleContainer">
      <div>
        <img
          className="img_mockup_teacher"
          alt="img_mockup_teacher"
          src="img/img_mockup_teacher@2x.png"
        />
        detailarticle
        <span>아이와학부모를 위한</span>
        <p>쌤이랑톡</p>
        <span>
          학교 선생님 전용 번호를 쉽게 알 수 있고, 실시간으로 학교 소식을 받아볼
          수 있습니다. 1:1 게시판을 통해 선생님과 비밀 상담도 가능합니다.
          이외에도 학부모, 아이의 편의를 위한 다양한 부가서비스를 추가할
          예정입니다.
        </span>
      </div>

      <div className="subDetails">
        <img alt="img_sub_04" src="img/img_sub_04@2x.png"></img>
        <span>
          <strong>실시간 알림</strong> 학교 및 학급 게시판을 통해 실시간으로
          학교 소식 확인이 가능합니다.
        </span>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <img alt="img_sub_05" src="img/img_sub_05@2x.png"></img>
        <span>
          <strong>편리한 소통</strong> 학급게시판, 1:1게시판 등 선생님과의
          원활한 소통을 위한 창구가 마련되어 있습니다.
        </span>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <img alt="img_sub_06" src="img/img_sub_06@2x.png"></img>
        <span>
          <strong>긴급 알림</strong> 학급게시판, 1:1게시판 등 선생님과의 원활한
          소통을 위한 창구가 마련되어 있습니다.
        </span>
      </div>
    </div>
  );
};

export default DetailArticle;
