import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import HeadMenuBtn, { ApiDownMenuBtn } from "../exportonly/Btn";
import PropTypes from "prop-types";
import CallAPI from "./CallAPI";
const DownloadArticle = ({
  apiDownBgColor,
  bgImg1,
  bgImg2,
  bgImg3,
  bgMobileImg1,
  bgMobileImg2,
  bgMobileImg3,
  ssamtakManualColor1,
  ssamtakManualColor2,
  ssamtakManualColor3,
  apiDownloadTitleColor1,
  apiDownloadTitleColor2,
  apiDownloadTitleColor3,
  apiDownloadTitle1,
  apiDownloadTitle2,
  apiDownloadTitle3,
  ssamtakManualExplain1,
  ssamtakManualExplain2,
  ssamtakManualExplain3,
  ssamtakManual1,
  ssamtakManual2,
  ssamtakManual3,
  imgBottomLogo1,
  imgBottomLogo2,
  imgBottomLogo3,
  ssamMenual,
  rangMenual,
}) => {
  const [handle, setHandle] = useState(
    window.location.pathname === "/ssamtalk" ? "1" : "2"
  );
  const count = (event) => {
    setHandle(event.target.value);
  };

  useEffect(() => {
    console.log(window.location.pathname);
  }, []);

  const matches = useMediaQuery("(min-width:600px)");

  return (
    <div id="4">
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
        // mt={13}
        position="relative"
      >
        <Container>
          <Box position="absolute" mt={"15%"}>
            <Box display="flex" justifyContent="space-evenly">
              <ApiDownMenuBtn
                onClickBtn={count}
                value="0"
                name="아이랑톡"
                btnColor={ssamtakManualColor1}
              />
              <ApiDownMenuBtn
                onClickBtn={count}
                value="1"
                name="쌤이랑톡"
                btnColor={ssamtakManualColor2}
              />
              <ApiDownMenuBtn
                onClickBtn={count}
                value="2"
                name="학교랑톡"
                btnColor={ssamtakManualColor3}
              />
            </Box>

            <Box display="flex" mt={"50%"}>
              <Typography
                fontFamily="Noto Sans KR"
                fontWeight="bold"
                variant="h2"
                marginRight="8px"
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
                sx={
                  handle === "0"
                    ? { width: 270, height: 95, marginTop: "-23px" }
                    : { width: 50, height: 50 }
                }
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
            <Typography fontFamily="Noto Sans KR" fontSize={20} width={293}>
              {handle === "0"
                ? ssamtakManualExplain1
                : handle === "1"
                ? ssamtakManualExplain2
                : ssamtakManualExplain3}
            </Typography>

            <Box
              component="img"
              sx={
                matches
                  ? { display: "none" }
                  : {
                      maxWidth: "100%",
                      height: 341,
                    }
              }
              alt="bgMobileImg"
              src={
                matches
                  ? null
                  : handle === "0"
                  ? bgMobileImg1
                  : handle === "1"
                  ? bgMobileImg2
                  : bgMobileImg3
              }
            />
            <a
              style={{ textDecoration: "none" }}
              href={
                handle === "0" ? null : handle === "1" ? ssamMenual : rangMenual
              }
              download={
                handle === "1"
                  ? "KT_쌤이랑톡_사용자_매뉴얼_V1.4_20210813.pdf"
                  : "KT_학교랑톡_사용자_매뉴얼_V1.4_20210813.pdf"
              }
              target="_self"
            >
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
              ></HeadMenuBtn>
            </a>
            <CallAPI />
            <Typography
              color="#404040"
              fontFamily="Noto Sans KR"
              fontSize={12}
              width={293}
            >
              * iOS앱은 ‘설정{">"}일반{">"}기기 관리 (또는 프로파일 및 기기
              관리) {">"}
              Helixtech Corp. 에서 ‘신뢰함{">"}신뢰’ 버튼을 꼭 확인해주셔야
              어플이 정상적으로 실행됩니다.
            </Typography>
          </Box>
        </Container>
      </Box>
    </div>
  );
};

DownloadArticle.propTypes = {
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
  ssamtakManualExplain1: PropTypes.array,
  ssamtakManualExplain2: PropTypes.string,
  ssamtakManualExplain3: PropTypes.string,
  ssamtakManual1: PropTypes.string,
  ssamtakManual2: PropTypes.string,
  ssamtakManual3: PropTypes.string,
};

export default DownloadArticle;
