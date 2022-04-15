import { Box, Container, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import "./youtube&scrollbar.css";
import FaqAccordion from "../exportonly/FaqAccordion";
import {
  RangTalkFAQ1,
  RangTalkFAQ2,
  RangTalkFAQ3,
  RangTalkFAQ4,
  RangTalkFAQ5,
  RangTalkFAQ6,
  RangTalkFAQ7,
  RangTalkFAQ8,
  RangTalkFAQ9,
  RangTalkFAQ10,
  RangTalkFAQ11,
  RangTalkFAQ12,
  RangTalkFAQ13,
  RangTalkFAQ14,
} from "../exportonly/RangFaqList";
import PropTypes from "prop-types";

const RangFAQ = ({ faqBgColor }) => {
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
          <FaqAccordion {...RangTalkFAQ1}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ2}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ3}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ4}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ5}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ6}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ7}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ8}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ9}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ10}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ11}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ12}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ13}></FaqAccordion>
          <FaqAccordion {...RangTalkFAQ14}></FaqAccordion>
        </Box>
      </Container>
    </Box>
  );
};

RangFAQ.propTypes = {
  faqBgColor: PropTypes.string,
};

export default RangFAQ;
