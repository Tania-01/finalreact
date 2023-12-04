import {configureStore} from "@reduxjs/toolkit";

import {movieReducer} from "./slices/MovieSlices";
import {genreReducer} from "./slices/GenreSlices";

const store=configureStore({
    reducer: {
        movie:movieReducer,
        genre:genreReducer

    }
})
export {store}