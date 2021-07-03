import React from 'react';
import {Badge} from 'reactstrap';
import './GenreBadge.css';

const GenreBadge = ({genres}) => {
    return (
        genres ?
            <div>
                {
                    genres.map((genre) => {
                        return <Badge key={ genre.id }
                                      className={ genre.name
                                          .replaceAll(' ', '')
                                          .toLowerCase() }>{ genre.name }</Badge>
                    })
                }
            </div> : <div></div>
    );
}

export default GenreBadge;