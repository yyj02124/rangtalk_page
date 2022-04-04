import { AppBar, Box, Button, Container, styled } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { Link } from "react-router-dom";
import { StyledAppBar } from "../commoncomponents/Css";

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "#fff",
//   color: "#000",
// }));

const SsamtalkFixedHeaderMenu = () => {
  return (
    <div>
      <StyledAppBar
        elevation={1}
        // sx={{ backgroundColor: "#fff" }}
      >
        <Container>
          <Box
            p={1}
            mt={1}
            backgroundColor="#efefef"
            display="flex"
            justifyContent="space-between"
          >
            <img alt="img_fulllogo_big@2x" src="img/img_fulllogo_big@2x.png" />
            <div>
              <ScrollLink to="1" spy={true} smooth={true}>
                <span>Fixedmenubar1 </span>
              </ScrollLink>
              <span>Fixedmenubar2 </span>
              <span>Fixedmenubar3 </span>
              <span>Fixedmenubar4 </span>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="contained" /*fullWidth*/>Login</Button>
              </Link>
            </div>
          </Box>

          <Box
            p={2}
            mt={1}
            backgroundColor="#efefef"
            display="flex"
            justifyContent="center"
          >
            <span> 아이랑톡 </span>
            <Link to="/ssamtalk" style={{ textDecoration: "none" }}>
              <span> 쌤이랑톡 </span>
            </Link>
            <Link to="/rangtalk" style={{ textDecoration: "none" }}>
              <span> 학교랑톡 </span>
            </Link>
          </Box>
        </Container>
      </StyledAppBar>
    </div>
  );
};

export default SsamtalkFixedHeaderMenu;
