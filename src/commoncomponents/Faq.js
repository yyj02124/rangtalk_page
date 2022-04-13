import {
  AccordionDetails,
  AccordionSummary,
  Box,
  Container,
  styled,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import "./youtube&scrollbar.css";
import MuiAccordion from "@mui/material/Accordion";
import FaqAccordion from "../exportonly/FaqAccordion";
import { FIRST_FAQ } from "../exportonly/Article";

const FAQ = ({ faqBgColor = "" }) => {
  return (
    <Box bgcolor={faqBgColor} position="relative" height={1080}>
      <Container>
        <div id="2">
          <Typography>랑톡의 FAQ</Typography>
        </div>

        <Typography>자주묻는 질문</Typography>
        <Box className="FaqBox" mt={10} p={5} bgcolor="#fff" height={681}>
          <FaqAccordion {...FIRST_FAQ}></FaqAccordion>
          <FaqAccordion {...FIRST_FAQ}></FaqAccordion>
          <FaqAccordion {...FIRST_FAQ}></FaqAccordion>
          <FaqAccordion {...FIRST_FAQ}></FaqAccordion>
          <FaqAccordion {...FIRST_FAQ}></FaqAccordion>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
