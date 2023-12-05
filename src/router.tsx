import {createBrowserRouter, Navigate} from "react-router-dom";
import MainLayaout from "./components/MainLayaout";

import Movies from "./components/MoviesContainer/Movies";
import MoviePage from "./pages/MoviePage";
import MovieInfo from "./components/MoviesContainer/MovieInfo";
import Moviest from "./components/MoviesContainer/Moviest";
import Genres from "./components/GenresContainer/Genres";




const router= createBrowserRouter([
    {path:'', element:<MainLayaout/>,children:

            [
                {index: true,element:<Navigate to={"movie"}/>},
                {path:'movie', element:<Moviest/>},
                {path:'movieInfo/:id',element:<MovieInfo/>},
                {path:'genre',element:<Genres/>},
                {path:"movies", element:<Movies />}
            ]}
]);


export {router}