// import React, { useState } from 'react';
// import {
//     Box,
//     TextField,
//     Typography,
//     Button,
//     DialogTitle,
//     IconButton,
//     DialogContent,
    
// } from '@material-ui/core';
// import CloseIcon from '@material-ui/icons/Close';
// import userLogin from '../../requests/userLogin';
// import { useSession } from '../../context/sessionContext';
// import { BoxContainerSx, BoxFormSx } from './componentSx'
// import Stack from '@mui/material/Stack';

// const Login = ({ closeModal, setModalComponent }) => {
//     const [username, setUsername] = useState('');
//     const [userError, setUserError] = useState();
//     const [password, setPassword] = useState('');
//     const [passwordError, setPasswordError] = useState();
//     const { setSessionToken } = useSession();

//     const onClose = (e) => {
//         setModalComponent('');
//         closeModal();
//     };
//     const handleLogin = async (e) => {
//         try {
//             const { status, json } = await userLogin({
//                 username: username,
//                 password: password,
//             });
//             // successful login
//             if (status === 200) {
//                 // clear the errors if there are any
//                 setUserError(undefined);
//                 setPasswordError(undefined);

//                 // set the session token, clear the form fields and then close the modal
//                 setUsername('');
//                 setPassword('');
//                 onClose();
//                 setSessionToken(json.sessionToken);
//             }
//             // failed login
//             if (status === 409) {
//                 // set the errors
//                 setUserError(json.emailMessage);
//                 setPasswordError(json.passwordMessage);
//             }
//         } catch (error) {
//             console.log(error);
//         }
//     };
//     return (
//         <Box sx={BoxContainerSx}>
//             <Box
//                 component="form"
//                 sx={BoxFormSx}
//                 noValidate
//                 autocomplete="off"
//             >
//                 <DialogTitle id="modal-title" variant="h2">
//                     Login
//                     <IconButton
//                         aria-label="close"
//                         onClick={onClose}
//                         sx={{
//                             position: 'absolute',
//                             right: 8,
//                             top: 8,
//                             color: 'info.main',
//                         }}
//                     >
//                         <CloseIcon />
//                     </IconButton>
//                 </DialogTitle>
//                 <DialogContent> 
//                     <Stack spacing={5}>
//                         <div>
//                             <TextField
//                                 label="Username"
//                                 value={username}
//                                 color="info"
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 required
//                                 error={userError !== undefined}
//                                 helperText={userError}
//                             />
//                         </div>
//                         <div>
//                             <TextField
//                                 label="Password"
//                                 type="password"
//                                 color="info"
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 required
//                                 error={passwordError !== undefined}
//                                 helperText={passwordError}
//                             />
//                         </div>
//                         <div>
//                             <Button
//                                 sx={{ width: '40ch' }}
//                                 id="modal-description"
//                                 variant="contained"
//                                 color="secondary"
//                                 onClick={async (e) => {await handleLogin()}}
//                             >
//                                 Login
//                             </Button>
//                         </div>
//                         <div>
//                             <Typography>
//                                 Don't have an account with us?{' '}
//                                 <Button
//                                     color="secondary"
//                                     onClick={() =>
//                                         setModalComponent('Register')
//                                     }
//                                 >
//                                     Register
//                                 </Button>
//                             </Typography>
//                         </div>
//                     </Stack>
//                 </DialogContent>
//             </Box>
//         </Box>
//     );
// };

// export default Login;













import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
//import { AuthContext } from '../context/sessionContext';
import APIURL from '../helpers/environment';
//import { withRouter } from "react-router-dom";
//import {browserHistory } from 'react-router';

class Login extends Component {
  
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            passwordhash: ''
        };
    }
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value,
    });
}

handleSubmit = (event) => {
     fetch(`${APIURL}/user/login`, {
        method: 'POST',
        body: JSON.stringify({
            user: this.state
        }),
        headers: new Headers({
            'Content-Type': 'application/json',
        })  
    }).then(
        (response) => response.json()
    ).then((data) => {
   this.props.setToken(data.sessionToken)
    })
    event.preventDefault()    
}

// handleClick = () => {
//     browserHistory.push("/");
// };


    render() {
        return (
            <div>
                <h1>Login</h1>
                <h6>Please login for access to your entertainment</h6>
            
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                        <Label for="username">Username</Label>
                        <Input id="li_username" type="text" name="username" placeholder="enter username" onChange={this.handleChange} />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                        <Input id="passwordhash" type="password" name="passwordhash" placeholder="enter password" onChange={this.handleChange} />
                    </FormGroup>
                    <Button type="submit"> Submit </Button>
                    {/* <button onClick={this.handleClick}> Submit </button> */}
                </Form>
            </div>
        )
    }
}
export default Login;