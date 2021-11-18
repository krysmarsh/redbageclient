export const BoxContainerSx = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxHeight: '100%',
    bgcolor: 'neutral.light',
    borderRadius: 5,
    boxShadow: 24,
    p: 4,
};

export const BoxFormSx = {
    '& .MuiTextField-root': {
        m: 2,
        width: '40ch',

    },
    textAlign: 'center',
};









// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';
// import Signup from './Register';
// import Login from './Login';
// import './auth.css';

// const Auth = (props) => {
//     return (
//         <Container className="auth-container">
//             <Row>
//                 <Col md="6">
//                     <Signup setToken={props.setToken} />
//                 </Col>
//                 <Col md="6" className="login-col">
//                     <Login setToken={props.setToken} />
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Auth;


// import React from 'react';
// import { Container, Row, Col } from 'reactstrap';


// const Auth = () => {
//     return (
//         <Container>
//             <Row>
//                 <Col md="6">
//                   <div>Sign up</div>
//                 </Col>
//                 <Col md="6">
//                 <div></div>
//                 </Col>
//             </Row>
//         </Container>
//     )
// }

// export default Auth;
