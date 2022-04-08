import { Box, Container, Typography } from "@mui/material";
import React from "react";
import { Dot } from "../exportonly/Btn";
//cssmodule이랑 css차이 mui랑 css모듈 같이 쓸수 있는가?
//빌드 하면 차이는? =>빌드해보고 output찾아내기
//img src파일에 집어 넣어보기
//proptypes사용하기
//props에 오브젝트
//index.html / index.js는 어떻게 연결되는가 =>npm성격이다.
//hoisting->함수 선언과 정의 차이 hoist= 선언이 hoist로 상부로 올라간다 this?

const DetailArticle = ({
  ImgMockup = "",
  article1 = "",
  article2 = "",
  article2color = "",
  article3 = "",
  article4 = "",
  article5 = "",
  article6 = "",
  article7 = "",
  article8 = "",
  article9 = "",
  ImgSub04 = "",
  ImgSub05 = "",
  ImgSub06 = "",
  bgcolor = "",
  bghighlight = "",
  dotcolor = "",
}) => {
  return (
    <Box>
      <div id="1">
        <Box bgcolor={bgcolor} position="relative" height={1080}>
          <Container>
            <Box position="relative" height={1080}>
              <Box display="flex" justifyContent="center">
                <Box
                  mt={10}
                  component="img"
                  sx={{ width: 670, height: 670 }}
                  alt="img_mockup_teacher"
                  src={ImgMockup}
                />

                <Box mt={35}>
                  <Box
                    position={"absolute"}
                    mt={0.4}
                    bgcolor={bghighlight}
                    sx={{ width: "200px", height: "20px" }}
                  />
                  <Box position={"relative"}>
                    <Typography
                      sx={{ width: "200px", lineHeight: 1.2 }}
                      fontSize="20px"
                      color="#000"
                    >
                      {article1}
                    </Typography>
                  </Box>
                  <Typography color={article2color} variant="h2">
                    {article2}
                  </Typography>
                  <Typography>{article3}</Typography>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </div>
      <Container>
        <Box
          sx={{ placeItems: "center", maxWidth: "1152px" }}
          display="grid"
          gridTemplateColumns="1fr 1fr 18px 18px 18px 1fr 1fr 18px 18px 18px 1fr 1fr"
          position="absolute"
          mt={-30}
        >
          <Box
            component="img"
            sx={{ width: 120, height: 120 }}
            alt="img_sub_04"
            src={ImgSub04}
          />
          <Box>
            <Typography>
              <strong>
                {article4}
                <br />
              </strong>
              {article5}
            </Typography>
          </Box>
          <Dot dotcolor={dotcolor} />
          <Dot dotcolor={dotcolor} />
          <Dot dotcolor={dotcolor} />
          <Box
            component="img"
            sx={{ width: 120, height: 120 }}
            alt="img_sub_05"
            src={ImgSub05}
          />
          <Box>
            <Typography>
              <strong>
                {article6}
                <br />
              </strong>
              {article7}
            </Typography>
          </Box>
          <Dot dotcolor={dotcolor} />
          <Dot dotcolor={dotcolor} />
          <Dot dotcolor={dotcolor} />
          <Box
            component="img"
            sx={{ width: 120, height: 120 }}
            alt="img_sub_06"
            src={ImgSub06}
          />
          <Box>
            <Typography>
              <strong>
                {article8}
                <br />
              </strong>
              {article9}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default DetailArticle;
