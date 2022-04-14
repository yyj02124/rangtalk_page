import { Box, Button, useMediaQuery } from "@mui/material";
import * as React from "react";

const HeadMenuBtn = ({ color = "", variant = "", name, fullWidth = false }) => {
  // React.useEffect(() => {
  //   console.log("test ::: color ", color);
  //   console.log("test ::: variant ", variant);
  // }, [color, variant]);
  return (
    <Button
      sx={{ fontFamily: "Noto Sans KR" }}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
    >
      {name}
    </Button>
  );
};

export const ContactUsBtn = ({
  color = "",
  variant = "",
  name,
  fullWidth = false,
}) => {
  // React.useEffect(() => {
  //   console.log("test ::: color ", color);
  //   console.log("test ::: variant ", variant);
  // }, [color, variant]);
  return (
    <Button
      sx={{ height: 60, fontFamily: "Noto Sans KR" }}
      color={color}
      variant={variant}
      fullWidth={fullWidth}
    >
      {name}
    </Button>
  );
};

export const ApiDownMenuBtn = ({
  id = "",
  btnColor = "",
  variant = "",
  name,
  onClickBtn,
  value = "",
}) => {
  return (
    <Button
      sx={{
        borderRadius: "0%",
        borderBottom: "1px solid black",
        fontFamily: "Noto Sans KR",
        fontSize: "18px",
        padding: "0",
      }}
      value={value}
      onClick={onClickBtn}
      id={id}
      color={btnColor}
      variant={variant}
    >
      {name}
    </Button>
  );
};

export const HeadLinkBtn = ({ color = "", variant = "", name }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Button
      sx={{ fontFamily: "Noto Sans KR" }}
      color={color}
      variant={variant}
      size={matches ? "large" : "medium"}
      style={{ borderRadius: 50, marginLeft: 5, marginRight: 5 }}
    >
      {name}
    </Button>
  );
};

export const DownloadBtn = ({ color = "", variant = "", onClick, name,fullWidth="" }) => {
  return (
    <Button
      sx={{paddingRight:"12px", paddingLeft: "12px" , fontFamily: "Noto Sans KR" }}
      size="large"
      color={color}
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      style={{
        width:"50%",
        height: 60,
      }}
    >
      {name}
    </Button>
  );
};

export const DownloadLinkBtn = ({ color = "", variant = "", onClick, name,fullWidth="" }) => {
  return (
    <Button
      sx={{ fontFamily: "Noto Sans KR" }}
      size="large"
      color={color}
      variant={variant}
      onClick={onClick}
      fullWidth={fullWidth}
      style={{
        width:150,
        height: 60,
        marginRight:10
      }}
    >
      {name}
    </Button>
  );
};

export const Dot = ({ dotColor = "" }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      ml="3px"
      mr="3px"
      bgcolor={dotColor}
      sx={
        matches
          ? { width: "6px", height: "6px", borderRadius: "50%" }
          : { display: "none" }
      }
    ></Box>
  );
};

export default HeadMenuBtn;
