import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieDetails} from "../../services";
import {PosterPreview} from "../poster-preview";
import styles from './MovieInfo.module.css'
import {GenreBadge} from "../genre-badge";

export const MovieInfo = () => {
    let [movie, setMovie] = useState(null);

    let {id} = useParams();
    useEffect(() => {
        getMovieDetails(id).then(data => setMovie(data));
    }, [id]);
    console.log(movie);
    return (
        movie && <div className={ styles.item }>
            <h2>{ movie.original_title }</h2>
            <PosterPreview movieId={ id }
                           width={ 500 }
                           imageUrl={ movie.poster_path }
                           movieName={ movie.original_title }/>
            <GenreBadge genres={ movie.genres }/>
            <a href={ movie.homepage }>Link to watch</a>
            <div>
                <b>Description: </b>
                <p>{ movie.overview }</p>
            </div>
        </div>
    );
};

