import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelectore} from "../../hooks/reduxHooks";
import {movieServices} from "../../services/movieServices";
import {MovieAction} from "../../redux/slices/MovieSlices";
import {useSearchParams} from "react-router-dom";

import Movie from "./Moviests";
import style from "./Movie.module.css"

export const Moviest = () => {

    const{movies}=useAppSelectore(state => state.movie)
    const dispatch=useAppDispatch()

    useEffect(()=>{

            dispatch(MovieAction.getAll(pages));




    })
    const [query,setQuery]=useSearchParams()
    const pages = Number(query.get('page')) || 1;
const with_genres=Number(query.get('with_genres')) || 1;
    const nextPage = () => {
        const nextPageNumber = pages + 1;
        setQuery({ page: nextPageNumber.toString() });
    };
    const prevPage = () => {
        const prevPageNumber = Math.max(pages - 1, 1).toString(); // Конвертуємо в рядок
        setQuery({ page: prevPageNumber });
    }


    return (
        <div>
            <div className={style.title}>
                {movies.results.map(movie => <Movie key={movie.id} movie={movie}/>)}

            </div>
            <div className={style.buton}>
                <button onClick={prevPage}>Prev</button>
                <button onClick={nextPage}>Next</button>

            </div>
        </div>
    );
};

    export default Moviest;