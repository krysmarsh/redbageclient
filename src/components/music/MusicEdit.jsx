// import React, { useState, useEffect } from 'react';
// import {
//     Modal,
//     TextField,
//     Button,
//     Checkbox,
//     InputAdornment,
//     Box,
//     FormControlLabel,
//     MenuItem,
//     IconButton,
//     Grid,
// } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// //import { useSession } from '../../context/sessionContext';
// import updateMyMusic from '../../requests/updateMyMusic';
// import ImageUpload from './ImageUpload';

// const MusicEdit = (props) => {
//     const [category, setCategory] = useState(props.music.artist);
//     const [name, setName] = useState(props.music.genre);
//     const [directions, setDirections] = useState(props.music.songs);
//     const [cookTime, setCookTime] = useState(props.music.cookTime);
//     const [servings, setServings] = useState(props.music.servings);
//     const [photoURL, setPhotoURL] = useState(props.music.photoURL);
//     const [isPublic, setIsPublic] = useState(props.music.isPublic);
//  //   const { sessionToken } = useSession();
//     useEffect(() => {
//         setCategory(props.music.category);
//         setName(props.music.name);
//         setDirections(props.music.directions);
//         setCookTime(props.music.cookTime);
//         setServings(props.music.servings);
//         setPhotoURL(props.music.photoURL);
//         setIsPublic(props.music.isPublic);
//     }, [
//         props.music.category,
//         props.music.name,
//         props.music.directions,
//         props.music.cookTime,
//         props.music.servings,
//         props.music.photoURL,
//         props.music.isPublic,
//     ]);
//     const handleChange = (event) => {
//         setCategory(event.target.value);
//     };
//     const foodCategories = [
//         { value: 'breakfast', label: 'Breakfast' },
//         { value: 'lunch', label: 'Lunch' },
//         { value: 'dinner', label: 'Dinner' },
//         { value: 'dessert', label: 'Dessert' },
//     ];

//     const handleClose = () => {
//         props.setOpen(false);
//     };

//     const handleUpdateMusic = async (e) => {
//         try {
//             const { status } = await updateMyMusic(
//                 {
//                     id: props.music.id,
//                     category: category,
//                     name: name,
//                     directions: directions,
//                     cookTime: cookTime,
//                     servings: servings,
//                     isPublic: isPublic,
//                     photoURL: photoURL,
//                 },
//                 sessionToken
//             );
//             if (status === 200) {
//                 handleClose();
//             }
//             else {
//               e.preventDefault();
//             }
//         } catch (error) {
//           e.preventDefault();
//         }
//     };
//     return (
//         <Modal
//             open={props.open}
//             onClose={handleClose}
//             aria-labelledby="simple-modal-title"
//             aria-describedby="simple-modal-description"
//         >
//             {props.open && (
//                 <Box
//                     sx={{
//                         position: 'absolute',
//                         top: '50%',
//                         left: '50%',
//                         transform: 'translate(-50%, -50%)',
//                         width: '800',
//                         height: '800',
//                         maxWidth: '100%',
//                         maxHeight: '100%',
//                         bgcolor: 'background.paper',
//                         borderRadius: 5,
//                         boxShadow: 24,
//                         p: 4,
//                     }}
//                 >
//                     <IconButton
//                         aria-label="close"
//                         onClick={handleClose}
//                         sx={{
//                             position: 'absolute',
//                             right: 8,
//                             top: 8,
//                             color: 'info.main',
//                         }}
//                     >
//                         <CloseIcon />
//                     </IconButton>
//                     <h2>Update Music</h2>
//                     <TextField
//                         sx={{ my: 1, mr: 2, width: '25ch' }}
//                         value={name}
//                         onChange={(e) => setName(e.target.value)}
//                         variant="filled"
//                         label="Enter name of music"
//                         color="info"
//                         required
//                     ></TextField>
//                     <TextField
//                         sx={{ my: 1, width: '25ch' }}
//                         select
//                         label="Select"
//                         defaultValue={category}
//                         value={category}
//                         onChange={handleChange}
//                         helperText="Please select your category"
//                         variant="filled"
//                         color="info"
//                     >
//                         {foodCategories.map((option) => (
//                             <MenuItem key={option.value} value={option.value}>
//                                 {option.label}
//                             </MenuItem>
//                         ))}
//                     </TextField>
//                     <TextField
//                         fullWidth
//                         sx={{ my: 1 }}
//                         value={directions}
//                         onChange={(e) => setDirections(e.target.value)}
//                         variant="filled"
//                         label="Enter directions"
//                         multiline
//                         rows={10}
//                         color="info"
//                         required
//                     ></TextField>
//                     <TextField
//                         sx={{ my: 1, mr: 2, width: '25ch' }}
//                         value={cookTime}
//                         onChange={(e) => setCookTime(e.target.value)}
//                         label="Cook Time"
//                         id="Cook Time"
//                         color="info"
//                         variant="filled"
//                         InputProps={{
//                             endAdornment: (
//                                 <InputAdornment position="end">
//                                     Mins
//                                 </InputAdornment>
//                             ),
//                         }}
//                     />
//                     <TextField
//                         sx={{ my: 1, width: '25ch' }}
//                         value={servings}
//                         onChange={(e) => setServings(e.target.value)}
//                         label="Serving Size"
//                         id="ServingSize"
//                         variant="filled"
//                         color="info"
//                     />
//                     <FormControlLabel
//                         control={
//                             <Checkbox
//                                 value={isPublic}
//                                 onChange={(e) => setIsPublic(e.target.checked)}
//                                 checked={isPublic}
//                                 color="secondary"
//                             />
//                         }
//                         label="Make music public?"
//                         sx={{
//                             display: 'flex',
//                             alignItems: 'flex-center',
//                             m: 1,
//                         }}
//                         defaultChecked
//                         inputProps={{ 'aria-label': 'secondary checkbox' }}
//                     />
//                     <ImageUpload setPhotoURL={setPhotoURL} />
//                     <br />
//                     <div>
//                         <Grid container spacing={2} sx={{ mt: 1 }}>
//                             <Grid item xs={6}>
//                                 <Button
//                                     variant="contained"
//                                     fullWidth
//                                     color="secondary"
//                                     type="submit"
//                                     onClick={handleUpdateMusic}
//                                 >
//                                     Update Music
//                                 </Button>
//                             </Grid>
//                             <Grid item xs={6}>
//                                 <Button
//                                     fullWidth
//                                     color="secondary"
//                                     variant="outlined"
//                                     type="button"
//                                     onClick={handleClose}
//                                 >
//                                     Cancel
//                                 </Button>
//                             </Grid>
//                         </Grid>
//                     </div>
//                 </Box>
//             )}
//         </Modal>
//     );
// };

// export default MusicEdit;


import React from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody } from 'reactstrap';
import APIURL from '../../helpers/environment';
//import ImageUpload from './ImageUpload';
// import CloseIcon from '@material-ui/icons/Close';

class MusicEdit extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            artist: '',
            genre: '',
            songs: '',
            album: '',
            // isPublic: '',
            // photoURL: '',
            category: '',
        };
    }

    componentDidlMount() {
        this.setState({
            id: this.props.music.id,
            artist: this.props.artist.id,
            genre: this.props.genre.id,
            songs: this.props.songs.id,
            album: this.props.album.id,
            // isPublic: this.props.isPublic.id,
            // photoURL: this.props.photoURL.id,
            category: this.props.category.id,
        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.update(event, this.state)
        
    }

    render() {
        return (
            <div>
                <Modal isOpen={true} >
                    <ModalHeader >Update Your Music Library</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleSubmit} >
                            <FormGroup>
                                <Label for="artist">Artist</Label>
                                <Input id="artist" type="text" name="artist" value={this.state.artist} placeholder="Enter Artist" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="genre">Genre</Label>
                                <Input type="select" name="genre" id="genre" value={this.state.genre} onChange={this.handleChange} placeholder="genre">
                                    <option></option>
                                    <option value="Pop">Pop</option>
                                    <option value="RNB">RNB</option>
                                    <option value="Country">Country</option>
                                    <option value="Rap">Rap</option>
                                    <option value="Rock">Rock</option>
                                    <option value="Other">Other</option>
                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="songs">Songs</Label>
                                <Input id="songs" type="text" name="songs" value={this.state.songs} placeholder="songs" onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="album">Albums</Label>
                                <Input id="album" type="text" name="album" value={this.state.album} placeholder="album" onChange={this.handleChange} />
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="isPublic">Share?</Label>
                                <Input id="isPublic" type="text" name="isPublic" value={this.state.isPublic} placeholder="true" onChange={this.handleChange} />
                            </FormGroup> */}
                            {/* <FormGroup>
                                <Label for="photoURL">Add Image</Label>
                                <Input id="photoURL" type="text" name="photoURL" value={this.state.photURL} placeholder="image" onChange={this.handleChange} />
                            </FormGroup> */}
                            <FormGroup>
                                <Label for="category">Category</Label>
                                <Input id="category" type="text" name="category" value={this.state.category} placeholder="category" onChange={this.handleChange} />
                            </FormGroup>
                            <Button type="submit" color="primary"> Submit </Button>
                        </Form>
                    </ModalBody>

                </Modal>

            </div>
        )
    }
}

export default MusicEdit;