import './App.css';
import {getMovies, getMoviesList} from "./services";
import {useEffect, useState} from "react";
import MoviesList from "./components/movies-list/MoviesList";
import {Route, Switch} from "react-router-dom";
import MovieInfo from "./components/movie-info/MovieInfo";
import {getGenres} from "./services/genres-service";
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./components/header/Header";


function App() {
    const [moviesList, setMoviesList] = useState([]);
    const [theme, setTheme] = useState('light');

    const getAllData = async (value) => {
        if (value) {
            const [moviesData, {genres}] = await Promise.all([getMovies(value), getGenres()]);
            const {results} = moviesData;
            const moviesWithGenres = results.map((movie) => {
                movie.movieGenres = [];
                genres.find((genre) => {
                    movie.genre_ids.find((id) => {
                        if (genre.id === id) {
                            movie.movieGenres.push(genre);
                        }
                    });
                });
                return movie;
            });
            setMoviesList(moviesWithGenres);
            return;
        }

        const [moviesData, {genres}] = await Promise.all([getMoviesList(), getGenres()]);
        const {results} = moviesData;
        const moviesWithGenres = results.map((movie) => {
            movie.movieGenres = [];
            genres.find((genre) => {
                movie.genre_ids.find((id) => {
                    if (genre.id === id) {
                        movie.movieGenres.push(genre);
                    }
                });
            });
            return movie;
        });
        setMoviesList(moviesWithGenres);
    }


    useEffect(() => {
        getAllData();
    }, []);
    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

    return (
        <div className={ theme }>
            { theme === "light" ?
                <button onClick={ () => {toggleTheme();} }>Night</button>
                : <button onClick={ () => {toggleTheme();} }>Day</button>
            }
            <Header getAllData={ getAllData }/>
            <Switch>
                <Route path={ `/movies/:id` } component={ MovieInfo }/>
                <Route path={ `/movies` } render={ (props) =>
                    <MoviesList { ...props } moviesList={ moviesList || [] }/> }/>
            </Switch>

        </div>
    );
}

export default App;
