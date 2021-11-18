// import React, { useState } from 'react';
// import { Box, Button, Grid, Modal, useMediaQuery } from '@material-ui/core';
// import Toolbar from '@material-ui/core/Toolbar';
// import { useSession } from '../../context/sessionContext';
// import Login from '../auth/Login';
// import Register from '../auth/Register';
// import { Link, useHistory } from 'react-router-dom';
// import IconButton from '@material-ui/core/IconButton';
// import Avatar from '@material-ui/core/Avatar';
// //import Mascot from '../../assets/images/clickncook_logomark.svg';
// import DrawerComponent from '../DrawerComponent/DrawerComponent';

// const NavBar = () => {
//     const { sessionToken, setSessionToken } = useSession();

//     const history = useHistory();
//     const handleLogout = (e) => {
//         setSessionToken();
//         history.push('/');
//     };

//     const [modalIsOpen, setModalIsOpen] = useState(false);
//     const [modalComponent, setModalComponent] = useState();

//     const openModal = () => setModalIsOpen(true);
//     const closeModal = () => {
//         setModalIsOpen(false);
//         setModalComponent('');
//     };
//     const handleClick = (name) => (e) => {
//         setModalComponent(name);
//         openModal();
//     };

//     const isMatch = useMediaQuery('(max-width:1000px)');

//     const renderModalComponent = (component) => {
//         switch (component) {
//             case 'Login':
//                 return (
//                     <Login
//                         closeModal={closeModal}
//                         setModalComponent={setModalComponent}
//                     />
//                 );
//             case 'Register':
//                 return (
//                     <Register
//                         closeModal={closeModal}
//                         setModalComponent={setModalComponent}
//                     />
//                 );
//             default:
//                 return <></>;
//         }
//     };
//     return (
//         <Box sx={{ flex: '0 1 auto' }}>
//             <Toolbar
//                 sx={{
//                     backgroundColor: 'secondary.main',
//                     minHeight: 100,
//                 }}
//                 >
//                 {isMatch ? (
//                     <DrawerComponent />
//                 ) : (             

//                     <>
//                     <Grid container spacing={2}>
//                         <Grid item container xs={6}>
//                             <Box
//                                 sx={{
//                                     display: 'flex',
//                                     alignItems: 'center',
//                                 }}
//                             >
//                                 <Link to="/">
//                                     <Box
//                                         component="img"
//                                         sx={{
//                                             width: 50,
//                                             maxHeight: { xs: 233, md: 167 },
//                                         //    maxwidth: { xs: 350, md: 250 },
//                                         }}
//                                         // alt="Clickin the Chicken"
//                                         // src={Mascot}
//                                     />
//                                 </Link>
//                             </Box>
//                             <Button
//                                 variant="text"
//                                 color="primary"
//                                 sx={{ cursor: 'default' }}
//                                 disableRipple
//                             >
//                                 <Link
//                                     className="router-button"
//                                     to="/category/music"
//                                 >
//                                     Music
//                                 </Link>
//                             </Button>
//                             <Button
//                                 variant="text"
//                                 color="primary"
//                                 sx={{ cursor: 'default' }}
//                                 disableRipple
//                             >
//                                 <Link
//                                     className="router-button"
//                                     to="/category/tvshows"
//                                 >
//                                     TV Shows
//                                 </Link>
//                             </Button>
//                             <Button
//                                 variant="text"
//                                 color="primary"
//                                 sx={{ cursor: 'default' }}
//                                 disableRipple
//                             >
//                                 <Link
//                                     className="router-button"
//                                     to="/category/movies"
//                                 >
//                                     Movies
//                                 </Link>
//                             </Button>
//                             {/* <Button
//                                 variant="text"
//                                 color="primary"
//                                 sx={{ cursor: 'default' }}
//                                 disableRipple
//                             >
//                                 <Link
//                                     className="router-button"
//                                     to="/category/dessert"
//                                 >
//                                     Dessert
//                                 </Link>
//                             </Button> */}
//                         </Grid>
//                         <Grid
//                             item
//                             container
//                             xs={6}
//                             sx={{
//                                 justifyContent: 'flex-end',
//                                 alignItems: 'center',
//                             }}
//                         >
//                             <Grid item>
//                                 {sessionToken ? (
//                                     <>
//                                         <Button
//                                             color="secondary"
//                                             variant="contained"
//                                             sx={{
//                                                 border: 2,
//                                                 '&:hover': {
//                                                     color: 'secondary.main',
//                                                     backgroundColor:
//                                                         'white',
//                                                 },
//                                             }}
//                                             onClick={handleLogout}
//                                         >
//                                             Logout
//                                         </Button>
//                                         <IconButton>
//                                             <Link to="/profile">
//                                                 <Avatar src="" />
//                                             </Link>
//                                         </IconButton>
//                                     </>
//                                 ) : (
//                                     <>
//                                         <Modal
//                                             open={modalIsOpen}
//                                             aria-labelledby="modal-title"
//                                             aria-describedby="modal-description"
//                                         >
//                                             {
//                                                 <div>
//                                                     {renderModalComponent(
//                                                         modalComponent
//                                                     )}
//                                                 </div>
//                                             }
//                                         </Modal>
//                                         <Button
//                                             color="secondary"
//                                             variant="contained"
//                                             sx={{
//                                                 border: 2,
//                                                 '&:hover': {
//                                                     color: 'secondary.main',
//                                                     backgroundColor:
//                                                         'white',
//                                                 },
//                                             }}
//                                             onClick={handleClick('Login')}
//                                         >
//                                             Login
//                                         </Button>
//                                         <Button
//                                             color="secondary"
//                                             variant="contained"
//                                             sx={{
//                                                 border: 2,
//                                                 '&:hover': {
//                                                     color: 'secondary.main',
//                                                     backgroundColor:
//                                                         'white',
//                                                 },
//                                             }}
//                                             onClick={handleClick(
//                                                 'Register'
//                                             )}
//                                         >
//                                             Register
//                                         </Button>
//                                     </>
//                                 )}
//                             </Grid>
//                         </Grid>
//                     </Grid>
//                 </>
//             )}
//         </Toolbar>
//     </Box>
// );
// };

// export default NavBar;














import React, { Component } from 'react';
import {
    Navbar,
    NavbarBrand,
    Collapse,
    Nav,
    NavItem,
    Button,
    NavbarToggler
} from 'reactstrap';
import './navbar.css';
import { Link } from 'react-router-dom';

class SiteBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        };
            
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <div>
                <Navbar color = "faded" light expand="lg">
                    {/* <NavbarBrand href="/">Add Your Media</NavbarBrand> */}
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            
                            <NavItem>
                            {/* <Button href="/">
                            Your media</Button>
                            </NavItem>
                            <NavItem>
                            <Button
                            //  link to="/category/music"
                             >Music</Button>
                            </NavItem>
                            <NavItem>
                            <Button 
                            // link to="/category/tvshows"
                            >TV Shows</Button>
                            </NavItem>
                            <NavItem>
                            <Button
                            link to="http://localhost:3000/movies/"
                             >Movies</Button> */}
                            </NavItem>
                            <NavItem>
                            <Button onClick={() => this.props.clickLogout()}>Logout</Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default SiteBar;
