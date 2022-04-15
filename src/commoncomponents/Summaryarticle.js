import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { DownloadBtn, DownloadLinkBtn } from "../exportonly/Btn";
import PropTypes from "prop-types";

const SummaryArtice = ({ imgBack, imgBackMobile }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      sx={
        matches
          ? {
              backgroundImage: imgBack,
              backgroundSize: "cover",
            }
          : { backgroundImage: imgBackMobile, backgroundSize: "cover" }
      }
      width="100%"
      height={1080}
      mt={10}
      position="relative"
    >
      <Container>
        <Box position="absolute" top={170}>
          <Typography fontFamily="Noto Sans KR" color="#fff" variant="h4">
            쌤이<strong>랑</strong>, 학부모<strong>랑</strong>,아이
            <strong>랑</strong>
          </Typography>
          <Typography
            color="#fff"
            fontFamily="NanumSquareRound"
            fontWeight="bold"
            mb={3}
            variant="h1"
          >
            랑톡
          </Typography>
          <Box mb={10} width={matches ? 500 : null}>
            <Typography color="#fff" fontFamily="Noto Sans KR">
              랑톡(Rangtalk)은
              <strong>
                학교 유선 전화를 개인 스마트폰에서 사용할 수 있는 교원안심번호
                소통서비스 앱
              </strong>
              입니다. <br /> 시간과 장소의 제약이 없어 업무 효율성을 높여주고,
              선생님과 학부모, 아이간의 양방향 소통을 가능하게 해줍니다.
            </Typography>
          </Box>
          <Box
            display="flex"
            // justifyContent="space-between"
          >
            <ScrollLink to="4" spy={true} smooth={true}>
              <DownloadLinkBtn
                color="white"
                variant="contained"
                name="다운로드"
              />
            </ScrollLink>
            <DownloadBtn
              color="white"
              variant="contained"
              name="온라인청약 바로가기"
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

SummaryArtice.propTypes = {
  imgBack: PropTypes.string,
  imgBackMobile: PropTypes.string,
};
export default SummaryArtice;
