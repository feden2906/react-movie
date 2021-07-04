import {MovieListCard} from "../movie-list-card";
import classes from './MoviesList.module.css';

export const MoviesList = ({theme, moviesList, match: {url}}) => {

    return (
        <div className={ classes.movieListItems }>
            { moviesList.map((movie) => <MovieListCard theme={ theme } url={ url } key={ movie.id } movie={ movie }/>) }
        </div>
    );
};


