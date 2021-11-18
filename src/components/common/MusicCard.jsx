import {
    Card,
    CardActionArea,
    CardMedia,
    Divider,
    CardContent,
    Typography,
    Grid,
} from '@material-ui/core';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { Link } from 'react-router-dom';
const MusicCard = ({ music }) => {
    return (
        <Card sx={{ width: 350, height: 250 }}>
            <CardActionArea sx={{height: '100%'}}>
                <Link className="router-card" to={`/music/${music.id}`}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={music.photoURL}
                        alt={music.name}
                    />
                    <CardContent>
                        <Grid container>
                            <Grid item xs={10}>
                                <Typography variant="h6" component="div" noWrap>
                                    {music.name}
                                </Typography>
                                <Divider sx={{mb: 1}} />
                                <Typography
                                    variant="subtitle1"
                                    color="text.secondary"
                                    noWrap
                                >
                                    {music.category}
                                </Typography>
                            </Grid>
                            <Grid
                                item
                                xs={2}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <VisibilityIcon />
                                <Typography variant="h6">
                                    &nbsp;{music.views}
                                </Typography>
                            </Grid>
                        </Grid>
                    </CardContent>
                </Link>
            </CardActionArea>
        </Card>
    );
};

export default MusicCard;
