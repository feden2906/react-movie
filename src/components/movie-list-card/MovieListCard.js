import classes from './MovieListCard.module.css';
import {PosterPreview} from "../poster-preview";
import {GenreBadge} from "../genre-badge";
import {StarsRating} from "../stars-rating";

export const MovieListCard = ({theme, movie, url}) => {
    return (
        <div className={ classes.movieItem }>
            <h1>{ movie.title }</h1>
            { movie.poster_path && <PosterPreview movieId={ movie.id }
                                                  url={ url }
                                                  width={ 200 }
                                                  imageUrl={ movie.poster_path }
                                                  movieName={ movie.title }/> }
            <GenreBadge genres={ movie.movieGenres }/>
            <StarsRating theme={ theme } movieRaiting={ movie.vote_average }/>
        </div>
    );
};


