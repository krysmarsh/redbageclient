import React from "react";
import {
  Container,
  Grid,
  Box,
  Typography,
  Divider,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

const Footer = (props) => {
  return (
    <Container
      // maxWidth="false"
      sx={{
        height: 100,
        backgroundColor: "neutral.main",
        flex: "0 1 auto",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sx={{display: 'flex'}}>
          <Box>
            <Typography sx={{fontSize: '1.1em'}}>© 2021 iHeartEntertainment, LLC</Typography>
          </Box>
          <Box sx={{ml: 'auto'}}>
            <Stack
              direction="row-reverse"
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <Link className='router-link' to="/aboutus">About Us</Link>
              <Link className='router-link' to="/contactus">Contact Us</Link>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Footer;
