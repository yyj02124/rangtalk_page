import {
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import React, { useState } from "react";

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,
  "&:first-of-type": {
    borderTop: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const FaqAccordion = ({
  faqNumber = "",
  faqAccordionSummary = "",
  faqAccordionDetail = "",
}) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!open);
  };
  return (
    <Accordion onChange={toggleAccordion}>
      <AccordionSummary aria-controls="panel1d-content">
        <Box
          component="img"
          mr={2}
          sx={{ width: "20px", height: "20px" }}
          alt="ic_faq1"
          src={
            //이미지 props를 넣고 아래 3항연산자를 옮겨준다.
            open !== true
              ? "./img/ic_faq_list_n@2x.png"
              : "./img/ic_faq_list_s@2x.png"
          }
        />
        <Typography>
          {faqNumber}. {faqAccordionSummary}
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>{faqAccordionDetail}</Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default FaqAccordion;
