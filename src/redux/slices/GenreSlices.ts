import {GenreEntires} from "../../interfaces/GenreInterfaces";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {AxiosError} from "axios/index";
import {genreServices} from "../../services/genreServices";

interface IState{
    genres:GenreEntires;
}

const initialState:IState={
    genres:{
        genres:[]
    }
}
const getAll=createAsyncThunk<GenreEntires,void>(
    'genreSlice/getAll',
    async (_,{rejectWithValue})=>{
        try {
            const {data}=await genreServices.getAll()
            return data
        }catch (e){
            const err = e as AxiosError;
            return rejectWithValue(err.response?.data);
        }
    }
)

const genreSlice=createSlice({
    name:'genreSlice',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(getAll.fulfilled, (state, action) => {
                state.genres=action.payload
            })

    }
})
const {reducer:genreReducer,actions}=genreSlice

const genreAction={
    ...actions,
    getAll
}

export {
    genreAction,
    genreReducer
}