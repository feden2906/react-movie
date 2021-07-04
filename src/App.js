import './App.css';
import {getMovies, getMoviesList} from "./services";
import {useEffect, useState} from "react";
import {MoviesList} from "./components";
import {Route, Switch} from "react-router-dom";
import {MovieInfo} from "./components";
import {getGenres} from "./services";
import {Header} from "./components";
import {ThemeButton} from "./components";
import {Pagination} from "./components";

//todo Зробити isLoading загрузку, пагінацію, додати фільтри фільмів, сторінку Home і нормально застилізувати

function App() {

    const [moviesList, setMoviesList] = useState([]);
    const [theme, setTheme] = useState('light');
    let [currPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const nextPage = () => {
        setCurrentPage(++currPage);
    };

    const prevPage = () => {
        setCurrentPage(--currPage);
    };

    const getAllData = async (currPage, value) => {
        debugger;
        const [{
            page,
            results,
            total_pages
        }, {genres}] = await Promise.all([value ? getMovies(currPage, value) : getMoviesList(currPage), getGenres()]);

        setTotalPages(total_pages);

        if (currPage === page) {
            setCurrentPage(page);
        }

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
        getAllData(currPage);
    }, [currPage]);


    const toggleTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light');

    return (
        <div className={ theme }>
            <ThemeButton theme={ theme } toggleTheme={ toggleTheme }/>
            <Header getAllData={ getAllData } currPage={ currPage }/>
            <Switch>
                <Route path={ `/movies/:id` } component={ MovieInfo }/>
                <Route path={ `/movies` } render={ (props) =>

                    <Pagination currPage={ currPage }
                                totalPages={ totalPages }
                                nextPage={ nextPage }
                                prevPage={ prevPage }>
                        <MoviesList theme={ theme } { ...props } moviesList={ moviesList || [] }/>
                    </Pagination>
                }/>
            </Switch>
        </div>
    );
}

export default App;
