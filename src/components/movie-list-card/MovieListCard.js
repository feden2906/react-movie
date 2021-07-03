import classes from './MovieListCard.module.css';
import PosterPreview from "../poster-preview/PosterPreview";
import GenreBadge from "../genre-badge/GenreBadge";
import StarsRating from "../stars-rating/StarsRating";

const MovieListCard = ({movie, url}) => {
    return (
        <div className={ classes.movieItem }>
            <h1>{ movie.title }</h1>
            { movie.backdrop_path && <PosterPreview movieId={ movie.id }
                                                    url={ url }
                                                    imageUrl={ movie.backdrop_path }
                                                    movieName={ movie.title }/> }
            <GenreBadge genres={ movie.movieGenres }/>
            <StarsRating movieRaiting={ movie.vote_average }/>
        </div>
    );
}

export default MovieListCard;
