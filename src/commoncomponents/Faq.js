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

const FAQ = ({ FAQbgcolor = "", FAQnumber = "" }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen((open) => !open);
  };

  return (
    <Box bgcolor={FAQbgcolor} position="relative" height={1080}>
      <Container>
        <Typography>랑톡의 FAQ</Typography>
        <Typography>자주묻는 질문</Typography>
        <Box
          className="FaqBox"
          mt={10}
          p={5}
          bgcolor="#fff"
          position="absolute"
          width="100%"
          maxWidth={1152}
          height={681}
        >
          <Accordion>
            <AccordionSummary aria-controls="panel1d-content">
              <Box
                component="img"
                mr={2}
                sx={{ width: "20px", height: "20px" }}
                alt="ic_faq"
                src="./img/ic_faq_list_n@2x.png"
              />
              <Typography>
                01. 개별 서비스의 개인정보 제공 동의를 철회할 수 있는 방법이
                있나요?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                랑톡팀은 고객님의 권리를 최대한 보장하기 위해 개별 서비스에 대한
                개인정보 동의 철회 방법을 제공하고 있습니다.
              </Typography>
              <Typography>
                아래 안내에 따라 개별 서비스의 동의를 철회하실 수 있으며, 특정
                서비스에서의 수집ㆍ이용 동의를 철회하는 경우 해당 서비스의
                이용은 불가능하지만 다른 서비스의 이용에는 문제가 없습니다. 토스
                앱 하단의 “전체” - “설정” - “약관 및 개인정보 처리 동의” 를
                선택합니다. 동의를 철회하고 싶은 서비스를 선택합니다. (‘필수
                동의’는 철회가 불가합니다.) 선택된 토스 개별 서비스에 대한 개별
                약관 및 개인정보 제공 동의 를 “동의 철회하기” 로 철회합니다.
                동의 철회 시 본 서비스와 관련된 모든 정보가 삭제되며, 복구할 수
                없습니다. (단, 관련 법령에 따라 보존할 필요가 있는 경우는 해당
                보존기간동안 보관합니다.)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel1d-content">
              <Box
                component="img"
                mr={2}
                sx={{ width: "20px", height: "20px" }}
                alt="ic_faq"
                src="./img/ic_faq_list_n@2x.png"
              />
              <Typography>
                01. 개별 서비스의 개인정보 제공 동의를 철회할 수 있는 방법이
                있나요?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                랑톡팀은 고객님의 권리를 최대한 보장하기 위해 개별 서비스에 대한
                개인정보 동의 철회 방법을 제공하고 있습니다.
              </Typography>
              <Typography>
                아래 안내에 따라 개별 서비스의 동의를 철회하실 수 있으며, 특정
                서비스에서의 수집ㆍ이용 동의를 철회하는 경우 해당 서비스의
                이용은 불가능하지만 다른 서비스의 이용에는 문제가 없습니다. 토스
                앱 하단의 “전체” - “설정” - “약관 및 개인정보 처리 동의” 를
                선택합니다. 동의를 철회하고 싶은 서비스를 선택합니다. (‘필수
                동의’는 철회가 불가합니다.) 선택된 토스 개별 서비스에 대한 개별
                약관 및 개인정보 제공 동의 를 “동의 철회하기” 로 철회합니다.
                동의 철회 시 본 서비스와 관련된 모든 정보가 삭제되며, 복구할 수
                없습니다. (단, 관련 법령에 따라 보존할 필요가 있는 경우는 해당
                보존기간동안 보관합니다.)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel1d-content">
              <Box
                component="img"
                mr={2}
                sx={{ width: "20px", height: "20px" }}
                alt="ic_faq"
                src="./img/ic_faq_list_n@2x.png"
              />
              <Typography>
                01. 개별 서비스의 개인정보 제공 동의를 철회할 수 있는 방법이
                있나요?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                랑톡팀은 고객님의 권리를 최대한 보장하기 위해 개별 서비스에 대한
                개인정보 동의 철회 방법을 제공하고 있습니다.
              </Typography>
              <Typography>
                아래 안내에 따라 개별 서비스의 동의를 철회하실 수 있으며, 특정
                서비스에서의 수집ㆍ이용 동의를 철회하는 경우 해당 서비스의
                이용은 불가능하지만 다른 서비스의 이용에는 문제가 없습니다. 토스
                앱 하단의 “전체” - “설정” - “약관 및 개인정보 처리 동의” 를
                선택합니다. 동의를 철회하고 싶은 서비스를 선택합니다. (‘필수
                동의’는 철회가 불가합니다.) 선택된 토스 개별 서비스에 대한 개별
                약관 및 개인정보 제공 동의 를 “동의 철회하기” 로 철회합니다.
                동의 철회 시 본 서비스와 관련된 모든 정보가 삭제되며, 복구할 수
                없습니다. (단, 관련 법령에 따라 보존할 필요가 있는 경우는 해당
                보존기간동안 보관합니다.)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel1d-content">
              <Box
                component="img"
                mr={2}
                sx={{ width: "20px", height: "20px" }}
                alt="ic_faq"
                src="./img/ic_faq_list_n@2x.png"
              />
              <Typography>
                01. 개별 서비스의 개인정보 제공 동의를 철회할 수 있는 방법이
                있나요?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                랑톡팀은 고객님의 권리를 최대한 보장하기 위해 개별 서비스에 대한
                개인정보 동의 철회 방법을 제공하고 있습니다.
              </Typography>
              <Typography>
                아래 안내에 따라 개별 서비스의 동의를 철회하실 수 있으며, 특정
                서비스에서의 수집ㆍ이용 동의를 철회하는 경우 해당 서비스의
                이용은 불가능하지만 다른 서비스의 이용에는 문제가 없습니다. 토스
                앱 하단의 “전체” - “설정” - “약관 및 개인정보 처리 동의” 를
                선택합니다. 동의를 철회하고 싶은 서비스를 선택합니다. (‘필수
                동의’는 철회가 불가합니다.) 선택된 토스 개별 서비스에 대한 개별
                약관 및 개인정보 제공 동의 를 “동의 철회하기” 로 철회합니다.
                동의 철회 시 본 서비스와 관련된 모든 정보가 삭제되며, 복구할 수
                없습니다. (단, 관련 법령에 따라 보존할 필요가 있는 경우는 해당
                보존기간동안 보관합니다.)
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary aria-controls="panel1d-content">
              <Box
                component="img"
                mr={2}
                sx={{ width: "20px", height: "20px" }}
                alt="ic_faq"
                src="./img/ic_faq_list_n@2x.png"
              />
              <Typography>
                01. 개별 서비스의 개인정보 제공 동의를 철회할 수 있는 방법이
                있나요?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                랑톡팀은 고객님의 권리를 최대한 보장하기 위해 개별 서비스에 대한
                개인정보 동의 철회 방법을 제공하고 있습니다.
              </Typography>
              <Typography>
                아래 안내에 따라 개별 서비스의 동의를 철회하실 수 있으며, 특정
                서비스에서의 수집ㆍ이용 동의를 철회하는 경우 해당 서비스의
                이용은 불가능하지만 다른 서비스의 이용에는 문제가 없습니다. 토스
                앱 하단의 “전체” - “설정” - “약관 및 개인정보 처리 동의” 를
                선택합니다. 동의를 철회하고 싶은 서비스를 선택합니다. (‘필수
                동의’는 철회가 불가합니다.) 선택된 토스 개별 서비스에 대한 개별
                약관 및 개인정보 제공 동의 를 “동의 철회하기” 로 철회합니다.
                동의 철회 시 본 서비스와 관련된 모든 정보가 삭제되며, 복구할 수
                없습니다. (단, 관련 법령에 따라 보존할 필요가 있는 경우는 해당
                보존기간동안 보관합니다.)
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
