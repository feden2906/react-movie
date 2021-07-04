import React from 'react';
import {Badge} from 'reactstrap';
import styles from './GenreBadge.module.css';

export const GenreBadge = ({genres}) => {

    return (<div className={ styles.container }>
            { genres && genres.map((genre) => {
                const genreStyle = genre.name
                    .replaceAll(' ', '')
                    .toLowerCase();
                return <Badge key={ genre.id }
                              className={ styles[genreStyle] }>{ genre.name }</Badge>
            }) }
        </div>
    );
};

