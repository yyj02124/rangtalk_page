import { AppBar, Box, Button, Container, styled } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { Link } from "react-router-dom";
import { StyledAppBar } from "../commoncomponents/Css";
import HeadMenuBtn, { HeadLinkBtn } from "../commoncomponents/Btnexport";

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
            height={40}
            p={1}
            mt={1}
            display="flex"
            justifyContent="space-between"
          >
            <img alt="img_fulllogo_big@2x" src="img/img_fulllogo_big@2x.png" />
            <div>
              <ScrollLink to="1" spy={true} smooth={true}>
                <HeadMenuBtn name="랑톡소개" />
              </ScrollLink>
              <HeadMenuBtn name="FAQ" />
              <HeadMenuBtn name="다운로드" />
              <HeadMenuBtn name="문의접수" />
              <Link to="/login" style={{ textDecoration: "none" }}>
                <HeadMenuBtn
                  color="ssamtalk"
                  variant="contained"
                  name="로그인"
                />
              </Link>
            </div>
          </Box>

          <Box p={1} mt={1} mb={1} display="flex" justifyContent="center">
            <HeadLinkBtn
              color="irangtalk"
              variant="contained"
              name="아이랑톡"
            />
            <Link to="/ssamtalk" style={{ textDecoration: "none" }}>
              <HeadLinkBtn
                color="ssamtalk"
                variant="contained"
                name="쌤이랑톡"
              />
            </Link>
            <Link to="/rangtalk" style={{ textDecoration: "none" }}>
              <HeadLinkBtn
                color="rangtalk"
                variant="contained"
                name="학교랑톡"
              />
            </Link>
          </Box>
        </Container>
      </StyledAppBar>
    </div>
  );
};

export default SsamtalkFixedHeaderMenu;
