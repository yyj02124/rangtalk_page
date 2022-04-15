import { Box, Container, useMediaQuery } from "@mui/material";
import React from "react";
import "./youtube&scrollbar.css";

import PropTypes from "prop-types";

const YoutubeAdvertisementArticle = ({ bgColor }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box bgcolor={bgColor} position="relative" height={matches ? 1080 : 300}>
      <Container>
        <Box mt={-1} position="relative" height={matches ? 1080 : 300}>
          <iframe
            title="rangtalkAd"
            style={{ top: matches ? "15%" : "0%" }}
            src="https://www.youtube.com/embed/K8qE0Ved5ZI"
          />
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

YoutubeAdvertisementArticle.propTypes = {
  bgColor: PropTypes.string,
};

export default YoutubeAdvertisementArticle;
