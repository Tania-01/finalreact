import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelectore} from "../../hooks/reduxHooks";
import {genreAction} from "../../redux/slices/GenreSlices";
import Genred from "./Genre";
import css from './genre.module.css'

const Genres = () => {
    const {genres}=useAppSelectore(state => state.genre)
    const dispatch=useAppDispatch()

    useEffect(()=>{})
    dispatch(genreAction.getAll())

    return (
        <div className={css.cool} >

            {genres.genres.map(genres=><Genred key={genres.id} genre={genres}/>)}
        </div>
    );
};

export default Genres;