import { AppBar, Box, Button, Container, Divider, styled } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { Link } from "react-router-dom";
import { StyledAppBar } from "../exportonly/Css";
import HeadMenuBtn, { HeadLinkBtn } from "../exportonly/Btn";

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "#fff",
//   color: "#000",
// }));

const SsamtalkFixedHeaderMenu = ({
  FulllogoImg = "",
  LoginColor = "",
  IrangLinkBtnColor = "",
  SsamLinkBtnColor = "",
  RangLinkBtnColor = "",
}) => {
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
            mt={0.5}
            mb={2}
            display="flex"
            justifyContent="space-between"
          >
            <Box>
              <img
                style={{
                  height: "22px",
                  width: "106px",
                  marginTop: "7px",
                }}
                alt="img_fulllogo_big@2x"
                src={FulllogoImg}
              />
            </Box>
            <div>
              <ScrollLink to="1" spy={true} smooth={true}>
                <HeadMenuBtn name="랑톡소개" />
              </ScrollLink>
              <HeadMenuBtn name="FAQ" />
              <HeadMenuBtn name="다운로드" />
              <HeadMenuBtn name="문의접수" />
              <Link to="/login" style={{ textDecoration: "none" }}>
                <HeadMenuBtn
                  color={LoginColor}
                  variant="contained"
                  name="로그인"
                />
              </Link>
            </div>
          </Box>
        </Container>

        <Divider></Divider>

        <Container>
          <Box mt={1} display="flex" justifyContent="center">
            <HeadLinkBtn
              color={IrangLinkBtnColor}
              variant="contained"
              name="아이랑톡"
            />
            <Link to="/ssamtalk" style={{ textDecoration: "none" }}>
              <HeadLinkBtn
                color={SsamLinkBtnColor}
                variant="contained"
                name="쌤이랑톡"
              />
            </Link>
            <Link to="/rangtalk" style={{ textDecoration: "none" }}>
              <HeadLinkBtn
                color={RangLinkBtnColor}
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
