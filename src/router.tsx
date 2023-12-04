import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayaout from "./components/MainLayaout";

import MoviePage from "./pages/MoviePage";
import MovieInfo from "./components/MoviesContainer/MovieInfo/MovieInfo";
import Moviest from "./components/MoviesContainer/MovieInfo/Moviest";
import Genres from "./components/GenresContainer/Genres";




const router= createBrowserRouter([
    {path:'', element:<MainLayaout/>,children:

            [
                {index: true,element:<Navigate to={"movie"}/>},
                {path:'movie', element:<Moviest/>},
                {path:'movieInfo/:id',element:<MovieInfo/>},
                {path:'genre',element:<Genres/>}
            ]}
]);


export {router}