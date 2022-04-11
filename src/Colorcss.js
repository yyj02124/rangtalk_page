import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    white: {
      main: "#fff",
      contrastText: "#000",
    },
    black: {
      main: "#000",
      contrastText: "#fff",
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
      light: "rgba(74,124,183,0.12)",
      main: "#4a7cb7",
    },
    ssamtalkdetail: {
      main: "rgba(243,245,248,0.19)",
    },
    ssamtalkhighlight: {
      main: "rgba(113,193,217,0.2)",
    },
    rangtalk: {
      main: "#5fc6be",
      contrastText: "#fff",
    },
    FAQbgcolor: {
      main: "#e1e7ea",
    },
    apidownbgcolor: {
      main: "#f2f2f2",
    },
  },
});

export default theme;
