import React from 'react';
//import { ThemeProvider } from '@material-ui/core/styles';
import {
    Container,
    Box,
    Typography,
    Grid,
    Paper,
    Avatar,
} from '@material-ui/core';
import { styled } from '@mui/material/styles';
import MainContentContainer from '../common/MainContentContainer';
import auImage from '../../assets/images/vinyl.jpg';

import Krystle from '../../assets/images/Krystle.jpg';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
  //  maxwidth: 'lg',
    maxHeight: '',
});

const AboutUs = () => {
    return (
        <MainContentContainer noPadding>
            <Container
               maxwidth="false"
                sx={{
                    minHeight: 400,
                    backgroundImage: `url(${auImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: '50% 20%',
                }}
            >
                <Box
                    sx={{
                        color: 'Purple',
                        fontFamily: "'Fredoka One', cursive;",
                        fontSize: 70,
                    }}
                >
                    iHeart Entertainment
                </Box>
                {/* <Typography variant="h3">Why iHeart Entertainment</Typography> */}
            </Container>
            <Container>
                <Box sx={{ flexGrow: 1, overflow: 'hidden', px: 3 }}>
                    <h1>You Make the Difference!</h1>
                    
                    <h2>Data:</h2>

                    <h3>
                        Join me in my love for all things entertainment. Add your favorite music, movies, and tv shows to your own personal libray.
                    </h3>
                    {/* <h2>Data</h2>
                    <p>
                       
                    {/* </p> */}

                    {/* <h2>Data</h2> */}

                    <h4>Thank you for being a part of the entertainment!</h4>
                    <Grid container spacing={4} wrap="nowrap">
                        <Grid item xs={6} md={4}>
                            <Item>

                            <Grid item xs={6} md={4}>
                            <Item>
                                <Img src={`${Krystle}`} alt="Krystle" />

                                <Avatar>KM</Avatar>
                                <p>Krystle M.</p>
                            </Item>
                        </Grid>
                                {/* <Img
                                    src="https://cdn.notonthehighstreet.com/system/product_images/images/002/357/630/original_inky-chicken-apron.jpg"
                                    alt="Josh"
                                />
                                <Avatar>JG</Avatar>

                                <p>A Microwaver</p>
                            </Item>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <Item>
                                <Img src={`${Paul}`} alt="Paul" />
                                <Avatar>PR</Avatar>

                                <p>A Griller</p>
                            </Item>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <Item>
                                <Img src={`${Krystle}`} alt="Krystle" />

                                <Avatar>KM</Avatar>
                                <p>A Foodie</p>
                            </Item>
                        </Grid>

                        <Grid item xs={6} md={4}>
                            <Item>
                                <Img src={`${Laura}`} alt="Laura" />
                                <Avatar>LS</Avatar>
                                <p>A Home Cook</p> */}
                            </Item>
                        </Grid>
                    </Grid>
                    <br />
                </Box>
            </Container>
        </MainContentContainer>
    );
};
export default AboutUs;
