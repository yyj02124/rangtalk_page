import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const FooterCopyright = ({ footerBgColor = "" }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      bgcolor={footerBgColor}
      height={matches ? 168 : 200}
      sx={{ lineHeight: "40px" }}
    >
      <Container>
        <Box>
          <Box
            component="img"
            sx={{ width: 100, height: 36 }}
            mt={2}
            alt="logo"
            src="./img/logo@2x.png"
          />
          <Typography fontFamily="Noto Sans KR" color="#999999">
            대표 박성빈, 이수흔 | (06744) 서울시 서초구 강남대로160-2
            라이온스빌딩 6층
          </Typography>
          <Typography fontFamily="Noto Sans KR" color="#999999">
            전화 02-733-5959 ~ 5960 | FAX 02-733-7198 | ktbizmobile@kt.com
          </Typography>
          <Typography fontFamily="Noto Sans KR" color="#999999">
            @ 2020 Helixtech Corp. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterCopyright;
