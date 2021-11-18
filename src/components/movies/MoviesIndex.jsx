// import {
//     Typography,
//     Button,
//     Container,
//     Divider,
//   } from "@material-ui/core";
//   import React, { useState, useEffect, useRef } from "react";
//   import { useSession } from "../../context/sessionContext";
//   import fetchPublicmovies from "../../requests/fetchPublicmovies";
//   import MainContentContainer from "../common/MainContentContainer";
//   import moviesCardArea from "../common/moviesCardArea";
//   import moviesCardContainer from "../common/moviesCardContainer";
//   import moviesCard from "../common/moviesCard";
//   import moviesCreate from "./moviesCreate";
  
//   const moviesIndex = (props) => {
//     const [movies, setmovies] = useState([]);
//     const [error, setError] = useState(false);
//     const [message, setMessage] = useState("");
//     const [open, setOpen] = useState(false);
//     const { sessionToken } = useSession();
  
//     const greeting = () => {
//       const hours = new Date().getHours();
//       return hours < 12
//         ? "Good morning!"
//         : hours >= 12 && hours <= 18
//         ? "Good afternoon!"
//         : "Good evening!";
//     };
  
//     useEffect(() => {
//       let mounted = true;
//       (async () => {
//         try {
//           const { status, json } = await fetchPublicmovies(sessionToken);
//           if (status === 200) {
//             if (mounted) {
//               setmovies(json);
//               setMessage("");
//               setError(false);
//             }
//           } else if (status === 403) {
//             if (mounted) return;
//             setMessage(json.message);
//             setError(true);
//           }
//           if (status === 404) {
//             if (mounted) {
//               setMessage(json.message);
//               setError(true);
//             }
//           }
//         } catch (err) {
//           if (mounted) {
//             setMessage(
//               "Uh-oh something on our end went wrong. Try refreshing to view this page"
//             );
//             setError(true);
//           }
//         }
//       })();
//       return () => (mounted = false);
//     }, [sessionToken]);
  
//     return (
//       <>
//         <MainContentContainer>
//           <Container className="homeMain" sx={{ pb: 2 }}>
//             <Typography variant="h2" color="textPrimary" sx={{ mt: 5 }}>
//               {greeting()} Welcome?{" "}
//             </Typography>
//             <Button
//               type="submit"
//               color="secondary"
//               variant="contained"
//               onClick={() => setOpen(true)}
//             >
//               Add movies
//             </Button>
//             <moviesCreate open={open} setOpen={setOpen} />
//           </Container>
//           <Divider flexItem />
//           <moviesCardArea>
//             {movies.map((movies) => (
//               <moviesCardContainer key={movies.id}>
//                 <moviesCard movies={movies} />
//               </moviesCardContainer>
//             ))}
//           </moviesCardArea>        
//         </MainContentContainer>
//       </>
//     );
//   };
  
//   export default moviesIndex;
  
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import fetchPublicmovies from '../../requests/fetchPublicmovies';
import APIURL from '../../helpers/environment';
import MoviesCreate from './MoviesCreate';
//import { AuthContext } from '../../auth/AuthContext';
import MoviesTable from './MoviesTable';
import MoviesEdit from './MoviesEdit';


class MoviesIndex extends Component {

constructor(props) {
  super(props)
  this.state = {
    movies: [],
    updatePressed: false,
    moviesToUpdate: {}
  }
}

componentWillMount() {
  this.fetchMyMovies()
}

fetchMymovies = () => {
   fetch(`${APIURL}/movies/get`, {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.props.token
      })
  })
  .then((res) => res.json())
  .then((moviesData) => {
    return this.setState({ movies: moviesData})
  })
}

deleteMymovies = (event) => {
  fetch(`${APIURL}/movies/${event.target.id}`, {
    method: 'DELETE',
    body: JSON.stringify({movies: {id: event.target.id } }),
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
    })
})
    .then((res) =>  this.fetchMyMovies())
}

updateMyMovies = (event, movies) => {
  fetch(`${APIURL}/movies/${movies.id}`, {
    method: 'PUT',
        body: JSON.stringify({
            movies: movies
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    })
    .then ((res) => {
      this.setState({ updatePressed: false})
      this.fetchMyMovies();
    })
  }

setUpdatedMovies = (event, movies) => {
  this.setState ({
    moviesToUpdate: movies,
    updatePressed: true
  })
}


componentDidMount() {
  this.fetchMyMovies()
}

render () {
  const movies = this.state.movies.length >=1 ?
  <MoviesTable movies={this.state.movies}
  delete={this.moviesDelete} update={this.setUpdatedMovies} /> : <h2>Your media</h2>
  return (
    <Container>
      <Row>
        <Col md="3">
          <MoviesCreate token={this.props.token} updateMoviesArray={this.fetchMyMovies} />
        </Col>
        <Col md="9">
          {movies}
          </Col>
          </Row>
         <Col md="12">
           {
             this.state.updatePressed ? <MoviesEdit t={this.state.updatePressed} update={this.moviesUpdate} movies={this.state.moviesToUpdate} />
           : <div></div>
            }
        </Col>
     
    </Container>
  )
}
}

export default MoviesIndex;