import {axiosInstance} from "./axios-config";

const getGenres = async () => {
    const {data} = await axiosInstance.get(`/genre/movie/list`);
    return data
};

export {
    getGenres
}