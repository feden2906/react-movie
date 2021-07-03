import {axiosInstance} from "./axios-config";


const getMoviesList = async () => {
    const {data} = await axiosInstance.get(`discover/movie`);
    return data;
};

const getMovieDetails = async (movieId) => {
    const {data} = await axiosInstance.get(`/movie/${ movieId }`);
    return data;
};

const getMovies = async (value) => {
    const {data} = await axiosInstance.get(`/search/movie`, {
        params: {
            query: value
        }
    });
    return data;
}

export {
    getMoviesList,
    getMovieDetails,
    getMovies
}