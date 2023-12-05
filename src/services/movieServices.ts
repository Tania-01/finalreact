import {IRes} from "../types/iResType";
import {IMovie, IMovieEntries} from "../interfaces/movieInterfaces";



import {axiosServices} from "./axiosServices";
import {urls} from "../contants/url";

const movieServices={
getAll:(page:number):IRes<IMovieEntries>=>axiosServices.get(urls.movie.base,{params: {page:`${page}`}}),
getById:(id:number):IRes<IMovieEntries>=>axiosServices.get(urls.movie.base),
getBygenres:(with_genres:number):IRes<IMovieEntries>=>axiosServices.get(urls.movie.base,{params:{with_genres:`${with_genres}`}})
}

export {movieServices}