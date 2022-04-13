import { Box, Container, Typography } from "@mui/material";
import React from "react";

const FooterCopyright = ({ footerBgColor = "" }) => {
  return (
    <Box bgcolor={footerBgColor}>
      <Container>
        <Box>
          <Box
            component="img"
            sx={{ width: 100, height: 36 }}
            alt="logo"
            src="./img/logo@2x.png"
          />
          <Typography color="#999999">
            대표 박성빈, 이수흔 | (06744) 서울시 서초구 강남대로160-2
            라이온스빌딩 6층
          </Typography>
          <Typography color="#999999">
            전화 02-733-5959 ~ 5960 | FAX 02-733-7198 | ktbizmobile@kt.com
          </Typography>
          <Typography color="#999999">
            @ 2020 Helixtech Corp. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default FooterCopyright;
