import { Box, Container, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import HeadMenuBtn, { ApiDownMenuBtn, DownloadBtn } from "../exportonly/Btn";
import { useState } from "react";

const ApiDownload = ({
  imgBottomPhone = "",
  apiDownBgColor = "",
  apiDownTitle = "",
  manualDownloadColor = "",
}) => {
  const [data, setData] = useState(null);

  // const onClickDownloadBtn = async () => {
  //   try {
  //     const response = await axios.get(
  //       "https://t-api.rangtalk.com/common/v1/binary"
  //     );
  //     setData(response.data);
  //     window.open(response.data.rangtalkAndroid.downloadUrl);
  //     console.log(response);
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  const onClickAndroidDownloadBtn = () => {
    window.open(data.rangtalkAndroid.downloadUrl);
  };
  const onClickIosDownloadBtn = () => {
    window.open(data.samrangtalkIos.downloadUrl);
  };

  const callApi = async () => {
    try {
      setData(null);
      const response = await axios.get(
        "https://t-api.rangtalk.com/common/v1/binary"
      );
      console.log(response);
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

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
          <ApiDownMenuBtn name={"아이랑톡"}></ApiDownMenuBtn>
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

          <Box>
            <HeadMenuBtn
              color={manualDownloadColor}
              fullWidth={true}
              variant="contained"
              name="쌤이랑톡 매뉴얼"
            ></HeadMenuBtn>
            <Box display="flex" mt={2}>
              <DownloadBtn
                onClick={onClickAndroidDownloadBtn}
                color="white"
                variant="contained"
                name="google"
              ></DownloadBtn>

              <DownloadBtn
                onClick={onClickIosDownloadBtn}
                color="white"
                variant="contained"
                name="apple"
              ></DownloadBtn>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ApiDownload;
