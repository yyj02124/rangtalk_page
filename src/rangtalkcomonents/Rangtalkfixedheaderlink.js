import { AppBar, Box, Button, Container, styled } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { Link } from "react-router-dom";
import { StyledAppBar } from "../commoncomponents/Css";

const RangtalkFixedHeaderLink = () => {
  return (
    <div>
      <StyledAppBar
        elevation={1}
        // sx={{ backgroundColor: "#fff" }}
      >
        <Container>
          <Box
            p={2}
            m={(0, 1)}
            backgroundColor="#efefef"
            display="flex"
            justifyContent="center"
          >
            <div>
              <img
                alt="img_fulllogo_big@2x"
                src="img/img_fulllogo_big@2x.png"
              />

              <ScrollLink to="1" spy={true} smooth={true}>
                <span>Fixedheadermenubar1 </span>
              </ScrollLink>
              <span>Fixedheadermenubar2 </span>
              <span>Fixedheadermenubar3 </span>
              <span>Fixedheadermenubar4 </span>
              <Link to="/login">
                <Button variant="contained" /*fullWidth*/>Login</Button>
              </Link>
            </div>
          </Box>

          <Box
            p={2}
            m={1}
            backgroundColor="#efefef"
            display="flex"
            justifyContent="center"
          >
            <span> 아이랑톡 </span>
            <Link to="/ssamtalk">
              <span> 쌤이랑톡 </span>
            </Link>
            <Link to="/rangtalk">
              <span> 학교랑톡 </span>
            </Link>
          </Box>
        </Container>
      </StyledAppBar>
    </div>
  );
};

export default RangtalkFixedHeaderLink;
