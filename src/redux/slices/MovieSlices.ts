// slices/movieSlice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { movieServices } from "../../services/movieServices";
import { IMovie, IMovieEntries } from "../../interfaces/movieInterfaces";

interface IState {
    movies: IMovieEntries;

}

const initialState: IState = {
    movies: {
        page: 1,
        results: [],
        total_pages: 0,
        total_results: 0,
    },

};





const getAll = createAsyncThunk<IMovieEntries,number>(
    'movieSlice/getAll',
    async (page, { rejectWithValue }) => {
        try {
            const { data } = await movieServices.getAll(page);
            return data;
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);

const getMovieById = createAsyncThunk< IMovieEntries, number>(
    'movieSlice/getMovieById',
    async (id, { rejectWithValue }) => {
        try {
const {data}=await movieServices.getById(id)
            return data
        } catch (e) {
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
);
const getMovieBygenres=createAsyncThunk<IMovieEntries,number>(
    'movieSlice/getMovieBygenres',
    async(with_genres,{rejectWithValue})=>{
        try {
            const {data}=await movieServices.getBygenres(with_genres)
            return data
        }catch (e){
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const movieSlice = createSlice({
    name: 'MovieSlice',
    initialState,
    reducers: {},
    extraReducers: (builder) =>
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMovieById.fulfilled, (state, action) => {
                state.movies = action.payload;
            })
            .addCase(getMovieBygenres.fulfilled,(state, action)=>{
                state.movies=action.payload
            })
});


const { reducer: movieReducer, actions } = movieSlice;
const MovieAction = {
    ...actions,
    getAll,
    getMovieById,
    getMovieBygenres

};
export {
    MovieAction,
    movieReducer,
};
