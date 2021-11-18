// import {
//     Typography,
//     Button,
//     Container,
//     Divider,
//   } from "@material-ui/core";
//   import React, { useState, useEffect, useRef } from "react";
//   import { useSession } from "../../context/sessionContext";
//   import fetchPublicMusic from "../../requests/fetchPublicMusic";
//   import MainContentContainer from "../common/MainContentContainer";
//   import MusicCardArea from "../common/MusicCardArea";
//   import MusicCardContainer from "../common/MusicCardContainer";
//   import MusicCard from "../common/MusicCard";
//   import MusicCreate from "./MusicCreate";
  
//   const MusicIndex = (props) => {
//     const [music, setMusic] = useState([]);
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
//           const { status, json } = await fetchPublicMusic(sessionToken);
//           if (status === 200) {
//             if (mounted) {
//               setMusic(json);
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
//               Add Music
//             </Button>
//             <MusicCreate open={open} setOpen={setOpen} />
//           </Container>
//           <Divider flexItem />
//           <MusicCardArea>
//             {music.map((music) => (
//               <MusicCardContainer key={music.id}>
//                 <MusicCard music={music} />
//               </MusicCardContainer>
//             ))}
//           </MusicCardArea>        
//         </MainContentContainer>
//       </>
//     );
//   };
  
//   export default MusicIndex;
  
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
//import fetchPublicMusic from '../../requests/fetchPublicMusic';
import APIURL from '../../helpers/environment';
import MusicCreate from './MusicCreate';
//import { AuthContext } from '../../auth/AuthContext';
import MusicTable from './MusicTable';
import MusicEdit from './MusicEdit';


class MusicIndex extends Component {

constructor(props) {
  super(props)
  this.state = {
    music: [],
    updatePressed: false,
    musicToUpdate: {}
  }
}

componentDidMount() {
  this.fetchMyMusic()
}

fetchMyMusic = () => {
   fetch(`${APIURL}/music/get`, {
      method: 'GET',
      headers: new Headers({
          'Content-Type': 'application/json',
          'Authorization': this.props.token
      })
  })
  .then((res) => res.json())
  .then((musicData) => {
    return this.setState({ music: musicData})
  })
}

deleteMyMusic = (event) => {
  fetch(`${APIURL}/music/${event.target.id}`, {
    method: 'DELETE',
    body: JSON.stringify({music: {id: event.target.id } }),
    headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': this.props.token
    })
})
    .then((res) =>  this.fetchMyMusic())
}

updateMyMusic = (event, music) => {
  fetch(`${APIURL}/music/${music.id}`, {
    method: 'PUT',
        body: JSON.stringify({
            music: music
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
            'Authorization': this.props.token
        })
    })
    .then ((res) => {
      this.setState({ updatePressed: false})
      this.fetchMyMusic();
    })
  }

setUpdatedMusic = (event, music) => {
  this.setState ({
    musicToUpdate: music,
    updatePressed: true
  })
}


componentDidMount() {
  this.fetchMyMusic()
}

render () {
  const music = this.state.music.length >=1 ?
  <MusicTable music={this.state.music}
  delete={this.musicDelete} update={this.setUpdatedMusic} /> : 
  <h2>Your Media Library</h2>
  return (
    <Container>
      <Row>
        <Col md="3">
          <MusicCreate token={this.props.token} updateMusicArray={this.fetchMyMusic} />
        </Col>
        <Col md="9">
          {music}
          </Col>
          </Row>
         <Col md="12">
           {
             this.state.updatePressed ? <MusicEdit t={this.state.updatePressed} update={this.updateMyMusic} music={this.state.musicToUpdate} />
           : <div></div>
            } 
        </Col>
     
    </Container>
  )
}
}

export default MusicIndex;