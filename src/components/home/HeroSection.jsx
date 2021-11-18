import { Container, Box, Typography } from "@material-ui/core";
import bgImage from "../../assets/images/mediapic1.jpg";


const HeroSection = (props) => {
  return (
    <Container
      sx={{
        // backgroundImage: `url(${bgImage})`,
       
        // backgroundColor: "black",
      
      }}>
      {/* <Box
        component="img"
        sx={{
          width: 500,
          // maxwidth: { xs: 280, sm: 320, md: 400, lg: 500 },
        }}
     
      /> */}
      <Typography variant="h3"> iHeart Entertainment</Typography>
    </Container>
  );
};

export default HeroSection;
