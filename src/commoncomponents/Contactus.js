import {
  Box,
  Container,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { height } from "@mui/system";
import React from "react";
import HeadMenuBtn, { ContactUsBtn } from "../exportonly/Btn";

const ContactUs = ({ btnColor = "" }) => {
  const matches = useMediaQuery("(min-width:600px)");
  return (
    <div id="3">
      <Box position="relative" height={1080}>
        <Container>
          <Box mt="20%">
            <Typography>쌤이랑톡에 대해 더 궁금한점이 있으신가요?</Typography>
            <Box
              display="flex"
              justifyContent="space-between"
              alignContent="center"
            >
              <Box>
                <Typography fontSize={60}>CONTACT US</Typography>
              </Box>

              <Box
                {...(matches ? { display: "flex" } : { display: "none" })}
                sx={{ placeItems: "center" }}
              >
                <Box
                  component="img"
                  sx={{ width: 50, height: 51 }}
                  alt="ic_contact_service"
                  src="./img/ic_contact_service@2x.png"
                />
                <Box>
                  <Typography>아이랑톡 고객센터</Typography>
                  <Typography>010-0000-0000</Typography>
                </Box>
                <Box
                  width={12}
                  height={51}
                  mr={2}
                  sx={{ borderRight: "1px solid black" }}
                />
                <Box
                  component="img"
                  sx={{ width: 50, height: 51 }}
                  alt="ic_contact_service"
                  src="./img/ic_contact_service@2x.png"
                />
                <Box>
                  <Typography>쌤이랑톡 고객센터</Typography>
                  <Typography>010-0000-0000</Typography>
                </Box>

                <Box
                  width={12}
                  height={51}
                  mr={2}
                  sx={{ borderRight: "1px solid black" }}
                />

                <Box
                  component="img"
                  sx={{ width: 50, height: 51 }}
                  alt="ic_contact_service"
                  src="./img/ic_contact_service@2x.png"
                />
                <Box>
                  <Typography>학교랑톡 고객센터</Typography>
                  <Typography>010-0000-0000</Typography>
                </Box>
              </Box>
            </Box>
            <Box mt={3}>
              <TextField
                id="standard-search"
                label="성함"
                type="search"
                variant="standard"
                sx={
                  matches
                    ? { width: "46%", height: 52 }
                    : { width: "96%", height: 52 }
                }
              />
            </Box>
            <Box>
              <TextField
                id="standard-search"
                label="연락처"
                type="search"
                variant="standard"
                sx={
                  matches
                    ? { width: "46%", height: 52, marginRight: 8.5 }
                    : { width: "96%", height: 52 }
                }
              />
              <TextField
                id="standard-search"
                label="이메일"
                type="search"
                variant="standard"
                sx={
                  matches
                    ? { width: "46%", height: 52 }
                    : { width: "96%", height: 52 }
                }
              />
            </Box>
            <Box sx={{ marginTop: 3 }}>
              <TextField
                id="standard-search"
                multiline
                rows={10}
                label="내용"
                fullWidth
              />
            </Box>
            <Box display="flex" mt={2} mb={2}>
              <Box
                component="img"
                sx={{ width: 24, height: 24 }}
                alt="com_check_off"
                src="./img/com_check_off@2x.png"
              />
              <Typography>개인정보 정책에 동의 합니다.</Typography>
            </Box>
            <ContactUsBtn
              color={btnColor}
              variant="contained"
              name="접수하기"
              fullWidth={true}
            />
          </Box>
        </Container>
      </Box>
    </div>
  );
};

export default ContactUs;
