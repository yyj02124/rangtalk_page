import { Box, Container } from "@mui/material";
import React from "react";
import "./youtube&scrollbar.css";

const YoutubeAdvertisementArticle = ({ bgcolor = "" }) => {
  return (
    <Box bgcolor={bgcolor} position="relative" height={1080}>
      <Container>
        <Box mt={-1} position="relative" height={1080}>
          <iframe src="https://www.youtube.com/embed/K8qE0Ved5ZI" />
        </Box>
      </Container>
    </Box>

    // <div className="video">
    //   <div className="video-container">
    //     <iframe src="https://youtu.be/K8qE0Ved5ZI"></iframe>
    //   </div>
    // </div>
  );
};

export default YoutubeAdvertisementArticle;
