import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMovieDetails} from "../../services";
import PosterPreview from "../poster-preview/PosterPreview";
import styles from './MovieInfo.module.css'

const MovieInfo = () => {
    let [movie, setMovie] = useState(null);
    let {id} = useParams();
    useEffect(() => {
        getMovieDetails(id).then(data => setMovie(data));
    }, [id]);
    return (
        movie && <div className={ styles.item }>
            <h2>{ movie.original_title }</h2>
            <PosterPreview movieId={ id }
                           width={ 500 }
                           imageUrl={ movie.poster_path }
                           movieName={ movie.original_title }/>
            <a href={ movie.homepage }>Link to watch</a>
            <div>
                <b>Description: </b>
                <p>{ movie.overview }</p>
            </div>
        </div>
    );
}

export default MovieInfo;
