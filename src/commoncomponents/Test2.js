import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import HeadMenuBtn, { ApiDownMenuBtn } from "../exportonly/Btn";
import PropTypes from "prop-types";
import CallAPI from "./CallAPI";
import { width } from "@mui/system";
const Test2 = ({
  apiDownBgColor,
  bgImg1,
  bgImg2,
  bgImg3,
  ssamtakManualColor1,
  ssamtakManualColor2,
  ssamtakManualColor3,
  apiDownloadTitleColor1,
  apiDownloadTitleColor2,
  apiDownloadTitleColor3,
  apiDownloadTitle1,
  apiDownloadTitle2,
  apiDownloadTitle3,
  ssamtakManual1,
  ssamtakManual2,
  ssamtakManual3,
  imgBottomLogo1,
  imgBottomLogo2,
  imgBottomLogo3,
}) => {
  const [handle, setHandle] = useState("1");
  const count = (event) => {
    setHandle(event.target.value);
  };

  return (
    <Box
      bgcolor={apiDownBgColor}
      sx={
        handle === "0"
          ? { backgroundImage: bgImg1, backgroundSize: "cover" }
          : handle === "1"
          ? { backgroundImage: bgImg2, backgroundSize: "cover" }
          : { backgroundImage: bgImg3, backgroundSize: "cover" }
      }
      width="100%"
      height={1080}
      mt={13}
      position="relative"
    >
      <Container>
        <Box width={330}>
          <Box>
            <ApiDownMenuBtn
              onClickBtn={count}
              value="0"
              name="test1"
              btnColor={ssamtakManualColor1}
              variant="contained"
            />
            <ApiDownMenuBtn
              onClickBtn={count}
              value="1"
              name="test2"
              btnColor={ssamtakManualColor2}
              variant="contained"
            />
            <ApiDownMenuBtn
              onClickBtn={count}
              value="2"
              name="test3"
              btnColor={ssamtakManualColor3}
              variant="contained"
            />
          </Box>

          <Box display="flex">
            <Typography
              variant="h2"
              color={
                handle === "0"
                  ? apiDownloadTitleColor1
                  : handle === "1"
                  ? apiDownloadTitleColor2
                  : apiDownloadTitleColor3
              }
            >
              {handle === "0"
                ? apiDownloadTitle1
                : handle === "1"
                ? apiDownloadTitle2
                : apiDownloadTitle3}
            </Typography>
            <Box
              component="img"
              sx={{ width: 50, height: 50 }}
              alt="img_bottom_logo"
              src={
                handle === "0"
                  ? imgBottomLogo1
                  : handle === "1"
                  ? imgBottomLogo2
                  : imgBottomLogo3
              }
            />
          </Box>
          <Typography>
            아이와 학부모를 위한 양방향 소통 앱 쌤이랑 톡입니다.
          </Typography>
          <HeadMenuBtn
            color={
              handle === "0"
                ? ssamtakManualColor1
                : handle === "1"
                ? ssamtakManualColor2
                : ssamtakManualColor3
            }
            fullWidth={true}
            variant="contained"
            name={
              handle === "0"
                ? ssamtakManual1
                : handle === "1"
                ? ssamtakManual2
                : ssamtakManual3
            }
          />
          <CallAPI />
        </Box>
      </Container>
    </Box>
  );
};

Test2.propTypes = {
  apiDownBgColor: PropTypes.string,
  bgImg1: PropTypes.string,
  bgImg2: PropTypes.string,
  bgImg3: PropTypes.string,
  btnColor1: PropTypes.string,
  btnColor2: PropTypes.string,
  btnColor3: PropTypes.string,
  ssamtakManualColor1: PropTypes.string,
  ssamtakManualColor2: PropTypes.string,
  ssamtakManualColor3: PropTypes.string,
  apiDownloadTitle1: PropTypes.string,
  apiDownloadTitle2: PropTypes.string,
  apiDownloadTitle3: PropTypes.string,
  ssamtakManual1: PropTypes.string,
  ssamtakManual2: PropTypes.string,
  ssamtakManual3: PropTypes.string,
};

export default Test2;
