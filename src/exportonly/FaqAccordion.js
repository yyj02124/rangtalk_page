import {
  AccordionDetails,
  AccordionSummary,
  Box,
  styled,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import React, { useState } from "react";
import PropTypes from "prop-types";

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
  faqNumber,
  faqAccordionSummary,
  faqAccordionDetail,
  faqNumberColor,
  faqPlusImage,
  faqMinusImage,
}) => {
  const [open, setOpen] = useState(false);
  const toggleAccordion = () => {
    setOpen(!open);
  };
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Accordion onChange={toggleAccordion}>
      <AccordionSummary
        sx={{ paddingTop: 1, paddingBottom: 1 }}
        aria-controls="panel1d-content"
      >
        <Box
          component="img"
          mr={2}
          sx={
            matches
              ? { width: "24px", height: "24px", padding: "4px" }
              : { display: "none" }
          }
          alt="ic_faq1"
          src={
            //이미지 props를 넣고 아래 3항연산자를 옮겨준다.
            open !== true ? faqPlusImage : faqMinusImage
          }
        />
        <Typography
          fontFamily="Noto Sans KR"
          fontWeight="bold"
          color={faqNumberColor}
        >
          {faqNumber}.
        </Typography>
        <Typography fontFamily="Noto Sans KR" fontWeight="bold">
          {faqAccordionSummary}
        </Typography>
        <Box>
          <Box
            position="absolute"
            right="0%"
            p="4px"
            component="img"
            sx={
              matches
                ? { display: "none" }
                : {
                    display: "block",
                    width: "24px",
                    height: "24px",
                  }
            }
            alt="ic_faq1"
            src={
              //이미지 props를 넣고 아래 3항연산자를 옮겨준다.
              open !== true ? faqPlusImage : faqMinusImage
            }
          />
        </Box>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          ml={matches ? "32px" : 0}
          fontFamily="Noto Sans KR"
          color="#4a4a4a"
        >
          {faqAccordionDetail}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

FaqAccordion.propTypes = {
  faqNumber: PropTypes.string,
  faqAccordionSummary: PropTypes.string,
  faqAccordionDetail: PropTypes.array,
  faqNumberColor: PropTypes.string,
  faqPlusImage: PropTypes.string,
  faqMinusImage: PropTypes.string,
};

export default FaqAccordion;
