import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect } from "react";
import { DownloadBtn } from "../exportonly/Btn";
import { useState } from "react";

const ApiDownload = () => {
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

  const onClickDownloadBtn = () => {
    window.open(data.rangtalkAndroid.downloadUrl);
  };

  const callApi = async () => {
    try {
      setData(null);
      const response = await axios.get(
        "https://t-api.rangtalk.com/common/v1/binary"
      );
      console.log(response);
      setData(response.data);
      console.log(response);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => callApi, []);

  return (
    <Box>
      APIDownload
      <Box>
        <DownloadBtn
          onClick={onClickDownloadBtn}
          color="white"
          variant="contained"
          name="google"
        ></DownloadBtn>
      </Box>
    </Box>
  );
};

export default ApiDownload;
