import React, { useState, useEffect } from "react";
//import { useSession } from "../../context/sessionContext";
import { Grid, Typography } from "@material-ui/core";
import fetchMusicById from "../../requests/fetchMusicById";
import { useParams, Link } from "react-router-dom";
import MainContentContainer from "../common/MainContentContainer";
//import Timer from "../common/Timer";

const MusicDetails = () => {
  const [music, setMusic] = useState({});
  const { id } = useParams();
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [message, setMessage] = useState("");

  const { sessionToken } = useSession();

  useEffect(() => {
    (async () => {
      try {
        const { status, json } = await fetchMusicById(id, sessionToken);
        if (status === 200) {
          setMusic({ ...json.music });
          setMessage("");
          setError(false);
          setLoaded(true);
        }
        if (status === 403) {
          setMessage(json.message);
          setError(true);
        }
        if (status === 404) {
          setMessage(json.message);
          setError(true);
        }
      } catch (err) {
        setMessage(
          "Uh-oh something went wrong. Try refreshing to view this page"
        );
        setError(true);
      }
    })();
  }, [id, sessionToken]);

  return (
    <MainContentContainer noPadding>
      {error ? (
        <Grid container sx={{ textAlign: "center" }}>
          <Grid item xs={12} sx={{ pt: 5 }}>
            <Typography variant="h3">{message}</Typography>
          </Grid>
        </Grid>
      ) : (
        loaded && (
          <Grid
            container
            sx={{
              backgroundColor: "neutral.light",
              pb: 5,              
              display: "flex",
              flex: "1 1 auto",
            }}
          >
            <Grid
              item
              md={12}
              lg={5}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                py: 5,
                px: 3,
              }}
            >
              <img
                style={
                  loaded
                    ? { maxWidth: "100%", border: "2px solid black" }
                    : { display: "none" }
                }
                src={music.photoURL}
                alt="food"
                onLoad={() => setLoaded(true)}
              />
            </Grid>
            <Grid item md={12} lg={6} sx={{ color: "secondary.dark", px: 2 }}>
              <Typography variant="h1">{music.name}</Typography>

              <Typography>
                Created by:{" "}
                <Link className="router-link" to={`/users/${music.owner}`}>
                  {music.owner}
                </Link>
              </Typography>
              <br />
              <Typography>
                Category:{" "}
                <Link
                  className="router-link"
                  to={`/category/${music.category}`}
                >
                  {music.category}
                </Link>
              </Typography>
              <br />
              {/* <Typography>Cook Time: {music.cookTime} mins</Typography>
              <br /> */}
              <Typography>Servings: {music.servings}</Typography>
              <br />
              <Typography>Directions: {music.directions}</Typography>
              <br />
            </Grid>
            <Grid item xs={12} sx={{}}>
              {/* <Timer music={music} /> */}
            </Grid>
          </Grid>
        )
      )}
    </MainContentContainer>
  );
};

export default MusicDetails;
