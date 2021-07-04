import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import styles from './StarsRating.module.css';

export default function StarsRating({movieRaiting, theme}) {
    console.log(theme);
    return (
        <div>
            <Box component="fieldset" mb={ 3 } borderColor="transparent">
                <Typography className={ theme === 'light' ? styles.dark : styles.light }
                            component="legend">{ movieRaiting } of 10
                    stars</Typography>
                <Rating readOnly name="customized-10" defaultValue={ movieRaiting } max={ 10 }/>
            </Box>
        </div>
    );
}

