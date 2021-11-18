import * as React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Container,
  Grid,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const MusicCards = (props) => {
  return (
    <Container maxWidth="false" sx={{ mt: 10 }}>
      <Grid container spacing={4}>
        {props.music?.map((music) => {
          return (
            <Grid key={music.id} item xs={12} lg={3} sm={6} sx={{ mb: 4 }}>
              <Card>
                <CardActionArea>
                  <Link to={`/music/${music.id}`}>
                    <CardMedia
                      component="img"
                      height="140"
                      image={music.photoURL}
                      alt={music.name}
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        noWrap
                      >
                        {recipe.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {music.category}
                      </Typography>
                    </CardContent>
                  </Link>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default MusicCards;
