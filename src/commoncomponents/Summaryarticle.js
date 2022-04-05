import { Avatar, Box, Container, Typography } from "@mui/material";
import React from "react";
import { DownloadBtn } from "./Btnexport";
import styles from "./summaryarticle.css";

const SummaryArtice = () => {
  return (
    <Box mt={13} position="relative">
      <Box
        zIndex={0}
        component="img"
        sx={{ width: "100%", height: 1080 }}
        alt="img_back@2x.png"
        src="./img/img_back@2x.png"
      />
      <Container>
        <Box position="absolute" mt={-100}>
          <Typography variant="h4">
            쌤이<strong>랑</strong>, 학부모<strong>랑</strong>,아이
            <strong>랑</strong>
          </Typography>
          <Typography mb={3} variant="h3">
            랑톡
          </Typography>
          <Box mb={10} width={500}>
            <Typography>
              랑톡(Rangtalk)은
              <strong>
                학교 유선 전화를 개인 스마트폰에서 사용할 수 있는 교원안심번호
                소통서비스 앱
              </strong>
              입니다 시간과 장소의 제약이 없어 업무 효율성을 높여주고, 선생님과
              학부모, 아이간의 양방향 소통을 가능하게 해줍니다.
            </Typography>
          </Box>

          <DownloadBtn color="white" variant="contained" name="다운로드" />
          <DownloadBtn
            color="white"
            variant="contained"
            name="온라인청약 바로가기"
          />
        </Box>
      </Container>
    </Box>
  );
};

export default SummaryArtice;