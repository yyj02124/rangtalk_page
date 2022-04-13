import { Box, Button, useMediaQuery } from "@mui/material";
import * as React from "react";

const HeadMenuBtn = ({ color = "", variant = "", name, fullWidth = false }) => {
  // React.useEffect(() => {
  //   console.log("test ::: color ", color);
  //   console.log("test ::: variant ", variant);
  // }, [color, variant]);
  return (
    <Button color={color} variant={variant} fullWidth={fullWidth}>
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
      sx={{ height: 60 }}
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
      value={value}
      onClick={onClickBtn}
      id={id}
      color={btnColor}
      style={{ fontSize: "20px" }}
      variant={variant}
    >
      {name}
    </Button>
  );
};

export const HeadLinkBtn = ({ color = "", variant = "", name }) => {
  return (
    <Button
      color={color}
      variant={variant}
      size="large"
      style={{ borderRadius: 50, marginLeft: 10, marginRight: 10 }}
    >
      {name}
    </Button>
  );
};

export const DownloadBtn = ({ color = "", variant = "", onClick, name }) => {
  return (
    <Button
      size="large"
      color={color}
      variant={variant}
      onClick={onClick}
      style={{
        minWidth: 160,
        height: 60,
        marginRight: 10,
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
