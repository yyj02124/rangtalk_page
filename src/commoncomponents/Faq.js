import {
  Box,
  Container,
  Divider,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import React from "react";

const FAQ = ({ FAQbgcolor = "", FAQnumber = "" }) => {
  return (
    <Box bgcolor={FAQbgcolor} position="relative" height={1080}>
      <Container>
        <Box
          mt={10}
          p={5}
          bgcolor="#fff"
          position="absolute"
          width="100%"
          maxWidth={1152}
          height={681}
        >
          <List>
            <ListItem>
              <Typography>
                01. 개별 서비스의 개인정보 제공 동의를 철회할 수 있는 방법이
                있나요?
              </Typography>
            </ListItem>
            <Divider></Divider>
            <ListItem>
              <Typography>abcsdfge</Typography>
            </ListItem>
            <ListItem>
              <Typography>abcsdfge</Typography>
            </ListItem>
            <ListItem>
              <Typography>abcsdfge</Typography>
            </ListItem>
          </List>
        </Box>
      </Container>
    </Box>
  );
};

export default FAQ;
