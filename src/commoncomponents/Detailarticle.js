import { Box, Container, ThemeProvider, Typography } from "@mui/material";
import React from "react";
import styles from "./summaryarticle.css";
import theme from "../Colorcss";
import { Dot } from "../exportonly/Btn";
import { height, lineHeight, width } from "@mui/system";

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
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default DetailArticle;
