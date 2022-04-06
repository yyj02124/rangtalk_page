import { Box, Button, ThemeProvider } from "@mui/material";
import * as React from "react";
import theme from "../Colorcss";

const HeadMenuBtn = ({ color = "", variant = "", name }) => {
  // React.useEffect(() => {
  //   console.log("test ::: color ", color);
  //   console.log("test ::: variant ", variant);
  // }, [color, variant]);
  return (
    <ThemeProvider theme={theme}>
      <Button color={color} variant={variant}>
        {name}
      </Button>
    </ThemeProvider>
  );
};

export const HeadLinkBtn = ({ color = "", variant = "", name }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        color={color}
        variant={variant}
        style={{ borderRadius: 50, marginLeft: 10, marginRight: 10 }}
      >
        {name}
      </Button>
    </ThemeProvider>
  );
};

export const DownloadBtn = ({ color = "", variant = "", name }) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        size="large"
        color={color}
        variant={variant}
        style={{
          minWidth: 180,
          height: 60,
          marginRight: 10,
        }}
      >
        {name}
      </Button>
    </ThemeProvider>
  );
};

export const Dot = ({ dotcolor = "" }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        bgcolor={dotcolor}
        sx={{ width: "6px", height: "6px", borderRadius: "50%" }}
      ></Box>
    </ThemeProvider>
  );
};

export default HeadMenuBtn;
