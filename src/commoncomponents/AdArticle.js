import { Box, Container, createTheme, ThemeProvider } from "@mui/material";
import React from "react";
import styles from "./summaryarticle.css";

const theme = createTheme({
  palette: {
    ssamtalk: {
      main: "#71a5d9",
      contrastText: "#fff",
    },
    ssamtalklite: {
      main: "#e9eff6",
    },
    rangtalk: {
      main: "#5fc6be",
      contrastText: "#fff",
    },
  },
});

const YoutubeAdvertisementArticle = ({ bgcolor = "" }) => {
  return (
    <ThemeProvider theme={theme}>
      <Box bgcolor={bgcolor} position="relative" height={1080}>
        <Container>
          <Box mt={-1} position="relative" height={1080}>
            <iframe src="https://www.youtube.com/embed/K8qE0Ved5ZI" />
          </Box>
        </Container>
      </Box>
    </ThemeProvider>

    // <div className="video">
    //   <div className="video-container">
    //     <iframe src="https://youtu.be/K8qE0Ved5ZI"></iframe>
    //   </div>
    // </div>
  );
};

export default YoutubeAdvertisementArticle;
