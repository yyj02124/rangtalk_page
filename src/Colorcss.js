import { createTheme } from "@mui/material";
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
      light: "#e9eff6",
      main: "#4a7cb7",
    },
    ssamtalkdetail: {
      main: "#f3f5f8",
    },
    ssamtalkhighlight: {
      main: "#e1f2f7",
    },
    rangtalk: {
      main: "#5fc6be",
      contrastText: "#fff",
    },
    FAQbgcolor: {
      main: "#e1e7ea",
    },

    tonalOffset: 0.2,
  },
});

export default theme;
