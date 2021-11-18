// import React, { useState } from "react";
// import {
//   Modal,
//   TextField,
//   Button,
//   Checkbox,
//   InputAdornment,
//   Box,
//   FormControlLabel,
//   MenuItem,
//   IconButton,
//   Grid,
// } from "@material-ui/core";
// import CloseIcon from "@material-ui/icons/Close";
// import { useSession } from "../../context/sessionContext";
// import createMyMusic from "../../requests/createMyMusic";
// import ImageUpload from "./ImageUpload";

// const MusicCreate = (props) => {
//   const [artist, setCategory] = React.useState("");
//   const [genre, setName] = useState("");
//   const [songs, setDirections] = useState("");
//   const [album, setCookTime] = useState("");
//   // const [servings, setServings] = useState("");
//   const [photoURL, setPhotoURL] = useState("");
//   const [isPublic, setIsPublic] = useState(false);
//   const { sessionToken } = useSession();
//   const foodCategories = [
//     { value: "breakfast", label: "Breakfast" },
//     { value: "lunch", label: "Lunch" },
//     { value: "dinner", label: "Dinner" },
//     { value: "dessert", label: "Dessert" },
//   ];

//   const handleClose = () => {
//     props.setOpen(false);
//   };
//   const handleChange = e => {
//     setCategory(e.target.value);
//   }
//   const handleCreateMusicClick = async (e) => {
//     try {
//       const { status, json } = await createMyMusic(
//         {
//           artist: artist,
//           genre: genre,
//           songs: songs,
//           album: album,
//           isPublic: isPublic,
//           photoURL: photoURL,
//        //   userId: userId,
//         },
//         sessionToken
//       );
//       if (status === 200) {
//         handleClose();
//       }

//       else if (status === 500) {
//         e.preventDefault();
//       }
//     } catch (error) {
//       e.preventDefault();
//     }
//   };
//   return (
//     <Modal
//       open={props.open}
//       onClose={handleClose}
//       aria-labelledby="simple-modal-title"
//       aria-describedby="simple-modal-description"
//     >
//       <Box
//         sx={{
//           position: "absolute",
//           top: "50%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           width: "800",
//           height: "800",
//           maxwidth: "lg",
//           maxHeight: "100%",
//           bgcolor: "background.paper",
//           borderRadius: 5,
//           boxShadow: 24,
//           p: 4,
//         }}
//       >
//         <IconButton
//           aria-label="close"
//           type='button'
//           onClick={handleClose}
//           sx={{
//             position: "absolute",
//             right: 8,
//             top: 8,
//             color: "info.main",
//           }}
//         >
//           <CloseIcon />
//         </IconButton>

//         <h2>Add Music</h2>

//         <TextField
//           sx={{ my: 1, mr: 2, width: "25ch" }}
//           onChange={(e) => setName(e.target.value)}
//           label="Artist Name"
//           color="info"
//           required
//           value={artist}
//           variant="filled"
//         ></TextField>
//         {/* <TextField
//           sx={{ my: 1, width: "25ch" }}
//           select
//           label="Select"
//           value={category}
//           onChange={handleChange}
//           helperText="Please select your category"
//           variant="filled"
//           color="info"
//         >
//           {foodCategories.map((option) => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </TextField> */}
//         {/* /* <TextField
//           fullWidth
//           sx={{ my: 1 }}
//           onChange={(e) => setDirections(e.target.value)}
//           label="Enter directions"
//           value={directions}
//           multiline
//           rows={10}
//           required
//           color="info"
//           variant="filled"
//         ></TextField>  */}
//         <TextField
//           sx={{ my: 1, mr: 2, width: "25ch" }}
//           onChange={(e) => setCookTime(e.target.value)}
//           label="Songs"
//           id="Songs"
//           // InputProps={{
//           //   endAdornment: (
//           //     <InputAdornment position="end">Mins</InputAdornment>
//           //   ),
//           // }}
//           color="info"
//           variant="filled"
//         />
//         {/* <TextField
//           sx={{ my: 1, width: "25ch" }}
//           onChange={(e) => setServings(e.target.value)}
//           label="Serving Size"
//           id="ServingSize"
//           color="info"
//           variant="filled"
//         /> */}
//         <FormControlLabel
//           value=""
//           control={
//             <Checkbox
//               onChange={(e) => setIsPublic(e.target.checked)}
//               checked={isPublic}
//               color="secondary"
//             />
//           }
//           label="Make music selection public?"
//           sx={{ display: "flex", alignItems: "flex-center", my: 1 }}
//           defaultChecked
//           inputprops={{ "aria-label": "secondary checkbox" }}
//         />
//         <ImageUpload setPhotoURL={setPhotoURL} />
//         <br />
//         <div>
//           <Grid container spacing={2} sx={{ mt: 1 }}>
//             <Grid item xs={6}>
//               <Button                
//                 fullWidth
//                 id="modal-description"
//                 color="secondary"
//                 variant="contained"
//                 onClick={handleCreateMusicClick}
//               >
//                 Post Music
//               </Button>
//             </Grid>
//             <Grid item xs={6}>
//               <Button                
//                 fullWidth
//                 id="modal-description"
//                 color="secondary"
//                 variant="outlined"
//                 type='button'
//                 onClick={handleClose}
//               >
//                 Cancel
//               </Button>
//             </Grid>
//           </Grid>
//         </div>
//       </Box>
//     </Modal>
//   );
// };

// export default MusicCreate;














import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
//import { AuthContext } from '../../auth/AuthContext';
import APIURL from '../../helpers/environment';
//import { Button, Form } from 'antd';

class MusicCreate extends Component {
  constructor(props) {
    super(props)
    this.state = {
      id: '',
      artist: '',
      genre: '',
      songs: '',
      album: '',
      isPublic: '',
      photoURL: '',
      category: '',
    };
  }
handleChange = (event) => {
  this.setState({
    [event.target.name] : event.target.value
  })
}
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
    console.log(this.props)
    fetch(`${APIURL}/music/create`, {
      method: 'POST',
      body: JSON.stringify({
        music: this.state
    }),
    headers: new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.props.token
  })
})
  .then((res) => res.json())
  .then((musicData) => {
    this.props.updateMusicArray();
    this.setState({
      id: '',
      artist: '',
      genre: '',
      songs: '',
      album: '',
      isPublic: '',
      photoURL: '',
      category: '',
    })
  })
}     
  render () {
    return (
      <div>
        <h3> Add Media </h3>
        <hr />
        <Form onSubmit={this.handleSubmit} >
          <FormGroup>
            <Label for="artist">Artist</Label>
            <Input id="artist" type="text" name="artist" value={this.state.artist} 
            placeholder="enter artist" onChange={this.handleChange} />
          </FormGroup>
          
          <FormGroup>
            <Label for="genre">Genre</Label>
            <Input type="text" name="genre" id="genre" value={this.state.genre} placeholder="genre" onChange={this.handleChange} />
              </FormGroup>

            <FormGroup>
              <Label for="songs">Songs</Label>
              <Input type="text" name="songs" id="songs" value={this.state.songs}
              placeholder="songs" onChange={this.handleChange} />
              </FormGroup> 

            <FormGroup>
              <Label for="album">Album</Label>
              <Input type="text" name="album" id="album" value={this.state.album}
              placeholder="album" onChange={this.handleChange} />
            </FormGroup>

            {/* <FormGroup>
              <Label for="isPublic">Share?</Label>
              <Input type="text" name="isPublic" id="isPublic" value={this.state.isPublic}
              placeholder="" onChange={this.handleChange} />
              </FormGroup> */}

              {/* <FormGroup>
              <Label for="isPublic">Share?</Label>
              <Input type="option" name="isPublic" id="isPublic" value={this.state.isPublic}
              placeholder="" onChange={this.handleChange} >
              <option></option>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
              </Input>
              </FormGroup> */}







{/* <FormGroup class name="mb-3">
              <Form.Check
                  required
                  label="Share?"
                  feedback="C"
              <Input type="option" name="isPublic" id="isPublic" value={this.state.isPublic}
              placeholder="" onChange={this.handleChange} >
              <option></option>
        
              </Input>
              </FormGroup> */}
            
              {/* <FormGroup controlId="photoURL" className="mb-3">
              <Form.Label>Add Image</Form.Label>
              <Form.Control type="file" /> */}

              {/* <FormGroup>
              <Input type="text" name="album" id="photoURL" value={this.state.photoURL}
              placeholder="photo" onChange={this.handleChange} />
            </FormGroup> */}

            <FormGroup>
            <Label for="category">Category</Label>
            <Input type="select" name="category" id="category" value={this.state.category}
              placeholder="category" onChange={this.handleChange} >
              <option></option>
              <option value="Music">Music</option>
              <option value="Tvshow">TV Show</option>
              <option value="Movies">Movies</option>
              </Input>
              </FormGroup>

            <Button type="submit" color="primary"> Submit </Button>
          
        </Form>
      </div>
    )
  }
}

export default MusicCreate;