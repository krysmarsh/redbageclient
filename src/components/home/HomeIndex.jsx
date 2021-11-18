// import { useState, useEffect } from 'react';
// //import { useSession } from '../../context/sessionContext';
// import fetchPublicMusic from '../../requests/fetchPublicMusic';
// import HeroSection from './HeroSection';
// import HotMusic from './HotMusic';
// import MainContentContainer from '../common/MainContentContainer';

// const HomeIndex = (props) => {
//     const [music, setMusic] = useState([]);
//     const [error, setError] = useState(false);
//     const [message, setMessage] = useState('');
//     const { sessionToken } = useSession();
//     useEffect(() => {
//         let mounted = true;
//         (async () => {
//             if(sessionToken) {

//             }
//             try {
//                 const { status, json } = await fetchPublicMusic(sessionToken);
//                 if (status === 200) {
//                     if (mounted) {
//                         setMusic(json);
//                         setMessage('');
//                         setError(false);
//                     }
//                 }
//                 if (status === 403) {
//                     if (mounted) {
//                         setMessage(json.message);
//                         setError(true);
//                     }
//                 }
//                 if (status === 404) {
//                     if (mounted) {
//                         setMessage(json.message);
//                         setError(true);
//                     }
//                 }
//             } catch (err) {
//                 if (mounted) {
//                     setMessage(
//                         'Uh-oh something on our end went wrong. Try refreshing to view this page'
//                     );
//                     setError(true);
//                 }
//             }
//         })();
//         return () => { mounted = false };
//     }, [sessionToken]);
//     return (
//         <MainContentContainer noPadding>
//             <HeroSection />
//             <HotMusic music={music} />
//         </MainContentContainer>
//     );
// };
// export default HomeIndex;

// //aka Splash page
import React, { Component } from 'react';
//import { AuthContext } from '../../auth/AuthContext';
import MusicIndex from '../music/MusicIndex';
import MoviesIndex from '../movies/MoviesIndex';

const HomeIndex = (props) => {
    return (
        <div>
            <MusicIndex token={props.sessionToken} />
            {/* <MoviesIndex token={props.sessionToken} /> */}
        </div>
    )
}

export default HomeIndex;