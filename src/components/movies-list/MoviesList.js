import MovieListCard from "../movie-list-card/MovieListCard";
import classes from './MoviesList.module.css';

const MoviesList = ({moviesList, match: {url}}) => {
    console.log(moviesList);
    return (
        <div className={ classes.movieListItems }>
            { moviesList.map((movie) => <MovieListCard url={ url } key={ movie.id } movie={ movie }/>) }
        </div>
    );
}

export default MoviesList;
