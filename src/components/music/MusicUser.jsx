import { useEffect, useState } from 'react';
import {
    Typography,
} from '@material-ui/core';
import fetchPublicMusicByUsername from '../../requests/fetchPublicMusicByUsername';
import { useParams } from 'react-router-dom';
import MainContentContainer from '../common/MainContentContainer';
import MusicCardArea from '../common/MusicCardArea'
import MusicCard from '../common/MusicCard'
import MusicCardContainer from '../common/MusicCardContainer'
const MusicUser = () => {
    const [music, setMusic] = useState([]);
    const { username } = useParams();

    useEffect(() => {
        (async () => {
            const { json, status } = await fetchPublicMusicByUsername(
                username
            );
            if (status === 200) {
                setMusic(json.music);
            }
        })();
    }, [username]);
    return (
        <MainContentContainer>
            <Typography variant="h2" color="secondary.dark" align="center">
                {username}'s music:
            </Typography>
            <MusicCardArea>
                {music.map(music => (
                    <MusicCardContainer key={music.id}>
                        <MusicCard Music={music} />
                    </MusicCardContainer>
                ))}
            </MusicCardArea>
        </MainContentContainer>
    );
};

export default MusicUser;
