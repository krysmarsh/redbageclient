import { Grid } from '@material-ui/core';

const MusicCardArea = ({ children }) => {
    return (
           <Grid container spacing={4} sx={{ py: 3 }}>{children}</Grid> 
    )
}

export default MusicCardArea;