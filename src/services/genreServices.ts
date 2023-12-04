import {IRes} from "../types/iResType";
import {GenreEntires} from "../interfaces/GenreInterfaces";


import {axiosServices} from "./axiosServices";
import {urls} from "../contants/url";

const genreServices={
  getAll:():IRes<GenreEntires>=>axiosServices .get(urls.budget.base)
}

export {genreServices}