import { Button, createTheme, ThemeProvider } from "@mui/material";
import * as React from "react";

const theme = createTheme({
  palette: {
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    black: {
      main: "#000",
    },
    irangtalk: {
      main: "#a87cff",
      contrastText: "#fff",
    },
    ssamtalk: {
      main: "#71a5d9",
      contrastText: "#fff",
    },
    ssamtalklite: {
      main: "#4a7cb7",
    },
    rangtalk: {
      main: "#5fc6be",
      contrastText: "#fff",
    },
  },
});

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

export default HeadMenuBtn;
