import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Grid,
  CardActionArea,
  Divider
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";
// import fetchMyMusic from "../../requests/fetchMyMusic";
// import deleteMyMusic from "../../requests/deleteMyMusic";
//import { useSession } from "../../context/sessionContext";
import MusicCardArea from "../common/MusicCardArea";
import MusicCardContainer from "../common/MusicCardContainer";
import MainContentContainer from "../common/MainContentContainer";
import { Link } from "react-router-dom";
// import MusicEdit from "../music/MusicEdit";
// import MusicCreate from "../music/MusicCreate";

const Profile = () => {
  const [music, setMusic] = useState([]);
 // const { sessionToken } = useSession();
  const [createIsOpen, setCreateIsOpen] = useState(false);
  const [editIsOpen, setEditIsOpen] = useState(false);
  const [musicToEdit, setMusicToEdit] = useState();

  const greeting = () => {
    const hours = new Date().getHours();
    return hours < 12
      ? "Good morning!"
      : hours >= 12 && hours <= 18
      ? "Good afternoon!"
      : "Good evening!";
  };

  // const handleDeleteClick = (music) => async (e) => {
  //   try {
  //     const { status } = await deleteMyMusic(music, sessionToken);
  //     if (status === 200) {
  //       setMusic(music.filter((el) => el.id !== music.id));
  //     } else {
  //     }
  //   } catch (err) {}
  // };
  // const handleAddClick = (e) => {
  //   setCreateIsOpen(true);
  // };
  // const handleEditClick = (music) => (e) => {
  //   setMusicToEdit({ ...music });
  //   setEditIsOpen(true);
  // };
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { status, json } = await fetchMyMusic(sessionToken);
  //       if (status === 200) {
  //         setMusic(json);
  //       }
  //     } catch (err) {}
  //   })();
  // }, [sessionToken]);
  return (
    <MainContentContainer>
      <Typography variant="h2" color="textPrimary" sx={{ mt: 5 }}>
        {greeting()} What are we interacting with today?{" "}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", pb: 2  }}>
        <Button variant="contained" color="secondary" 
        // onClick={handleAddClick}
        >
          Add A Music
        </Button>
        {/* <MusicCreate open={createIsOpen} setOpen={setCreateIsOpen} /> */}
      </Box>
      <Divider flexItem />
      <Typography
        variant="h3"
        color="secondary.dark"
        align="center"
        sx={{ pt: 2 }}
      >
        Your Music:
      </Typography>
      <MusicCardArea>
        {music.map((music) => (
          <MusicCardContainer key={music.id}>
            <Card sx={{ width: 350, height: 300 }}>
              <Link className="router-card" to={`music/${music.id}`}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="150"
                    image={music.photoURL}
                    alt={music.name}
                  />
                  <CardContent>
                    <Typography variant="h6" noWrap>
                      {music.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Link>
              <CardContent>
                <Grid container>
                  <Grid
                    item
                    xs={3}
                    container
                    sx={{
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VisibilityIcon />
                    <Typography variant="h6">&nbsp;{music.views}</Typography>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={9}
                    sx={{ justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={handleEditClick(music)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="contained"
                      color="secondary"
                      // onClick={handleDeleteClick(music)}
                    >
                      Delete
                    </Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </MusicCardContainer>
        ))}
      </MusicCardArea>
      {/* {musicToEdit && (
        <MusicEdit
          open={editIsOpen}
          setOpen={setEditIsOpen}
          music={musicToEdit}
        />
      )} */}
    </MainContentContainer>
  );
};

export default Profile;
