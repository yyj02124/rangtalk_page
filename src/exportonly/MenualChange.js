import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HeadMenuBtn, { ApiDownMenuBtn } from "./Btn";

const MenualChange = (
  imgBottomPhone = "",
  apiDownBgColor = "",
  apiDownTitle = "",
  manualDownloadColor = ""
) => {
  return (
    <Box bgcolor={apiDownBgColor} mt={13} position="relative">
      <div id="4" />
      <Box
        zIndex={0}
        component="img"
        maxHeight={1080}
        sx={{ width: "100%", height: "100%" }}
        alt="img_bottom_phone_02@2x.png"
        src={imgBottomPhone}
      />

      <Container>
        <Box sx={{ width: 372 }} position="absolute" top={200}>
          <ApiDownMenuBtn color="white" name={"아이랑톡"}></ApiDownMenuBtn>
          <ApiDownMenuBtn name={"쌤이랑톡"}></ApiDownMenuBtn>
          <ApiDownMenuBtn name={"학교랑톡"}></ApiDownMenuBtn>
          <Box mt={16} display="flex">
            <Typography
              sx={{
                width: 202,
                height: 83,
              }}
              color="#797979"
              variant="h3"
            >
              {apiDownTitle}
            </Typography>
            <Box
              component="img"
              sx={{ width: 50, height: 50 }}
              alt="img_bottom_logo"
              src="./img/img_bottom_logo_2@2x.png"
            />
          </Box>
          <Typography variant="h6">
            아이와 학부모를 위한 양방향 소통 앱 쌤이랑 톡입니다.
          </Typography>

          <HeadMenuBtn
            color={manualDownloadColor}
            fullWidth={true}
            variant="contained"
            name="쌤이랑톡 매뉴얼"
          ></HeadMenuBtn>
        </Box>
      </Container>
    </Box>
  );
};

export default MenualChange;
