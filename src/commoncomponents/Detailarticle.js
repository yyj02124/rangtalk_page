import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import { Dot } from "../exportonly/Btn";
import PropTypes from "prop-types";
//cssmodule이랑 css차이 mui랑 css모듈 같이 쓸수 있는가?
//빌드 하면 차이는? =>빌드해보고 output찾아내기
//img src파일에 집어 넣어보기
//proptypes사용하기
//props에 오브젝트
//index.html / index.js는 어떻게 연결되는가 =>npm성격이다.
//hoisting->함수 선언과 정의 차이 hoist= 선언이 hoist로 상부로 올라간다 this?

const DetailArticle = ({
  imgMockup,
  article1,
  articleTitle,
  articleTitleColor,
  articleDetailMain,
  articleImg04Title,
  articleImg04Body,
  articleImg05Title,
  articleImg05Body,
  articleImg06Title,
  articleImg06Body,
  imgSub04,
  imgSub05,
  imgSub06,
  bgColor,
  bgHighlight,
  dotColor,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box>
      <div id="1">
        <Box bgcolor={bgColor} position="relative" height={1080}>
          <Container>
            <Box position="relative" height={1080}>
              <Box display="flex" justifyContent="center">
                <Box
                  mt={10}
                  component="img"
                  sx={
                    matches ? { width: 670, height: 670 } : { display: "none" }
                  }
                  alt="img_mockup_teacher"
                  src={imgMockup}
                />

                <Box mt={matches ? 35 : 5}>
                  <Box
                    position={"absolute"}
                    mt={0.4}
                    bgcolor={bgHighlight}
                    sx={{ width: "180px", height: "20px" }}
                  />
                  <Box position={"relative"}>
                    <Typography
                      fontFamily="Noto Sans KR"
                      sx={{ width: "200px", lineHeight: 1.2 }}
                      fontSize="20px"
                      color="#000"
                    >
                      {article1}
                    </Typography>
                  </Box>
                  <Typography
                    fontFamily="Noto Sans KR"
                    fontWeight="bold"
                    color={articleTitleColor}
                    fontSize="50px"
                    sx={{ lineHeight: "1.2" }}
                  >
                    {articleTitle}
                  </Typography>
                  <Typography fontFamily="Noto Sans KR" mt={5} width="331px">
                    {articleDetailMain}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
      <Container>
        <Box
          sx={{
            placeItems: "center",
            maxWidth: "1152px",
          }}
          display="grid"
          gap={6}
          // gridTemplateColumns={
          //   "1fr 1fr 18px 18px 18px 1fr 1fr 18px 18px 18px 1fr 1fr"
          // }
          {...(matches
            ? {
                gridTemplateColumns: "1fr 54px 1fr 54px 1fr ",
              }
            : { gridTemplateRows: "1fr1fr1fr" })}
          position="absolute"
          mt={matches ? -30 : -80}
        >
          <Box sx={{ placeItems: "center" }} display="flex">
            <Box
              component="img"
              sx={{ width: 120, height: 120 }}
              alt="img_sub_04"
              src={imgSub04}
            />
            <Box>
              <Typography fontFamily="Noto Sans KR" width={154}>
                <strong>
                  {articleImg04Title}
                  <br />
                </strong>
                {articleImg04Body}
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Dot dotColor={dotColor} />
            <Dot dotColor={dotColor} />
            <Dot dotColor={dotColor} />
          </Box>
          <Box sx={{ placeItems: "center" }} display={"flex"}>
            <Box
              component="img"
              sx={{ width: 120, height: 120 }}
              alt="img_sub_05"
              src={imgSub05}
            />
            <Box>
              <Typography fontFamily="Noto Sans KR" width={154}>
                <strong>
                  {articleImg05Title}
                  <br />
                </strong>
                {articleImg05Body}
              </Typography>
            </Box>
          </Box>
          <Box display="flex">
            <Dot dotColor={dotColor} />
            <Dot dotColor={dotColor} />
            <Dot dotColor={dotColor} />
          </Box>
          <Box sx={{ placeItems: "center" }} display={"flex"}>
            <Box
              component="img"
              sx={{ width: 120, height: 120 }}
              alt="img_sub_06"
              src={imgSub06}
            />
            <Box>
              <Typography fontFamily="Noto Sans KR" width={154}>
                <strong>
                  {articleImg06Title}
                  <br />
                </strong>
                {articleImg06Body}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

DetailArticle.propTypes = {
  imgMockup: PropTypes.string,
  article1: PropTypes.string,
  articleTitle: PropTypes.string,
  articleTitleColor: PropTypes.string,
  articleDetailMain: PropTypes.array,
  articleImg04Title: PropTypes.string,
  articleImg04Body: PropTypes.string,
  articleImg05Title: PropTypes.string,
  articleImg05Body: PropTypes.string,
  articleImg06Title: PropTypes.string,
  articleImg06Body: PropTypes.string,
  imgSub04: PropTypes.string,
  imgSub05: PropTypes.string,
  imgSub06: PropTypes.string,
  bgColor: PropTypes.string,
  bgHighlight: PropTypes.string,
  dotColor: PropTypes.string,
};

export default DetailArticle;
