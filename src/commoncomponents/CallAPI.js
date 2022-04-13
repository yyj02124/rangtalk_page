import { Box } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { DownloadBtn } from "../exportonly/Btn";

const CallAPI = () => {
  const [data, setData] = useState(null);

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
    <Box display="flex" justifyContent="space-evenly" mt={1}>
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
  );
};

export default CallAPI;
