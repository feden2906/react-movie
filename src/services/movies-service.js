import {axiosInstance} from "./axios-config";


const getMoviesList = async (page) => {
    const {data} = await axiosInstance.get(`discover/movie?page=${ page }`, {
        params: {
            page: page
        }
    });
    return data;
};

const getMovieDetails = async (movieId) => {
    const {data} = await axiosInstance.get(`/movie/${ movieId }`);
    console.log(data);
    return data;
};

const getMovies = async (page, value) => {
    const {data} = await axiosInstance.get(`/search/movie`, {
        params: {
            query: value,
            page: page
        }
    });
    console.log(data);
    return data;
}

export {
    getMoviesList,
    getMovieDetails,
    getMovies
}