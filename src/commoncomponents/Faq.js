import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./youtube&scrollbar.css";
import FaqAccordion from "../exportonly/FaqAccordion";
import {
  FAQ1,
  FAQ2,
  FAQ3,
  FAQ4,
  FAQ5,
  FAQ6,
  FAQ7,
  FAQ8,
  FAQ9,
  FAQ10,
  FAQ11,
  FAQ12,
  FAQ13,
  FAQ14,
} from "../exportonly/SsamFaqList";
import PropTypes from "prop-types";

const FAQ = ({ faqBgColor }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box
      bgcolor={faqBgColor}
      position="relative"
      height={matches ? 1080 : 960}
      pt={matches ? 15 : 9}
    >
      <Container>
        <div id="2">
          <Typography fontFamily="Noto Sans KR">랑톡의 FAQ</Typography>
        </div>

        <Typography fontFamily="Noto Sans KR" fontSize="56px">
          자주묻는 질문
        </Typography>
        <Box
          className="FaqBox"
          mt={3}
          p={matches ? 5 : 1}
          bgcolor="#fff"
          height={681}
        >
          {/* map이나 포문 돌리기 */}
          <FaqAccordion {...FAQ1}></FaqAccordion>
          <FaqAccordion {...FAQ2}></FaqAccordion>
          <FaqAccordion {...FAQ3}></FaqAccordion>
          <FaqAccordion {...FAQ4}></FaqAccordion>
          <FaqAccordion {...FAQ5}></FaqAccordion>
          <FaqAccordion {...FAQ6}></FaqAccordion>
          <FaqAccordion {...FAQ7}></FaqAccordion>
          <FaqAccordion {...FAQ8}></FaqAccordion>
          <FaqAccordion {...FAQ9}></FaqAccordion>
          <FaqAccordion {...FAQ10}></FaqAccordion>
          <FaqAccordion {...FAQ11}></FaqAccordion>
          <FaqAccordion {...FAQ12}></FaqAccordion>
          <FaqAccordion {...FAQ13}></FaqAccordion>
          <FaqAccordion {...FAQ14}></FaqAccordion>
        </Box>
      </Container>
    </Box>
  );
};

FAQ.propTypes = {
  faqBgColor: PropTypes.string,
};

export default FAQ;
