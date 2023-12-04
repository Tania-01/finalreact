import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelectore} from "../../hooks/reduxHooks";
import {genreAction} from "../../redux/slices/GenreSlices";
import Genred from "./Genre";
import './Genre.css'
const Genres = () => {
    const {genres}=useAppSelectore(state => state.genre)
    const dispatch=useAppDispatch()

    useEffect(()=>{})
    dispatch(genreAction.getAll())

    return (
        <div className={'main'}>

            {genres.genres.map(genres=><Genred genre={genres}/>)}
        </div>
    );
};

export default Genres;