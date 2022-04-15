import { Container, Link } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const BtnTop = () => {
  return (
    <Container>
      <Box
        top="90%"
        sx={{
          position: "fixed",
          zIndex: 10,
          cursor: "pointer",
        }}
      >
        {/* <a href="/"> */}
        <Link href="#">
          <Box
            component="img"
            sx={{ width: 50, height: 50 }}
            alt="btn_top"
            src="./img/btn_top_n@2x.png"
          />
        </Link>
        {/* </a> */}
      </Box>
    </Container>
  );
};

export default BtnTop;
