import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { DownloadBtn } from "../exportonly/Btn";

const SummaryArtice = ({ imgBack = "", imgBackMobile = "" }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      height="100vh"
      sx={
        matches
          ? {
              backgroundImage: imgBack,
              backgroundSize: "cover",
            }
          : { backgroundImage: imgBackMobile, backgroundSize: "cover" }
      }
      mt={15}
      position="relative"
    >
      <Container>
        <Box position="absolute" top={170}>
          <Typography variant="h4">
            쌤이<strong>랑</strong>, 학부모<strong>랑</strong>,아이
            <strong>랑</strong>
          </Typography>
          <Typography mb={3} variant="h1">
            랑톡
          </Typography>
          <Box mb={10} width={matches ? 500 : null}>
            <Typography>
              랑톡(Rangtalk)은
              <strong>
                학교 유선 전화를 개인 스마트폰에서 사용할 수 있는 교원안심번호
                소통서비스 앱
              </strong>
              입니다. 시간과 장소의 제약이 없어 업무 효율성을 높여주고, 선생님과
              학부모, 아이간의 양방향 소통을 가능하게 해줍니다.
            </Typography>
          </Box>

          <ScrollLink to="4" spy={true} smooth={true}>
            <DownloadBtn color="white" variant="contained" name="다운로드" />
          </ScrollLink>
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
