import { useState } from "react";

import { Box, Button, Typography, styled } from "@mui/material";
import { ShoppingCart } from "@mui/icons-material";

//components
import LoginDialog from "../login/LoginDialog";

const Wrapper = styled(Box)`
  display: flex;
  margin: 0 3% 0 auto;
  & > button, & > p, & > div {
    margin-right: 30px;
    font-size: 16px;
    align-items: center;
  }
`;

const Container = styled(Box)`
  display: flex;
`;

const LoginButton = styled(Button)`
  color: black;
  background: #fff;
  text-transform: none;
  padding: 5px 40px;
  border-radius: 2px;
  box-shadow: none;
  font-weight: 600;
  height: 32px;
`;

const CustomButtons = () => {

  // to open the login dialog on click
  const [open, setOpen] = useState(false);
  const openDialog = () =>{
    setOpen(true);
  }

  return (
    <Wrapper>
      <LoginButton variant="contained"  onClick={()=>openDialog()}>Login</LoginButton>
      <Typography style={{ marginTop: 3, width: 135 }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 3 }}>More</Typography>

      <Container>
        <ShoppingCart />
        <Typography>Cart</Typography>
      </Container>
      <LoginDialog open={open} setOpen={setOpen}/>
    </Wrapper>
  );
};

export default CustomButtons;
