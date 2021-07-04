import './App.css';
import {getMovies, getMoviesList} from "./services";
import {useEffect, useState} from "react";
import {MoviesList} from "./components";
import {Route, Switch} from "react-router-dom";
import {MovieInfo} from "./components";
import {getGenres} from "./services/genres-service";
import {Header} from "./components";
import {ThemeButton} from "./components";

//todo Зробити isLoading загрузку і пагінацію і сторінку Home

function App() {

    const [moviesList, setMoviesList] = useState([]);
    const [theme, setTheme] = useState('light');

    const getAllData = async (value) => {
        const [{results}, {genres}] = await Promise.all([value ? getMovies(value) : getMoviesList(), getGenres()]);
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
            <ThemeButton theme={ theme } toggleTheme={ toggleTheme }/>
            <Header getAllData={ getAllData }/>
            <Switch>
                <Route path={ `/movies/:id` } component={ MovieInfo }/>
                <Route path={ `/movies` } render={ (props) =>
                    <MoviesList theme={ theme } { ...props } moviesList={ moviesList || [] }/> }/>
            </Switch>

        </div>
    );
}

export default App;
