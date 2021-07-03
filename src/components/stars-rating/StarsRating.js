import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function StarsRating({movieRaiting}) {
    return (
        <div>
            <Box component="fieldset" mb={ 3 } borderColor="transparent">
                <Typography component="legend">{ movieRaiting } of 10 stars</Typography>
                <Rating readOnly name="customized-10" defaultValue={ movieRaiting } max={ 10 }/>
            </Box>
        </div>
    );
}

