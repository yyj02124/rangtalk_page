import { Box, Container, Divider } from "@mui/material";
import React from "react";
import { Link as ScrollLink } from "react-scroll/modules";
import { Link } from "react-router-dom";
import { StyledAppBar } from "../exportonly/Css";
import HeadMenuBtn, { HeadLinkBtn } from "../exportonly/Btn";
import useMediaQuery from "@mui/material/useMediaQuery";
import PropTypes from "prop-types";

// const StyledAppBar = styled(AppBar)(({ theme }) => ({
//   backgroundColor: "#fff",
//   color: "#000",
// }));

const FixedHeaderMenu = ({
  refresh,
  fullLogoImg,
  loginColor,
  irangLinkBtnColor,
  ssamLinkBtnColor,
  rangLinkBtnColor,
}) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <Box>
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
              <a href={refresh}>
                <Box
                  component="img"
                  sx={{
                    height: "22px",
                    width: "106px",
                    marginTop: "7px",
                  }}
                  alt="img_fulllogo_big@2x"
                  src={fullLogoImg}
                />
              </a>
            </Box>

            <Box sx={matches ? { display: "null" } : { display: "none" }}>
              <ScrollLink to="1" spy={true} smooth={true}>
                <HeadMenuBtn name="랑톡소개" />
              </ScrollLink>
              <ScrollLink to="2" spy={true} smooth={true}>
                <HeadMenuBtn name="FAQ" />
              </ScrollLink>
              <ScrollLink to="3" spy={true} smooth={true}>
                <HeadMenuBtn name="문의접수" />
              </ScrollLink>
              <ScrollLink to="4" spy={true} smooth={true}>
                <HeadMenuBtn name="다운로드" />
              </ScrollLink>
              <Link to="/login" style={{ textDecoration: "none" }}>
                <HeadMenuBtn
                  color={loginColor}
                  variant="contained"
                  name="로그인"
                />
              </Link>
            </Box>
          </Box>
        </Container>

        <Divider></Divider>

        <Container>
          <Box mt={2.5} display="flex" justifyContent="center">
            <HeadLinkBtn
              color={irangLinkBtnColor}
              variant="contained"
              name="아이랑톡"
            />
            <Link to="/ssamtalk" style={{ textDecoration: "none" }}>
              <HeadLinkBtn
                color={ssamLinkBtnColor}
                variant="contained"
                name="쌤이랑톡"
              />
            </Link>
            <Link to="/rangtalk" style={{ textDecoration: "none" }}>
              <HeadLinkBtn
                color={rangLinkBtnColor}
                variant="contained"
                name="학교랑톡"
              />
            </Link>
          </Box>
        </Container>
      </StyledAppBar>
    </Box>
  );
};

FixedHeaderMenu.propTypes = {
  btnColor: PropTypes.string,
  refresh: PropTypes.string,
  fullLogoImg: PropTypes.string,
  loginColor: PropTypes.string,
  irangLinkBtnColor: PropTypes.string,
  ssamLinkBtnColor: PropTypes.string,
  rangLinkBtnColor: PropTypes.string,
};

export default FixedHeaderMenu;
